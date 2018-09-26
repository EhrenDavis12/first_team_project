function getItemsFromEbay(searchItem, callBackFunction) {
    //var queryURL = "https://cors-anywhere.herokuapp.com/";
    var queryURL = "https://stark-springs-25719.herokuapp.com/";

    //queryURL += "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=DavidDem-onestops-PRD-0f25aad8e-cdb34819&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords="+searchItem+"&paginationInput.entriesPerPage=10";
    queryURL += "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=DavidDem-onestops-PRD-0f25aad8e-cdb34819&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords="+searchItem+"&paginationInput.entriesPerPage=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.debug(arguments.callee.name);
            console.log(JSON.parse(response));
            let jsonResponse = JSON.parse(response);
            let items = jsonResponse.findItemsByKeywordsResponse[0].searchResult[0].item;
            var returnArray = getDataFromItemsEbay(items); 
            callBackFunction(returnArray);
        });
}

function getDataFromItemsEbay(response) {
    var items = [];
    response.forEach(item => {
        items.push(getDataFromItemEbay(item));
    });
    return items;
}

function getDataFromItemEbay(item) {
    var returnJson = {
        name: item.title[0],
        price: item.sellingStatus[0].currentPrice[0].__value__,
        description: item.title[0],
        url: item.viewItemURL[0],
        picture: item.galleryURL[0],
        // rating: item.customerRating
    };
    return returnJson;
}
