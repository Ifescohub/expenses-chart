
const charts = $("[class*='chart-']");
const chartAmount = $(".chart-amount");
const chartDay = $(".chart-day");


//Fetching data from JSON file
fetch("./data.json")
.then(response => {
    return response.json();
})

// Dispaly chart amount on chart stick hover
.then(data => {
    charts.hover(function(){ 
        for(i=0; i<data.length; i++){
        $(this).find("#"+[i]).html("$"+data[i].amount);
        $(this).find(chartAmount).toggleClass("active");
        }
      });
});
