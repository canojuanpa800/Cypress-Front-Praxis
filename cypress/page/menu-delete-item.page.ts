class MenuDeleteItemPage {
    private canDeleteButton: string
    private confirmDeleteButton: string
    

    constructor() {
        this.canDeleteButton = 'body > app-root > list > div > div:nth-child(3) > mat-card > div:nth-child(5) > mat-icon:nth-child(2)';
        this.confirmDeleteButton = '#mat-dialog-0 > delete-dialog > div > div > button.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary';
        
    }

    public goToDeleteItem(): void {
        cy.get(this.canDeleteButton).click()
    }

    public confirmDeleteItem(): void {
        cy.get(this.confirmDeleteButton).click()
    }


}

export {MenuDeleteItemPage}