import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chbi-input-fields',
  templateUrl: './chbi-input-fields.component.html',
  styleUrls: ['./chbi-input-fields.component.scss']
})
export class ChbiInputFieldsComponent {

// Password version coming soon 
// error message version to be added soon 

  @Input() labelText?: string;
  @Input() isRequired?: boolean;
  @Input() placeholder?: string;
  @Input() isDisabled?: boolean;
  @Input() isReadOnly?: boolean;
}
