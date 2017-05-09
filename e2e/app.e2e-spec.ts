import { Angular2CrudPage } from './app.po';

describe('angular2-crud App', () => {
  let page: Angular2CrudPage;

  beforeEach(() => {
    page = new Angular2CrudPage();
  });

  it('should display navbar brand message', () => {
    page.navigateTo();
    expect(page.getNavbarText()).toEqual('Angular 2 CRUD');
  });
});
