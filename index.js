Array.prototype.cube=function(){
    let a=this;
    let b=a.map(y=>y*y*y);
    return b;
  }
  String.prototype.Countvowels=function(){
    let count=0;
  const vowels = ["a", "e", "i", "o", "u"];
  let word=this.toLowerCase();
  for(let i=0; i<word.length; i++){
    if(vowels.includes(word[i])){
      count++
  }
   
    }
   return count;
}