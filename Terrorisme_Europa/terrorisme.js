// Sjoerd Zagema (12195677)

// initialising global variables
var jaarjson
var jaar
jaar = 2017
dict_for_aanslagen = []
dict_for_doden = []
var globaldata;
var time = ["1975-1985","1985-1995","1995-2005","2005-2015"];
var dataset;
dataset = {};
colordataset = {};
var map;

// wait for data to be ready and create the map
  d3.queue()
  .defer(d3.json, "1975_1985_period.json")
  .defer(d3.json, "1985_1995_period.json")
  .defer(d3.json, "1995_2005_period.json")
  .defer(d3.json, "2005_2015_period.json")
  .await( function (error) {
    if (error){throw error;} else {MakeMap("1975_1985_period.json");}
})

d3.select("#timeslide").on("input", function() {
    update(+this.value)

    function update(value) {

      document.getElementById("range").innerHTML=time[value];
        inputValue = time[value];

    if (value == 0) {
      console.log(value);
      jaarjson = "1975_1985_period.json";
      //d3.selectAll('#BarChart').remove();
      //document.getElementById('bar_title').innerHTML = "";
      //document.getElementById('textbar').style.display = 'none';
      Updatemap(jaarjson)
    console.log(dict_for_aanslagen);

      //map.updateChoropleth(dataset)
      }
    if (value == 1) {// alert(value);
      console.log(value);
      jaarjson = "1985_1995_period.json";

    Updatemap(jaarjson)
    console.log(dict_for_aanslagen);

      }
      if (value == 2) {
        console.log(value);
        jaarjson = "1995_2005_period.json";

        Updatemap(jaarjson)
          console.log(dict_for_aanslagen);

        }

          if (value == 3) {

            console.log(value);
            jaarjson = "2005_2015_period.json";

                Updatemap(jaarjson)
                console.log(dict_for_aanslagen);

            }
    }
})

function Updatemap(jsonjaren){
document.getElementById('donutchart').innerHTML = "";
document.getElementById('updatebarchart').innerHTML = "";
document.getElementById('grouptypes').innerHTML = "";
document.getElementById('donutcharttitle').innerHTML = "";
document.getElementById('informationcountry').innerHTML = "";
document.getElementById('attacktypes').innerHTML = "";
document.getElementById('trafficAccidents').innerHTML = "";
document.getElementById('dataDiv').innerHTML = "";


  jaarjson = jsonjaren

  // making sure variables are casted to numbers and not strings
  d3.json(jaarjson, function (error, data) {
console.log(jaarjson);
  data.forEach(function(d) {
  d.Aanslagen= + d.Aanslagen
  });

  lijstAanslagen(data);
  LijstDoden(data);

  // map Aanslagen
  //var Aanslagen = dict_for_aanslagen.map(function(d){ return d.Aanslagen; });

  // look for maxium and minimum value of Aanslagen
//  var minValue = Math.min.apply(null, Aanslagen),
//  maxValue = Math.max.apply(null, Aanslagen);

  dict_for_aanslagen.forEach(function(item){
  var itemvalue = item.ID,
  value = item.Aanslagen;
    if (value <= 10){ dataset[itemvalue] = { Aanslagen: value, fillKey: 'LOW' };
    colordataset[itemvalue] = {fillKey: 'LOW'}
    }
      else if (value >=11 && value <= 50) {
      dataset[itemvalue] = { Aanslagen: value, fillKey: 'AVERAGE' };
      colordataset[itemvalue] = {fillKey: 'AVERAGE'}

      }

        else if (value >=50 && value <= 1000) {
        dataset[itemvalue] = { Aanslagen: value, fillKey: 'HIGH' };
        colordataset[itemvalue] = {fillKey: 'HIGH'}

        }

        else if (value > 1000) {
        dataset[itemvalue] = { Aanslagen: value, fillKey: 'Extreme' };
        colordataset[itemvalue] = {fillKey: 'Extreme'}

        }
      });
      map.updateChoropleth(colordataset)
})
}

  // make map based on input data
  function MakeMap(jsonjaren)
  {
      jaarjson = jsonjaren

      // making sure variables are casted to numbers and not strings
      d3.json(jaarjson, function (error, data) {

      data.forEach(function(d) {
      d.Aanslagen= + d.Aanslagen
      });

lijstAanslagen(data);
LijstDoden(data);

      // map Aanslagen
      var Aanslagen = dict_for_aanslagen.map(function(d){ return d.Aanslagen; });

      // look for maxium and minimum value of Aanslagen
      var minValue = Math.min.apply(null, Aanslagen),
      maxValue = Math.max.apply(null, Aanslagen);


dict_for_aanslagen.forEach(function(item){
var itemvalue = item.ID,
value = item.Aanslagen;
  if (value <= 10){ dataset[itemvalue] = { Aanslagen: value, fillKey: 'LOW' };
  colordataset[itemvalue] = {fillKey: 'LOW'}
  }
    else if (value >=11 && value <= 50) {
    dataset[itemvalue] = { Aanslagen: value, fillKey: 'AVERAGE' };
    colordataset[itemvalue] = {fillKey: 'AVERAGE'}

    }

      else if (value >=50 && value <= 1000) {
      dataset[itemvalue] = {Aanslagen: value, fillKey: 'HIGH' };
      colordataset[itemvalue] = {fillKey: 'HIGH'}

      }

      else if (value > 1000) {
      dataset[itemvalue] = { Aanslagen: value, fillKey: 'Extreme' };
      colordataset[itemvalue] = {fillKey: 'Extreme'}

      }
    });

      // render map
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

    return {path: path, projection: projection};
  },
        fills: {
        Extreme: 'blue',
        HIGH: 'red',
        LOW: 'green',
        AVERAGE: 'yellow',
        UNKNOWN: '#707070',
        defaultFill: '#707070'
        },
        done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography)
            {

          //  d3.selectAll('#BarChart').remove();
          document.getElementById('donutchart').innerHTML = "";
          document.getElementById('updatebarchart').innerHTML = "";
          document.getElementById('grouptypes').innerHTML = "";
          document.getElementById('donutcharttitle').innerHTML = "";
          document.getElementById('informationcountry').innerHTML = "";
          document.getElementById('attacktypes').innerHTML = "";
          document.getElementById('trafficAccidents').innerHTML = "";
          document.getElementById('dataDiv').innerHTML = "";

  var selectedcountry = geography.properties.name;
  var arraylandtjes = []
for (var i = 0; i < globaldata.length; i++){
if (globaldata[i].country_txt == selectedcountry){ arraylandtjes.push(selectedcountry)
}

}

if (arraylandtjes < 1) {

  JSalert()}
  else {

    var colorScheme = ["#E57373","#BA68C8","#7986CB","#A1887F","#90A4AE","#AED581","#9575CD","#FF8A65","#4DB6AC","#FFF176","#64B5F6","#00E676"];

        ListforPiechart(globaldata, selectedcountry)

        renderPieChart(dictforpiechart,"#donutchart",colorScheme);
        makeHeatmap();
        prepare_data_bar_chart(selectedcountry)
        Listforheatmap(selectedcountry)
        makebarchart()

          //MakeBar(Flexibel_Data_Variable,selectedcountry)
          var el = document.getElementById('informationcountry')
         scrollToElement(el, undefined, undefined, undefined)}

          function JSalert()
          {

          document.getElementById('donutchart').innerHTML = "";
          document.getElementById('updatebarchart').innerHTML = "";
          document.getElementById('grouptypes').innerHTML = "";
          document.getElementById('donutcharttitle').innerHTML = "";
          document.getElementById('informationcountry').innerHTML = "";
          document.getElementById('attacktypes').innerHTML = "";
          document.getElementById('trafficAccidents').innerHTML = "";
          document.getElementById('dataDiv').innerHTML = "";
          swal ( "Ouch" ,  "There is no data for this country" ,  "error" ) }

            });
        },

        data: dataset,
          geographyConfig: {
          borderColor: '#DEDEDE',
          highlightBorderWidth: 2,

          // don't change color on mouse hover
          highlightFillColor: function(geo) {
          return geo['fillKey'] || '#707070';
          },

          // only change border
          highlightBorderColor: '#B7B7B7',

          // show desired information in tooltip
              popupTemplate: function(geo, data) {

              // don't show tooltip if country don't present in dataset
              if (!data) { return ['<div class="hoverinfo">',
              '<strong>', 'no data', '</strong>','</div>'].join(''); }
              // tooltip
              return ['<div class="hoverinfo">',
              '<strong>', geo.properties.name, '</strong>',
              '<br>Aanslagen: <strong>', data.Aanslagen, '</strong>',
              '</div>'].join('');
              }
          }
        })



})

}

    // obtained from https://github.com/oblador/angular-scroll/blob/master/README.md
      function scrollToElement(element, duration = 400, delay = 0, easing = 'easeOutExpo', endCallback = () => {})
    {
      var offsetTop = window.pageYOffset || document.documentElement.scrollTop
      d3.transition()
      .each("end", endCallback)
      .delay(delay)
      .duration(duration)
      .ease(easing)
      .tween("scroll", (offset => () => {
      var i = d3.interpolateNumber(offsetTop, offset);
      return t => scrollTo(0, i(t))
      })(offsetTop + element.getBoundingClientRect().top));
    }



function lijstAanslagen(data) {
 globaldata = data
  dict_for_aanslagen = []
  countrylist = []
  array_elements =[]

for (i = 0; i <globaldata.length;i++){


  country = data[i].country_txt
  id = globaldata[i].ID
  countrylist.push(id) ;
}

        array_elements = countrylist;

        array_elements.sort();

        var current = null;
        var cnt = 0;
        for (var i = 0; i < array_elements.length; i++) {
            if (array_elements[i] != current) {
                if (cnt > 0) {

                  dict_for_aanslagen.push({

                        "ID" : current,
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
          dict_for_aanslagen.push({

              "ID" : current,
              "Aanslagen" : cnt
            });
        }

      }

      function LijstDoden(data) {
      data = data
      dict_for_doden = []
      countrylister = []
      temp_dict_for_doden = []

      for (i = 0; i <data.length;i++){

      country = data[i].country_txt
      id = data[i].ID
      countrylister.push(id) ;
    }
      var listy = []


      for (var i = 0; i < dict_for_aanslagen.length; i++){
        country = dict_for_aanslagen[i].ID

        for (var j = 0; j < data.length; j++){
      countryjson = data[j].ID

      if (country == countryjson && data[j].nkill != 0){

        listy.push({

            "Country" : country,
            "Doden" : data[j].nkill
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
    temp_dict_for_doden =
          linq.GroupBy(function(x){ return x.Country; })
              .Select(function(x){
                return {
                  ID: x.Key(),
                  Doden: x.Sum(function(y){ return y.Doden|0; })
                };
              }).ToArray();
dict_for_doden = temp_dict_for_doden

      }

    /*  setTimeout(function(){
console.log(globaldata);
},10000);*/


function renderPieChart (dataset,dom_element_to_append_to, colorScheme){

		var margin = {top:50,bottom:50,left:50,right:50};
		var width = 500 - margin.left - margin.right,
		height = width,
		radius = Math.min(width, height) / 2;
		var donutWidth = 40;
		var legendRectSize = 28;
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


  function ListforPiechart(globaldata, selectedcountry)
  {       dictforpiechart = []
          lijst_attacktypes = []

          d3.select("#informationcountry")
          .html("Information about " +selectedcountry )

          d3.select("#attacktypes")
          .html("Attacktypes " )

          d3.select("#grouptypes")
          .html("Terror groups" )

          d3.select("#informationcountry")
          .html("Information about " +selectedcountry )
      for (var i = 0; i < globaldata.length; i++){
        if (selectedcountry == globaldata[i].country_txt)
        {

            var check = globaldata[i].attack_type
            lijst_attacktypes.push(check);
        }
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


      }


function Listforheatmap(selectedcountry){

  lijst_targetype = []
  array_elements = []
  dictforheatmap = [];


    for (var i = 0; i < globaldata.length; i++){
      if (selectedcountry == globaldata[i].country_txt )
      {

          var check = globaldata[i].targtype
          lijst_targetype.push(check);

      }
    }


    array_elements = lijst_targetype;
    array_elements.sort();

        var current = null;
        var cnt = 0;
        for (var i = 0; i < array_elements.length; i++) {
            if (array_elements[i] != current) {
                if (cnt > 0) {

                    dictforheatmap.push({

                        "key" : current,
                        "value" : cnt,
                        "month" : 8
                      });
                }
                current = array_elements[i];
                cnt = 1;
            } else {
                cnt++;
            }
        }
        if (cnt > 0) {
          dictforheatmap.push({

            "key" : current,
            "value" : cnt,
            "month" : 8
            });
    }

      }
/*
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 3 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 3
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 3
                });
        }
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 4 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 4
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 4
                });
        }
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 5 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 5
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 5
                });
        }
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 6 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 6
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 6
                });
        }
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 7 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 7
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 7
                });
        }
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 8 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 8
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 8
                });
        }
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 9 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 9
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 9
                });
        }
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 10 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 10
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 10
                });
        }
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 11 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 11
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 11
                });
        }
        for (var i = 0; i < globaldata.length; i++){
          if (selectedcountry == globaldata[i].country_txt && globaldata[i].month == 12 )
          {

              var check = globaldata[i].targtype
              lijst_targetype.push(check);

          }
        }


        array_elements = lijst_targetype;
        array_elements.sort();


            var current = null;
            var cnt = 0;
            for (var i = 0; i < array_elements.length; i++) {
                if (array_elements[i] != current) {
                    if (cnt > 0) {

                        dictforheatmap.push({

                            "key" : current,
                            "value" : cnt,
                            "month" : 12
                          });
                    }
                    current = array_elements[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
              dictforheatmap.push({

                "key" : current,
                "value" : cnt,
                "month" : 12
                });
        } */



function prepare_data_bar_chart(selectedcountry){

lijst_terror = []
array_elements = []

  for (var i = 0; i < globaldata.length; i++){
    if (selectedcountry == globaldata[i].country_txt)
    {

        var check = globaldata[i].group_terror
        lijst_terror.push(check);
    }
  }


  array_elements = lijst_terror;
  array_elements.sort();

dictforbarchart = [];

      var current = null;
      var cnt = 0;
      for (var i = 0; i < array_elements.length; i++) {
          if (array_elements[i] != current) {
              if (cnt > 0) {

                  dictforbarchart.push({

                      "key" : current,
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
        dictforbarchart.push({

          "key" : current,
          "value" : cnt
          });
  }


}

function makebarchart(){

  var setup = function(targetID){
  	//Set size of svg element and chart
  	var margin = {top: 0, right: 0, bottom: 0, left: 0},
  		width = 400 - margin.left - margin.right,
  		height = 200 - margin.top - margin.bottom,
  		categoryIndent = 4*15 + 5,
  		defaultBarWidth = 2000;

  	//Set up scales
  	var x = d3.scale.linear()
  	  .domain([0,defaultBarWidth])
  	  .range([0,width]);
  	var y = d3.scale.ordinal()
  	  .rangeRoundBands([0, height], 0.1, 0);

  	//Create SVG element
  	d3.select(targetID).selectAll("svg").remove()
  	var svg = d3.select(targetID).append("svg")
  		.attr("width", width + margin.left + margin.right)
  		.attr("height", height + margin.top + margin.bottom)
  	  .append("g")
  		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  	//Package and export settings
  	var settings = {
  	  margin:margin, width:width, height:height, categoryIndent:categoryIndent,
  	  svg:svg, x:x, y:y
  	}
  	return settings;
  }

  var redrawChart = function(targetID, newdata) {

  	//Import settings
  	var margin=settings.margin, width=settings.width, height=settings.height, categoryIndent=settings.categoryIndent,
  	svg=settings.svg, x=settings.x, y=settings.y;

  	//Reset domains
  	y.domain(newdata.sort(function(a,b){
  	  return b.value - a.value;
  	})
  	  .map(function(d) { return d.key; }));
  	var barmax = d3.max(newdata, function(e) {
  	  return e.value;
  	});
  	x.domain([0,barmax]);

  	/////////
  	//ENTER//
  	/////////

  	//Bind new data to chart rows

  	//Create chart row and move to below the bottom of the chart
  	var chartRow = svg.selectAll("g.chartRow")
  	  .data(newdata, function(d){ return d.key});
  	var newRow = chartRow
  	  .enter()
  	  .append("g")
  	  .attr("class", "chartRow")
  	  .attr("transform", "translate(0," + height + margin.top + margin.bottom + ")");

  	//Add rectangles
  	newRow.insert("rect")
  	  .attr("class","bar")
  	  .attr("x", 0)
  	  .attr("opacity",0)
  	  .attr("height", y.rangeBand())
  	  .attr("width", function(d) { return x(d.value);})

  	//Add value labels
  	newRow.append("text")
  	  .attr("class","label")
  	  .attr("y", y.rangeBand()/2)
  	  .attr("x",0)
  	  .attr("opacity",0)
  	  .attr("dy",".35em")
  	  .attr("dx","0.5em")
  	  .text(function(d){return d.value;});

  	//Add Headlines
  	newRow.append("text")
  	  .attr("class","category")
  	  .attr("text-overflow","ellipsis")
  	  .attr("y", y.rangeBand()/2)
  	  .attr("x",categoryIndent)
  	  .attr("opacity",0)
  	  .attr("dy",".35em")
  	  .attr("dx","0.5em")
  	  .text(function(d){return d.key});


  	//////////
  	//UPDATE//
  	//////////

  	//Update bar widths
  	chartRow.select(".bar").transition()
  	  .duration(300)
  	  .attr("width", function(d) { return x(d.value);})
  	  .attr("opacity",1);

  	//Update data labels
  	chartRow.select(".label").transition()
  	  .duration(300)
  	  .attr("opacity",1)
  	  .tween("text", function(d) {
  		var i = d3.interpolate(+this.textContent.replace(/\,/g,''), +d.value);
  		return function(t) {
  		  this.textContent = Math.round(i(t));
  		};
  	  });

  	//Fade in categories
  	chartRow.select(".category").transition()
  	  .duration(300)
  	  .attr("opacity",1);


  	////////
  	//EXIT//
  	////////

  	//Fade out and remove exit elements
  	chartRow.exit().transition()
  	  .style("opacity","0")
  	  .attr("transform", "translate(0," + (height + margin.top + margin.bottom) + ")")
  	  .remove();


  	////////////////
  	//REORDER ROWS//
  	////////////////

  	var delay = function(d, i) { return 200 + i * 30; };

  	chartRow.transition()
  		.delay(delay)
  		.duration(900)
  		.attr("transform", function(d){ return "translate(0," + y(d.key) + ")"; });
  };



  //Pulls data
  //Since our data is fake, adds some random changes to simulate a data stream.
  //Uses a callback because d3.json loading is asynchronous
  var pullData = function(settings,callback){

  		var newData = dictforbarchart;

  		newData = formatData(newData);

  		callback(settings,newData);
  	}


  //Sort data in descending order and take the top 10 values
  var formatData = function(data){
      return data.sort(function (a, b) {
          return b.value - a.value;
        })
  	  .slice(0, 5);
  }

  //I like to call it what it does
  var redraw = function(settings){
  	pullData(settings,redrawChart)
  }

  //setup (includes first draw)
  var settings = setup('#updatebarchart');
  redraw(settings)


}


function makeHeatmap ()
{ /*
  var accidents=[{day:2,hour:1,count:127},{day:4,hour:1,count:141},{day:1,hour:1,count:134},{day:5,hour:1,count:174},{day:3,hour:1,count:131},{day:6,hour:1,count:333},{day:7,hour:1,count:311},{day:2,hour:2,count:79},{day:4,hour:2,count:99},{day:1,hour:2,count:117},{day:5,hour:2,count:123},{day:3,hour:2,count:92},{day:6,hour:2,count:257},{day:7,hour:2,count:293},{day:2,hour:3,count:55},{day:4,hour:3,count:73},{day:1,hour:3,count:107},{day:5,hour:3,count:89},{day:3,hour:3,count:66},{day:6,hour:3,count:185},{day:7,hour:3,count:262},{day:2,hour:4,count:39},{day:4,hour:4,count:67},{day:1,hour:4,count:59},{day:5,hour:4,count:83},{day:3,hour:4,count:45},{day:6,hour:4,count:180},{day:7,hour:4,count:220},{day:2,hour:5,count:48},{day:4,hour:5,count:57},{day:1,hour:5,count:73},{day:5,hour:5,count:76},{day:3,hour:5,count:72},{day:6,hour:5,count:168},{day:7,hour:5,count:199},{day:2,hour:6,count:129},{day:4,hour:6,count:102},{day:1,hour:6,count:129},{day:5,hour:6,count:140},{day:3,hour:6,count:117},{day:6,hour:6,count:148},{day:7,hour:6,count:193},{day:2,hour:7,count:314},{day:4,hour:7,count:284},{day:1,hour:7,count:367},{day:5,hour:7,count:270},{day:3,hour:7,count:310},{day:6,hour:7,count:179},{day:7,hour:7,count:192},{day:2,hour:8,count:806},{day:4,hour:8,count:811},{day:1,hour:8,count:850},{day:5,hour:8,count:609},{day:3,hour:8,count:846},{day:6,hour:8,count:208},{day:7,hour:8,count:144},{day:2,hour:9,count:1209},{day:4,hour:9,count:1214},{day:1,hour:9,count:1205},{day:5,hour:9,count:960},{day:3,hour:9,count:1073},{day:6,hour:9,count:286},{day:7,hour:9,count:152},{day:2,hour:10,count:750},{day:4,hour:10,count:808},{day:1,hour:10,count:610},{day:5,hour:10,count:655},{day:3,hour:10,count:684},{day:6,hour:10,count:482},{day:7,hour:10,count:253},{day:2,hour:11,count:591},{day:4,hour:11,count:593},{day:1,hour:11,count:573},{day:5,hour:11,count:695},{day:3,hour:11,count:622},{day:6,hour:11,count:676},{day:7,hour:11,count:326},{day:2,hour:12,count:653},{day:4,hour:12,count:679},{day:1,hour:12,count:639},{day:5,hour:12,count:736},{day:3,hour:12,count:687},{day:6,hour:12,count:858},{day:7,hour:12,count:402},{day:2,hour:13,count:738},{day:4,hour:13,count:749},{day:1,hour:13,count:631},{day:5,hour:13,count:908},{day:3,hour:13,count:888},{day:6,hour:13,count:880},{day:7,hour:13,count:507},{day:2,hour:14,count:792},{day:4,hour:14,count:847},{day:1,hour:14,count:752},{day:5,hour:14,count:1033},{day:3,hour:14,count:942},{day:6,hour:14,count:983},{day:7,hour:14,count:636},{day:2,hour:15,count:906},{day:4,hour:15,count:1031},{day:1,hour:15,count:954},{day:5,hour:15,count:1199},{day:3,hour:15,count:1014},{day:6,hour:15,count:1125},{day:7,hour:15,count:712},{day:2,hour:16,count:1101},{day:4,hour:16,count:1158},{day:1,hour:16,count:1029},{day:5,hour:16,count:1364},{day:3,hour:16,count:1068},{day:6,hour:16,count:1062},{day:7,hour:16,count:736},{day:2,hour:17,count:1303},{day:4,hour:17,count:1426},{day:1,hour:17,count:1270},{day:5,hour:17,count:1455},{day:3,hour:17,count:1407},{day:6,hour:17,count:883},{day:7,hour:17,count:666},{day:2,hour:18,count:1549},{day:4,hour:18,count:1653},{day:1,hour:18,count:1350},{day:5,hour:18,count:1502},{day:3,hour:18,count:1507},{day:6,hour:18,count:830},{day:7,hour:18,count:652},{day:2,hour:19,count:998},{day:4,hour:19,count:1070},{day:1,hour:19,count:787},{day:5,hour:19,count:1027},{day:3,hour:19,count:1019},{day:6,hour:19,count:575},{day:7,hour:19,count:519},{day:2,hour:20,count:661},{day:4,hour:20,count:756},{day:1,hour:20,count:596},{day:5,hour:20,count:730},{day:3,hour:20,count:648},{day:6,hour:20,count:494},{day:7,hour:20,count:486},{day:2,hour:21,count:431},{day:4,hour:21,count:539},{day:1,hour:21,count:430},{day:5,hour:21,count:509},{day:3,hour:21,count:457},{day:6,hour:21,count:443},{day:7,hour:21,count:421},{day:2,hour:22,count:352},{day:4,hour:22,count:428},{day:1,hour:22,count:362},{day:5,hour:22,count:462},{day:3,hour:22,count:390},{day:6,hour:22,count:379},{day:7,hour:22,count:324},{day:2,hour:23,count:329},{day:4,hour:23,count:381},{day:1,hour:23,count:293},{day:5,hour:23,count:393},{day:3,hour:23,count:313},{day:6,hour:23,count:374},{day:7,hour:23,count:288},{day:2,hour:24,count:211},{day:4,hour:24,count:249},{day:1,hour:24,count:204},{day:5,hour:24,count:417},{day:3,hour:24,count:211},{day:6,hour:24,count:379},{day:7,hour:24,count:203}];
*/

var accidents = [{day:1,hour:1,count:1270},{day:1,hour:2,count:141},{day:5,hour:1,count:141}, {day:4,hour:3,count:1410},]

///////////////////////////////////////////////////////////////////////////
//////////////////// Set up and initiate svg containers ///////////////////
///////////////////////////////////////////////////////////////////////////

var days = ["Business",
"Government",
"Journalists & Media",
"Religious Institutions",
"Unknown"
],
    times = ['JAN', 'FEB', 'MRT', 'APR', 'Mei', 'JUN', 'JUL','AUG','SEPT', 'OKT', 'NOV', 'DEC']

var margin = {
    top: 100,
    right: 250,
    bottom: 70,
    left: 50
};

var width = Math.max(Math.min(window.innerWidth, 1000), 500) - margin.left - margin.right - 20,
    gridSize = Math.floor(width / times.length),
    height = gridSize * (days.length+2);

//SVG container
var svg = d3.select('#trafficAccidents')
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
  //  .attr("padding-left", 50)
    .attr("width", width + margin.left + margin.right)
    .attr("padding-left", -100)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Reset the overall font size
var newFontSize = width * 62.5 / 900;
d3.select("html").style("font-size", newFontSize + "%");

///////////////////////////////////////////////////////////////////////////
//////////////////////////// Draw Heatmap /////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//Based on the heatmap example of: http://blockbuilder.org/milroc/7014412

var colorScale = d3.scale.linear()
    .domain([0, d3.max(accidents, function(d) {return d.count; })/2, d3.max(accidents, function(d) {return d.count; })])
    .range(["#FFFFDD", "#3E9583", "#1F2D86"])
    //.interpolate(d3.interpolateHcl);

var dayLabels = svg.selectAll(".dayLabel")
    .data(days)
    .enter().append("text")
    .text(function (d) { return d; })
      .attr("x", 0)
    .attr("y", function (d, i) { return i * gridSize; })
    .style("text-anchor", "end")
    .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
    .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });

var timeLabels = svg.selectAll(".timeLabel")
    .data(times)
    .enter().append("text")
    .text(function(d) { return d; })
    .attr("x", function(d, i) { return i * gridSize; })
    .attr("y", 0)
    .style("text-anchor", "middle")
    .attr("transform", "translate(" + gridSize / 2 + ", -6)")
    .attr("class", function(d, i) { return ((i >= 8 && i <= 17) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });

var heatMap = svg.selectAll(".hour")
    .data(accidents)
    .enter().append("rect")
     //----attach data to rect---
     .attr("data","This is the data for this cell")
     .attr("onmouseover","showData(evt)")
     .attr("onmouseout","hideData(evt)")
    .attr("x", function(d) { return (d.hour - 1) * gridSize; })
    .attr("y", function(d) { return (d.day - 1) * gridSize; })
    .attr("class", "hour bordered")
    .attr("width", gridSize)
    .attr("height", gridSize)
    .style("stroke", "white")
    .style("stroke-opacity", 0.6)
    .style("fill", function(d) { return colorScale(d.count); });

//Append title to the top



///////////////////////////////////////////////////////////////////////////
//////////////// Create the gradient for the legend ///////////////////////
///////////////////////////////////////////////////////////////////////////

//Extra scale since the color scale is interpolated
var countScale = d3.scale.linear()
    .domain([0, d3.max(accidents, function(d) {return d.count; })])
    .range([0, width])

//Calculate the variables for the temp gradient
var numStops = 10;
countRange = countScale.domain();
countRange[2] = countRange[1] - countRange[0];
countPoint = [];
for(var i = 0; i < numStops; i++) {
    countPoint.push(i * countRange[2]/(numStops-1) + countRange[0]);
}//for i

//Create the gradient
svg.append("defs")
    .append("linearGradient")
    .attr("id", "legend-traffic")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%")
    .selectAll("stop")
    .data(d3.range(numStops))
    .enter().append("stop")
    .attr("offset", function(d,i) {
        return countScale( countPoint[i] )/width;
    })
    .attr("stop-color", function(d,i) {
        return colorScale( countPoint[i] );
    });

///////////////////////////////////////////////////////////////////////////
////////////////////////// Draw the legend ////////////////////////////////
///////////////////////////////////////////////////////////////////////////

var legendWidth = Math.min(width*0.8, 400);
//Color Legend container
var legendsvg = svg.append("g")
    .attr("class", "legendWrapper")
    .attr("transform", "translate(" + (width/2) + "," + (gridSize * days.length + 40) + ")");

//Draw the Rectangle
legendsvg.append("rect")
    .attr("class", "legendRect")
    .attr("x", -legendWidth/2)
    .attr("y", 0)
    //.attr("rx", hexRadius*1.25/2)
    .attr("width", legendWidth)
    .attr("height", 10)
    .style("fill", "url(#legend-traffic)");

//Append title
legendsvg.append("text")
    .attr("class", "legendTitle")
    .attr("x", 0)
    .attr("y", -10)
    .style("text-anchor", "middle")
    .text("Aantal aanslagen");

//Set scale for x-axis
var xScale = d3.scale.linear()
     .range([-legendWidth/2, legendWidth/2])
     .domain([ 0, d3.max(accidents, function(d) { return d.count; })] );

//Define x-axis
var xAxis = d3.svg.axis()
      .orient("bottom")
      .ticks(5)
      //.tickFormat(formatPercent)
      .scale(xScale);

//Set up X axis
legendsvg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (10) + ")")
    .call(xAxis);

}
//--show/hide data---
function showData(evt)
{
    var target=evt.target
    target.setAttribute("opacity",".8")

    //---locate dataDiv near cursor--
    var x = evt.clientX;
    var y = evt.clientY;
    //---scrolling page---
    var offsetX=window.pageXOffset
    var offsetY=window.pageYOffset

    dataDiv.style.left=10+x+offsetX+"px"
    dataDiv.style.top=20+y+offsetY+"px"
    //---data--
    var data=target.getAttribute("data")

    //---format as desired---
    var html=data

    dataDiv.innerHTML=html

    dataDiv.style.visibility="visible"

}
function hideData(evt)
{
    dataDiv.style.visibility="hidden"
    var target=evt.target
    target.removeAttribute("opacity")
}
