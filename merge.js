const len = array.length;
async function mergesorthelper(start , end){
    if(start < end){
        const mid = Math.floor((start+end)/2);
        await mergesorthelper(start , mid);
        await mergesorthelper(mid+1 , end);
        await mergesort(start , end , mid);
    }
}
async function mergesort(start , end , mid){
    const bars = document.querySelectorAll('.bar');
    const array1 = array.slice(start , mid+1);
    const array2 = array.slice(mid+1 , end+1);

    let i=0,j=0,k=start;


    while(i<array1.length && j<array2.length){
        bars[start+i].style.backgroundColor = '#28a745';
        bars[mid+j+1].style.backgroundColor = '#28a745';

        await new Promise((resolve)=>setTimeout(resolve , 15));

        if(array1[i] <= array2[j]){
            array[k++] = array1[i++];
        }
        else{
            array[k++] = array2[j++];
        }
        createbar();
    }
    while(i<array1.length){
        bars[i].style.backgroundColor = '#28a745';
        array[k++] = array1[i++];
        createbar();
    }
    while(j<array2.length){
        bars[mid+j+1].style.backgroundColor = '#28a745';
        array[k++] = array2[j++];
        createbar();
    }

    for(let i=start ; i<=end ; i++){
        bars[i].style.backgroundColor = '';
    }
}
async function mergesortutil(){
    let len = array.length;
    mergesorthelper(0 , len-1);
}

let merge = document.querySelector('#btn-4 input');
merge.addEventListener('click' , mergesortutil);