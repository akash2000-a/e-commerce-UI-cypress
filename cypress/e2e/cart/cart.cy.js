import InventoryPage from "../../PageObjects/InventoryPage"
import CartPage from "../../PageObjects/CartPage"

describe('Cart Page Tests', () => {

    it('should add items to the cart and verify badge count and details', () => {
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username, users.validUser.password)
        })

        // 1. Verify cart badge does not exist initially
        InventoryPage.verifyCartBadgeNotExist()

        // 2. Add single item and verify badge is 1
        InventoryPage.addItemToCart('Sauce Labs Backpack')
        InventoryPage.getCartBadgeCount(1)

        // 3. Add second item and verify badge is 2
        InventoryPage.addItemToCart('Sauce Labs Bike Light')
        InventoryPage.getCartBadgeCount(2)

        // 4. Navigate to cart and verify quantities, names, and prices
        InventoryPage.clickShoppingCartLink()
        CartPage.validatePageTitle('Your Cart')
        CartPage.verifyItemInCart('Sauce Labs Backpack')
        CartPage.verifyItemQuantity('Sauce Labs Backpack', 1)
        CartPage.verifyItemPrice('Sauce Labs Backpack', '$29.99')

        CartPage.verifyItemInCart('Sauce Labs Bike Light')
        CartPage.verifyItemQuantity('Sauce Labs Bike Light', 1)
        CartPage.verifyItemPrice('Sauce Labs Bike Light', '$9.99')
    })

    it('should remove items from the inventory page', () => {
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username, users.validUser.password)
        })

        InventoryPage.addItemToCart('Sauce Labs Backpack')
        InventoryPage.getCartBadgeCount(1)

        // Remove item and verify badge disappears
        InventoryPage.removeItemFromCart('Sauce Labs Backpack')
        InventoryPage.verifyCartBadgeNotExist()
    })

    it('should remove items from the cart page', () => {
        // Setup cart with 2 items and navigate to cart page
        cy.setupCart(['Sauce Labs Bike Light', 'Sauce Labs Fleece Jacket'])

        CartPage.validatePageTitle('Your Cart')
        CartPage.verifyItemInCart('Sauce Labs Bike Light')
        CartPage.verifyItemInCart('Sauce Labs Fleece Jacket')

        // Remove first item
        CartPage.removeItem('Sauce Labs Bike Light')
        CartPage.verifyItemNotInCart('Sauce Labs Bike Light')
        CartPage.verifyItemInCart('Sauce Labs Fleece Jacket')
        InventoryPage.getCartBadgeCount(1)

        // Remove second item
        CartPage.removeItem('Sauce Labs Fleece Jacket')
        CartPage.verifyItemNotInCart('Sauce Labs Fleece Jacket')
        InventoryPage.verifyCartBadgeNotExist()
    })

    it('should navigate back to the inventory page via Continue Shopping', () => {
        cy.setupCart(['Sauce Labs Bike Light'])

        CartPage.validatePageTitle('Your Cart')
        CartPage.clickContinueShopping()

        InventoryPage.validatePageTitle('Products')
    })
})
