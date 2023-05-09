document.addEventListener('DOMContentLoaded', function () {
    let Screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let Clear = document.querySelector('.btn-clear');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            Screen.value += value;
        });
    });

    Clear.addEventListener('click', function (e) {
        Screen.value = '';
    });
});
function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x);
    document.getElementById("result").value = y
}


