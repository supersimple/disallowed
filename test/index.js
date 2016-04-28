var should = require('chai').should(),
    disallowed = require('../index'),
    disallow = disallowed.disallow,
    setup_disallow = disallowed.set_disallowed_words(['foo', 'bar']);

describe('#disallow', function() {
  it('strips disallowed words from string', function() {
    disallow('foo and bar and baz is test.').should.equal(' and  and baz is test.');
  });
});