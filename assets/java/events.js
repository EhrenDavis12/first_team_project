$(document).ready(function () {

    main();

    $(document).on("click", "#searchBtn", function () {
        search();
    });

    $(document).on("click", ".favorite", function () {
        addToFavorites($(this).attr("data-parent"));
    });

    $(document).on("click", "#favorites", function () {
        buildFavorites();
    });




});