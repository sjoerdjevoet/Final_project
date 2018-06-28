/*
 *  Sjoerd Zagema
 *  12195677
 *
 * Heatmap.js contains the functions and variables that create the heatmap
 **/

function makeHeatmap(collectDataHeatmap) {
   d3.select("#heatmapTitle")
      .html("Target type vs month")

   // labels y- axis
   var attackCategories = ["Business", "Government", "Journalists & Media", "Religious Institutions", "Other"],

      // labels x- axis
      times = ['JAN', 'FEB', 'MRT', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OKT', 'NOV', 'DEC'];

   // set up margins for svg
   var margin = {
      top: 20,
      right: 10,
      bottom: 50,
      left: 210
   };

   width = 370
   gridSize = Math.floor(width / times.length),
   height = gridSize * (attackCategories.length + 2);

   var svg = d3.select("#heatMap")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   var tip = d3.tip()
      .attr('class', 'd3-tip')
      .style("visibility", "visible")
      .offset([-20, 0])
      .html(function(d) {
         return "<b>" + "Number of attacks: " + "</b>" + d.value + "</b>"
      });

   tip(svg.append("g"));

   //Based on the heatmap example of: http://blockbuilder.org/milroc/7014412
   var colorScale = d3.scale.linear()
      .domain([0, d3.max(collectDataHeatmap, function(d) {
         return d.value;
      }) / 2, d3.max(collectDataHeatmap, function(d) {
         return d.value;
      })])
      .range(["#FFFFDD", "#3E9583", "#1F2D86"])

   var dayLabels = svg.selectAll(".dayLabel")
      .data(attackCategories)
      .enter()
      .append("text")
      .text(function(d) {
         return d;
      })
      .attr("x", 0)
      .attr("y", function(d, i) {
         return i * gridSize;
      })
      .style("text-anchor", "end")
      .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
      .attr("class", function(d, i) {
         return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis");
      });

   var timeLabels = svg.selectAll(".timeLabel")
      .data(times)
      .enter()
      .append("text")
      .text(function(d) {
         return d;
      })
      .attr("x", function(d, i) {
         return i * gridSize;
      })
      .attr("y", 0)
      .style("text-anchor", "middle")
      .attr("transform", "translate(" + gridSize / 2 + ", -6)")
      .attr("class", function(d, i) {
         return ((i >= 8 && i <= 17) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis");
      });

   var heatMap = svg.selectAll(".hour")
      .data(collectDataHeatmap)
      .enter()
      .append("rect")
      // append the prepared data to the heatmap
      .attr("x", function(d) {
         return (d.month - 1) * gridSize;
      })
      .attr("y", function(d) {
         return (d.key - 1) * gridSize;
      })
      .attr("class", "hour bordered")
      .attr("width", gridSize)
      .attr("height", gridSize)
      .style("stroke", "white")
      .style("stroke-opacity", 0.6)
      .style("fill", function(d) {
         return colorScale(d.value);
      })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .transition()
      .duration(10);

   var countScale = d3.scale.linear()
      .domain([0, d3.max(collectDataHeatmap, function(d) {
         return d.value;
      })])
      .range([0, width])

   var numStops = 10;
   countRange = countScale.domain();
   countRange[2] = countRange[1] - countRange[0];
   countPoint = [];
   for (var i = 0; i < numStops; i++) {
      countPoint.push(i * countRange[2] / (numStops - 1) + countRange[0]);
   }

   //Create legend (gradient)
   svg.append("defs")
      .append("linearGradient")
      .attr("id", "legend")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%")
      .selectAll("stop")
      .data(d3.range(numStops))
      .enter()
      .append("stop")
      .attr("offset", function(d, i) {
         return countScale(countPoint[i]) / width;
      })
      .attr("stop-color", function(d, i) {
         return colorScale(countPoint[i]);
      });

   // Draw legend
   var legendWidth = Math.min(width * 0.8, 400);
   var legendsvg = svg.append("g")
      .attr("class", "legendWrapper")
      .attr("transform", "translate(" + (width / 2) + "," + (gridSize * attackCategories.length + 40) + ")");
   legendsvg.append("rect")
      .attr("class", "legendRect")
      .attr("x", -legendWidth / 2)
      .attr("y", 0)
      .attr("width", legendWidth)
      .attr("height", 10)
      .style("fill", "url(#legend)");

   //Append title
   legendsvg.append("text")
      .attr("class", "legendTitle")
      .attr("x", 0)
      .attr("y", -10)
      .style("text-anchor", "middle")
      .text("Number of attacks");

   var xScale = d3.scale.linear()
      .range([-legendWidth / 2, legendWidth / 2])
      .domain([0, d3.max(collectDataHeatmap, function(d) {
         return d.value;
      })]);

   var xAxis = d3.svg.axis()
      .orient("bottom")
      .ticks(5)
      .scale(xScale);

   legendsvg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (10) + ")")
      .call(xAxis);
}
