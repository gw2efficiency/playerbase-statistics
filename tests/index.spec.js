/* eslint-env node, mocha */
import {expect} from 'chai'
import module from '../src/index.js'

const testdata = [
  {name: 'Foo.1234', value: 99999, playtime: 4000 * 60 * 60},
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
]

describe('playerbase-statistics', () => {
  let result = module(testdata)

  it('can generate the leaderboard', () => {
    expect(result.leaderboard.length).to.equal(25)
    expect(result.leaderboard.slice(0, 3)).to.deep.equal([
      {value: 99999, playtime: 14400000},
      {value: 555, playtime: 36000},
      {value: 123, playtime: 7200}
    ])

    expect(module([{value: 0, playtime: 10}]).leaderboard.length).to.equal(0)
  })

  it('can generate the ordered leaderboard for same values', () => {
    let sameTestData = [
      {value: 123, playtime: 4000 * 60 * 60},
      {value: 123, playtime: 2 * 60 * 60},
      {value: 100, playtime: 5 * 60 * 60},
      {value: 100, playtime: 2 * 60 * 60},
      {value: 100, playtime: 3 * 60 * 60},
      {value: 123, playtime: 10 * 60 * 60},
      {value: 123, playtime: 4 * 60 * 60},
      {value: 10, playtime: 3 * 60 * 60},
      {value: 123, playtime: 10 * 60 * 60},
      {value: 123, playtime: 3 * 60 * 60},
      {value: 123, playtime: 2 * 60 * 60}
    ]

    let result = module(sameTestData)
    expect(result.leaderboard).to.deep.equal([
      {value: 123, playtime: 2 * 60 * 60},
      {value: 123, playtime: 2 * 60 * 60},
      {value: 123, playtime: 3 * 60 * 60},
      {value: 123, playtime: 4 * 60 * 60},
      {value: 123, playtime: 10 * 60 * 60},
      {value: 123, playtime: 10 * 60 * 60},
      {value: 123, playtime: 4000 * 60 * 60},
      {value: 100, playtime: 2 * 60 * 60},
      {value: 100, playtime: 3 * 60 * 60},
      {value: 100, playtime: 5 * 60 * 60},
      {value: 10, playtime: 3 * 60 * 60}
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
    expect(result.graphData.all.length).to.equal(200)
    expect(result.graphData.playtime500to1000).to.deep.equal([
      0, 0, 0.5, 1, 1.5, 2, 3, 3, 3.5, 4, 4.5, 5, 5, 6, 6, 7, 7.5, 8, 9, 9, 10,
      10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19,
      19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28,
      28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 37,
      37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46,
      46, 47, 47, 48, 48, 49, 49, 50, 50, 51, 51, 52, 52, 53, 53, 54, 54, 55,
      55, 56, 56, 57, 57, 58, 58, 59, 59, 60, 60, 61, 61, 62, 62, 63, 63, 64,
      64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 70, 71, 71, 72, 72, 73,
      73, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 80, 81, 81, 82,
      82, 83, 83, 84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90, 91,
      91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 96, 97, 97, 98, 98, 99, 99
    ])
  })
})
