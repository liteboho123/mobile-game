//splashScreen
window.onload = function(){
document.addEventListener("deviceready", function(){
//navigator.splashscreen.show();
window.setTimeout(function(){
//navigator.splashscreen.hide();	
POP.init();
}, 8000);
});
};

