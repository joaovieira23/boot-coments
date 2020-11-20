const puppeteer = require('puppeteer');

// Read the Instagram page

async function start() {

  async function loadMore(page, selector) {
    const moreButton = await page.$(selector);
    if (moreButton) {
      console.log("More");
      await moreButton.click()
      await page.waitFor(selector, { timeout: 5000 }).catch(() => { console.log("timeout") })
      await loadMore(page, selector)
    }
  }

  // Get the comments

  async function getComments(page, selector) {
    const comments = await page.$$eval(selector, users => users.map(user => {
      return user.innerText;
    }));
    return comments;
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/p/CH02abtp3vi/');

  await loadMore(page, '.dCJp8');
  const comments = await getComments(page, '.ZIAjV');

  console.log(comments);

}

// const fakeMentions = ['@joaovieira_98',
//   '@nasa',
//   '@cinema.magic',
//   '@filosofia__da__arte',
//   '@manualdoabc',
//   '@corinthians',
//   '@cinematobrasil',
//   '@adventurers',
//   '@umfilmemedisse',
//   '@faculdadeftt',
//   '@triptaminaworld',
//   '@charliebrownjr',
//   '@thegreatplanet',
//   '@nfl',
//   '@corinthians',
//   '@kingjames',
//   '@cristiano',
//   '@faculdadeftt',
//   '@teslamotors',
//   '@natgeo',
//   '@futurism',
//   '@intel',
//   '@spacex',
//   '@fi'
// ];
// Count repeated mentions

function count(mentions) {
  const count = {};

  mentions.forEach(mention => count[mention] = (count[mention] || 0) + 1);
  return count;
}

// Order

function sort(counted) {
  const entries = [];

  for (let prop in counted) {
    entries.push([prop, counted[prop]]);
  };

  const sorted = entries.sort((a, b) => { return b[1] - a[1] });
  console.log(sorted);
};

// sort(count(fakeMentions));
start();

