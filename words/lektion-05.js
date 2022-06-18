const listOfWords = [
{german:"alkoholfreie Getränke",slovak:"nealkoholické nápoje"},
{german:"alkoholische Getränke",slovak:"alkoholické nápoje"},
{german:"alle zwei Wochen",slovak:"kazdé dva tyzdne"},
{german:"am besten",slovak:"najlepsie"},
{german:"die Angst, Pl. Ängste",slovak:"strach"},
{german:"der Apfelsaft, Pl. Apfelsäfte",slovak:"jabikovy d¿us"},
{german:"der Arbeitsvertrag, PI. Arbeitsverträge",slovak:"pracovná zmluva"},
{german:"der Arzt, PI. Ärzte, zum Arzt gehen",slovak:"lekar, ist k lekárovi"},
{german:"aufräumen",slovak:"upratovat"},
{german:"aufschreiben",slovak:"napísat"},
{german:"aufstehen",slovak:"vstat"},
{german:"ausfüllen",slovak:"vyplnit (napr. formulár)"},
{german:"ausgezeichnet",slovak:"vyborne"},
{german:"das Baguette, -S",slovak:"bageta"},
{german:"bald",slovak:"coskoro"},
{german:"die Bank, -en (zur Bank gehen)",slovak:"banka (ist do banky)"},
{german:"die Beillage, -n",slovak:"priloha"},
{german:"die Bankomatkarte,-n",slovak:"debetná karta"},
{german:"beide",slovak:"obidvaja"},
{german:"bekommen",slovak:"dostat"},
{german:"besonders",slovak:"mimoriadny"},
{german:"das Bett, -en (im Bett bleiben)",slovak:"zostat v posteli"},
{german:"das Bier, -e",slovak:"pivo"},
{german:"bleiben",slovak:"zostat"},
{german:"die Bratkartoffeln",slovak:"opekané zemiaky"},
{german:"die Bratwurst, Pl. Bratwürste",slovak:"pecená klobása"},
{german:"das Brot, -e",slovak:"chlieb"},
{german:"die Coca-Cola",slovak:"Coca cola"},
{german:"das Croissant, -s",slovak:"croissant"},
{german:"dabei",slovak:"so sebou"},
{german:"Das ist nett von dir.",slovak:"To je od teba milé."},
{german:"Das weiß ich nicht.",slovak:"To neviem."},
{german:"dass",slovak:"aby"},
{german:"dauern",slovak:"trvat"},
{german:"das Ding, -e",slovak:"vec"},
{german:"dir",slovak:"tebe"},
{german:"dürfen",slovak:"smiet"},
{german:"duschen",slovak:"sprchovat sa"},
{german:"der Ehemann, Pl. Ehemänner",slovak:"manzel"},
{german:"ein bisschen",slovak:"trocha"},
{german:"einladen",slovak:"pozvat"},
{german:"einzahlen (auf das Konto einzahlen)",slovak:"vlozit na úcet"},
{german:"das Eis",slovak:"zmrzlina"},
{german:"eröffnen",slovak:"otvorit (úcet)"},
{german:"essen",slovak:"jest"},
{german:"das Essen, -",slovak:"jedlo"},
{german:"etwas",slovak:"nieco"},
{german:"feiern",slovak:"oslavovat"},
{german:"fernsehen",slovak:"dívat' sa na TV"},
{german:"das Fleisch, Pl. Fleischsorten",slovak:"mäso"},
{german:"das Formular, -e",slovak:"formulár"},
{german:"frei",slovak:"volno"},
{german:"frühstücken",slovak:"ranajkovat"},
{german:"das Gebäck, -",slovak:"pecivo"},
{german:"der Geburtstag, -e",slovak:"narodeniny"},
{german:"das Gehalt, Pl. Gehälter",slovak:"plat"},
{german:"das Gehaltskonto, Pl. Gehaltskonten",slovak:"bezny úcet"},
{german:"das Geld, -er (Es geht ums Geld.)",slovak:"peniaze (Ide o peniaze.)"},
{german:"das Getränk, -e",slovak:"nápoj"},
{german:"das Glück, -",slovak:"stastie"},
{german:"der Gulasch, -e",slovak:"gulás"},
{german:"die Gulaschsuppe,-n",slovak:"gulásová polievka"},
{german:"Guten Appetit",slovak:"Dobrú chut"},
{german:"das Hähnchenschnitzel, -",slovak:"kurací rezen"},
{german:"der Hauptplatz",slovak:"hlavné námestie"},
{german:"helfen",slovak:"pomôct"},
{german:"hingehen",slovak:"ist niekam"},
{german:"heute",slovak:"dnes"},
{german:"höflich",slovak:"zdvorily"},
{german:"Ich komme gerne mit.",slovak:"Rada s tebou pôjdem."},
{german:"Ihnen",slovak:"Vam"},
{german:"immer",slovak:"vzdy"},
{german:"der Kaffe, -s",slovak:"kava"},
{german:"das Kaffeehaus, Pl. Kaffeehäuser",slovak:"kaviaren"},
{german:"die Kartoffel, -n",slovak:"zemiak"},
{german:"der Knödel,",slovak:"knedla"},
{german:"kochen",slovak:"varit"},
{german:"die Köchin, -nen",slovak:"kuchárka"},
{german:"können",slovak:"môct"},
{german:"das Konto, Pl. Konten",slovak:"úcet"},
{german:"der Kühlschrank, Pl. Kühlschränke",slovak:"chladnicka"},
{german:"die Küche, -n",slovak:"kuchyna"},
{german:"der Kuchen,",slovak:"kolác"},
{german:"laufen",slovak:"bezat"},
{german:"laut",slovak:"hlasny"},
{german:"lesen",slovak:"cítat"},
{german:"lieben",slovak:"mat rad"},
{german:"liegen",slovak:"lezat"},
{german:"der Likör, -e",slovak:"likér"},
{german:"meistens",slovak:"väcsinou"},
{german:"mindestens",slovak:"minimálne"},
{german:"das Mineralwasser",slovak:"minerálka"},
{german:"mir",slovak:"mne"},
{german:"mitnehmen",slovak:"vziat so sebou"},
{german:"mögen",slovak:"mat rad"},
{german:"möchten (Rozdiel medzi slovesom möchten a wollen je v modalite. Slovesom möchten vyjadrime zdvorilost - ich möchte - chcel by som.)",slovak:"chciet"},
{german:"müssen",slovak:"musiet"},
{german:"nachher",slovak:"potom"},
{german:"der Nachmittag, -e",slovak:"popoludnie"},
{german:"die Nachspeise, -n",slovak:"dezert"},
{german:"der Namenstag, -e",slovak:"meniny"},
{german:"die Nudeln (P1.)",slovak:"cestoviny"},
{german:"der Obstsalat, -e",slovak:"ovocny Salát"},
{german:"der Orangensaft, Pl. Orangensäfte",slovak:"pomarancovy d¿ús"},
{german:"die Ordnung (in Ordnung)",slovak:"poriadok (v poriadku)"},
{german:"die Pause, -n",slovak:"prestávka"},
{german:"der Personalausweis, -e",slovak:"identifikacny preukaz"},
{german:"die Pommes frites",slovak:"hranolky"},
{german:"programmieren",slovak:"programovat"},
{german:"der Pudding, -s",slovak:"puding"},
{german:"putzen",slovak:"upratovat"},
{german:"die Quarkcreme,-s",slovak:"tvarohov krém"},
{german:"rauchen",slovak:"fajcit"},
{german:"regnen",slovak:"prsat"},
{german:"der Reis, -",slovak:"ryza"},
{german:"das Rezept, -e",slovak:"recept"},
{german:"der Rotwein, -e",slovak:"cervené vino"},
{german:"der Salat, -e",slovak:"Salát"},
{german:"das Sauerkraut",slovak:"kyslá kapusta"},
{german:"sehr gut",slovak:"velmi dobre"},
{german:"sei",slovak:"bud (rozkazovaci spôsob od slovesa byt)"},
{german:"seltsam",slovak:"zvlástny"},
{german:"die Semmel, -n",slovak:"zemla"},
{german:"der Senf",slovak:"horcica"},
{german:"schmecken (Es schmeckt mir; Es schmeckt mir nicht.)",slovak:"chutit (Chuti mi to; Nechuti mi to.)"},
{german:"schmutzig",slovak:"spinavy"},
{german:"der Schnaps, Pl. Schnäpse",slovak:"pálenka"},
{german:"schreiben",slovak:"písat"},
{german:"der Schweinebraten,",slovak:"bravcová pecienka"},
{german:"das Schweinefleisch",slovak:"bravcové mäso"},
{german:"das Schweineschnitzel,",slovak:"bravcovy rezen"},
{german:"sitzen",slovak:"sediet"},
{german:"sollen",slovak:"mat povinnost, mal by som..."},
{german:"sondern (pouziva sa v spojení nicht ... sondern)",slovak:"ale (nie ... ale)"},
{german:"später",slovak:"neskôr"},
{german:"die Spätzle",slovak:"halusky"},
{german:"still",slovak:"ticho"},
{german:"die Suppe, -n",slovak:"polievka"},
{german:"der Tee, Pl. Teesorten",slovak:"caj"},
{german:"der Teller,",slovak:"tanier"},
{german:"der Tisch, -e",slovak:"stôl"},
{german:"die Torte, -n",slovak:"torta"},
{german:"typisch",slovak:"typicky"},
{german:"um",slovak:"o (v spojení s casovym udajom)"},
{german:"unhöflich",slovak:"nezdvorily"},
{german:"unterhalten sich (Ich unterhaltemich mit Sophie.)",slovak:"bavit sa/rozprávat' sa (Rozprávam sa so Sophie.)"},
{german:"die Unterlagen (PL.)",slovak:"podklady"},
{german:"unterschreiben",slovak:"podpísat"},
{german:"verheiratet",slovak:"vydatá, zenaty"},
{german:"vielleicht",slovak:"mozno"},
{german:"das Vollkornbrot,-e",slovak:"chlieb celozrnny"},
{german:"von wann bis wann",slovak:"odkedy dokedy "},
{german:"der Vormittag, -e",slovak:"dopoludnie"},
{german:"vorschlagen",slovak:"navrhnút"},
{german:"warten",slovak:"cakat"},
{german:"das Wasser",slovak:"voda"},
{german:"der Weißwein, -e",slovak:"biele vino"},
{german:"Wie spät ist es?",slovak:"Kolko je hodin?"},
{german:"wirklich",slovak:"skutocne"},
{german:"wisen",slovak:"vediet"},
{german:"wollen",slovak:"chciet"},
{german:"Wollen wir essen gehen?",slovak:"Ideme sa najest?"},
{german:"wunderbar",slovak:"vyborne"},
{german:"das Würstchen, -",slovak:"párok"},
{german:"zubereiten (Ich bereite das Essen zu.)",slovak:"pripravit (jedlo)"},
{german:"zum Glück",slovak:"nastastie"},
{german:"zurückkommen",slovak:"vrátit sa spät"},
{german:"die Zwiebel, -n",slovak:"cibula"},
{german:"sonst",slovak:"inak (otherwise)"},
{german:"dringend",slovak:"okamzite/urgentne"},
{german:"der Angestellte, -n",slovak:"zamestnanec"},
];