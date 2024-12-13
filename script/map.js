
// Préparez vos données de féminicides
const feminicideData = new Map([
    ["Malakoff", 1],
    ["Arques", 1],
    ["Pont-Pean", 1],
    ["Saint-Brieuc", 1],
    ["Lempdes", 1],
    ["Saint-Etienne-du-Rouvray", 1],
    ["Paris", 1],
    ["Limoges", 1],
    ["Salles-du-Gardon", 1],
    ["Gros-Morne", 1],
    ["Gujan-Mestras", 1],
    ["Les Loges-Marchis", 1],
    ["Bondy", 1],
    ["Sevran", 1],
    ["Yvetot", 1],
    ["Lisieux", 1],
    ["Montpellier", 1],
    ["Boulogne Billancourt", 1],
    ["Cabries", 1],
    ["Prunelli-di-Fiumorbo", 1],
    ["Melun", 1],
    ["Saint-Laurent-d’Arce", 1],
    ["Amiens", 1],
    ["Coulans-sur-Gee", 1],
    ["Poitiers", 1],
    ["Bethune", 1],
    ["Lamothe-Capdeville", 1],
    ["Ronquerolles", 1],
    ["Paris", 1],
    ["Lagardelle", 1],
    ["Bois-Guillaume", 1],
    ["Marseille", 1],
    ["Tours", 1],
    ["Le Mans", 1],
    ["Argenteuil", 1],
    ["Rambervillers", 1],
    ["Argol", 1],
    ["Dun-Sur-Auron", 1],
    ["Salles-du-Gardon", 1],
    ["Digne-les-Bains", 1],
    ["Erdeven", 1],
    ["Lys-lez-Lannoy", 1],
    ["Courbevoie", 1],
    ["Saint-Dionisy", 1],
    ["Laloubere", 1],
    ["Verrieres-le-Buisson", 1],
    ["Sanary-sur-Mer", 1],
    ["Dreux", 1],
    ["Lanester", 1],
    ["Etinehem-Mericourt", 1],
    ["Montaigu-Vende", 1],
    ["Saint-Priest", 1],
    ["Dunkerque", 1],
    ["La Malnoue", 1],
    ["Saint-Ouen-l'Aumone", 1],
    ["Meulan-en-yvelines", 1],
    ["Lyon", 1],
    ["Reims", 1],
    ["Migne-Auxances", 1],
    ["Lavaur", 1],
    ["Grand-Couronne", 1],
    ["Angers", 1],
    ["Ouangani", 1],
    ["Cergy", 1],
    ["Beaucorroy", 1],
    ["Marzan", 1],
    ["Franconville", 1],
    ["Grigny", 1],
    ["Haubourdin", 1],
    ["Evry-Courcouronnes", 1],
    ["Prechac-sur-Adour", 1],
    ["Peysales Foix", 1],
    ["Nanterre", 1],
    ["Toulouse", 1],
    ["Diges", 1],
    ["Dijon", 1],
    ["Vaux-les-Saint-Claude", 1],
    ["Sucy-en-Brie", 1],
    ["Thio", 1],
    ["Taravao", 1],
    ["Chambray-les-Tours", 1],
    ["Croix-de-la-Rochette", 1],
    ["Yport", 1],
    ["Souvigne-sur-Sarthe", 1],
    ["La Rochelle", 1],
    ["Marles-les-Mines", 1],
    ["Castelmaurou", 1],
    ["Nice", 1],
    ["Primelin", 1],
    ["Sainte-Maure-de-Peyriac", 1],
    ["Pierre-Benite", 1],
    ["Charleville-Mezieres", 1],
    ["Forbach", 1],
    ["Lons", 1],
    ["Sedan", 1],
    ["Lille", 1],
    ["Croissy-Beaubourg", 1],
    ["Grasse", 1],
    ["Oissel", 1],
    ["Meurchin", 1],
    ["Orconte", 1],
    ["Cluses", 1],
    ["Cuincy", 1],
    ["Speracedes", 1],
    ["Perpignan", 1],
    ["Conie-Molitard", 1],
    ["Mory", 1],
    ["Caen", 1],
    ["Mers-les-Bains", 1],
    ["Avion", 1],
    ["Abancourt", 1],
    ["Velanne", 1],
    ["Pont l'Eveque", 1],
    ["Drancy", 1],
    ["Meaux", 1],
    ["Roppentzwiller", 1],
    ["Nevers", 1]
  ]);
  
  // Définition des départements avec leurs villes principales
const namemap = new Map([
    ["Ain", "Bourg-en-Bresse"],
    ["Aisne", "Laon"],
    ["Allier", "Moulins"],
    ["Alpes-de-Haute-Provence", "Digne-les-Bains"],
    ["Hautes-Alpes", "Gap"],
    ["Alpes-Maritimes", "Nice"],
    ["Ardèche", "Privas"],
    ["Ardennes", "Charleville-Mézières"],
    ["Ariège", "Foix"],
    ["Aube", "Troyes"],
    ["Aude", "Carcassonne"],
    ["Aveyron", "Rodez"],
    ["Bouches-du-Rhône", "Marseille"],
    ["Calvados", "Caen"],
    ["Cantal", "Aurillac"],
    ["Charente", "Angoulême"],
    ["Charente-Maritime", "La Rochelle"],
    ["Cher", "Bourges"],
    ["Corrèze", "Tulle"],
    ["Corse-du-Sud", "Ajaccio"],
    ["Haute-Corse", "Bastia"],
    ["Côte-d'Or", "Dijon"],
    ["Côtes-d'Armor", "Saint-Brieuc"],
    ["Creuse", "Guéret"],
    ["Dordogne", "Périgueux"],
    ["Doubs", "Besançon"],
    ["Drôme", "Valence"],
    ["Eure", "Évreux"],
    ["Eure-et-Loir", "Chartres"],
    ["Finistère", "Quimper"],
    ["Gard", "Nîmes"],
    ["Haute-Garonne", "Toulouse"],
    ["Gers", "Auch"],
    ["Gironde", "Bordeaux"],
    ["Hérault", "Montpellier"],
    ["Ille-et-Vilaine", "Rennes"],
    ["Indre", "Châteauroux"],
    ["Indre-et-Loire", "Tours"],
    ["Isère", "Grenoble"],
    ["Jura", "Lons-le-Saunier"],
    ["Landes", "Mont-de-Marsan"],
    ["Loir-et-Cher", "Blois"],
    ["Loire", "Saint-Étienne"],
    ["Haute-Loire", "Le Puy-en-Velay"],
    ["Loire-Atlantique", "Nantes"],
    ["Loiret", "Orléans"],
    ["Lot", "Cahors"],
    ["Lot-et-Garonne", "Agen"],
    ["Lozère", "Mende"],
    ["Maine-et-Loire", "Angers"],
    ["Manche", "Saint-Lô"],
    ["Marne", "Châlons-en-Champagne"],
    ["Haute-Marne", "Chaumont"],
    ["Mayenne", "Laval"],
    ["Meurthe-et-Moselle", "Nancy"],
    ["Meuse", "Bar-le-Duc"],
    ["Morbihan", "Vannes"],
    ["Moselle", "Metz"],
    ["Nièvre", "Nevers"],
    ["Nord", "Lille"],
    ["Oise", "Beauvais"],
    ["Orne", "Alençon"],
    ["Pas-de-Calais", "Arras"],
    ["Puy-de-Dôme", "Clermont-Ferrand"],
    ["Pyrénées-Atlantiques", "Pau"],
    ["Hautes-Pyrénées", "Tarbes"],
    ["Pyrénées-Orientales", "Perpignan"],
    ["Bas-Rhin", "Strasbourg"],
    ["Haut-Rhin", "Colmar"],
    ["Rhône", "Lyon"],
    ["Haute-Saône", "Vesoul"],
    ["Saône-et-Loire", "Mâcon"],
    ["Sarthe", "Le Mans"],
    ["Savoie", "Chambéry"],
    ["Haute-Savoie", "Annecy"],
    ["Paris", "Paris"],
    ["Seine-Maritime", "Rouen"],
    ["Seine-et-Marne", "Melun"],
    ["Yvelines", "Versailles"],
    ["Deux-Sèvres", "Niort"],
    ["Somme", "Amiens"],
    ["Tarn", "Albi"],
    ["Tarn-et-Garonne", "Montauban"],
    ["Var", "Toulon"],
    ["Vaucluse", "Avignon"],
    ["Vendée", "La Roche-sur-Yon"],
    ["Vienne", "Poitiers"],
    ["Haute-Vienne", "Limoges"],
    ["Vosges", "Épinal"],
    ["Yonne", "Auxerre"],
    ["Territoire de Belfort", "Belfort"],
    ["Essonne", "Évry"],
    ["Hauts-de-Seine", "Nanterre"],
    ["Seine-Saint-Denis", "Bobigny"],
    ["Val-de-Marne", "Créteil"],
    ["Val-d'Oise", "Cergy"],
    ["Guadeloupe", "Basse-Terre"],
    ["Martinique", "Fort-de-France"],
    ["Guyane", "Cayenne"],
    ["La Réunion", "Saint-Denis"],
    ["Mayotte", "Mamoudzou"],
  ]);


// Création d'une nouvelle map qui associe les départements aux féminicides
const departmentFeminicideData = new Map();

// Remplissage de la map avec les féminicides par département
feminicideData.forEach((count, city) => {
  namemap.forEach((departmentCity, department) => {
      if (city === departmentCity) {
          if (!departmentFeminicideData.has(department)) {
              departmentFeminicideData.set(department, 0);
          }
          departmentFeminicideData.set(department, departmentFeminicideData.get(department) + count);
      }
  });
});

// Charger le fichier TopoJSON
d3.json("departements.topojson").then(function (topoData) {
  const departments = topojson.feature(topoData, topoData.objects.departements);

  // Configuration du SVG
  const width = 1200, height = 1200;
  const svg = d3.select("#map")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  // Configuration de la projection
  const projection = d3.geoMercator()
      .scale(4000)
      .center([2.5, 46])
      .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  // Définir une échelle de couleurs
  const maxFeminicides = d3.max(Array.from(departmentFeminicideData.values()));
  const color = d3.scaleQuantize()
      .domain([1, maxFeminicides])
      .range(d3.schemeBlues[9]);

  // Dessiner les départements
  svg.selectAll("path")
      .data(departments.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", "department")
      .attr("stroke", "white")
      .attr("stroke-width", 0.5)
      .attr("fill", function (d) {
          const departmentName = d.properties.nom;
          const count = departmentFeminicideData.get(departmentName);
          return count ? color(count) : "#ccc";
      });

  // Ajouter une légende
  const legend = Legend(color, {
      title: "Féminicides par département",
      width: 300,
  });
  d3.select("#map").append(() => legend);
});

// Fonction pour créer une légende
function Legend(color, { title, width }) {
  const legend = d3.create("svg").attr("width", width).attr("height", 300);

  const legendGroup = legend.append("g")
      .selectAll("g")
      .data(color.range())
      .join("g")
      .attr("transform", (d, i) => `translate(0, ${i * 30})`);

  legendGroup.append("rect")
      .attr("width", 30)
      .attr("height", 30)
      .attr("fill", (d) => d);

  legendGroup.append("text")
      .attr("x", 40)
      .attr("y", 15)
      .attr("dy", ".35em")
      .text((d, i) => {
          const extent = color.invertExtent(d);
          return `${Math.round(extent[0])} - ${Math.round(extent[1])}`;
      });

  legend.append("text")
      .attr("x", 0)
      .attr("y", 20)
      .text(title)
      .style("font-size", "14px")
      .style("font-weight", "bold");

  return legend.node();
}
