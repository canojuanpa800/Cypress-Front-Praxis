// @ts-ignore
import { MenuContentPage, MenuAddItemsPage, AddItemsWithMissInformationPage } from "../page/index";

const menuContentPage = new MenuContentPage();
const menuAddItemsPage = new MenuAddItemsPage();
const addItemsWithMissInformationPage = new AddItemsWithMissInformationPage();

describe("Scenario 2: Adding items with miss information", () => {
  it("**Given** the user has clicked on ADD (+) button\n"
        + "**When** the user fills out the name\n"
        + "**And** the user fills the quality with negative value\n"
        + "**Then** ADD button is Disabled\n"
        + "**And** \"Expected value between 0 and 80\" message is displayed on quality field", () => {
    menuContentPage.visitMainPage();
    // menuContentPage.scenario1();

    menuAddItemsPage.goToCreateItem();

    addItemsWithMissInformationPage.typeAnItemName();
    addItemsWithMissInformationPage.typeAnItemQuality();

    addItemsWithMissInformationPage.checkAddButtonIsDisabled();

    addItemsWithMissInformationPage.clickOnTitle();
    addItemsWithMissInformationPage.checkExpectQualityErrorMessage();
  });
});
