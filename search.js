// seearchfunct
var search=document.getElementById('search')
var procontainer=document.querySelector('.procontainer')
var h3list=procontainer.querySelector('div')


search.addEventListener('keyup',function(){
    var enteredvalue = event.target.value.toUpperCase()
    console.log(enteredvalue)
    for(count=0;count<h3list;count=count+1)
    {
        var h3list=h3list[count].querySelector('h3').textContent

         if(h3list.toUpperCase().indexOf(enteredvalue)<0)
         {
             h3list[count].style.display='none'
         }
         else{
            h3list[count].style.display='block'
         }
    }       
    })