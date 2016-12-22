function switchDefaults() {
  var defaults = {};
  defaults.swCss = HtmlService.createHtmlOutputFromFile("h_css_switchButton.html").getContent();
  defaults.swJs = HtmlService.createHtmlOutputFromFile("h_js_switchButton.html").getContent();
  return defaults; 
}
