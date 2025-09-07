import { Component, Input } from '@angular/core';
import { Card } from './card.interface';
import { SafeQRCodeComponent } from '../safe-qrcode.component';

@Component({
  selector: 'app-card',
  imports: [SafeQRCodeComponent],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() card!: Card;
}
