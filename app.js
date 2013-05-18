chrome.windows.create({url:'http://www.spotify.com',type:'detached_panel',width:300,height:400});
chrome.windows.onCreated.addListener(function (e) {console.log(e);});