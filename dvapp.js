function draw(data) {
      
      /*
        D3.js setup code
      */

          "use strict";
          var margin = 75,
              width = 1400 - margin,
              height = 600 - margin;
		d3.select("body")
			.append("h2")
				.text("World Coup Data Analysis Chart")

          var svg = d3.select("body")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append('g')
                .attr('class','chart');
	

      /*
        Dimple.js Chart construction code
      */

          var myChart = new dimple.chart(svg, data);
          var x = myChart.addTimeAxis("x", "year"); 
          myChart.addMeasureAxis("y", "attendance");
			x.dateParseFormat="%Y";
			x.tickFormat="%Y";
			x.timeInterval=4;
		  myChart.addSeries("stage", dimple.plot.scatter);
	 	  myChart.addSeries("stage", dimple.plot.line);
          myChart.draw();
        };