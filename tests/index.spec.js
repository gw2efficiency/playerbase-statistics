/* eslint-env node, mocha */
const expect = require('chai').expect
const module = require('../src/index.js')

describe('playerbase-statistics', () => {
  it('works', () => {
    expect(module()).to.deep.equal('herp')
  })
})
