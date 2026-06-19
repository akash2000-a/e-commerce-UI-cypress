import InventoryPage from "../../PageObjects/InventoryPage"
describe('Inventory Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username, users.validUser.password)
        })
    })
    it('Add products to cart and verify badge count', () => {
        // Validate correct page loaded
        InventoryPage.validatePageTitle('Products')
        //Add two distinct items to cart
        InventoryPage.addItemToCart('Sauce Labs Bike Light')
        InventoryPage.addItemToCart('Sauce Labs Fleece Jacket')
        InventoryPage.getCartBadgeCount(2)
        InventoryPage.clickShoppingCartLink()
    })
})