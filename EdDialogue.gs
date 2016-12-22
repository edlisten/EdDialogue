/**
* function prompt(str)
* Opens a prompt using UI approved window
*
* @param {string} (Required) return function name
* @param {string} (optional) text of prompt
* @param {string} (optional) text of title
* @param {string} (optional) height of promp
* @param {string} (optional) width of prompt
* @param {string} (optional) primary button text
* @param {string} (optional) close button text
* @param {string} (optional) placeholder text for field
* @return {string} prompt result
*/

function prompt(returnFunction, text, title, height, width, okTxt, closeTxt, placeholder){
  if(!text){text = " ";}
  if(!title){title=" ";}
  if(!returnFunction){return "Error, no return function listed";}
  if(!height){height=400;}
  if(!width){width=400;}
  if(!okTxt){okTxt = "Ok";}
  if(!closeTxt){closeTxt = "Close";}
  if (!placeholder){placeholder = " ";}
  var ui = SpreadsheetApp.getUi();
  
  var htmlHead = '<!DOCTYPE html><html><head><base target="_top">' 
  + '<link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons.css">'
  + '<script>'
  + 'function ok(){document.getElementById("button").disabled = true; document.getElementById("okTxt").innerHTML = "Processing"; var val = document.getElementById("inputBox").value;  google.script.run.withSuccessHandler(close).'+returnFunction+'(val);} '
  + 'function onEnter(){if (event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {document.getElementById("button").click();}};};'
  + 'function close(){google.script.host.close();};'
  + '</script>';
  +'</head><body>';
    var htmlFoot = '</body></html>'
  + '<script>'
  + 'window.onload = function() { document.getElementById("inputBox").focus();};'  
  + '</script>';
  var htmlBody = '<p>'+text+'</p>'
  + '<p><input type="text" id="inputBox" onkeypress="return onEnter()" placeholder="'+placeholder+'"></p>'
  + '<p><button class="action" id="button" onClick="ok()"><span id="okTxt">'+okTxt+'</span></button><button onClick="google.script.host.close()">'+closeTxt+'</button>'
  + '</p>';
  
  var htmlContent =   htmlHead + htmlBody + htmlFoot;
  
  var html = HtmlService.createHtmlOutput(htmlContent);
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setHeight(height).setWidth(width);
  ui.showModalDialog(html, title);
}

/**
* function prompt(str)
* Opens a prompt using UI approved window
*
* @param {string} (Required) return function name
* @param {string} (optional) text of prompt
* @param {string} (optional) text of title
* @param {string} (optional) height of promp
* @param {string} (optional) width of prompt
* @param {string} (optional) primary button text
* @param {string} (optional) close button text
* @return {string} prompt result
*/
function alert(returnFunction, text, title, height, width, okTxt, closeTxt){
  if(!text){text = " ";}
  if(!title){title=" ";}
  if(!returnFunction){return "Error, no return function listed";}
  if(!height){height=200;}
  if(!width){width=200;}
  if(!okTxt){okTxt = "Ok";}
  if(!closeTxt){closeTxt = "Close";}
  var ui = SpreadsheetApp.getUi();
  
  var htmlHead = '<!DOCTYPE html><html><head><base target="_top">' 
  + '<link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons.css">'
  + '<script>'
  + 'function ok(){document.getElementById("button").disabled = true; document.getElementById("okTxt").innerHTML = "Processing"; google.script.run.withSuccessHandler(close).'+returnFunction+'();} '
  + 'function onEnter(){if (event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {document.getElementById("button").click();}};};'
  + 'function close(){google.script.host.close();};'
  + '</script>';
  +'</head><body>';
  var htmlFoot = '</body></html>'
  var htmlBody = '<p>'+text+'</p>'
  + '<p><button class="action" id="button" onClick="ok()"><span id="okTxt">'+okTxt+'</span></button><button onClick="google.script.host.close()">'+closeTxt+'</button>'
  + '</p>';
  
  var htmlContent =   htmlHead + htmlBody + htmlFoot;
  
  var html = HtmlService.createHtmlOutput(htmlContent);
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setHeight(height).setWidth(width);
  ui.showModalDialog(html, title);
}
