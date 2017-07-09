import { A2todosPage } from './app.po';

describe('a2todos App', () => {
  let page: A2todosPage;

  beforeEach(() => {
    page = new A2todosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
