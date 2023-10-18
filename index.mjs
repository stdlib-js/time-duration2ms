// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-duration-string@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/time-base-parse-duration@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function i(i){var r,n;if(!s(i))throw new TypeError(e("invalid argument. Must provide a valid duration string. Value: `%s`.",i));return n=864e5*(r=t(i)).days,n+=36e5*r.hours,n+=6e4*r.minutes,n+=1e3*r.seconds,n+=r.milliseconds}export{i as default};
//# sourceMappingURL=index.mjs.map
