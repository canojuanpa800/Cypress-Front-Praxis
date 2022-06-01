class MenuAddItemsPage {
    private plusAddButton: string

    constructor() {
        this.plusAddButton = '.list-title-wrapper .list-buttons .list-add-button';
    }

    public goToCreateItem(): void {
        cy.get(this.plusAddButton).click()
        cy.wait(2000)
    }

}

export {MenuAddItemsPage}