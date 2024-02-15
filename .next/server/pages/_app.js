(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6372:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__uSNcK"
};


/***/ }),

/***/ 9370:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__nnHgx",
	"dropdown-toggle": "header_dropdown-toggle__H51rU",
	"navbarNavDropdown": "header_navbarNavDropdown__mecS2"
};


/***/ }),

/***/ 2585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/header.module.css
var header_module = __webpack_require__(9370);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./src/assets/logo/halalsnoep-logo.svg
/* harmony default export */ const halalsnoep_logo = ({"src":"/_next/static/media/halalsnoep-logo.0072bf44.svg","height":74,"width":498});
;// CONCATENATED MODULE: ./src/components/header.js






function Header() {
    (0,external_react_.useEffect)(()=>{}, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (header_module_default()).header + " fadeinheader stickyheader",
        id: "halalsnoepheader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                class: "navbar navbar-expand-lg navbar-light",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        class: "navbar-brand",
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: halalsnoep_logo,
                            alt: "Logo van halal-snoep.nl"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        class: "navbar-toggler bg-white",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarNavDropdown",
                        "aria-controls": "navbarNavDropdown",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            class: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "collapse navbar-collapse justify-content-end",
                        id: "navbarNavDropdown",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            class: "navbar-nav",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    class: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        class: "nav-link text-light",
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    class: "nav-item dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "nav-link dropdown-toggle text-light",
                                            id: "navbarDropdownMenuLink",
                                            "data-toggle": "dropdown",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            children: "Halal snoep bestellen"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "dropdown-menu",
                                            "aria-labelledby": "navbarDropdownMenuLink",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/halal-snoep-bestellen",
                                                    children: "Halal snoep bestellen"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/halal-snoep-bestellen/halal-delight-webshop",
                                                    children: "Halal Delight Webshop"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/halal-snoep-bestellen/halal-snoepjes-in-nederland",
                                                    children: "Halal Snoepjes in Nederland"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/halal-snoep-bestellen/halal-snoepjes-in-belgie",
                                                    children: "Halal Snoepjes in Belgi\xeb"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    class: "nav-item dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "nav-link dropdown-toggle text-light",
                                            id: "navbarDropdownMenuLink",
                                            "data-toggle": "dropdown",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            children: "Wat is halal snoep?"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "dropdown-menu",
                                            "aria-labelledby": "navbarDropdownMenuLink",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/wat-is-halal-snoep",
                                                    children: "Wat is halal snoep?"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/wat-is-halal-snoep/hoe-werkt-halal-slachten",
                                                    children: "Hoe werkt halal slachten?"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/wat-is-halal-snoep/waar-kan-ik-halal-snoep-kopen/",
                                                    children: "Waar kan ik halal snoep kopen?"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/wat-is-halal-snoep/halal-snoep-merken/",
                                                    children: "Halal snoep merken"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    class: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        class: "nav-link text-light",
                                        href: "/halal-snoep-producten",
                                        children: "Halal Snoep Producten"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    class: "nav-item dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "nav-link dropdown-toggle text-light",
                                            id: "navbarDropdownMenuLink",
                                            "data-toggle": "dropdown",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            children: "Blog"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "dropdown-menu",
                                            "aria-labelledby": "navbarDropdownMenuLink",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/blog",
                                                    children: "Blog"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/blog/is-snoep-slecht-voor-je",
                                                    children: "Is snoep slecht voor je?"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/blog/snoep-uit-de-jaren-90-en-80",
                                                    children: "Snoep uit de jaren 90 en 80"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/blog/snoep-uit-amerika",
                                                    children: "Snoep uit Amerika"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/blog/snoep-uit-turkije",
                                                    children: "Snoep uit Turkije"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    class: "dropdown-item text-dark",
                                                    href: "/blog/wat-doet-snoep-met-je-lichaam",
                                                    children: "Wat doet snoep met je lichaam?"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    class: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        class: "nav-link text-light",
                                        href: "/contact",
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: ./src/styles/footer.module.css
var footer_module = __webpack_require__(6372);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./src/components/footer.js






function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (footer_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: halalsnoep_logo,
                                        alt: "Logo van halal-snoep.nl"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/algemene-voorwaarden",
                                    children: "Algemene Voorwaarden"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/disclaimer",
                                    children: "Disclaimer"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    target: "_blank",
                                    href: "/sitemap.xml",
                                    children: "XML Sitemap"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Halal snoep bestellen"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/halal-snoep-bestellen",
                                    children: "Halal snoep bestellen"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/halal-snoep-bestellen/halal-delight-webshop",
                                    children: "Halal Delight Webshop"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/halal-snoep-bestellen/halal-snoepjes-in-nederland",
                                    children: "Halal snoepjes in Nederland"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/halal-snoep-bestellen/halal-snoepjes-in-belgie",
                                    children: "Halal snoepjes in Belgi\xeb"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Wat is halal snoep?"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/wat-is-halal-snoep",
                                    children: "Wat is halal snoep?"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/wat-is-halal-snoep/hoe-werkt-halal-slachten",
                                    children: "Hoe werkt halal slachten?"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/wat-is-halal-snoep/waar-kan-ik-halal-snoep-kopen",
                                    children: "Waar kan ik halal snoep kopen?"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/wat-is-halal-snoep/halal-snoep-merken",
                                    children: "Halal snoep merken"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/halal-snoep-producten",
                                    children: "Halal snoep producten"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog/is-snoep-slecht-voor-je",
                                    children: "Is snoep slecht voor je?"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog/snoep-uit-de-jaren-90-en-80",
                                    children: "Snoep uit de jaren 90 en 80"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog/snoep-uit-amerika",
                                    children: "Snoep uit Amerika"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog/snoep-uit-turkije",
                                    children: "Snoep uit Turkije"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog/wat-doet-snoep-met-je-lichaam",
                                    children: "Wat doet snoep met je lichaam?"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Halal-snoep.nl - \xa9 Copyright 2023 - ",
                        currentYear
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/_app.js





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "format-detection",
                        content: "telephone=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "/logo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "/favicon-16x16.png",
                        sizes: "16x16"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "/favicon-32x32.png",
                        sizes: "32x32"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://unpkg.com/aos@2.3.1/dist/aos.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",
                        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
                        crossorigin: "anonymous"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61], () => (__webpack_exec__(2585)));
module.exports = __webpack_exports__;

})();