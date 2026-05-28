import { CreditCardTransformPipe } from '../CreditCardTransform/credit-card-transform-pipe';

describe('CreditCardTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
