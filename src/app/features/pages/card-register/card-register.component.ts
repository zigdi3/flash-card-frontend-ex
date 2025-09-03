import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CardService } from '@app/core/services/card.service';
import { CardProfile } from './model/card-profile.model';
import { ZardFormFieldComponent } from '@app/shared/components/form/form.component';
import { ZardInputDirective } from '@app/shared/components/input/input.directive';
import { ZardButtonComponent } from '@app/shared/components/button/button.component';

@Component({
  selector: 'app-card-register',
  standalone: true,
  templateUrl: './card-register.component.html',
  imports: [
    ZardFormFieldComponent,
    ZardInputDirective,
    ZardButtonComponent,
    ReactiveFormsModule,
  ],
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
      error: (err) => throwError(() => err),
    });
  }

  goToViewCard() {
    this.route.navigate(['card-view']);
  }
}
