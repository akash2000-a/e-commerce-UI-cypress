import CartPage from "../../PageObjects/CartPage"

describe('Cart Page Tests', () => {
    beforeEach(() => {
        // Setup state: Login, add items to cart, and navigate to the cart page
        cy.setupCart(['Sauce Labs Bike Light', 'Sauce Labs Fleece Jacket'])
    })

    it('should display correct items in the cart', () => {
        // 1. Verify we are on the Cart page
        CartPage.validatePageTitle('Your Cart')

        // 2. Verify both items exist in the cart list
        CartPage.verifyItemInCart('Sauce Labs Bike Light')
        CartPage.verifyItemInCart('Sauce Labs Fleece Jacket')
    })
})
