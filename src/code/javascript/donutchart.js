/*
 *  Sjoerd Zagema
 *  12195677
 *
 * Donutchart.js contains the functions that create the donutchart
 * Based on http://bl.ocks.org/arpitnarechania/577bd1d188d66dd7dffb69340dc2d9c9
 **/

function makeDonutchart(dataset, dom_element_to_append_to, colorScheme) {
   d3.select("#attackTypes")
      .html("Attack types ")

   // Set margins svg
   var margin = {
      top: 0,
      bottom: 50,
      left: 50,
      right: 50
   };
   var width = 420 - margin.left - margin.right,
      height = width,
      radius = Math.min(width, height) / 2;
   var donutWidth = 40;
   var legendRectSize = 15;
   var legendSpacing = 4;

   dataset.forEach(function(item) {
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
      .value(function(d) {
         return d.value;
      });

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
      .each(function(d) {
         this._current = d;
      });

   path.on('mouseover', function(d) {
      var total = d3.sum(dataset.map(function(d) {
         return (d.enabled) ? d.value : 0;
      }));

      // calculate percentage of total
      var percent = Math.round(1000 * d.data.value / total) / 10;
      tooltip.select('.label')
         .html(d.data.label.toUpperCase())
         .style('color', 'black');
      tooltip.select('.count')
         .html("Aanslagen: " + d.data.value);
      tooltip.select('.percent')
         .html(percent + '% ' + 'of total attacks');
      tooltip.style('display', 'block');
      tooltip.style('opacity', 2);
   });

   // Place postion of tooltip
   path.on('mousemove', function(d) {
      tooltip.style('top', (d3.event.layerY + 10) + 'px')
         .style('left', (d3.event.layerX - 25) + 'px');
   });

   path.on('mouseout', function() {
      tooltip.style('display', 'none');
      tooltip.style('opacity', 0);
   });

   // Create legend
   var legend = svg.selectAll('.legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', function(d, i) {
         var height = legendRectSize + legendSpacing;
         var offset = height * color.domain()
            .length / 2;
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
      .text(function(d) {
         return d;
      })
};
