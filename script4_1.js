/**
 * @author Rishi Iyengar
 */

function loadData(){

	var myDataTable = google.visualization.arrayToDataTable([
			  ['Year','Farebox Recovery Ratio'],
			  ['2003',0.441647],
			  ['2004',0.445464],
			  ['2005',0.431829],
			  ['2006',0.401225],
			  ['2007',0.358062],
			  ['2008',0.340014],
			  ['2009',0.351225],
			  ['2010',0.356912],
			  ['2011',0.356752],
			  ['2012',0.347602]
        ]);

	console.log("done");

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.ColumnChart(document.getElementById("busDiv"));
	console.log("hi")

	var options = {
          title: "Buses", width: 200, height: 300, vAxis:{baseline:0}
   		};

	console.log("what")
	myChart.draw(myDataTable, options);
	console.log('huh')
	loadData2();

}

function loadData2(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year','Farebox Recovery Ratio'],
          ['2003',0.70069],
		  ['2004',0.70748],
		  ['2005',0.69945],
		  ['2006',0.71569],
		  ['2007',0.66782],
		  ['2008',0.66839],
		  ['2009',0.67860],
		  ['2010',0.71683],
		  ['2011',0.76551],
		  ['2012',0.73237]
	]);

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.ColumnChart(document.getElementById("subDiv"));

	var options = {
          title: "Subway", width: 200, height: 300, vAxis:{baseline:0.2}
   		};

	myChart.draw(myDataTable, options);

	loadData3();
}

function loadData3(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year','Farebox Recovery Ratio'],
          ['2003',0.602892015],
		  ['2004',0.596538991],
		  ['2005',0.615063979],
		  ['2006',0.60277483],
		  ['2007',0.589730453],
		  ['2008',0.59159159],
		  ['2009',0.582776243],
		  ['2010',0.592733251],
		  ['2011',0.623325631],
		  ['2012',0.624544688]
		  	
        ]);

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.ColumnChart(document.getElementById("mnrDiv"));

	var options = {
          title: "Metro North Railroad", width: 200, height: 300, vAxis:{baseline:0}
   		};

	myChart.draw(myDataTable, options);
	
	loadData4();

}

function loadData4(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year','Farebox Recovery Ratio'],	
          ['2003',0.472779274],
		  ['2004',0.492719974],
		  ['2005',0.465100679],
		  ['2006',0.465390235],
		  ['2007',0.460806765],
		  ['2008',0.481047316],
		  ['2009',0.464132746],
		  ['2010',0.48685946],
		  ['2011',0.534420465],
		  ['2012',0.499687723]
		  	
        ]);

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.ColumnChart(document.getElementById("lirDiv"));

	var options = {
          title: "Long Island Railroad", width: 200, height: 300, vAxis:{baseline:0}   		
          };

	myChart.draw(myDataTable, options);

}

function loadPage(){
	
	console.log("Document ready");
	
	google.load("visualization", "1", {packages:["corechart"], callback:"loadData"});
	

	
}
	
$(document).ready(loadPage);