const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    await openBrowser();
    await goto("http://localhost:3000/");
    await write("taiko test automation");
    await click("SUBMIT");
    await closeBrowser();
})();