function swap(arr , index1 , index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function swapbars(index1 , index2){
    const bars = document.querySelectorAll('.bar');
    let tempheight = bars[index1].style.height;
    bars[index1].style.height = bars[index2].style.height;
    bars[index2].style.height = tempheight;
}
async function bubblesort(){
    const bars = document.querySelectorAll('.bar');
    for(let i=0 ; i<array.length ; i++){
        for(let j=0 ; j<array.length - i - 1 ; j++){
            console.log(bars);
            bars[j].style.backgroundColor = '#28a745';
            bars[j+1].style.backgroundColor = '#28a745';

            await new Promise((resolve)=> setTimeout(resolve  , 0.4));

            if(array[j] > array[j+1]){
                swap(array , j , j+1);
                swapbars(j , j+1);
            }
        
            bars[j].style.backgroundColor = '';
            bars[j+1].style.backgroundColor = '';

            createbar();
        }
    }
}
let bubble = document.querySelector('#btn-1 input');
bubble.addEventListener('click' , bubblesort);