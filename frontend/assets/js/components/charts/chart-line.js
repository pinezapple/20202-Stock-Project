//
// Charts
//

// 'use strict';

//
// Sales chart
//
// import { labels, actualPrice, priceModel1, priceModel2, ticket } from './../stockResult.js'

//  console.log(labels)

// import priceModel1 from './stockResult.js';
	var LineChart = (function() {

		// Variables
	
		var $chart = $('#chart-stock-1');
	
	
		// Methods
	
		function init($this) {
			var salesChart = new Chart($this, {
				type: 'line',
				options: {
					scales: {
						yAxes: [{
							gridLines: {
								color: Charts.colors.gray[200],
								zeroLineColor: Charts.colors.gray[200]
							},
							ticks: {
	
							}
						}]
					}
				},
				data: {
					labels: [],
					datasets: [{
						label: 'Predicted price',
						data: [],
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						fill: false,
						tension: 0.1
	
					},
					{
						label: 'Actual price',
						data: [],
						tension: 0.1
	
					}]
				}
			});
	
			// Save to jQuery object
	
			$this.data('chart', salesChart);
	
		};
	
	
		// Events
	
		if ($chart.length) {
			init($chart);
		}
	
	})();

	