import InventoryPage from "../../PageObjects/InventoryPage";

describe('Products Sorting tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((user) => {
            cy.login(user.validUser.username, user.validUser.password)
        })
    })
    const sortingScenarios = [
        { option: 'az', type: 'name', direction: 'az', desc: 'Name A-Z' },
        { option: 'za', type: 'name', direction: 'za', desc: 'Name Z-A' },
        { option: 'lohi', type: 'price', direction: 'lohi', desc: 'Price Low to High' },
        { option: 'hilo', type: 'price', direction: 'hilo', desc: 'Price High to Low' }
    ]
    sortingScenarios.forEach(({ option, type, direction, desc }) => {
        it(`should sort products correctly by ${desc}`, () => {
            InventoryPage.selectSortOption(option)
            if (type === 'name') {
                InventoryPage.verifyNameSorting(direction)
            } else {
                InventoryPage.verifyPriceSorting(direction)
            }
        })
    })
})

