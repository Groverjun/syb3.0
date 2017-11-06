$(function() {
	/**
	 * *饼图
	 */
	var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
	var pieChart = new Chart(pieChartCanvas);
	var PieData = [{
			value: 700,
			color: '#f56954',
			highlight: '#f56954',
			label: '百度'
		},
		{
			value: 500,
			color: '#00a65a',
			highlight: '#00a65a',
			label: '360'
		},
		{
			value: 400,
			color: '#f39c12',
			highlight: '#f39c12',
			label: '搜狗'
		},
		{
			value: 600,
			color: '#00c0ef',
			highlight: '#00c0ef',
			label: '百度移动'
		},
		{
			value: 300,
			color: '#3c8dbc',
			highlight: '#3c8dbc',
			label: '搜狗移动'
		},
		{
			value: 100,
			color: '#d2d6de',
			highlight: '#d2d6de',
			label: '神马搜索'
		}
	];
	var pieOptions = {
		// Boolean - Whether we should show a stroke on each segment
		segmentShowStroke: true,
		// String - The colour of each segment stroke
		segmentStrokeColor: '#fff',
		// Number - The width of each segment stroke
		segmentStrokeWidth: 1,
		// Number - The percentage of the chart that we cut out of the middle
		percentageInnerCutout: 50, // This is 0 for Pie charts
		// Number - Amount of animation steps
		animationSteps: 100,
		// String - Animation easing effect
		animationEasing: 'easeOutBounce',
		// Boolean - Whether we animate the rotation of the Doughnut
		animateRotate: true,
		// Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale: false,
		// Boolean - whether to make the chart responsive to window resizing
		responsive: true,
		// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		maintainAspectRatio: false,
		// String - A legend template
		legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<segments.length; i++){%><li><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
		// String - A tooltip template
		tooltipTemplate: '<%=value %> <%=label%>'
	};
	pieChart.Doughnut(PieData, pieOptions);

	/*
	 \
	 
	 * 柱状图
	 * 
	 * 
	 * */
	var barChartCanvas = $('#barChart').get(0).getContext('2d')
	var barChart = new Chart(barChartCanvas)
	var barChartData = {
		labels: ['百度', '搜狗', '360', '百度移动', '搜狗移动', '360移动'],
		datasets: [{
				label: '组词数量',
				fillColor: '#49efe8',
				strokeColor: '#49efe8',
				pointColor: '#fff',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(220,220,220,0)',
				data: [65, 59, 80, 81, 56, 55]
			},
			{
				label: '产品词数量',
				fillColor: '#f27b70',
				strokeColor: '#f27b70',
				pointColor: '#fff',
				pointStrokeColor: 'rgba(60,141,188,0)',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(60,141,188,0)',
				data: [28, 48, 40, 19, 86, 27]
			},
			{
				label: '地区产品词数量',
				fillColor: '#f39c12',
				strokeColor: '#f39c12',
				pointColor: '#f39c12',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(220,220,220,0)',
				data: [65, 59, 80, 81, 56, 55]
			},
			{
				label: '产品行业词数量',
				fillColor: '#6ce04a',
				strokeColor: '#6ce04a',
				pointColor: '#6ce04a',
				pointStrokeColor: 'rgba(60,141,188,0)',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(60,141,188,0)',
				data: [28, 48, 40, 19, 86, 27]
			},
			{
				label: '地区产品行业词数量',
				fillColor: '#00c1ff',
				strokeColor: '#00c1ff',
				pointColor: '#00c1ff',
				pointStrokeColor: 'rgba(60,141,188,0)',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(60,141,188,0)',
				data: [28, 48, 40, 19, 86, 27]
			}
		]
	}
	var barChartOptions = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero: true,
		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines: true,
		//String - Colour of the grid lines
		scaleGridLineColor: 'rgba(0,0,0,.03)',
		//Number - Width of the grid lines
		scaleGridLineWidth: 0.1,
		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,
		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,
		//Boolean - If there is a stroke on each bar
		barShowStroke: true,
		//Number - Pixel width of the bar stroke
		barStrokeWidth: 5,
		//Number - Spacing between each of the X value sets
		barValueSpacing: 5,
		//Number - Spacing between data sets within X values
		barDatasetSpacing: 1,
		//String - A legend template
		legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
		//Boolean - whether to make the chart responsive
		responsive: true,
		maintainAspectRatio: false,
		tooltipTemplate: ' users<%=value %> <%=label%>'
	}

	barChartOptions.datasetFill = false
	barChart.Bar(barChartData, barChartOptions)
	
});