// Données pour le graphique
const data = [
  {state: "AL", age: "Under 5 Years", population: 310504},
  {state: "AK", age: "Under 5 Years", population: 52083},
  {state: "AZ", age: "Under 5 Years", population: 515910},
  {state: "AR", age: "Under 1 Years", population: 20270},
  {state: "AR", age: "Under 5 Years", population: 100270},
  {state: "AR", age: "Under 10 Years", population: 202070}
];

// Dimensions du graphique
const width = 500;
const height = 500;
const innerRadius = 100;
const outerRadius = Math.min(width, height) / 2;

// Créer une liste des tranches d'âge uniques
const ages = Array.from(new Set(data.map(d => d.age)));

// Organiser les données sous forme de tableau d'objets pour chaque tranche d'âge
// Chaque objet contient une entrée par état et par tranche d'âge.
const dataByState = d3.groups(data, d => d.state);
const structuredData = dataByState.map(([state, stateData]) => {
  const stateMap = {};
  ages.forEach(age => {
      const entry = stateData.find(d => d.age === age);
      stateMap[age] = entry ? entry.population : 0; // Si pas de données pour une tranche d'âge, la population est 0
  });
  return { state, ...stateMap };
});

// Stack les données en utilisant les tranches d'âge comme clés
const series = d3.stack()
  .keys(ages)  // Utiliser les tranches d'âge comme clés
  .value((d, key) => d[key])  // Accéder aux populations à partir des tranches d'âge
(structuredData);

// Fonction d'échelle pour l'angle (x) et la distance radiale (y)
const x = d3.scaleBand()
  .domain(data.map(d => d.state))  // Utilisation des états comme domaine pour l'axe X
  .range([0, 2 * Math.PI])
  .align(0);

const y = d3.scaleRadial()
  .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
  .range([innerRadius, outerRadius]);

// Définir les couleurs
const color = d3.scaleOrdinal()
  .domain(series.map(d => d.key))
  .range(d3.schemeCategory10);

// Définition de l'arc pour le graphique radial
const arc = d3.arc()
  .innerRadius(d => y(d[0])) // rayon intérieur basé sur la valeur de la première partielle
  .outerRadius(d => y(d[1])) // rayon extérieur basé sur la valeur de la deuxième partielle
  .startAngle(d => x(d.data.state)) // angle de début basé sur l'état
  .endAngle(d => x(d.data.state) + x.bandwidth()) // angle de fin basé sur la largeur du segment
  .padAngle(1.5 / innerRadius) // espacement entre les segments
  .padRadius(innerRadius); // rayon de l'espacement

// Fonction de formatage pour la valeur dans l'info-bulle
const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en");

// Création du graphique SVG
const svg = d3.select("#radial-chart")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [-width / 2, -height / 2, width, height])
  .style("font", "10px sans-serif");

// Création des segments du graphique
svg.append("g")
.selectAll()
.data(series)
.join("g")
  .attr("fill", d => color(d.key))
.selectAll("path")
.data(D => D.map(d => (d.key = D.key, d)))
.join("path")
  .attr("d", arc)  // Appliquer l'arc pour dessiner les segments
.append("title")
  .text(d => `${d.data.state} ${d.key}\n${formatValue(d.data[d.key])}`);

// Ajout des axes X et Y
// Vous pouvez garder le reste de votre code pour l'affichage des axes et de la légende.

// x axis
svg.append("g")
    .attr("text-anchor", "middle")
  .selectAll()
  .data(x.domain())
  .join("g")
    .attr("transform", d => `
      rotate(${((x(d) + x.bandwidth() / 2) * 180 / Math.PI - 90)})
      translate(${innerRadius},0)
    `)
    .call(g => g.append("line")
        .attr("x2", -5)
        .attr("stroke", "#000"))
    .call(g => g.append("text")
        .attr("transform", d => (x(d) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI
            ? "rotate(90)translate(0,16)"
            : "rotate(-90)translate(0,-9)")
        .text(d => d));

// y axis
svg.append("g")
    .attr("text-anchor", "middle")
    .call(g => g.append("text")
        .attr("y", d => -y(y.ticks(5).pop()))
        .attr("dy", "-1em")
        .text("Population"))
    .call(g => g.selectAll("g")
      .data(y.ticks(5).slice(1))
      .join("g")
        .attr("fill", "none")
        .call(g => g.append("circle")
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.5)
            .attr("r", y))
        .call(g => g.append("text")
            .attr("y", d => -y(d))
            .attr("dy", "0.35em")
            .attr("stroke", "#fff")
            .attr("stroke-width", 5)
            .text(y.tickFormat(5, "s"))
         .clone(true)
            .attr("fill", "#000")
            .attr("stroke", "none")));

// color legend
svg.append("g")
  .selectAll()
  .data(color.domain())
  .join("g")
    .attr("transform", (d, i, nodes) => `translate(-40,${(nodes.length / 2 - i - 1) * 20})`)
    .call(g => g.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .attr("fill", color))
    .call(g => g.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", "0.35em")
        .text(d => d));


