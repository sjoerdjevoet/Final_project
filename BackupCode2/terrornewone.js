var aanslagen = 0
var doden = 0
var totaaldoden = 0
var countrylist = []
var dictaanslagen_for_map =[]
var dictforpiechart = []
var dict_for_doden;
var global_data;
var data_75_85 = "1975_1985_period.json"
var data_85_95 = "1985_1995_period.json"
var data_95_05 = "1995_2005_period.json"
var data_05_15 = "2005_2015_period.json"
var jsonfile
var inputValue = null;
var time = ["1975-1985","1985-1995","1995-2005","2005-2015"];


var margin = {top: 50, right: 50, bottom: 50, left:50},
      width = 800 - margin.right - margin.left,
      height = 800 - margin.top - margin.bottom;

var svg = d3.select("#map")
       //
       .append("svg")
       .attr ({
       "width": width + margin.right + margin.left,
       "height": height + margin.top + margin.bottom
       })


       .append("g")
       .attr("transform","translate(" + margin.left + "," + margin.right + ")");
console.log(svg);

       // init tooltip
         var tooltip = d3.select("#map")
             .append("div")
             .attr("class", "tooltip hidden");

             // offsets needed for tooltip
          var offsetL = document.getElementById("map").offsetLeft - 70;
          var offsetT = document.getElementById("map").offsetTop + 10;

       // color scale for map
   var color = d3.scale.quantize()
       .range(["#006600", "#2EAB66", "#BAD15E", "#FCEB12", "#FFC912", "#EB5C1C", "#D63030", "#A62430", "#990000"]);


       // define map projection
         var projection = d3.geo.mercator()
             .center([13, 52])
             .scale(900);

         var path = d3.geo.path()
             .projection(projection);


LoadData("1975_1985_period.json")

if (document.getElementById("range").innerHTML == "1975-1985") {
        jsonfile = "1995_2005_period.json"
      }
d3.select("#timeslide").on("input", function() {
    update(+this.value)

    function update(value) {

      d3.selectAll('#chart').remove();
      d3.selectAll('#map').remove();

      document.getElementById("range").innerHTML=time[value];
        inputValue = time[value];
        console.log("Waarde inputvalue "+ inputValue);

    if (value == 0) {
      jsonfile = "1975_1985_period.json";

      }
    if (value == 1) {// alert(value);
      jsonfile = "1985_1995_period.json";

      }
      if (value == 3) {
          jsonfile = "1995_2005_period.json";
          }
          if (value == 4) {
              jsonfile = "2005_2015_period.json";
            }
            console.log(jsonfile);

                       LoadData(jsonfile)
          }

})

function LoadData(jsonfile){
  jsonfile = jsonfile
  console.log(jsonfile);
d3.json(jsonfile, function (error,data) {

global_data = data;


  for (i = 0; i <data.length;i++){


  country = data[i].country_txt
  countrylist.push(country)

    /*dictaanslagen_for_map.push({

        "Country" : data[i].country_txt,
        "Aanslagen" : aanslagen
      });*/
}
ListForAanslagen(global_data)
ListFordoden(global_data)
ListforPiechart(global_data)

var colorScheme = ["#E57373","#BA68C8","#7986CB","#A1887F","#90A4AE","#AED581","#9575CD","#FF8A65","#4DB6AC","#FFF176","#64B5F6","#00E676"];
renderPieChart(dictforpiechart,"#chart",colorScheme);

d3.queue()
.defer(d3.json, "world.json")
.defer(d3.json, jsonfile)
.await(makeMap);

})
}


function ListForAanslagen(global_data) {
  global_data = global_data

    array_elements = countrylist;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {

                dictaanslagen_for_map.push({

                    "Country" : current,
                    "Aanslagen" : cnt
                  });
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
      dictaanslagen_for_map.push({

          "Country" : current,
          "Aanslagen" : cnt
        });
    }
  //  console.log(dictaanslagen_for_map);
//console.log(dictaanslagen_for_map[0].Country);
//console.log(global_data[0].country_txt);
}

function ListFordoden(global_data) {
  global_data = global_data
var listy = []
var otherlist= []
var countydeads = 0;
values = [];


for (var i = 0; i < dictaanslagen_for_map.length; i++){
  country = dictaanslagen_for_map[i].Country

  for (var j = 0; j < global_data.length; j++){
countryjson = global_data[j].country_txt

if (country == countryjson & global_data[j].nkill != 0){

  listy.push({

      "Country" : country,
      "Doden" : global_data[j].nkill
    });


//console.log(values);
    /*if (listy[j].country == country)
        {
            values.push(listy[i].value);
        }*/
//console.log("blbla"+Object.keys('Albania'))


}
}

}


var linq = Enumerable.From(listy);
dict_for_doden =
    linq.GroupBy(function(x){ return x.Country; })
        .Select(function(x){
          return {
            Phase: x.Key(),
            Value: x.Sum(function(y){ return y.Doden|0; })
          };
        }).ToArray();
        console.log(dict_for_doden);
}


function ListforPiechart(global_data) {
  global_data = global_data
dictforpiechart = []
var lijst_attacktypes = []
for (i = 0; i< global_data.length; i++){
  var check = global_data[i].attack_type
  lijst_attacktypes.push(check)
}

array_elements = lijst_attacktypes;

array_elements.sort();

var current = null;
var cnt = 0;
for (var i = 0; i < array_elements.length; i++) {
    if (array_elements[i] != current) {
        if (cnt > 0) {

            dictforpiechart.push({

                "label" : current,
                "value" : cnt
              });
        }
        current = array_elements[i];
        cnt = 1;
    } else {
        cnt++;
    }
}
if (cnt > 0) {
  dictforpiechart.push({

    "label" : current,
    "value" : cnt
    });
}
console.log(dictforpiechart);
}




function renderPieChart (dataset,dom_element_to_append_to, colorScheme){

		var margin = {top:50,bottom:50,left:50,right:50};
		var width = 500 - margin.left - margin.right,
		height = width,
		radius = Math.min(width, height) / 2;
		var donutWidth = 75;
		var legendRectSize = 18;
		var legendSpacing = 4;

		dataset.forEach(function(item){
			item.enabled = true;
		});

		var color = d3.scale.ordinal()
		.range(colorScheme);

		var svg = d3.select(dom_element_to_append_to)
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

console.log(svg);
		var arc = d3.svg.arc()
		.outerRadius(radius - 10)
		.innerRadius(radius - donutWidth);

		var pie = d3.layout.pie()
		.sort(null)
		.value(function(d) { return d.value; });

		var tooltip = d3.select(dom_element_to_append_to)
		.append('div')
		.attr('class', 'tooltipper');


		tooltip.append('div')
		.attr('class', 'label');

		tooltip.append('div')
		.attr('class', 'count');

		tooltip.append('div')
		.attr('class', 'percent');

		var path = svg.selectAll('path')
		.data(pie(dataset))
		.enter()
		.append('path')
		.attr('d', arc)
		.attr('fill', function(d, i) {
			return color(d.data.label);
		})
		.each(function(d) { this._current = d; });


		path.on('mouseover', function(d) {
			var total = d3.sum(dataset.map(function(d) {
				return (d.enabled) ? d.value : 0;
			}));

			var percent = Math.round(1000 * d.data.value / total) / 10;
			tooltip.select('.label').html(d.data.label.toUpperCase()).style('color','black');
			tooltip.select('.count').html(d.data.value);
			tooltip.select('.percent').html(percent + '%');

			tooltip.style('display', 'block');
			tooltip.style('opacity',2);

		});


		path.on('mousemove', function(d) {
			tooltip.style('top', (d3.event.layerY + 10) + 'px')
			.style('left', (d3.event.layerX - 25) + 'px');
		});

		path.on('mouseout', function() {
			tooltip.style('display', 'none');
			tooltip.style('opacity',0);
		});

		var legend = svg.selectAll('.legend')
		.data(color.domain())
		.enter()
		.append('g')
		.attr('class', 'legend')
		.attr('transform', function(d, i) {
			var height = legendRectSize + legendSpacing;
			var offset =  height * color.domain().length / 2;
			var horz = -2 * legendRectSize;
			var vert = i * height - offset;
			return 'translate(' + horz + ',' + vert + ')';
		});

		legend.append('rect')
		.attr('width', legendRectSize)
		.attr('height', legendRectSize)
		.style('fill', color)
		.style('stroke', color)
		.on('click', function(label) {
			var rect = d3.select(this);
			var enabled = true;
			var totalEnabled = d3.sum(dataset.map(function(d) {
				return (d.enabled) ? 1 : 0;
			}));

			if (rect.attr('class') === 'disabled') {
				rect.attr('class', '');
			} else {
				if (totalEnabled < 2) return;
				rect.attr('class', 'disabled');
				enabled = false;
			}

			pie.value(function(d) {
				if (d.label === label) d.enabled = enabled;
				return (d.enabled) ? d.value : 0;
			});

			path = path.data(pie(dataset));

			path.transition()
			.duration(750)
			.attrTween('d', function(d) {
				var interpolate = d3.interpolate(this._current, d);
				this._current = interpolate(0);
				return function(t) {
					return arc(interpolate(t));
				};
			});
		});


		legend.append('text')
		.attr('x', legendRectSize + legendSpacing)
		.attr('y', legendRectSize - legendSpacing)
		.text(function(d) { return d; })
	};

function UpdateMap(error,data) {

  if (error) throw error;
  //console.log(data);
  makeLegend()


    for (i = 0; i < dictaanslagen_for_map.length; i++) {

        var CountryDict = dictaanslagen_for_map[i].Country;
        var dataAanslagen = dictaanslagen_for_map[i].Aanslagen;

    for (j = 0; j < data.features.length; j++) {
    var Countryjson = data.features[j].properties.admin;

    if (CountryDict == Countryjson) {

              data.features[j].properties.aanslagen = dataAanslagen;
            break;
            }
            }
          }

     var valueMax = d3.max(dictaanslagen_for_map, function(d) {
         return d.Aanslagen;
     });
     var valueMin = d3.min(dictaanslagen_for_map, function(d) {
         return d.Aanslagen;

     });

     color.domain([valueMin, valueMax]);

      svg.selectAll("path")
              .data(data.features)
              .enter()
              .append("path")
              .attr("class", "country")
              .attr("d", path)
              .on("mousemove", showTooltip)
              .on("mouseout", function(d, i) {
                  tooltip.classed("hidden", true);
              })
              .attr("fill", function(d) {
                  // Get the data value
                  var value = d.properties.aanslagen;

                  if (value) {
                      return color(value);
                  } else {
                      return "gray";
                  }
              });

  }


function makeMap(error,data){

if (error) throw error;
//console.log(data);
makeLegend()


  for (i = 0; i < dictaanslagen_for_map.length; i++) {

      var CountryDict = dictaanslagen_for_map[i].Country;
      var dataAanslagen = dictaanslagen_for_map[i].Aanslagen;

  for (j = 0; j < data.features.length; j++) {
  var Countryjson = data.features[j].properties.admin;

  if (CountryDict == Countryjson) {

            data.features[j].properties.aanslagen = dataAanslagen;
          break;
          }
          }
        }

   var valueMax = d3.max(dictaanslagen_for_map, function(d) {
       return d.Aanslagen;
   });
   var valueMin = d3.min(dictaanslagen_for_map, function(d) {
       return d.Aanslagen;

   });

   color.domain([valueMin, valueMax]);

    svg.selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("class", "country")
            .attr("d", path)
            .on("mousemove", showTooltip)
            .on("mouseout", function(d, i) {
                tooltip.classed("hidden", true);
            })
            .attr("fill", function(d) {
                // Get the data value
                var value = d.properties.aanslagen;

                if (value) {
                    return color(value);
                } else {
                    return "gray";
                }
            });

}

function makeLegend() {
        // defs element to store linear gradient
        var defs = svg.append("defs");

        // width and height for legend
        var legendWidth = width * 0.15;
        var legendHeight = 20;

        // set scale for legends x-axis
        var xScale = d3.scale.ordinal()
            .domain([ "Weinig", "Gem", "Veel"])
            .rangePoints([0, legendWidth]);

        // scale x-axis
        var xAxis = d3.svg.axis()
            .orient("bottom")
            .scale(xScale);

        // container that holds the legend
        var legendsvg = svg.append("g")
            .attr("class", "legendWrapper")
            .attr("transform", "translate(" + (width / 10) + "," + (-680) + ")");

        // appending the linear gradient
        var linearGradient = defs.append("linearGradient")
            .attr("id", "linear-gradient");

        // horizontal gradient
        linearGradient
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        // append multiple color stops by using data/enter/append
        linearGradient.selectAll("stop")
            .data(color.range())
            .enter().append("stop")
            .attr("offset", function(d, i) {
                return i / (color.range().length - 1);
            })
            .attr("stop-color", function(d) {
                return d;
            });

        // legend title
        legendsvg.append("text")
            .attr("class", "legendTitle")
            .attr("x", 0)
            .attr("y", height - 55)
            .text("Aanslagen");

        // draw the rectangle and fill with gradient
        legendsvg.append("rect")
            .attr("class", "legendRect")
            .attr("x", -legendWidth / 2)
            .attr("y", height - 40)
            .attr("width", legendWidth)
            .attr("height", legendHeight)
            .style("fill", "url(#linear-gradient)");

        // set up and position x axis
        legendsvg.append("g")
            .attr("class", "axis_legend")
            .attr("transform", "translate(" + (-legendWidth / 2) + "," + (height - legendHeight) + ")")
            .call(xAxis);

    }

function showTooltip(d) {

       if (d.properties.aanslagen != null) {
           label = d.properties.aanslagen;
       } else {
           label = "No Data";
       }

     var mouse = d3.mouse(svg.node())
         .map(function(d) {
             return parseInt(d);
         });

     tooltip.classed("hidden", false)
         .attr("style", "left:" + (mouse[0] + offsetL) + "px;top:" + (mouse[1] + offsetT) + "px")
         .html("<b>Country: </b>" + d.properties.admin + "<br>" + "<b>Aanslagen: </b>" + label);
 }
