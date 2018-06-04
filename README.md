<h1>Terrorisme in Europa</h1>

<h2>Introductie</h2>

<p>De afgelopen jaren is Europa geschrokken van aanslagen met een groot aantal doden in Parijs, Brussel, Londen en Madrid. Volgens de Nationale Coördinator Terrorismebestrijding en Veiligheid is “de kans op een aanslag in Nederland reëel.” Het gevoel leeft dat er steeds meer terrorisme is in Europa, maar klopt dat met de cijfers: is het aantal doden door terroristische aanslagen de afgelopen jaren toegenomen?</p>

<h2> Probleemstelling </h2>

<p> Mensen hebben door de genoemde aanslagen een "onveiliger gevoel" gekregen. In hoeverre wordt dit gevoel bevestigt door de cijfers? Kent Europa meer terroristische aanslagen t.o.v. 1990 ? En hoe ziet de onderliggende data eruit: is een terroristiche aanslag altijd geslaagd? Op welke manier wordt het vaakst een terroristiche aanslag uitgevoerd? Door welke groepering? Het doel van dit project is om meer inzicht te krijgen in het succespercentage van een terroristische aanslag en de frequentie en het soort aanslagen met betrekking tot de verschillende Europese landen.

<h3> Doelgroep </h3>

<p> De bezorgde burger en wellicht instanties zoals de AIVD </p>



<blockquote>
    
 Het idee is om de bezorgde burger te informeren met betrekking tot de terroristische aanslagen in Europa op basis van verschillende visualisaties.
    
</blockquote>

<h2> Oplossing </h2>

![](doc/Visualphoto.png)

<h4> De uitleg hieronder behoort tot de MVP: </h4>
<p> De kaart linksbovenin wordt gekleurd door het aantal doden of aanslagen. De gebruiker heeft de mogelijkheid om doormiddel van een knop deze keuze te maken. Op het moment dat er op een land geklikt wordt (in dit voorbeeld Engeland) wordt een tooltip zichtbaar met daarin de naam van het land en het aantal. Tegelijktijd worden verschillende visualties geupdate op basis van het gekozen land.  </p>

<p> Rechtsbovenin kan er gekozen worden voor een bepaald jaar (van 1990 tot 2015 (misschien tot 2017)). Daarnaast wordt er ook het succesperentage weergegeven van een aanslag met betrekking tot een bepaald land. In de dataset wordt een aanslag als succes bestempeld als er doden of gewonden zijn gevallen. Indien er geen doden of gewonden vallen wordt aan de aanslag als mislukt beschouwt. Ook kan de gebruiker het land dat hij wil bekijken intypen. Dit heeft hetzelfde effect als een land aanklikken, de charts zullen hierdoor ook geupdate worden. </p>
<p> Als eerste wordt de hierarchical barchart geupdate. Deze geeft de groepering en het aantal aanslagen of doden weer </p>
<p> Ook wordt een pie chart weergegeven die het soort wapen wat gebruikt wordt voor de aanslagen weergeeft. </p>
<p> Als laatste wordt een heat map weergegeven die aangeeft wat de relatie is tussen een bepaalt soort doel en de maand waarin dit gebeurt. Op basis van het aantal aanslagen </p>

<h4> Optinionele functionaliteiten: </h4>
<p> Op basis van een nieuws API wordt het nieuws weergegeven met betrekking tot terrorisme met betrekking tot het geselecteerde land. </p>
<p> De knop aantal doden en aantal aanslagen heeft gevolgen voor alle visualisaties (niet alleen voor de kaart). </p>

<h2> Benodigdheden </h2>
<p> De data haal ik uit de data.world informatiebank: https://data.world/data-society/global-terrorism-data </p>
<p> Er zijn kaarten gemaakt die het aantal aanslagen of doden weergeven per land maar niet in relatie tot bepaalde groeperingen en soorten doelen </p>
