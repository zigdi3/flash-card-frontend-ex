import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { QRCodeModule } from 'angularx-qrcode';
import { APP_CONFIG } from 'src/assets/config/app.config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioBgComponent } from './pages/audio-bg/audio-bg.component';
import { AudioFileComponent } from './pages/audio-file/audio-file.component';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { CardViewComponent } from './pages/card-view/card-view.component';
import { CardService } from './pages/services/card.service';
import { MaterialModule } from './shared/material.module';
@NgModule({
  declarations: [
    AppComponent,
    CardViewComponent,
    CardRegisterComponent,
    AudioBgComponent,
    AudioFileComponent,
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
    YouTubePlayerModule,
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: provideClientHydration(),
    },
    CardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
