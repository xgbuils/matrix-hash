var MatrixHash = require('../')
var chai = require('chai')
var expect = chai.expect
chai.should()

describe('MatrixHash', function() {
    describe('constructor', function () {
        it('returns an new MatrixHash', function() {
            var hash = new MatrixHash()
            hash.should.be.an.instanceOf(MatrixHash)
        })
    })

    describe('.dimension', function () {
        it('is 1 when is not defined in constructor.', function() {
            var hash = new MatrixHash()
            hash.dimension.should.be.equal(1)
        })

        it('is 1 when constructor argument is less than 1.', function() {
            var hash = new MatrixHash(-3)
            hash.dimension.should.be.equal(1)
        })

        it('is equal to constructor argument, in other case.', function() {
            var hash = new MatrixHash(3)
            hash.dimension.should.be.equal(3)
        })
    })

    describe('.set()', function() {
        it('fails when number of keys is diferent that dimension in constructor.', function() {
            var hash = new MatrixHash(3)
            expect(function() {
                hash.set([0, 1], 'bla')
            }).to.Throw(Error)
        })
    })

    describe('.size', function () {
        it('increases 1 when .set is called and does not throw error', function() {
            var hash = new MatrixHash(2)
            hash.set(['foo', 'bar'], 'bla')
            hash.size.should.be.equal(1)
            hash.set(['fizz', 'buzz'], 'bla')
            hash.size.should.be.equal(2)
        })
    })

    describe('.get', function() {
        it('fails when number of keys is diferent that dimension in constructor', function() {
            var hash = new MatrixHash(2)
            expect(function() {
                hash.get([0, 1, 0], 'blu')
            }).to.Throw(Error)
        })

        it('gets the value passed in the second parameter of .set method', function() {
            var hash = new MatrixHash()
            hash.set(['some'], 'books')
            hash.get(['some']).should.be.equal('books')
        })

        it('returns undefined when value is not previously set', function() {
            var hash = new MatrixHash(4)
            hash.set([0, 5, 2, 3], {name: 'spiderman'})
            expect(hash.get([0, 5, 3, 2])).to.equal(undefined)
        })
    })

    describe('.has', function() {
        it('fails when number of keys is diferent that dimension in constructor', function() {
            var hash = new MatrixHash(1)
            expect(function() {
                hash.has([1, 1], 'bli')
            }).to.Throw(Error)
        })

        it('returns true if previously is set value distinct of undefined', function() {
            var hash = new MatrixHash(2)
            hash.set(['some', 'every'], 'comics')
            hash.has(['some', 'every']).should.be.equal(true)
        })

        it('returns false if previously is set undefined value', function() {
            var hash = new MatrixHash(4)
            hash.set([0, 5, 2, 3], undefined)
            hash.has([0, 5, 2, 3]).should.be.equal(false)
        })

        it('returns false when value is not previously set', function() {
            var hash = new MatrixHash(4)
            hash.set([0, 5, 2, 3], {name: 'spiderman'})
            hash.has([0, 5, 3, 2]).should.be.equal(false)
        })
    })
})
