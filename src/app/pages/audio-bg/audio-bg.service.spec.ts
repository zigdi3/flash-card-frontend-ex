/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AudioBgService } from './audio-bg.service';

describe('Service: AudioBg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioBgService]
    });
  });

  it('should ...', inject([AudioBgService], (service: AudioBgService) => {
    expect(service).toBeTruthy();
  }));
});
