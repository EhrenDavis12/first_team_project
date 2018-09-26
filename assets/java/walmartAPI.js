function getItemsFromWalmart(searchItem, callBackFunction) {
    var queryURL = "https://cors-anywhere.herokuapp.com/";

    queryURL += "https://api.walmartlabs.com/v1/search?apiKey=g8wph7bvuk3chfrkxzncywu4&query=" + searchItem;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.items);
            var returnArray = getDataFromItems(response.items); 
            callBackFunction(returnArray);
        });
}

function getDataFromItems(response) {
    var items = [];
    response.forEach(item => {
        items.push(getDataFromItem(item));
    });
    return items;
}

function getDataFromItem(item) {
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


