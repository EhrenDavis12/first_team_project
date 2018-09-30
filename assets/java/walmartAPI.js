function getItemsFromWalmart(searchItem, callBackFunction) {
    //var queryURL = "https://cors-anywhere.herokuapp.com/";
    var queryURL = "https://stark-springs-25719.herokuapp.com/";

    queryURL += "https://api.walmartlabs.com/v1/search?apiKey=g8wph7bvuk3chfrkxzncywu4&query=" + searchItem;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.debug(arguments.callee.name);
            console.debug(response.items);
            var returnArray = getDataFromItemsWal(response.items);
            callBackFunction(returnArray);
        });
}

function getDataFromItemsWal(response) {
    var items = [];
    response.forEach(item => {
        items.push(getDataFromItemWal(item));
    });
    return items;
}

function getDataFromItemWal(item) {
    var returnJson = {
        name: item.name,
        price: item.salePrice,
        description: item.shortDescription,
        url: item.productUrl,
        picture: item.mediumImage,
        rating: item.customerRating
    };
    return returnJson;
}


