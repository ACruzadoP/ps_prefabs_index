function index_scroll() {
  
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  var INDEXsheet = Spreadsheet.getSheetByName("INDEX");
  var INDEXdataRange = INDEXsheet.getDataRange();
  var INDEXvalues = INDEXdataRange.getValues();
  
  var cel = INDEXsheet.getActiveSelection();
  var content = INDEXsheet.getRange(cel.getA1Notation()).getValue(); 
  
  for (var i = 0; i < INDEXvalues.length; i++) {  
    if (INDEXvalues[i][3] == content) {
      Spreadsheet.setActiveSheet(INDEXsheet).setActiveSelection("D"+(i+1));
      INDEXsheet.hideRows(1, i);
      INDEXsheet.showRows(1, i);
    }
  }
  
}