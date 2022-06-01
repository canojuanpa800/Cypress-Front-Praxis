import { List } from "cypress/types/lodash";

class PreconditionTest {
  private baseUrl: string;
  private listOfElements: any;
  private ficticiousItem: any;
  private ficticiousItem2: any;
  private failedItem: any;
  private listOfFicticius: any;

  constructor() {
    this.baseUrl = "http://44.205.30.180:8090/api/items";
    this.listOfElements = [];

    this.failedItem = {
      name: "SecondTestItem",
      sellIn: 12,
      quality: -10,
      type: "NORMAL",
    };
    this.ficticiousItem = {
      name: "ItemForPreparateScenarios",
      sellIn: 12,
      quality: 35,
      type: "NORMAL",
    };
    this.ficticiousItem2 = {
      name: "ItemForPreparateScenarios2",
      sellIn: 20,
      quality: 20,
      type: "AGED",
    };

    this.listOfFicticius = [
      this.ficticiousItem,
      this.ficticiousItem2,
      this.failedItem,
    ];
  }

  //principal method for start test Scenario1,2,3 and 4
  public preparateScenario(): void {
    this.saveElements();
    this.deleteElements();
    cy.reload();
  }

  //principal method for end test Scenario1,2,3 and 4
  public endOfScenario(): void {
    this.deleteElements();
    this.retrieveItems();
  }

  //principal method for start test Scenario3
  public preparateScenario3(): void {
    this.saveElements();
    this.deleteElements();
    this.createElement();
    cy.reload();
  }

  //principal method for start test Scenario4
  public preparateScenario4(): void {
    this.saveElements();
    this.deleteElements();
    this.createElement();
    this.createElement2();
    cy.reload();
  }

  public createElement(): void {
    cy.wait(2000)
    cy.request("POST", this.baseUrl, this.ficticiousItem);
  }

  public createElement2(): void {
    cy.wait(2000)
    cy.request("POST", this.baseUrl, this.ficticiousItem2);
  }

  public saveElements(): List<Item> {
    cy.request("GET", this.baseUrl).then((ans) => {
      ans.body.forEach((item: Item) => {
        this.listOfElements.push(item);
      });
    });
    return this.listOfElements;
  }

  public deleteElements(): void {
    cy.request("GET", this.baseUrl).then((ans) => {
      ans.body.forEach((item: Item) => {
        cy.wait(2000)
        cy.request("DELETE", this.baseUrl + "/" + item.id);
      });
    });
  }

  public retrieveItems(): void {
    cy.wait(2000)
    cy.request("POST", this.baseUrl + "/createItems", this.listOfElements);
  }

  public getTestName(indexElement: number): string {
    return this.listOfFicticius[indexElement].name;
  }

  public getTestSellin(indexElement: number): string {
    return this.listOfFicticius[indexElement].sellIn;
  }

  public getTestQuality(indexElement: number): string {
    return this.listOfFicticius[indexElement].quality;
  }

  public getTestType(indexElement: number): string {
    return this.listOfFicticius[indexElement].type;
  }
}
export { PreconditionTest };
