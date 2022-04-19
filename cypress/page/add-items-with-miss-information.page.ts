class AddItemsWithMissInformationPage {

    private nameField: string
    private nameItem: string

    private qualityField: string
    private qualityItem: string

    private addButton: string

    private addItemDialog: string
    private titleDialog: string

    private giveQualityErrorMessage: string
    private expectQualityErrorMessage: string

    constructor() {

        this.nameField = '[formcontrolname="name"]';
        this.nameItem = 'SecondTestItem';

        this.qualityField = '[formcontrolname="quality"]';
        this.qualityItem = '-10';

        this.addItemDialog = '.mat-dialog-container.ng-tns-c75-0.ng-trigger.ng-trigger-dialogContainer.ng-star-inserted'
        this.titleDialog = 'Add new Item';

        this.addButton = '.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary';

        this.giveQualityErrorMessage = '#mat-error-0';
        this.expectQualityErrorMessage = ' Expected value between 0 and 80 ';

    }

    public typeAnItemName(): void {
        cy.get(this.nameField).type(this.nameItem)
    }

    public typeAnItemQuality(): void {
        cy.get(this.qualityField).type(this.qualityItem)
    }

    public checkAddButtonIsDisabled(): void {
        cy.get(this.addButton).should('be.disabled')
    }

    public clickOnTitle(): void {
        cy.get(this.addItemDialog).contains(this.titleDialog).click()
    }

    public checkExpectQualityErrorMessage(): void {
        cy.get(this.giveQualityErrorMessage).should('have.text', this.expectQualityErrorMessage)
    }
}

export {AddItemsWithMissInformationPage}