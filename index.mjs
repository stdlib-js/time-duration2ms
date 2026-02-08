// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-duration-string@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/time-base-parse-duration@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";function r(r){var i,d;if(!s(r))throw new TypeError(t("1h9Dy",r));return d=864e5*(i=e(r)).days,d+=36e5*i.hours,d+=6e4*i.minutes,d+=1e3*i.seconds,d+=i.milliseconds}export{r as default};
//# sourceMappingURL=index.mjs.map
