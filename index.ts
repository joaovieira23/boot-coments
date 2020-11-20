// Read the Instagram page
// Get the comments

const fakeMentions = ['@joaovieira_98',
  '@nasa',
  '@cinema.magic',
  '@filosofia__da__arte',
  '@manualdoabc',
  '@corinthians',
  '@cinematobrasil',
  '@adventurers',
  '@umfilmemedisse',
  '@faculdadeftt',
  '@triptaminaworld',
  '@charliebrownjr',
  '@thegreatplanet',
  '@nfl',
  '@corinthians',
  '@kingjames',
  '@cristiano',
  '@faculdadeftt',
  '@teslamotors',
  '@natgeo',
  '@futurism',
  '@intel',
  '@spacex',
  '@fi'
]
// Count repeated mentions

function count(mentions) {
  const count = {}

  mentions.forEach(mention => count[mention] = (count[mention] || 0) + 1);
  return count;
}

// console.log(count(fakeMentions));

// Order

function sort(counted) {
  const entries = []

  for (let prop in counted) {
    entries.push([prop, counted[prop]])
  }

  const sorted = entries.sort((a, b) => { return b[1] - a[1] })
  console.log(sorted);
}

sort(count(fakeMentions));

