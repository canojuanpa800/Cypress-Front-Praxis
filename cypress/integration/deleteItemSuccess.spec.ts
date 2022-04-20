import { MenuContentPage, PreconditionTest, MenuDeleteItemPage, DeleteItemSuccessfullyPage } from "../page/index";

const menuContentPage = new MenuContentPage();
const preconditionTest = new PreconditionTest();
const menuDeleteItemPage = new MenuDeleteItemPage();
const deleteItemSuccessfullyPage = new DeleteItemSuccessfullyPage();

describe("Scenario 4: Deletting one item", () => {
    it("**Given** that there are more than one item added\n"
        + "**When**  the user clicks on CAN button\n"
        + "**And** the user confirms the delete action\n"
        + "**Then** the Items is not displayed on list view\n"
        + "**And** The insight information is updated. ", () => {
        menuContentPage.visitMainPage();

        preconditionTest.preparateScenario4();
        // cy.get('body > app-root > list > div > div:nth-child(3) > mat-card > div:nth-child(5) > mat-icon:nth-child(2)').click()
        menuDeleteItemPage.goToDeleteItem();

        // cy.get('#mat-dialog-0 > delete-dialog > div > div > button.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary').click()
        menuDeleteItemPage.confirmDeleteItem();

        // cy.get('body > app-root > list > div > div:nth-child(3) > mat-card > div:nth-child(1)')
        // .should('have.text', 'ItemForPreparateScenarios2')
        deleteItemSuccessfullyPage.checkItemValues();

        preconditionTest.endOfScenario();
    });
  });