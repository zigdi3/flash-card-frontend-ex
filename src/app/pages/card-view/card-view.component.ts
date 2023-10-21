import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  public cardList: any[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit() {

    this.cardService.list().subscribe(res => {
      next: this.cardList = res.data;
      error: () => console.log("Erro ao listar cards");

    }
    );
  }

}
