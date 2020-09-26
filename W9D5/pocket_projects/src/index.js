import warmUp from "./warmup";
import Clock from "./clock";
import dogs, { createDropDown, dogLinkCreator } from "./drop_down";
// debugger


window.onload = function () { 
   const clock = new Clock();
   dogLinkCreator()
   const dogDiv = document.getElementsByClassName('drop-down-dog-nav')[0]
   const dogUl = document.getElementsByClassName('drop-down-dog-list')[0]
   // debugger
   dogDiv.addEventListener('mouseenter', (e) => {
      // debugger
      let lis = document.getElementsByClassName('dog-link');
      lis = Array.from(lis);
      lis.forEach(element => {
         element.classList.toggle('dog-link')
         element.classList.toggle('hovered')
      });
      // let li = e.target;
      // li
      // li.style.textDecoration = 'line-through'
      // li.style.fontFamily = "Impact,Charcoal,sans-serif";
      
   })
   // const li = document.getElementsByClassName('hovered')
    dogDiv.addEventListener('mouseleave', (e) => {
      // debugger
      let lis = document.getElementsByClassName('hovered');
      lis = Array.from(lis);
      lis.forEach(element => {
         element.classList.toggle('hovered')
         element.classList.toggle('dog-link')
      });
   })

   dogUl.addEventListener('mouseenter',  (e) => {
      debugger
      let li = e.target;
      if ( li.className === 'hovered' ){
        li.style.textDecoration = 'line-through'
        li.style.fontFamily = "Impact,Charcoal,sans-serif";
        e.stopPropagation() 
    }
   })
   dogUl.addEventListener('mouseexit', (e) => {
      let li = e.target;
      li.style.textDecoration = ''
      li.style.fontStyle = ''
      e.stopPropagation() 
   })
   
 }