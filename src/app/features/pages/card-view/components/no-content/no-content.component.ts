import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ZardButtonComponent } from "@app/shared/components/button/button.component";

@Component({
  selector: 'app-no-content',
  imports: [ZardButtonComponent],
  templateUrl: './no-content.component.html',
})
export class NoContentComponent {
  @Input() title: string = 'Nenhum conteúdo encontrado';
  @Input() description: string = 'Parece que ainda não há nada para mostrar aqui.';
  @Input() actionLabel?: string;

  @Output() action = new EventEmitter<void>();

  onActionClick() {
    this.action.emit();
  }
}
