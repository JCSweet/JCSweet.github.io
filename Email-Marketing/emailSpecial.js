
// *On load default to dark mode - add to applicable HTML file to enable behavior* 
// $( window ).on( "load", darkModeToggle());


// *Dark mode toggle*
function darkModeToggle() {
  $(".bgToggle").toggleClass("darkBgToggle");
  $(".copyToggle").toggleClass("darkCopyToggle");
  
}
