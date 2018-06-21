var aanslagen = 0
var doden = 0
var totaaldoden = 0
var countrylist = []
  var dictaanslagen_for_map =[]

d3.json("1975_1985_period.json", function (data) {

  for (i = 0; i <data.length;i++){


    data[i].country
   aanslagen = aanslagen + 1

    dictaanslagen_for_map.push({

        "Country" : data[i].country,
        "Aanslagen" : aanslagen
      });
}
    }
}


console.log(countrylist);
console.log(dictaanslagen_for_map);
})

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


       // init tooltip
   var tooltip = d3.select("#map")
       .append("div")
       .attr("class", "tooltip hidden");



       d3.queue()
       .defer(d3.json, "world.json")
       .await(makeMap);

       // define map projection
         var projection = d3.geo.mercator()
             .center([13, 52])
             .translate([width / 2, height / 2])
             .scale(600);

         var path = d3.geo.path()
             .projection(projection);

function makeMap(error,data){
if (error) throw error;
console.log(data);
for (i = 0; i < data.features.length; i++) {
                var CountryNamesWorld = data.features[i].properties.admin
                //console.log(CountryNamesWorld);

    svg.selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("class", "country")
            .attr("d", path)

  .attr("fill", "green")
  .attr("stroke", "black")
}
}
