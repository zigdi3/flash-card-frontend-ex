import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  public cardList: any[] = [];
  public isLoading = true;

  constructor(
    private cardService: CardService,
    private route: Router
  ) // private themeService: ThemeService
  ) {
    // this.themeService.themeChange.subscribe({
    //   next: (theme: string) => {
    //     console.log("listen themes from app...");
    //   }
    // });
  }

  ngOnInit() {
    this.cardService
      .list()
      .pipe(debounceTime(4000))
      .subscribe((res) => {
        next: {
          this.isLoading = false;
          this.cardList = res.data;
        }
        error: () => console.log('Erro ao listar cards');
      });
  }
  goToRegisterCard() {
    this.route.navigate(['card-register']);
  }
}
