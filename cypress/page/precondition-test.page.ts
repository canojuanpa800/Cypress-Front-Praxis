import { List } from "cypress/types/lodash";

class PreconditionTest {

    private baseUrl: string
    private listOfElements: any;
    private ficticiousItem: any;
    private ficticiousItem2: any;

    constructor() {

        this.baseUrl = "http://localhost:8080/api/items"
        this.listOfElements = []
        this.ficticiousItem = { "name": "ItemForPreparateScenarios", "sellIn": 12, "quality": 35, "type": "NORMAL" }
        this.ficticiousItem2 = { "name": "ItemForPreparateScenarios2", "sellIn": 20, "quality": 20, "type": "AGED" }

    }

    //principal method for start test Scenario1,2,3 and 4
    public preparateScenario(): void {
        this.saveElements()
        this.deleteElements()
        cy.reload()
    }

    //principal method for end test Scenario1,2,3 and 4
    public endOfScenario(): void {
        this.deleteElements()
        this.retrieveItems()
    }

    //principal method for start test Scenario3
    public preparateScenario3(): void {
        this.saveElements()
        this.deleteElements()
        this.createElement()
        cy.reload()
    }

    //principal method for start test Scenario4
    public preparateScenario4(): void {
        this.saveElements()
        this.deleteElements()
        this.createElement()
        this.createElement2()
        cy.reload()
    }

    public createElement(): void {
        cy.request('POST', this.baseUrl, this.ficticiousItem)
    }

    public createElement2(): void {
        cy.request('POST', this.baseUrl, this.ficticiousItem2)
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