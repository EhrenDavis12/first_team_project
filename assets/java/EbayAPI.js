function getItemsFromEbay(searchItem, callBackFunction) {
    var quaryURL = "https://cors-anywhere.herokuapp.com/";

    quaryURL += "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=DavidDem-onestops-PRD-0f25aad8e-cdb34819&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywordss&keywords="+searchItem+"&paginationInput.entriesPerPage=10";
    //quaryURL += "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=DavidDem-onestops-PRD-0f25aad8e-cdb34819&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords="+searchItem+"&paginationInput.entriesPerPage=10";

    $.ajax({
        url: quaryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            console.log("hello");
            
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
        name: item.title,
        price: item.sellingStatus.currentPrice,
        discription: item.subtitle,
        url: item.viewItemURL,
        picture: item.galleryURL,
        // rating: item.customerRating
    };
    return returnJson;
}
