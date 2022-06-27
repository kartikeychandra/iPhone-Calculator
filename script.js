let string = "";
let buttons =  document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == "AC"){
            string = '0'
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == "+/-"){
            string = -string
            document.querySelector('input').value = string
        }
        else if (document.querySelector('input').value[0] == "0"){
            string = eval(string + e.target.innerHTML);
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == "x"){
            string = string + "*";
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == "÷"){
            string = string + "/";
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == "%"){
            string = string + "/100"
            document.querySelector('input').value = string
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string
        }
    })
});