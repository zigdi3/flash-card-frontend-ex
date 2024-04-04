import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { MaterialModule } from './shared/material.module';
import { APP_CONFIG } from 'src/assets/config/app.config';
import { RouterModule } from '@angular/router';
import { CardViewComponent } from './pages/card-view/card-view.component';
import { CardService } from './pages/services/card.service';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { AudioBgComponent } from './pages/audio-bg/audio-bg.component';
import { AudioBgService } from './pages/audio-bg/audio-bg.service';

@NgModule({
  declarations: [
    AppComponent,
    CardViewComponent,
    CardRegisterComponent,
    AudioBgComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    QRCodeModule,
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: provideClientHydration(),
    },
    CardService,
    AudioBgService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
