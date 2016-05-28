$(document).ready(function() {
    card_generator();
});

function card_generator(){
    $.ajax({
        url: "https://journey.communitybuilders.com.au/rest/views/profiles?_format=json"
    }).then(function(data) {

        $.each(data, function(i, item) {


            if (item.type[0 ].target_id == 'profile'){
             //   var body =  item.type[0 ].target_id;
                //console.log(item.body[0 ].value);

                var card = "<div class='col s12 m4'>" +
                                "<div class='card'>" +
                                "<div class='card-image'>" +
                                "<img src='" + item.field_image[0].url + "'>" +
                                "<span class='card-title white-text'>" + item.title[0].value + "</span>" +
                                "</div>" +
                                "<div class='card-content'>" +
                                "<p>" + item.body[0].value + "</p>" +
                                "</div>" +
                                "<div class='card-action'>" +
                                "<a class='cyan-text' href='profile.html?id="+ item.nid[0].value + "'>Join my journey</a>" +
                                "</div>" +
                                "</div>" +
                                "</div>";

                            $('#card_data').append(card);
            }
        });
    });
}