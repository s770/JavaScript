//Assign the data from `data.js` to a descriptive variable
var tableData = data;


var table_area = d3.select("tbody")
// console.log(tableData);

//create a row for each object in the data

function createPlot(tableData_, columns) {
    
    var rows = table_area.selectAll("tr").data(tableData_).enter().append("tr");
    var cells = rows.selectAll('td')
	    .data(function (row) {
		return columns.map(function (column) {
		    return {column: column, value: row[column]};
		});
	    })
	    .enter()
	    .append('td')
	    .text(function (d) { return d.value; });

}

createPlot(tableData, ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]);


var filters = {}


d3.select("#filter-btn").on("click", function(event){
    var value = document.getElementById("datetime").value;
    
    var tableData1 = tableData.filter(element => element.datetime == value);

    table_area.selectAll("tr").remove();
    createPlot(tableData1, ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]);

});