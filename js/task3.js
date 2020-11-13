class Marker {
    //amOfInk = 55.7;
    constructor() {
        this.color = '#' + Math.random().toString(16).slice(2, 8);
        this.numOfInk = 55.7;
    }
    print() {
        return document.getElementById('p').style.color = this.color;
        
   }
        //do {
         //return document.getElementById('p').style.color = 'black';
        //}
       //while 
   amountOnclick(){
       
       $('#b')
.data('counter', 0)                            
.click(function() {
    let counter = $(this).data('counter');    
    $(this).data('counter', counter + 1);        
    return document.getElementById('b').innerHTML = $(this).data('counter');            
});
       
       let patt1 = /\S/g;
       let str = document.getElementById('p').textContent;
       let result = str.match(patt1).length;
     
         this.numOfInk -= result;
        let n = (this.numOfInk).toFixed(1);
       return document.getElementById('p2').innerHTML = ' amount of ink =  ' + n + ', simbols =  ' + result;
        
      if( n <= 0){
          return document.getElementById('p').style.color = 'black';
          $('#b').click(function(){
	          $('#b').prop('disabled', true);
         });
         $('#p').click(function(){
	          $('#p').prop('disabled', true);
         });
             
         }
   }
    reset(){
        return document.getElementById('p').style.color = 'white';
    }
    onclick(val){
        document.getElementById("b").addEventListener('click', function(){
            val.print();
            val.amountOnclick();
        });
        document.getElementById("p").onclick = function(){val.reset()};
        //document.getElementById("b").onclick = function(){val.amountOnclick()};
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
