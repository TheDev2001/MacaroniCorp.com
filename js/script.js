let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
	menu.classlist.toggle('fa-times');
	header.classlist.toggle('active');
}

window.onscroll = () =>{
	menu.classlist.remove('fa-times');
	header.classlist.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
	cursor1.style.top = e.pageY + 'px';
	cursor1.style.left = e.pageY + 'px';
	cursor2.style.top = e.pageY + 'px';
	cursor2.style.left = e.pageY + 'px';
}