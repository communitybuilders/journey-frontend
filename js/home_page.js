$(document).ready(function() {
    home_page();
});

function home_page(){

    $.ajax({
        url: "https://journey.communitybuilders.com.au/node/14?_format=json"
    }).then(function(data) {
        $('#home_page').html(data.body[0].value);
    });
}