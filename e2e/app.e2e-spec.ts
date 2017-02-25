import { FortressTestPage } from './app.po';

describe('fortress-test App', function() {
  let page: FortressTestPage;

  beforeEach(() => {
    page = new FortressTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
