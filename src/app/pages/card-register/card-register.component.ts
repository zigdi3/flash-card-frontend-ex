import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CardService } from '../services/card.service';
import { CardProfile } from './model/card-profile.model';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.scss'],
})
export class CardRegisterComponent implements OnInit {
  cardRegisterForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private route: Router
  ) {}
  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.cardRegisterForm = this.fb.group({
      nameControl: [''],
      linkedinControl: [''],
      githubControl: [''],
    });
  }

  saveCard(): void {
    const body: CardProfile = {
      name: this.cardRegisterForm.controls['nameControl'].value,
      linkedlnUrl: this.cardRegisterForm.controls['linkedinControl'].value,
      gitHubUrl: this.cardRegisterForm.controls['githubControl'].value,
    };

    this.cardService.save(body).subscribe({
      next: () => console.log(body),
      error: (err) => throwError(err),
    });
  }

  goToViewCard() {
    this.route.navigate(['card-view']);
  }
}
