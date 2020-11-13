class Marker {
    constructor() {
        this.color = '#' + Math.random().toString(16).slice(2, 8);
        this.numOfInk = 55.7;
    }
    print() {
        return document.getElementById('p').style.color = this.color;
        let arr = document.getElementById('p').split(' ');
        
        
       
          let cnt = document.getElementById('p2');
          cnt.innerText = parseInt(cnt.innerText, 10)+1;
     
        
     if(document.getElementById('b').onclick == true){
        this.numOfInk -= arr.length;
        document.getElementById('p2').innerHTML = this.numOfInk;
      
        //do {
         //return document.getElementById('p').style.color = 'black';
        //}
       //while 
         if(this.numOfInk < 1){
             return document.getElementById('p').style.color = 'black';
         }
     }
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
