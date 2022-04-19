class MenuContentPage {
    private mainPage: string
    private elements: any

    constructor() {
        this.mainPage = 'http://localhost:4200/list'
    }

    public visitMainPage(): void {
        cy.visit(this.mainPage)
    }

}

export { MenuContentPage }