$(document).ready(function() {
    terms_of_use();
});

function terms_of_use(){

    $.ajax({
        url: "https://journey.communitybuilders.com.au/node/12?_format=json"
    }).then(function(data) {
        $('#title_terms_of_use').html(data.title[0].value);
        $('#terms_of_use').html(data.body[0].value);
    });
}
