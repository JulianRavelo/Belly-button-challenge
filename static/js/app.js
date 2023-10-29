// Reading URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data.metadata[0].ethnicity);
  let names = [];
  let sample_values = [];
  let labels = [];
  let otu_ids = [];

  for (let i = 0; i < data.names.length; i++){
    names.push(data.names[i]);
    sample_values.push(data.samples[i].sample_values);
    otu_ids.push(data.samples[i].otu_ids);
    labels.push(data.samples[i].otu_labels); 
  };

  // Reference for input element
  let selector = d3.select("#selDataset");

  // Adding list of IDs to list on HTML
  names.forEach((sample) => {
    selector.append("option").text(sample).property("value", sample);
  });

  // Setting changing event
  selector.on("change", function(event) {
    let newText = event.target.value;
    console.log(newText);
  
    // Getting key values function
    function getKeyByValue(object, value) { 
      return Object.keys(object).find(key => 
        object[key] === newText); 
    };

    let ans = getKeyByValue(names, '940'); 
    console.log(ans);

    //Function for Bubble chart
    function bubbleChart() {
      let trace2 = [{
        type: "scatter",
        mode: 'markers',
        x: otu_ids[ans],
        y: sample_values[ans],
        marker: {
          size: sample_values[ans],
          color: otu_ids[ans]
        },
        text: labels[ans]
      }];

      Plotly.newPlot("bubble", trace2);
    };
    bubbleChart();

    //Function for Bubble chart
    function barChart() {
      // Organising data for bar chart
      slicedSample = sample_values[ans].slice(0, 10);
      slicedOTU = otu_ids[ans].slice(0, 10);
      let reversedSample = slicedSample.reverse();
      let reversedOTU_ = slicedOTU.reverse();
      let reversedOTU = [];

      for (let i=0; i< reversedOTU_.length; i++){
        reversedOTU.push("OTU " + reversedOTU_[i])
      };

      let trace1 = [{
        x: reversedSample,
        y: reversedOTU,
        hovertemplate: labels[ans],
        type: "bar",
        orientation: "h"
      }];

      let layout = {
        xaxis: {
          range: [0, Math.max(reversedOTU)],
        }
      };

      Plotly.newPlot("bar", trace1, layout);
    };
    barChart();

    function clearData() {
      const myElement = d3.select("#sample-metadata");
      myElement.text('');
    };
    clearData();

    // Function for Demographic information
    function demographic() {
      let metadata = [];

      metadata = [`id: ${names[ans]}`,
      `ethnicity: ${data.metadata[ans].ethnicity}`,
      `gender: ${data.metadata[ans].gender}`,
      `age: ${data.metadata[ans].age}`,
      `location: ${data.metadata[ans].location}`,
      `bbtype: ${data.metadata[ans].bbtype}`,
      `wfreq: ${data.metadata[ans].wfreq}`];
      
      for (let i=0; i< metadata.length; i++){
        output = d3.select("#sample-metadata")
        .append("div")
        .text(metadata[i])
      };
    };
    demographic();

  });

  // Setting key values function for initial graph
  // Bubble chart
  let ans = 0; 
  function init() {
    let trace2 = [{
      type: "scatter",
      mode: 'markers',
      x: otu_ids[ans],
      y: sample_values[ans],
      marker: {
        size: sample_values[ans],
        color: otu_ids[ans]
      },
      text: labels[ans]
    }];

    Plotly.newPlot("bubble", trace2);

    // Bar chart
    slicedSample = sample_values[ans].slice(0, 10);
    slicedOTU = otu_ids[ans].slice(0, 10);
    let reversedSample = slicedSample.reverse();
    let reversedOTU_ = slicedOTU.reverse();
    let reversedOTU = [];

    for (let i=0; i< reversedOTU_.length; i++){
      reversedOTU.push("OTU " + reversedOTU_[i])
    };

    let trace1 = [{
      x: reversedSample,
      y: reversedOTU,
      hovertemplate: labels[ans],
      type: "bar",
      orientation: "h"
    }];

    let layout = {
      xaxis: {
        range: [0, Math.max(reversedOTU)],
      }
    };

    Plotly.newPlot("bar", trace1, layout);

    // Demographic information
    let metadata = [`id: ${names[ans]}`,
    `ethnicity: ${data.metadata[ans].ethnicity}`,
    `gender: ${data.metadata[ans].gender}`,
    `age: ${data.metadata[ans].age}`,
    `location: ${data.metadata[ans].location}`,
    `bbtype: ${data.metadata[ans].bbtype}`,
    `wfreq: ${data.metadata[ans].wfreq}`];

    for (let i=0; i< metadata.length; i++){
      output = d3.select("#sample-metadata")
      .append("div")
      .text(metadata[i])
    }
  };
  init();

});