Eutil = require('ethereumjs-util');
EcommerceStore = artifacts.require("./contracts/EcommerceStore.sol");
module.exports = function (callback) {
    current_time = Math.round(new Date() / 1000);
    amt_1 = web3.utils.toWei('1', 'ether');
    EcommerceStore.deployed().then(function (i) { i.addProductToStore('iphone', 'Cell Phones & Accessories', 'QmasdamldqhlEJlKEKBKdjo1j2bb1238mdddasmc581Mta', 'QmasdamldqhlEJlKEKBKdjo1j2bb1bb1238U6UGTy3oaCV', current_time, current_time + 80000, web3.utils.toBN(2 * amt_1, 0)).then(function (f) { console.log(f) }) });
    EcommerceStore.deployed().then(function (i) { i.productIndex.call().then(function (f) { console.log(f) }) });
}
