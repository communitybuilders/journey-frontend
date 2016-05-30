$(document).ready(function() {
    chart_values();
});

function chart_values(){
   $.ajax({
       url: "https://journey.donorwallet.com.au/api/rest",
       method: "POST",
       data: {
           action_type: "summary_statistic",
           api_key: "{{API_KEY}}",
           entity_type: 'campaign',
           entity_id: '787',
           campaign_identifier: 'Jodie',
           include_target_data: "true"
       },
       dataType: 'jsonp',
       jsonpCallback: "jsonpCallback",
       contentType: "application/json;charset=utf-8"
   });
}

function jsonpCallback(data) {
    var success = data.operation !== undefined && data.operation !== "failed" && data.result !== undefined;

    if( success ) {
        // Success!
        if( data.result.targets !== undefined && data.result.targets.length > 0 ) {
            var target = data.result.targets[0];

            $("#amount_raised").text("$ " + target.current_value);

            var pieData = [
                {
                    value : target.current_value,
                    color : "#fb8c00"
                },
                {
                    value : target.target_value,
                    color : "#eee"
                }
            ];

            new Chart(document.getElementById("graph").getContext("2d")).Doughnut(pieData, {percentageInnerCutout : 62});
        }
    }
}
