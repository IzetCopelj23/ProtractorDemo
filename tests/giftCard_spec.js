var giftCard = require('../page-objects/giftCard');
const homePage = require('../page-objects/homePage');

it('Add gift card', function () {
    homePage.getHomePage();
    giftCard.giftCardNavigation();
    //giftCard.clickOption();
    // giftCard.clickGraphic();
    giftCard.enterEmail();
    giftCard.enterMessage();
    giftCard.clickAddButton();

    // this.clickGraphic = element(by.id('plush-clone')).all(by.tagName('radio')).get(0).click();

}); 