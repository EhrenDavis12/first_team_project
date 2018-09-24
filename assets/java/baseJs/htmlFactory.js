
var htmlFactory = {
    createCardByArrayOfJson: function (parentDiv, cardArrayOfJson) {
        let elementDiv = $("<div>");
        elementDiv.addClass("card");
        htmlFactory.createByArrayOfJson(elementDiv, cardArrayOfJson);
        $(parentDiv).append(elementDiv);

    },
    createByArrayOfJson: function (parentDiv, cardArrayOfJson) {
        cardArrayOfJson.forEach(element => {
            htmlFactory.createSubElement(parentDiv, element);
        });

    },

    createSubElement: function (parentDiv, jsonElement) {

        let elementDivType = htmlFactory.getJsonProperty(jsonElement, "div");
        let elementText = htmlFactory.getJsonProperty(jsonElement, "text");
        let elementArrayAttr = htmlFactory.getJsonProperty(jsonElement, "attrs");
        let elementChildren = htmlFactory.getJsonProperty(jsonElement, "children");

        let elementDiv = $(elementDivType);
        elementDiv.text(elementText);
        $.each(elementArrayAttr, function (key, value) {
            elementDiv.attr(key, value);
        });

        if (elementChildren !== null){
            htmlFactory.createByArrayOfJson(elementDiv,elementChildren)
        }

        $(parentDiv).append(elementDiv);
    },

    getJsonProperty: function (json, prop) {
        return json[prop] || null;
    }
};

