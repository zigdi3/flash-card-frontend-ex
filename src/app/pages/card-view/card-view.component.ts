import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  public cardList: any[] = [];
  constructor(private cardService: CardService,
    private route: Router) { }

  ngOnInit() {

    this.cardService.list().subscribe(res => {
      next: this.cardList = res.data;
      error: () => console.log("Erro ao listar cards");

    }
    );
  }
  goToRegisterCard() {
    this.route.navigate(['card-register']);
  }


}
