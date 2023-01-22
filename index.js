let buttons = document.querySelectorAll('.btn');
let inp = document.getElementById('inp-box');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // console.log(e.target.innerHTML)
        // console.log(e.target.innerHTML);
        if (e.target.innerHTML == 'AC') {
            inp.value = "";
        }
        else if (e.target.innerHTML == 'X') {
            let lchar = inp.value.charAt(inp.value.length - 1);
            // console.log(inp.value);
            inp.value = inp.value.replace(lchar, "");
        }
        else if (e.target.innerHTML == '=') {
            let sol = eval(inp.value);
            inp.value = sol;
        }
        else if(e.target.innerHTML == '+/-'){
            inp.value = "(-"
        }
        else {
            inp.value += e.target.innerHTML;
            // console.log(str);
        }
    })
});

