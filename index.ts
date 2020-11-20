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

console.log(count(fakeMentions));

// Order

