class AddItemsSuccessfullyPage {
  private nameField: string;
  private nameItem: string;

  private sellInField: string;
  private sellInItem: string;

  private qualityField: string;
  private qualityItem: string;

  private typeField: string;
  private normalTypeItem: string;
  private normalTypeItemOption: string;

  private addButton: string;

  private itemWasCreated: string;

  private itemDetails: string;

  constructor() {
    this.nameField = '[formcontrolname="name"]';
    this.nameItem = "FirstTestItem";

    this.sellInField = '[formcontrolname="sellIn"]';
    this.sellInItem = "25";

    this.qualityField = '[formcontrolname="quality"]';
    this.qualityItem = "1";

    this.typeField = '[formcontrolname="type"]';
    this.normalTypeItem = "NORMAL";
    this.normalTypeItemOption = "#mat-option-1";

    this.addButton =
      ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary";

    this.itemWasCreated = '[data-automation="list-item-row"]';

    this.itemDetails = ".item-content";
  }

  public selectANormalTypeItem(): void {
    cy.get(this.typeField).click();
    cy.get(this.normalTypeItemOption).click();
  }

  public typeANewItem(): void {
    cy.get(this.nameField).type(this.nameItem);
    cy.get(this.sellInField).type(this.sellInItem);
    cy.get(this.qualityField).type(this.qualityItem);
  }

  public clickInAddButton(): void {
    cy.wait(2000)
    cy.get(this.addButton).click();
  }

  public goToItemDetailForItemCreated(): void {
    cy.wait(2000);
    cy.get(this.itemWasCreated)
      .last()
      .children()
      .last()
      .children()
      .last()
      .click();
  }

  public checkItemValues(): void {
    cy.get(this.itemDetails)
      .children()
      .eq(2)
      .should("have.text", this.nameItem);
    cy.get(this.itemDetails)
      .children()
      .eq(4)
      .should("have.text", this.sellInItem);
    cy.get(this.itemDetails)
      .children()
      .eq(6)
      .should("have.text", this.qualityItem);
    cy.get(this.itemDetails)
      .children()
      .eq(8)
      .should("have.text", this.normalTypeItem);
  }
}

export { AddItemsSuccessfullyPage };
