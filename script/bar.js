const data = [
    { year: 2016, feminicides: 131 },
    { year: 2017, feminicides: 143 },
    { year: 2018, feminicides: 123 },
    { year: 2019, feminicides: 153 },
    { year: 2020, feminicides: 102 },
    { year: 2021, feminicides: 113 },
    { year: 2022, feminicides: 147 },
    { year: 2023, feminicides: 136 },
    { year: 2024, feminicides: 122 }
];

document.addEventListener("DOMContentLoaded", () => {
    // Déclarations des dimensions et marges
    const width = 928;
    const height = 500;
    const marginTop = 30;
    const marginRight = 20;
    const marginBottom = 50;
    const marginLeft = 50;

    // Création des échelles
    const x = d3.scaleBand()
        .domain(data.map(d => d.year)) // Années sur l'axe X
        .range([marginLeft, width - marginRight])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.feminicides)]) // Fréquence max
        .nice()
        .range([height - marginBottom, marginTop]);

    // Création du conteneur SVG
    const svg = d3.select("#chart-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");

    // Ajout des barres
    svg.append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.year))
        .attr("y", d => y(d.feminicides))
        .attr("height", d => y(0) - y(d.feminicides))
        .attr("width", x.bandwidth())
        .on("mouseover", function(event, d) {
            tooltip.style("visibility", "visible")
                .text(`${d.year}: ${d.feminicides} féminicides`);
        })
        .on("mousemove", function(event) {
            tooltip.style("top", (event.pageY + 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function() {
            tooltip.style("visibility", "hidden");
        });

        const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "rgba(0, 0, 0, 0.7)")
        .style("color", "white")
        .style("padding", "5px")
        .style("border-radius", "5px")
        .style("font-size", "12px");
        
    // Ajout des axes
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x))
        .call(g => g.selectAll("text")
            .attr("transform", "rotate(-40)")
            .attr("text-anchor", "end"));

    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ Féminicides"));

    // Ajout d'un titre
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", marginTop / 2)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "white")
        .text("Féminicides en France de 2016 à 2024");

    // Ajout de la source sous le graphique
    d3.select("#chart-container")
    .append("p")
    .attr("style", "text-align: center; font-style: italic; margin-top: 10px; color: gray; font-size: 12px;")
    .html('Source : <a href="https://www.noustoutes.org/comprendre-les-chiffres/" target="_blank" style="color: gray; text-decoration: none;">https://www.noustoutes.org/comprendre-les-chiffres/</a>');
});
