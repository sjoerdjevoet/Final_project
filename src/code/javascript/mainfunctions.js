/*
 *  Sjoerd Zagema
 *  12195677
 *
 * mainfunctions.js contains general main functions for dashboard.js
 **/

// Function obtained from https://github.com/oblador/angular-scroll/blob/master/README.md
function scrollToElement(element, duration = 400, delay = 0, easing = 'easeOutExpo', endCallback = () => {}) {
   var offsetTop = window.pageYOffset || document.documentElement.scrollTop
   d3.transition()
      .each("end", endCallback)
      .delay(delay)
      .duration(duration)
      .ease(easing)
      .tween("scroll", (offset => () => {
         var i = d3.interpolateNumber(offsetTop, offset);
         return t => scrollTo(0, i(t))
      })(offsetTop + element.getBoundingClientRect()
         .top));
}

function noDataAlert(selectedCountry) {
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
   swal("Ouch", "There is no data for " + selectedCountry, "error")
}

function colorMap() {
   dataset = {}
   colordataset = {};

   attackersList.forEach(function(item) {
      var itemvalue = item.ID,
         value = item.Aanslagen;
      if (value <= 10) {
         dataset[itemvalue] = {
            Aanslagen: value,
            fillKey: 'LOW'
         };
         colordataset[itemvalue] = {
            fillKey: 'LOW'
         }
      }

      if (value >= 10 && value <= 400) {
         dataset[itemvalue] = {
            Aanslagen: value,
            fillKey: 'AVERAGE'
         };
         colordataset[itemvalue] = {
            fillKey: 'AVERAGE'
         }
      }

      if (value >= 400) {
         dataset[itemvalue] = {
            Aanslagen: value,
            fillKey: 'HIGH'
         };
         colordataset[itemvalue] = {
            fillKey: 'HIGH'
         }
      }
   });
}

function CheckdataforCountry(selectedCountry) {
   var countryArray = []
   for (var i = 0; i < globalData.length; i++) {
      if (globalData[i].country_txt == selectedCountry) {
         countryArray.push(selectedCountry)
      }
   }

   if (countryArray < 1 || countryArray == null || countryArray == undefined) {
      return false;
   } else {
      return true;
   }
}

$(window)
   .on('load', function() {
      $('#exampleModalLong')
         .modal('show');
   });

function scrolltomapFunction() {
   var ellie = document.getElementById('sliderContainer')
   scrollToElement(ellie, undefined, undefined, undefined)
}

$('#informationvisualisations')
   .click(function() {
      $('#modal2')
         .modal('show');
   });
