function normalGetNeighbourAlive(col,row){
  var result=0;
  var i,j;
  for( i=col-1;i<=col+1;i++) {
      for( j=row-1;j<=row+1;j++) {
        if(i>=0 && j>=0 && i<grid.start_col+grid.width && j<grid.start_row+grid.height && !(i==col && j==row)) {
          if(grid.matrix[i][j].alive) {
            result++;
          }
        }
      }
    }
  return result;
}

function normalNextGen(){
  var newMatrix=[];
  for( i=grid.start_col; i<grid.start_col+grid.width; i++) {
      newMatrix[i] = [];
      for(var j=grid.start_row; j<grid.start_row+grid.height; j++) {
          newMatrix[i][j] = []
      }
  }

  for( i=grid.start_col; i<grid.start_col+grid.width; i++) {
    for(var j=grid.start_row; j<grid.start_row+grid.height; j++) {
      var numberAlive=this.normalGetNeighbourAlive(i, j);
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

  grid.matrix=newMatrix;
}
