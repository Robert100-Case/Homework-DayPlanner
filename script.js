//alert("js working");

//event.preventDefault();
var reformatDate = moment(/*"11/3/20", "MM-DD-YY"*/).format("dddd, MMMM Do YYYY, h a");
//alert(reformatDate);
var saveDate = moment(/*"11/3/20", "MM-DD-YY"*/).format("MMMM Do YYYY");
//alert(saveDate);
$("#3a").text(reformatDate);
//alert(reformDate);
//var hourString = moment().format("a");
//alert(hourstring);
//var hourNum = parseInt(hourString)

        //text area color
/*var hourString = moment().format("h a");
alert(hourString);
hourString="1 pm";
alert(hourString);
  var finishedString;
  var hourStrSplit = hourString.split(" ");
  var hourStrNum;
  //alert(hourStrSplit[1]);
  if(hourStrSplit[1] == "pm")
  {alert("pm, in if statement"); hourStrNum = parseInt(hourStrSplit[0]);
   hourStrNum = hourStrNum + 12;}
  else if(hourStrSplit[1]=="am"){alert("am in if statement");hourStrNum = parseInt(hourStrSplit[0]);
  }
  
  if(hourStrSplit[1]=="pm" && hourStrNum > 17 && hourStrNum < 24 )$('textarea').addClass('past');
  else if(hourStrSplit[1]=="am" && hourStrNum >= 1 && hourStrNum < 9 )$('textarea').addClass('future');
  //else { 
    /*var changeableHourStrNum = hourStrNum;
    //if(hourStrNum > 12) changeableHourStrNum-=12;
    prepareTextAreaIdString();
    $(finishedString).addClass('present');
    */
    /*changeableHourStrNum+=1;
    for(i=hourStrNum +1 ; i<= 17;i++){
    prepareTextAreaIdString();
    $(finishedString).addClass('future');
    changeableHourStrNum+=1;}
  */
    //changeableHourStrNum+=1;
    /*for(i=hourStrNum -1 ; i >=9 ;i--){
    prepareTextAreaIdString();
    $(finishedString).addClass('past');
    changeableHourStrNum-=1;}
    */
  //}
    
 
/*  function prepareTextAreaIdString()
  {
    if(hourStrSplit[1]=="pm") changeableHourStrNum-=12;
     var textAreaID = "dayPlan";
     var hashStr="#";
     var res = hourStrSplit[1].toUpperCase();
     //alert(res);
     var str = changeableHourStrNum.toString();
     alert("variable working" + str);
     var catStr1=hashStr.concat(textAreaID);
     var catStr2=str.concat(res);
     finishedString=catStr1.concat(catStr2);
     alert(finishedString);
     if(hourStrSplit[1]=="pm")changeableHourStrNum+=12;
    }
  */


              //storing hour plan
var dayPlanner= $('#dayPlan9AM');
dayPlanner.addClass('present');
$('button').click(function() {
  var saveID = $( this ).attr("id");
  var string1="dayPlan";var spl2 = string1.concat(saveID);
//alert("this is spl2" + spl2);
dayPlan  =document.getElementById (spl2).value;
        
var saveKey = saveDate.concat(saveID);
alert("This is key" + saveKey);

//alert(dayPlan);
localStorage.setItem(saveKey, dayPlan);
alert("this is stored value" + localStorage.getItem(saveKey));
  
  //alert( "Handler for .click() called." );
});

