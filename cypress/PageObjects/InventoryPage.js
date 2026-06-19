class InventoryPage {
    selectors = {
        titleHeader: '.title',
        shoppingCartLink: '.shopping_cart_link',
        shoppingCartBadge: '.shopping_cart_badge',
        inventoryItem: '.inventory_item'
    }
    validatePageTitle(expectedTitle) {
        return cy.get(this.selectors.titleHeader).should('be.visible').and('have.text', expectedTitle)
    }
    addItemToCart(itemName) {
        cy.contains(this.selectors.inventoryItem, itemName).find('button').click()
        // Validate button text changes to 'Remove'
        cy.contains(this.selectors.inventoryItem, itemName).find('button').should('have.text', 'Remove')
    }
    getCartBadgeCount(expectedCount) {
        return cy.get(this.selectors.shoppingCartBadge).should('be.visible').and('have.text', expectedCount)
    }
    clickShoppingCartLink() {
        return cy.get(this.selectors.shoppingCartLink).click()
    }

}
export default new InventoryPage()