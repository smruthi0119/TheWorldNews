// function hide(elementId){
//   document.getElementById("id1").style.display="none";
//   document.getElementById("id2").style.display="none";
//   document.getElementById("id3").style.display="none";
//   document.getElementById("id4").style.display="none";
//   document.getElementById(elementId).style.display="block";
//
//   var x=document.getElementById("myDIV");
//   var displayset=x.style.display;
//   if(displayset=="block"){
//     x.style.display='none';
//   }
//   else{
//     x.style.display="block";
//   }
// function openCity(event,name){
//   var i,tabcontent,tablinks;
//   tabcontent=document.getElementsByClassName("tabcontent");
//     for (i=0;i<tabcontent.length;i++){
//       tabcontent[i].style.display="none";
//     }
//   tablinks=document.getElementsByClassName("tablinks");
//   for(i=0;i<tablinks.length;i++){
//     tablinks[i].className=tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(name).style.display="block";
//   evt.currentTarget.className+=" active";
// }

function load(){
  var url="https://newsapi.org/v2/top-headlines?country=us&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
  var title;
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
    var para2=document.createElement("Pa");
    var para3=document.createElement("Par");
    var link=document.createElement('a');
    image.setAttribute("src",img);
    image.setAttribute("width","300");
    image.setAttribute("height","300");
    image.setAttribute("alt","image");
    image.setAttribute("align","center");
    image.setAttribute("float","initial");
    image.setAttribute("style","padding:20px;");
    //document.getElementById("img").style.padding="100px 10px 20px 30px";



    link.setAttribute('href',urlink);
    link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;", );

    // var para2=document.createElement("Pa");
    link.innerHTML=title;
    para.innerHTML="";
    // para2.innerHTML="";
    // para3.innerHTML="";

    // para2.innerHTML="";

    document.body.appendChild(para);
    document.body.appendChild(image);
    // document.body.appendChild(para);
    document.body.appendChild(link);
    //document.getElementById('a').style.color="red";
    // document.body.appendChild(para2);

  }
}

  function loaduk(){

     var url="https://newsapi.org/v2/top-headlines?country=gb&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
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
       image.setAttribute("style","padding:20px;");



       link.setAttribute('href',urlink);
       link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;", );



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

    function loadaus(){


       var url="https://newsapi.org/v2/top-headlines?country=au&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
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
         image.setAttribute("style","padding:20px;");


         link.setAttribute('href',urlink);
         link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;", );



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
      function loadindia(){
         var url="https://newsapi.org/v2/top-headlines?country=in&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
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
           image.setAttribute("style","padding:20px;");



           link.setAttribute('href',urlink);
           link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;");


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
               image.setAttribute("float","initial");
               image.setAttribute("style","padding:20px");



               link.setAttribute('href',urlink);
               link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;");


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
          // function loadsa(){
          //    var url="https://newsapi.org/v2/top-headlines?country=za&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
          //    var title
          //    // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
          //    var Request=new XMLHttpRequest();
          //    Request.open('GET',url, false);
          //    Request.send();
          //
          //
          //    if(Request.readyState!=4 ||  Request.status!= 200 || Request.responseText===""){
          //    window.console.error("Request had an error");
          //    return;
          //    }
          //    var information=JSON.parse(Request.responseText);
          //    for (var i=0;i<9;i++){
          //      var title= information.articles[i].title;
          //      var urlink=information.articles[i].url;
          //      var img=information.articles[i].urlToImage;
          //
          //      console.log(title);
          //      console.log(urlink);
          //      var image=document.createElement('img');
          //      var para=document.createElement("P");
          //      var link=document.createElement('a');
          //      image.setAttribute("src",img);
          //      image.setAttribute("width","300");
          //      image.setAttribute("height","300");
          //      image.setAttribute("alt","image");
          //      image.setAttribute("align","center");
          //      image.setAttribute("float","initial");
          //      image.setAttribute("style","padding:20px;");
          //
          //
          //
          //      link.setAttribute('href',urlink);
          //      link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;", );
          //
          //
          //      // var para2=document.createElement("Pa");
          //      link.innerHTML=title;
          //      para.innerHTML="";
          //
          //      // para2.innerHTML="";
          //
          //      document.body.appendChild(para);
          //      document.body.appendChild(image);
          //      // document.body.appendChild(para);
          //      document.body.appendChild(link);
          //      //document.getElementById('a').style.color="red";
          //      // document.body.appendChild(para2);
          //
          //    }
          //   }
            function loadca(){
               var url="https://newsapi.org/v2/top-headlines?country=ca&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
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
                 image.setAttribute("float","initial");
                 image.setAttribute("style","padding:20px;");



                 link.setAttribute('href',urlink);
                 link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;", );



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
              function loadcn(){
                 var url="https://newsapi.org/v2/top-headlines?country=cn&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
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
                   image.setAttribute("style","padding:20px;");



                   link.setAttribute('href',urlink);
                   link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;", );


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
                function loadfr(){
                   var url="https://newsapi.org/v2/top-headlines?country=fr&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
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
                     image.setAttribute("style","padding:20px;");

                     function myfunction(){
                       var x= document.getElementById('a');
                       if(x.style.display=="none"){
                         x.style.display="block";
                       }
                       else{
                         x.style.display="none";
                       }
                     }

                     link.setAttribute('href',urlink);
                     link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;", );


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
                  function loadil(){
                     var url="https://newsapi.org/v2/top-headlines?country=il&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
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
                       image.setAttribute("style","padding:20px;");



                       link.setAttribute('href',urlink);
                       link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;", );



                       // var para2=document.createElement("Pa");
                       link.innerHTML=title;
                       para.innerHTML="";

                       // para2.innerHTML="";
                       document.body.appendChild(para);
                       document.body.appendChild(para);
                       document.body.appendChild(image);
                       // document.body.appendChild(para);
                       document.body.appendChild(link);
                       //document.getElementById('a').style.color="red";
                       // document.body.appendChild(para2);

                     }
                   }

                   function loadenter(){
                     var url="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=32da0e5f7f6f418ba0dc4ad64e712c4c";
                     var title;
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
                       image.setAttribute("style","padding:20px;");



                       link.setAttribute('href',urlink);
                       link.setAttribute("style", "background-color:none;font-family: Garmond; color:black; font-size:30px; text-align:center;", );


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
            // window.onload=function refresh (){
            //   document.getElementById("btn").click();
            // }
