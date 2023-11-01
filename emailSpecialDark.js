
// *On load default to dark mode* 
$( window ).on( "load", darkModeToggle());


// *Dark mode toggle*
function darkModeToggle() {
  $(".bgToggle").toggleClass("darkBgToggle");
  $(".copyToggle").toggleClass("darkCopyToggle");
  
}
