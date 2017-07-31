import { RouterExercisePage } from './app.po';

describe('router-exercise App', () => {
  let page: RouterExercisePage;

  beforeEach(() => {
    page = new RouterExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
