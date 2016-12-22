function onOpen(){
 SpreadsheetApp.getUi().createMenu("EdDialogue")
.addItem("openAccordian", "openAccordian") 
 .addItem("open On/Off", "openOnOff") 
 .addItem("resize", "resize") 
  .addItem("fixed", "testFixed") 
 .addToUi();
  
}

function openAccordian() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('h_accordian.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setTitle("title");
  //  html.setHeight(height).setWidth(width);
  ui.showSidebar(html);
}

function openOnOff() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('h_switchButton.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setTitle("title");
  //  html.setHeight(height).setWidth(width);
  ui.showSidebar(html);
}

function resize() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('re-size my dialogue.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
//  html.setTitle("title");
  html.setHeight(200).setWidth(300);
  ui.showModalDialog(html, "resize")
}

function testFixed() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('h_Fixed-header-footer.html');
  html.setTitle("Fixed");
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  ui.showSidebar(html);
}





function testAlert(){
  var returnFunction = "testAlertReturn"; 
  var text ="Add Item"; //(Optional)
  var title ="Enter the name of a new Item List"; //(Optional)
  var height = 100; //(Optional)
  var width = 250; //(Optional)
  var okTxt = "Ok"; //(Optional)
  var closeTxt = "Close"; //(Optional)
 alert(returnFunction, text, title, height, width, okTxt, closeTxt)
}

function testAlertReturn(){
  Logger.log("AlertRan");
  SpreadsheetApp.getActiveSpreadsheet().toast("AlertRan");
}





function testPrompt(){
  var returnFunction = "testPromptReturn"; 
  var text ="Add Item"; //(Optional)
  var title ="Enter the name of a new Item List"; //(Optional)
  var height = 150; //(Optional)
  var width = 250; //(Optional)
  var okTxt = "Ok"; //(Optional)
  var closeTxt = "Close"; //(Optional)
  var placeholder = "Shirts"; //(Optional)
 prompt(returnFunction, text, title, height, width, okTxt, closeTxt, placeholder)
}

function testPromptReturn(data){
  Logger.log(data);
  SpreadsheetApp.getActiveSpreadsheet().toast(data);
}


