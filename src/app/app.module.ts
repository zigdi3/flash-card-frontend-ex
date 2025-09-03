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
import { QRCodeModule } from 'angularx-qrcode';
import { APP_CONFIG } from 'src/assets/config/app.config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioFileComponent } from './pages/audio-file/audio-file.component';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { CardViewComponent } from './pages/card-view/card-view.component';
import { CardService } from './pages/services/card.service';
import { MaterialModule } from './shared/material.module';
import { SnowComponent } from './snow/snow.component';
import { SnowService } from './snow/snow.service';
@NgModule({
  declarations: [
    AppComponent,
    CardViewComponent,
    CardRegisterComponent,
    SnowComponent,
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
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: provideClientHydration(),
    },
    CardService,
    SnowService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
