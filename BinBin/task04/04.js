function rightIn(){
			var data=document.getElementById("text-input").value;
			var num_list=document.getElementById("num_list");
			var num=document.createElement("li");
			num.innerHTML=data;
			num_list.appendChild(num);
			console.log(num_list.childNodes.length);
		}
		function leftIn(){
			var data=document.getElementById("text-input").value;
			var num_list=document.getElementById("num_list");
			var num=document.createElement("li");
			num.innerHTML=data;
			var first_child=document.getElementById("num_list").firstChild;
			num_list.insertBefore(num,first_child);
			console.log(num_list.childNodes.length);
		}
		function leftOut(){
			var num_list=document.getElementById("num_list");
			if(num_list.childNodes.length!=0){
				var x=num_list.removeChild(num_list.childNodes[0]);
				alert("删除的元素是："+x.innerHTML);
				console.log(num_list.childNodes.length);
			}else{
				alert("没有元素了")
			}
		}
		function rightOut(){
			var num_list=document.getElementById("num_list");
			if(num_list.childNodes.length!=0){
				var x=num_list.removeChild(num_list.lastChild);
				alert("删除的元素是："+x.innerHTML);
				console.log(num_list.childNodes.length);
			}else{
				alert("没有元素了")
			}
		}
		function init(){
			document.getElementById("left-in").onclick=function(){
				leftIn();
			};
			document.getElementById("left-out").onclick=function(){
				leftOut();
			};
			document.getElementById("right-in").onclick=function(){
				rightIn();
			};
			document.getElementById("right-out").onclick=function(){
				rightOut();
			};
			document.getElementById("num_list").onclick=function(e){
				e = e || window.event;
     		 var t = e.target || e.srcElement;
     		 var tagName=t.tagName;
				if(tagName=="li"){
					num_list.removeChild(t);
				}
			}

		}
		init();