// @ts-ignore
import {
  MenuContentPage, UpdateTypeOfItem, PreconditionTest, UpdateTypeOfItemSuccessfullyPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const updateTypeOfItem = new UpdateTypeOfItem();
const preconditionTest = new PreconditionTest();
const updateTypeOfItemSuccessfullyPage = new UpdateTypeOfItemSuccessfullyPage();

describe("Scenario 3: Updating type of item", () => {
  it("**Given** that there is an item added\n"
      + "**When** the user clicks on PEN button\n"
      + "**And** the user changes the item type\n"
      + "**Then** the type name is updated in list view\n"
      + "**And** The type amount is updated on INSIGHTS view.", () => {
    menuContentPage.visitMainPage();

    preconditionTest.preparateScenario3();

    updateTypeOfItem.goToUpdateItem();
    updateTypeOfItem.selectAnAgedTypeItem();
    updateTypeOfItem.clickInUpdateButton();
    updateTypeOfItemSuccessfullyPage.checkTypeItem();

    cy.reload();

    menuContentPage.goToIngights();

    updateTypeOfItemSuccessfullyPage.checkAmounts();

    preconditionTest.endOfScenario();
  });
});
