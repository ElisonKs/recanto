import { RecantoappPage } from './app.po';

describe('recantoapp App', function() {
  let page: RecantoappPage;

  beforeEach(() => {
    page = new RecantoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
