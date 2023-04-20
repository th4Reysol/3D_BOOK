let fadeIns_Odd = document.querySelectorAll('.fadein-before_Odd');
let fadeIns_Even = document.querySelectorAll('.fadein-before_Even');

for (let i = 0; i < fadeIns_Odd.length; i++){
    window.addEventListener('scroll', ()=>{
        const elmTop = fadeIns_Odd[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = elmTop + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight){
            fadeIns_Odd[i].classList.add('fadein-after_Odd');
        }
        else{
            fadeIns_Odd[i].classList.remove('fadein-after_Odd');
        }
    })
};
for (let i = 0; i < fadeIns_Even.length; i++){
    window.addEventListener('scroll', ()=>{
        const elmTop = fadeIns_Even[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = elmTop + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight){
            fadeIns_Even[i].classList.add('fadein-after_Even');
        }
        else{
            fadeIns_Even[i].classList.remove('fadein-after_Even');
        }
    })
};

// チェック部分
function validateData(){
    let csName = document.getElementById("csName");
    let csAddress = document.getElementById("csAddress");
    let csQuantity = document.getElementById("csQuantity");

    if(csName==""){
        window.alert("Provide Your Name.");
    }else if(csAddress==""){
        window.alert("Provide Your Address.");
    }else if(isNaN(csQuantity)){
        location.href = "./outcome/order.html";
    }else{
        window.alert("Provide Quantity.");
    }

}


