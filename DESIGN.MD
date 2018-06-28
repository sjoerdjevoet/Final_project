# Design Document

## Data sources:  

It is possible to download the sources within the application.

<br><br>
### Functions and operations  
<br><br>


##### Table 1. Preperation functions  
<br><br>

| Function name   | Description  | File name  |
|-------------|-------------|-------------|
| ***preparing data***  |   |   |
| attackList  | collects information about countries with regard to the number of attacktypes | preparedata.js  |   
| prepareBarchart | collects information about countries with regard to the terror groups | preparedata.js  | 
| prepareDonutchart  | collects information about countries with regard to the attack types | preparedata.js  | 
| prepareHeatmap | collects information about countries with regard to target type and the corresponding month | preparedata.js  |  

##### Table 2. Key functions  
<br><br>

| Function name   | Description  | File name  |
|-------------|-------------|-------------|
| ***key functions***  |   |   |
| createHeatmap  | uses the prepareHeatmap to create the map  | dashboard.js  |   
| createDonutchart | uses the prepareDonutchart to create the map | dashboard.js | 
| createBarchart  | uses the prepareBarchart to create the map | dashboard.js  | 
| createMap | Map is created with datamaps which uses a variable map | dashboard.js  | 

##### Table 3. Other functions  
<br><br>

| Function name   | Description  
|-------------|-------------|
| ***Main functions***  |   | 
| noDataAlert  | bootstrap alert   
| colorMap | function that colors the map based on values 
| scrollToView  | function to scroll to different div elements 
| checkDataCountry | returning boolean; checking if country has data 

### D3 plugins
- d3.TopoJSON
- d3.queue
- d3.legend
- d3.container
- d3.tip
- d3.TopoJSON
- d3.collections
- d3.scale
- d3.geoProjection

<br><br>

### Other Libraries
- Bootstrap (JSalert())

