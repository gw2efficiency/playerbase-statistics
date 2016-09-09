/* eslint-env node, mocha */
import {expect} from 'chai'
import module from '../src/index.js'

const testdata = [
  {value: 99999, playtime: 4000 * 60 * 60},
  {value: 123, playtime: 2 * 60 * 60},
  {value: 555, playtime: 10 * 60 * 60},
  {value: 0, playtime: 600 * 60 * 60},
  {value: 1, playtime: 600 * 60 * 60},
  {value: 2, playtime: 600 * 60 * 60},
  {value: 3, playtime: 600 * 60 * 60},
  {value: 4, playtime: 600 * 60 * 60},
  {value: 5, playtime: 600 * 60 * 60},
  {value: 6, playtime: 600 * 60 * 60},
  {value: 7, playtime: 600 * 60 * 60},
  {value: 8, playtime: 600 * 60 * 60},
  {value: 9, playtime: 600 * 60 * 60},
  {value: 10, playtime: 600 * 60 * 60},
  {value: 11, playtime: 600 * 60 * 60},
  {value: 12, playtime: 600 * 60 * 60},
  {value: 13, playtime: 600 * 60 * 60},
  {value: 14, playtime: 600 * 60 * 60},
  {value: 15, playtime: 600 * 60 * 60},
  {value: 16, playtime: 600 * 60 * 60},
  {value: 17, playtime: 600 * 60 * 60},
  {value: 18, playtime: 600 * 60 * 60},
  {value: 19, playtime: 600 * 60 * 60},
  {value: 20, playtime: 600 * 60 * 60},
  {value: 21, playtime: 600 * 60 * 60},
  {value: 22, playtime: 600 * 60 * 60},
  {value: 23, playtime: 600 * 60 * 60},
  {value: 24, playtime: 600 * 60 * 60},
  {value: 25, playtime: 600 * 60 * 60},
  {value: 26, playtime: 600 * 60 * 60},
  {value: 27, playtime: 600 * 60 * 60},
  {value: 28, playtime: 600 * 60 * 60},
  {value: 29, playtime: 600 * 60 * 60},
  {value: 30, playtime: 600 * 60 * 60},
  {value: 31, playtime: 600 * 60 * 60},
  {value: 32, playtime: 600 * 60 * 60},
  {value: 33, playtime: 600 * 60 * 60},
  {value: 34, playtime: 600 * 60 * 60},
  {value: 35, playtime: 600 * 60 * 60},
  {value: 36, playtime: 600 * 60 * 60},
  {value: 37, playtime: 600 * 60 * 60},
  {value: 38, playtime: 600 * 60 * 60},
  {value: 39, playtime: 600 * 60 * 60},
  {value: 40, playtime: 600 * 60 * 60},
  {value: 41, playtime: 600 * 60 * 60},
  {value: 42, playtime: 600 * 60 * 60},
  {value: 43, playtime: 600 * 60 * 60},
  {value: 44, playtime: 600 * 60 * 60},
  {value: 45, playtime: 600 * 60 * 60},
  {value: 46, playtime: 600 * 60 * 60},
  {value: 47, playtime: 600 * 60 * 60},
  {value: 48, playtime: 600 * 60 * 60},
  {value: 49, playtime: 600 * 60 * 60},
  {value: 50, playtime: 600 * 60 * 60},
  {value: 51, playtime: 600 * 60 * 60},
  {value: 52, playtime: 600 * 60 * 60},
  {value: 53, playtime: 600 * 60 * 60},
  {value: 54, playtime: 600 * 60 * 60},
  {value: 55, playtime: 600 * 60 * 60},
  {value: 56, playtime: 600 * 60 * 60},
  {value: 57, playtime: 600 * 60 * 60},
  {value: 58, playtime: 600 * 60 * 60},
  {value: 59, playtime: 600 * 60 * 60},
  {value: 60, playtime: 600 * 60 * 60},
  {value: 61, playtime: 600 * 60 * 60},
  {value: 62, playtime: 600 * 60 * 60},
  {value: 63, playtime: 600 * 60 * 60},
  {value: 64, playtime: 600 * 60 * 60},
  {value: 65, playtime: 600 * 60 * 60},
  {value: 66, playtime: 600 * 60 * 60},
  {value: 67, playtime: 600 * 60 * 60},
  {value: 68, playtime: 600 * 60 * 60},
  {value: 69, playtime: 600 * 60 * 60},
  {value: 70, playtime: 600 * 60 * 60},
  {value: 71, playtime: 600 * 60 * 60},
  {value: 72, playtime: 600 * 60 * 60},
  {value: 73, playtime: 600 * 60 * 60},
  {value: 74, playtime: 600 * 60 * 60},
  {value: 75, playtime: 600 * 60 * 60},
  {value: 76, playtime: 600 * 60 * 60},
  {value: 77, playtime: 600 * 60 * 60},
  {value: 78, playtime: 600 * 60 * 60},
  {value: 79, playtime: 600 * 60 * 60},
  {value: 80, playtime: 600 * 60 * 60},
  {value: 81, playtime: 600 * 60 * 60},
  {value: 82, playtime: 600 * 60 * 60},
  {value: 83, playtime: 600 * 60 * 60},
  {value: 84, playtime: 600 * 60 * 60},
  {value: 85, playtime: 600 * 60 * 60},
  {value: 86, playtime: 600 * 60 * 60},
  {value: 87, playtime: 600 * 60 * 60},
  {value: 88, playtime: 600 * 60 * 60},
  {value: 89, playtime: 600 * 60 * 60},
  {value: 90, playtime: 600 * 60 * 60},
  {value: 91, playtime: 600 * 60 * 60},
  {value: 92, playtime: 600 * 60 * 60},
  {value: 93, playtime: 600 * 60 * 60},
  {value: 94, playtime: 600 * 60 * 60},
  {value: 95, playtime: 600 * 60 * 60},
  {value: 96, playtime: 600 * 60 * 60},
  {value: 97, playtime: 600 * 60 * 60},
  {value: 98, playtime: 600 * 60 * 60},
  {value: 99, playtime: 600 * 60 * 60}
].sort((a, b) => a.value - b.value)

describe('playerbase-statistics', () => {
  let result = module(testdata)

  it('can generate the leaderboard', () => {
    expect(result.leaderboard.length).to.equal(25)
    expect(result.leaderboard.slice(0, 3)).to.deep.equal([
      {value: 99999, playtime: 14400000},
      {value: 555, playtime: 36000},
      {value: 123, playtime: 7200}
    ])
  })

  it('can generate the statistics', () => {
    expect(result.statistics.all.min).to.equal(0)
    expect(result.statistics.all.max).to.equal(99999)
    expect(result.statistics.all.mean).to.equal(1025.5)
    expect(result.statistics.all.median).to.equal(51)
    expect(result.statistics.all.quantile25).to.equal(25)

    expect(result.statistics.playtime500to1000.min).to.equal(0)
    expect(result.statistics.playtime500to1000.max).to.equal(99)
    expect(result.statistics.playtime500to1000.mean).to.equal(49.5)
    expect(result.statistics.playtime500to1000.median).to.equal(49.5)
    expect(result.statistics.playtime500to1000.quantile25).to.equal(24.5)
  })

  it('can generate the graph data', () => {
    expect(result.graphData.all.length).to.equal(100)
    expect(result.graphData.playtime500to1000).to.deep.equal([
      0, 0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 7, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5, 14,
      14.5, 15.5, 16.5, 17.5, 18.5, 19.5, 20.5, 21.5, 22.5, 23.5, 24.5, 25.5,
      26.5, 28, 28, 29.5, 30.5, 31.5, 32.5, 33.5, 34.5, 35.5, 36.5, 37.5, 38.5,
      39.5, 40.5, 41.5, 42.5, 43.5, 44.5, 45.5, 46.5, 47.5, 48.5, 49.5, 50.5,
      51.5, 52.5, 53.5, 55, 56, 56, 57, 58.5, 59.5, 60.5, 61.5, 62.5, 63.5,
      64.5, 65.5, 66.5, 67.5, 68.5, 69.5, 70.5, 71.5, 72.5, 73.5, 74.5, 75.5,
      76.5, 77.5, 78.5, 79.5, 80.5, 81.5, 82.5, 83.5, 84.5, 85.5, 86.5, 87.5,
      88.5, 89.5, 90.5, 91.5, 92.5, 93.5, 94.5, 95.5, 96.5, 97.5, 98.5
    ])
  })
})
