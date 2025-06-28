let arr=[]

function addition(){
    let a=document.querySelector('.js-id1').value;
    arr.push(a);
    for(let i=0;i < arr.length;i++){
        console.log(arr[i]);
    }
}