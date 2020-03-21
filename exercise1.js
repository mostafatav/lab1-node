"use strict";
var showItems  = function (){
    console.log('Press 1 : insert a new task');
    console.log('Press 2 : remove a task');
    console.log('Press 3 : show all existing tasks, in alphabetic order');
    console.log('Press 4 : close the program ');
};
var getInfo = function(txt){
    var readlineSync = require('readline-sync');
    return ( readlineSync.question(txt));
}
function Tasks (desc, ur,pr,dead){
    this.desc = desc ;
    this.ur=ur;
    this.pr=pr;
    this.dead = dead;
}
var arrayTasks = new Array();
var todoManager = function(){
    showItems();
    var selectedItem = getInfo('Please select the items : ');
    var intSelectedItem = parseInt(selectedItem);
        if ( intSelectedItem !== 4) {
            switch (intSelectedItem){
                case 1:
                    var tsk = new Tasks();
                    tsk.desc= getInfo('Please Describe you Tasks : ');
                    while(tsk.desc == ''){
                        tsk.desc=getInfo('Please Describe you Tasks : ');
                    }
                    tsk.ur = getInfo('Is that a Urgent Task : ? ') || 'no';
                    tsk.pr =  getInfo('Is that a Private Task : ? ') || 'private';
                    tsk.dead = getInfo('Enter the deadline for this task : ? ');
                    arrayTasks.push(tsk);
                    break;
                case 2:
                    //removeItem();
                    deleteExpireDate();
                    break;
                case 3:
                    mySort();
                    break;
                case 4:
                    break;
            }
            todoManager();
        }
}
//----  removing the ITEM found from the ARRAY of OBJECTS by filter --------
function removeItem(){
    var delItem = getInfo('Please write the description for the ITEM you want to delete EXACTLY :');
    arrayTasks = arrayTasks.filter(vendor => vendor['desc'] !== delItem); 
}
//---- sorting the all items   
function mySort(){
    arrayTasks = arrayTasks.sort((a, b) => (a.desc.toUpperCase() < b.desc.toUpperCase() ?   -1 :  1));
    console.log(arrayTasks);
}
function deleteExpireDate(){
    var date = getInfo('Please Enter the Specific Date you want to delet :');
    arrayTasks = arrayTasks.filter(vendor => vendor['dead'] !== date); 
}
todoManager();