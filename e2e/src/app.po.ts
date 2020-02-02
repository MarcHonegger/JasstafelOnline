import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getPageContent() {
    return element(by.css('jass-root')).getText() as Promise<string>;
  }
}
