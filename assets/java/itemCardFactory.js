
function buildCards(arrayOfJsonItems) {
    console.debug(arguments.callee.name);
    $("#cardItemsHere").empty();
    $.each(arrayOfJsonItems, function (key, value) {
        buildCard(key, value);
    });
}
function buildCard(key, jsonItems) {
    console.debug(arguments.callee.name);
    let jsonCard = buildJsonForCard(key, jsonItems);
    htmlFactory.createByArrayOfJson($("#cardItemsHere"), jsonCard);
}

function buildJsonForCard(key, jsonItem) {
    let jsonCard = [
        {
            div: "<div class=\"card m-5\" style=\"width: 22rem;\">",
            children: [
                {
                    div: "<div class=\"view overlay hm-white-slight\">",
                    children: [
                        {
                            div: "<img class=\"img-fluid\">",
                            attrs: {
                                src: jsonItem.picture
                            }
                        }, {
                            div: "<a>",
                            attrs: {
                                href: jsonItem.url
                            },
                            children: [
                                { div: "<div class=\"mask\">" }
                            ]
                        }
                    ]
                }, {
                    div: "<div class=\"card-body\">",
                    children: [
                        {
                            div: "<div class=\"row\">",
                            children: [
                                {
                                    div: "<h4 class=\"card-title\">",
                                    text: jsonItem.name
                                }
                            ]
                        }, {
                            div: "<div class=\"row\">",
                            children: [
                                {
                                    div: "<h4 class=\"price\">",
                                    text: jsonItem.price
                                }
                            ]
                        }, {
                            div: "<div class=\"row\">",
                            children: [
                                {
                                    div: "<div class=\"col-md-6\">",
                                    children: [
                                        {
                                            div: "<a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#collapseExample"+key+"\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample"+key+"\">",
                                            children: [
                                                {
                                                    div: "<i class=\"fas fa-chevron-circle-down\">"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    div: "<div class=\"btn-group-toggle col-md-6\" data-toggle=\"buttons\">",
                                    children: [
                                        {
                                            div: "<label class=\"btn btn-secondary active\">",
                                            children: [
                                                {
                                                    div: "<input type=\"checkbox\" checked autocomplete=\"off\">"
                                                }, {
                                                    div: "<i class=\"far fa-star\">"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, {
                            div: "<div class=\"collapse\" id=\"collapseExample"+key+"\">",
                            children: [
                                {
                                    div: "<div class=\"card card-body\">",
                                    children: [
                                        {
                                            div: "<p class=\"card-text\">",
                                            text: jsonItem.description
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    return jsonCard;
}