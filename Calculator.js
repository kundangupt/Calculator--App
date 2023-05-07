function  Calculator (){
        let  Screen = document.querySelector('.screen');
        let  buttons = document.querySelectorAll('.btn');
        let  Equal = document.querySelector('.btn-equal');
        let  Clear = document.querySelector('btn-clear');
    

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
             Screen.Value += value;
    });

});

}
Calculator();