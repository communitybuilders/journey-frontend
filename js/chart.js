$(document).ready(function() {
    chart_values();
});

function chart_values(){
//    $.ajax({
//        url: "https://journey.donorwallet.com.au/api/rest",
//        method: "POST",
//        data: {
//            action_type: "summary_statistic",
//            api_key: "<api key>",
//            entity_type: 'campaign',
//            entity_id: '787',
//            campaign_identifier: 'Jodie'
//        },
//        dataType: 'jsonp',
//        jsonpCallback: 'callback',
//        contentType: "application/json"
//    }).then(function(data) {
//        console.log(data);
//    });
}


var number = randomNumber = Math.floor(Math.random()*(100-10+1)+10);
var number2 = 100 - number;

var pieData = [
    {
        value : number,
        color : "#fb8c00"
    },
    {
        value : number2,
        color : "#eee"
    }
];

new Chart(document.getElementById("graph").getContext("2d")).Doughnut(pieData,{percentageInnerCutout : 62});

