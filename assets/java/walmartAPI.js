function getItemsFromWalmart(searchItem, callBackFunction) {
    var quaryURL = "https://cors-anywhere.herokuapp.com/";

    quaryURL += "https://api.walmartlabs.com/v1/search?apiKey=g8wph7bvuk3chfrkxzncywu4&query=" + searchItem;

    $.ajax({
        url: quaryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.items);
            var returnArray = getDataFromItems(response.items); callBackFunction(returnArray);
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
        discription: item.shortDescription,
        url: item.productUrl,
        picture: item.mediumImage,
        rating: item.customerRating
    };
    return returnJson;
}


