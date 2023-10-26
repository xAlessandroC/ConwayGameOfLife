var data=[]

function setAutomatic(){
  automatic=!automatic
  console.log("Automatic:",automatic)
}

function abilityQuadTree(){
  abilityQT=!abilityQT
  console.log("Quadtree:",abilityQT)
}

function randomPopulate(){
  var state=0
  for(var i=this.rectangle.start_col; i<this.rectangle.width; i++) {
      for(var j=this.rectangle.start_row; j<this.rectangle.height; j++) {
          var rand=floor(random(2))/*state%3*/
          //state++
          if(rand==1){
            if(abilityQT)
              quadtree.insert(new Cell(i,j,true));
            else
              grid.insert(new Cell(i,j,true));
          }
      }
  }
}

function updateStats(){
  data.push({x:gen,y:round(frameRate())})
}

function showChart(){
  var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Simple Line Chart"
	},
	axisY:{
		includeZero: false
	},
	data: [{
		type: "line",
		dataPoints: data
	}]
  });
  chart.render();
}

function drawRect(x,y){
  rect(x*RESOLUTION,y*RESOLUTION,RESOLUTION,RESOLUTION);
}
