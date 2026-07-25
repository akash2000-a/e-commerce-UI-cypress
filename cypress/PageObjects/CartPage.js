class CartPage {
    selectors = {
        titleHeader: '.title',
        cartItem: '.cart_item',
        checkoutButton: '[data-test="checkout"]',
        continueShoppingButton: '[data-test="continue-shopping"]',
        cartQuantity: '.cart_quantity',
        itemName: '[data-test="inventory-item-name"]',
        itemPrice: '[data-test="inventory-item-price"]'
    }

    validatePageTitle(expectedTitle) {
        cy.get(this.selectors.titleHeader).should('be.visible').and('have.text', expectedTitle)
    }

    // Verify that a specific product name is listed in the cart
    verifyItemInCart(itemName) {
        cy.contains(this.selectors.cartItem, itemName).should('be.visible')
    }

    // Verify that a specific product name is not listed in the cart
    verifyItemNotInCart(itemName) {
        cy.contains(this.selectors.cartItem, itemName).should('not.exist')
    }

    // Verify quantity of a specific item in the cart
    verifyItemQuantity(itemName, expectedQty) {
        cy.contains(this.selectors.cartItem, itemName)
            .find(this.selectors.cartQuantity)
            .should('have.text', expectedQty.toString())
    }

    // Verify price of a specific item in the cart
    verifyItemPrice(itemName, expectedPrice) {
        cy.contains(this.selectors.cartItem, itemName)
            .find(this.selectors.itemPrice)
            .should('have.text', expectedPrice)
    }

    // Remove a specific product from the cart
    removeItem(itemName) {
        cy.contains(this.selectors.cartItem, itemName).find('button').click()
    }

    clickCheckout() {
        cy.get(this.selectors.checkoutButton).click()
    }

    clickContinueShopping() {
        cy.get(this.selectors.continueShoppingButton).click()
    }
}

export default new CartPage()
