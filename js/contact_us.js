$(document).ready(function() {
    contact_us();
});

function contact_us(){

    $.ajax({
        url: "https://journey.communitybuilders.com.au/node/10?_format=json"
    }).then(function(data) {
        $('#title_contact_us').html(data.title[0].value);
        $('#contact_us').html(data.body[0].value);
    });
}