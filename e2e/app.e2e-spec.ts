import { VotosPage } from './app.po';

describe('votos App', () => {
  let page: VotosPage;

  beforeEach(() => {
    page = new VotosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
