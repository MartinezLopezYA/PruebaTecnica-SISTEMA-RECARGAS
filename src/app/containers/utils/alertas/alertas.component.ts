import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {

  @Input() mensaje: string = '';
  @Input() tipo: string = '';

}
