
const RESOLUTION = 10
const HEIGHT = 640
const WIDTH = 640

var grid;
var quadtree;
var automatic=false
var abilityQT=true;
var abilityHover=true
var abilityPress=true
var mousePattern="none"
var gen=0;

function setup(){
  createCanvas(HEIGHT, WIDTH);
  background(0)

  rectangle = new Rectangle(0,0,width/RESOLUTION, height/RESOLUTION)
  grid = new GridQT(rectangle)
  quadtree = new Quadtree(grid)

  //pattern
  // randomPopulate()
  quadtree.insert(new Cell(2,2,true))
  quadtree.insert(new Cell(1,2,true))
  quadtree.insert(new Cell(2,1,true))
  quadtree.insert(new Cell(0,2,true))
  quadtree.insert(new Cell(1,0,true))
}

function draw(){
  if(abilityQT){
    if(automatic){
      gen++;
      updateStats()
      nextGen()
    }

  }else{
    if(automatic){
      gen++;
      updateStats()
      normalNextGen()
    }
  }

  background(0)

  showActiveCells()

  // displayQuadTree()
  //
  // displayRelevantRegions()

  displayFrameRate()

  displayGeneration()

  mouseOver()
}

function showActiveCells(){
  activeCell = quadtree.queryPoints()
  activeCell.forEach(function(cell){
    fill(255,255,255);
    // fill(random(255),random(255),random(255));
    rect(cell.x*RESOLUTION,cell.y*RESOLUTION,RESOLUTION,RESOLUTION);
  })
}

function displayQuadTree(){
  stroke(255, 0, 0);
  strokeWeight(1);
  noFill()
  quadtree.show()
}

function displayRelevantRegions(){
  stroke(191, 255, 0)
  strokeWeight(1);
  noFill()
  regions = quadtree.query()

  regions.forEach(function(e){
    rect(e.start_col*RESOLUTION,
      e.start_row*RESOLUTION,
      e.width*RESOLUTION,
      e.height*RESOLUTION)
  });
}

function mousePressed() {
  if(abilityPress){
    x=floor(mouseX/RESOLUTION)
    y=floor(mouseY/RESOLUTION)
    console.log(x,y)
    if(x>=0 && y>=0 && x<width/RESOLUTION && y<height/RESOLUTION){
      if(mousePattern === "insert")
        quadtree.insert(new Cell(x,y,true))
      else{
        console.log("inserisco pattern")
        insertPattern(x,y,mousePattern)
      }
    }
  }
}

function mouseOver(){
  if(abilityHover){
    x=floor(mouseX/RESOLUTION)
    y=floor(mouseY/RESOLUTION)
    if(x>0 && y>0 && x<width/RESOLUTION && y<height/RESOLUTION){
      if(mousePattern !== "none")
        showPattern(x,y,mousePattern)
    }
  }
}

function displayFrameRate(){
  //display framerate
  textSize(14);
  document.getElementById("framerate").innerHTML='FPS:' + round(frameRate());
}

function displayGeneration(){
  //display framerate
  textSize(14);
  document.getElementById("generation").innerHTML='Gen:' + gen;
}
