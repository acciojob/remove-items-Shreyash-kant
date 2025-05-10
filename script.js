//your JS code here. If required.
const selection  = document.getElementById("colorSelect");
const btn = document.getElementsByTagName("input")[0];
btn.addEventListener("click",()=>{
	const selectIndex = selection.selectedIndex;
	if(selectIndex!==-1){
		selection.remove(selectIndex);
	}
})