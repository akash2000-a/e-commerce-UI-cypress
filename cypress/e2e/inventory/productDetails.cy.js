import InventoryPage from "../../PageObjects/InventoryPage";
import ProductDetailsPage from "../../PageObjects/ProductDetailsPage";

describe("Product Details tests", () => {
    beforeEach(() => {
        cy.fixture('users').then((user) => {
            cy.login(user.validUser.username, user.validUser.password)
        })
    })

    it('Validate Product Details for Sauce Lab Backpack', () => {
        const expectedProduct = {
            name: 'Sauce Labs Backpack',
            description: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
            price: '$29.99'
        }
        InventoryPage.clickProductTitle(expectedProduct.name)
        ProductDetailsPage.verifyProductDetails(expectedProduct)
        ProductDetailsPage.clickBackButton()
    })
})
