function Search() 
{
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  //Modify 'INDEX' so that it matches the name of the sheet where the Index is located.
  var INDEXsheet = Spreadsheet.getSheetByName("INDEX");
  var INDEXdataRange = INDEXsheet.getDataRange();
  var INDEXvalues = INDEXdataRange.getValues();
  
  //Modify 'DB' so that it matches the name of the sheet where the Database is located
  var DBsheet = Spreadsheet.getSheetByName("DB");
  var DBdataRange = DBsheet.getDataRange();
  var DBvalues = DBdataRange.getValues();
  
  var content = INDEXsheet.getRange(INDEXsheet.getActiveSelection().getA1Notation()).getValue(); 
  
  //Modify target_column_numeric so that it matches the number of the column where the text that you're looking for is located. Being '0' the first column, '1' the second and so on.
  var target_column_numeric = 1
  
  //Modify target_column_alphabetic so that it matches the column where the text that you're looking for is located.
  var target_column_alphabetic = "B"
  
  for (var i = 0; i < DBvalues.length; i++) {  
    if (DBvalues[i][target_column_numeric] == content) {
      Spreadsheet.setActiveSheet(DBsheet).setActiveSelection(target_column_alphabetic+(i+1));
      DBsheet.hideRows(1, i);
      DBsheet.showRows(1, i);
    }
  }
}
