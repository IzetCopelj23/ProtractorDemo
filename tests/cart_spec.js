const cartPage = require('../page-objects/cart');
describe('Cart', function() {

it('View my cart', function () {

    cartPage.cartNavigation().then(function () {

        expect(browser.get('https://cuddleclones.com/cart/'));
    }, 10000);
});

});