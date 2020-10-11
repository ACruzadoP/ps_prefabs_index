function index_search() {
  
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  var DBsheet = Spreadsheet.getSheetByName("DB");
  var DBdataRange = DBsheet.getDataRange();
  var DBvalues = DBdataRange.getValues();
  
  var INDEXsheet = Spreadsheet.getSheetByName("INDEX");
  var INDEXdataRange = INDEXsheet.getDataRange();
  var INDEXvalues = INDEXdataRange.getValues();
  
  var cel = INDEXsheet.getActiveSelection();
  var content = INDEXsheet.getRange(cel.getA1Notation()).getValue(); 
  
  var range1 = DBsheet.getRange("D1:D"+ DBvalues.length);
  range1.setWrap(true);
  
  for (var i = 0; i < DBvalues.length; i++) {  
    if (DBvalues[i][1] == content) {
      Spreadsheet.setActiveSheet(DBsheet).setActiveSelection("B"+(i+1));
      DBsheet.hideRows(1, i);
      DBsheet.showRows(1, i);
    }
  }
  
}