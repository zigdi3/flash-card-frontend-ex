import { Component, computed, Input, signal } from '@angular/core';
import { Card } from './card.interface';
import { SafeQRCodeComponent } from '../safe-qrcode.component';
import { ZardButtonComponent } from '@app/shared/components/button/button.component';

@Component({
  selector: 'app-card',
  imports: [SafeQRCodeComponent, ZardButtonComponent],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() card!: Card;
  githubHidden = signal(false);

  toggleGHHidden = () => {
    this.linkedInHidden.set(false);
    this.whatsappHidden.set(false);
    this.githubHidden.update((c) => !c);
  };

  public readonly linkedInHidden = signal(false);
  toggleLIHidden = () => {
    this.githubHidden.set(false);
    this.whatsappHidden.set(false);
    this.linkedInHidden.update((c) => !c);
  };

  public readonly whatsappHidden = signal(false);
  toggleWAHidden = () => {
    this.githubHidden.set(false);
    this.linkedInHidden.set(false);
    this.whatsappHidden.update((c) => !c);
  };

  setClass = (section: string) => {
    const open = 'h-0 w-full overflow-hidden transition-all ease-1s';
    const closed = 'max-h-60 h-screen transition-all ease-1s';
    return computed(() => {
      switch (section) {
        case 'whatsapp':
          return this.whatsappHidden() ? closed : open;
        case 'github':
          return this.githubHidden() ? closed : open;
        case 'linkedin':
          return this.linkedInHidden() ? closed : open;
        default:
          return 'h-0 w-full overflow-hidden';
      }
    });
  };
}
