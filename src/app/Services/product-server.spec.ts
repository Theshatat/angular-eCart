import { TestBed } from '@angular/core/testing';

import { ProductServer } from './product-server';

describe('ProductServer', () => {
  let service: ProductServer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
