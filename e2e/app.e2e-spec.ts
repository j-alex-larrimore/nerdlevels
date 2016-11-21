import { NerdlevelsPage } from './app.po';

describe('nerdlevels App', function() {
  let page: NerdlevelsPage;

  beforeEach(() => {
    page = new NerdlevelsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
