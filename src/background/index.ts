import { englishGrammarAnalysis } from '../app/englishGrammarAnalysis';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'englishGrammarAnalysis',
    title: 'go grammar analysis',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (tab !== undefined) {
    switch (info.menuItemId) {
      case 'englishGrammarAnalysis': {
        const selectedText = info.selectionText !== undefined ? info.selectionText : '';
        const translatedText = await englishGrammarAnalysis(selectedText);
        console.log(translatedText);
        break;
      }
    }
  }
});

export {};
