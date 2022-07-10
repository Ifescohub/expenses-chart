
const charts = $("[class*='chart-']");
const chartAmount = $(".chart-amount");

// Dispaly chart amount on chart stick hover

charts.hover(function(){ 
    $(this).find(chartAmount).toggleClass("active");
});


