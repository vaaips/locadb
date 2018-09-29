import locadb from '../src/locadb'

describe('set', () => {
  it('should return undefined', () => {
    chai.assert.equal(locadb.set('key', 'value'), undefined)
  })
})