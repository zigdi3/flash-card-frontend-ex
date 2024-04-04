import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/core/theme-service/theme.service';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  public cardList: any[] = [];
  constructor(
    private cardService: CardService,
    private route: Router,
    private themeService: ThemeService
  ) {
    // this.themeService.themeChange.subscribe({
    //   next: (theme: string) => {
    //     console.log("listen themes from app...");
    //   }
    // });
  }

  ngOnInit() {
    this.cardService.list().subscribe((res) => {
      next: this.cardList = res.data;
      error: () => console.log('Erro ao listar cards');
    });
  }
  goToRegisterCard() {
    this.route.navigate(['card-register']);
  }
}
