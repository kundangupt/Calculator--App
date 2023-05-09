document.addEventListener('DOMContentLoaded', function() {
    let Screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let Equal = document.querySelector('.btn-equal');
    let Clear = document.querySelector('.btn-clear');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        Screen.value += value;
      });
    });
  
    Equal.addEventListener("click", function(e){
        if(Screen.value === "") {
            Screen.value="please Enter";  
        } else {
           let answer = eval(Screen);
           console.log(answer)

        } 
      });

    Clear.addEventListener('click', function (e) {
       Screen.value = '';       
    });
  });


 
