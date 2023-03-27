import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chibi-design';
  value = 'I am a button';
  public isDefault: boolean = true;
  public isDark: boolean = true;
  public isSecondary: boolean = true;
  public isPrimary: boolean = true;
  disabled = true;

}
