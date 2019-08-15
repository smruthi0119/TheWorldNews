function load(){
  var url="https://newsapi.org/v2/top-headlines?country=us&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
  var title="";
  var Request=new XMLHttpRequest();
  Request.open('GET',url, false);
  Request.send();


  if(Request.readyState!=4 ||  Request.status!= 200 || Request.responseText===""){
  window.console.error("Request had an error");
  return;
  }
  var information=JSON.parse(Request.responseText);
  for (var i=0;i<9;i++){
    var title= information.articles[i].title;
    console.log(title);
    var para=document.createElement("P");
    para.innerHTML=title;
    document.body.appendChild(para);

  }
}
