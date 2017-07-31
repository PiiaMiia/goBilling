import { browser, element, by } from 'protractor';

describe('Home', () => {

  beforeEach(async () => {
    return await browser.get('/');
  });

  it('should have heading', () => {
    expect(element(by.css('sd-home table thead tr h3')).getText())
      .toEqual('Subscription & Billing');
  });

  it('should have a button to toggle subscription', () => {
    expect(element(by.css('sd-home button')).getText())
      .toContain('CANCEL SUBSCRIPTION');
    element(by.css('sd-home button')).click();
  });

});
