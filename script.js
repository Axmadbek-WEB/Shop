let buttons = document.getElementsByClassName("btn3");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        alert('Narhi: 45000 UZS');

        let son = prompt('Buyurtma:');

        if (son && !isNaN(son)) {
            let total = 45000 * son;
            alert('Shot: ' + total);
        } else {
            alert('Malumot notogri berilgan!');
        }
    });
}
