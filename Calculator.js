// function  Calculator (){
//         let  Screen = document.querySelector('.screen');
//         let  buttons = document.querySelectorAll('.btn');
//         let  Equal = document.querySelector('.btn-equal');
//         let  Clear = document.querySelector('btn-clear');
    

//     buttons.forEach(function(button) {
//         button.addEventListener('click', function(e){
//             console.log("clcik");
//             let value = e.target.dataset.num;
//              Screen.Value += value;
//     });

// });

// }
// Calculator();


// function clk(val){

//     document.getElementById("screen").value=document.getElementById("screen").value+val;
// }

// function clrdisp(){
//     document.getElementById("screen").value=""
// }

// function eql(){
//     var text=document.getElementById("screen").value;
//     var result=eval(text);
//     document.getElementById("screen").value=result
// }

function display(value) {
        document.getElementById("result").value += value;
    }