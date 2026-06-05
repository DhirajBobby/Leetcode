const statusEl = document.getElementById('status');
const filenameEl = document.getElementById('filename');
const createBtn = document.getElementById('createBtn');

let problemSlug = null;
let problemContent = null;

// On popup open, ask the content script for the problem info
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];

  if (!tab.url || !tab.url.includes('leetcode.com/problems/')) {
    statusEl.textContent = 'Open a LeetCode problem page first.';
    statusEl.className = 'error';
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  }, () => {
    chrome.tabs.sendMessage(tab.id, { action: 'getProblemInfo' }, (response) => {
      if (chrome.runtime.lastError || !response || !response.slug) {
        statusEl.textContent = 'Could not read problem title. Try refreshing the page.';
        statusEl.className = 'error';
        return;
      }

      problemSlug = response.slug;
      problemContent = response.content;
      statusEl.textContent = 'Ready to create:';
      statusEl.className = '';
      filenameEl.textContent = `${problemSlug}.md`;
      filenameEl.style.display = 'block';
      createBtn.disabled = false;
    });
  });
});

// On button click, tell background to download the file
createBtn.addEventListener('click', () => {
  if (!problemSlug) return;

  createBtn.disabled = true;
  createBtn.textContent = 'Creating...';

  chrome.runtime.sendMessage({ action: 'createNote', slug: problemSlug, content: problemContent }, (response) => {
    if (response && response.success) {
      statusEl.textContent = `✓ Note created`;
      statusEl.className = 'success';
      filenameEl.textContent = response.filename;
      createBtn.textContent = 'Created!';
    } else {
      statusEl.textContent = 'Something went wrong.';
      statusEl.className = 'error';
      createBtn.disabled = false;
      createBtn.textContent = 'Create Note';
    }
  });
});
