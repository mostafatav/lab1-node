"use strict";
//--------------- Create the list of MENUE to show to the user
(function(){
    var MenuItems = function  (items, answer){
    this.items =items;
    this.answer = answer;
}
var it1 = new MenuItems('Press 1 : insert a new task ',1);
var it2 = new MenuItems('Press 2 : remove a task ',2);
var it3 = new MenuItems('Press 3 : show all existing tasks, in alphabetic order ',3);
var it4 = new MenuItems('Press 4 : close the program ',4);
MenuItems.prototype.showItems = function(){         // use prototype for inheriting from the constructor
    console.log(this.items);
}
var arrayTasks = new Array();
var arr = [it1,it2,it3,it4];
//--------------- End Create the list of MENUE to show to the user

var readlineSync = require('readline-sync');
function nextQuestion(){
    for (var i=0;i<arr.length;i++){
        arr[i].showItems();
    }
    console.log('Please select the  ');
    var selectedItem = readlineSync.question();  
    if (parseInt(selectedItem) !== 4) {
        todo_manager(parseInt(selectedItem));
        nextQuestion()
    }
}
// ---------- create the constructor for tasks --------------
function Tasks (desc, ur,pr,dead){
    this.desc = desc ;
    this.ur=ur;
    this.pr=pr;
    this.dead = dead;
}
function todo_manager (selectedItem){
    switch (selectedItem){
        case 1:
           var tsk = new Tasks();
                tsk.desc= readlineSync.question('Please Describe you Tasks : ');
                while(tsk.desc == ''){
                    tsk.desc= readlineSync.question('Please Describe you Tasks : ');
                }
                tsk.ur = readlineSync.question('Is that a Urgent Task : ? ') || 'no';
                tsk.pr =  readlineSync.question('Is that a Private Task : ? ') || 'private';
                tsk.dead = readlineSync.question('Enter the deadline for this task : ? ');
                arrayTasks.push(tsk);
           return tsk;
        case 2:
            removeItem();
            break;
        case 3:
            mySort();
            break;
        case 4:
            break;
    }
}
//----  removing the ITEM found from the ARRAY of OBJECTS by filter --------
function removeItem(){
    var delItem = readlineSync.question('Please write the description for the ITEM you want to delete EXACTLY :');
    arrayTasks = arrayTasks.filter(vendor => vendor['desc'] !== delItem); 
}
//---- sorting the all items   
function mySort(){
    arrayTasks = arrayTasks.sort((a, b) => (a.desc.toUpperCase() < b.desc.toUpperCase() ?   -1 :  1));
    console.log(arrayTasks);
}
nextQuestion();
})();