const body = document.querySelector('body');
    body.style.backgroundImage='url(./img/ef7fb1b37078b6a2aef8e40710446bfa.jpg)';
    body.style.backgroundSize='cover';
    body.style.backgroundAttachment='fixed';

const winWin = document.querySelector('#windowWin');
    winWin.style.position = 'absolute';
    winWin.style.top='40%';
    winWin.style.left = '50%';
    winWin.style.transform = 'translate(-50%, -50%)';
    winWin.style.zIndex = '-1';
    winWin.style.opacity = 0;
    winWin.innerHTML = ' ';
    winWin.style.fontSize = '20px';
    winWin.style.textAlign = 'center';
    winWin.style.paddingTop = '20px';
    winWin.style.width = '200px';
    winWin.style.height = '70px';
    winWin.style.border='2px solid #000000';

const windowInput = document.querySelector('#window');
    windowInput.style.opacity = 1;
    windowInput.style.position = 'absolute';
    windowInput.style.top='50%';
    windowInput.style.left = '50%';
    windowInput.style.transform = 'translate(-50%, -50%)';
    windowInput.style.zIndex = '1';
    windowInput.style.width = '250px';
    windowInput.style.height = '220px';
    windowInput.style.border = '2px solid rgba(0, 0, 0, 1)';
    windowInput.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    windowInput.style.boxShadow = '1px 5px 20px 10px rgba(0, 0, 0, 0.8)';

const userName = document.querySelector('#userName');
    userName.style.position = 'absolute';
    userName.style.top='40%';
    userName.style.left = '50%';
    userName.style.transform = 'translate(-50%, -50%)';
    userName.style.height = '40px';
    userName.style.width = '175px';
    userName.style.border = '2px solid rgba(0, 0, 0, 1)';
    userName.style.textAlign = 'center';
    userName.style.fontSize = '18px';
    userName.style.backgroundColor = 'rgba(255,255,255,0.750)';

const userButton = document.querySelector('#saveName');    
    userButton.style.position = 'absolute';
    userButton.style.top='60%';
    userButton.style.left = '50%';
    userButton.style.transform = 'translate(-50%, -50%)';
    userButton.style.backgroundColor='rgba(0, 0, 0, 0.6)';
    userButton.style.color='#ffffff';
    userButton.style.fontSize = '14px';
    userButton.style.width='90px';
    userButton.style.height='30px';
    userButton.style.transition = '0.3s';

userButton.addEventListener('mouseenter', ()=>{
        userButton.style.top='65%';
        userButton.style.width = '120px';
        userButton.style.height='50px';
        userButton.style.fontSize = '18px';
    });
userButton.addEventListener('mouseout', ()=>{
        userButton.style.top='60%';
        userButton.style.width = '90px';
        userButton.style.height='30px';
        userButton.style.fontSize = '14px';
    });

userButton.onclick=()=> {
    let nameU = userName.value;
    text1.innerHTML = nameU;
    windowInput.style.opacity = 0;
    windowInput.style.zIndex = '-1';
    form.style.filter ='blur(0px)';
    text1.style.fontSize ='20px';
    text1.style.padding ='30px';
    text1.style.border = '2px solid rgba(0, 0, 0, 0.6)';
}

const form = document.querySelector('#form');
    form.style.position = 'absolute';
    form.style.textAlign = 'center';
    form.style.top = '50%';
    form.style.left = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.backgroundColor='rgba(255, 255, 255, 0.450)';
    form.style.width='750px';
    form.style.height='500px';
    form.style.transition = '0.5s';
    form.style.boxShadow='5px 5px 5px rgba(0, 0, 0, 0.7)'
    form.style.filter ='blur(3px)';
/*
form.addEventListener('mouseenter', ()=>{
        form.style.boxShadow='10px 10px 10px rgba(0, 0, 0, 0.4)'
        form.style.width = '800px';
        form.style.height='520px';
    });
form.addEventListener('mouseout', ()=>{
        form.style.boxShadow='5px 5px 5px rgba(0, 0, 0, 0.7)'
        form.style.width = '750px';
        form.style.height='500px';
    });
*/
const button = document.querySelector('#buttonr');
    button.style.position = 'absolute';
    button.style.top='50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.style.backgroundColor='rgba(0, 0, 0, 0.8)';
    button.style.color='#ffffff';
    button.style.fontSize = '16px';
    button.style.width = '100px';
    button.style.height='50px';
    button.style.transition = '0.3s';

button.addEventListener('mouseenter', ()=>{
        button.style.width = '150px';
        button.style.height='70px';
        button.style.fontSize = '25px';
    });
button.addEventListener('mouseout', ()=>{
        button.style.width = '100px';
        button.style.height='50px';
        button.style.fontSize = '16px';
    });

button.onclick=()=>{
        let randomNumber1 = Math.random() * (10 - 1) + 1;
        number1.innerHTML = randomNumber1.toFixed(0);
        let randomNumber2 = Math.random() * (10 - 1) + 1;
        number2.innerHTML = randomNumber2.toFixed(0);
        if(randomNumber1 > randomNumber2){
            value1++;
        } else if(randomNumber2 > randomNumber1){
            value2++;
        }
        count1.innerHTML = value1;
        count2.innerHTML = value2;
        if(value1 === 3){
            winWin.innerHTML = 'Ви перемогли!!!';
            winWin.style.backgroundColor = 'rgba(0, 255, 0, 0.4)';
            winWin.style.zIndex = '1';
            winWin.style.opacity = 1;

            number1.innerHTML = ''; 
            number2.innerHTML = '';
            value1 = 0; 
            value2 = 0; 
            count1.innerHTML = value1;
            count2.innerHTML = value2;

            setTimeout(() => {
                winWin.style.zIndex = '-1';
                winWin.style.opacity = 0;
            }, 2000);
        } else if (value2 === 3){
            winWin.innerHTML = 'Ви програли:(';
            winWin.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
            winWin.style.zIndex = '1';
            winWin.style.opacity = 1;

            number1.innerHTML = ''; 
            number2.innerHTML = ''; 
            value1 = 0; 
            value2 = 0; 
            count1.innerHTML = value1;
            count2.innerHTML = value2;

            setTimeout(() => {
                winWin.style.zIndex = '-1';
                winWin.style.opacity = 0;
            }, 2000);
        }
    };

const panel1 = document.querySelector('#panel1');
    panel1.style.position = 'absolute';
    panel1.style.top='50%';
    panel1.style.left = '14.9%';
    panel1.style.transform = 'translate(-50%, -50%)';
    panel1.style.backgroundColor='rgba(0, 125, 255, 0.3)';
    panel1.style.width='30%';
    panel1.style.height='100%';

const panel2 = document.querySelector('#panel2');
    panel2.style.position = 'absolute';
    panel2.style.top='50%';
    panel2.style.left = '85%';
    panel2.style.transform = 'translate(-50%, -50%)';
    panel2.style.backgroundColor='rgba(125, 0, 125, 0.4)';
    panel2.style.width='30%';
    panel2.style.height='100%';

const text1 = document.querySelector('#text1');
    text1.innerHTML = '';

const text2 = document.querySelector('#text2');
    text2.innerHTML = 'Комп\'ютер';
    text2.style.fontSize ='20px';
    text2.style.padding ='30px';
    text2.style.border = '2px solid rgba(0, 0, 0, 0.6)';

const count1 = document.querySelector('#count1');
    count1.innerHTML = 0;
    let value1 = 0;

const count2 = document.querySelector('#count2');
    count2.innerHTML = 0;
    let value2 = 0;

const count = document.querySelectorAll('.count');    
count.forEach((item)=>{
    item.style.position = 'absolute';
    item.style.top='40%';
    item.style.left = '50%';
    item.style.transform = 'translate(-50%, -50%)';
    item.style.paddingTop = '30px';
    item.style.width = '98%';
    item.style.height = '20%';
    item.style.fontSize = '30px';
    item.style.border = '2px solid rgba(0,0,0,0.5)';
});

const number = document.querySelectorAll('.number');  
number.forEach((item)=>{
    item.style.position = 'absolute';
    item.style.top='86%';
    item.style.left = '50%';
    item.style.transform = 'translate(-50%, -50%)';
    item.style.paddingTop = '35px';
    item.style.width = '98%';
    item.style.height = '20%';
    item.style.fontSize = '30px';
    item.style.border = '2px solid rgba(0,0,0,0.5)';
});