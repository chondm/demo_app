Event.observe(window, 'load', function() {
Event.observe('user_age', 'keypress', onMyTextKeypress);

function onMyTextKeypress(e){
  var key_code = [e.keyCode||e.which];
  if (key_code == 8 || key_code == 13 )  //this is to allow backspace and Enter
    return true;
	if (key_code < 48 || key_code > 57)

    e.preventDefault? e.preventDefault() : e.returnValue = false;
}
});