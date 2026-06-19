class CartPage {
    selectors = {
        titleHeader: '.title',
        cartItem: '.cart_item',
        checkoutButton: '[data-test="checkout"]'
    }

    validatePageTitle(expectedTitle) {
        cy.get(this.selectors.titleHeader).should('be.visible').and('have.text', expectedTitle)
    }

    // Verify that a specific product name is listed in the cart
    verifyItemInCart(itemName) {
        cy.contains(this.selectors.cartItem, itemName).should('be.visible')
    }

    clickCheckout() {
        cy.get(this.selectors.checkoutButton).click()
    }
}

export default new CartPage()
