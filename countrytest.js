function loadmx(){
   var url="https://newsapi.org/v2/top-headlines?country=mx&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
   var title
   // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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
     var urlink=information.articles[i].url;
     var img=information.articles[i].urlToImage;

     console.log(title);
     console.log(urlink);
     var image=document.createElement('img');
     var para=document.createElement("P");
     var link=document.createElement('a');
     image.setAttribute("src",img);
     image.setAttribute("width","300");
     image.setAttribute("height","300");
     image.setAttribute("alt","image");
     image.setAttribute("align","center");
     image.setAttribute("float","initial")



     link.setAttribute('href',urlink);
     link.setAttribute("style", "background-color:white;font-family: Arial Black; color:black; font-size:2em", );


     // var para2=document.createElement("Pa");
     link.innerHTML=title;
     para.innerHTML="";

     // para2.innerHTML="";

     document.body.appendChild(para);
     document.body.appendChild(image);
     // document.body.appendChild(para);
     document.body.appendChild(link);
     //document.getElementById('a').style.color="red";
     // document.body.appendChild(para2);

   }
  }
