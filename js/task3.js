class Marker {
    constructor() {
        this.color = '#' + Math.random().toString(16).slice(2, 8);
        this.numOfInk = 55.7;
    }
    print() {
        return document.getElementById('p').style.color = this.color; 
   }
   amountOnclick(){ 
       let patt1 = /\S/g;
       let str = document.getElementById('p').textContent;
       let result = str.match(patt1).length;
     
       this.numOfInk -= result;
       let n = (this.numOfInk).toFixed(1);
       return document.getElementById('p2').innerHTML = ' amount of ink =  ' + n ;
       
       if( n <= 0) {
          return document.getElementById('b').onclick =  function(){ document.getElementById('b').display = 'none'};
       }
    }
    reset(){
        return document.getElementById('p').style.color = 'white'; 
    }
    onclick(val){
        document.getElementById('b').addEventListener('click', function(){
            val.print();
            val.amountOnclick();
        });
        document.getElementById('p').onclick = function(){val.reset()};
    }
}
let marker1 = new Marker();
marker1.onclick(marker1);

class filledMarker extends Marker{
    amountoOfInk = 0;
    fillInk(){

    }
}
//let filledMarker = new filledMarker();
//filledMarker.fillInk();
