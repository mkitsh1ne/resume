const button=document.getElementById("change");
let isDarkMode=false;
button.addEventListener('click',function(){

    isDarkMode=!isDarkMode;
    document.body.classList.toggle('dark-mode',isDarkMode);
    if (isDarkMode) {
        button.textContent = 'Змінити на світлу тему';
    } else {
        button.textContent = 'Змінити на темну тему';
    }
})