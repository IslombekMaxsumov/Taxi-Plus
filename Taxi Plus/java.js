const title = document.querySelector('.site-ads_our-motto')
console.log(title.innerHTML)
const text = title.innerHTML
title.innerHTML = null


function str (x = 0){


     title.innerHTML = title.innerHTML + text[x]
     x++
     if(x < text.length){
        setTimeout(()   => {
            str(x)
        }, 80);
     }
 }

str()