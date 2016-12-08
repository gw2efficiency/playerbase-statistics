import stats from 'simple-statistics'
import round from 'round-to'
const playtimeHoursGroups = [
  [1, 500],
  [500, 1000],
  [1000, 2000],
  [2000, 4000],
  [4000]
]
const quantiles = [0.995, 0.99, 0.90, 0.80, 0.50, 0.25, 0.10, 0.01]

export default function playerbaseStatistics (playerbase) {
  let statistics = {}
  let graphData = {}

  // Sort the playerbase by ascending value and descending playtime which makes the leaderboards
  // use descending values (highest first) and ascending playtime (lowest first)
  playerbase = playerbase.slice().sort((a, b) => a.value - b.value || b.playtime - a.playtime)

  // Add a statistic & graph for a partial playerbase
  function pushPlayerbaseData (key, partialPlayerbaseValues) {
    statistics[key] = calculateStatistics(partialPlayerbaseValues)
    graphData[key] = calculateGraphData(partialPlayerbaseValues)
  }

  // Always add a key for the whole playerbase
  pushPlayerbaseData('all', playerbase.map(x => x.value))

  // Add a key each per playtime group
  playtimeHoursGroups.map(group => {
    let key = 'playtime' + (group.length === 1 ? group : group.join('to'))

    // Filter the entries that match the playtime group
    let partialPlayerbaseValues = playerbase
      .filter(x => {
        if (x.playtime < group[0] * 60 * 60) {
          return false
        }

        if (group[1] && x.playtime > group[1] * 60 * 60) {
          return false
        }

        return true
      })
      .map(x => x.value)

    // Calculate and push the data
    pushPlayerbaseData(key, partialPlayerbaseValues)
  })

  // Generate the leaderboard
  const leaderboard = playerbase.reverse().slice(0, 25).filter(x => x.value !== 0)

  // All calculations done, let's return!
  return {
    leaderboard,
    statistics,
    graphData
  }
}

function calculateStatistics (playerbase) {
  if (playerbase.length === 0) return {}

  // Get the basic statistics
  let statistics = {
    min: stats.minSorted(playerbase),
    max: stats.maxSorted(playerbase),
    mean: round(stats.mean(playerbase), 2),
    median: round(stats.medianSorted(playerbase), 2)
  }

  // Get the value for each quantile
  quantiles.map(quantile => {
    let key = 'quantile' + (quantile * 100).toString().replace('.', ',')
    statistics[key] = round(stats.quantileSorted(playerbase, quantile), 2)
  })

  return statistics
}

function calculateGraphData (playerbase) {
  if (playerbase.length === 0) return []

  // Generate 200 points for the graph, using 0.005 quantiles
  let points = []
  for (let i = 0; i <= 1; i += 0.005) {
    points.push(round(stats.quantileSorted(playerbase, i), 2))
  }

  return points
}
