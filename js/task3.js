class Marker {
    amOfInk = 55.7;
    constructor() {
        this.color = '#' + Math.random().toString(16).slice(2, 8);
      //  this.numOfInk = 55.7;
    }
    print() {
        return document.getElementById('p').style.color = this.color;
        let arr = document.getElementById('p').split(' ');
        
     
    
        
        amOfInk -= arr.length;
       return document.getElementById('p2').innerHTML = amOfInk;
        
      if(amOfInk < 1){
             return document.getElementById('p').style.color = 'black';
         }
    
  
        //do {
         //return document.getElementById('p').style.color = 'black';
        //}
       //while 
    }
    reset(){
        return document.getElementById('p').style.color = 'white';
    }
    onclick(val){
        document.getElementById('b').addEventListener('click', function(){val.print()});
        document.getElementById("p").onclick = function(){val.reset()};
    }
}
let marker1 = new Marker();
marker1.onclick(marker1);
//document.getElementById('b').addEventListener('click', function(){marker1.print()});
//document.getElementById("p").onclick = function(){marker1.reset()};

class filledMarker extends Marker{
    amountoOfInk = 0;
    fillInk(){

    }
}
//let filledMarker = new filledMarker();
//filledMarker.fillInk();
