(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeColor = void 0;
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["BLUE"] = "default";
    BadgeColor["GREEN"] = "success";
    BadgeColor["GREY"] = "info";
    BadgeColor["YELLOW"] = "warning";
    BadgeColor["RED"] = "danger";
})(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],5:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
/**
* @deprecated Use {@link PaperbackExtensionBase}
*/
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = exports.SourceIntents = void 0;
var SourceIntents;
(function (SourceIntents) {
    SourceIntents[SourceIntents["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
    SourceIntents[SourceIntents["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
    SourceIntents[SourceIntents["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
    SourceIntents[SourceIntents["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
    SourceIntents[SourceIntents["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
    SourceIntents[SourceIntents["SETTINGS_UI"] = 32] = "SETTINGS_UI";
})(SourceIntents = exports.SourceIntents || (exports.SourceIntents = {}));
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],7:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./ByteArray"), exports);
__exportStar(require("./Badge"), exports);
__exportStar(require("./interfaces"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./HomeSectionType"), exports);
__exportStar(require("./PaperbackExtensionBase"), exports);

},{"./Badge":1,"./ByteArray":2,"./HomeSectionType":3,"./PaperbackExtensionBase":4,"./Source":5,"./SourceInfo":6,"./interfaces":15}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],15:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./ChapterProviding"), exports);
__exportStar(require("./CloudflareBypassRequestProviding"), exports);
__exportStar(require("./HomePageSectionsProviding"), exports);
__exportStar(require("./MangaProgressProviding"), exports);
__exportStar(require("./MangaProviding"), exports);
__exportStar(require("./RequestManagerProviding"), exports);
__exportStar(require("./SearchResultsProviding"), exports);

},{"./ChapterProviding":8,"./CloudflareBypassRequestProviding":9,"./HomePageSectionsProviding":10,"./MangaProgressProviding":11,"./MangaProviding":12,"./RequestManagerProviding":13,"./SearchResultsProviding":14}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],60:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./DynamicUI/Exports/DUIBinding"), exports);
__exportStar(require("./DynamicUI/Exports/DUIForm"), exports);
__exportStar(require("./DynamicUI/Exports/DUIFormRow"), exports);
__exportStar(require("./DynamicUI/Exports/DUISection"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIHeader"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILink"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIMultilineLabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUINavigationButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIOAuthButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISecureInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISelect"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIStepper"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISwitch"), exports);
__exportStar(require("./Exports/ChapterDetails"), exports);
__exportStar(require("./Exports/Chapter"), exports);
__exportStar(require("./Exports/Cookie"), exports);
__exportStar(require("./Exports/HomeSection"), exports);
__exportStar(require("./Exports/IconText"), exports);
__exportStar(require("./Exports/MangaInfo"), exports);
__exportStar(require("./Exports/MangaProgress"), exports);
__exportStar(require("./Exports/PartialSourceManga"), exports);
__exportStar(require("./Exports/MangaUpdates"), exports);
__exportStar(require("./Exports/PBCanvas"), exports);
__exportStar(require("./Exports/PBImage"), exports);
__exportStar(require("./Exports/PagedResults"), exports);
__exportStar(require("./Exports/RawData"), exports);
__exportStar(require("./Exports/Request"), exports);
__exportStar(require("./Exports/SourceInterceptor"), exports);
__exportStar(require("./Exports/RequestManager"), exports);
__exportStar(require("./Exports/Response"), exports);
__exportStar(require("./Exports/SearchField"), exports);
__exportStar(require("./Exports/SearchRequest"), exports);
__exportStar(require("./Exports/SourceCookieStore"), exports);
__exportStar(require("./Exports/SourceManga"), exports);
__exportStar(require("./Exports/SecureStateManager"), exports);
__exportStar(require("./Exports/SourceStateManager"), exports);
__exportStar(require("./Exports/Tag"), exports);
__exportStar(require("./Exports/TagSection"), exports);
__exportStar(require("./Exports/TrackedMangaChapterReadAction"), exports);
__exportStar(require("./Exports/TrackerActionQueue"), exports);

},{"./DynamicUI/Exports/DUIBinding":17,"./DynamicUI/Exports/DUIForm":18,"./DynamicUI/Exports/DUIFormRow":19,"./DynamicUI/Exports/DUISection":20,"./DynamicUI/Rows/Exports/DUIButton":21,"./DynamicUI/Rows/Exports/DUIHeader":22,"./DynamicUI/Rows/Exports/DUIInputField":23,"./DynamicUI/Rows/Exports/DUILabel":24,"./DynamicUI/Rows/Exports/DUILink":25,"./DynamicUI/Rows/Exports/DUIMultilineLabel":26,"./DynamicUI/Rows/Exports/DUINavigationButton":27,"./DynamicUI/Rows/Exports/DUIOAuthButton":28,"./DynamicUI/Rows/Exports/DUISecureInputField":29,"./DynamicUI/Rows/Exports/DUISelect":30,"./DynamicUI/Rows/Exports/DUIStepper":31,"./DynamicUI/Rows/Exports/DUISwitch":32,"./Exports/Chapter":33,"./Exports/ChapterDetails":34,"./Exports/Cookie":35,"./Exports/HomeSection":36,"./Exports/IconText":37,"./Exports/MangaInfo":38,"./Exports/MangaProgress":39,"./Exports/MangaUpdates":40,"./Exports/PBCanvas":41,"./Exports/PBImage":42,"./Exports/PagedResults":43,"./Exports/PartialSourceManga":44,"./Exports/RawData":45,"./Exports/Request":46,"./Exports/RequestManager":47,"./Exports/Response":48,"./Exports/SearchField":49,"./Exports/SearchRequest":50,"./Exports/SecureStateManager":51,"./Exports/SourceCookieStore":52,"./Exports/SourceInterceptor":53,"./Exports/SourceManga":54,"./Exports/SourceStateManager":55,"./Exports/Tag":56,"./Exports/TagSection":57,"./Exports/TrackedMangaChapterReadAction":58,"./Exports/TrackerActionQueue":59}],61:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./generated/_exports"), exports);
__exportStar(require("./base/index"), exports);
__exportStar(require("./compat/DyamicUI"), exports);

},{"./base/index":7,"./compat/DyamicUI":16,"./generated/_exports":60}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports,"__esModule",{value:true});
exports.NekoPost=exports.NekoPostInfo=void 0;
const types=require("@paperback/types");
const BASE="https://www.nekopost.net";
const SECTIONS=[
 {id:"manga",title:"Manga • ภาพ",path:"/manga",type:"m"},
 {id:"comic",title:"Comic • ภาพ",path:"/comic",type:"cd"},
 {id:"novel",title:"Novel • ข้อความ",path:"/novel",type:"n"},
 {id:"original_novel",title:"Original Novel • ข้อความ",path:"/original_novel",type:"f"},
 {id:"ai_project",title:"AI Project • ทดลอง",path:"/ai_project",type:""}
];
const excluded=/(?:hentai|smut|porn|nsfw|18\+|adult|explicit|เรท\s*18|ผู้ใหญ่เท่านั้น)/i;
exports.NekoPostInfo={version:"0.3.3",name:"NekoPost Multi 0.3.3 (test)",icon:"icon.png",author:"Community development",description:"Five categories with corrected NekoPost routing; reader compatibility under test.",contentRating:types.ContentRating.EVERYONE,websiteBaseURL:BASE,intents:types.SourceIntents.MANGA_CHAPTERS|types.SourceIntents.HOMEPAGE_SECTIONS};
function absolute(s){if(!s)return "";s=String(s).trim();if(/^(data:|javascript:|#)/i.test(s))return "";if(/^https?:\/\//i.test(s))return s;if(s.startsWith("//"))return "https:"+s;return BASE+(s.startsWith("/")?s:"/"+s)}
function identifier(url){return absolute(url).replace(/^https?:\/\/[^/]+/i,"").replace(/^\/+|\/+$/g,"")}
function clean(s){return String(s||"").replace(/\s+/g," ").trim()}
function coverUrl(value){
 if(!value)return "";
 if(typeof value==="object")return coverUrl(value.url||value.src||value.path||value.file||value.original||value.medium||value.large||value.thumbnail||value.image||"");
 let u=String(value).trim().replace(/&amp;/g,"&");
 if(!u||/^(data:|blob:|javascript:|#)/i.test(u))return "";
 if(u.includes(",")&&/\s+[0-9]+[wx]/.test(u))u=u.split(",")[0].trim().split(/\s+/)[0];
 if(/^https?:\/\//i.test(u))return u;
 if(u.startsWith("//"))return "https:"+u;
 if(u.startsWith("/"))return BASE+u;
 return BASE+"/"+u;
}
function imgUrl($,el){
 const images=el.is("img")?el:el.find("img");let found="";
 images.each((_,node)=>{const im=$(node);
  for(const key of ["data-src","data-original","data-lazy-src","data-image","data-url","data-cover","data-srcset","srcset","src"]){let v=im.attr(key)||"";if(key.includes("srcset"))v=v.split(",")[0].trim().split(/\s+/)[0];const u=coverUrl(v);if(u&&!/(placeholder|no[-_]?image|default[-_]?cover|loading\.gif|blank\.gif)/i.test(u)){found=u;return false}}
 });
 if(found)return found;
 const style=el.attr("style")||"";const m=style.match(/background-image\s*:\s*url\(['"]?([^)'"]+)/i);return m?coverUrl(m[1]):"";
}
function apiCover(item){
 const candidates=[item.coverUrl,item.coverURL,item.cover_url,item.coverImage,item.cover_image,item.coverPath,item.cover_path,item.coverFile,item.cover_file,item.cover,item.thumbnailUrl,item.thumbnailURL,item.thumbnail_url,item.thumbnail,item.thumb,item.imageUrl,item.imageURL,item.image_url,item.image,item.poster,item.picture,item.banner,item.projectCover,item.projectImage,item.projectImageUrl,item.projectThumbnail,item.project?.cover,item.project?.image,item.images?.cover,item.images?.thumbnail];
 for(const candidate of candidates){const u=coverUrl(candidate);if(u)return u}
 return "";
}
// NekoPost manga listing uses an external image host. When API responses
// omit cover fields, derive the documented cover path from the manga ID.
// Other categories keep their actual API/HTML covers; their URL patterns
// have not been verified and must not be guessed.
function knownMangaCover(id){
 const match=String(id||"").match(/^manga\/(\d+)$/);
 if(!match)return "";
 const n=match[1];
 return "https://www.osemocphoto.com/collectManga/"+n+"/"+n+"_cover.jpg";
}
function chapterNum(s){const m=String(s).match(/(?:chapter|chap|ch\.?|ตอนที่|ตอน)\s*([0-9]+(?:\.[0-9]+)?)/i);return m?parseFloat(m[1]):0}
function kind(id){return String(id).split("/")[0]}
function escapeXML(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}
function textPages(text){
 // Paperback's chapter interface is image-based. SVG data pages are an experimental adapter.
 // A host which rejects data:image/svg+xml cannot display these pages.
 const lines=[];for(const para of String(text).split(/\n+/)){let line="";for(const token of para.split(/\s+/)){if(!token)continue;if((line+" "+token).length>43&&line){lines.push(line);line=""}line+=(line?" ":"")+token}lines.push(line||" ")}
 const pages=[];for(let i=0;i<lines.length;i+=24){const block=lines.slice(i,i+24);let svg='<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1200" viewBox="0 0 800 1200"><rect width="800" height="1200" fill="#fffdf6"/>';block.forEach((line,j)=>{svg+='<text x="42" y="'+(75+j*44)+'" font-family="sans-serif" font-size="25" fill="#202020">'+escapeXML(line)+'</text>'});svg+='</svg>';pages.push('data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg))}return pages;
}
class NekoPost extends types.Source{
 constructor(){super(...arguments);this.requestManager=App.createRequestManager({requestsPerSecond:1,requestTimeout:20000})}
 async fetch(path){const request=App.createRequest({url:absolute(path),method:"GET"});const response=await this.requestManager.schedule(request,1);return this.cheerio.load(response.data||"")}
 // API may wrap results in data/result/payload; handle the shapes without guessing a single field.
 extractProjects(raw){
  const found=[],visited=[];
  const visit=(node,depth)=>{
   if(!node||depth>7||typeof node!=="object"||visited.indexOf(node)>=0)return;
   visited.push(node);
   if(Array.isArray(node)){for(const v of node)visit(v,depth+1);return}
   const id=node.projectId||node.projectID||node.project_id||node.pid||node.id;
   const name=node.projectName||node.projectTitle||node.project_name||node.name||node.title;
   if(id!=null&&name)found.push(node);
   for(const key of ["data","result","results","payload","response","projects","projectList","project_list","list","items","content","records","rows","entries","page","pageData","searchResult","searchResults"]){if(node[key]!=null)visit(node[key],depth+1)}
  };visit(raw,0);return found;
 }
 mapProjects(items,section){
  const out=[],seen={};
  for(const item of items){
   const id0=item.projectId||item.projectID||item.project_id||item.pid||item.id;
   let link=item.url||item.link||item.href||item.projectUrl||"";
   let id=link?identifier(link):"";
   if(!/^(manga|comic|novel|original_novel|ai_project)\/[^/]+$/.test(id))id=section.id+"/"+id0;
   if(id0==null&&!link||seen[id])continue;
   const title=clean(item.projectName||item.projectTitle||item.project_name||item.name||item.title);
   if(!title||excluded.test(title+" "+clean(item.genre)))continue;
   const image=apiCover(item)||knownMangaCover(id);
   seen[id]=true;out.push(App.createPartialSourceManga({mangaId:id,title,image,subtitle:undefined}));
  }return out;
 }
 async postSearch(section,keyword,page){
  const payload={keyword:keyword||"",projectType:section.type,genre:[],status:"",orderBy:"updateDate",pageNo:page,pageSize:20};
  const req=App.createRequest({url:BASE+"/api/project/search",method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json","Origin":BASE,"Referer":BASE+section.path},data:JSON.stringify(payload)});
  const res=await this.requestManager.schedule(req,1);let raw=res.data;
  if(typeof raw==="string")raw=JSON.parse(raw);
  return this.mapProjects(this.extractProjects(raw),section);
 }
 collect($,section){
  const result=[],seen={};
  $("a[href]").each((_,node)=>{
   const a=$(node),href=a.attr("href")||"",id=identifier(href);
   if(!/^(manga|comic|novel|original_novel|ai_project)\/[^/]+$/.test(id)||seen[id])return;
   if(section&&kind(id)!==section.id)return;
   const box=a.closest("article,.card,.item,.book-item,.manga-item,.comic-item,.novel-item,li");
   const title=clean(a.attr("title")||(box.length?box:a).find(".title,.name,h2,h3,h4,h5,.card-title,.ms-card-title").first().text()||a.find("img").first().attr("alt")||a.text());
   if(!title||title.length>180||excluded.test(title))return;
   seen[id]=true;result.push(App.createPartialSourceManga({mangaId:id,title,image:imgUrl($,a)||imgUrl($,box)||knownMangaCover(id),subtitle:undefined}));
  });return result;
 }
 async getSearchResults(query,metadata){
  const page=Number(metadata?.page||1),section=SECTIONS.find(x=>x.id===(metadata?.section||"manga"))||SECTIONS[0],term=clean(query?.title);
  let results=[],apiError="";
  try{results=await this.postSearch(section,term,page)}catch(e){apiError=String(e)}
  if(!results.length){
   try{
    const url=BASE+section.path+(term?"?q="+encodeURIComponent(term)+(page>1?"&page="+page:""):(page>1?"?page="+page:""));
    const $=await this.fetch(url);results=this.collect($,section);
   }catch(e){if(!apiError)apiError=String(e)}
  }
  // Show actionable error instead of silently presenting an empty catalogue on first page.
  if(!results.length&&page===1&&apiError)throw new Error("NekoPost catalog: "+apiError);
  return App.createPagedResults({results,metadata:results.length?{page:page+1,section:section.id}:undefined});
 }
 async getHomePageSections(callback){
  for(const section of SECTIONS){
   const home=App.createHomeSection({id:section.id,title:section.title,type:"singleRowNormal",containsMoreItems:true,items:[]});callback(home);
   try{const data=await this.getSearchResults({title:""},{page:1,section:section.id});home.items=data.results;callback(home)}catch(e){/* leave heading, use View More to expose request error */}
  }
 }
 async getViewMoreItems(id,metadata){if(!SECTIONS.some(x=>x.id===id))return App.createPagedResults({results:[]});return this.getSearchResults({title:""},{page:Number(metadata?.page||1),section:id})}
 async getMangaDetails(mangaId){const $=await this.fetch("/"+mangaId);const title=clean($("h1,.entry-title,.manga-title,.comic-title,.novel-title,.ms-card-title").first().text())||mangaId;const image=imgUrl($,$(".manga-detail,.comic-detail,.novel-detail,.detail,.container").first())||imgUrl($,$("body"))||knownMangaCover(mangaId);const desc=clean($(".description,.summary,.synopsis,.manga-description,.comic-description,.novel-description,.detail-description,.content-description,.project-description").first().text());return App.createSourceManga({id:mangaId,mangaInfo:App.createMangaInfo({titles:[title],image,status:"UNKNOWN",author:"",artist:"",desc,tags:[]})})}
 async getChapters(mangaId){const $=await this.fetch("/"+mangaId),out=[],seen={};$("a.chapter-link[href],a[href]").each((i,el)=>{const a=$(el),href=identifier(a.attr("href")||"");if(!href.startsWith(mangaId+"/")||href===mangaId||seen[href])return;const name=clean(a.find(".ms-card-title,.chapter-title,.title").first().text()||a.text()||a.attr("title"));if(!name)return;seen[href]=true;out.push(App.createChapter({id:href,chapNum:chapterNum(name)||out.length+1,langCode:"th",name}))});return out}
 async getChapterDetails(mangaId,chapterId){const $=await this.fetch("/"+chapterId),pages=[],seen={};
  if(/^(novel|original_novel)\//.test(mangaId)){
    const reader=$(".novel-content,.novel-reader,.chapter-content,.reading-content,.reader-content,.novel-text,.text-content,.chapter-body,.reading-area").first();const content=reader.length?reader.text():"";
    if(!clean(content))throw new Error("NekoPost: novel text is loaded dynamically; Paperback 0.8 cannot render this chapter yet");
    const text=content.replace(/\r/g,"").trim();return App.createChapterDetails({id:chapterId,mangaId,pages:textPages(text)})
  }
  $(".reader img,.reading-content img,.chapter-content img,#reader img,.page img,.page-break img,img.chapter-image,.viewer img,.chapter-reader img,.reader-image img").each((_,el)=>{const im=$(el);const u=absolute(im.attr("data-src")||im.attr("data-original")||im.attr("data-lazy-src")||im.attr("src")||"");if(u&&!seen[u]){seen[u]=true;pages.push(u)}});
  if(!pages.length)throw new Error("NekoPost: ไม่พบภาพใน HTML; รูปอาจถูกโหลดผ่าน API/CDN");return App.createChapterDetails({id:chapterId,mangaId,pages})
 }
}
exports.NekoPost=NekoPost;
},{"@paperback/types":61}]},{},[62])(62)
});