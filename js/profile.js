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
        url: "https://journey.communitybuilders.com.au/node/" + id + "?_format=json"
    }).then(function(data) {

        var tax = "<i>* This donation is not tax deductible</i>";

        if (typeof(data.field_tax_deductible_[0]) != "undefined" && data.field_tax_deductible_[0].value == 1) {
            tax = "<i>* This donation is tax deductible</i>";
        }

        $('#name').append("My name is " + data.title[0].value + "...");
        $('#image').append('<img src="'+  data.field_image[0].url + '" alt="Journey" style="display: block; transform: translate3d(-50%, 169px, 0px);">');
        $('#story').append(data.body[0].value);
        $('#help_info').append(data.field_ask[0].value);
        $('#verified_by').append(data.field_verified_by[0].value);
        $('.tax_deductible').append("<div style='font-size: 13px;'>" + tax + "</div>");
        $('.donate_button').append("<a href='" + data.field_donate_url[0].uri + "' class='btn-large waves-effect waves-light orange darken-1'>Donate</a>");
        if (typeof(data.field_dw_campaign_id[0]) != "undefined" && data.field_dw_campaign_id[0].value == 1) {
            chart_values(data.field_dw_campaign_id[0].value);
        }

    });
}

function chart_values(entity_id){

    var url = "https://journey.communitybuilders.com.au/donorwallet?entity_id=" + entity_id;

    $.get(url, function(data) {
        var result = $.parseJSON(data);
        // Success!
        if( result.operation == "success" ) {
            var target = result.result.targets[0];

            $("#amount_raised").text("$ " + target.current_value);
            $("#target").text("$ " + target.target_value);

            var pieData = [
                {
                    value : target.current_value,
                    color : "#fb8c00"
                },
                {
                    value : target.target_value - target.current_value,
                    color : "#eee"
                }
            ];

            new Chart(document.getElementById("graph").getContext("2d")).Doughnut(pieData, {percentageInnerCutout : 62});
        }
    });
}