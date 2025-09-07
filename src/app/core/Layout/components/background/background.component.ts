import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  imports: [],
  template: `<figure class="fixed inset-0 z-0">
    <img
      src="assets/shot.jpg"
      loading="eager"
      alt="cyber"
      class="w-full h-screen object-cover z-0"
    />
  </figure>`,
})
export class BackgroundComponent {}
