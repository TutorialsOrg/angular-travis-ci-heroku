import { AngularDemoPage } from './app.po';

describe('angular-demo App', () => {
  let page: AngularDemoPage;

  beforeEach(() => {
    page = new AngularDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
