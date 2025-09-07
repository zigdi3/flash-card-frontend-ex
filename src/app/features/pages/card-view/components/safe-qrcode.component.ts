import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID, signal } from '@angular/core';
import { QrCodeComponent } from "ng-qrcode";

@Component({
  selector: 'app-safe-qrcode',
  imports: [QrCodeComponent],
  template: ` <div class="flex flex-col items-center mt-4">
    @if(isBrowser()){
    <label class="text-gray-700 mb-2">Aponte sua câmera aqui:</label>
    <qr-code class="w-40 h-40" [value]="value" />
    } @else {
    <div
      class="qr-placeholder h-32 w-32 rounded border border-gray-300 relative bg-gray-100 overflow-hidden"
    >
      <!-- Quadradinhos simulando QR code -->
      <div class="absolute top-2 left-2 h-4 w-4 bg-gray-400"></div>
      <div class="absolute top-2 right-2 h-4 w-4 bg-gray-400"></div>
      <div class="absolute bottom-2 left-2 h-4 w-4 bg-gray-400"></div>
      <div class="absolute inset-8 grid grid-cols-6 grid-rows-6 gap-1">
        <div class="bg-gray-300"></div>
        <div class="bg-gray-200"></div>
        <div class="bg-gray-300"></div>
        <div class="bg-gray-200"></div>
        <div class="bg-gray-300"></div>
        <div class="bg-gray-200"></div>
        <!-- repita padrões aleatórios para preencher -->
      </div>
    </div>
    }
  </div>`,
})
export class SafeQRCodeComponent {
  @Input({ required: true }) value!: string;
  isBrowser = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    this.isBrowser.set(isPlatformBrowser(this.platformId));
  }
}
