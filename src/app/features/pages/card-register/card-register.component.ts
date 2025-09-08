import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
// import { throwError } from 'rxjs';
// import { CardService } from '@app/core/services/card.service';
import { CardProfile } from './model/card-profile.model';
import { ZardFormFieldComponent } from '@app/shared/components/form/form.component';
import { ZardInputDirective } from '@app/shared/components/input/input.directive';
import { ZardButtonComponent } from '@app/shared/components/button/button.component';
import { CardService } from '@app/core/services/card.service';

@Component({
  selector: 'app-card-register',
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

  private cardservice = inject(CardService);
  public readonly isLoading = this.cardservice.isLoading;
  public readonly error = this.cardservice.error;

  fb: FormBuilder = inject(FormBuilder);
  private route: Router = inject(Router);

  ngOnInit() {
    this.initForm();
  }

  getFormField = (name: string) => this.cardRegisterForm.get(name);

  isInvalid = (formGroupName: string): Signal<boolean> => {
    return computed(() => {
      const formControl = this.getFormField(formGroupName);
      if (!formControl) return false;
      if (formControl.value === '') return false;

      if (formControl.invalid && formControl.touched && formControl.dirty)
        return true;
      return false;
    });
  };

  initForm(): void {
    this.cardRegisterForm = this.fb.group({
      nameControl: ['', [Validators.required, Validators.minLength(3)]],
      linkedinControl: ['', [Validators.minLength(18), Validators.required]],
      githubControl: [
        '',
        [
          Validators.minLength(15),
          Validators.maxLength(40),
          Validators.required,
        ],
      ],
      whatsappControl: ['', [Validators.minLength(8), Validators.required]],
      emailControl: ['', [Validators.email, Validators.required]],
    });
  }

  saveCard() {
    const isFormValid = this.cardRegisterForm.valid;

    if (!isFormValid) {
      this.cardRegisterForm.touched;
      this.cardRegisterForm.dirty;
      return;
    } else {
      const getValueByKey = (key: string): string =>
        this.getFormField(key)?.value || '';
      const body: CardProfile = {
        name: getValueByKey('nameControl'),
        linkedlnUrl: getValueByKey('linkedinControl'),
        gitHubUrl: getValueByKey('githubControl'),
        whatsAppNumber: getValueByKey('whatsappControl'),
        emailAdress: getValueByKey('emailControl'),
      };
      // this.cardService.save(body).subscribe({
      //   next: () => console.log(body),
      //   error: (err) => throwError(() => err),
      // })
      console.log(body);
    }
  }

  goToViewCard() {
    this.route.navigate(['card-view']);
  }
}
