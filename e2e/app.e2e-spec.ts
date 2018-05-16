import { AngularKonzertportalNavbarPage } from './app.po';

describe('angular-konzertportal-navbar App', () => {
  let page: AngularKonzertportalNavbarPage;

  beforeEach(() => {
    page = new AngularKonzertportalNavbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
