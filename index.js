function MatrixHash (dim) {
    this._map = {
        table: {},
        size: 0,
        dim: dim > 0 ? dim : 1
    }
}

Object.defineProperties(MatrixHash.prototype, {
    dimension: {
        get: function () {
            return this._map.dim
        }
    },
    size: {
        get: function () {
            return this._map.size
        }
    },
    set: {
        value: function(indexs, value) {
            checkIndexs.call(this, indexs)
            indexs.reduce(function (obj, index, i) {
                return obj[index] || (obj[index] = i === indexs.length - 1 ? value: {})
            }, this._map.table)
            ++this._map.size
        }
    },
    has: {
        value: function(indexs) {
            return !!this.get(indexs)
        }
    },
    get: {
        value: function(indexs) {
            checkIndexs.call(this, indexs)
            var value = this._map.table
            indexs.some(function (index) {
                value = value[index]
                return value === undefined
            })
            return value
        }
    }
})

function checkIndexs (indexs) {
    if (this.dimension !== indexs.length) {
        throw new Error('Is required array of ' + this.dimension + ' indexs. Currently ' + indexs.length + '.')
    }
}

module.exports = MatrixHash