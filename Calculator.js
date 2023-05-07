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

     Equal.addEventListener("click", function(e){
         if(screen.value === ""){
            screen.value = ""
         } 
         else{
               let answer = eval(screen.value);
               screen.value = answer;
         }
     });

     Clear.addEventListener("click", function(e){
           screen.value ="";
     })

}
Calculator();


