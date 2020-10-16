If you have ever worked as a Player Support Agent, I'm pretty sure you have noticed that all the prefabs tend to be stored in the same Spreadsheet. This presents a few inconveniences that cause the list to never stop increasing. The most important inconveniences are:
 <br /> <br />
&nbsp;&nbsp;&nbsp;&nbsp;- It takes too long for the Team Leads to go through all the prefabs in order to remove the unnecesary ones.<br />
&nbsp;&nbsp;&nbsp;&nbsp;- It's very likely to end up entering duplicate as well as unnecesary prefabs. 
 <br /> <br />
At certain point you will have to spend long time in order to find the prefab that works better for a specific situation. When I realized about this issue, I thought it would be a good idea to create an Index of prefabs - and these two Scripts allowed me to find the prefab I needed as fast as possible, given the Index. In order to make them work, the Spreadsheet needs to have these two Sheets:
 <br /> <br />
&nbsp;&nbsp;&nbsp;&nbsp;1. <code>INDEX</code>: On this Sheet you will have two columns:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Column B - Categories.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Column D - Index. The name of the prefabs should be listed under the category they belong to. <br />
&nbsp;&nbsp;&nbsp;&nbsp;2. <code>DB</code>: On this Sheet you will have the following columns:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Column B - A copy of the column 1b.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Column C, D, E... - Prefabs. One column per language.<br />
  
   <br /> <br />
As soon as the Spreadsheet is ready to be used. Two buttons should be added to the Sheet called <code>INDEX</code>. <br />
  &nbsp;&nbsp;&nbsp;&nbsp;- Scroll: If you select a category, located on the column 1a, using the button will save you scrolling time - by taking you to the row where the prefabs, that belong to that category, are located. <br />
  &nbsp;&nbsp;&nbsp;&nbsp;- Search: If you select a prefab, located on the column 1b, using the button will take you to the Sheet where the Database is located and will scroll to the row where that specific prefab is located. 
   <br /> <br />
