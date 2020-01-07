(function($) {
/* 	var CHART_COLORS = {
		'BASE' 		 : '#6d70a0',
		'ENERGY' 	 : '#ff7d53',
		'MOOD' 		 : '#6d70a0',
		'FOCUS' 	 : '#f9d93d',
		'MEMORY' 	 : '#19ccc7',
		'MOTIVATION' : '#ff0072',
		'SLEEP' 	 : '#8343d5'
	};

	function renderChart(elem, data, width) {
		return new Chart(elem, {
		type: 'doughnut',
			data: data,
			options: {
				legend: {
					display: false
				},
				cutoutPercentage: width ? 100 - width : 85,
				rotation: 1 * Math.PI,
				circumference: 1 * Math.PI,
				tooltips: {
					enabled: false
				}
			}
		});
	}

	function getDataObject(goal, value, total) {
		return {
			labels: [],
			datasets: [{
				data: [value, total - value],
				backgroundColor: [
					CHART_COLORS[ goal.toUpperCase() ],
					"#AAAAAA"
				],
				hoverBackgroundColor: [
					CHART_COLORS[ goal.toUpperCase() ],
					"#AAAAAA"
				]
			}]
		};
	}

	function renderCharts(goalValues) {
		var totalScore = Object.keys(goalValues).reduce(function(total, goal) {
			return total + goalValues[ goal ];
		}, 0);
		var maxScore = Object.keys(goalValues).length * 10;

		$('.base-score-container .chart-label').text(totalScore + '/' + maxScore);
		renderChart(document.getElementById("base-score-chart"), getDataObject('base', totalScore, maxScore), 7);

		Object.keys(goalValues).forEach(function(goal) {
			renderChart(document.getElementById(goal.toLowerCase() + "-score-chart"), getDataObject(goal, goalValues[ goal ], 10));
			var $parent  = $('#goal-score-container-' + goal.toLowerCase());
			var strValue = (typeof goalValues[ goal ] === 'number' && goalValues[ goal ] < 10 ? '0' + goalValues[ goal ].toString() : goalValues[ goal ].toString());
			$parent.find(".chart-label").text(strValue);
			$parent.find(".chart-base").text(goal);
			$parent.find(".chart-label-full").text(strValue + '/10');			
		});
	}

	function getGoalValues() {
		//var scores = window.placeboproof.getQueryParam('score') || Cookies.get('score');
		var scores = '635257627165'; //Cookies.get('score');

		if (scores) {
			Cookies.set('score', scores, { domain: '.getmyformula.com', expires: 30 });
			Cookies.set('score', scores, { domain: '.placeboproof.com', expires: 30 });
			var arrScores = [];
			for (var i = 0; i < scores.length; i += 2) {
				var score = scores.substring(i, i + 2);
				arrScores.push(score);
			}
			
			if (arrScores.length) {
				return {
					'SLEEP' 	 : Math.floor(arrScores[ 0 ]/10),
					'ENERGY' 	 : Math.floor(arrScores[ 1 ]/10),
					'FOCUS' 	 : Math.floor(arrScores[ 2 ]/10),
					'MOTIVATION' : Math.floor(arrScores[ 3 ]/10),
					'MOOD'		 : Math.floor(arrScores[ 4 ]/10),
					'MEMORY' 	 : Math.floor(arrScores[ 5 ]/10)
				};
			}
		}
	}

	function renderGoals(goals) {
		$('.goals-container .goals').text(goals.join(', '));
	}

	function getGoals() {
		//var strGoals = window.placeboproof.getQueryParam('goals') || Cookies.get('goals');
		var strGoals = Cookies.get('goals');
		if (strGoals) {
			Cookies.set('goals', strGoals, { domain: '.getmyformula.com', expires: 30 });
			Cookies.set('goals', strGoals, { domain: '.placeboproof.com', expires: 30 });
			var arrGoals = strGoals.split(',');
			return arrGoals.map(function(goal) {
				return goal.trim();
			});
		}
	}

	var $cta = $('.purchase-cta-container');
	var $placeholder = $('.purchase-cta-placeholder');
	var $window = $(window);
	
	function fixPurchaseCta() {
		var offset = $placeholder.offset();
		var scrollTop = $window.scrollTop();
		if (scrollTop >= offset.top) {
		$cta.addClass('fixed');
		} else {
		$cta.removeClass('fixed');
		}
	}

	var goalValues = getGoalValues() || {
						'ENERGY' : 6,
						'MOOD' : 7,
						'FOCUS' : 5,
						'MEMORY' : 8,
						'MOTIVATION' : 6,
						'SLEEP' : 8
					};

	var goalNames = getGoals() || [
		'Focus', 'Energy', 'Motivation'
	];

	
	$(document).ready(function() {
		renderCharts(goalValues);
		renderGoals(goalNames); */
	/* $('.recommendations-container-wide .stack-ingredients-sections')
		.addClass('container');
		$('.recommendations-container-narrow .stack-ingredients-sections').slick({
			'arrows' : false,
			'dots' : true,
			'appendDots' : '.stack-slider-dots'
		});
		
		$('.btn-buy, .btn-checkout').click(function() {
			window.location.href = '/pages/shop';
		});
		
		if (window.Intercom) {
			$('.meet-dan button').click(function() {
				Intercom('show');
			});
		} else {
				$('.meet-dan button').hide();
			} */

		/* $(window).scroll(fixPurchaseCta);
		fixPurchaseCta(); */
	/* }); */
})(jQuery);