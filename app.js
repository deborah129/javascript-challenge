// from data.js
// var tableData = data;
    console.log(data);


// YOUR CODE HERE!

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
var tbody= d3.select("tbody");
data.forEach(function(table){
    console.log(table);
    var row = tbody.append('tr');

    for (var key in table) {
        console.log(`${key}: ${table[key]}`);
      var td = row.append("td");
      td.text(table[key]);
    };

});
var button = d3.select("#filter-btn");

button.on("click", function(){
    var userinput = d3.select("#datetime").property("value");
    console.log(userinput);

    var filterData = data.filter(date=>date.datetime ===userinput);
    // console.log(filterData);
    tbody.html("");

    filterData.forEach(function(table){
        console.log(table);
        var row = tbody.append('tr');
    
        for (var key in table) {
            console.log(`${key}: ${table[key]}`);
          var td = row.append("td");
          td.text(table[key]);
        };
    });
})
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the date/time column to find rows that match user input.

