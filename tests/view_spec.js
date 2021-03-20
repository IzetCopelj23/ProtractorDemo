const homePage = require('../page-objects/homePage');
const productsPage = require('../page-objects/productsPage');

it('View all products', function () {

    // homePage.disableAngular();
    homePage.getHomePage();

    productsPage.navigateProducts();
    //productsPage.navigateToAllProducts();

    expect(browser.get('https://cuddleclones.com/products'));

    // we are using browser.sleep only to slow down execution so we can see the scrolling motion ususally its not a good practice to use browser sleep.
    productsPage.navigateReplicas();
    browser.sleep(1000);
    productsPage.navigateGolf();
    browser.sleep(1000);
    productsPage.navigateFaceMasks();
    browser.sleep(1000);
    productsPage.navigateHousehold();
    browser.sleep(1000);
    productsPage.navigateAccessories();
    browser.sleep(1000);
    productsPage.navigateApparel();
    browser.sleep(1000);
    productsPage.sortByPrice();
    browser.sleep(2000);

});
