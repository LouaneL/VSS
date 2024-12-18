
// Préparez vos données de féminicides
const feminicideData = new Map([
    ["Vosges", 2],
    ["Aube", 1],
    ["Bouches-du-Rhône", 1],
    ["Nièvre", 1],
    ["Loire-Atlantique", 2],
    ["Côtes-d'Armor", 3],
    ["Loiret", 2],
    ["Gironde", 4],
    ["Calvados", 3],
    ["Loir-et-Cher", 2],
    ["Seine-et-Marne", 5],
    ["Val-d'Oise", 5],
    ["Vaucluse", 3],
    ["Haute-Garonne", 4],
    ["Dordogne", 1],
    ["Ariège", 1],
    ["Charente-Maritime", 2],
    ["Val-de-Marne", 4],
    ["Var", 5],
    ["Essonne", 4],
    ["Seine-Saint-Denis", 6],
    ["Maine-et-Loire", 4],
    ["Aude", 1],
    ["Loire", 2],
    ["Aude", 1],
    ["Hérault", 4],
    ["Marne", 2],
    ["Seine-et-Marne", 2],
    ["Tarn-et-Garonne", 1],
    ["Gironde", 2],
    ["Seine-Maritime", 1],
    ["Val-de-Marne", 3],
    ["Ardennes", 2],
    ["Saône-et-Loire", 2],
    ["Finistère", 3],
    ["Côte-d'Or", 2],
    ["Ariège", 1],
    ["Pyrénées-Atlantiques", 1],
    ["Yvelines", 1],
    ["Vaucluse", 1],
    ["Doubs", 3],
    ["Paris", 4],
    ["Indre-et-Loire", 1],
    ["Haute-Garonne", 1],
    ["Seine-Maritime", 1],
    ["Finistère", 1],
    ["Alpes-Maritimes", 1],
    ["Hérault", 1],
    ["Marne", 2],
    ["Savoie", 1],
    ["Oise", 2],
    ["Puy-de-Dôme", 2],
    ["Haute-Loire", 1],
    ["Lot-et-Garonne", 1],
    ["Bouches-du-Rhône", 1],
    ["Vaucluse", 1],
    ["Hauts-de-Seine", 1],
    ["Tarn", 2],
    ["Paris", 1],
    ["Vaucluse", 1],
    ["Pyrénées-Orientales", 1],
    ["Gironde", 2],
    ["Loiret", 1],
    ["Côte-d'Or", 1],
    ["Bas-Rhin", 1],
    ["Vaucluse", 1],
    ["Seine-Saint-Denis", 1],
    ["Isère", 1],
    ["Bouches-du-Rhône", 1],
    ["Val-de-Marne", 1],
    ["Pyrénées-Atlantiques", 1],
    ["Vaucluse", 1],
    ["Var", 1],
    ["Aude", 1],
    ["Hérault", 1],
    ["Seine-Maritime", 1],
    ["Essonne", 1],
    ["Bouches-du-Rhône", 1]

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

// Charger le fichier TopoJSON
d3.json("departements.topojson").then(function (topoData) {
    const departments = topojson.feature(topoData, topoData.objects.departements);

    // Configuration du SVG
    const width = 1500, height = 1200;
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
    const maxFeminicides = d3.max(Array.from(feminicideData.values()));
    const color = d3.scaleQuantize()
        .domain([1, maxFeminicides])
        .range(d3.schemeReds[maxFeminicides]); // Utilisation des teintes rouges

    // Ajouter un tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("padding", "10px")
        .style("background", "rgba(0, 0, 0, 0.7)")
        .style("color", "white")
        .style("border-radius", "4px")
        .style("pointer-events", "none")
        .style("opacity", 0);

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
            const count = feminicideData.get(departmentName);
            return count ? color(count) : "#ccc";
        })
        // Ajouter les événements pour le tooltip
        .on("mouseover", function (event, d) {
            const departmentName = d.properties.nom;
            const count = feminicideData.get(departmentName) || 0;

            tooltip.style("opacity", 1)
                .html(`
                    <strong>${departmentName}</strong><br>
                    ${count} féminicide${count > 1 ? "s" : ""}
                `);

            d3.select(this)
                .attr("stroke", "black")
                .attr("stroke-width", 1.5);
        })
        .on("mousemove", function (event) {
            tooltip.style("left", `${event.pageX + 10}px`)
                .style("top", `${event.pageY + 10}px`);
        })
        .on("mouseout", function () {
            tooltip.style("opacity", 0);

            d3.select(this)
                .attr("stroke", "white")
                .attr("stroke-width", 0.5);
        });

    // Ajouter une légende
    svg.append("g")
        .attr("transform", "translate(1200,300)")
        .append(() => Legend(color, { title: "Nombre de féminicides par département", width: 500, height: 500 }));
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
            return `${i + 1}`;
        })
        .style("fill", "white");

    legend.append("text")
        .attr("x", 0)
        .attr("y", 175)
        .text(title)
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "white");

    return legend.node();
}
