# nfm
A utility to judge a no-feature-module from its tile number

# background
I wanted to judge if the module is with features or not, to accelerate the module update. 

The file [nfm.json](nfm.json), a 'black-list' of the no-feature-module will be updated by hand.

# install
```console
git clone git@github.com:hfu/nfm
cd nfm
npm install
```

# use
You can use nfm() in your Node.js program like this.
```javascript
const nfm = require('../nfm')

console.log(nfm(z, x, y))
```

# nfm.json example
```json
{
  "nfm": [
    [6, 42, 32],
    [6, 42, 36]
  ]
}
```

# API
nfm(z, x, y) returns true if the module {z}/{x}/{y} is on nfm.json, and returns false otherwise.

# see also
https://hfu.github.io/tapioca-six
