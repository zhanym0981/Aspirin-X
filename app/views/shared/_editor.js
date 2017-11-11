var editor = ace.edit("editor")
var input = $('textarea[id="code_area"]').hide()
editor.$blockScrolling = Infinity
editor.setTheme("ace/theme/monokai")
editor.getSession().setUseSoftTabs(false)
editor.getSession().setMode("ace/mode/java")
editor.setShowPrintMargin(false)
editor.setOptions({fontSize: "14px"})