document.getElementById('b1').onclick = function(){
    const ip1 = prompt('enter ip : ', ' ');
    const ip2 = prompt('enter ip : ', ' ');
    return document.getElementById('b1').innerHTML = getAmountIp(ip1, ip2);
}
function getAmountIp(ip1, ip2) {
    let n1 = ip1.split('.').map(item => parseInt(item));
    let n2 = ip2.split('.').map(item => parseInt(item));
    let am;
    if ( (n1.length && n2.length) == 4) {
        if( n1[0] === 0 || n1[1] === 0 || n1[2] === 0 || (n1[0] && n1[1]) === 0 || (n1[0] && n1[2]) === 0 || (n1[1] && n1[2]) === 0
            && n2[0] === 0 || n2[1] === 0 || n2[2] === 0 || (n2[0] && n2[1]) === 0 || (n2[0] && n2[2]) === 0 || (n2[1] && n2[2]) === 0){
            if(n1[3] >= 0 && n2[3] >= 0 && !(n1[3] >= 256) && !(n2[3] >= 256)){
                am = n2[3] - n1[3];
            }
        }
        else if(  n1[0] === 0 || n1[1] === 0 || n1[2] === 0 || (n1[0] && n1[1]) === 0 || (n1[0] && n1[2]) === 0 || (n1[1] && n1[2]) === 0
            && n2[0] === 0 || n2[1] === 0 || n2[3] === 0 || (n2[0] && n2[1]) === 0 || (n2[0] && n2[3]) === 0 || (n2[1] && n2[3]) === 0){
            if(n1[3] >= 0 && n2[2] >= 0 && !(n1[3] >= 256) && !(n2[2] >= 256)){
               am = n2[2] - n1[3] + 255;
            }
        }else{
            return 'error';
        }
        return am;
    }
}