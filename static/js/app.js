// Reading URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function getAPI(data) {
    console.log(data);
});

getAPI(url);


// console.log(data.samples[0].sample_values[0]);
//     let names = [];
//     let sample_values = [];
//     let otu_ids = [];
//     for (let i = 0; i < data.names.length; i++){
//         names.push(data.names[i]);
//         sample_values.push(data.samples[i].sample_values);
//         otu_ids.push(data.samples[i].otu_ids);
//     }
//     // // Sort the data by sample_values descending
//     // slicedData = data.samples.slice(0,10);
//     // console.log(slicedData);

//     // // Reverse the array to accommodate Plotly's defaults
//     // reversedData = slicedData.reverse();
//     // console.log(reversedData);
//     console.log(otu_ids);

//     let trace1 = {
//         x: names,
//         y: sample_values,
//         type: "bar"
//     }; 
//     let dataArray = [trace1];
    
//     Plotly.newPlot("plot", dataArray);

    // let trace1 = {
    //     x: data.map(row => row.samples.sample_values),
    //     y: data.map(row => row.samples.otu_ids),
    //     type: "bar"
    // };

    // let traceData = [trace1];

    // Plotly.newPlot("plot", traceData);
      


// let names = [];
// for (let i = 0; i < data.length; i++){
//     row = data[i];
//     names.push(row.names[i]);
// }

// Sort the data by sample_values descending
//let sorted_sample_values = sample_data.samples.sort((a, b) => b.sample_values - a.sample_values);

// // Slice the first 10 objects for plotting
// slicedData = sorted_sample_values.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// // Trace1 for the data
// let trace1 = {
//   x: reversedData.map(object => object.sample_values),
//   y: reversedData.map(object => object.otu_ids),
//   text: reversedData.map(object => object.otu_labels),
//   type: "bar",
//   orientation: "h"
// };

// // Data array
// // `data` has already been defined, so we must choose a new name here:
// let traceData = [trace1];

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", traceData);


//Use sample_values as the values for the bar chart.

//Use otu_ids as the labels for the bar chart.

//Use otu_labels as the hovertext for the chart.