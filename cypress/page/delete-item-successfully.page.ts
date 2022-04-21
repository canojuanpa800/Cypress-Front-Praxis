import { PreconditionTest } from "../page/index";

const preconditionTest = new PreconditionTest();

class DeleteItemSuccessfullyPage {
  private nameField: string;
  private nameItem: string;

  private sellInField: string;
  private sellInItem: string;

  private qualityField: string;
  private qualityItem: string;

  private typeField: string;
  private typeItem: string;

  private agedAmountField: string;
  private agedAmount: string;

  private normalAmountField: string;
  private normalAmount: string;

  constructor() {
    this.nameField =
      "body > app-root > list > div > div.ng-star-inserted > mat-card > div:nth-child(1)";
    this.nameItem = preconditionTest.getTestName(1);

    this.sellInField =
      "body > app-root > list > div > div.ng-star-inserted > mat-card > div:nth-child(2)";
    this.sellInItem = preconditionTest.getTestSellin(1);

    this.qualityField =
      "body > app-root > list > div > div.ng-star-inserted > mat-card > div:nth-child(3)";
    this.qualityItem = preconditionTest.getTestQuality(1);

    this.typeField =
      "body > app-root > list > div > div.ng-star-inserted > mat-card > div:nth-child(4)";
    this.typeItem = preconditionTest.getTestType(1);

    this.agedAmountField =
      "body > app-root > insights > div > div > div > div:nth-child(4)";
    this.agedAmount = " 1 ";

    this.normalAmountField =
      "body > app-root > insights > div > div > div > div:nth-child(8)";
    this.normalAmount = " 0 ";
  }

  public checkItemValues(): void {
    cy.get(this.nameField).should("have.text", this.nameItem);
    cy.get(this.sellInField).should("have.text", this.sellInItem);
    cy.get(this.qualityField).should("have.text", this.qualityItem);
    cy.get(this.typeField).should("have.text", this.typeItem);
  }

  public checkAmounts(): void {
    cy.get(this.agedAmountField).should("have.text", this.agedAmount);
    cy.get(this.normalAmountField).should("have.text", this.normalAmount);
  }
}

export { DeleteItemSuccessfullyPage };
