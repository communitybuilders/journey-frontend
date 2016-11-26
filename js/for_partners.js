$(document).ready(function() {
    for_partners();
});

function for_partners(){

    $.ajax({
        url: "https://journey.communitybuilders.com.au/node/13?_format=json"
    }).then(function(data) {
        $('#title_for_partners').html(data.title[0].value);
        $('#for_partners').html(data.body[0].value);
    });
}