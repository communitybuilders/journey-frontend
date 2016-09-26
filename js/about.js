$(document).ready(function() {
    aboutus();
});

function aboutus(){

    $.ajax({
        url: "https://journey.communitybuilders.com.au/node/6?_format=json"
    }).then(function(data) {

        $('#about_us').html(data.body[0].value);
    });
}