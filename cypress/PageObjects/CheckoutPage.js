class CheckoutPage {
    selectors = {
        titleHeader: '.title',
        firstNameInput: '[data-test="firstName"]',
        lastNameInput: '[data-test="lastName"]',
        postalCodeInput: '[data-test="postalCode"]',
        continueButton: '[data-test="continue"]',
        cancelButton: '[data-test="cancel"]',
        finishButton: '[data-test="finish"]',
        errorMessage: '[data-test="error"]',

        subtotalLabel: '[data-test="subtotal-label"]',
        taxLabel: '[data-test="tax-label"]',
        totalLabel: '[data-test="total-label"]',

        completeHeader: '.complete-header',
        backHomeButton: '[data-test="back-to-products"]'
    }
    validateTitle(expectedTitle) {
        cy.get(this.selectors.titleHeader).should('be.visible').and('have.text', expectedTitle)
    }

    fillCheckOutInfo(firstName, lastName, postalCode) {
        if (firstName !== '') cy.get(this.selectors.firstNameInput).type(firstName)
        if (lastName !== '') cy.get(this.selectors.lastNameInput).type(lastName)
        if (postalCode !== '') cy.get(this.selectors.postalCodeInput).type(postalCode)
    }
    clickContinue() {
        cy.get(this.selectors.continueButton).click()
    }
    clickCancel() {
        cy.get(this.selectors.cancelButton).click()
    }
    clickFinish() {
        cy.get(this.selectors.finishButton).click()
    }
    validateErrorMessage(expectedMessage) {
        cy.get(this.selectors.errorMessage).should('be.visible').and('have.text', expectedMessage)
    }
    verifyTotal(expectedSubTotal, expectedTax, expectedTotal) {
        cy.get(this.selectors.subtotalLabel).should('contain.text', expectedSubTotal)
        cy.get(this.selectors.taxLabel).should('contain.text', expectedTax)
        cy.get(this.selectors.totalLabel).should('contain.text', expectedTotal)
    }

    verifyCheckoutComplete(expectedHeader) {
        cy.get(this.selectors.completeHeader).should('be.visible').and('have.text', expectedHeader)
    }
    clickBackHomeButton() {
        cy.get(this.selectors.backHomeButton).click()
    }
}
export default new CheckoutPage()