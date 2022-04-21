// @ts-ignore
import {
  MenuContentPage, MenuAddItemsPage, AddItemsSuccessfullyPage, PreconditionTest,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const menuAddItemsPage = new MenuAddItemsPage();
const addItemsSuccessfullyPage = new AddItemsSuccessfullyPage();
const preconditionTest = new PreconditionTest();

describe("Scenario 1: Adding Items", () => {
  it("**Given** the user has clicked on ADD(+) button\n"
      + "**When** the user fills out all required information\n"
      + "**And** the user clicks on ADD button\n"
      + "**Then** The items is displayed on list view\n"
      + "**And** The information set is displayed according to added in creation step.", () => {
    menuContentPage.visitMainPage();

    preconditionTest.preparateScenario();

    menuAddItemsPage.goToCreateItem();

    addItemsSuccessfullyPage.typeANewItem();
    addItemsSuccessfullyPage.selectANormalTypeItem();

    addItemsSuccessfullyPage.clickInAddButton();

    addItemsSuccessfullyPage.goToItemDetailForItemCreated();
    addItemsSuccessfullyPage.checkItemValues();

    preconditionTest.endOfScenario();
  });
});
