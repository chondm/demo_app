Event.observe(window, 'load', function() {
   focusFirstFormOnPage(null);


  function focusFirstFormOnPage(editor_name) {
    var editor = $(editor_name) || document;
    if (editor){
        var forms = editor.getElementsByTagName('form');
        if (forms && forms.length > 0)
            $(forms[0]).focusFirstElement();
    }
}
});
