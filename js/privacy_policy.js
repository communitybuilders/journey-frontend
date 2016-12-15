$(document).ready(function() {
    privacy_policy();
});

function privacy_policy(){

    $.ajax({
        url: "https://journey.communitybuilders.com.au/node/16?_format=json"
    }).then(function(data) {
        $('#title_privacy_policy').html(data.title[0].value);
        $('#privacy_policy').html(data.body[0].value);
    });
}
