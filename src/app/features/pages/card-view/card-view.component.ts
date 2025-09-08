import { Component, inject, signal } from '@angular/core';
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
  // public readonly cards = this.cardService.cards;
  public readonly error = this.cardService.error;

  cards = signal([
    {
      name: 'Alice Johnson',
      gitHubUrl: 'https://github.com/alicejohnson',
      linkedlnUrl: 'https://linkedin.com/in/alicejohnson',
    },
    {
      name: 'Bruno Souza',
      gitHubUrl: 'https://github.com/brunosouza',
      linkedlnUrl: 'https://linkedin.com/in/brunosouza',
    },
    {
      name: 'Carla Mendes',
      gitHubUrl: 'https://github.com/carlamendes',
      linkedlnUrl: 'https://linkedin.com/in/carlamendes',
    },
    {
      name: 'Diego Ramos',
      gitHubUrl: 'https://github.com/diegoramos',
      linkedlnUrl: 'https://linkedin.com/in/diegoramos',
    },
    {
      name: 'Elisa Martins',
      gitHubUrl: 'https://github.com/elisamartins',
      linkedlnUrl: 'https://linkedin.com/in/elisamartins',
    },
    {
      name: 'Felipe Rocha',
      gitHubUrl: 'https://github.com/feliperocha',
      linkedlnUrl: 'https://linkedin.com/in/feliperocha',
    },
    {
      name: 'Gabriela Costa',
      gitHubUrl: 'https://github.com/gabrielacosta',
      linkedlnUrl: 'https://linkedin.com/in/gabrielacosta',
    },
    {
      name: 'Henrique Oliveira',
      gitHubUrl: 'https://github.com/henriqueoliveira',
      linkedlnUrl: 'https://linkedin.com/in/henriqueoliveira',
    },
    {
      name: 'Isabela Ferreira',
      gitHubUrl: 'https://github.com/isabelaferreira',
      linkedlnUrl: 'https://linkedin.com/in/isabelaferreira',
    },
    {
      name: 'João Pereira',
      gitHubUrl: 'https://github.com/joaopereira',
      linkedlnUrl: 'https://linkedin.com/in/joaopereira',
    },
  ]);

  ngOnInit() {
    // this.loadCards();
  }

  loadCards() {
    this.cardService.list().subscribe();
  }

  goToRegisterCard(): void {
    this.router.navigate(['card-register']);
  }
}
