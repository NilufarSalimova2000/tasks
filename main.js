const Form = document.querySelector(".form");
const width = document.querySelector(".width_input");
const height = document.querySelector(".height_input");
const borderRadius = document.querySelector(".radius_input");
const color = document.querySelector(".color_input");
const Result = document.querySelector(".result");

Form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    
    const InputWidth = width.value + "px";
    const InputHeight = height.value + "px";
    const InputRadius = borderRadius.value + "px";
    const InputColor = color.value;

    
    Result.style.display = "inline-block"; 
    Result.style.width = InputWidth;
    Result.style.height = InputHeight;
    Result.style.borderRadius = InputRadius;
    Result.style.backgroundColor = InputColor;
});



const userForm = document.querySelector(".user_form");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const labels = document.querySelectorAll('label');
const activeBox = document.querySelector(".box");

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    activeBox.innerHTML = ``;
    
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const usrName = labels[index].innerText; 
            const userDiv = document.createElement('div'); 
            userDiv.textContent = usrName; 
            activeBox.appendChild(userDiv);
        }
    });
});



const timeForm = document.querySelector(".time_form");
const timeInput = document.querySelector(".time_input");
const countContainer = document.querySelector(".count");

timeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let time = parseInt(timeInput.value);
    if (time <= 0) return; 
    const countNum = document.createElement('p'); 
    countNum.classList.add('counter');

    countNum.textContent = time; 
    countContainer.appendChild(countNum);

    const interval = setInterval(() => {
        time--;
        countNum.textContent = time; 
        if (time === 0) { 
            clearInterval(interval); 
            countNum.remove(); 
        }
    }, 1000);
});
