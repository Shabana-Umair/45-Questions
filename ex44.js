/*Question:44
Sandwich: make function, array with rest parameters that accept items arguments*/
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n  Making a sandwich with following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Enjoy Sandwich");
}
// call function 3 times with 3 different arguments
makeSandwich("chicken", "cheese", "mayo");
console.log("=====================================================");
makeSandwich("bread", "butter");
console.log("=========================================================");
makeSandwich("egg", "bread", "butter", "mayo");
