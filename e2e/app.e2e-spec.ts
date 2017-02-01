import { UseGetPage } from './app.po';

describe('use-get App', function() {
  let page: UseGetPage;

  beforeEach(() => {
    page = new UseGetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
