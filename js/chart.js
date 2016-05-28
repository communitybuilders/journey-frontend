
var pieData = [
    {
        value : 30,
        color : "#fb8c00"
    },
    {
        value : 70,
        color : "#eee"
    }
];

new Chart(document.getElementById("graph").getContext("2d")).Doughnut(pieData,{percentageInnerCutout : 62});

