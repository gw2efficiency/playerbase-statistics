# playerbase-statistics

[![Build Status](https://img.shields.io/travis/gw2efficiency/playerbase-statistics.svg?style=flat-square)](https://travis-ci.org/gw2efficiency/playerbase-statistics)
[![Coverage Status](https://img.shields.io/codecov/c/github/gw2efficiency/playerbase-statistics/master.svg?style=flat-square)](https://codecov.io/github/gw2efficiency/playerbase-statistics)

> Calculate statistics and distributions of a value across the playerbase

*This is part of [gw2efficiency](https://gw2efficiency.com). Please report all issues in [the central repository](https://github.com/gw2efficiency/issues/issues).*

## Install

```
npm install gw2e-playerbase-statistics
```

## Usage

```js
const playerbaseStatistics = require('gw2e-playerbase-statistics')

// An **ordered** array of values with their playtime attached
let playerbase = [
  {value: 13, playtime: 5000},
  {value: 123, playtime: 123123}
]

playerbaseStatistics(playerbase)
// -> {leaderboard, statistics, graphData}
```

## Tests

```
npm test
```

## Licence

MIT
