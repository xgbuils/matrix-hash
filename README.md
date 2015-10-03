# matrix-hash

![travis ci](https://travis-ci.org/xgbuils/matrix-hash.svg?branch=master)

Multidimensional implementation of hash for Node.js and browser with [browserify](http://browserify.org/).

## Installation

``` bash
$ npm install matrix-hash
```

## Usage

``` javascript
var MatrixHash = require('matrix-hash')

var hash = new MatrixHash(3)

hash.set([1, 0, 0], 'red')
hash.set([0, 1, 0], 'green')
hash.set([0, 0, 1], 'blue')
hash.set([1, 1, 0], 'yellow')
hash.set([0, 1, 1], 'turquoise')
hash.set([1, 0, 1], 'fuchsia')

hash.size // 6
hash.get([0, 1, 0]) // green
hash.has([0, 0, 1]) // true
hash.has([1, 1, 1]) // false

```

## API

### constructor ([dim])

It creates a new instance of `MatrixHash` based on `dim` parameter that indicates the number of keys to access in hash value.

**Time complexity:** *O(1)*

##### dim
- Type: Number
- Default: 1

The dimension of matrix hash.

### .dimension
- Type: Number

The property dimension of matrix hash.

**Time complexity:** *O(1)*


### .size
- Type: Number

The size of the binary hash.

**Time complexity:** *O(1)*

### .set(keys, value)
- Type: Function
- Returns: undefined

Adds a new element with specified `keys` and `value` to a MatrixHash object.

**Time complexity:** *O(k)* such that `k === this.dimension`

### .get()
- Type: Function
- Returns: Element of instance of `MatrixHash`

Returns a specified element from a MatrixHash object.

**Time complexity:** *O(log(k))* such that `k === this.dimension`

### .has(keys)
- Type: Function
- Returns: Boolean

Returns a boolean indicating whether an element with the specified `keys` exists or not.

**Time complexity:** *O(log(k))* such that `k === this.dimension`

## FAQ

##### Why do MatrixHash have the property `size` and not length?

I wanted to keep the [ECMAScript 6 conventions](http://exploringjs.com/es6/ch_maps-sets.html#leanpub-auto-why-do-maps-and-sets-have-the-property-size-and-not-length).

## Testing

```
$ npm test
```

## Licence

MIT