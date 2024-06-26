async function quicksort(start , end){
    if(start < end){
        // if we dont use await in function as javascript is asynchronous it will start calling below functions without completion of above functions
        const pivot = await partition(start , end);
        await quicksort(start , pivot-1);
        await quicksort(pivot+1 , end);
    }
}

async function partition(start , end){
    const pivot = array[end];
    let i = start-1;

    const bars = document.querySelectorAll('.bar');

    for(let j=start ; j < end ; j++){
        bars[j].style.backgroundColor = '#28a745';
        bars[end].style.backgroundColor = '#28a745';

        await new Promise((resolve)=>setTimeout(resolve , 15));

        if(array[j] < pivot){
            i++;
            swap(array , i , j);
            swapbars(i , j);
            createbar();
        }

        bars[j].style.backgroundColor = '';
        bars[end].style.backgroundColor = '';
    }

    swap(array , i+1 , end);
    swapbars(i+1 , end);
    createbar();

    return i+1;
}

async function quicksortutil(){
    const len = array.length;
    quicksort(0 , len-1);
    createbar();
}

let quick = document.querySelector('#btn-5 input');
quick.addEventListener('click' , quicksortutil);