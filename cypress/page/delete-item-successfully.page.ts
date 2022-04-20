class DeleteItemSuccessfullyPage {

    private nameField: string
    private nameItem: string

    private sellInField: string
    private sellInItem: string

    private qualityField: string
    private qualityItem: string

    private typeField: string
    private normalTypeItem: string

    constructor() {

        this.nameField = 'body > app-root > list > div > div.ng-star-inserted > mat-card > div:nth-child(1)';
        this.nameItem = 'ItemForPreparateScenarios2';

        this.sellInField = 'body > app-root > list > div > div.ng-star-inserted > mat-card > div:nth-child(2)';
        this.sellInItem = '20';

        this.qualityField = 'body > app-root > list > div > div.ng-star-inserted > mat-card > div:nth-child(3)';
        this.qualityItem = '20';

        this.typeField = 'body > app-root > list > div > div.ng-star-inserted > mat-card > div:nth-child(4)';
        this.normalTypeItem = 'AGED';

    }

    public checkItemValues(): void {
        cy.get(this.nameField).should('have.text', this.nameItem)
        cy.get(this.sellInField).should('have.text', this.sellInItem)
        cy.get(this.qualityField).should('have.text', this.qualityItem)
        cy.get(this.typeField).should('have.text', this.normalTypeItem)
    }
}

export {DeleteItemSuccessfullyPage}