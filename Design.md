<h1>Design document</h1>

<h2> Data Transformation </h2>
<p> De data die ik gebruik komt van: https://data.world/alexcl/global-terrorism-database.  </p>


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
initiated.  </td>
  
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
    <td>1 = ASSASSINATION : <br>
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
    <td>Maria Anders</td>
  
  </tr>
  
  <tr>
    <td>target_nationality</td>
    <td>Yoshi Tannamuri</td>
    </tr>
    
    
  <tr>
    <td>group_name</td>
    <td>Giovanni Rovelli</td>
   </tr>
   
   
   
   <tr>
    <td>weapon_type</td>
    <td>Giovanni Rovelli</td>
 
  </tr>
  
   <tr>
    <td>nkill</td>
    <td>Giovanni Rovelli</td>
   </tr>
   
   
   <tr>
    <td>date</td>
    <td>Giovanni Rovelli</td>
   </tr>
   
   
   
   <tr>
    <td>month</td>
    <td>Giovanni Rovelli</td>
   </tr>
   
    
</table>


