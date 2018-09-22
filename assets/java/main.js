function test(array) {
    console.log(array);
    
}

function search() {
    var searchItem = $("#inputBox").val().trim();
    getItemsFromWalmart(searchItem, test);  
}