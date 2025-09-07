import { Component, inject } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { CommonModule } from '@angular/common';
import { ZardButtonComponent } from '@app/shared/components/button/button.component';
import { Router } from '@angular/router';
import { Loading } from '@app/shared/components/loading/loading.component';
import { CardComponent } from './components/card/card.component';
import { NoContentComponent } from './components/no-content/no-content.component';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [
    CommonModule,
    ZardButtonComponent,
    Loading,
    CardComponent,
    NoContentComponent,
  ],
  templateUrl: './card-view.component.html',
})
export class CardViewComponent {
  private cardService = inject(CardService);
  private router = inject(Router);

  public readonly isLoading = this.cardService.isLoading;
  public readonly cards = this.cardService.cards;
  public readonly error = this.cardService.error;

  ngOnInit() {
    this.loadCards();
  }

  loadCards() {
    this.cardService.list().subscribe();
  }

  goToRegisterCard(): void {
    this.router.navigate(['card-register']);
  }
}
