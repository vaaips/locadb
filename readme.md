### LocaDB
Local web database driver

#### Installation
```sh
$ npm i -S locadb
```

#### Usage
```js
import locadb from 'locadb'

locadb.set('name', 'John Deo')
```

#### Available methods
| Method   | Parameters                 | Return        | Usage                            |
|----------|----------------------------|---------------|----------------------------------|
| `set`    | `key{string}, value{any}`  | `undefined`   | `locadb.set(key, value)`         |
| `get`    | `key{string}`              | `any`         | `locadb.get(key)`                |