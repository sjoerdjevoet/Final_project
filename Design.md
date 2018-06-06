<h1>Design document</h1>

<h2> Data Transformation </h2>
<p> De data die ik gebruik komt van: https://data.world/alexcl/global-terrorism-database.  </p>

<h3> beschrijving variabelen </h3>
<table>
  <tr>
    <th>Variabele naam</th>
    <th>Beschrijving</th>
     <tr>
  
   <tr>
    <td>iyear</td>
    <td>Numeric Variable
This field contains the year in which the incident occurred. In the case of incident(s)
occurring over an extended period, the field will record the year when the incident was
initiated. </td>
  
  </tr>
      
 
  <tr>
    <td>country</td>
    <td>This field identifies the country or location where the incident occurred.</td>
 
  </tr>
  <tr>
    <td>succes</td>
    <td>Success of a terrorist strike is defined according to the tangible effects of the attack.
Success is not judged in terms of the larger goals of the perpetrators. For example, a
bomb that exploded in a building would be counted as a success even if it did not
succeed in bringing the building down or inducing government repression.  
The definition of a successful attack depends on the type of attack. Essentially, the
key question is whether or not the attack type took place. If a case has multiple
attack types, it is successful if any of the attack types are successful, with the
exception of assassinations, which are only successful if the intended target is killed.
1 = "Yes"    The incident was successful.  
0 = "No"    The incident was not successful.</td>
 
  </tr>
  
   <tr>
    <td>suicide</td>
    <td>This variable is coded “Yes” in those cases where there is evidence that the
perpetrator did not intend to escape from the attack alive.  
1 = "Yes"    The incident was a suicide attack.  
0 = "No"    There is no indication that the incident was a suicide attack.</td>
    </tr>
  
  <tr>
    <td>attack_type</td>
    <td>
1 = ASSASSINATION : <br>
An act whose primary objective is to kill one or more specific, prominent
individuals. Usually carried out on persons of some note, such as high‐
ranking military officers, government officials, celebrities, etc. Not to include
attacks on non‐specific members of a targeted group. The killing of a police
officer would be an armed assault unless there is reason to believe the
attackers singled out a particularly prominent officer for assassination. <br>
  
  
2 = ARMED ASSAULT: <br>
An attack whose primary objective is to cause physical harm or death directly
to human beings by use of a firearm, incendiary, or sharp instrument (knife,
etc.). Not to include attacks involving the use of fists, rocks, sticks, or other
handheld (less‐than‐lethal) weapons. Also includes attacks involving certain
classes of explosive devices in addition to firearms, incendiaries, or sharp
instruments. The explosive device subcategories that are included in this
classification are grenades, projectiles, and unknown or other explosive
devices that are thrown. <br>
  
  
3 = BOMBING/EXPLOSION: <br>
An attack where the primary effects are caused by an energetically unstable
material undergoing rapid decomposition and releasing a pressure wave that
causes physical damage to the surrounding environment. Can include either
high or low explosives (including a dirty bomb) but does not include a nuclear
explosive device that releases energy from fission and/or fusion, or an
incendiary device where decomposition takes place at a much slower rate.  
If an attack involves certain classes of explosive devices along with firearms,
incendiaries, or sharp objects, then the attack is coded as an armed assault
only. The explosive device subcategories that are included in this
classification are grenades, projectiles, and unknown or other explosive
devices that are thrown in which the bombers are also using firearms or
incendiary devices. <br>


4 = HIJACKING: <br>
An act whose primary objective is to take control of a vehicle such as an
aircraft, boat, bus, etc. for the purpose of diverting it to an unprogrammed
destination, force the release of prisoners, or some other political
objective. Obtaining payment of a ransom should not the sole purpose of a
Hijacking, but can be one element of the incident so long as additional
objectives have also been stated. Hijackings are distinct from Hostage Taking
because the target is a vehicle, regardless of whether there are
people/passengers in the vehicle. <br>

5 = HOSTAGE TAKING (BARRICADE INCIDENT): <br>
An act whose primary objective is to take control of hostages for the purpose
of achieving a political objective through concessions or through disruption
of normal operations. Such attacks are distinguished from kidnapping since
the incident occurs and usually plays out at the target location with little or
no intention to hold the hostages for an extended period in a separate
clandestine location. <br>


6 = HOSTAGE TAKING (KIDNAPPING): <br>
An act whose primary objective is to take control of hostages for the purpose
of achieving a political objective through concessions or through disruption
of normal operations. Kidnappings are distinguished from Barricade Incidents
(above) in that they involve moving and holding the hostages in another
location. <br>


7 = FACILITY / INFRASTRUCTURE ATTACK: <br>
An act, excluding the use of an explosive, whose primary objective is to cause
damage to a non‐human target, such as a building, monument, train,
pipeline, etc. Such attacks include arson and various forms of sabotage (e.g.,
sabotaging a train track is a facility/infrastructure attack, even if passengers
are killed). Facility/infrastructure attacks can include acts which aim to harm
an installation, yet also cause harm to people incidentally (e.g. an arson
attack primarily aimed at damaging a building, but causes injuries or
fatalities). <br>
  
  
8 = UNARMED ASSAULT: <br>
An attack whose primary objective is to cause physical harm or death directly
to human beings by any means other than explosive, firearm, incendiary, or
sharp instrument (knife, etc.). Attacks involving chemical, biological or
radiological weapons are considered unarmed assaults. <br>
  
  
9 = UNKNOWN: <br>
The attack type cannot be determined from the available information.</td> <br>
 
  </tr>
  
   <tr>
    <td>target_type</td>
    <td>
 1 = BUSINESS: <br>
Businesses are defined as individuals or organizations engaged in commercial or
mercantile activity as a means of livelihood. Any attack on a business or private
citizens patronizing a business such as a restaurant, gas station, music store, bar,
café, etc.  
This includes attacks carried out against corporate offices or employees of firms like
mining companies, or oil corporations. Furthermore, includes attacks conducted on
business people or corporate officers. Included in this value as well are hospitals and
chambers of commerce and cooperatives.
Does not include attacks carried out in public or quasi‐public areas such as “business
district or commercial area”, or generic business‐related individuals such as
“businessmen” (these attacks are captured under “Private Citizens and Property”,
see below.) Also does not include attacks against generic business‐related. <br>

2 = GOVERNMENT (GENERAL): <br>
Any attack on a government building; government member, former members,
including members of political parties in official capacities, their convoys, or events
sponsored by political parties; political movements; or a government sponsored
institutions. This value includes cultural centers that have diplomatic functions, and attacks
against diplomatic staff and their families (when the relationship is relevant to the
motive of the attack) and property. The United Nations is a diplomatic target. <br>

8 = EDUCATIONAL INSTITUTION: <br>
Attacks against schools, teachers, or guards protecting school sites. Includes attacks
against university professors, teaching staff and school buses. Moreover, includes
attacks against religious schools in this value.  
As noted below in the “Private Citizens and Property” value, the GTD has several
attacks against students. If attacks involving students are not expressly against a
school, university or other educational institution or are carried out in an
educational setting, they are coded as private citizens and property.  
Excludes attacks against military schools (attacks on military schools are coded as
“Military,” see below). </br>

9 = FOOD OR WATER SUPPLY: <br>
Attacks on food or water supplies or reserves are included in this value. This
generally includes attacks aimed at the infrastructure related to food and water for
human consumption.<br>

10 = JOURNALISTS & MEDIA: <br>
Includes, attacks on reporters, news assistants, photographers, publishers, as well as
attacks on media headquarters and offices.
Attacks on transmission facilities such as antennae or transmission towers, or
broadcast infrastructure are coded as “Telecommunications,” see below.</br>


11 = MARITIME (INCLUDES PORTS AND MARITIME FACILITIES): <br>
Includes civilian maritime: attacks against fishing ships, oil tankers, ferries, yachts,
etc. (Attacks on fishermen are coded as “Private Citizens and Property,” see below). <br>

12 = NGO: <br>
Includes attacks on offices and employees of non‐governmental organizations
(NGOs). NGOs here include large multinational non‐governmental organizations
such as the Red Cross and Doctors without Borders, as well as domestic
organizations.
Does not include labor unions, social clubs, student groups, and other non‐NGO
(such cases are coded as “Private Citizens and Property”, see below). <br>

13= OTHER
This value includes acts of terrorism committed against targets which do not fit into
other categories. Some examples include ambulances, firefighters, refugee camps,
and international demilitarized zones.
14= PRIVATE CITIZENS & PROPERTY
This value includes attacks on individuals, the public in general or attacks in public
areas including markets, commercial streets, busy intersections and pedestrian
malls.
Also includes ambiguous cases where the target/victim was a named individual, or
where the target/victim of an attack could be identified by name, age, occupation,
gender or nationality. This value also includes ceremonial events, such as weddings
and funerals.
  
The GTD contains a number of attacks against students. If these attacks are not
expressly against a school, university or other educational institution or are not
carried out in an educational setting, these attacks are coded using this value. Also,
includes incidents involving political supporters as private citizens and property,
provided that these supporters are not part of a government‐sponsored event.
Finally, this value includes police informers.
Does not include attacks causing civilian casualties in businesses such as restaurants,
cafes or movie theaters (these categories are coded as “Business” see above).
  
15 = RELIGIOUS FIGURES/INSTITUTIONS
This value includes attacks on religious leaders, (Imams, priests, bishops, etc.),
religious institutions (mosques, churches), religious places or objects (shrines, relics,
etc.). This value also includes attacks on organizations that are affiliated with
religious entities that are not NGOs, businesses or schools.
Attacks on religious pilgrims are considered “Private Citizens and Property;” attacks
on missionaries are considered religious figures.  
16 = TELECOMMUNICATION
This includes attacks on facilities and infrastructure for the transmission of
information. More specifically this value includes things like cell phone towers,
telephone booths, television transmitters, radio, and microwave towers.  
17 = TERRORISTS/NON‐STATE MILITIAS
Terrorists or members of identified terrorist groups within the GTD are included in
this value. Membership is broadly defined and includes informants for terrorist
groups, but excludes former or surrendered terrorists.  
34
GLOBAL TERRORISM DATABASE CODEBOOK JUNE 2016
This value also includes cases involving the targeting of militias and guerillas.  
18 = TOURISTS
This value includes the targeting of tour buses, tourists, or “tours.”  Tourists are
persons who travel primarily for the purposes of leisure or amusement. Government
tourist offices are included in this value.
The attack must clearly target tourists, not just an assault on a business or
transportation system used by tourists. Travel agencies are coded as business
targets.
19 = TRANSPORTATION (OTHER THAN AVIATION)
Attacks on public transportation systems are included in this value. This can include
efforts to assault public buses, minibuses, trains, metro/subways, highways (if the
highway itself is the target of the attack), bridges, roads, etc.  
The GTD contains a number of attacks on generic terms such as “cars” or “vehicles.”  
These attacks are assumed to be against “Private Citizens and Property” unless
shown to be against public transportation systems. In this regard, buses are
assumed to be public transportation unless otherwise noted.
20 = UNKNOWN
The target type cannot be determined from the available information.
21 = UTILITIES
This value pertains to facilities for the transmission or generation of energy. For
example, power lines, oil pipelines, electrical transformers, high tension lines, gas
and electric substations, are all included in this value. This value also includes
lampposts or street lights.  
Attacks on officers, employees or facilities of utility companies excluding the type of
facilities above are coded as business.
22 = VIOLENT POLITICAL PARTIES
This value pertains to entities that are both political parties (and thus, coded as
“government” in this coding scheme) and terrorists. It is operationally defined as
groups that engage in electoral politics and appear as “Perpetrators” in the GTD. </td>
  
  </tr>
  
  <tr>
    <td>target_nationality</td>
    <td>This is the nationality of the target that was attacked, and is not necessarily the
same as the country in which the incident occurred, although in most cases it is.</td>
    </tr>
    
    
  <tr>
    <td>group_name</td>
    <td>Group responsible for the attack</td>
   </tr>
   
     
   <tr>
    <td>weapon_type</td>
    <td>Weapon used during assault</td>
   </tr>
  
   <tr>
    <td>nkill</td>
    <td>This field stores the number of total confirmed fatalities for the incident. The
number includes all victims and attackers who died as a direct result of the incident.  </td>
   </tr>
   
   
   <tr>
    <td>date</td>
    <td> Date of attack </td>
   </tr>
   
   
   
   <tr>
    <td>month</td>
    <td>Month of attack</td>
   </tr>
   
    
</table>

<h3> Functie beschrijvingen </h3>
<table>
  <tr>
  <th> Functienaam </th>
  <th> Beschrijving </th>
  </tr>
  <tr>
  <td> CreateMap </td>
  <td> Test </td>
  </tr>
   <tr>
  <td> MakePieChart </td>
  <td> Test </td>
  </tr>
  <tr>
  <td> UpdatePieChart </td>
  <td> Test </td>
  </tr>
  <td> MakeHeatMap </td>
  <td> Test </td>
  </tr>
   <tr>
  <td> UpdateHeatMap </td>
  <td> Test </td>
  </tr>
   <tr>
  <td> MakeHierarchicalChart </td>
  <td> Test </td>
  </tr>
  <tr>
  <td> UpdateHierarchicalChart </td>
  <td> Test </td>
  </tr>
  
 </table>
