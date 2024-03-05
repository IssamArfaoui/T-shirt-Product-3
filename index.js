
let images = document.querySelector('.images').children;
let template = document.querySelector('.template');


for (let i=0 ; i<images.length; i++) {
    images[i].addEventListener('click' , function() {
       template.src=images[i].src;
    })
}
let moins = document.querySelectorAll('.moins')

let info = document.querySelectorAll('.information');
let b = document.querySelectorAll('.information b')


for (let i=0; i<info.length; i++) {

    info[0].addEventListener('click' , function() {
        if (info[i].classList.toggle('open')) {
            b[0].style.display='block';
            moins[0].style.display='none';
        }
        else {
            b[0].style.display='';
            moins[0].style.display='';
        }
    })
    info[1].addEventListener('click' , function() {
        if (info[i].classList.toggle('open')) {
            b[1].style.display='block';
            moins[1].style.display='none';
        }
        else {
            b[1].style.display='';
            moins[1].style.display='';
        }
    })
    info[2].addEventListener('click' , function() {
        if (info[i].classList.toggle('open')) {
            b[2].style.display='block';
            moins[2].style.display='none';
        }
        else {
            b[2].style.display='';
            moins[2].style.display='';
        }
    })
}

let size = document.querySelector('.size').children;

for (let i=0; i<size.length; i++) {
    size[i].addEventListener('click',function() {
        for(let j=0; j<size.length;j++) {
            size[j].style.cssText=`
            background-color:'' ;
            color:'' ;
            border: '' ;
            `
        }
        size[i].style.cssText=`
        background-color: black;
        color: white;
        border: none ;
        `
    })
}



