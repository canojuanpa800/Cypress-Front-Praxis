import {
  MenuContentPage,
  PreconditionTest,
  MenuDeleteItemPage,
  DeleteItemSuccessfullyPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const preconditionTest = new PreconditionTest();
const menuDeleteItemPage = new MenuDeleteItemPage();
const deleteItemSuccessfullyPage = new DeleteItemSuccessfullyPage();

describe("Scenario 4: Deleting one item", () => {
  it(
    "**Given** that there are more than one item added\n"
      + "**When**  the user clicks on CAN button\n"
      + "**And** the user confirms the delete action\n"
      + "**Then** the Items is not displayed on list view\n"
      + "**And** The insight information is updated. ",
    () => {
      menuContentPage.visitMainPage();

      preconditionTest.preparateScenario4();

      menuDeleteItemPage.goToDeleteItem();
      menuDeleteItemPage.confirmDeleteItem();

      deleteItemSuccessfullyPage.checkItemValues();

      menuContentPage.goToIngights();

      deleteItemSuccessfullyPage.checkAmounts();

      preconditionTest.endOfScenario();
    },
  );
});
