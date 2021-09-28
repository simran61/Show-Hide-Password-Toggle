var password=document.querySelector('.password')
var toggleEye= document.querySelector('.toggleEye')

var state= false;

toggleEye.addEventListener('click',()=>{
    if(state){
        password.setAttribute('type','password')
        toggleEye.innerHTML='<i class="far fa-eye" id="eye"></i>'
        state = false;
    }
    else{
        password.setAttribute('type','text')
        toggleEye.innerHTML='<i class="far fa-eye-slash" id="eye"></i>'
        state = true;
    }
})
