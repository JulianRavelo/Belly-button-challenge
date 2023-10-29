// Reading URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
  let names = [];
  let sample_values = [];
  let otu_ids = [];
  for (let i = 0; i < data.names.length; i++){
    names.push(data.names[i]);
    sample_values.push(data.samples[i].sample_values);
    otu_ids.push(data.samples[i].otu_ids);  
  };

  // Adding word OTU in front of each value
  for (let i = 0; i < otu_ids.length; i++){
    for (let j = 0; j < otu_ids[i].length; j++){
      console.log(i +", "+ j)
      otu_ids[i][j] = 'OTU ' + otu_ids[i][j];
    };
  };

  // Reference for input element
  let selector = d3.select("#selDataset");

  // Setting changing event
  selector.on("change", function(event) {
    let newText = event.target.value;
    console.log(newText);
  });

  // Adding list of IDs to list on HTML
  names.forEach((sample) => {
    selector.append("option").text(sample).property("value", sample);
  });

  // Initial function for home page  
  function init() {
    // Organising data for bar chart
    slicedSample = sample_values[0].slice(0, 10);
    slicedOTU = otu_ids[0].slice(0, 10);

    let reversedSample = slicedSample.reverse();
    let reversedOTU = slicedOTU.reverse();
    let trace1 = [{
      x: reversedSample,
      y: reversedOTU,
      labels: names,
      type: "bar",
      orientation: "h"
    }];

    let layout = {
      height: 600,
      width: 12000
    };

    Plotly.newPlot("bar", trace1);
  }

  // On change to the DOM, call getData()
  d3.selectAll("#selDataset").on("change", getData);

  // Function called by DOM changes
  function getData() {
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a letiable
    let dataset = dropdownMenu.property("value");
    // Initialize an empty array for the country's data
    let data = [];

    if (dataset == '940') {
      data = trace1[0];
    }
    else if (dataset == '941') {
      data = trace1[1];
    }

  // Call function to update the chart
    updatePlotly(data);
  }

  // Update the restyled plot's values
  function updatePlotly(newdata) {
    Plotly.restyle("bar", "values", [newdata]);
  }


  init();
  console.log(sample_values[0]);
  console.log(names); 
});

