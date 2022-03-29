var menuUser = document.querySelector('.drop_nav-user')
var menuNof = document.querySelector('.drop_nav-notif')
var btnUser = document.querySelector('.nav-item.btn---user')
var btnBell = document.querySelector('.nav-item.btn-bell-nof')
btnUser.addEventListener('click',function(){
    menuUser.classList.toggle('hide')
})

btnBell.addEventListener('click',function(){
    menuNof.classList.toggle('hide')
})

var btnQl = document.querySelector('.nav_list_item.btn_ql')
var dropMenu = document.querySelector('.sub_list')
var iconArrow = document.querySelector('.bx.bx-chevron-right')

btnQl.addEventListener('click',function(){
    iconArrow.classList.toggle('rotate_90')
    dropMenu.classList.toggle('hide')
})
