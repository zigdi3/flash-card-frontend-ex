import { Component, effect, signal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { CardProfile } from '../card-register/model/card-profile.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
  public cardList = signal<CardProfile[]>([]);
  public isLoading = signal(true);

  constructor(
    private cardService: CardService,
    private route: Router,
    private sanitizer: DomSanitizer // private themeService: ThemeService
  ) {
    // this.themeService.themeChange.subscribe({
    //   next: (theme: string) => {
    //     console.log("listen themes from app...");
    //   }
    // });
    this.setupEffects();
  }

  loadCards() {
    const cards$ = this.cardService.list().pipe(debounceTime(4000));

    cards$.subscribe({
      next: (cards: { data: CardProfile[] }) => {
        if (Array.isArray(cards.data)) {
          this.cardList.set(cards.data);
        } else {
          console.error('Expected an array but got:', cards);
        }
        this.isLoading.set(false);
      },
      error: () => console.log('Erro ao listar cards'),
    });
  }

  private setupEffects() {
    effect(() => {
      this.loadCards();
    });
  }

  goToRegisterCard(): void {
    this.route.navigate(['card-register']);
  }

  cleanURL(oldURL: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }
}
