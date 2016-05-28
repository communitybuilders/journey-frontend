
var pieData = [
    {
        value : 30,
        color : "#00BCD4"
    },
    {
        value : 70,
        color : "#eee"
    }
];

new Chart(document.getElementById("graph").getContext("2d")).Doughnut(pieData,{percentageInnerCutout : 62});

