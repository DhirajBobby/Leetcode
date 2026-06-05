async function getProblemInfo() {
  const slug = location.pathname.split('/problems/')[1].split('/')[0];

  const response = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query getQuestion($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
          questionFrontendId
          title
          topicTags { slug }
          content
        }
      }`,
      variables: { titleSlug: slug }
    })
  });

  const data = await response.json();
  const q = data.data.question;

  // Convert topic tags to obsidian hashtags
  const tags = q.topicTags.map(t => `#${t.slug.replace(/-/g, '')}`).join(' ');

  // Parse HTML content into markdown
  const parsed = parseContent(q.content);

  const noteContent = `## Problem
${tags}
${parsed}

## Solution
-- Write explanation here --

\`\`\`python
# paste your solution here
\`\`\``;

  return {
    slug: `${q.questionFrontendId}. ${q.title}`,
    content: noteContent
  };
}

function parseContent(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;

  tmp.querySelectorAll('style, script').forEach(el => el.remove());

  // Remove constraints section entirely
  const allStrong = tmp.querySelectorAll('strong');
  allStrong.forEach(el => {
    if (el.innerText.trim() === 'Constraints:') {
      let node = el.closest('p') || el.parentElement;
      // Remove everything from constraints heading to end
      while (node) {
        const next = node.nextSibling;
        node.remove();
        node = next;
      }
    }
  });

  let result = '';

  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (text.trim()) result += text;
      return;
    }

    const tag = node.tagName?.toLowerCase();

    if (tag === 'p') {
      const text = node.innerText.trim();
      if (!text) return;

      // Check if this paragraph contains an example
      if (/^Example \d+:/.test(text)) {
        result += '\n';
        const lines = text.split('\n');
        lines.forEach(line => {
          if (line.trim()) result += `\`${line.trim()}\`\n`;
        });
      } else {
        result += `${text}\n\n`;
      }
    } else if (tag === 'pre') {
      const lines = node.innerText.trim().split('\n');
      lines.forEach(line => {
        if (line.trim()) result += `\`${line.trim()}\`\n`;
      });
      result += '\n';
    } else if (tag === 'ul' || tag === 'ol') {
      // Skip — constraints already removed; any other lists kept as-is
      node.querySelectorAll('li').forEach(li => {
        result += `- ${li.innerText.trim()}\n`;
      });
      result += '\n';
    } else if (tag === 'strong' || tag === 'b') {
      result += `**${node.innerText}**`;
    } else if (tag === 'em' || tag === 'i') {
      result += `_${node.innerText}_`;
    } else if (tag === 'code') {
      result += `\`${node.innerText}\``;
    } else {
      node.childNodes.forEach(processNode);
    }
  }

  tmp.childNodes.forEach(processNode);

  // Clean up: max one blank line between paragraphs
  return result.trim().replace(/\n{3,}/g, '\n\n');
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getProblemInfo') {
    getProblemInfo()
      .then(data => sendResponse(data))
      .catch(() => sendResponse({ slug: null, content: null }));
    return true;
  }
});