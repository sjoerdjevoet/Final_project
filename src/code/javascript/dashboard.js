/*
 *  Sjoerd Zagema
 *  12195677
 *
 * Dashboard.js is the skeleton of the application, all the main function are called
 **/
// Initialising global variables

var colorScheme = ["#E57373", "#BA68C8", "#7986CB", "#A1887F", "#90A4AE", "#AED581", "#9575CD", "#FF8A65", "#4DB6AC",
   "#FFF176", "#64B5F6", "#00E676"
];
var time = ["1976-1985", "1986-1995", "1996-2005", "2006-2015"];
var jsonPeriod = "src/data/1976_1985_period.json"
var timePeriod = "1976-1985"
var map;
var globalData;

window.onload = function() {
   // Wait for data to be ready and create the map
   d3.queue()
      .defer(d3.json, "src/data/1976_1985_period.json")
      .defer(d3.json, "src/data/1986_1995_period.json")
      .defer(d3.json, "src/data/1996_2005_period.json")
      .defer(d3.json, "src/data/2006_2015_period.json")
      .await(function(error) {
         if (error) {
            throw error;
         } else {
            makeMap(jsonPeriod);
         }
      })

   document.getElementById('explainMap')
      .style.display = 'none';

   // On update slider, update map with new dataset
   d3.select("#timeslide")
      .on("input", function() {
         update(+this.value)

         function update(value) {
            document.getElementById("range")
               .innerHTML = time[value];
            inputValue = time[value];
            if (value == 0) {
               jsonPeriod = "src/data/1976_1985_period.json";
               timePeriod = "1976-1985"
               updateMap(jsonPeriod)
            }
            if (value == 1) {
               jsonPeriod = "src/data/1986_1995_period.json";
               timePeriod = "1986-1995"
               updateMap(jsonPeriod)
            }
            if (value == 2) {
               jsonPeriod = "src/data/1996_2005_period.json";
               timePeriod = "1996-2005"
               updateMap(jsonPeriod)
            }
            if (value == 3) {
               jsonPeriod = "src/data/2006_2015_period.json";
               timePeriod = "2006-2015"
               updateMap(jsonPeriod)
            }
         }
      })

   // Update map based on dataset
   function updateMap(jsonPeriod) {
      document.getElementById('explainTitle')
         .innerHTML = "";
      document.getElementById('explainMap')
         .style.display = 'none';
      document.getElementById('heatmapTitle')
         .innerHTML = "";
      document.getElementById('donutChart')
         .innerHTML = "";
      document.getElementById('updateBarChart')
         .innerHTML = "";
      document.getElementById('groupTypes')
         .innerHTML = "";
      document.getElementById('donutChartTitle')
         .innerHTML = "";
      document.getElementById('selectedCountryTitle')
         .innerHTML = "";
      document.getElementById('attackTypes')
         .innerHTML = "";
      document.getElementById('heatMap')
         .innerHTML = "";
      d3.json(jsonPeriod, function(error, data) {
         attackList(data);
         dataset = {};
         colordataset = {};
         colorMap()
         map.updateChoropleth(dataset, {
            reset: true
         })
      })
   }

   // Initialise Map with dataset
   function makeMap(jsonPeriod) {
      jsonPeriod = jsonPeriod
      d3.json(jsonPeriod, function(error, data) {
         data.forEach(function(d) {
            d.Aanslagen = +d.Aanslagen
         });
         attackList(data);
         colorMap()
         // Render map
         map = new Datamap({
            scope: 'world',
            element: document.getElementById('map'),
            setProjection: function(element) {
               var projection = d3.geo.equirectangular()
                  .center([13, 52])
                  .scale(900)
                  .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
               var path = d3.geo.path()
                  .projection(projection);
               return {
                  path: path,
                  projection: projection
               };
            },
            fills: {
               HIGH: '#002eff',
               AVERAGE: '#00a1ff',
               LOW: '#ccebff',
               UNKNOWN: '#707070',
               defaultFill: '#707070'
            },
            done: function(datamap) {
               datamap.svg.selectAll('.datamaps-subunit')
                  .on('click', function(geography) {
                     document.getElementById('explainTitle')
                        .innerHTML = "";
                     document.getElementById('explainMap')
                        .style.display = 'none';
                     document.getElementById('heatmapTitle')
                        .innerHTML = "";
                     document.getElementById('donutChart')
                        .innerHTML = "";
                     document.getElementById('updateBarChart')
                        .innerHTML = "";
                     document.getElementById('groupTypes')
                        .innerHTML = "";
                     document.getElementById('donutChartTitle')
                        .innerHTML = "";
                     document.getElementById('selectedCountryTitle')
                        .innerHTML = "";
                     document.getElementById('attackTypes')
                        .innerHTML = "";
                     document.getElementById('heatMap')
                        .innerHTML = "";

                     d3.select("#explainTitle")
                        .html("How to use these visualisations ?")
                     document.getElementById('explainMap')
                        .style.display = '';

                     // Check if selected country has any data
                     var selectedCountry = geography.properties.name;
                     var checkdataCountry = CheckdataforCountry(selectedCountry)
                     if (checkdataCountry == false) {
                        noDataAlert(selectedCountry)
                     } else {
                        // Building dicts and create visulations based on the dicts
                        prepareDonutchart(selectedCountry)
                        prepareHeatmap(selectedCountry)
                        prepareBarchart(selectedCountry)
                        makeDonutchart(piechartList, "#donutChart", colorScheme);
                        makeBarchart()
                        makeHeatmap(collectDataHeatmap);

                        d3.select("#selectedCountryTitle")
                           .html(selectedCountry + " " + timePeriod)

                        var selectedCountryTitle = document.getElementById('selectedCountryTitle')
                        scrollToElement(selectedCountryTitle, undefined, undefined, undefined)
                     }
                  });
            },
            data: dataset,
            geographyConfig: {
               borderColor: '#DEDEDE',
               highlightBorderWidth: 2,
               highlightFillColor: function(geo) {
                  return geo['#E8E8E8'];
               },
               highlightBorderColor: '#B7B7B7',
               popupTemplate: function(geo, data) {
                  // Don't show tooltip if country don't present in dataset
                  if (!data || data.Aanslagen == null) {
                     return ['<div class="hoverinfo">', '<strong>', 'No data', '</strong>', '</div>']
                        .join('');
                  }
                  // Show tooltip
                  return ['<div class="hoverinfo">', '<strong>', geo.properties.name, '</strong>',
                     '<br>Aanslagen: <strong>', data.Aanslagen, '</strong>', '</div>'
                  ].join('');
               }
            }
         })
      })
   }
}
