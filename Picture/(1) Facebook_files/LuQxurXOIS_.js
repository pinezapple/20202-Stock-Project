if (self.CavalryLogger) { CavalryLogger.start_js(["4sMEHBG"]); }

__d("GroupsCometLeftRailGroupItem_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"GroupsCometLeftRailGroupItem_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"last_post_time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_pinned",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useHostedRouteEntityKey",["getCometEntityKey","react","useHostedRoute"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(){var a=b("useHostedRoute")(),c=h.useMemo(function(){return a?b("getCometEntityKey")(a):null},[a]);return c}}),null);
__d("useGroupMarkPostsAsReadUpdate",["CometRelay","react","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=b("CometRelay").useRelayEnvironment();return h.useCallback(function(){if(a==null){b("recoverableViolation")("Group null for left rail item","groups_comet");return}c.commitUpdate(function(b){b=b.get(a);b!=null&&b.setValue(0,"unread_count")})},[c,a])}}),null);
__d("GroupsCometLeftRailGroupItem.react",["fbt","ix","CometBadge.react","CometRelativeTimestamp.react","CometRelay","CometRouteMatch","GroupsCometLeftRailGroupItem_group.graphql","TetraIcon.react","TetraListCell.react","TetraText.react","emptyFunction","fbicon","gkx","react","recoverableViolation","useGroupMarkPostsAsReadUpdate","useHostedRouteEntityKey","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=j||b("react");function a(a){var c,d,e=a.badge,f=a.group,j=a.onPressGroup,l=j===void 0?b("emptyFunction"):j;j=a.routeTarget;a=b("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometLeftRailGroupItem_group.graphql"),f);f=b("CometRouteMatch").useHostedRouteMatcher(b("CometRouteMatch").MatchFunctions.urlMatchFunction);var m=b("useHostedRouteEntityKey")(),n=a==null?void 0:a.name;c=a==null?void 0:(c=a.profile_picture)==null?void 0:c.uri;var o=(a==null?void 0:a.url)||"#",p=b("useNullthrowsViolation")(a==null?void 0:a.id),q=b("useGroupMarkPostsAsReadUpdate")(p);if(n==null||c==null)return b("recoverableViolation")("Incomplete data to render Group left rail item","groups_comet");d=(d=a==null?void 0:a.last_post_time)!=null?d:0;var r=e==null?void 0:e.actionLink,s=e==null?void 0:e.storiesCount;p=m!=null&&m.entity_type==="group"&&m.entity_id===p||f((m=r)!=null?m:o);var t;s!=null&&s>0?t=g._({"*":"{number} b\u00e0i vi\u1ebft d\u00e0nh cho b\u1ea1n","_1":"1 b\u00e0i vi\u1ebft d\u00e0nh cho b\u1ea1n"},[g._plural(s,"number")]):d>0&&(t=g._("L\u1ea7n ho\u1ea1t \u0111\u1ed9ng g\u1ea7n nh\u1ea5t: {last post date}",[g._param("last post date",k.jsx(b("CometRelativeTimestamp.react"),{date:new Date(d*1e3),format:"normal"},"last_post_time"))]));m=(f=a==null?void 0:a.has_viewer_pinned)!=null?f:!1;s=k.jsx(b("TetraIcon.react"),{color:"secondary",icon:b("fbicon")._(h("511755"),16)});d=function(){l(),q()};return k.jsx(b("TetraListCell.react"),{addOnPrimary:{shape:"roundedRect",size:60,source:{uri:c},type:"profile-photo"},headline:k.jsx(b("TetraText.react"),{testid:void 0,type:"bodyLink3",children:n}),headlineAddOn:m?s:null,headlineLineLimit:2,linkProps:{passthroughProps:{ref:"your_groups"},routeTarget:j,url:(a=r)!=null?a:o},meta:k.jsxs(b("TetraText.react"),{type:"meta3",children:[e==null?null:k.jsx(b("CometBadge.react"),{color:"blue"}),t]}),metaLineLimit:1,onPress:d,selected:p,selectedBackground:b("gkx")("1535")?"wash":"highlight",testid:void 0})}}),null);
__d("SearchCometScopedTypeaheadPlaceholder.react",["BaseGlimmer.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("BaseGlimmer.react"),{className:"dhix69tm oygrvhab wkznzc2l kvgmc6g5 tv7at329 owxd89k7 n3ddgdk9 h2jyy9rg br7hx15l",index:0})}}),null);
__d("CometWatchScopedTypeaheadDeferred.react",["CometPlaceholder.react","SearchCometScopedTypeaheadPlaceholder.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=b("deferredLoadComponent")(b("requireDeferredForDisplay")("CometWatchScopedTypeahead.react").__setRef("CometWatchScopedTypeaheadDeferred.react"));function a(a){return h.jsx(b("CometPlaceholder.react"),{fallback:h.jsx(b("SearchCometScopedTypeaheadPlaceholder.react"),{}),children:h.jsx(i,babelHelpers["extends"]({},a))})}}),null);