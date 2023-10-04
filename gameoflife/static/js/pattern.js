function setPattern(pattern){
  mousePattern=pattern
  console.log("pattern settato: ", pattern)
}

function showPattern(x,y,pattern){
  fill(255,255,255);
  if(pattern === "insert"){
    drawRect(x,y)
  }
  if(pattern === "glider"){
    drawRect(x,y-1)
    drawRect(x,y+1)
    drawRect(x+1,y)
    drawRect(x+1,y+1)
    drawRect(x-1,y+1)
  }
  if(pattern === "oscillator"){
    drawRect(x,y)
    drawRect(x,y-1)
    drawRect(x,y+1)
  }
  if(pattern === "10row"){
    drawRect(x,y)
    drawRect(x-1,y)
    drawRect(x-2,y)
    drawRect(x-3,y)
    drawRect(x-4,y)
    drawRect(x-5,y)
    drawRect(x+1,y)
    drawRect(x+2,y)
    drawRect(x+3,y)
    drawRect(x+4,y)
  }
  if(pattern === "tumbler"){
    drawRect(x-1,y)
    drawRect(x-1,y-1)
    drawRect(x-1,y-2)
    drawRect(x-1,y+1)
    drawRect(x-1,y+2)
    drawRect(x+1,y)
    drawRect(x+1,y-1)
    drawRect(x+1,y-2)
    drawRect(x+1,y+1)
    drawRect(x+1,y+2)
    drawRect(x-2,y-1)
    drawRect(x-2,y-2)
    drawRect(x+2,y-1)
    drawRect(x+2,y-2)
    drawRect(x+2,y+3)
    drawRect(x-2,y+3)
    drawRect(x+3,y+3)
    drawRect(x+3,y+2)
    drawRect(x+3,y+1)
    drawRect(x-3,y+3)
    drawRect(x-3,y+1)
    drawRect(x-3,y+2)
  }
}

function insertPattern(x,y,pattern){
  if(pattern === "glider"){
    fill(255,255,255);
    quadtree.insert(new Cell(x,y-1,true));
    quadtree.insert(new Cell(x,y+1,true));
    quadtree.insert(new Cell(x+1,y,true));
    quadtree.insert(new Cell(x+1,y+1,true));
    quadtree.insert(new Cell(x-1,y+1,true));
  }
  if(pattern === "oscillator"){
    quadtree.insert(new Cell(x,y,true));
    quadtree.insert(new Cell(x,y+1,true));
    quadtree.insert(new Cell(x,y-1,true));
  }
  if(pattern === "10row"){
    quadtree.insert(new Cell(x,y,true));
    quadtree.insert(new Cell(x-1,y,true));
    quadtree.insert(new Cell(x-2,y,true));
    quadtree.insert(new Cell(x-3,y,true));
    quadtree.insert(new Cell(x-4,y,true));
    quadtree.insert(new Cell(x-5,y,true));
    quadtree.insert(new Cell(x+1,y,true));
    quadtree.insert(new Cell(x+2,y,true));
    quadtree.insert(new Cell(x+3,y,true));
    quadtree.insert(new Cell(x+4,y,true));
  }
  if(pattern === "tumbler"){
    quadtree.insert(new Cell(x-1,y,true));
    quadtree.insert(new Cell(x-1,y-1,true));
    quadtree.insert(new Cell(x-1,y-2,true));
    quadtree.insert(new Cell(x-1,y+1,true));
    quadtree.insert(new Cell(x-1,y+2,true));
    quadtree.insert(new Cell(x+1,y,true));
    quadtree.insert(new Cell(x+1,y-1,true));
    quadtree.insert(new Cell(x+1,y-2,true));
    quadtree.insert(new Cell(x+1,y+1,true));
    quadtree.insert(new Cell(x+1,y+2,true));
    quadtree.insert(new Cell(x-2,y-1,true));
    quadtree.insert(new Cell(x-2,y-2,true));
    quadtree.insert(new Cell(x+2,y-1,true));
    quadtree.insert(new Cell(x+2,y-2,true));
    quadtree.insert(new Cell(x+2,y+3,true));
    quadtree.insert(new Cell(x-2,y+3,true));
    quadtree.insert(new Cell(x+3,y+3,true));
    quadtree.insert(new Cell(x+3,y+2,true));
    quadtree.insert(new Cell(x+3,y+1,true));
    quadtree.insert(new Cell(x-3,y+3,true));
    quadtree.insert(new Cell(x-3,y+1,true));
    quadtree.insert(new Cell(x-3,y+2,true));
  }
}
