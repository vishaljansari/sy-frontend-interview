// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked
$(document).ready(function () {

    var count = $(".item-list > div").length;

    $(document.body).on('click', '.title', function () {
        $data = $title.next();
        $data.slideToggle(300);
    });

    // 2. Remove each item when we click on the closing X

    $(document.body).on('click', '.close', function () {
        $(this).closest('div').remove();
    });

    // 3. Create a new item using the input field
    //    The title of the new item has to match the input value
    //    The new item should also have the same properties (collapse/expand and close) as the other items


    $(document.body).on('click', '.add', function () {

        var inputData = $('#newtitle').val();

        if (inputData.length > 0) {
            $("<div class='item'><h1 class='title'>" + inputData + "<span class='close'>x</span></h1><p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p></div>").appendTo('.item-list');
            $('#newtitle').val('');
            count++;
        } else {
            count++;
            $("<div class='item'><h1 class='title'>" + "Title " + count + "<span class='close'>x</span></h1><p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p></div>").appendTo('.item-list');
        }
        $("html, body").animate({
            scrollTop: $(document).height()
        }, "slow");
    });
});

//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page