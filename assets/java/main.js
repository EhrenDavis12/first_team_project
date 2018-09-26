
function main() {
    baseDB.initFireBase();
    AOS.init();
    AOS.refresh();

    let pastResults = sessionStorage.getItem("pastResultsWal");
    if (pastResults !== null){
        buildCards(JSON.parse(pastResults));
    }

}

function search() {
    console.debug(arguments.callee.name);
    sessionStorage.clear();
    var searchItem = $("#inputBox").val().trim();
    if (validateInput) {
        $("#cardItemsHere").empty();
        getItemsFromWalmart(searchItem, organizeApiResultsWag);
        getItemsFromEbay(searchItem, organizeApiResultsEbay);
    }
}

function organizeApiResultsWag(arrayOfJsonItems){
    sessionStorage.setItem("pastResultsWal", JSON.stringify(arrayOfJsonItems));
    buildCards(arrayOfJsonItems);
}

function organizeApiResultsEbay(arrayOfJsonItems){
    sessionStorage.setItem("pastResultsEbay", JSON.stringify(arrayOfJsonItems));
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
