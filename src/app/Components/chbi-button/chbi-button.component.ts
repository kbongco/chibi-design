import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ChibiButtonColor } from 'src/app/enums/chibiButtonEnum';

@Component({
  selector: 'app-chbi-button',
  templateUrl: './chbi-button.component.html',
  styleUrls: ['./chbi-button.component.scss']
})
export class ChbiButtonComponent {

  //need to work on disabled attribute;


  @Input() disabled?: boolean = false;
  @Input() value?: string;
  @Output() bttnClick = new EventEmitter();

  @Input()
  @HostBinding('class.chbi-button')
  isDefault?: boolean;

  @Input()
  @HostBinding('class.chbi-button-primary')
  isPrimary?: boolean;

  @Input()
  @HostBinding('class.chbi-button-secondary')
  isSecondary?: boolean;

  @Input()
  @HostBinding('class.chbi-button-dark')
  isDark?: boolean;
    
  onClick() {
    this.bttnClick.emit();
  }



}
