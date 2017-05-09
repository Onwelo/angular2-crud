import { browser, element, by } from 'protractor';

export class Angular2CrudPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarText() {
    return element(by.css('of-root of-nav .navbar-brand')).getText();
  }
}
