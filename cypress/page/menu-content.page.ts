class MenuContentPage {
  private mainPage: string;
  private insigthsButton: string;

  constructor() {
    this.mainPage = "http://44.205.30.180:4200/list";
    this.insigthsButton =
      "body > app-root > list > div > div.list-title-wrapper > div > button.list-insights-button";
  }

  public visitMainPage(): void {
    cy.visit(this.mainPage);
  }

  public goToIngights(): void {
    cy.get(this.insigthsButton).click();
  }
}

export { MenuContentPage };
