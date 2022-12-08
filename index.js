Array.prototype.cube=function(){
    let a=this;
    let b=a.map(y=>y*y*y);
    return b;
  }

  String.prototype.Countvowels=function(){
    
  const vowels = ["a", "e", "i", "o", "u"];
  let count=0;
  let word=this.toLowerCase();
  for(let i=0; i<word.length; i++){
    if(vowels.includes(word[i])){
      count++
  }
   
    }
   return count;
}