// discountbox
var discountbox=document.querySelector('.discountbox')
var closead =document.getElementById('closead')
var navbar=document.querySelector('.navbar')

closead.addEventListener('click',function(){
    discountbox.style.display='none'
    navbar.style.top='0px'
})

// // sidenav
// var sidenav =document.querySelector('.sidenav')
// var navbar__goggle=document.querySelector('.navbar__goggle')
// var closesidenav=document.querySelector('.closesidenav')
// sidenav.style.display='none'

// navbar__goggle.addEventListener('click', function(){
//     sidenav.style.display='block'

// })
// closesidenav.addEventListener('click',function(){
//     sidenav.style.display='none'
// })



let icon=document.querySelector(".navbar__goggle")
let side_nav=document.querySelector(".sidenav")
let close_nav=document.querySelector(".closesidenav")


icon.addEventListener("click",()=>{

    side_nav.style.left="0%"

})

close_nav.addEventListener("click",()=>{

    side_nav.style.left="-60%"
    
})





// slider
var leftbtn = document.getElementById("leftbtn")
var rightbtn =document.getElementById("rightbtn")
var sliderimage= document.querySelector(".sliderimages")
var marg=0

console.log(leftbtn)

rightbtn.addEventListener("click",

    function(){
        marg=marg+100
    
        if(marg>200)
        {
            marg=0
            sliderimage.style.marginLeft=0;
        }
        else{
            sliderimage.style.marginLeft="-"+marg+"vw";
        }
    }
    )

leftbtn.addEventListener("click",

function(){

    if(marg==0)
    {
       
        marg=200
        sliderimage.style.marginLeft="-"+marg+"vw";
    }
    else{

        marg=marg-100
    sliderimage.style.marginLeft="-"+marg+"vw";
    }   
}
)
var like =document.getElementById('red')

like.addEventListener('click',function(){
    changeImage();
})
function changeImage(){
    image.src = './image/redheart.png';
}