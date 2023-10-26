function getNeighbourAlive(col,row){
  var result=0;
  var i,j;
  for( i=col-1;i<=col+1;i++) {
      for( j=row-1;j<=row+1;j++) {
        if(i>=0 && j>=0 &&
          i<grid.start_col+grid.width &&
          j<grid.start_row+grid.height
          && !(i==col && j==row)) {

          if(grid.matrix[i][j].alive) {
            result++;

          }
        }
      }
    }
  return result;
}

function nextRectGen(rect,result){
  //rectangle=rect;
  var newSC=rect.start_col;
  var newSR=rect.start_row;
  var newH=rect.height;
  var newW=rect.width;

  if(rect.start_col>0){
    newSC=newSC-1
    newW=newW+1
  }
  if(rect.start_row>0){
    newSR=newSR-1
    newH=newH+1
  }
  if(grid.start_col+grid.width-1>rect.start_col+rect.width-1)
    newW=newW+1
  if(grid.start_row+grid.height-1>rect.start_row+rect.height-1)
    newH=newH+1

  var rectangle=new Rectangle(newSC,newSR,newW,newH)
  
  var newMatrix=[];
  for(var i=rectangle.start_col; i<rectangle.start_col+rectangle.width; i++) {
      newMatrix[i] = [];
      for(var j=rectangle.start_row; j<rectangle.start_row+rectangle.height; j++) {
          newMatrix[i][j] = []
      }
  }

  for( i=rectangle.start_col; i<rectangle.start_col+rectangle.width; i++) {
    for(var j=rectangle.start_row; j<rectangle.start_row+rectangle.height; j++) {
      var numberAlive=this.getNeighbourAlive(i, j);
      var settato=false;
      if(grid.matrix[i][j].alive) {
        if(numberAlive<2 || numberAlive>3) {
          newMatrix[i][j]=new Cell(i,j,false);
          settato=true;
        }else{
          newMatrix[i][j]=new Cell(i,j,true);
        }
      }else {
        if(numberAlive==3) {
            newMatrix[i][j]=new Cell(i,j,true);
          settato=true;
        }else{
          newMatrix[i][j]=new Cell(i,j,false);
        }
      }
    }
  }

  result.push([newMatrix,rectangle])
}

function nextGen(){
  regions = quadtree.query()
  var result = []
  regions.forEach(function(e){
    nextRectGen(e,result)
  });

  result.forEach(function(e){
    grid.substitute(e[0],e[1],grid)
  });
}
