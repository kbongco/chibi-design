import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chbi-dropdown',
  templateUrl: './chbi-dropdown.component.html',
  styleUrls: ['./chbi-dropdown.component.scss']
})
export class ChbiDropdownComponent {

  @Input() options: any;
  @Input() title?: string;
  @Output() currentValueChange = new EventEmitter();

  public current?: string;
  public isOpen: boolean = false;
  // public get dropdownElement(): Element { return this.elem.nativeElement.querySelector('.dropdown-list') }
  
  private currentIndex = -1;

  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit(): void {
    this.current = this.options[0];
  }

  closeInput() {
    // this.dropdownElement.setAttribute('aria-expanded', "false");
    this.currentIndex = -1;
    this.isOpen = false;
  }

  selectIndex(i: number) {
    let value = this.options[i];
    this.selectVal(value);
  }

  selectVal(value: string | undefined) {
    this.current = value;
    this.closeInput();
    this.currentValueChange.emit(this.current);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen
  }


}
