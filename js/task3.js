class Marker {
    constructor() {
        this.color = '#' + Math.random().toString(16).slice(2, 8);
        this.numOfInk = 55.7;
    }
    print() {
        return document.getElementById('p').style.color = this.color;
        let arr = document.getElementById('p').split(' ');

       this.numOfInk -= arr.length;
        document.getElementById('p2').innerHTML = this.numOfInk;

        do {
         return document.getElementById('p').style.color = 'black';
        }
       while (this.numOfInk < 1);
    }
}
let marker1 = new Marker();
document.getElementById('b').addEventListener('click', function(){marker1.print()});

class filledMarker extends Marker{
    amountoOfInk = 0;
    fillInk(){

    }
}
//let filledMarker = new filledMarker();
//filledMarker.fillInk();