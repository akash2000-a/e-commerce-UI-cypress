class ProductDetailsPage {
    selectors = {
        detailName: '[data-test="inventory-item-name"]',
        detailDesc: '[data-test="inventory-item-desc"]',
        detailPrice: '[data-test="inventory-item-price"]',
        backButton: '[data-test="back-to-products"]'
    }

    verifyProductDetails(product) {
        cy.get(this.selectors.detailName).should('have.text', product.name)
        cy.get(this.selectors.detailDesc).should('have.text', product.description)
        cy.get(this.selectors.detailPrice).should('have.text', product.price)
    }
    clickBackButton() {
        return cy.get(this.selectors.backButton).click()
    }
}
export default new ProductDetailsPage()