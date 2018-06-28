<h1> Proces beschrijving </h1>

<h2> Dag 1 </h2>

<p> Bezig met het uitwerken van het proposal (visual sketch enz) </p>

<h2> Dag 2 </h2>
<p> Bezig om de data om te zetten in bruikbare data. In de world.data omgeving stonden de gegevens in een database; in een online omgeving kun je query's schrijven met sql. Vervolgens heb ik deze query laten omzetten in een csv bestand en vervolgens in json objecten. Daarna ben ik gaan pielen met deze json objecten om te bekijken hoe ik eventueel dicts moet gaan maken </p>

<h2> Dag 3 </h2>
<p> status: proposal gemaakt, data verwerkt tot JSON en design opdracht af. Ook heb ik even geëxperimenteerd met de JSON objecten in console.log. Daarnaast heb ik ook een process document opgezet.

working on: Dictonary maken van het aantal aanslagen en het aantal doden per Europees land. Om hierna deze informatie in de kaart als tooltip te kunnen weergeven.

issues: Datamaps biedt alleen de mogelijkheid om op basis van het land_id te kunnen koppelen aan de data. Ik wil op basis van de landnaam kunnen koppelen. Ben nu dus bezig om te kijken hoe dit het beste kan.
</p>

<h2> Dag 4 </h2>

<p> status: Bezig met het maken van de Map

working on: Tooltip voor map

issues: json land koppelen aan data land, zonder gebruik te maken van een uniek ID.
</p>

<h2> Dag 5 </h2>
<p> status: Tooltip af

working on: Legend map en slider

issues: Schaling map (extreme waarden)
</p>

Dictonary voor aanslagen is in orde. Bezig geweest met het maken van de map, op zo'n manier dat ik geen ID hoef toe te voegen in m'n dataset.
</p>

<h2> Dag 5 </h2>
Manier gevonden om landen te koppelen van map en json. Map afgemaakt + tooltip
</p>

<h2> Dag 6 </h2>
<p> Bezig geweest met donut chart. Dict gemaakt die de data zo klaar zet dat deze makkelijk ingeladen kan worden voor de donut chart.
</p>

<h2> Dag 7 </h2>
Bezig geweest met bootstrap om te kijken hoe ik mijn visualisaties moet inschalen.Daarnaast ben ik bezig geweest om de donut chart af te maken
</p>

<h2> Dag 8 </h2>
<p> Bezig geweest met slider goed maken en bezig geweest om een dict te bouwen voor het aantal doden.
</p>

<h2> Dag 9 </h2>
<p> Ben een hele dag bezig geweest om het aantal doden te kunnen optellen per land. Mijn eerste aanpak was om dynamisch arrays bij te laten maken met een bepaalde landnaam om zo de waarden van de doden in te kunnen laten vullen in een array en vervolgens te summeren. Deze aanpak werkte niet. De dynamische arrays aanmaken op basis van hoeveel landen er zijn voor de gegeven periode met bijbehorende landnaam lukte wel. Doormiddel van window, maar bij het pushen van het aantal doden naar de arrays kwam een probleem naar voren. Het pushen naar een array lukte namelijk niet. De foutmelding: ……push is not a function kwam regelmatig op mijn scherm. Ik kwam er uiteindelijk achter dat ik deze foutmelding kreeg omdat de functie push een string kreeg en geen object. Terwijl de landnamen duidelijk objecten waren. Typecasten naar een object werkte niet en dus had ik een nieuwe aanpak nodig. Ik besloot om een dictinoray te maken met landnamen en betreffende doden. Het probleem hiervan is dat er duplicerende landennamen worden opgenomen in de dict. Dit probleem heb ik opgelost door de dict te groeperen op keys en de bijbehorende values te summeren.
</p>


<h2> Dag 10 </h2>
<p> Ben bezig geweest om het aantal doden en het aantal aanslagen dynamisch te maken met de slider
</p>

<h2> Dag 11 </h2>
<p> Ben bezig geweest om de heatmap te maken, het was veel gezeik om dit in elkaar te zetten. Het is nu nog steeds niet helemaal af. Ik was met name lang bezig om de data goed te krijgen. Dit is nu nog steeds niet helemaal goed.
</p>



<h2> Dag 12 </h2> 

<p> Heb de data voor de heatmap goed gekregen en heb een bug in de slider ontdekt, waar ik nog steeds mee bezig ben om op te lossen
</p>
