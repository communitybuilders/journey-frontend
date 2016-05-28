$(document).ready(function() {
    profile();
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function profile(){

    var id = getParameterByName('id');

    $.ajax({
        url: "http://journey.communitybuilders.com.au/node/" + id + "?_format=json"
    }).then(function(data) {

        $('#name').append(data.title[0].value);
        $('#image').append('<img src="'+  data.field_image[0].url + '" alt="Journey" style="display: block; transform: translate3d(-50%, 169px, 0px);">');
        $('#story').append(data.body[0].value);
        $('#help_info').append(data.field_ask[0].value);
        $('#verified_by').append(data.title[0].value);

    });
}