

let icon = document.querySelector('.ico i');
let test = document.querySelectorAll('.test .card');
let body = document.querySelector('body')
let button = document.querySelector('button')
// click on icon
icon.onclick = function(){
    for(let i = 0 ; i<test.length ; i++){
        test[i].classList.toggle('darkButton');
        }
        body.classList.toggle('dark') ;
        icon.classList.toggle('dark');
        button.classList.toggle('darkButton');
        button.classList.alert('Hello you are in the light mood');
        button.innerText = "Light mode";
        if(button.classList.contains('darkButton')){
                button.innerText = " Light mode"
            }else{
                button.innerText = " Dark mode"
                
    
            }
}

// click on button
button.onclick = function(){
    for(let i = 0 ; i<test.length ; i++){
        test[i].classList.toggle('darkButton');
        }
        body.classList.toggle('dark') ;
        icon.classList.toggle('dark');
        button.classList.toggle('darkButton');
        if(button.classList.contains('darkButton')){
            button.innerText = "Light mode"
        }else{
            button.innerText = "Dark mode"

        }
}
