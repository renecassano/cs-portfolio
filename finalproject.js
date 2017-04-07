var BestPicture = document.getElementById("BestPicture");
var BestLeadingActor = document.getElementById("BestLeadingActor");
var BestLeadingActress = document.getElementById("BestLeadingActress");
var BestDirector = document.getElementById("BestDirector");
var BestSupportingActor = document.getElementById("BestSupportingActor");
var BestSupportingActress = document.getElementById("BestSupportingActress");

var BestPictureInfo = document.getElementById("BestPictureInfo");
var BestLeadingActorInfo = document.getElementById("BestLeadingActorInfo");
var BestLeadingActressInfo = document.getElementById("BestLeadingActressInfo");
var BestDirectorInfo = document.getElementById("BestDirectorInfo");
var BestSupportingActorInfo = document.getElementById("BestSupportingActorInfo");
var BestSupportingActressInfo = document.getElementById("BestSupportingActressInfo");

//All of the preceding javascript lines are to establish different variables with var. 

BestPicture.addEventListener("click", function(){
  BestPictureInfo.className="";  
  BestLeadingActorInfo.className="hidden";  
  BestLeadingActressInfo.className="hidden";  
  BestDirectorInfo.className="hidden";  
  BestSupportingActorInfo.className="hidden";  
  BestSupportingActressInfo.className="hidden";  
})

BestLeadingActor.addEventListener("click", function(){
  BestLeadingActorInfo.className="";  
  BestPictureInfo.className="hidden";  
  BestLeadingActressInfo.className="hidden";  
  BestDirectorInfo.className="hidden";  
  BestSupportingActorInfo.className="hidden";  
  BestSupportingActressInfo.className="hidden";
})

BestLeadingActress.addEventListener("click", function(){
  BestLeadingActressInfo.className="";  
  BestPictureInfo.className="hidden";  
  BestLeadingActorInfo.className="hidden";  
  BestDirectorInfo.className="hidden";  
  BestSupportingActorInfo.className="hidden";  
  BestSupportingActressInfo.className="hidden";
})

BestDirector.addEventListener("click", function(){
  BestDirectorInfo.className="";  
  BestPictureInfo.className="hidden";  
  BestLeadingActorInfo.className="hidden";  
  BestLeadingActressInfo.className="hidden";  
  BestSupportingActorInfo.className="hidden";  
  BestSupportingActressInfo.className="hidden";
})

BestSupportingActor.addEventListener("click", function(){
  BestSupportingActorInfo.className="";  
  BestPictureInfo.className="hidden";  
  BestLeadingActorInfo.className="hidden";  
  BestLeadingActressInfo.className="hidden";  
  BestDirectorInfo.className="hidden";  
  BestSupportingActressInfo.className="hidden";
})

BestSupportingActress.addEventListener("click", function(){
  BestSupportingActressInfo.className="";  
  BestPictureInfo.className="hidden";  
  BestLeadingActorInfo.className="hidden";  
  BestLeadingActressInfo.className="hidden";  
  BestDirectorInfo.className="hidden";  
  BestSupportingActorInfo.className="hidden";
})


