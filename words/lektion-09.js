const listOfWords = [
{german:"das Abendessen, -",slovak:"vecera"},
{german:"alle",slovak:"vsetci"},
{german:"alles klar",slovak:"v poriadku"},
{german:"alt",slovak:"stary"},
{german:"am häufigsten",slovak:"najcastejsie"},
{german:"am liebsten",slovak:"najradsej"},
{german:"am Wochenende",slovak:"cez vikend"},
{german:"der Anfang, Pl. Anfänge",slovak:"zaciatok"},
{german:"angenehm",slovak:"prijemny"},
{german:"aus (predlo¿ka s 3. pádom)",slovak:"z, zo"},
{german:"der Ausflug, PI. Ausflüge",slovak:"vylet"},
{german:"beachten",slovak:"dbat' na nieco"},
{german:"bei (predlozka s 3. pádom)",slovak:"pri"},
{german:"der Berg, -e",slovak:"hora"},
{german:"die Brille, -n",slovak:"okuliare"},
{german:"der Brimsen",slovak:"bryndza"},
{german:"die Burg, -en",slovak:"hrad"},
{german:"das Büro, -S",slovak:"kancelária"},
{german:"das Café, -s",slovak:"kaviaren"},
{german:"Das ist schade.",slovak:"To je skoda."},
{german:"doch",slovak:"predsa"},
{german:"das Dorf, Pl. Dörfer",slovak:"dedina"},
{german:"dort",slovak:"tam"},
{german:"durch (predlozka so 4. pádom)",slovak:"cez"},
{german:"eigentlich",slovak:"vlastne"},
{german:"einer der vielen",slovak:"jeden z mnohych"},
{german:"einladen (Ich lade dich zur Party ein.)",slovak:"pozvat (Pozyvam ta na  párty.)"},
{german:"einmal im Jahr",slovak:"raz do roka"},
{german:"die Eltern (PL.)",slovak:"rodicia"},
{german:"endlich",slovak:"konecne"},
{german:"entspannen",slovak:"oddychovat"},
{german:"der Erfolg, -e",slovak:"úspech"},
{german:"freuen - sich freuen (ich freue mich, du freust dich, er/sie/es freut sich)",slovak:"tesit sa"},
{german:"frisch",slovak:"cerstvy"},
{german:"für (predlozka so 4. pádom)",slovak:"pre"},
{german:"gar nicht",slovak:"vôbec nie"},
{german:"die Geburtstagsparty,-s",slovak:"narodeninová párty"},
{german:"gegen (predlozka so 4. pádom)",slovak:"proti, okolo"},
{german:"gemeinsam",slovak:"spolocne"},
{german:"gern",slovak:"rad"},
{german:"das Geschenk, -e",slovak:"darcek"},
{german:"die Gesundheit, -",slovak:"zdravie"},
{german:"die Halbpension, -",slovak:"polpenzia"},
{german:"das Highlight",slovak:"turisticky vrchol"},
{german:"hoffentlich",slovak:"snad'"},
{german:"das Hotel, -s",slovak:"hotel"},
{german:"die Hütte, -n",slovak:"chata"},
{german:"die Idee, -n",slovak:"nápad"},
{german:"Ich würde sagen...",slovak:"Povedal by som."},
{german:"in zwei Wochen",slovak:"o dva tyzdne"},
{german:"die Kantine, -n",slovak:"jedálen"},
{german:"kennenlernen (Ich lerne die Stadt kennen.)",slovak:"spoznat nieco (Spoznávam mesto.)"},
{german:"das Land, Pl. Länder",slovak:"krajina"},
{german:"lieber",slovak:"radsej"},
{german:"manche von uns",slovak:"niektori z nás"},
{german:"manchmal",slovak:"niekedy"},
{german:"das Meer, -e",slovak:"more"},
{german:"mit (predlozka s 3. pádom)",slovak:"s, so"},
{german:"mit dem Bus",slovak:"autobusom"},
{german:"mit dem Flugzeug",slovak:"lietadlom"},
{german:"mit dem Zug",slovak:"vlakom"},
{german:"mitbringen (ich bringe etw. mit)",slovak:"piniest nieco so sebou"},
{german:"das Mittagessen, -",slovak:"obed"},
{german:"der Mittelpunkt Europas",slovak:"stred Európy"},
{german:"der Mittelpunkt, -e",slovak:"stred"},
{german:"nach (predlozka s 3. pádom)",slovak:"po, do"},
{german:"natürlich",slovak:"samozrejme"},
{german:"neugierig",slovak:"zvedavy"},
{german:"nie",slovak:"nikdy"},
{german:"Norwegen",slovak:"Nórsko"},
{german:"oft",slovak:"casto"},
{german:"ohne (predlozka so 4. pádom)",slovak:"bez"},
{german:"ohnehin",slovak:"tak ci tak"},
{german:"die Orientierung, -en",slovak:"orientácie"},
{german:"der Ort, -e",slovak:"miesto"},
{german:"das Papier, -e",slovak:"papier"},
{german:"die Pension, -en",slovak:"penzión"},
{german:"planen",slovak:"plánovat"},
{german:"präsentieren",slovak:"prezentovat"},
{german:"das Projekt, -e",slovak:"projekt"},
{german:"das Rathaus, Pl. Rathäuser",slovak:"radnica"},
{german:"regelmäßig",slovak:"pravidelne"},
{german:"die Reise, -n",slovak:"cesta"},
{german:"der Reiseführer, -",slovak:"sprievodca"},
{german:"das Reisen, -",slovak:"cestovanie"},
{german:"der Reisepass, PI. Reisepässe",slovak:"cestovny pas"},
{german:"die Route, -n",slovak:"trasa"},
{german:"die Rückfahrt, -en",slovak:"cesta spät"},
{german:"die Rundfahrt, -en",slovak:"okruzná cesta"},
{german:"die Sehenswürdigkeit,-en",slovak:"pamätihodnost"},
{german:"sehr gern",slovak:"velmi rád"},
{german:"sehr oft",slovak:"velmi casto"},
{german:"selten",slovak:"zriedka"},
{german:"schade",slovak:"skoda"},
{german:"das Schloss, Pl. Schlösser",slovak:"zámok"},
{german:"schrecklich",slovak:"otrasny"},
{german:"Ski fahren",slovak:"lyzovat"},
{german:"die Slowakei",slovak:"Slovensko"},
{german:"sonst",slovak:"inác"},
{german:"die Stadt, Pl. Städte",slovak:"mesto"},
{german:"die Strecke, -n",slovak:"trasa"},
{german:"die Studienreise, -n",slovak:"poznávacia cesta"},
{german:"der Tunnel, o",slovak:"tunel"},
{german:"über den Sommer/im Sommer",slovak:"cez leto"},
{german:"über den Winter/im Winter",slovak:"cez zimu"},
{german:"über die Ferien/in den Ferien",slovak:"cez prázdniny"},
{german:"um (predlozka so 4. pádom)",slovak:"o, okolo"},
{german:"unter der Woche",slovak:"cez tyzden"},
{german:"die Unterbringung,-en",slovak:"ubytovanie"},
{german:"Urlaub nehmen",slovak:"zobrat si dovolenku"},
{german:"der Urlaub, -e",slovak:"dovolenka"},
{german:"der Urlaubsplan, Pl. Urlaubspläne",slovak:"dovolenkové plány"},
{german:"der USB-Stick, -s",slovak:"USB klúc"},
{german:"verbringen",slovak:"strávit (napr. dovolenku)"},
{german:"das Verkehrsmittel, -",slovak:"dopravny prostriedok"},
{german:"die Verpflegung,-en",slovak:"stravovanie"},
{german:"viel",slovak:"vela"},
{german:"die Vollpension, o",slovak:"plná penzia"},
{german:"von (predlozka s 3. pádom)",slovak:"z, zo, od"},
{german:"vorbereiten (POZOR: odlúcitelná predpona - ich bereite vor)",slovak:"pripravit (napr. projekt)"},
{german:"der Vorschlag, Pl. Vorschläge",slovak:"návrh"},
{german:"vorschlagen (Ich habe vorgeschlagen.)",slovak:"navrhnut (Navrhol som.)"},
{german:"predpis",slovak:"die Vorschrift, -en"},
{german:"die Wanderung (Wanderungen machen)",slovak:"turistika (chodit na turistiku)"},
{german:"weg",slovak:"prec"},
{german:"der Weg, -e",slovak:"cesta"},
{german:"das Wetter, o",slovak:"pocasie"},
{german:"die Woche, -n",slovak:"tyzden"},
{german:"wunderbar",slovak:"vyborny"},
{german:"wünschen",slovak:"zelat, priat"},
{german:"die Zeit, a",slovak:"cas"},
{german:"die Zeitschrift,-en",slovak:"casopis"},
{german:"zu (predlozka s 3. pádom)",slovak:"k, ku"},
{german:"zubereiten (Ich bereite das Essen zu.)",slovak:"pripravit (Prípravim jedlo.)"},
{german:"der Zug, Pl. Züge",slovak:"vlak"},
{german:"zweimal im Jahr",slovak:"dvakrát do roka"},
];