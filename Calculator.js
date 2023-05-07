function  Calculator (){
        let  Screen = document.querySelector('.screen');
        let  buttons = document.querySelectorAll('.btn');
        let  Equal = document.querySelector('.btn-equal');
        let  Clear = document.querySelector('btn-clear');
    

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            console.log("clcik");
            let value = e.target.dataset.num;
             Screen.value += value;
    });

});

     Equal.addEventListener('click', function(e){
         if(Screen.value === ''){
            Screen.value = " ";
         } 
         else {
               let answer = eval(Screen.value);
               Screen.value = answer;
         }
     });

     Clear.addEventListener('click', function(){
             Screen.value =  null;
           
     });

}
Calculator();


