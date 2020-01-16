alert('Press The Button "GO..." to start.');
var trail=0;
var canGo=0;
//

document.getElementById('bt').onclick=function(){
    document.getElementById('again').innerHTML='Chick "GO..." again.<br><br>'
    check=0;
var letter="";

//check...
if(canGo==1){
while(true){
    var num=Math.random();
    num=num*14;
    num=Math.floor(num);
    //
    var day=Math.random();
    day=day*17;
    
    
    day=Math.floor(day);
    if(day==0){
        day=day+1;
    }

    switch(day){

        case 1:
           letter="A"
            break;
            case 2:
                letter="B"
                break;
                case 3:
                    letter="C"
                    break;
                    case 4:
                        letter="D"
                        break;
                        case 5:
                            letter="E"
                            break;
                            case 6:
                                letter="F"
                                break;
                                case 7:
                                    letter="G"
                                    break;
                                    case 8:
                                        letter="H"
                                        break;
                                        case 9:
                                            letter="I"
                                            break;
                                            case 10:
                                                letter="J"
                                                break;
                                                case 11:
                                                    letter="K"
                                                    break;
                                                    case 12:
                                                        letter="L"
                                                        break;
                                                        case 13:
                                                            letter="M"
                                                            break;
                                                            case 14:
                                                                letter="N"
                                                                break;
                                                                case 15:
                                                                    letter="O"
                                                                    break;
                                                                    case 16:
                                                                        letter="P"
                                                                        break;
        
        }
        //
        if(num==0){
            num=1;
        }



if(document.getElementById('td'+letter+num).innerHTML>0){
    check++
    document.getElementById('t'+letter+num).innerHTML=`<span style='color:rgb(0, 255, 13)' id='td`+letter+num+`'>`+0+`</span>`;
   
}

if(check==208){
    check=0;
    break;
}



}
}



//finish;;;


while(true){


var num=Math.random();
num=num*14;
num=Math.floor(num);
//
var day=Math.random();
day=day*17;


day=Math.floor(day);
if(day==0){
    day=day+1;
}



function random (put) {
switch(put){

case 1:
   letter="A"
    break;
    case 2:
        letter="B"
        break;
        case 3:
            letter="C"
            break;
            case 4:
                letter="D"
                break;
                case 5:
                    letter="E"
                    break;
                    case 6:
                        letter="F"
                        break;
                        case 7:
                            letter="G"
                            break;
                            case 8:
                                letter="H"
                                break;
                                case 9:
                                    letter="I"
                                    break;
                                    case 10:
                                        letter="J"
                                        break;
                                        case 11:
                                            letter="K"
                                            break;
                                            case 12:
                                                letter="L"
                                                break;
                                                case 13:
                                                    letter="M"
                                                    break;
                                                    case 14:
                                                        letter="N"
                                                        break;
                                                        case 15:
                                                            letter="O"
                                                            break;
                                                            case 16:
                                                                letter="P"
                                                                break;

}
} 
random(day);
//
if(num==0){
    num=1;
}

if(document.getElementById('td'+letter+num).innerHTML==0){
    check++
    document.getElementById('td'+letter+num).innerHTML=check;
   

}



if(check==208){
    check=0;
    //alert(trail);
    trail=0;

        var choose=Math.random();
        choose=choose*209;
        choose=Math.floor(choose);

        while(true){
     var chooseNum=Math.random();
        chooseNum=chooseNum*14;
        chooseNum=Math.floor(chooseNum);
        
        var chooseLetter=Math.random();
        chooseLetter=chooseLetter*17;
        chooseLetter=Math.floor(chooseLetter);   
        
        random(chooseLetter);
        
        var conf=document.getElementById('td'+letter+chooseNum).innerHTML;

      document.getElementById('choose').innerHTML=conf;
        break;
      


    }

    break;
}




trail++;


}
document.getElementById('watch').onclick=function(){
document.getElementById('t'+letter+chooseNum).innerHTML=`<span style='color:red' id='td`+letter+chooseNum+`'>`+conf+`</span>`;
}
canGo=1;
}






















































































