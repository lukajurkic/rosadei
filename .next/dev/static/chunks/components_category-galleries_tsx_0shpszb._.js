(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/category-galleries.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryGalleries",
    ()=>CategoryGalleries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const bouquetFiles = [
    'bijeli_sa_jednom_zlatnom.jpg',
    'bride_to_be.jpg',
    'dva_crvena_zuti.jpg',
    'krstenje_dva_kom.jpg',
    'plavi_sljokice.jpg',
    'plavi.jpg',
    'rozi_sljokice.jpg',
    'stich_plavo_rozi.jpg',
    'sto_jedna_ruza_plavo_rozi.jpg'
];
const rosaryFiles = [
    `krunica_1.webp`,
    `krunica_2.webp`,
    `krunica_3.webp`,
    `krunica_4.webp`,
    `krunica_5.webp`,
    `krunica_6.jpeg`,
    `krunica_7.jpeg`,
    `krunica_8.jpeg`,
    `krunica_9.jpeg`,
    `krunica_10.jpeg`,
    `krunica_11.jpg`
];
const boxBouquetsFiles = [
    `rozi_buket_drvo.jpg`
];
const categories = [
    {
        id: 'bouquets',
        title: 'Buketi',
        description: 'Naš prepoznatljivi stil izrade — čvrstoća, kvaliteta, kreativnost i ručna izrada.',
        slides: bouquetFiles.map((file)=>({
                src: `/images/bouquets/${file}`,
                alt: 'Buket - Rosa Dei'
            }))
    },
    {
        id: 'krunice',
        title: 'Krunice',
        description: 'Pogledajte krunice koje možete već danas naručiti zasebno ili kombinirati u paketu s buketom za predivan poklon za razne prilike. ',
        slides: rosaryFiles.map((file)=>({
                src: `/images/rosaries/${file}`,
                alt: 'Krunica - Rosa Dei'
            }))
    },
    {
        id: 'box-bouquets',
        title: 'Box Buketi',
        description: 'Naši box buketi, slični kao buketi, ali zanimljiviji i drugačiji. Pogledajte našu ponudu box buketa i naručite svoj danas.',
        slides: boxBouquetsFiles.map((file)=>({
                src: `/images/box_bouquets/${file}`,
                alt: 'Box Buket - Rosa Dei'
            }))
    }
];
function CategorySlideshow({ category }) {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const total = category.slides.length;
    const advance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CategorySlideshow.useCallback[advance]": ()=>{
            setCurrentSlide({
                "CategorySlideshow.useCallback[advance]": (index)=>(index + 1) % total
            }["CategorySlideshow.useCallback[advance]"]);
        }
    }["CategorySlideshow.useCallback[advance]"], [
        total
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategorySlideshow.useEffect": ()=>{
            const timer = setInterval(advance, 4000);
            return ({
                "CategorySlideshow.useEffect": ()=>clearInterval(timer)
            })["CategorySlideshow.useEffect"];
        }
    }["CategorySlideshow.useEffect"], [
        advance,
        currentSlide
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: advance,
                "aria-label": `Show next image in ${category.title}`,
                className: "relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl border border-rose-200/50 shadow-lg shadow-rose-900/10 transition-shadow hover:shadow-xl hover:shadow-rose-900/15 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none",
                children: [
                    category.slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.src,
                            alt: slide.alt,
                            fill: true,
                            sizes: "(max-width: 768px) 100vw, 672px",
                            priority: index === 0,
                            className: `object-cover transition-opacity duration-1000 ease-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`
                        }, slide.src, false, {
                            fileName: "[project]/components/category-galleries.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/category-galleries.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-4 left-5 text-[0.6rem] tracking-[0.24em] text-white/85 uppercase",
                        children: `${currentSlide + 1} / ${total}`
                    }, void 0, false, {
                        fileName: "[project]/components/category-galleries.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/category-galleries.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex items-center justify-center gap-2.5",
                children: category.slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setCurrentSlide(index),
                        "aria-label": `Go to image ${index + 1} of ${category.title}`,
                        "aria-current": index === currentSlide,
                        className: `h-1.5 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none ${index === currentSlide ? 'w-8 bg-gold' : 'w-1.5 bg-foreground/20 hover:bg-foreground/40'}`
                    }, slide.src, false, {
                        fileName: "[project]/components/category-galleries.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/category-galleries.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/category-galleries.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(CategorySlideshow, "EO50/Ty9S7qjdZmjAXI0OwoYmvg=");
_c = CategorySlideshow;
function CategoryGalleries() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "collections",
        className: "scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16 text-center sm:mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[0.62rem] tracking-[0.28em] text-foreground/50 uppercase",
                            children: "Naši proizvodi"
                        }, void 0, false, {
                            fileName: "[project]/components/category-galleries.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 font-serif text-3xl leading-tight font-light text-balance sm:text-5xl",
                            children: "Iskaži svoju ljubav i pažnju, mi ti u tome pomažemo"
                        }, void 0, false, {
                            fileName: "[project]/components/category-galleries.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/category-galleries.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-20 sm:gap-28",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            id: category.id,
                            className: "scroll-mt-28",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif text-2xl leading-tight font-light sm:text-4xl",
                                            children: category.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/category-galleries.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mx-auto mt-3 max-w-md leading-relaxed text-pretty text-foreground/65",
                                            children: category.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/category-galleries.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/category-galleries.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategorySlideshow, {
                                    category: category
                                }, void 0, false, {
                                    fileName: "[project]/components/category-galleries.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, category.id, true, {
                            fileName: "[project]/components/category-galleries.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/category-galleries.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/category-galleries.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/category-galleries.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_c1 = CategoryGalleries;
var _c, _c1;
__turbopack_context__.k.register(_c, "CategorySlideshow");
__turbopack_context__.k.register(_c1, "CategoryGalleries");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_category-galleries_tsx_0shpszb._.js.map