var CartPage = function () {

    var cart = element(by.id('header-cart'));
    this.cartNavigation = async function(){
        await cart.click();
    };

};
module.exports = new CartPage();