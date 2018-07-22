window.onload=function(){
	let mid=document.getElementsByClassName("mid")[0];
	let top=mid.getElementsByClassName("top");
	let yuan=document.getElementsByClassName("yuan");
	for(let i=0;i<yuan.length;i++){
		yuan[i].onclick=function(){
			for(let j=0;j<yuan.length;j++){
				top[j].style.display="none";
				yuan[j].style.background="#666";
			}
			top[i].style.display="block";
			yuan[i].style.background="#000";
		}
	}



	let logo=document.getElementsByClassName("logo")[0];
	let box=logo.getElementsByClassName("box");
	let search=logo.getElementsByClassName("search");
	for(let i=0;i<search.length;i++){
		search[i+1].onmouseenter=function(){
			box[i].style.display="block";
		}
		search[i+1].onmouseleave=function(){
			box[i].style.display="none";
		}
	}
}