const cartPage = require('../page-objects/cart');

it('View my cart', function () {

    cartPage.cartNavigation().then(function () {

        expect(browser.get('https://cuddleclones.com/cart/'));
    }, 10000);
});

