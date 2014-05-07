/**
 * @author Rishi Iyengar
 */

function loadData4(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year', 'Subway', 'Metro North', 'LIRR', 'Buses'],
          ['2003',0.70069,0.602892015,0.472779274,0.441647],
		  ['2004',0.70748,0.596538991,0.492719974,0.445464],
		  ['2005',0.69945,0.615063979,0.465100679,0.431829],
		  ['2006',0.71569,0.60277483,0.465390235,0.401225],
		  ['2007',0.66782,0.589730453,0.460806765,0.358062],
		  ['2008',0.66839,0.59159159,0.481047316,0.340014],
		  ['2009',0.67860,0.582776243,0.464132746,0.351225],
		  ['2010',0.71683,0.592733251,0.48685946,0.356912],
		  ['2011',0.76551,0.623325631,0.534420465,0.356752],
		  ['2012',0.73237,0.624544688,0.499687723,0.347602]


        ]);

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.ColumnChart(document.getElementById("recoveryDiv"));

	var options = {
          title: "Farebox Recovery Ratio", width: 900, height: 500, colors:['#636363','#2ca25f','#3182bd','#e34a33']
   		};

	myChart.draw(myDataTable, options);

}


function loadPage(){
	
	console.log("Document ready");
	
	google.load("visualization", "1", {packages:["corechart"], callback:"loadData4"});
	

	
}
	
$(document).ready(loadPage);