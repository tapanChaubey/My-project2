let body=document.querySelector('body');
body.style.backgroundColor="grey";
let form=document.querySelector('form');


form.addEventListener('submit',function(e){
    e.preventDefault();
    const hight=parseInt(document.querySelector('#hight').value);
    const wight=parseInt(document.querySelector('#wight').value);
    const result=document.querySelector('#result');
    
    
    if(hight==''||hight<0||hight==isNaN(hight)){
        result.innerHTML=`please give me a valid ${hight}`;
    }
    else if(wight==''||wight<0||wight==isNaN(wight)){
        result.innerHTML=`please give me a valid ${wight}`;
    }
    else{
          let BMI=  (wight/((hight*hight)/10000)).toFixed(2);
          result.innerHTML=`<span>${BMI}</span>`;
    }

})

