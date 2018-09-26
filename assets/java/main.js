
function main() {
    baseDB.initFireBase();
    AOS.init();
    AOS.refresh();

    let pastResults = sessionStorage.getItem("pastResults");
    if (pastResults !== null){
        buildCards(JSON.parse(pastResults));
    }

}

function search() {
    console.debug(arguments.callee.name);
    var searchItem = $("#inputBox").val().trim();
    if (validateInput) {
        getItemsFromWalmart(searchItem, organizeApiResults);
    }
}

function organizeApiResults(arrayOfJsonItems){
    sessionStorage.clear();
    sessionStorage.setItem("pastResults", JSON.stringify(arrayOfJsonItems));
    buildCards(arrayOfJsonItems);
}

function validateInput(input) {
    if (input === "") {
        return false
    }
    return true;
}

function addToFavorites(id){
    let cardInfo = getAttrFromBuiltCard(id);
    baseDB.pushData("fav", cardInfo);
}

function buildFavorites(){
    baseDB.getAllChildren("fav", organizeApiResults);
}
