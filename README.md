<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# duration2ms

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a duration string to milliseconds.



<section class="usage">

## Usage

To use in Observable,

```javascript
duration2ms = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/time-duration2ms@v0.0.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var duration2ms = require( 'path/to/vendor/umd/time-duration2ms/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/time-duration2ms@v0.0.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.duration2ms;
})();
</script>
```

#### duration2ms( str )

Converts a duration string to milliseconds.

```javascript
var ms = duration2ms( '1d' );
// returns 86400000

ms = duration2ms( '1d2h3m4s5ms' );
// returns 93784005
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A duration string is a string containing a sequence of time units. A time unit is a nonnegative integer followed by a unit identifier. The following unit identifiers are supported:

    -   `d`: days
    -   `h`: hours
    -   `m`: minutes
    -   `s`: seconds
    -   `ms`: milliseconds

    For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes).

-   Duration strings are case insensitive. For example, the string `1M3S10MS` is equivalent to `1m3s10ms`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/time-duration2ms@v0.0.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var ms = duration2ms( '5s20ms' );
// returns 5020

ms = duration2ms( '1h' );
// returns 3600000

ms = duration2ms( '1m2s3ms' );
// returns 62003

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-duration2ms.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-duration2ms

[test-image]: https://github.com/stdlib-js/time-duration2ms/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/time-duration2ms/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-duration2ms/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-duration2ms?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-duration2ms.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-duration2ms/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-duration2ms/tree/deno
[umd-url]: https://github.com/stdlib-js/time-duration2ms/tree/umd
[esm-url]: https://github.com/stdlib-js/time-duration2ms/tree/esm
[branches-url]: https://github.com/stdlib-js/time-duration2ms/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-duration2ms/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
