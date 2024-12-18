function createRadialChart(containerId, data) {
    const width = 500;
    const height = 500;
    const innerRadius = 100;
    const outerRadius = Math.min(width, height) / 2;

    const ages = Array.from(new Set(data.map(d => d.age)));
    const dataByState = d3.groups(data, d => d.state);

    const structuredData = dataByState.map(([state, stateData]) => {
        const stateMap = {};
        ages.forEach(age => {
            const entry = stateData.find(d => d.age === age);
            stateMap[age] = entry ? entry.population : 0;
        });
        return { state, ...stateMap };
    });

    const series = d3.stack()
        .keys(ages)
        .value((d, key) => d[key])
        (structuredData);

    const x = d3.scaleBand()
        .domain(data.map(d => d.state))
        .range([0, 2 * Math.PI])
        .align(0);

    const y = d3.scaleRadial()
        .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
        .range([innerRadius, outerRadius]);

    const color = d3.scaleOrdinal()
        .domain(series.map(d => d.key))
        .range(d3.schemeCategory10);

    const arc = d3.arc()
        .innerRadius(d => y(d[0]))
        .outerRadius(d => y(d[1]))
        .startAngle(d => x(d.data.state))
        .endAngle(d => x(d.data.state) + x.bandwidth())
        .padAngle(1.5 / innerRadius)
        .padRadius(innerRadius);


    const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en");

    const svg = d3.select(containerId)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .style("font", "10px sans-serif");

    svg.append("g")
        .selectAll()
        .data(series)
        .join("g")
        .attr("fill", d => color(d.key))
        .selectAll("path")
        .data(D => D.map(d => (d.key = D.key, d)))
        .join("path")
        .attr("d", arc)
        .append("title")
        .text(d => `${d.data.state} ${d.key}\n${formatValue(d.data[d.key])}`);

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

}

// Si vous chargez des données via un fichier JSON ou CSV
d3.json("data/data1.json").then(data => {
    createRadialChart("#radial-chart1", data);
});
d3.json("data/data2.json").then(data => {
    createRadialChart("#radial-chart2", data);
});
d3.json("data/data3.json").then(data => {
    createRadialChart("#radial-chart3", data);
});
d3.json("data/data4.json").then(data => {
    createRadialChart("#radial-chart4", data);
});