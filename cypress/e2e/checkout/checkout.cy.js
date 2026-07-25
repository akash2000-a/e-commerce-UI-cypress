import CartPage from "../../PageObjects/CartPage";
import CheckoutPage from "../../PageObjects/CheckoutPage";
import InventoryPage from "../../PageObjects/InventoryPage";

describe('Checkout Page tests', () => {
    it('Verify e2e checkout flow', () => {
        cy.setupCart(['Sauce Labs Backpack'])

        CartPage.clickCheckout()

        CheckoutPage.validateTitle('Checkout: Your Information')
        CheckoutPage.fillCheckOutInfo('John', 'Doe', '12345')
        CheckoutPage.clickContinue()

        CheckoutPage.validateTitle('Checkout: Overview')
        CheckoutPage.verifyTotal('$29.99', '$2.40', '$32.39')

        CheckoutPage.clickFinish()
        CheckoutPage.validateTitle('Checkout: Complete!')
        CheckoutPage.verifyCheckoutComplete('Thank you for your order!')
        CheckoutPage.clickBackHomeButton()

        InventoryPage.validatePageTitle('Products')
    })
    it('Verify error message when first name is missing', () => {
        cy.setupCart(['Sauce Labs Backpack'])

        CartPage.clickCheckout()

        CheckoutPage.fillCheckOutInfo('', 'Doe', '12345')
        CheckoutPage.clickContinue()
        CheckoutPage.validateErrorMessage('Error: First Name is required')
    })

    it('Verify error message when last name is missing', () => {
        cy.setupCart(['Sauce Labs Backpack'])

        CartPage.clickCheckout()

        CheckoutPage.fillCheckOutInfo('John', '', '12345')
        CheckoutPage.clickContinue()
        CheckoutPage.validateErrorMessage('Error: Last Name is required')
    })

    it('Verify error message when zip code is missing', () => {
        cy.setupCart(['Sauce Labs Backpack'])

        CartPage.clickCheckout()

        CheckoutPage.fillCheckOutInfo('John', 'Doe', '')
        CheckoutPage.clickContinue()
        CheckoutPage.validateErrorMessage('Error: Postal Code is required')
    })
})