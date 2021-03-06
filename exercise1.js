"use strict";
var UIcontroller = (function(){
    return {
            showItems:function(){
                console.log('----------------- TODO ITEMS --------------------');
                console.log('Press 1 : Insert a new task');
                console.log('Press 2 : Remove a task by specific DATA');
                console.log('Press 3 : Remove a task by its exact description');
                console.log('Press 4 : Show all existing tasks, in alphabetic order');
                console.log('Press 5 : Close the program ');
                console.log('-------------------------------------------------');
            },
            getInfo:function(txt){
                var readlineSync = require('readline-sync');
                return (readlineSync.question(txt));
            },
    }
})();
var arrayTasks =[];
var todoManager = setInterval(()=>{
    UIcontroller.showItems();
    function Tasks (desc, ur, pr, dead){
        this.desc = desc;
        this.ur = ur;
        this.pr = pr;
        this.dead = dead;
    }
    var selectedItem = UIcontroller.getInfo('Select what do you want to DO : ');
    var intSelectedItem = parseInt(selectedItem);
            switch (intSelectedItem){
                case 1:
                    insertItem();
                    break;
                case 2:
                    deleteExpireDate();
                    break;
                case 3:
                    removeItem();
                    break;
                case 4:
                    mySort();
                    break;
                default:
                    clearInterval(todoManager);
                
            }
            // Function for inserting new ITEM
        function insertItem(){
            var tsk = new Tasks();
                    tsk.desc= UIcontroller.getInfo('Please Describe THE Task <Require> : ');
                    while(tsk.desc == ''){
                        tsk.desc=UIcontroller.getInfo('Please Describe THE Task <*> : ');
                    }
                    tsk.ur = UIcontroller.getInfo('Is that an Urgent Task ? <Default : NO> ' ) || 'no';
                    tsk.pr =  UIcontroller.getInfo('Is that a Private Task ? <Default : Private> ' ) || 'private';
                    tsk.dead = new Date(UIcontroller.getInfo('Enter the deadline for this task (YYYY-MM-DD): '));
                    arrayTasks.push(tsk);
                   if(!Number.isNaN(tsk.dead.getTime())) {
                        const now = new Date();
                        setTimeout(function() {
                            arrayTasks = arrayTasks.filter(vendor => vendor['dead'].getTime() > now.getTime());
                        }, (tsk.dead.getTime()-now.getTime())/1000);  // Should be divided by 1000 in order to change it to second, otherwise
                                                                    // its value goes beyond the int value and automatically set to 1, 
                                                                    //so does not work properly
                    }
        }
        //----  removing the ITEM found from the ARRAY of OBJECTS by filter --------
        function removeItem(){
            var delItem = UIcontroller.getInfo('Please write the description for the ITEM you want to delete EXACTLY: ');
            arrayTasks = arrayTasks.filter(vendor => vendor['desc'] !== delItem); 
        }
        //---- sorting the all items   
        function mySort(){
            arrayTasks = arrayTasks.sort((a, b) => (a.desc.toUpperCase() < b.desc.toUpperCase() ?   -1 :  1));
            console.log(arrayTasks);
        }
        function deleteExpireDate(){
            var date = new Date(UIcontroller.getInfo('Please Enter the Specific Date you want to delet: '));
            arrayTasks = arrayTasks.filter(vendor => vendor['dead'].getTime() !== date.getTime());     
        }
},1000);
