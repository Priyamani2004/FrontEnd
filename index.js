Array.prototype.cube=function(){
    let a=this;
    let b=a.map(y=>y*y*y);
    return b;
  }