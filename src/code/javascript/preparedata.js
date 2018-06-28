/*
 *  Sjoerd Zagema
 *  12195677
 *
 * preparedata.js prepares the data in functions, for the visualisations based, on the data files
 **/

// function that creates an array of countries with the corresponding attacks
function attackList(data) {
  globalData = data
   attackersList = []
   countryList = []

   for (i = 0; i < globalData.length; i++) {
      country = globalData[i].country_txt
      id = globalData[i].ID
      countryList.push(id);
   }

   arrayElements = countryList;
   arrayElements.sort();

   var current = null;
   var cnt = 0;
   for (var i = 0; i < arrayElements.length; i++) {
      if (arrayElements[i] != current) {
         if (cnt > 0) {
            attackersList.push({
               "ID": current,
               "Aanslagen": cnt
            });
         }
         current = arrayElements[i];
         cnt = 1;
      } else {
         cnt++;
      }
   }

   if (cnt > 0) {
      attackersList.push({
         "ID": current,
         "Aanslagen": cnt
      });
   }

}

// function that creates an array of countries with the corresponding terror group attacks
function prepareBarchart(selectedCountry) {
   terrorList = []
   arrayElements = []

   for (var i = 0; i < globalData.length; i++) {
      if (selectedCountry == globalData[i].country_txt) {
         var targetType = globalData[i].group_terror
         terrorList.push(targetType);
      }
   }

   arrayElements = terrorList;
   arrayElements.sort();
   dictforbarchart = [];

   var current = null;
   var cnt = 0;
   for (var i = 0; i < arrayElements.length; i++) {
      if (arrayElements[i] != current) {
         if (cnt > 0) {
            dictforbarchart.push({
               "key": current,
               "value": cnt
            });
         }
         current = arrayElements[i];
         cnt = 1;
      } else {
         cnt++;
      }
   }

   if (cnt > 0) {
      dictforbarchart.push({
         "key": current,
         "value": cnt
      });
   }
}

// function that creates an array of countries with the corresponding attack types
function prepareDonutchart(selectedCountry) {

   piechartList = []
   attackTypersList = []
   arrayElements = []

   for (var i = 0; i < globalData.length; i++) {
      if (selectedCountry == globalData[i].country_txt) {
         var targetType = globalData[i].attack_type
         attackTypersList.push(targetType);
      }
   }

   arrayElements = attackTypersList;
   arrayElements.sort();
   var current = null;
   var cnt = 0;
   for (var i = 0; i < arrayElements.length; i++) {
      if (arrayElements[i] != current) {
         if (cnt > 0) {
            piechartList.push({
               "label": current,
               "value": cnt
            });
         }
         current = arrayElements[i];
         cnt = 1;
      } else {
         cnt++;
      }
   }
   if (cnt > 0) {
      piechartList.push({
         "label": current,
         "value": cnt
      });
   }

}

   // function that creates a dictonary, with country, number of attacks and in which month in the attack took place
   function prepareHeatmap(selectedCountry) {
      targetList = []
      arrayElements = []
      collectDataHeatmap = []

      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 1) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }

      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 1
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }

      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 1
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 2) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }

      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 2
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }

      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 2
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 3) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }

      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 3
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }

      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 3
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 4) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }

      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 4
               });
            }

            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }

      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 4
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 5) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }
      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 5
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }

      }
      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 5
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 6) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }
      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 6
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }

      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 6
         });
      }
      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 7) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }

      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 7
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }

      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 7
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 8) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }

      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 8
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }

      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 8
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 9) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }

      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 9
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }

      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 9
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 10) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }
      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 10
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }
      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 10
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 11) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }

      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 11
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }
      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 11
         });
      }

      targetList = []
      for (var i = 0; i < globalData.length; i++) {
         if (selectedCountry == globalData[i].country_txt && globalData[i].month == 12) {
            var targetType = globalData[i].targtype
            targetList.push(targetType);
         }
      }

      targetList.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < targetList.length; i++) {
         if (targetList[i] != current) {
            if (cnt > 0) {
               collectDataHeatmap.push({
                  "key": current,
                  "value": cnt,
                  "month": 12
               });
            }
            current = targetList[i];
            cnt = 1;
         } else {
            cnt++;
         }
      }

      if (cnt > 0) {
         collectDataHeatmap.push({
            "key": current,
            "value": cnt,
            "month": 12
         });
      }

   // indexing a string in order to make calculations later on
   for (var i = 0; i < collectDataHeatmap.length; i++) {
      if (collectDataHeatmap[i].key == 'Business') {
         collectDataHeatmap[i].key = 1
      }
      if (collectDataHeatmap[i].key == "Government") {
         collectDataHeatmap[i].key = 2
      }
      if (collectDataHeatmap[i].key == "Journalists & Media") {
         collectDataHeatmap[i].key = 3
      }
      if (collectDataHeatmap[i].key == "Religious Institutions") {
         collectDataHeatmap[i].key = 4
      }
      if (collectDataHeatmap[i].key == "Other") {
         collectDataHeatmap[i].key = 5
      }
   }
}
