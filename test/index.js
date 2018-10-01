import locadb from '../src/locadb'

describe('set', () => {
  it('should return undefined', () => {
    chai.assert.equal(locadb.set('key', 'value'), undefined)
  })
})

describe('get', () => {
  it('should return value', () => {
    chai.assert.equal(locadb.get('key'), 'value')
  })
})

describe('remove', () => {
  it('should return undefined', () => {
    chai.assert.equal(locadb.remove('key'), undefined)
  })
})

describe('clear', () => {
  it('should return undefined', () => {
    chai.assert.equal(locadb.clear(), undefined)
  })
})

describe('size', () => {
  it('should return integer', () => {
    chai.assert.equal(Number.isInteger(locadb.size()), true)
  })
})

describe('keys', () => {
  it('should return array', () => {
    chai.assert.equal(Array.isArray(locadb.keys()), true)
  })
})

describe('values', () => {
  it('should return array', () => {
    chai.assert.equal(Array.isArray(locadb.values()), true)
  })
})