let array=[];
function generatenumber(){
    array = [];
    for(let i=0 ; i<100 ; i++){
        let number = Math.floor(1+(100-1)*Math.random());
        array.push(number);
    }
    return array;
}

function createbar(){
    let sequence = document.getElementById('sequence');
    sequence.innerHTML = ``;
    
    array.forEach(number=>{
        const singlebar = document.createElement('div');
        singlebar.classList.add('bar');
        
        if(number <= 25){
            singlebar.classList.add('color1');
        }
        else if (number > 25 && number <= 50){
            singlebar.classList.add('color2');
        }
        else if (number > 50 && number <= 75){
            singlebar.classList.add('color3');
        }
        else {
            singlebar.classList.add('color4');
        }

        singlebar.style.height = `${number*3}px`;
        sequence.appendChild(singlebar);
    });
}

array = generatenumber();
createbar();

let newbtn = document.querySelector('#btn-6 input');

newbtn.addEventListener('click' , newseq);
function newseq(){
    array = generatenumber();
    createbar();
}