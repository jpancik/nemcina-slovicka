const listOfWords = [
{german:"die Abteilung, -en",slovak:"oddelenie"},
{german:"allein",slovak:"sám/sama"},
{german:"alles",slovak:"vsetko"},
{german:"also",slovak:"takze"},
{german:"alt",slovak:"stary"},
{german:"angeblich",slovak:"údajne"},
{german:"anschließend",slovak:"nakoniec"},
{german:"der Apfel, Pl. Äpfel",slovak:"jablko"},
{german:"der Apfelsaft, Pl. Apfelsäfte",slovak:"jablkovy dzus"},
{german:"aufgeschnitten",slovak:"nakrájany"},
{german:"auskennen - sich auskennen (Ich kenne mich in der Stadt schon aus.)",slovak:"vyznat sa (V meste sa uz vyznám.)"},
{german:"der Ausweis, -e",slovak:"preukaz"},
{german:"die Backware, -n",slovak:"pecivo"},
{german:"die Banane, -n",slovak:"banán"},
{german:"das Basilikum",slovak:"bazalka"},
{german:"der Becher, -",slovak:"pohár"},
{german:"bequem",slovak:"pohodlny"},
{german:"bekommen",slovak:"dostat"},
{german:"bezahlen",slovak:"zaplatit"},
{german:"billig",slovak:"lacny"},
{german:"Bis später.",slovak:"Uvidíme sa neskôr."},
{german:"bleiben",slovak:"zostat"},
{german:"das Brot, -e",slovak:"chlieb"},
{german:"der Bund, Pl. Bünde",slovak:"zväzok"},
{german:"doch",slovak:"predsa"},
{german:"die Dose, -n",slovak:"nádoba"},
{german:"die Drogerieabteilung,-en",slovak:"drogéria"},
{german:"das Duschgel, -S",slovak:"sprchovaci gél"},
{german:"der Ei-Aufstrich, -e",slovak:"vajícková pomazánka"},
{german:"der Einkauf, Pl. Einkäufe",slovak:"nakup"},
{german:"einkaufen",slovak:"nakupovat"},
{german:"die Einkaufsliste, -n",slovak:"nákupny zoznam"},
{german:"der Einkaufswagen,",slovak:"nákupny vozík"},
{german:"der Emmentaler, ©",slovak:"ementál"},
{german:"der Ententeich, -e",slovak:"jazierko s kackami"},
{german:"entscheiden sich (Milan kann sich nicht entscheiden.)",slovak:"rozhodnut sa (Milan sa nevie rozhodnút.)"},
{german:"essen (ich esse, du isst, er/sie/es isst, wir essen, ihr esst, sie/Sie essen)",slovak:"jest"},
{german:"die Extrawurst",slovak:"saláma podobna liptovskej saláme"},
{german:"die Feinkostabteilung,-en",slovak:"lahödky"},
{german:"das Fahrrad, Pl. Fahrräder",slovak:"bicykel"},
{german:"finden",slovak:"nájst"},
{german:"die Flasche, -n",slovak:"flaska"},
{german:"das Fleisch, Pl. Fleischsorten",slovak:"mäso"},
{german:"frei",slovak:"volno"},
{german:"frisch",slovak:"cerstvy"},
{german:"das Früchtejoghurt,-s",slovak:"ovocny jogurt"},
{german:"das Gemüse, PI. Gemüsesorten",slovak:"zelenina"},
{german:"das Geschäft, Pl. Geschäfte",slovak:"obchod"},
{german:"geschlossen",slovak:"zatvoreny"},
{german:"die Getränke-Abteilung, -en",slovak:"oddelenie s nápojmi"},
{german:"grüner Salat",slovak:"zeleny Salát (hlávkovy)"},
{german:"günstig",slovak:"vyhodny"},
{german:"dobry",slovak:"gut"},
{german:"der Hausschlüssel, -",slovak:"kluc od domu"},
{german:"hässlich",slovak:"skaredy"},
{german:"dnes",slovak:"heute"},
{german:"Ich kenn mich in der Stadt schon aus.",slovak:"V meste sa uz vyznám."},
{german:"im Sonderangebot",slovak:"v akcii"},
{german:"in der Mitte",slovak:"v strede"},
{german:"In Ordnung.",slovak:"V poriadku."},
{german:"interessant",slovak:"zaujimavy"},
{german:"jeden Monat",slovak:"kazdy mesiac"},
{german:"das Joghurt, -s",slovak:"jogurt"},
{german:"jung",slovak:"mlady"},
{german:"die Kartoffel, -n",slovak:"zemiak"},
{german:"der Käse, PI. Käsesorten",slovak:"Syr"},
{german:"das Klopapier, -",slovak:"toaletny papier"},
{german:"kochen",slovak:"varit"},
{german:"der Koffer, -",slovak:"kufor"},
{german:"der Kuchen, -",slovak:"kolác"},
{german:"das Kühlregal,-e",slovak:"chladiaci regál"},
{german:"der Laib, -e",slovak:"pecen (chleba)"},
{german:"langweilig",slovak:"nudny"},
{german:"der Laptop",slovak:"laptop"},
{german:"das Leitungswasser",slovak:"voda z vodovodu"},
{german:"lieber",slovak:"radsej"},
{german:"das Lieblingsjoghurt, -s",slovak:"oblubeny jogurt"},
{german:"links",slovak:"vlavo"},
{german:"lustig",slovak:"smiesny"},
{german:"die Milch, -",slovak:"mlieko"},
{german:"der Milchkaffee, -s",slovak:"káva s mliekom"},
{german:"das Milchprodukt,-e",slovak:"mliecne vyrobky"},
{german:"das Mineralwasser",slovak:"minerálka"},
{german:"modern",slovak:"moderny"},
{german:"der Nachmittag (am Nachmittag)",slovak:"poobedie (poobede)"},
{german:"natürlich",slovak:"prirodzene"},
{german:"oben",slovak:"hore"},
{german:"das Obst, Pl. Obstsorten",slovak:"ovocie"},
{german:"das Olivenöl, -e",slovak:"olivovy olej"},
{german:"der Orangensaft, Pl. Orangensäfte",slovak:"pomarancovy dzús"},
{german:"die Packung, -en",slovak:"balenie"},
{german:"praktisch",slovak:"prakticky"},
{german:"das Putzmittel, -",slovak:"cistiaci prostriedok"},
{german:"das Regal, -e",slovak:"polica"},
{german:"die Rechnung,-en",slovak:"faktúra"},
{german:"rechts",slovak:"vpravo"},
{german:"der Rotwein, -e",slovak:"cervené vino"},
{german:"der Rucksack, Pl. Rucksäcke",slovak:"ruksak"},
{german:"rufen (ein Taxi)",slovak:"zavolat (taxik)"},
{german:"der Sack, Pl. Säcke",slovak:"vrecúsko"},
{german:"der Salat, -e",slovak:"Salát"},
{german:"der Samstag, -e",slovak:"sobota"},
{german:"die Semmel, -n",slovak:"zemla"},
{german:"die Schachtel, -n",slovak:"krabicka"},
{german:"die Scheibe, -n",slovak:"krajec"},
{german:"der Schinken",slovak:"sunka"},
{german:"schick",slovak:"vkusny"},
{german:"schlecht",slovak:"zly"},
{german:"schmecken",slovak:"chutit"},
{german:"schön",slovak:"pekny"},
{german:"die SIM-Karte",slovak:"SIM-karta"},
{german:"das Sonderangebot,-e",slovak:"akcia"},
{german:"der Sontag (den ganzen Sonntag)",slovak:"nedela (celú nedelu)"},
{german:"der Stadtpark, -s",slovak:"mestsky park"},
{german:"stattdessen",slovak:"namiesto toho"},
{german:"das Stück, -e",slovak:"kus"},
{german:"suchen",slovak:"hladat"},
{german:"der Supermarkt, Pl. -märkte",slovak:"supermarket"},
{german:"teuer",slovak:"drahy"},
{german:"der Thunfisch, -e",slovak:"tuniak"},
{german:"toll",slovak:"perfektny"},
{german:"die Tomate, -n",slovak:"paradajka"},
{german:"tragen",slovak:"niest"},
{german:"trinken",slovak:"pit"},
{german:"unbequem",slovak:"nepohodlny"},
{german:"ungarische Salami",slovak:"madarska saláma"},
{german:"ungünstig",slovak:"nevyhodny"},
{german:"uninteressant",slovak:"nezaujimavy"},
{german:"unpraktisch",slovak:"neprakticky"},
{german:"unten",slovak:"dole"},
{german:"der Unterschied, -e (Was ist der Unterschied?)",slovak:"rozdiel (Aky je v tom rozdiel?)"},
{german:"die Unterschrift,-en",slovak:"podpis"},
{german:"verbringen",slovak:"strávit"},
{german:"der Apfel, PI. Âpfel",slovak:"jablko"},
{german:"die Banane, -n",slovak:"banán"},
{german:"die Birne, -n",slovak:"hruska"},
{german:"die Orange, -n",slovak:"pomaranc"},
{german:"die Kiwi, -s",slovak:"kiwi"},
{german:"die Weintraube, -n",slovak:"hrozno"},
{german:"die Erdbeere, -n",slovak:"jahoda"},
{german:"die Himbeere, -n",slovak:"malina"},
{german:"die Heidelbeere, -n (= Blaubeere, Schwarzbeere)",slovak:"cucoriedka"},
{german:"die Johannisbeere, -n",slovak:"ribezla (v Rakúsku die Ribisel)"},
{german:"vergessen",slovak:"zabudnút"},
{german:"der Verkäufer, -",slovak:"predavac"},
{german:"die Verkäuferin, -nen",slovak:"predavacka"},
{german:"verschieden",slovak:"rozlicny"},
{german:"der Vertrag, Pl. Verträge",slovak:"zmluva"},
{german:"das Vertragshandy,-s",slovak:"mobilny telefón na zmluvu"},
{german:"viel",slovak:"vela"},
{german:"voll",slovak:"plny"},
{german:"die Vollmilch",slovak:"plnotucné mlieko"},
{german:"das Waschpulver, -",slovak:"prací prások"},
{german:"die Weintraube, -n",slovak:"hrozno"},
{german:"der Weißwein, -e",slovak:"biele vino"},
{german:"das Wertkartenhandy,-s",slovak:"mobil na nabíjatelnú kartu"},
{german:"Wie findest du...?",slovak:"Co hovoris na...? Ako sa ti páci...?"},
{german:"wirklich",slovak:"skutocne"},
{german:"die Wurst, Pl. Würste",slovak:"saláma"},
{german:"zahlen",slovak:"platit"},
{german:"zeigen",slovak:"ukázat"},
{german:"die Zucchini,",slovak:"cuketa"},
{german:"die Pflaume, -n",slovak:"slivka (v Rakúsku die Zwetschke)"},
{german:"der Pfirsich, -e",slovak:"broskyna"},
{german:"die Aprikose, -n",slovak:"marhula (v Rakúsku die Marille)"},
{german:"die Kirsche, -n",slovak:"ceresna"},
{german:"die Zitrone, -n",slovak:"citrón"},
{german:"die Mandarine, -n",slovak:"mandarinka"},
{german:"die Grapefruit, -s",slovak:"grapefruit"},
{german:"die Melone, -n",slovak:"melón"},
{german:"die Ananas,",slovak:"ananás"},
{german:"die Pistazie, -n",slovak:"pistácia"},
{german:"der Pinienkern, -e",slovak:"píniové jadierka"},
{german:"die Cashewnuss, PI. -nüsse",slovak:"kesu oriesky"},
{german:"die Mandel, -n",slovak:"mandle"},
{german:"die Haselnuss,-nüsse",slovak:"lieskovy orech"},
{german:"die Walnuss, -nüsse",slovak:"vlassky orech"},
{german:"die Kokosnuss, -nüsse",slovak:"kokosovy orech"},
{german:"die Erdnuss, -nüsse",slovak:"bursky orech"},
{german:"der Champignon, -s",slovak:"Sampiñóny"},
{german:"der Pilz, -e",slovak:"huba"},
{german:"der Lauch, O",slovak:"pór"},
{german:"die Frühlingszwiebel, -n",slovak:"jarná cibulka"},
{german:"die Zwiebel, -n",slovak:"cibula"},
{german:"der Knoblauch, -",slovak:"cesnak"},
{german:"die Kartoffel, -n",slovak:"zemiak"},
{german:"der Spargel,",slovak:"Spargla"},
{german:"der Kohlrabi, -s",slovak:"kalerab"},
{german:"der Salat, -e",slovak:"Salát"},
{german:"der Kohl, O",slovak:"kel (v Rakúsku das Kraut)"},
{german:"der Blumenkohl, O",slovak:"karfiol (v Rakúsku der Karfiol)"},
{german:"der Brokkoli, O",slovak:"brokolica"},
{german:"die Tomate, -n",slovak:"paradajka"},
{german:"der Paprika, -s",slovak:"paprika"},
{german:"die Gurke, -n",slovak:"uhorka"},
{german:"der Kürbis, PI. Kürbisse",slovak:"tekvica"},
{german:"die Aubergine, -n",slovak:"baklazán (v Rakúsku die Melanzani)"},
{german:"die Zucchini,",slovak:"cuketa"},
{german:"die Möhre, -n",slovak:"mrkva (v Rakúsku die Karotte)"},
{german:"das Radieschen, -",slovak:"redkvicka"},
{german:"die Rübe, -n",slovak:"repa"},
{german:"die Bohne, -n",slovak:"fazula"},
{german:"die Linse, -n",slovak:"sosovica"},
{german:"die Erbse, -n",slovak:"hrások"},
{german:"der Spinat, -",slovak:"Spenát"},
{german:"Was hätten Sie gerne?",slovak:"Co si dâte?"},
{german:"Was bekommen Sie?",slovak:"Co Vám prinesiem?"},
{german:"Was darf's sein?",slovak:"Co to bude?"},
{german:"Was möchten Sie trinken?",slovak:"Co si dáte na pitie?"},
{german:"Ein Bier und ein Mineralwasser.",slovak:"Jedno pivo a minerálku."},
{german:"Wir möchten gern bestellen.",slovak:"Radi by sme si objednali."},
{german:"Ich möchte gern bestellen.",slovak:"Chcel by som si objednat."},
{german:"Ich hätte gerne einen Cappuccino und einen Apfelstrudel.",slovak:"Dal by som si kapucino a jablkovú Strúdlu."},
{german:"Ich nehme einen Verlängerten und ein gemischtes Eis.",slovak:"Dám si velkú kávu a miesanú zmrzlinu."},
{german:"Welche Kuchen haben Sie?",slovak:"Aké koláce máte?"},
{german:"Dann nehme ich einen Apfelkuchen.",slovak:"Tak si dám jablkovy kolác."},
{german:"Haben Sie noch einen Wunsch?",slovak:"Máte este nejaké zelanie?"},
{german:"Möchten Sie noch etwas bestellen?",slovak:"Chcete si este nieco objednat?"},
{german:"Danke, das ist alles.",slovak:"Dakujem, to je vsetko."},
{german:"Wir nehmen noch zweimal Gulasch mit Knödel und zwei Bier.",slovak:"Dáme si este dvakrát gulas s knedlou a dve pivá."},
{german:"Guten Appetit!",slovak:"Dobrú chut!"},
{german:"Lass es dir schmecken.",slovak:"Dobrú chut (tykanie)."},
{german:"Lassen Sie es sich schmecken.",slovak:"Dobrú chut (vykanie)."},
{german:"Mahlzeit.",slovak:"Dobrú chut. (v Rakúsku)"},
{german:"Schmeckt es dir?",slovak:"Chutí ti to?"},
{german:"Schmeckt es Ihnen?",slovak:"Chuti Vam to?"},
{german:"Ist hier noch frei?",slovak:"Máte tu este volno?"},
{german:"Dürfen wir uns dazusetzen?",slovak:"Môzeme sa tu posadit?"},
{german:"Entschuldigen Sie bitte, ...",slovak:"Prepácte,.."},
{german:"Zahlen, bitte!",slovak:"Platím, prosím."},
{german:"Die Rechnung bitte.",slovak:"Ucet, prosim."},
{german:"Ich möchte gern zahlen.",slovak:"Rad by som zaplatil."},
{german:"Das macht 9,50 € (neun Euro fünfzig).",slovak:"Spolu je to 9,50 €."},
{german:"Wir möchten gern zahlen.",slovak:"Chceme zaplatit."},
{german:"Danke, stimmt so.",slovak:"Dakujem, to je poriadku."},
];