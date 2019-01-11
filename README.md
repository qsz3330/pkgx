# pkgx

[![npm (scoped)](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/@kdthanvi/pkgx)
A tiny npm package

## Install 
```
npm install @kdthanvi/pkgx
```

## Usage
```
const pkgx = require("@kdthanvi/pkgx")

pkgx("remove My Spaces");
// removeMySpaces

pkgx(1234);
//=> Uncaught TypeError: pkgx wants a string!

```