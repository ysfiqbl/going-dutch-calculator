import { GoingDutchCalculatorPage } from './app.po';

describe('going-dutch-calculator App', function() {
  let page: GoingDutchCalculatorPage;

  beforeEach(() => {
    page = new GoingDutchCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
