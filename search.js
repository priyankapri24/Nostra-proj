// search

var search=document.getElementById('search')
var products = document.querySelector(".products")
var items =products.querySelectorAll(".item")

search.addEventListener("keyup",()=>{
    var enteredValue = event.target.value.toUpperCase()
    for(count=0; count<items.length;count++) {
        if(items[count].textContent.toUpperCase().indexOf(enteredValue)<0){
            items[count].style.display = "none";
        } else {
            items[count].style.display = "block";
        }
    }
})


