const CAPACITY = 4

class Quadtree{
  constructor(rectangle,grid){
    // this.grid=grid;
    this.rectangle = rectangle;
    this.cells = [];

    //controllo se sono un quadtree finale o meno
    console.log("#LOG: capacity':",this.rectangle.width*this.rectangle.height)
    if(this.rectangle.width*this.rectangle.height<=CAPACITY){
      this.final=true;
    }
    else {
      this.final=false;
    }

    this.alives=0;
    this.divided=false;
    this.no=null;
    this.ne=null;
    this.so=null;
    this.se=null;
  }

  insert(cell){
    //console.log("#LOG: Entrato in insert con cella[",cell.x,cell.y,"]")
    //se già sta non inserisco
    if(grid.contains(cell)){
      //console.log("#LOG: Gia presente")
      return
    }

    //posso inserire solo le celle vive
    if(!cell.alive)
      return false;

    //console.log("#LOG: La cella e' viva")
    //la cella deve appartenere al quadtree
    if(cell.x<this.rectangle.start_col || cell.x>(this.rectangle.start_col+this.rectangle.width-1)
       || cell.y<this.rectangle.start_row || cell.y>(this.rectangle.start_row+this.rectangle.height-1))
       return false;

    //posso inserire
    this.alives++;
    if(this.final){
      //console.log("#LOG: Sono final inserisco")

      //##CAPIRE PERCHE' IL RIFERIMENTO E' ALLA GRID INIZIALE
      grid.insert(cell)
      this.cells.push(cell)

      return true;
    }else{
      if(!this.divided){
        //console.log("#LOG: Non sono final divido")
        //divido e inserisco ricorsivamente in uno dei 4 sotto quadtree
        // |0|1|
        // |2|3|
        this.divided=true;

        var sc=this.rectangle.start_col
        var ec=this.rectangle.start_col+this.rectangle.width-1
        var sr=this.rectangle.start_row
        var er=this.rectangle.start_row+this.rectangle.height-1
        var w=this.rectangle.width
        var h=this.rectangle.height

        this.no=new Quadtree(new Rectangle(sc,sr,w/2,h/2),grid)
        this.ne=new Quadtree(new Rectangle(sc+w/2,sr,w/2,h/2),grid)
        this.so=new Quadtree(new Rectangle(sc,sr+h/2,w/2,h/2),grid)
        this.se=new Quadtree(new Rectangle(sc+w/2,sr+h/2,w/2,h/2),grid)
      }

      if(this.no.insert(cell))
        return true;
      if(this.ne.insert(cell))
        return true;
      if(this.so.insert(cell))
        return true;
      if(this.se.insert(cell))
        return true;
    }
  }

  remove(col,row){

    if(col<this.rectangle.start_col || col>(this.rectangle.start_col+this.rectangle.width-1)
       || row<this.rectangle.start_row || row>(this.rectangle.start_row+this.rectangle.height-1))
       return

    this.alives--;

    if(this.final){
      this.cells = this.cells.filter(function(element){
        return element.x !== col || element.y !== row
      })
    }

    if(this.divided){
      this.no.remove(col,row)
      this.ne.remove(col,row)
      this.so.remove(col,row)
      this.se.remove(col,row)
    }
  }

  show(){
    rect(this.rectangle.start_col*RESOLUTION,
      this.rectangle.start_row*RESOLUTION,
      this.rectangle.width*RESOLUTION,
      this.rectangle.height*RESOLUTION)

    if(this.divided){
      this.no.show()
      this.ne.show()
      this.so.show()
      this.se.show()
    }
  }

  // query that returns quadtree smallest regions containing alive cells
  query(result){
    if(result===undefined)
      result=[]

    if(this.alives===0)
      return result

    if(this.final){
      result.push(this.rectangle)
    }else{
      if(this.divided){
        this.no.query(result)
        this.ne.query(result)
        this.so.query(result)
        this.se.query(result)
      }
    }

    return result;
  }

  queryUnifying(result){
    if(result===undefined)
      result=[]

    if(this.alives===0)
      return result

    if(this.final){
      result.push(this.rectangle)
    }else{
      if(this.divided){
        var lno=0;
        var lne=0;
        var lso=0;
        var lse=0;

        this.no.query(result)
        this.ne.query(result)
        this.so.query(result)
        this.se.query(result)
      }
    }

    return result;
  }


  queryPoints(res){
    if(res === undefined)
      res = []

    if(this.alives === 0)
      return []

    if(this.final){
      this.cells.forEach(function(cell){
        res.push(cell)
      })
    }
    if(this.divided){
      this.no.queryPoints(res)
      this.ne.queryPoints(res)
      this.so.queryPoints(res)
      this.se.queryPoints(res)
    }

    return res
  }
}
