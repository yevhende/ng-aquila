import { takeUntil } from 'rxjs/operators';
import {Subject } from 'rxjs';
import { coerceBooleanProperty, BooleanInput } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Inject, Input, Renderer2,
  OnDestroy, HostListener, AfterViewInit
} from '@angular/core';

import { NxRadioToggleButtonBaseComponent } from './radio-toggle-button-base.component';
import { NxRadioToggleComponent } from './radio-toggle.component';
import { FocusMonitor } from '@angular/cdk/a11y';

/** @docs-private */
export class NxRadioToggleButtonChange {
  constructor(
    public source: NxRadioToggleButtonComponent,
    public value: any
  ) {}
}

@Component({
  selector: 'nx-radio-toggle-button',
  styleUrls: ['radio-toggle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'radio-toggle-button.component.html',
  providers: [
    {
      provide: NxRadioToggleButtonBaseComponent, useExisting: forwardRef(() => NxRadioToggleButtonComponent)
    }
  ],
  host: {
    '[class.has-error]': '_controlInvalid() || null',
    '[attr.aria-invalid]': '_controlInvalid() || null'
  }
})
export class NxRadioToggleButtonComponent extends NxRadioToggleButtonBaseComponent implements AfterViewInit, OnDestroy {

  /** @docs-private */
  // emits when the button is checked to notify the group
  readonly onChecked = new Subject<NxRadioToggleButtonChange>();

  private _destroyed: Subject<void> = new Subject();
  private _disabled: boolean = false;
  private _selected: boolean = false;

  /** @docs-private */
  @Input('nxDisabled')
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._changeDetectorRef.markForCheck();
  }
  get disabled(): boolean {
    return this._disabled || (this.radioToggle && this.radioToggle.disabled);
  }

  /** Sets the checked state and notify siblings and the parent group about the change */
  // Only use this if you want the onChecked event to be fired, this will inform the parent about the change!
  // To select a button without firing the event use the select() function
  @Input('nxSelected')
  set selected(value: boolean) {
    if (this._selected !== value) {
      this._selected = value;
      if (this._selected) {
        this._notifySiblings();
        this._emitCheckedEvent();
      }

      this._changeDetectorRef.markForCheck();
    }
  }
  get selected(): boolean {
    return this._selected;
  }

  /** Unregister function for _expansionDispatcher. */
  private _removeUniqueSelectionListener: () => void = () => { };

  constructor(
    @Inject(forwardRef(() => NxRadioToggleComponent)) private radioToggle: NxRadioToggleComponent,
    /** @docs-private */
    renderer: Renderer2,
    private _changeDetectorRef: ChangeDetectorRef,
    private _toggleDispatcher: UniqueSelectionDispatcher,
    private _focusMonitor: FocusMonitor) {
    super(renderer);

    this._removeUniqueSelectionListener = this._toggleDispatcher.listen((id: string, radioToggleId: string) => {
      if (this.radioToggle && this.radioToggle.id === radioToggleId && this.id !== id) {
        this._selected = false;
        // need to let change detector know in case that the select() function was called on another button
        this._changeDetectorRef.markForCheck();
      }
    });

    this.radioToggle._disableChange.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this.toggleInput);
  }

  ngOnDestroy() {
    this._removeUniqueSelectionListener();
    this._destroyed.next();
    this._destroyed.complete();
    this._focusMonitor.stopMonitoring(this.toggleInput);
  }

  /** @docs-private */
  get toggleId(): string {
    return this.radioToggle.id;
  }

  /** @docs-private */
  get id(): string {
    return this.toggleButtonId;
  }

  private _notifySiblings() {
    const toggleId = this.radioToggle ? this.radioToggle.id : this.id;
    this._toggleDispatcher.notify(this.id, toggleId);
  }

  private _emitCheckedEvent() {
    this.onChecked.next(new NxRadioToggleButtonChange(this, this.value));
  }

  // Does NOT emit the onChecked event. Useful when you need to set initial
  // state. Used by the parent to set checked states on initialization and during
  // writeValue() changes.
  /** @docs-private */
  select(): void {
    if (!this._selected) {
      this._selected = true;
      this._notifySiblings();
    }

    this._changeDetectorRef.markForCheck();
  }

  /** @docs-private */
  deselect() {
    if (this._selected) {
      this._selected = false;
    }

    this._changeDetectorRef.markForCheck();
  }

  /** @docs-private */
  @HostListener('keyup.space')
  onKeyupSpace(): void {
    this._selected = false;
    this._notifySiblings();
  }

  /** @docs-private */
  _controlInvalid(): boolean {
    return !!(this.radioToggle && this.radioToggle.errorState);
  }

  static ngAcceptInputType_disabled: BooleanInput;
}
