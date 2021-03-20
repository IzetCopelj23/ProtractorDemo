var homePage = require('./homePage');

var giftCardPage = function () {
    var giftCard = element(by.cssContainingText('.nav-link', 'Gift Cards'));

    this.giftCardNavigation = async function () {
        await giftCard.click();
    };

    // var option = element(by.id('pa_gift-card-values'));

    // this.clickOption = async function () {

    //     await option.click().then(function () {
    //         var value = element(by.cssContainingText('.attached', '$25'));
    //         value.click();
    //     })
    // }
    // var graphic = element(by.css('.addon-radio')).getAttribute('value').toEqual('plush-clone');
    // this.clickGraphic = async function () {
    //     await graphic.click();
    // };

    var email = element(by.css('.addon-custom-email'));
    this.enterEmail = async function () {
        await email.sendKeys('test@test.mail.ba');
    };

    var message = element(by.css('.addon-custom-textarea'));
    this.enterMessage = async function () {
        await message.sendKeys('Message test test test');
    };
    var AddButton = element(by.css('.get-product-button'));
    this.clickAddButton = async function () {
        await AddButton.click();
    };
};
module.exports = new giftCardPage();




