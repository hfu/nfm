import test from 'ava'
import nfm from './index.js'

test('test', t => {
  t.is(nfm(6, 29, 34), true)
  t.is(nfm(6, 30, 34), false)
})
