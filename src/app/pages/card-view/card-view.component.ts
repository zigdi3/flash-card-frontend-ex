import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { debounceTime } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
    private route: Router,
    private sanitizer: DomSanitizer // private themeService: ThemeService
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

  goToRegisterCard(): void {
    this.route.navigate(['card-register']);
  }

  cleanURL(oldURL: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }
}
