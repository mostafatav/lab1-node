"use strict";
function trimm (arrs){
    for (var i=0; i<arrs.length;i++){
        if (arrs[i].length <= 2){
            totalArray[i] = '';
            continue;
        }else
            totalArray[i] =  arrs[i].slice(0,2) + arrs[i].slice(arrs[i].length-2,arrs[i].length);  
    }
    return totalArray;
}

var st1 = 'MOSTAFA';
var st2 = 'HOSEIN';
var st3 = 'A'; 

var totalArray = [st1,st2,st3];
var an = trimm(totalArray);
console.log(an);