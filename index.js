const list =document.querySelectorAll('li');
for(let i =0;i<list.length;i++){
  console.log(list[i].innerText)
  list[i].addEventListener("mouseover",function(){
    list[i].classList.add("text");
  })
}