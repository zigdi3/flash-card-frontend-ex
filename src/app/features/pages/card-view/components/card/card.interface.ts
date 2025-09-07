import { SafeUrl } from '@angular/platform-browser';

export interface Card {
  name: string;
  gitHubUrl: SafeUrl;
  linkedlnUrl: SafeUrl;
}
