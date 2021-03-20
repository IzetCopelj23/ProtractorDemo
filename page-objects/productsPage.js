var ProductsPage = function () {

    // get products button 
    var productsPageButton = element(by.className('dropdown-toggle'));

    this.navigateProducts = function () {
        productsPageButton.click().then(function () {
            var viewAllProductsButton = element(by.css('[href="https://cuddleclones.com/products"]'));
            // navigate to all products page only when we get button
            this.navigateToAllProducts = function () {
                viewAllProductsButton.click();
            }
        });
    }
    // get ids of menu items under products page
    var allCategories = element(by.id('all_categories'));
    var replicas = element(by.id('replicas'));
    var golf = element(by.id('golf'));
    var faceMasks = element(by.id('face-masks'));
    var household = element(by.id('household'));
    var accessories = element(by.id('accessories'));
    var apparel = element(by.id('apparel'));
    var sortByPriceButton = element(by.id('by_price_tab'));

    // functions for navigation and scroll through menu items on page
    this.navigateReplicas = async function () {
        await replicas.click();
    }
    this.navigateGolf = async function () {
        await golf.click();
    }
    this.navigateFaceMasks = async function () {
        await faceMasks.click();
    }
    this.navigateHousehold = async function () {
        await household.click();
    }
    this.navigateAccessories = async function () {
        await accessories.click();
    }
    this.navigateApparel = async function () {
        await apparel.click();
    }
    this.sortByPrice = async function () {
        await sortByPriceButton.click();
    }

};
module.exports = new ProductsPage();