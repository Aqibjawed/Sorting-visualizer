async function selectionsort(){
    const bars = document.querySelectorAll('.bar');
    const len = array.length;
    for(let i=0 ; i<len; i++){
        
        let mini = i;
        bars[i].style.backgroundColor = '#28a745';

        for(let j=i+1 ; j<len ; j++){
            bars[j].style.backgroundColor = '#28a745';
            await new Promise((resolve)=> setTimeout(resolve  , 0.4));

            if(array[mini] > array[j]){
                bars[mini].style.backgroundColor = '';
                mini = j;
                bars[mini].style.backgroundColor = '#28a745';
            }
            else{
                bars[j].style.backgroundColor = '';
            }

        }
        if(mini !== i){
            swap(array , i , mini);
            swapbars(i , mini);

            createbar();
        }
        bars[i].style.backgroundColor = '';
    }
}

let selection = document.querySelector('#btn-2 input');
selection.addEventListener('click' , selectionsort);