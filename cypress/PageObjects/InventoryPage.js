class InventoryPage {
    selectors = {
        titleHeader: '.title',
        shoppingCartLink: '.shopping_cart_link',
        shoppingCartBadge: '.shopping_cart_badge',
        inventoryItem: '.inventory_item',

        sortDropDown: '[data-test="product-sort-container"]',
        itemName: '[data-test="inventory-item-name"]',
        itemPrice: '[data-test="inventory-item-price"]'
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

    selectSortOption(optionValue) {
        return cy.get(this.selectors.sortDropDown).select(optionValue);
    }
    verifyNameSorting(direction) {
        cy.get(this.selectors.itemName).then(($el) => {
            const actual = Cypress._.map($el, 'innerText')
            const expected = direction === 'za' ? [...actual].sort().reverse() : [...actual].sort()
            expect(actual).to.deep.equal(expected)
        })
    }
    verifyPriceSorting(direction) {
        cy.get(this.selectors.itemPrice).then(($el) => {
            const actual = Cypress._.map($el, (el) => parseFloat(el.innerText.replace('$', '')))
            const expected = direction === 'hilo' ? [...actual].sort((a, b) => b - a) : [...actual].sort((a, b) => a - b)
            expect(actual).to.deep.equal(expected)
        })
    }

}
export default new InventoryPage()