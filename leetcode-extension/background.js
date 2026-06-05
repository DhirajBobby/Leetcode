chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'createNote') {
    const uri = `obsidian://new?vault=Leetcode&file=${encodeURIComponent('Questions/' + request.slug)}&content=${encodeURIComponent(request.content)}`;
    // Inject a script into the active tab to trigger the obsidian:// URI
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (obsidianUri) => { window.location.href = obsidianUri; },
        args: [uri]
      });
      sendResponse({ success: true, filename: `${request.slug}.md` });
    });

    return true;
  }
});