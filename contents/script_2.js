let fadeIns = document.querySelectorAll('.fadein-before');

for (let i = 0; i < fadeIns.length; i++){
    window.addEventListener('scroll', ()=>{
        const elmTop = fadeIns[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = elmTop + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight){
            fadeIns[i].classList.add('fadein-after');
        }
        else{
            fadeIns[i].classList.remove('fadein-after');
        }
    })
};


