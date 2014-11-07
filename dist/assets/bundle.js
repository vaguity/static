/******/ (function(modules) {
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) /******/
        return installedModules[moduleId].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
        };
        /******/
        /******/
        // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/
        // Flag the module as loaded
        /******/
        module.loaded = true;
        /******/
        /******/
        // Return the exports of the module
        /******/
        return module.exports;
    }
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/
    // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/
    // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    // Load entry module and return exports
    /******/
    return __webpack_require__(0);
})([ /* 0 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(global) {
        global.enquire = __webpack_require__(6);
        __webpack_require__(3);
        __webpack_require__(5);
        __webpack_require__(7);
    }).call(exports, function() {
        return this;
    }());
}, /* 1 */
/***/
function(module, exports, __webpack_require__) {
    module.exports = function() {
        var list = [];
        list.toString = function toString() {
            var result = [];
            for (var i = 0; i < this.length; i++) {
                var item = this[i];
                if (item[2]) {
                    result.push("@media " + item[2] + "{" + item[1] + "}");
                } else {
                    result.push(item[1]);
                }
            }
            return result.join("");
        };
        return list;
    };
}, /* 2 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(1)();
    exports.push([ module.id, 'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html,button,input,select,textarea{color:#222}html{font-size:1em;line-height:1.4}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,img,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browsehappy{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}.ir{background-color:transparent;border:0;overflow:hidden;*text-indent:-9999px}.ir:before{content:"";display:block;width:0;height:150%}.hidden{display:none!important;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:before,.clearfix:after{content:" ";display:table}.clearfix:after{clear:both}.clearfix{*zoom:1}@media print{*{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href)")"}abbr[title]:after{content:" (" attr(title)")"}.ir a:after,a[href^="javascript:"]:after,a[href^="#"]:after{content:""}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100%!important}@page{margin:.5cm}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}.container{max-width:80%;margin-left:auto;margin-right:auto}.container:after{content:" ";display:block;clear:both}header,.content,footer{width:100%;float:left;margin-left:0;margin-right:0}', "" ]);
}, /* 3 */
/***/
function(module, exports, __webpack_require__) {
    /*** IMPORTS FROM imports-loader ***/
    (function() {
        /*!
	 * Modernizr v2.8.3
	 * www.modernizr.com
	 *
	 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
	 * Available under the BSD and MIT licenses: www.modernizr.com/license/
	 */
        /*
	 * Modernizr tests which native CSS3 and HTML5 features are available in
	 * the current UA and makes the results available to you in two ways:
	 * as properties on a global Modernizr object, and as classes on the
	 * <html> element. This information allows you to progressively enhance
	 * your pages with a granular level of control over the experience.
	 *
	 * Modernizr has an optional (not included) conditional resource loader
	 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
	 * To get a build that includes Modernizr.load(), as well as choosing
	 * which tests to include, go to www.modernizr.com/download/
	 *
	 * Authors        Faruk Ates, Paul Irish, Alex Sexton
	 * Contributors   Ryan Seddon, Ben Alman
	 */
        window.Modernizr = function(window, document, undefined) {
            var version = "2.8.3", Modernizr = {}, /*>>cssclasses*/
            // option for enabling the HTML classes to be added
            enableClasses = true, /*>>cssclasses*/
            docElement = document.documentElement, /**
	     * Create our "modernizr" element that we do most feature tests on.
	     */
            mod = "modernizr", modElem = document.createElement(mod), mStyle = modElem.style, /**
	     * Create the input element for various Web Forms feature tests.
	     */
            inputElem = document.createElement("input"), /*>>smile*/
            smile = ":)", /*>>smile*/
            toString = {}.toString, // TODO :: make the prefixes more granular
            /*>>prefixes*/
            // List of property values to set for css tests. See ticket #21
            prefixes = " -webkit- -moz- -o- -ms- ".split(" "), /*>>prefixes*/
            /*>>domprefixes*/
            // Following spec is to expose vendor-specific style properties as:
            //   elem.style.WebkitBorderRadius
            // and the following would be incorrect:
            //   elem.style.webkitBorderRadius
            // Webkit ghosts their properties in lowercase but Opera & Moz do not.
            // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
            //   erik.eae.net/archives/2008/03/10/21.48.10/
            // More here: github.com/Modernizr/Modernizr/issues/issue/21
            omPrefixes = "Webkit Moz O ms", cssomPrefixes = omPrefixes.split(" "), domPrefixes = omPrefixes.toLowerCase().split(" "), /*>>domprefixes*/
            /*>>ns*/
            ns = {
                svg: "http://www.w3.org/2000/svg"
            }, /*>>ns*/
            tests = {}, inputs = {}, attrs = {}, classes = [], slice = classes.slice, featureName, // used in testing loop
            /*>>teststyles*/
            // Inject element with style element and some CSS rules
            injectElementWithStyles = function(rule, callback, nodes, testnames) {
                var style, ret, node, docOverflow, div = document.createElement("div"), // After page load injecting a fake body doesn't work so check if body exists
                body = document.body, // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
                fakeBody = body || document.createElement("body");
                if (parseInt(nodes, 10)) {
                    // In order not to give false positives we create a node for each test
                    // This also allows the method to scale for unspecified uses
                    while (nodes--) {
                        node = document.createElement("div");
                        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                        div.appendChild(node);
                    }
                }
                // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
                // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
                // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
                // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
                // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
                style = [ "&#173;", '<style id="s', mod, '">', rule, "</style>" ].join("");
                div.id = mod;
                // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
                // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
                (body ? div : fakeBody).innerHTML += style;
                fakeBody.appendChild(div);
                if (!body) {
                    //avoid crashing IE8, if background image is used
                    fakeBody.style.background = "";
                    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
                    fakeBody.style.overflow = "hidden";
                    docOverflow = docElement.style.overflow;
                    docElement.style.overflow = "hidden";
                    docElement.appendChild(fakeBody);
                }
                ret = callback(div, rule);
                // If this is done after page load we don't want to remove the body so check if body exists
                if (!body) {
                    fakeBody.parentNode.removeChild(fakeBody);
                    docElement.style.overflow = docOverflow;
                } else {
                    div.parentNode.removeChild(div);
                }
                return !!ret;
            }, /*>>teststyles*/
            /*>>mq*/
            // adapted from matchMedia polyfill
            // by Scott Jehl and Paul Irish
            // gist.github.com/786768
            testMediaQuery = function(mq) {
                var matchMedia = window.matchMedia || window.msMatchMedia;
                if (matchMedia) {
                    return matchMedia(mq) && matchMedia(mq).matches || false;
                }
                var bool;
                injectElementWithStyles("@media " + mq + " { #" + mod + " { position: absolute; } }", function(node) {
                    bool = (window.getComputedStyle ? getComputedStyle(node, null) : node.currentStyle)["position"] == "absolute";
                });
                return bool;
            }, /*>>mq*/
            /*>>hasevent*/
            //
            // isEventSupported determines if a given element supports the given event
            // kangax.github.com/iseventsupported/
            //
            // The following results are known incorrects:
            //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
            //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
            //   ...
            isEventSupported = function() {
                var TAGNAMES = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                function isEventSupported(eventName, element) {
                    element = element || document.createElement(TAGNAMES[eventName] || "div");
                    eventName = "on" + eventName;
                    // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
                    var isSupported = eventName in element;
                    if (!isSupported) {
                        // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
                        if (!element.setAttribute) {
                            element = document.createElement("div");
                        }
                        if (element.setAttribute && element.removeAttribute) {
                            element.setAttribute(eventName, "");
                            isSupported = is(element[eventName], "function");
                            // If property was created, "remove it" (by setting value to `undefined`)
                            if (!is(element[eventName], "undefined")) {
                                element[eventName] = undefined;
                            }
                            element.removeAttribute(eventName);
                        }
                    }
                    element = null;
                    return isSupported;
                }
                return isEventSupported;
            }(), /*>>hasevent*/
            // TODO :: Add flag for hasownprop ? didn't last time
            // hasOwnProperty shim by kangax needed for Safari 2.0 support
            _hasOwnProperty = {}.hasOwnProperty, hasOwnProp;
            if (!is(_hasOwnProperty, "undefined") && !is(_hasOwnProperty.call, "undefined")) {
                hasOwnProp = function(object, property) {
                    return _hasOwnProperty.call(object, property);
                };
            } else {
                hasOwnProp = function(object, property) {
                    /* yes, this can give false positives/negatives, but most of the time we don't care about those */
                    return property in object && is(object.constructor.prototype[property], "undefined");
                };
            }
            // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
            // es5.github.com/#x15.3.4.5
            if (!Function.prototype.bind) {
                Function.prototype.bind = function bind(that) {
                    var target = this;
                    if (typeof target != "function") {
                        throw new TypeError();
                    }
                    var args = slice.call(arguments, 1), bound = function() {
                        if (this instanceof bound) {
                            var F = function() {};
                            F.prototype = target.prototype;
                            var self = new F();
                            var result = target.apply(self, args.concat(slice.call(arguments)));
                            if (Object(result) === result) {
                                return result;
                            }
                            return self;
                        } else {
                            return target.apply(that, args.concat(slice.call(arguments)));
                        }
                    };
                    return bound;
                };
            }
            /**
	     * setCss applies given styles to the Modernizr DOM node.
	     */
            function setCss(str) {
                mStyle.cssText = str;
            }
            /**
	     * setCssAll extrapolates all vendor-specific css strings.
	     */
            function setCssAll(str1, str2) {
                return setCss(prefixes.join(str1 + ";") + (str2 || ""));
            }
            /**
	     * is returns a boolean for if typeof obj is exactly type.
	     */
            function is(obj, type) {
                return typeof obj === type;
            }
            /**
	     * contains returns a boolean for if substr is found within str.
	     */
            function contains(str, substr) {
                return !!~("" + str).indexOf(substr);
            }
            /*>>testprop*/
            // testProps is a generic CSS / DOM property test.
            // In testing support for a given CSS property, it's legit to test:
            //    `elem.style[styleName] !== undefined`
            // If the property is supported it will return an empty string,
            // if unsupported it will return undefined.
            // We'll take advantage of this quick test and skip setting a style
            // on our modernizr element, but instead just testing undefined vs
            // empty string.
            // Because the testing of the CSS property names (with "-", as
            // opposed to the camelCase DOM properties) is non-portable and
            // non-standard but works in WebKit and IE (but not Gecko or Opera),
            // we explicitly reject properties with dashes so that authors
            // developing in WebKit or IE first don't end up with
            // browser-specific content by accident.
            function testProps(props, prefixed) {
                for (var i in props) {
                    var prop = props[i];
                    if (!contains(prop, "-") && mStyle[prop] !== undefined) {
                        return prefixed == "pfx" ? prop : true;
                    }
                }
                return false;
            }
            /*>>testprop*/
            // TODO :: add testDOMProps
            /**
	     * testDOMProps is a generic DOM property test; if a browser supports
	     *   a certain property, it won't return undefined for it.
	     */
            function testDOMProps(props, obj, elem) {
                for (var i in props) {
                    var item = obj[props[i]];
                    if (item !== undefined) {
                        // return the property name as a string
                        if (elem === false) return props[i];
                        // let's bind a function
                        if (is(item, "function")) {
                            // default to autobind unless override
                            return item.bind(elem || obj);
                        }
                        // return the unbound function or obj or value
                        return item;
                    }
                }
                return false;
            }
            /*>>testallprops*/
            /**
	     * testPropsAll tests a list of DOM properties we want to check against.
	     *   We specify literally ALL possible (known and/or likely) properties on
	     *   the element including the non-vendor prefixed one, for forward-
	     *   compatibility.
	     */
            function testPropsAll(prop, prefixed, elem) {
                var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1), props = (prop + " " + cssomPrefixes.join(ucProp + " ") + ucProp).split(" ");
                // did they call .prefixed('boxSizing') or are we just testing a prop?
                if (is(prefixed, "string") || is(prefixed, "undefined")) {
                    return testProps(props, prefixed);
                } else {
                    props = (prop + " " + domPrefixes.join(ucProp + " ") + ucProp).split(" ");
                    return testDOMProps(props, prefixed, elem);
                }
            }
            /*>>testallprops*/
            /**
	     * Tests
	     * -----
	     */
            // The *new* flexbox
            // dev.w3.org/csswg/css3-flexbox
            tests["flexbox"] = function() {
                return testPropsAll("flexWrap");
            };
            // The *old* flexbox
            // www.w3.org/TR/2009/WD-css3-flexbox-20090723/
            tests["flexboxlegacy"] = function() {
                return testPropsAll("boxDirection");
            };
            // On the S60 and BB Storm, getContext exists, but always returns undefined
            // so we actually have to call getContext() to verify
            // github.com/Modernizr/Modernizr/issues/issue/97/
            tests["canvas"] = function() {
                var elem = document.createElement("canvas");
                return !!(elem.getContext && elem.getContext("2d"));
            };
            tests["canvastext"] = function() {
                return !!(Modernizr["canvas"] && is(document.createElement("canvas").getContext("2d").fillText, "function"));
            };
            // webk.it/70117 is tracking a legit WebGL feature detect proposal
            // We do a soft detect which may false positive in order to avoid
            // an expensive context creation: bugzil.la/732441
            tests["webgl"] = function() {
                return !!window.WebGLRenderingContext;
            };
            /*
	     * The Modernizr.touch test only indicates if the browser supports
	     *    touch events, which does not necessarily reflect a touchscreen
	     *    device, as evidenced by tablets running Windows 7 or, alas,
	     *    the Palm Pre / WebOS (touch) phones.
	     *
	     * Additionally, Chrome (desktop) used to lie about its support on this,
	     *    but that has since been rectified: crbug.com/36415
	     *
	     * We also test for Firefox 4 Multitouch Support.
	     *
	     * For more info, see: modernizr.github.com/Modernizr/touch.html
	     */
            tests["touch"] = function() {
                var bool;
                if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) {
                    bool = true;
                } else {
                    injectElementWithStyles([ "@media (", prefixes.join("touch-enabled),("), mod, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(node) {
                        bool = node.offsetTop === 9;
                    });
                }
                return bool;
            };
            // geolocation is often considered a trivial feature detect...
            // Turns out, it's quite tricky to get right:
            //
            // Using !!navigator.geolocation does two things we don't want. It:
            //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
            //   2. Disables page caching in WebKit: webk.it/43956
            //
            // Meanwhile, in Firefox < 8, an about:config setting could expose
            // a false positive that would throw an exception: bugzil.la/688158
            tests["geolocation"] = function() {
                return "geolocation" in navigator;
            };
            tests["postmessage"] = function() {
                return !!window.postMessage;
            };
            // Chrome incognito mode used to throw an exception when using openDatabase
            // It doesn't anymore.
            tests["websqldatabase"] = function() {
                return !!window.openDatabase;
            };
            // Vendors had inconsistent prefixing with the experimental Indexed DB:
            // - Webkit's implementation is accessible through webkitIndexedDB
            // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
            // For speed, we don't test the legacy (and beta-only) indexedDB
            tests["indexedDB"] = function() {
                return !!testPropsAll("indexedDB", window);
            };
            // documentMode logic from YUI to filter out IE8 Compat Mode
            //   which false positives.
            tests["hashchange"] = function() {
                return isEventSupported("hashchange", window) && (document.documentMode === undefined || document.documentMode > 7);
            };
            // Per 1.6:
            // This used to be Modernizr.historymanagement but the longer
            // name has been deprecated in favor of a shorter and property-matching one.
            // The old API is still available in 1.6, but as of 2.0 will throw a warning,
            // and in the first release thereafter disappear entirely.
            tests["history"] = function() {
                return !!(window.history && history.pushState);
            };
            tests["draganddrop"] = function() {
                var div = document.createElement("div");
                return "draggable" in div || "ondragstart" in div && "ondrop" in div;
            };
            // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
            // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
            // FF10 still uses prefixes, so check for it until then.
            // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
            tests["websockets"] = function() {
                return "WebSocket" in window || "MozWebSocket" in window;
            };
            // css-tricks.com/rgba-browser-support/
            tests["rgba"] = function() {
                // Set an rgba() color and check the returned value
                setCss("background-color:rgba(150,255,150,.5)");
                return contains(mStyle.backgroundColor, "rgba");
            };
            tests["hsla"] = function() {
                // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
                //   except IE9 who retains it as hsla
                setCss("background-color:hsla(120,40%,100%,.5)");
                return contains(mStyle.backgroundColor, "rgba") || contains(mStyle.backgroundColor, "hsla");
            };
            tests["multiplebgs"] = function() {
                // Setting multiple images AND a color on the background shorthand property
                //  and then querying the style.background property value for the number of
                //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!
                setCss("background:url(https://),url(https://),red url(https://)");
                // If the UA supports multiple backgrounds, there should be three occurrences
                //   of the string "url(" in the return value for elemStyle.background
                return /(url\s*\(.*?){3}/.test(mStyle.background);
            };
            // this will false positive in Opera Mini
            //   github.com/Modernizr/Modernizr/issues/396
            tests["backgroundsize"] = function() {
                return testPropsAll("backgroundSize");
            };
            tests["borderimage"] = function() {
                return testPropsAll("borderImage");
            };
            // Super comprehensive table about all the unique implementations of
            // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance
            tests["borderradius"] = function() {
                return testPropsAll("borderRadius");
            };
            // WebOS unfortunately false positives on this test.
            tests["boxshadow"] = function() {
                return testPropsAll("boxShadow");
            };
            // FF3.0 will false positive on this test
            tests["textshadow"] = function() {
                return document.createElement("div").style.textShadow === "";
            };
            tests["opacity"] = function() {
                // Browsers that actually have CSS Opacity implemented have done so
                //  according to spec, which means their return values are within the
                //  range of [0.0,1.0] - including the leading zero.
                setCssAll("opacity:.55");
                // The non-literal . in this regex is intentional:
                //   German Chrome returns this value as 0,55
                // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
                return /^0.55$/.test(mStyle.opacity);
            };
            // Note, Android < 4 will pass this test, but can only animate
            //   a single property at a time
            //   goo.gl/v3V4Gp
            tests["cssanimations"] = function() {
                return testPropsAll("animationName");
            };
            tests["csscolumns"] = function() {
                return testPropsAll("columnCount");
            };
            tests["cssgradients"] = function() {
                /**
	         * For CSS Gradients syntax, please see:
	         * webkit.org/blog/175/introducing-css-gradients/
	         * developer.mozilla.org/en/CSS/-moz-linear-gradient
	         * developer.mozilla.org/en/CSS/-moz-radial-gradient
	         * dev.w3.org/csswg/css3-images/#gradients-
	         */
                var str1 = "background-image:", str2 = "gradient(linear,left top,right bottom,from(#9f9),to(white));", str3 = "linear-gradient(left top,#9f9, white);";
                setCss(// legacy webkit syntax (FIXME: remove when syntax not in use anymore)
                (str1 + "-webkit- ".split(" ").join(str2 + str1) + // standard syntax             // trailing 'background-image:'
                prefixes.join(str3 + str1)).slice(0, -str1.length));
                return contains(mStyle.backgroundImage, "gradient");
            };
            tests["cssreflections"] = function() {
                return testPropsAll("boxReflect");
            };
            tests["csstransforms"] = function() {
                return !!testPropsAll("transform");
            };
            tests["csstransforms3d"] = function() {
                var ret = !!testPropsAll("perspective");
                // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
                //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
                //   some conditions. As a result, Webkit typically recognizes the syntax but
                //   will sometimes throw a false positive, thus we must do a more thorough check:
                if (ret && "webkitPerspective" in docElement.style) {
                    // Webkit allows this media query to succeed only if the feature is enabled.
                    // `@media (transform-3d),(-webkit-transform-3d){ ... }`
                    injectElementWithStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(node, rule) {
                        ret = node.offsetLeft === 9 && node.offsetHeight === 3;
                    });
                }
                return ret;
            };
            tests["csstransitions"] = function() {
                return testPropsAll("transition");
            };
            /*>>fontface*/
            // @font-face detection routine by Diego Perini
            // javascript.nwbox.com/CSSSupport/
            // false positives:
            //   WebOS github.com/Modernizr/Modernizr/issues/342
            //   WP7   github.com/Modernizr/Modernizr/issues/538
            tests["fontface"] = function() {
                var bool;
                injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
                    var style = document.getElementById("smodernizr"), sheet = style.sheet || style.styleSheet, cssText = sheet ? sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || "" : "";
                    bool = /src/i.test(cssText) && cssText.indexOf(rule.split(" ")[0]) === 0;
                });
                return bool;
            };
            /*>>fontface*/
            // CSS generated content detection
            tests["generatedcontent"] = function() {
                var bool;
                injectElementWithStyles([ "#", mod, "{font:0/0 a}#", mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}' ].join(""), function(node) {
                    bool = node.offsetHeight >= 3;
                });
                return bool;
            };
            // These tests evaluate support of the video/audio elements, as well as
            // testing what types of content they support.
            //
            // We're using the Boolean constructor here, so that we can extend the value
            // e.g.  Modernizr.video     // true
            //       Modernizr.video.ogg // 'probably'
            //
            // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
            //                     thx to NielsLeenheer and zcorpan
            // Note: in some older browsers, "no" was a return value instead of empty string.
            //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
            //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5
            tests["video"] = function() {
                var elem = document.createElement("video"), bool = false;
                // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
                try {
                    if (bool = !!elem.canPlayType) {
                        bool = new Boolean(bool);
                        bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "");
                        // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                        bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "");
                        bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "");
                    }
                } catch (e) {}
                return bool;
            };
            tests["audio"] = function() {
                var elem = document.createElement("audio"), bool = false;
                try {
                    if (bool = !!elem.canPlayType) {
                        bool = new Boolean(bool);
                        bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "");
                        bool.mp3 = elem.canPlayType("audio/mpeg;").replace(/^no$/, "");
                        // Mimetypes accepted:
                        //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                        //   bit.ly/iphoneoscodecs
                        bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "");
                        bool.m4a = (elem.canPlayType("audio/x-m4a;") || elem.canPlayType("audio/aac;")).replace(/^no$/, "");
                    }
                } catch (e) {}
                return bool;
            };
            // In FF4, if disabled, window.localStorage should === null.
            // Normally, we could not test that directly and need to do a
            //   `('localStorage' in window) && ` test first because otherwise Firefox will
            //   throw bugzil.la/365772 if cookies are disabled
            // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
            // will throw the exception:
            //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
            // Peculiarly, getItem and removeItem calls do not throw.
            // Because we are forced to try/catch this, we'll go aggressive.
            // Just FWIW: IE8 Compat mode supports these features completely:
            //   www.quirksmode.org/dom/html5.html
            // But IE8 doesn't support either with local files
            tests["localstorage"] = function() {
                try {
                    localStorage.setItem(mod, mod);
                    localStorage.removeItem(mod);
                    return true;
                } catch (e) {
                    return false;
                }
            };
            tests["sessionstorage"] = function() {
                try {
                    sessionStorage.setItem(mod, mod);
                    sessionStorage.removeItem(mod);
                    return true;
                } catch (e) {
                    return false;
                }
            };
            tests["webworkers"] = function() {
                return !!window.Worker;
            };
            tests["applicationcache"] = function() {
                return !!window.applicationCache;
            };
            // Thanks to Erik Dahlstrom
            tests["svg"] = function() {
                return !!document.createElementNS && !!document.createElementNS(ns.svg, "svg").createSVGRect;
            };
            // specifically for SVG inline in HTML, not within XHTML
            // test page: paulirish.com/demo/inline-svg
            tests["inlinesvg"] = function() {
                var div = document.createElement("div");
                div.innerHTML = "<svg/>";
                return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
            };
            // SVG SMIL animation
            tests["smil"] = function() {
                return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, "animate")));
            };
            // This test is only for clip paths in SVG proper, not clip paths on HTML content
            // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg
            // However read the comments to dig into applying SVG clippaths to HTML content here:
            //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
            tests["svgclippaths"] = function() {
                return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, "clipPath")));
            };
            /*>>webforms*/
            // input features and input types go directly onto the ret object, bypassing the tests loop.
            // Hold this guy to execute in a moment.
            function webforms() {
                /*>>input*/
                // Run through HTML5's new input attributes to see if the UA understands any.
                // We're using f which is the <input> element created early on
                // Mike Taylr has created a comprehensive resource for testing these attributes
                //   when applied to all input types:
                //   miketaylr.com/code/input-type-attr.html
                // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
                // Only input placeholder is tested while textarea's placeholder is not.
                // Currently Safari 4 and Opera 11 have support only for the input placeholder
                // Both tests are available in feature-detects/forms-placeholder.js
                Modernizr["input"] = function(props) {
                    for (var i = 0, len = props.length; i < len; i++) {
                        attrs[props[i]] = !!(props[i] in inputElem);
                    }
                    if (attrs.list) {
                        // safari false positive's on datalist: webk.it/74252
                        // see also github.com/Modernizr/Modernizr/issues/146
                        attrs.list = !!(document.createElement("datalist") && window.HTMLDataListElement);
                    }
                    return attrs;
                }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
                /*>>input*/
                /*>>inputtypes*/
                // Run through HTML5's new input types to see if the UA understands any.
                //   This is put behind the tests runloop because it doesn't return a
                //   true/false like all the other tests; instead, it returns an object
                //   containing each input type with its corresponding true/false value
                // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
                Modernizr["inputtypes"] = function(props) {
                    for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {
                        inputElem.setAttribute("type", inputElemType = props[i]);
                        bool = inputElem.type !== "text";
                        // We first check to see if the type we give it sticks..
                        // If the type does, we feed it a textual value, which shouldn't be valid.
                        // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                        if (bool) {
                            inputElem.value = smile;
                            inputElem.style.cssText = "position:absolute;visibility:hidden;";
                            if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
                                docElement.appendChild(inputElem);
                                defaultView = document.defaultView;
                                // Safari 2-4 allows the smiley as a value, despite making a slider
                                bool = defaultView.getComputedStyle && defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== "textfield" && // Mobile android web browser has false positive, so must
                                // check the height to see if the widget is actually there.
                                inputElem.offsetHeight !== 0;
                                docElement.removeChild(inputElem);
                            } else if (/^(search|tel)$/.test(inputElemType)) {} else if (/^(url|email)$/.test(inputElemType)) {
                                // Real url and email support comes with prebaked validation.
                                bool = inputElem.checkValidity && inputElem.checkValidity() === false;
                            } else {
                                // If the upgraded input compontent rejects the :) text, we got a winner
                                bool = inputElem.value != smile;
                            }
                        }
                        inputs[props[i]] = !!bool;
                    }
                    return inputs;
                }("search tel url email datetime date month week time datetime-local number range color".split(" "));
            }
            /*>>webforms*/
            // End of test definitions
            // -----------------------
            // Run through all tests and detect their support in the current UA.
            // todo: hypothetically we could be doing an array of tests and use a basic loop here.
            for (var feature in tests) {
                if (hasOwnProp(tests, feature)) {
                    // run the test, throw the return value into the Modernizr,
                    //   then based on that boolean, define an appropriate className
                    //   and push it into an array of classes we'll join later.
                    featureName = feature.toLowerCase();
                    Modernizr[featureName] = tests[feature]();
                    classes.push((Modernizr[featureName] ? "" : "no-") + featureName);
                }
            }
            /*>>webforms*/
            // input tests need to run.
            Modernizr.input || webforms();
            /*>>webforms*/
            /**
	     * addTest allows the user to define their own feature tests
	     * the result will be added onto the Modernizr object,
	     * as well as an appropriate className set on the html element
	     *
	     * @param feature - String naming the feature
	     * @param test - Function returning true if feature is supported, false if not
	     */
            Modernizr.addTest = function(feature, test) {
                if (typeof feature == "object") {
                    for (var key in feature) {
                        if (hasOwnProp(feature, key)) {
                            Modernizr.addTest(key, feature[key]);
                        }
                    }
                } else {
                    feature = feature.toLowerCase();
                    if (Modernizr[feature] !== undefined) {
                        // we're going to quit if you're trying to overwrite an existing test
                        // if we were to allow it, we'd do this:
                        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
                        //   docElement.className = docElement.className.replace( re, '' );
                        // but, no rly, stuff 'em.
                        return Modernizr;
                    }
                    test = typeof test == "function" ? test() : test;
                    if (typeof enableClasses !== "undefined" && enableClasses) {
                        docElement.className += " " + (test ? "" : "no-") + feature;
                    }
                    Modernizr[feature] = test;
                }
                return Modernizr;
            };
            // Reset modElem.cssText to nothing to reduce memory footprint.
            setCss("");
            modElem = inputElem = null;
            (function(window, document) {
                /*jshint evil:true */
                /** version */
                var version = "3.7.0";
                /** Preset options */
                var options = window.html5 || {};
                /** Used to skip problem elements */
                var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
                /** Not all elements can be cloned in IE **/
                var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
                /** Detect whether the browser supports default html5 styles */
                var supportsHtml5Styles;
                /** Name of the expando, to work with multiple documents or to re-shiv one document */
                var expando = "_html5shiv";
                /** The id for the the documents expando */
                var expanID = 0;
                /** Cached data for each document */
                var expandoData = {};
                /** Detect whether the browser supports unknown elements */
                var supportsUnknownElements;
                (function() {
                    try {
                        var a = document.createElement("a");
                        a.innerHTML = "<xyz></xyz>";
                        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
                        supportsHtml5Styles = "hidden" in a;
                        supportsUnknownElements = a.childNodes.length == 1 || function() {
                            // assign a false positive if unable to shiv
                            document.createElement("a");
                            var frag = document.createDocumentFragment();
                            return typeof frag.cloneNode == "undefined" || typeof frag.createDocumentFragment == "undefined" || typeof frag.createElement == "undefined";
                        }();
                    } catch (e) {
                        // assign a false positive if detection fails => unable to shiv
                        supportsHtml5Styles = true;
                        supportsUnknownElements = true;
                    }
                })();
                /*--------------------------------------------------------------------------*/
                /**
	         * Creates a style sheet with the given CSS text and adds it to the document.
	         * @private
	         * @param {Document} ownerDocument The document.
	         * @param {String} cssText The CSS text.
	         * @returns {StyleSheet} The style element.
	         */
                function addStyleSheet(ownerDocument, cssText) {
                    var p = ownerDocument.createElement("p"), parent = ownerDocument.getElementsByTagName("head")[0] || ownerDocument.documentElement;
                    p.innerHTML = "x<style>" + cssText + "</style>";
                    return parent.insertBefore(p.lastChild, parent.firstChild);
                }
                /**
	         * Returns the value of `html5.elements` as an array.
	         * @private
	         * @returns {Array} An array of shived element node names.
	         */
                function getElements() {
                    var elements = html5.elements;
                    return typeof elements == "string" ? elements.split(" ") : elements;
                }
                /**
	         * Returns the data associated to the given document
	         * @private
	         * @param {Document} ownerDocument The document.
	         * @returns {Object} An object of data.
	         */
                function getExpandoData(ownerDocument) {
                    var data = expandoData[ownerDocument[expando]];
                    if (!data) {
                        data = {};
                        expanID++;
                        ownerDocument[expando] = expanID;
                        expandoData[expanID] = data;
                    }
                    return data;
                }
                /**
	         * returns a shived element for the given nodeName and document
	         * @memberOf html5
	         * @param {String} nodeName name of the element
	         * @param {Document} ownerDocument The context document.
	         * @returns {Object} The shived element.
	         */
                function createElement(nodeName, ownerDocument, data) {
                    if (!ownerDocument) {
                        ownerDocument = document;
                    }
                    if (supportsUnknownElements) {
                        return ownerDocument.createElement(nodeName);
                    }
                    if (!data) {
                        data = getExpandoData(ownerDocument);
                    }
                    var node;
                    if (data.cache[nodeName]) {
                        node = data.cache[nodeName].cloneNode();
                    } else if (saveClones.test(nodeName)) {
                        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
                    } else {
                        node = data.createElem(nodeName);
                    }
                    // Avoid adding some elements to fragments in IE < 9 because
                    // * Attributes like `name` or `type` cannot be set/changed once an element
                    //   is inserted into a document/fragment
                    // * Link elements with `src` attributes that are inaccessible, as with
                    //   a 403 response, will cause the tab/window to crash
                    // * Script elements appended to fragments will execute when their `src`
                    //   or `text` property is set
                    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
                }
                /**
	         * returns a shived DocumentFragment for the given document
	         * @memberOf html5
	         * @param {Document} ownerDocument The context document.
	         * @returns {Object} The shived DocumentFragment.
	         */
                function createDocumentFragment(ownerDocument, data) {
                    if (!ownerDocument) {
                        ownerDocument = document;
                    }
                    if (supportsUnknownElements) {
                        return ownerDocument.createDocumentFragment();
                    }
                    data = data || getExpandoData(ownerDocument);
                    var clone = data.frag.cloneNode(), i = 0, elems = getElements(), l = elems.length;
                    for (;i < l; i++) {
                        clone.createElement(elems[i]);
                    }
                    return clone;
                }
                /**
	         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
	         * @private
	         * @param {Document|DocumentFragment} ownerDocument The document.
	         * @param {Object} data of the document.
	         */
                function shivMethods(ownerDocument, data) {
                    if (!data.cache) {
                        data.cache = {};
                        data.createElem = ownerDocument.createElement;
                        data.createFrag = ownerDocument.createDocumentFragment;
                        data.frag = data.createFrag();
                    }
                    ownerDocument.createElement = function(nodeName) {
                        //abort shiv
                        if (!html5.shivMethods) {
                            return data.createElem(nodeName);
                        }
                        return createElement(nodeName, ownerDocument, data);
                    };
                    ownerDocument.createDocumentFragment = Function("h,f", "return function(){" + "var n=f.cloneNode(),c=n.createElement;" + "h.shivMethods&&(" + // unroll the `createElement` calls
                    getElements().join().replace(/[\w\-]+/g, function(nodeName) {
                        data.createElem(nodeName);
                        data.frag.createElement(nodeName);
                        return 'c("' + nodeName + '")';
                    }) + ");return n}")(html5, data.frag);
                }
                /*--------------------------------------------------------------------------*/
                /**
	         * Shivs the given document.
	         * @memberOf html5
	         * @param {Document} ownerDocument The document to shiv.
	         * @returns {Document} The shived document.
	         */
                function shivDocument(ownerDocument) {
                    if (!ownerDocument) {
                        ownerDocument = document;
                    }
                    var data = getExpandoData(ownerDocument);
                    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
                        data.hasCSS = !!addStyleSheet(ownerDocument, // corrects block display not defined in IE6/7/8/9
                        "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}" + // adds styling not present in IE6/7/8/9
                        "mark{background:#FF0;color:#000}" + // hides non-rendered elements
                        "template{display:none}");
                    }
                    if (!supportsUnknownElements) {
                        shivMethods(ownerDocument, data);
                    }
                    return ownerDocument;
                }
                /*--------------------------------------------------------------------------*/
                /**
	         * The `html5` object is exposed so that more elements can be shived and
	         * existing shiving can be detected on iframes.
	         * @type Object
	         * @example
	         *
	         * // options can be changed before the script is included
	         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
	         */
                var html5 = {
                    /**
	           * An array or space separated string of node names of the elements to shiv.
	           * @memberOf html5
	           * @type Array|String
	           */
                    elements: options.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    /**
	           * current version of html5shiv
	           */
                    version: version,
                    /**
	           * A flag to indicate that the HTML5 style sheet should be inserted.
	           * @memberOf html5
	           * @type Boolean
	           */
                    shivCSS: options.shivCSS !== false,
                    /**
	           * Is equal to true if a browser supports creating unknown/HTML5 elements
	           * @memberOf html5
	           * @type boolean
	           */
                    supportsUnknownElements: supportsUnknownElements,
                    /**
	           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
	           * methods should be overwritten.
	           * @memberOf html5
	           * @type Boolean
	           */
                    shivMethods: options.shivMethods !== false,
                    /**
	           * A string to describe the type of `html5` object ("default" or "default print").
	           * @memberOf html5
	           * @type String
	           */
                    type: "default",
                    // shivs the document according to the specified `html5` object options
                    shivDocument: shivDocument,
                    //creates a shived element
                    createElement: createElement,
                    //creates a shived documentFragment
                    createDocumentFragment: createDocumentFragment
                };
                /*--------------------------------------------------------------------------*/
                // expose html5
                window.html5 = html5;
                // shiv the document
                shivDocument(document);
            })(this, document);
            /*>>shiv*/
            // Assign private properties to the return object with prefix
            Modernizr._version = version;
            // expose these for the plugin API. Look in the source for how to join() them against your input
            /*>>prefixes*/
            Modernizr._prefixes = prefixes;
            /*>>prefixes*/
            /*>>domprefixes*/
            Modernizr._domPrefixes = domPrefixes;
            Modernizr._cssomPrefixes = cssomPrefixes;
            /*>>domprefixes*/
            /*>>mq*/
            // Modernizr.mq tests a given media query, live against the current state of the window
            // A few important notes:
            //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
            //   * A max-width or orientation query will be evaluated against the current state, which may change later.
            //   * You must specify values. Eg. If you are testing support for the min-width media query use:
            //       Modernizr.mq('(min-width:0)')
            // usage:
            // Modernizr.mq('only screen and (max-width:768)')
            Modernizr.mq = testMediaQuery;
            /*>>mq*/
            /*>>hasevent*/
            // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
            // Modernizr.hasEvent('gesturestart', elem)
            Modernizr.hasEvent = isEventSupported;
            /*>>hasevent*/
            /*>>testprop*/
            // Modernizr.testProp() investigates whether a given style property is recognized
            // Note that the property names must be provided in the camelCase variant.
            // Modernizr.testProp('pointerEvents')
            Modernizr.testProp = function(prop) {
                return testProps([ prop ]);
            };
            /*>>testprop*/
            /*>>testallprops*/
            // Modernizr.testAllProps() investigates whether a given style property,
            //   or any of its vendor-prefixed variants, is recognized
            // Note that the property names must be provided in the camelCase variant.
            // Modernizr.testAllProps('boxSizing')
            Modernizr.testAllProps = testPropsAll;
            /*>>testallprops*/
            /*>>teststyles*/
            // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
            // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
            Modernizr.testStyles = injectElementWithStyles;
            /*>>teststyles*/
            /*>>prefixed*/
            // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
            // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'
            // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
            // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
            //
            //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');
            // If you're trying to ascertain which transition end event to bind to, you might do something like...
            //
            //     var transEndEventNames = {
            //       'WebkitTransition' : 'webkitTransitionEnd',
            //       'MozTransition'    : 'transitionend',
            //       'OTransition'      : 'oTransitionEnd',
            //       'msTransition'     : 'MSTransitionEnd',
            //       'transition'       : 'transitionend'
            //     },
            //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
            Modernizr.prefixed = function(prop, obj, elem) {
                if (!obj) {
                    return testPropsAll(prop, "pfx");
                } else {
                    // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
                    return testPropsAll(prop, obj, elem);
                }
            };
            /*>>prefixed*/
            /*>>cssclasses*/
            // Remove "no-js" class from <html> element, if it exists:
            docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (// Add the new classes to the <html> element.
            enableClasses ? " js " + classes.join(" ") : "");
            /*>>cssclasses*/
            return Modernizr;
        }(this, this.document);
        /*** EXPORTS FROM exports-loader ***/
        module.exports = window.Modernizr;
    }).call(window);
}, /* 4 */
/***/
function(module, exports, __webpack_require__) {
    /*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
    var stylesInDom = {}, memoize = function(fn) {
        var memo;
        return function() {
            if (typeof memo === "undefined") memo = fn.apply(this, arguments);
            return memo;
        };
    }, isIE9 = memoize(function() {
        return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
    }), getHeadElement = memoize(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), singletonElement = null, singletonCounter = 0;
    module.exports = function(list, options) {
        if (false) {
            if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }
        options = options || {};
        // Force single-tag solution on IE9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        if (typeof options.singleton === "undefined") options.singleton = isIE9();
        var styles = listToStyles(list);
        addStylesToDom(styles, options);
        return function update(newList) {
            var mayRemove = [];
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                domStyle.refs--;
                mayRemove.push(domStyle);
            }
            if (newList) {
                var newStyles = listToStyles(newList);
                addStylesToDom(newStyles, options);
            }
            for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (domStyle.refs === 0) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    };
    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j](item.parts[j]);
                }
                for (;j < item.parts.length; j++) {
                    domStyle.parts.push(addStyle(item.parts[j], options));
                }
            } else {
                var parts = [];
                for (var j = 0; j < item.parts.length; j++) {
                    parts.push(addStyle(item.parts[j], options));
                }
                stylesInDom[item.id] = {
                    id: item.id,
                    refs: 1,
                    parts: parts
                };
            }
        }
    }
    function listToStyles(list) {
        var styles = [];
        var newStyles = {};
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {
                css: css,
                media: media,
                sourceMap: sourceMap
            };
            if (!newStyles[id]) styles.push(newStyles[id] = {
                id: id,
                parts: [ part ]
            }); else newStyles[id].parts.push(part);
        }
        return styles;
    }
    function createStyleElement() {
        var styleElement = document.createElement("style");
        var head = getHeadElement();
        styleElement.type = "text/css";
        head.appendChild(styleElement);
        return styleElement;
    }
    function addStyle(obj, options) {
        var styleElement, update, remove;
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement());
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
            remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
        } else {
            styleElement = createStyleElement();
            update = applyToTag.bind(null, styleElement);
            remove = function() {
                styleElement.parentNode.removeChild(styleElement);
            };
        }
        update(obj);
        return function updateStyle(newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                update(obj = newObj);
            } else {
                remove();
            }
        };
    }
    function replaceText(source, id, replacement) {
        var boundaries = [ "/** >>" + id + " **/", "/** " + id + "<< **/" ];
        var start = source.lastIndexOf(boundaries[0]);
        var wrappedReplacement = replacement ? boundaries[0] + replacement + boundaries[1] : "";
        if (source.lastIndexOf(boundaries[0]) >= 0) {
            var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
            return source.slice(0, start) + wrappedReplacement + source.slice(end);
        } else {
            return source + wrappedReplacement;
        }
    }
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
        } else {
            var cssNode = document.createTextNode(css);
            var childNodes = styleElement.childNodes;
            if (childNodes[index]) styleElement.removeChild(childNodes[index]);
            if (childNodes.length) {
                styleElement.insertBefore(cssNode, childNodes[index]);
            } else {
                styleElement.appendChild(cssNode);
            }
        }
    }
    function applyToTag(styleElement, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;
        if (sourceMap && typeof btoa === "function") {
            try {
                css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
                css = '@import url("data:stylesheet/css;base64,' + btoa(css) + '")';
            } catch (e) {}
        }
        if (media) {
            styleElement.setAttribute("media", media);
        }
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
        } else {
            while (styleElement.firstChild) {
                styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
        }
    }
}, /* 5 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(2);
    if (typeof content === "string") content = [ [ module.id, content, "" ] ];
    // add the styles to the DOM
    var update = __webpack_require__(4)(content, {});
    // Hot Module Replacement
    if (false) {
        // When the styles change, update the <style> tags
        module.hot.accept("!!/Users/seanconnolly/Documents/Dev/web/static/node_modules/css-loader/index.js!/Users/seanconnolly/Documents/Dev/web/static/src/css/style.css", function() {
            var newContent = require("!!/Users/seanconnolly/Documents/Dev/web/static/node_modules/css-loader/index.js!/Users/seanconnolly/Documents/Dev/web/static/src/css/style.css");
            if (typeof newContent === "string") newContent = [ module.id, newContent, "" ];
            update(newContent);
        });
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() {
            update();
        });
    }
}, /* 6 */
/***/
function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    (function(name, context, factory) {
        var matchMedia = window.matchMedia;
        if (typeof module !== "undefined" && module.exports) {
            module.exports = factory(matchMedia);
        } else if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return context[name] = factory(matchMedia);
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
            context[name] = factory(matchMedia);
        }
    })("enquire", this, function(matchMedia) {
        "use strict";
        /*jshint unused:false */
        /**
	     * Helper function for iterating over a collection
	     *
	     * @param collection
	     * @param fn
	     */
        function each(collection, fn) {
            var i = 0, length = collection.length, cont;
            for (i; i < length; i++) {
                cont = fn(collection[i], i);
                if (cont === false) {
                    break;
                }
            }
        }
        /**
	     * Helper function for determining whether target object is an array
	     *
	     * @param target the object under test
	     * @return {Boolean} true if array, false otherwise
	     */
        function isArray(target) {
            return Object.prototype.toString.apply(target) === "[object Array]";
        }
        /**
	     * Helper function for determining whether target object is a function
	     *
	     * @param target the object under test
	     * @return {Boolean} true if function, false otherwise
	     */
        function isFunction(target) {
            return typeof target === "function";
        }
        /**
	     * Delegate to handle a media query being matched and unmatched.
	     *
	     * @param {object} options
	     * @param {function} options.match callback for when the media query is matched
	     * @param {function} [options.unmatch] callback for when the media query is unmatched
	     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
	     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
	     * @constructor
	     */
        function QueryHandler(options) {
            this.options = options;
            !options.deferSetup && this.setup();
        }
        QueryHandler.prototype = {
            /**
	         * coordinates setup of the handler
	         *
	         * @function
	         */
            setup: function() {
                if (this.options.setup) {
                    this.options.setup();
                }
                this.initialised = true;
            },
            /**
	         * coordinates setup and triggering of the handler
	         *
	         * @function
	         */
            on: function() {
                !this.initialised && this.setup();
                this.options.match && this.options.match();
            },
            /**
	         * coordinates the unmatch event for the handler
	         *
	         * @function
	         */
            off: function() {
                this.options.unmatch && this.options.unmatch();
            },
            /**
	         * called when a handler is to be destroyed.
	         * delegates to the destroy or unmatch callbacks, depending on availability.
	         *
	         * @function
	         */
            destroy: function() {
                this.options.destroy ? this.options.destroy() : this.off();
            },
            /**
	         * determines equality by reference.
	         * if object is supplied compare options, if function, compare match callback
	         *
	         * @function
	         * @param {object || function} [target] the target for comparison
	         */
            equals: function(target) {
                return this.options === target || this.options.match === target;
            }
        };
        /**
	     * Represents a single media query, manages it's state and registered handlers for this query
	     *
	     * @constructor
	     * @param {string} query the media query string
	     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
	     */
        function MediaQuery(query, isUnconditional) {
            this.query = query;
            this.isUnconditional = isUnconditional;
            this.handlers = [];
            this.mql = matchMedia(query);
            var self = this;
            this.listener = function(mql) {
                self.mql = mql;
                self.assess();
            };
            this.mql.addListener(this.listener);
        }
        MediaQuery.prototype = {
            /**
	         * add a handler for this query, triggering if already active
	         *
	         * @param {object} handler
	         * @param {function} handler.match callback for when query is activated
	         * @param {function} [handler.unmatch] callback for when query is deactivated
	         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
	         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
	         */
            addHandler: function(handler) {
                var qh = new QueryHandler(handler);
                this.handlers.push(qh);
                this.matches() && qh.on();
            },
            /**
	         * removes the given handler from the collection, and calls it's destroy methods
	         * 
	         * @param {object || function} handler the handler to remove
	         */
            removeHandler: function(handler) {
                var handlers = this.handlers;
                each(handlers, function(h, i) {
                    if (h.equals(handler)) {
                        h.destroy();
                        return !handlers.splice(i, 1);
                    }
                });
            },
            /**
	         * Determine whether the media query should be considered a match
	         * 
	         * @return {Boolean} true if media query can be considered a match, false otherwise
	         */
            matches: function() {
                return this.mql.matches || this.isUnconditional;
            },
            /**
	         * Clears all handlers and unbinds events
	         */
            clear: function() {
                each(this.handlers, function(handler) {
                    handler.destroy();
                });
                this.mql.removeListener(this.listener);
                this.handlers.length = 0;
            },
            /*
	         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
	         */
            assess: function() {
                var action = this.matches() ? "on" : "off";
                each(this.handlers, function(handler) {
                    handler[action]();
                });
            }
        };
        /**
	     * Allows for registration of query handlers.
	     * Manages the query handler's state and is responsible for wiring up browser events
	     *
	     * @constructor
	     */
        function MediaQueryDispatch() {
            if (!matchMedia) {
                throw new Error("matchMedia not present, legacy browsers require a polyfill");
            }
            this.queries = {};
            this.browserIsIncapable = !matchMedia("only all").matches;
        }
        MediaQueryDispatch.prototype = {
            /**
	         * Registers a handler for the given media query
	         *
	         * @param {string} q the media query
	         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
	         * @param {function} options.match fired when query matched
	         * @param {function} [options.unmatch] fired when a query is no longer matched
	         * @param {function} [options.setup] fired when handler first triggered
	         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
	         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
	         */
            register: function(q, options, shouldDegrade) {
                var queries = this.queries, isUnconditional = shouldDegrade && this.browserIsIncapable;
                if (!queries[q]) {
                    queries[q] = new MediaQuery(q, isUnconditional);
                }
                //normalise to object in an array
                if (isFunction(options)) {
                    options = {
                        match: options
                    };
                }
                if (!isArray(options)) {
                    options = [ options ];
                }
                each(options, function(handler) {
                    if (isFunction(handler)) {
                        handler = {
                            match: handler
                        };
                    }
                    queries[q].addHandler(handler);
                });
                return this;
            },
            /**
	         * unregisters a query and all it's handlers, or a specific handler for a query
	         *
	         * @param {string} q the media query to target
	         * @param {object || function} [handler] specific handler to unregister
	         */
            unregister: function(q, handler) {
                var query = this.queries[q];
                if (query) {
                    if (handler) {
                        query.removeHandler(handler);
                    } else {
                        query.clear();
                        delete this.queries[q];
                    }
                }
                return this;
            }
        };
        return new MediaQueryDispatch();
    });
}, /* 7 */
/***/
function(module, exports, __webpack_require__) {} ]);