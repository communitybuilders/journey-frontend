$(document).ready(function() {
    card_generator();
});

function card_generator(){
    $.ajax({
        url: "https://journey.communitybuilders.com.au/rest/views/profiles?_format=json"
    }).then(function(data) {

        $.each(data, function(i, item) {

            if (item.type[0].target_id == 'profile'){
                console.log(item);
                var desc = item.body[0].value;
                var pos = desc.indexOf('.');
                desc = desc.substring(0, pos + 1);

                var organisation = item.field_verified_by[0].value;

                var tax = "<i>* This donation is not tax deductible</i>";

                if (typeof(item.field_tax_deductible_[0]) != "undefined" && item.field_tax_deductible_[0].value == 1) {
                    tax = "<i>* This donation is tax deductible</i>";
                }

                var card = "<div class='col s12 m4'>" +
                                "<div class='card'>" +
                                "<div class='card-image'>" +
                                "<img src='" + item.field_image[0].url + "'>" +
                                "<span class='card-title white-text'>" + item.title[0].value + "</span>" +
                                "</div>" +
                                "<div class='card-content'>" +
                                "<div style='padding-bottom:10px'>" +
                                "<i class='tiny material-icons dp48'>verified_user</i><b style='font-size: 13px;'> Verified by: " + organisation + "</b>" +
                                "</div>" +
                                "<p>" + desc + "</p>" +
                                "<br />" +
                                "<p style='font-size: 13px; text-align: right;'>" + tax + "</p>" +
                                "</div>" +
                                "<div class='card-action' style='text-align: center;'>" +
                                "<a class='btn-large waves-effect waves-light  orange darken-1' href='/profile?id="+ item.nid[0].value + "'>Learn my story</a>" +
                                "</div>" +
                                "</div>" +
                                "</div>";

                $('#card_data').append(card);
            }
        });
    });
}
