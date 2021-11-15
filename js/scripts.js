function menuToggle(){
  var x = document.getElementById("myNavtoggle");//Searches doc for elem with ID provided
  //Hide menu
  if (x.className === "navtoggle"){
    x.className += " responsive";//Adds classname 'responsive' to classname of x
  }else {
    x.className = "navtoggle";
  }
}
