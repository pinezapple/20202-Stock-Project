if (self.CavalryLogger) { CavalryLogger.start_js(["UK9L0sa"]); }

__d("CometResponsiveTopNav.react",["BaseHeading.react","BaseRow.react","BaseRowItem.react","CometLink.react","TetraText.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i={row:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},tabs:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"},title:{paddingEnd:"hv4rvrfc"}};function a(a){var c=a.action,d=a.auxiliary,e=a.tabs,f=a.title,g=a.titleURL;a=a.xstyle;f=f!=null?h.jsx(b("BaseRowItem.react"),{xstyle:i.title,children:h.jsx(b("BaseHeading.react"),{isPrimaryHeading:!0,children:h.jsx(b("TetraText.react"),{type:"headlineEmphasized1",children:f})})}):null;g!=null&&f!=null&&(f=h.jsx(b("CometLink.react"),{href:g,children:f}));return h.jsxs(b("BaseRow.react"),{verticalAlign:"center",xstyle:[i.row,a],children:[f,h.jsx(b("BaseRowItem.react"),{expanding:!0,xstyle:i.tabs,children:e}),c&&h.jsx(b("BaseRowItem.react"),{children:c}),h.jsx(b("BaseRowItem.react"),{children:d})]})}}),null);
__d("BaseAdaptiveTabs.react",["react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j={absoluteFill:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},absoluteTop:{end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},heightGetter:{lineHeight:"soycq5t1",position:"l9j0dhe7"},heightSetter:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",visibility:"kr9hpln1"},moreTab:{alignItems:"bp9cbjyn",display:"pq6dq46d",justifyContent:"jifvfom9"},moreWrapper:{display:"q9uorilb",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",verticalAlign:"j1lvzwm4"},root:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm",zIndex:"du4w35lb"},tab:{alignItems:"bp9cbjyn",display:"pq6dq46d","float":"bzsjyuwj",justifyContent:"jifvfom9",verticalAlign:"j1lvzwm4"}};function a(a){var c=a.height,d=a.heightXStyle,e=a.tabs,f=a.moreTab,g=a.maxVisibleTabs;g=g===void 0?Infinity:g;var k=a.moreTabWidthXStyle;a=a.rootXStyle;var l=g<e.length?e.slice(0,g):e;g=g>=e.length;e=l.map(function(a,c){return typeof a==="function"?a([j.tab,d],c):i.jsx("div",{className:(h||(h=b("stylex")))(j.tab,d),role:"tab",children:a},c+"tab")});return i.jsx("div",{className:(h||(h=b("stylex")))(j.root,d,a),children:i.jsxs("div",{className:h(j.heightGetter),children:[g&&i.jsx("div",{className:(h||(h=b("stylex")))(j.heightSetter),role:"tablist",children:e}),i.jsxs("div",{className:h(j.absoluteFill),role:"tablist",children:[i.jsx("div",{className:h(j.moreWrapper,d,k),role:"tab",style:g?{height:"calc((100% - "+c+"px) * 9999)",maxHeight:c,minHeight:0}:void 0,children:typeof f==="function"?f([j.absoluteTop,j.moreTab,d]):i.jsx("div",{className:(h||(h=b("stylex")))(j.absoluteTop,j.moreTab,d),children:f})}),e]})]})})}}),null);
__d("CometPivotLinkTab.react",["ReactDOMComet","TetraPivotLink.react","react","stylex","useIntersectionObserver"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={tab:{alignItems:"bp9cbjyn",boxSizing:"rq0escxv",display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"frgo5egb",paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus",position:"l9j0dhe7",zIndex:"tkr6xdv7"}};function a(a,c){var d=a.FocusItem,e=a.containerRef,f=a.disabled;f=f===void 0?!1:f;var g=a.hasNewContentBadge;g=g===void 0?!1:g;var k=a.image,l=a.label,m=a.labelIsHidden;m=m===void 0?!1:m;var n=a.onHidden,o=a.selected;o=o===void 0?!1:o;var p=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["FocusItem","containerRef","disabled","hasNewContentBadge","image","label","labelIsHidden","onHidden","selected","xstyle"]);var q=i.useState(!0),r=q[0],s=q[1],t=i.useRef(n);t.current=n;q=i.useCallback(function(a){var c=a.intersectionRatio;b("ReactDOMComet").flushSync(function(){var a=c<.1;s(a);t.current&&t.current(a)})},[]);n=b("useIntersectionObserver")(q,{root:e?function(){return e.current}:null,threshold:.5});q=i.jsx("div",{className:(h||(h=b("stylex")))(j.tab,p),ref:c,children:i.jsx(b("TetraPivotLink.react"),{disabled:f,hasNewContentBadge:g,image:k,label:l,labelIsHidden:m,linkProps:a.linkProps,onPress:a.onPress,ref:n,selected:o,testid:void 0})});return d&&!r?i.jsx(d,{children:q}):q}c=i.forwardRef(a);e.exports=c}),null);
__d("CometPivotLinkTabs.react",["fbt","ix","BaseAdaptiveTabs.react","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometKeys","CometPivotLinkTab.react","FocusGroup.react","fbicon","focusScopeQueries","react","requireDeferred","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=i||b("react"),l=b("requireDeferred")("CometTabMenuForPivotLinks.react").__setRef("CometPivotLinkTabs.react");c=b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);var m=c[0],n=c[1],o={height:{height:"tv7at329"},moreTabWidth:{width:"tmrshh9y"},root:{marginEnd:"dlv3wnog",marginStart:"rl04r1d5"}};function a(a){var c=a.maxTabs,d=c===void 0?Infinity:c,e=a.moreTabXStyle,f=a.tabs;c=a.tabsContainerStyle;a=k.useState(function(){return Array.from({length:f.length}).map(function(a,b){return b}).filter(function(a){return a>=d})});var i=a[0],s=a[1],t=k.useMemo(function(){return i.some(function(a){return(a=f[a])==null?void 0:a.selected})},[i,f]);a=k.useCallback(function(a,c){var d=[{command:{key:b("CometKeys").DOWN},description:g._("M\u1edf menu"),handler:c}];return k.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:d,children:k.jsx(b("CometPivotLinkTab.react"),{FocusItem:n,"aria-haspopup":"menu","aria-label":g._("Kh\u00e1c"),image:{icon:b("fbicon")._(h("484386"),16),type:"icon"},label:g._("Kh\u00e1c"),labelIsHidden:!0,onPress:c,ref:a,role:"tab",selected:t,testid:void 0,xstyle:e})})},[t,e]);a=k.jsx(b("CometDeferredPopoverTrigger.react"),{popoverProps:{menuItems:i.map(function(a){return f[a]}).filter(Boolean)},popoverResource:l,children:a});return k.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:r,children:k.jsx(m,{orientation:"horizontal",preventScrollOnFocus:!0,tabScopeQuery:b("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:k.jsx("div",{className:(j||(j=b("stylex")))(o.root,c),children:k.jsx(b("BaseAdaptiveTabs.react"),{height:36,heightXStyle:o.height,maxVisibleTabs:d,moreTab:a,moreTabWidthXStyle:o.moreTabWidth,tabs:f.map(function(a,c){return k.createElement(b("CometPivotLinkTab.react"),babelHelpers["extends"]({},a,{FocusItem:n,key:c+"tab",onHidden:function(a){s(function(b){return a?p(b,c):q(b,c)})}}))})})})})})}function p(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function q(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}var r=[{command:{key:b("CometKeys").LEFT},description:g._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),handler:function(){}},{command:{key:b("CometKeys").RIGHT},description:g._("M\u1ee5c ti\u1ebfp theo"),handler:function(){}}]}),null);
__d("Time",[],(function(a,b,c,d,e,f){"use strict";f.daysBetween=g;f.daysTill=a;f.hoursBetween=h;f.hoursTill=b;f.minutesBetween=i;f.minutesTill=c;f.now=j;f.secondsBetween=k;f.secondsTill=d;f.toDays=l;f.toHours=m;f.toMinutes=n;f.toSeconds=o;f.toUTC=p;function g(a,b){a=a;b=b;typeof a==="object"&&(a=p(a));typeof b==="object"&&(b=p(b));return Math.floor(l(b-a))}function a(a){a=a;typeof a==="object"&&(a=p(a));return g(j(),a)}function h(a,b){a=a;b=b;typeof a==="object"&&(a=p(a));typeof b==="object"&&(b=p(b));return Math.floor(m(b-a))}function b(a){a=a;typeof a==="object"&&(a=p(a));return h(j(),a)}function i(a,b){a=a;b=b;typeof a==="object"&&(a=p(a));typeof b==="object"&&(b=p(b));return Math.floor(n(b-a))}function c(a){a=a;typeof a==="object"&&(a=p(a));return i(j(),a)}function j(){return Date.now()/1e3}function k(a,b){a=a;b=b;typeof a==="object"&&(a=p(a));typeof b==="object"&&(b=p(b));return Math.floor(o(b-a))}function d(a){a=a;typeof a==="object"&&(a=p(a));return k(j(),a)}function l(a){return a/24/60/60}function m(a){return a/60/60}function n(a){return a/60}function o(a){return a}function p(a){return!a||!a.getFullYear?0:Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}}),null);
__d("useCometSearchRoutingQueryString",["CometRouteParams"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){var a=b("CometRouteParams").useRouteParams();return typeof a.q==="string"?a.q.trim():""}}),null);
__d("useCometSearchScopedTypeaheadDataSource",["Actor","CometRelay","CometSearchKeywordDataSource","CometSearchRecentDataSource","Promise","cometSearchTypeaheadDecorateMixedPayload","cometSearchTypeaheadDecorateRecentPayload","react","searchCometTypeaheadPushErrorToast"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.dataSources,d=c.keywordDataSourceParams,e=c.recentDataSourceParams,f=a.logging.sessionContext,g=a.view.renderLimit;c=b("Actor").useActor();var i=c[0],j=b("CometRelay").useRelayEnvironment(),k=h.useMemo(function(){return new(b("CometSearchKeywordDataSource"))(babelHelpers["extends"]({},d,{limit:g,onError:function(){return b("searchCometTypeaheadPushErrorToast")()},relayEnvironment:j}))},[d,g,j]),l=h.useMemo(function(){return e!=null?new(b("CometSearchRecentDataSource"))(babelHelpers["extends"]({},e,{actorID:i,limit:g,relayEnvironment:j})):null},[i,g,e,j]),m=h.useCallback(function(a){var c=a.entries;a=a.params;return b("cometSearchTypeaheadDecorateMixedPayload")({entries:c,params:a},{limit:g})},[g]),n=h.useCallback(function(a,b){l!=null&&l.add(a,f,b)},[f,l]),o=h.useCallback(function(a){var c=a.query;if(c===""&&l!=null){c=l.fetchCache(a);return b("cometSearchTypeaheadDecorateRecentPayload")(c,{limit:g})}c=k.fetchCache(a);return m(c)},[m,k,g,l]),p=h.useCallback(function(a){var c=a.query;if(c===""&&l!=null)return l.fetchNetwork(a).then(function(a){return b("cometSearchTypeaheadDecorateRecentPayload")(a,{limit:g})});return c===""?b("Promise").resolve({entries:[],params:a}):k.fetchNetwork(a).then(m)},[m,k,g,l]),q=h.useCallback(function(a,b){l!=null&&l.remove(a,b)},[l]);return h.useMemo(function(){return{addRecentEntry:n,fetchCache:o,fetchNetwork:p,removeRecentEntry:q}},[n,o,p,q])}}),null);
__d("useCometSearchScopedTypeaheadSelectEntryHandler",["react","useCometTypeaheadNavigate"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.callback,d=a.loggingProvider,e=a.urlBuilder,f=b("useCometTypeaheadNavigate")();return h.useCallback(function(a){a=e({entryPointAction:"SEARCH_BOX",query:a.getLabel(),typeaheadSessionID:d.getSessionID()});f(a);c&&c()},[e,d,f,c])}}),null);
__d("useCometSearchScopedTypeaheadSelectFreeformQueryHandler",["react","useCometTypeaheadNavigate"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.callback,d=a.loggingProvider,e=a.urlBuilder,f=b("useCometTypeaheadNavigate")();return h.useCallback(function(a){a=e({entryPointAction:"SEARCH_BOX",query:a,typeaheadSessionID:d.getSessionID()});f(a);c&&c()},[e,d,f,c])}}),null);
__d("XCometGamingArenaHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/tournaments/",Object.freeze({open_create_tournament_form:!1}),void 0);c=a;e.exports=c}),null);