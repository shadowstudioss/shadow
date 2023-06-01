//this is a app ive been working on for a while now.
changeScreen("Screen.Loading");
setTimeout(function() {
  changeScreen("Welcome_Back");

}, 1000);

//Notification screen button
onEvent("Notifications", "click", function( ) {
  changeScreen("Notifications.screen");
});
onEvent("Notifications3", "click", function( ) {
  changeScreen("Notifications.screen");
});
onEvent("Notifications4", "click", function( ) {
  changeScreen("Notifications.screen");
});
onEvent("Notifications5", "click", function( ) {
  changeScreen("Notifications.screen");
});

//Home screen button
onEvent("Home2", "click", function( ) {
  myFunction();

  changeScreen("Home.screen");
});
onEvent("Home3", "click", function( ) {
 myFunction();

  changeScreen("Home.screen");
});
onEvent("Home4", "click", function( ) {
 myFunction();

  changeScreen("Home.screen");
});
onEvent("Home5", "click", function( ) {
 myFunction();

  changeScreen("Home.screen");
});

//Messages screen button
onEvent("Messages", "click", function( ) {
  changeScreen("Messages.screen");
});
onEvent("Messages2", "click", function( ) {
  changeScreen("Messages.screen");
});
onEvent("Messages4", "click", function( ) {
  changeScreen("Messages.screen");
});
onEvent("Messages5", "click", function( ) {
  changeScreen("Messages.screen");
});

//Settings screen button
onEvent("Settings", "click", function( ) {
  changeScreen("Settings.screen");
});
onEvent("Settings2", "click", function( ) {
  changeScreen("Settings.screen");
});
onEvent("Settings3", "click", function( ) {
  changeScreen("Settings.screen");
});
onEvent("Settings5", "click", function( ) {
  changeScreen("Settings.screen");
});

//notify
function notif(content, func) {
setTimeout(function() {
  var elName = "notif" + randomNumber(0,999999999);
  textLabel(elName, "");
  setStyle(elName, "background: white; border: 2px solid rgba(0, 0, 0, 0.2); backdrop-filter: blur(10px); border-radius: 5px; padding: 5px; opacity: 0; width: 310px; color: black; font-family: Tahoma, sans-serif; font-size: 15px; position: absolute;");
  setPosition(elName, 5, -100);
  innerHTML(elName, content);
  var _a;
  setTimeout(function () {
    setStyle(elName, "transition: 0.6s;");
    setTimeout(function () {
      setPosition(elName, 5, 20);
      setStyle(elName, "opacity: 1;");
      _a = setTimeout(function () {
        setStyle(elName, "opacity: 0;");
        setPosition(elName, 5, 100);
        setTimeout(function () {
          deleteElement(elName);
        }, 200);
      }, 3000);
    }, 16);
  }, 16);
  onEvent(elName, "click", function () {
    if (typeof func == "function") {
      func();
    } else {
      clearTimeout(_a);
      setStyle(elName, "opacity: 0;");
      setPosition(elName, 100, 5);
      setTimeout(function () {
        deleteElement(elName);
      }, 200);
    }
  });  
 }, 200);
  
 
}

//Manage screen button
onEvent("Manage", "click", function( ) {
  changeScreen("Manage.screen");
});
onEvent("Manage2", "click", function( ) {
  changeScreen("Manage.screen");
});
onEvent("Manage3", "click", function( ) {
  changeScreen("Manage.screen");
});
onEvent("Manage4", "click", function( ) {
  changeScreen("Manage.screen");
});

//screen switch animation (credits to @wutadam)
var currentScreen = "Background";
function changeScreen(screen) {
  setStyle(currentScreen, "transition: 0.3s ease-in;");
  setStyle(screen, "transition: 0s;");
  setTimeout(function () {
    setStyle(currentScreen, "transform: translateX(50px); opacity: 0;");
    setStyle(screen, "transform: translateX(-50px); opacity: 0;");
    setTimeout(function () {
      setScreen(screen);
      setStyle(currentScreen, "transition: 0s;");
      setStyle(screen, "transition: 0.3s ease-out;");
      setTimeout(function () {
        setStyle(screen, "transform: scale(1); opacity: 1;");
        currentScreen = screen;
      }, 1);
    }, 100);
  }, 1);
}
onEvent("Retry", "click", function( ) {
  changeScreen("Screen.Loading");
  setText("BTN.Login","Login");
 setTimeout(function() {
    changeScreen("Welcome_Back");
  }, 1000);
   
});


//login stuff....
onEvent("BTN.Login", "click", function( ) {
  setText("BTN.Login","Loading...");
});
onEvent("BTN.Login", "click", function( ) {
 readRecords("Users", {Username:getText("Username"),Password:getText("Password")}, function(records) {
    if(records.length>0){
   changeScreen("checking.screen");
setTimeout(function() {
 notif("Logged in.");

   changeScreen("Home.screen");

  
}, 1000);
 
    }else{
   changeScreen("checking.screen");
 setTimeout(function() {
notif("Failed to login.");

   changeScreen("Error.screen");
 }, 1000);
 
    
    }
  });
   
    
  
  
});
myFunction();
onEvent("button9", "click", function( ) {
  myFunction();
  changeScreen("Home.screen");
});

function loadTeam(idcode) {
 readRecords("Groups", {id:idcode}, function(records) {
if(records.length>0){
  changeScreen("Team");
  setText("label14",records[0].name);
        setStyle("label14", "background: linear-gradient(45deg, " + records[0].color1 + ",black");
loadChats(idcode);
teamid=idcode;
  
}
    
  });
   
}

onEvent("button3", "mouseover", function( ) {
  setProperty("button3","background-color","#545151");
});
onEvent("button3", "mouseout", function( ) {
  setProperty("button3","background-color","gray");
});
onEvent("button4", "mouseover", function( ) {
  setProperty("button4","background-color","#545151");
});
onEvent("button4", "mouseout", function( ) {
  setProperty("button4","background-color","gray");
});

var teamid;
function addGroup(id) {
teamid="";
 var html="";
  teamid=id;
  var elName = "group" + randomNumber(0, 99999999999);
  textLabel(elName, "");
  setParent(elName, "Groups");
  readRecords("Groups", {id: id}, function (rec) {
    if (rec != null) {
      if (rec.length > 0) {
  setStyle(elName,"display: block;height:30px; width: calc(100% - 10px); border-radius: 5px; padding: 5px;  border: 2px solid white; cursor: pointer; font-family: Tahoma, Verdana; color: white; font-size: 15px;");
        setStyle(elName, "background: linear-gradient(45deg, " + rec[0].color1 + ",black");

                 html += '<span style="color: white; font-weight: bold;"'+'>'+rec[0].name+'</span>';
                 html += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';

                 html += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +JSON.parse(            rec[0].members).length + ' Users'+'</span>';

                 html += '<span style="color: white; font-weight: bold;"'+'>'+rec[0].creator+'</span>';

        innerHTML(elName,html);
        onEvent(elName, "click", function () {
     loadTeam(id);
        });
      } else {
        deleteElement(elName);
      }
    } else {
    }
  });
}
onEvent("button7", "click", function( ) {
 setStyle("button5", "transition: 0.3s ease-in;");
   setStyle("label17", "transition: 0.3s ease-in;");
 setStyle("text_input1", "transition: 0.3s ease-in;");

      setStyle("button5", "transform: translateX(-290px); opacity: 0;");

    setStyle("button5", "transform: translateX(290px); opacity: 0;");
    setStyle("text_input1", "transform: translateX(-371px); opacity: 0;");

    setStyle("text_input1", "transform: translateX(371px); opacity: 0;");
       setStyle("label17", "transform: translateX(-370px); opacity: 0;");

    setStyle("label17", "transform: translateX(370px); opacity: 0;");
  
});
onEvent("button3", "click", function () {
if(getProperty("text_input1","hidden")==true){
showElement("button5");
showElement("text_input1");
showElement("text_area1");
showElement("label17");
}else{
  
hideElement("button5");
hideElement("text_input1");
hideElement("text_area1");
hideElement("label17");
}
});
onEvent("button5", "click", function( ) {
readRecords("D", {teamid:teamid}, function(records) {
if(getText("Username")==records[0].owner){
if(records.length>0){

updateRecord("D", {id:records[0].id,owner:records[0].owner,username:getText("Username"),teamid:records[0].teamid,text:getText("text_input1"),time:getTime()}, function(record) {
  
});

    



      
}
}else{
  
notif("Sorry, Only the owner can do this.");
 
}
    });


 
  
  
});

function myFunction() {
  setText("Groups","");
   readRecords("Groups", {}, function (rec) {
var user=rec[0];

        if (rec != null) {
          var valid = rec.filter(function (entry) {
            return (JSON.parse(entry.members).indexOf(user.id) >= 0);
          });
          for (var i in valid) {
            addGroup(valid[i].id);
          }
        } else {
        }
      });
}
function loadChats(id) {
readRecords("D", {teamid:id}, function(rec) {
 setText("text_area2","");
 var html2="";
  var html3="";

 var tm="";
  tm = "messages" + randomNumber(0, 99999999999);
  textLabel(tm, "");
  setParent(tm, "text_area2");
  var tm2="";
  tm2 = "messaghes" + randomNumber(0, 99999999999);
  textLabel(tm2, "");
  setParent(tm2, "text_area2");
if(rec.length>0){
     for (var i =0; i < rec.length; i++) {

  
  setStyle(tm,"display: block;height:80px; width: calc(100% - 10px); border-radius: 5px; padding: 5px;  border: 2px solid white; cursor: pointer; font-family: Tahoma, Verdana; color: white; font-size: 15px;");
  setStyle(tm2,"display: block;height:30px; width: calc(50% - 10px); border-radius: 5px; padding: 5px;  border: 2px solid white; cursor: pointer; font-family: Tahoma, Verdana; color: white; font-size: 15px;");

                 html2 += '<span style="color: white; font-weight: bold;"'+'>'+rec[i].username+" :"+'</span>';

                 html2 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';
                 html2 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';
                 html2 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';
                 html2 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';
                 html2 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';

                 html2 += '<span style="color: white; font-weight: bolf;font-size:16px;"'+'>'+rec[i].text+'</span>';
              html3 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';
                 html3 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';
                 html3 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';
                 html3 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';
                 html3 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +"     " + ' '+'</span>';

                 html3 += '<span style="color: white; font-weight: normal;"'+'>'+"                           "+"      " +"   " +rec[i].time + ' '+'</span>';

        innerHTML(tm,html2);
                innerHTML(tm2,html3);
   
  }
   
 
    }
  });
    
}

