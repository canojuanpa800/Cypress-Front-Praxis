class MenuContentPage {
    private mainPage: string

    constructor() {
        this.mainPage = 'http://localhost:4200/list'
    }

    public visitMainPage(): void {
        cy.visit(this.mainPage)
    }
}

export { MenuContentPage }