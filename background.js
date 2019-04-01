browser.contextMenus.create({
    id: "spoiler-off",
    title: "Spoiler Off"
  });
  
  browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "spoiler-off") {
      browser.tabs.executeScript({
        file: "noSpoilers.js"
      });
    }
  });