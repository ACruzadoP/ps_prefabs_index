function Search() 
{
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  //Feel free to modify 'INDEX' so that it matches the name of the sheet where the Index is located.
  var INDEXsheet = Spreadsheet.getSheetByName("INDEX");
  var INDEXdataRange = INDEXsheet.getDataRange();
  var INDEXvalues = INDEXdataRange.getValues();
  
  //Feel free to modify 'DB' so that it matches the name of the sheet where the Database is located
  var DBsheet = Spreadsheet.getSheetByName("DB");
  var DBdataRange = DBsheet.getDataRange();
  var DBvalues = DBdataRange.getValues();
  
  var content = INDEXsheet.getRange(INDEXsheet.getActiveSelection().getA1Notation()).getValue(); 
  
  //Feel free to modify target_column_numeric so that its value matches the number of the column where the text that you're looking for is located. 
  //Being '0' the first column, '1' the second and so on.
  var target_column_numeric = 1
  
  //Feel free to modify target_column_alphabetic so that its value matches the column where the text that you're looking for is located.
  var target_column_alphabetic = "B"
  
  for (var i = 0; i < DBvalues.length; i++) {  
    if (DBvalues[i][target_column_numeric] == content) {
      Spreadsheet.setActiveSheet(DBsheet).setActiveSelection(target_column_alphabetic+(i+1));
      DBsheet.hideRows(1, i);
    }
  }
}
