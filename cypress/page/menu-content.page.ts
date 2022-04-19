class MenuContentPage {
    private mainPage: string
    private elements: any

    constructor() {
        this.mainPage = 'http://localhost:4200/list'
    }

    public visitMainPage(): void {
        cy.visit(this.mainPage)
    }

    // public getAListOfElements(){
    //     cy.request({
    //         method: 'GET',
    //         url: 'http://localhost:8080/api/items',
    //     }).then(ans => {
    //         ans.body.forEach((item: Item) => (console.log(item)))
    //     });
    // }

    // public createElement(): void {
    //     cy.request({
    //         method: 'POST',
    //         failOnStatusCode: false,
    //         url: 'http://localhost:8080/api/items',
    //         body: {
    //             "name" : "Mello2",
    //             "sellIn": 20,
    //             "quality" : 35,
    //             "type": "NORMAL"
    //         },
    //     })
    // }

    // public scenario1(): void {
    //     /*TODO
    //     Obtain a list of existing items */
    //     this.getAListOfElements();
    //     /* add element for precondition of test */
    //     this.createElement();
    //     cy.reload()
    // }
}

export { MenuContentPage }