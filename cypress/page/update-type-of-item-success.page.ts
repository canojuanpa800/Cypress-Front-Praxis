class UpdateTypeOfItemSuccessfullyPage {

    private typeField: string
    private typeItem: string

    private agedAmountField: string
    private agedAmount: string
    
    private normalAmountField: string
    private normalAmount: string


    constructor() {

        this.typeField = 'body > app-root > list > div > div.ng-star-inserted > mat-card > div:nth-child(4)';
        this.typeItem = 'AGED';

        this.agedAmountField = 'body > app-root > insights > div > div > div > div:nth-child(4)'
        this.agedAmount = ' 1 ';

        this.normalAmountField = 'body > app-root > insights > div > div > div > div:nth-child(8)'
        this.normalAmount = ' 0 '
    }

    public checkTypeItem(): void {
        cy.get(this.typeField).should('have.text', this.typeItem)
    }

    public checkAmounts(): void {
        cy.get(this.agedAmountField).should('have.text', this.agedAmount)
        cy.get(this.normalAmountField).should('have.text', this.normalAmount)
    }
}

export {UpdateTypeOfItemSuccessfullyPage}