# Report 

## Description
People have the "feeling" that there are more terror attacks taken place nowadays (Motivaction, 2018). 
They also believe that the nature of terrorism has changed (Wright, 2017). 
The following assumptions people have: firstly, that the weapons terrorists use are different. 
Secondly, that the group of terrorist are different and lastly that the attack types are finding place in different periods. 
The aim of this application is to examine these conjectures in order to inform the public.

There are four visualisations: a map, a donut chart, a heatmap and a bar chart.
Within this map, it is possible to see how many attacks took place in a given timeperiod. The legend shows the information that is shown on the card. 
With the slider you are able to select different timeperiods and when you want to see more information for each country you can hover over the map, whereafter a tooltip is shown and when you click on the country, more country specific information will be shown.
The attacktypes are presented in a donut chart . 
By hover you could see additional information. 
By clicking on the square in the legend it is possible to filter the attack types. 
Information about the terrorist groups in shown in a horizontal bar chart. 
This is sorted by the group of terrorist with the most attacks. 
The heatmap displays the five different targettypes with respect to a given month. 
The more attacks there have been, the darker the sqaure becomes. By hovering the square you see the exact amount of attacks.

## Technical design
The website starts with a modal. This is to make sure the user immediately has te change to read about the application. The user can click on the map, where after three visualisations appear (if there is any data, otherwise the user will recieve an error message).
It is also possible to go to different time periods, with the slider. When the users clicks on another country or uses the slider the 'old' visualtions are removed.


## Challenges
I spend a lot of time with the data. The way i saw it, I had two options. Creating a nested array which leads to easier use of building visualisations or not using a nested array but instead creating dicts in order to prepare the data. 
I was lazy (at the beginning) and I choose for the second option which resulted in lots of work getting the data in the right way.

My other challenge was the slider. Firstly it wouldn't work because it couldn't read the data properly, secondly it did not work but there was a small delay with the slider because the map was removed and build again. Then i tried to write a function which is essentialy already existing; namely: updateChoropleth.
Thirdly, i head about updateChoropleth and implemented it, however when sliding the map was first set to default and then the values were count, which resulted in a gray overview for about one second.
Lastly, i finally figured out that you could set the countries to default colors which do not appear in your list. This saved my day

## Decisions
I was a bit to ambitious with my MVP, therefore i couldn't deliver some functionalities. However it still matches the requirements.

