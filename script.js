/**
 * @author Rishi Iyengar
 */

function loadData(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year', 'Subway', 'Buses', 'Metro North', 'LIRR'],
          ['2003',	43.84008752,	29.25557763,	11.59076715,	15.31356771],
          ['2004',	43.83465724,	29.00011864,	11.65474638,	15.51047774],
		  ['2005',	44.02838186,	29.13643081,	11.53257946,	15.30260787],
		  ['2006',	40.50104599,	33.70446085,	11.20629965,	14.58819351],
		  ['2007',	40.84905432,	34.35506194,	10.8366438,		13.95923994],
		  ['2008',	40.74094156,	35.26078283,	10.74733518,	13.25094043],
		  ['2009',	41.04185582,	34.64132932,	10.63491458,	13.68190029],
		  ['2010',	41.01951758,	34.90945062,	10.89628716,	13.17474464],
		  ['2011',	41.76469012,	34.77571048,	10.78634916,	12.67325024],
		  ['2012',	42.18312909,	34.11029491,	10.59821716,	13.10835884],
        ]);

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.ColumnChart(document.getElementById("expenseDiv"));

	var options = {
          title: "Contribution to Operating Expenses", width: 400, height: 500, isStacked:true
        };

	myChart.draw(myDataTable, options);

}

function loadData2(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year', 'Subway', 'Buses', 'Metro North', 'LIRR'],
          ['2003',	53.08445033,	22.32821339,	12.07596453,	12.51137174],
          ['2004',	52.98918513,	22.07328325,	11.87944089,	13.05809073],
		  ['2005',	53.47576266,	21.84814134,	12.31722856,	12.35886743],
		  ['2006',	51.71172508,	24.125405,		12.0508146,		12.11205532],
		  ['2007',	52.05649539,	23.47373444,	12.19499012,	12.27478005],
		  ['2008',	52.41515564,	23.07714581,	12.23816551,	12.26953305],
		  ['2009',	52.98314451,	23.14594932,	11.79045229,	12.08045388],
		  ['2010',	53.71926944,	22.76286923,	11.79943626,	11.71842506],
		  ['2011',	55.243078,		21.43681495,	11.61734308,	11.70276397],
		  ['2012',	55.24652262,	21.20332513,	11.83674884,	11.71340341],
		  ['2013',	55.85186891,	20.98929789,	11.48509661,	11.67373658]
		  
        ]);

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.ColumnChart(document.getElementById("revenueDiv"));

	var options = {
          title: "Contribution to Fare Revenues", width: 400, height: 500, isStacked:true
        };

	myChart.draw(myDataTable, options);

}

function loadData3(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year', 'Subway', 'Buses', 'Metro North', 'LIRR'],
          ['2003',	60.87783673,	32.45100886,	3.133760988,	3.537393416],
          ['2004',	61.55647173,	31.96815038,	3.054298105,	3.421079781],
		  ['2005',	62.08306496,	31.45582268,	3.089802241,	3.371310112],
		  ['2006',	59.87444476,	33.84707061,	3.011229621,	3.267255011],
		  ['2007',	60.67442769,	32.95907961,	3.033331996,	3.333160705],
		  ['2008',	60.9779697,		32.60408772,	3.081213652,	3.336728931],
		  ['2009',	61.07331272,	32.68317354,	3.018711363,	3.224802377],
		  ['2010',	62.16038811,	31.53692352,	3.142509513,	3.160178863],
		  ['2011',	63.36057244,	30.3409324,		3.168888012,	3.129607149],
		  ['2012',	63.45650329,	30.22665639,	3.181450526,	3.135389792],
		  ['2013',	63.78544794,	29.96603723,	3.139146485,	3.109368345],
		  	
        ]);

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.ColumnChart(document.getElementById("riderDiv"));

	var options = {
          title: "Contribution to Ridership", width: 400, height: 500, isStacked:true
        };

	myChart.draw(myDataTable, options);

}

function loadData4(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year', 'Subway', 'Buses', 'Metro North', 'LIRR'],
          ['2003',	0.70069,	0.441647,	0.602892015,	0.472779274],
          ['2004',	0.70748,	0.445464,	0.596538991,	0.492719974],
		  ['2005',	0.69945,	0.431829,	0.615063979,	0.465100679],
		  ['2006',	0.71569,	0.401225,	0.60277483,		0.465390235],
		  ['2007',	0.66782,	0.358062,	0.589730453,	0.460806765],
		  ['2008',	0.66839,	0.340014,	0.59159159,		0.481047316],
		  ['2009',	0.67860,	0.351225,	0.582776243,	0.464132746],
		  ['2010',	0.71683,	0.356912,	0.592733251,	0.48685946],
		  ['2011',	0.76551,	0.356752,	0.623325631,	0.534420465],
		  ['2012',	0.73237,	0.347602,	0.624544688,	0.499687723],
		  	
        ]);

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.ColumnChart(document.getElementById("recoveryDiv"));

	var options = {
          title: "Farebox Recovery Ratio", width: 900, height: 500,
   		};

	myChart.draw(myDataTable, options);

}

function loadPage(){
	console.log("Document ready");
	
	google.load("visualization", "1", {packages:["corechart"], callback:"loadData"});
	
	google.load("visualization", "1", {packages:["corechart"], callback:"loadData2"});
	
	google.load("visualization", "1", {packages:["corechart"], callback:"loadData3"});
	
	google.load("visualization", "1", {packages:["corechart"], callback:"loadData4"});
}

$(document).ready(loadPage);