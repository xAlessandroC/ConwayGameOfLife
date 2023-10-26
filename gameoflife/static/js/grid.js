class GridQT{
  //starting point, width, height
  constructor(rectangle){
    this.rectangle=rectangle;

    this.matrix = [];
    for(var i=this.rectangle.start_col; i<this.rectangle.width; i++) {
        this.matrix[i] = [];
        for(var j=this.rectangle.start_row; j<this.rectangle.height; j++) {
            this.matrix[i][j] = new Cell(i,j,0);
        }
    }
  }

  get start_col(){
    return this.rectangle.start_col
  }

  get start_row(){
    return this.rectangle.start_row
  }

  get width(){
    return this.rectangle.width
  }

  get height(){
    return this.rectangle.height
  }

  insert(cell){
    this.matrix[cell.x][cell.y]=cell;
  }

  contains(cell){
    var res=this.matrix[cell.x][cell.y]
    return res.alive
  }

  substitute(newMatrix,rectangle){
    for(var i=rectangle.start_col; i<rectangle.start_col+rectangle.width; i++) {
        for(var j=rectangle.start_row; j<rectangle.start_row+rectangle.height; j++) {
            if(newMatrix[i][j].alive===true){
              if(grid.matrix[i][j].alive!==true){
                quadtree.insert(new Cell(i,j,true))
                grid.matrix[i][j]=new Cell(i,j,true)
              }
            }else{
              if(grid.matrix[i][j].alive===true){
                quadtree.remove(i,j)
                grid.matrix[i][j]=new Cell(i,j,false)
              }
            }
        }
    }
  }

}
