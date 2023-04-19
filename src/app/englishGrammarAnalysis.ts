import browser from 'webextension-polyfill';

export const englishGrammarAnalysis = async (query: string) => {
  const url = 'http://127.0.0.1:5000/render?sentence=' + query;
  await browser.tabs.create({ url });
  return;
};
