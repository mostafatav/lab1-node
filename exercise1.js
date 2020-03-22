"use strict";
var UIcontroller = (function(){
    return {
            showItems:function(){
                console.log('----------------- TODO ITEMS --------------------');
                console.log('Press 1 : Insert a new task');
                console.log('Press 2 : Remove a task');
                console.log('Press 3 : Show all existing tasks, in alphabetic order');
                console.log('Press 4 : Close the program ');
                console.log('-------------------------------------------------');
            },
            getInfo:function(txt){
                var readlineSync = require('readline-sync');
                return (readlineSync.question(txt));
            },
    }
})();
var arrayTasks =[];
var todoManager = function(){
    UIcontroller.showItems();
    function Tasks (desc, ur,pr,dead){
        this.desc = desc ;
        this.ur=ur;
        this.pr=pr;
        this.dead = dead;
    }
    var selectedItem = UIcontroller.getInfo('Select what do you want to DO : ');
    var intSelectedItem = parseInt(selectedItem);
        if ( intSelectedItem !== 4) {
            switch (intSelectedItem){
                case 1:
                    var tsk = new Tasks();
                    tsk.desc= UIcontroller.getInfo('Please Describe THE Task <Require> : ');
                    while(tsk.desc == ''){
                        tsk.desc=UIcontroller.getInfo('Please Describe THE Task <Require> :');
                    }
                    tsk.ur = UIcontroller.getInfo('Is that an Urgent Task ? <Default : NO> ') || 'no';
                    tsk.pr =  UIcontroller.getInfo('Is that a Private Task ? <Default : Private> ' ) || 'private';
                    tsk.dead = UIcontroller.getInfo('Enter the deadline for this task <Optional> ');
                    arrayTasks.push(tsk);
                    break;
                case 2:
                    removeItem();
                    //deleteExpireDate();
                    break;
                case 3:
                    mySort();
                    break;
                case 4:
                    break;
            }
            todoManager();
        }
        //----  removing the ITEM found from the ARRAY of OBJECTS by filter --------
        function removeItem(){
            var delItem = UIcontroller.getInfo('Please write the description for the ITEM you want to delete EXACTLY :');
            arrayTasks = arrayTasks.filter(vendor => vendor['desc'] !== delItem); 
        }
        //---- sorting the all items   
        function mySort(){
            arrayTasks = arrayTasks.sort((a, b) => (a.desc.toUpperCase() < b.desc.toUpperCase() ?   -1 :  1));
            console.log(arrayTasks);
        }
        function deleteExpireDate(){
            var date = UIcontroller.getInfo('Please Enter the Specific Date you want to delet :');
            arrayTasks = arrayTasks.filter(vendor => vendor['dead'] !== date); 
        }
};
todoManager();