import { browser, element, by } from 'protractor';

describe('App', () => {

  beforeEach(async () => {
    return await browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('GO Billing');
  });

  it('should have <nav>', () => {
    expect(element(by.css('sd-app sd-navbar nav')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for language', () => {
    expect(element(by.css('sd-app sd-navbar nav a:first-child')).getText()).toEqual('deutsch');
  });

  it('should have <footer>', () => {
    expect(element(by.css('sd-app sd-footer footer')).isPresent()).toEqual(true);
  });

});
