import { List } from "cypress/types/lodash";

class PreconditionTest {

    private baseUrl: string
    private listOfElements: any;
    private ficticiousItem: any;

    constructor() {

        this.baseUrl = "http://localhost:8080/api/items"
        this.listOfElements = []
        this.ficticiousItem = { "name": "ItemForPreparateScenarios", "sellIn": 12, "quality": 35, "type": "NORMAL" }

    }

    //principal method for start test Scenario1 and Scenario2
    public preparateScenario(): void {
        this.saveElements()
        this.deleteElements()
        cy.reload()
    }

    //principal method for end test Scenario1 and Scenario2
    public endOfScenario(): void {
        this.deleteElements()
        this.retrieveItems()
    }

    public createElement(): void {
        cy.request('POST', this.baseUrl, this.ficticiousItem)
    }

    public saveElements(): List<Item> {
        cy.request('GET', this.baseUrl).then(ans => {
            ans.body.forEach((item: Item) => {
                this.listOfElements.push(item)
            });
        });
        return this.listOfElements
    }

    public deleteElements(): void {
        cy.request('GET', this.baseUrl).then(ans => {
            ans.body.forEach((item: Item) => {
                cy.request('DELETE', this.baseUrl + '/' + item.id)
            });
        });
    }

    public retrieveItems(): void {
        cy.request('POST', this.baseUrl + '/createItems', this.listOfElements
        )
    }


}
export { PreconditionTest }