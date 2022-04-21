class MenuContentPage {
    private mainPage: string
    private insigthsButton: string

    constructor() {
        this.mainPage = 'http://localhost:4200/list'
        this.insigthsButton = 'body > app-root > list > div > div.list-title-wrapper > div > button.list-insights-button'
    }

    public visitMainPage(): void {
        cy.visit(this.mainPage)
    }

    public goToIngights():void {
        cy.get(this.insigthsButton).click()
    }
}

export { MenuContentPage }