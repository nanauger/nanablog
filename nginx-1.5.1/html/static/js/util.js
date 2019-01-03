//商品规格选择
$("#ai-topsearch").click(function(){
	debugger
  var searchInput=$("#searchInput");
  var val=searchInput.val();
  if(val!=""&&val!=null){
  	var url=encodeURI("http://192.168.1.26:8080/wh/static/home/search.html?productName="+val);   
  	 window.location.href=url; 
  }
  
});




 


 