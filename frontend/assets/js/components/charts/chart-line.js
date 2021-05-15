//
// Charts
//

// 'use strict';

//
// Sales chart
//

var LineChart = (function() {

	// Variables

	var $chart = $('#chart-stock');


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
				labels: ['Date 1','Date 2','Date 3','Date 4','Date 5'],
				datasets: [{
					label: 'Predicted price',
					data: [10, 20, 10, 30, 15],
					backgroundColor: 'rgb(255, 99, 132)',
    				borderColor: 'rgb(255, 99, 132)',
					fill: false,
					tension: 0.1

				},
				{
					label: 'Actual price',
					data: [30, 40, 15, 34, 17],
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
