var checkbox=document.getElementsByName('tags')
var result=document.querySelector('.item h3')
skill=[]

checkbox[0].addEventListener('click',function(){
    if (checkbox[0].checked)
        {
            console.log('checked')
            skill.push(checkbox[0])
            
        }
    else{
        console.log('unchecked')
    }
})