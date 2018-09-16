import { TestBed, inject } from '@angular/core/testing';

import { ColaboradoresService } from './colaboradores.service';

describe('ColaboradoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColaboradoresService]
    });
  });

  it('should be created', inject([ColaboradoresService], (service: ColaboradoresService) => {
    expect(service).toBeTruthy();
  }));
});
