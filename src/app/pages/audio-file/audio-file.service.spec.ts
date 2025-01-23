/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AudioFileService } from './audio-file.service';

describe('Service: AudioFile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioFileService]
    });
  });

  it('should ...', inject([AudioFileService], (service: AudioFileService) => {
    expect(service).toBeTruthy();
  }));
});
