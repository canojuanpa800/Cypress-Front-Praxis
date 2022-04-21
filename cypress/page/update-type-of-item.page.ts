class UpdateTypeOfItem {
    
    private penIcon: string

    private typeField: string
    private agedTypeItemOption: string
    private agedTypeItem: string 

    private updateButton: string 

    constructor() {

        this.penIcon = '[data-automation="list-item-row"]'

        this.typeField = '[formcontrolname="type"]';
        this.agedTypeItem = 'AGED';
        this.agedTypeItemOption = '#mat-option-0 > span';

        this.updateButton = '#mat-dialog-0 > item-form-dialog > div > div.item-form-dialog-actions > button.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary'
        
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