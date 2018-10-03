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

  it('should return data in string if the value was set in string', () => {
    locadb.set('username', 'johndeo')
    let value = locadb.get('username')
    chai.assert.equal(typeof value, 'string')
  })

  it('should return data in number if the value was set in number', () => {
    locadb.set('age', 25)
    let value = locadb.get('age')
    chai.assert.equal(typeof value, 'number')
  })

  it('should return data in boolean if the value was set in boolean', () => {
    locadb.set('can', true)
    let value = locadb.get('can')
    chai.assert.equal(typeof value, 'boolean')
  })

  it('should return data in array if the value was set in array', () => {
    locadb.set('numbers', [1, 2, 3, 4])
    let value = locadb.get('numbers')
    chai.assert.equal(value.length, 4)
  })

  it('should return data in object if the value was set in object', () => {
    locadb.set('user', { name: 'John Deo', age: 25 })
    let value = locadb.get('user')
    chai.assert.equal(value.age, 25)
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