class UpdateTypeOfItem {
    private mainPage: string
    private penIcon: string
    private typeField: string;
    private agedTypeItemOption: string;
    private agedTypeItem: string;
    private updateButton: string;

    constructor() {
        this.mainPage = 'http://localhost:4200/list'
        this.penIcon = '[data-automation="list-item-row"]'

        this.typeField = '[formcontrolname="type"]';
        this.agedTypeItem = 'AGED';
        this.agedTypeItemOption = '#mat-option-0';

        this.updateButton = 'button.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary'
        
    }

    public visitMainPage(): void {
        cy.visit(this.mainPage)
    }


    public goToUpdateItem():void {
        cy.get(this.penIcon).first().children().last().children().first().click()
    }

    public selectAnAgedTypeItem(): void {
        cy.get(this.typeField).click()
        cy.get(this.agedTypeItemOption).click()
    }

    public clickInUpdateButton(): void {
        cy.get(this.updateButton).click()
    }

}

export { UpdateTypeOfItem }