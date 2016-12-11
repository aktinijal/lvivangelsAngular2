import { LvivangelsAnglar2Page } from './app.po';

describe('lvivangels-anglar2 App', function() {
  let page: LvivangelsAnglar2Page;

  beforeEach(() => {
    page = new LvivangelsAnglar2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
