async function insertionsort(){
    console.log(10);
    const bars = document.querySelectorAll('.bar');
    const len = array.length;
    
    for(let i = 1 ; i < len ; i++){
        
        let temp = array[i];
        let j = i-1;

        bars[i].style.backgroundColor = '#28a745';

        while(j >= 0 && array[j] > temp){
            
            bars[j].style.backgroundColor = '#28a745';
            bars[j+1].style.backgroundColor = '#28a745';

            await new Promise((resolve)=>setTimeout(resolve , 0.4));

            array[j+1] = array[j];
            swapbars(j+1 , j);

            bars[j].style.backgroundColor = '';
            bars[j+1].style.backgroundColor = '';
            
            j--;
        }
        array[j+1] = temp;
        bars[i].style.backgroundColor = '';
        createbar();
    }
}

let insertion = document.querySelector('#btn-3 input');
insertion.addEventListener('click' , insertionsort);