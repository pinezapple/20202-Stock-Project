if (self.CavalryLogger) { CavalryLogger.start_js(["qeo19Zk"]); }

__d("CometMisinfoSeeWhyDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3731056573690104",metadata:{},name:"CometMisinfoSeeWhyDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometWarningScreenOverlayBackground_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayBackground_data",selections:[{alias:null,args:null,kind:"ScalarField",name:"cover_style",storageKey:null}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("CometWarningScreenOverlayCenterButton_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayCenterButton_data",selections:[{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"label",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"render_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ixt_trigger",storageKey:null}],type:"WarningScreenAction",abstractKey:null};e.exports=a}),null);
__d("CometWarningScreenOverlayContentDefaultFullCover_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayContentDefaultFullCover_data",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtitle",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"WarningScreenAction",kind:"LinkedField",name:"warning_screen_actions",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayCenterButton_data"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayIcon_data"}],type:"OverlayWarningScreenViewModel",abstractKey:null}}();e.exports=a}),null);
__d("CometWarningScreenOverlayContentDefaultLightweight_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayContentDefaultLightweight_data",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtitle",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"WarningScreenAction",kind:"LinkedField",name:"warning_screen_actions",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayCenterButton_data"},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayIcon_data"}],type:"OverlayWarningScreenViewModel",abstractKey:null}}();e.exports=a}),null);
__d("CometWarningScreenOverlayContentDefault_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayContentDefault_data",selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayContentDefaultLightweight_data"},{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayContentDefaultFullCover_data"},{alias:null,args:null,kind:"ScalarField",name:"render_type",storageKey:null}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("CometWarningScreenOverlayContentSmall_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayContentSmall_data",selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayIcon_data"},{alias:null,args:null,kind:"ScalarField",name:"render_type",storageKey:null}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("CometWarningScreenOverlayContent_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayContent_data",selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayContentDefault_data"},{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayContentSmall_data"}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("CometWarningScreenOverlayCoveredResizable_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayCoveredResizable_data",selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayCovered_data"}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("CometWarningScreenOverlayCovered_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayCovered_data",selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayBackground_data"},{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayContent_data"},{alias:null,args:null,kind:"ScalarField",name:"render_type",storageKey:null}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("CometWarningScreenOverlayIcon_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayIcon_data",selections:[{alias:null,args:[{kind:"Literal",name:"color",value:"fds-black"}],concreteType:"Image",kind:"LinkedField",name:"icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:'icon(color:"fds-black")'}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("CometWarningScreenOverlay_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlay_data",selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayCovered_data"},{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayCoveredResizable_data"},{alias:null,args:null,kind:"ScalarField",name:"content_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"container_story_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"render_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"top_objectionable_category",storageKey:null}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("CometMisinfoSeeWhyDialogEntryPoint.entrypoint",["CometMisinfoSeeWhyDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c;a=a.entID;a=(c=a)==null?void 0:c.split(":").filter(function(a){return a!==""}).pop();return{extraProps:{entID:a},queries:{cometMisinfoSeeWhyDialogQueryReference:{parameters:b("CometMisinfoSeeWhyDialogQuery$Parameters"),variables:{entID:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("CometMisinfoSeeWhyDialog.react").__setRef("CometMisinfoSeeWhyDialogEntryPoint.entrypoint")};e.exports=a}),null);
__d("CixWarningScreensFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743358");c=b("FalcoLoggerInternal").create("cix_warning_screens",a);e.exports=c}),null);
__d("WarningScreenType",[],(function(a,b,c,d,e,f){a=Object.freeze({GRAPHIC:"Violence and Gore",OBJECTIONABLE:"Sexual",HATE:"Hate",CHILD_ABUSE_NON_SEXUAL:"Child Abuse (non-sexual)",SENSITIVE:"Sensitive",CRUEL:"Cruel",MATURE_ONLY_14_AND_OVER:"Mature Only 14 And Over",SENSITIVE_TEXT:"Sensitive Text",FALSE_NEWS:"False News",FALSE_HEADLINE_NEWS:"False Headline News",MISLEADING_NEWS:"Misleading News",ALTERED_MEDIA:"Altered Media",MISSING_CONTEXT:"Missing Context",GOVERNMENT_CORRECTION:"Government Correction",CENSUS_BORDERLINE:"Census Borderline",WIDELY_DEBUNKED_HOAX_COVID:"Widely Debunked Hoax Covid",HEALTH_GENERIC:"Health Generic",GENERIC_INFORM_TREATMENT:"Generic Inform Treatment",CLIMATE_GENERIC_INFORM_TREATMENT:"Climate Science Generic Inform Treatment",NEWSWORTHY:"Newsworthy",SELF_APPLIED_GRAPHIC_VIOLENCE:"Self Applied Graphic Violence",CIVIC_VOTER_INFORM_TREATMENT:"Civic Voter Inform Treatment",CIVIC_VOTER_INFORM_TREATMENT_FOR_MM:"Civic Voter Inform Treatment For Myanmar",CIVIC_VOTER_INFORM_TREATMENT_FOR_BR:"Civic Voter Inform Treatment For Brazil",CIVIC_VOTER_INFORM_TREATMENT_FOR_ID:"Civic Voter Inform Treatment For Indonesia",CIVIC_FACTS_ABOUT_VOTING_INFORM_TREATMENT:"Civic Facts About Voting Inform Treatment",HACK_AND_LEAK:"Hack And Leak",GRAPHIC_MISINFO:"Graphic Misinfo",WIDELY_DEBUNKED_HOAX_VACCINE:"Widely Debunked Hoax Vaccine",WORK_RECRUITING_GROUP_POST:"Recruiting Group Post",MISINFORMATION:"Misinformation",GENERIC_CIVIC:"Generic Civic",COMPASS:"Compass",GENERIC_INFORM:"Generic Inform",DUMMY_GIT:"Dummy GIT",ANIMAL_VIOLENCE:"Animal Violence",POLITICAL:"Politically Charged",PROFANITY:"Profanity",CENSUS_MISINFO:"Census Misinfo",COVID_ELECTION_BORDERLINE:"Covd Election Borderline"});e.exports=a}),null);
__d("CometWarningScreenClientLogger",["CixWarningScreensFalcoEvent","WarningScreenType"],(function(a,b,c,d,e,f){"use strict";f.logWarningScreenEvent=a;function a(a,c,d,e,f,h,i,j,k,l,m,n){var o=c==null?void 0:c.split(":").filter(function(a){return a!==""}).pop();b("CixWarningScreensFalcoEvent").log(function(){return{action:a,content_id_raw:o,endpoint:d,event:e,generic_inform_treatment_case:l,integrity_ui_element:f,product:m,render_type:n,story_ent_identifier_graphql_id:h,story_render_location:i,surface:j,top_warning_screen_category:g(k)}})}function g(a){if(a==null)return null;a=a;return b("WarningScreenType")[a]}}),null);
__d("CometWarningScreenOverlayBackground.react",["CometBlurredBackgroundImage.react","CometRelay","CometWarningScreenOverlayBackground_data.graphql","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometWarningScreenOverlayBackground_data.graphql"),a.data);c=c.cover_style;a=a.mediaUri;switch(c){case"PLAIN":return i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb d6rk862h"});case"GRADIENT":return i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb njqljl3s"});case"REVERSE_GRADIENT":return i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb qpkeyiwh"});case"BLUR":return i.jsxs("div",{className:"j102wcjv kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb",children:[i.jsx(b("CometBlurredBackgroundImage.react"),{src:a}),i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb d6rk862h"})]});case"NONE":default:return i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb"})}}}),null);
__d("CIXWarningScreenActions",[],(function(a,b,c,d,e,f){a=Object.freeze({APPEAL_REQUEST:"APPEAL_REQUEST",GIVE_FEEDBACK:"GIVE_FEEDBACK",HELP_CENTER_REDIRECT:"HELP_CENTER_REDIRECT",HIDE_CONTENT:"HIDE_CONTENT",OPEN_CENSUS_LINK:"OPEN_CENSUS_LINK",OPEN_COMMUNITY_STANDARDS:"OPEN_COMMUNITY_STANDARDS",OPEN_CONTENT_VIEWER:"OPEN_CONTENT_VIEWER",OPEN_EXTERNAL_LINK:"OPEN_EXTERNAL_LINK",OPEN_LINK:"OPEN_LINK",OPEN_MISINFO_SEE_WHY_DIALOG:"OPEN_MISINFO_SEE_WHY_DIALOG",SEE_WHY:"SEE_WHY",SEE_WHY_LIGHTWEIGHT_NEGATIVE_FEEDBACK:"SEE_WHY_LIGHTWEIGHT_NEGATIVE_FEEDBACK",SEE_WHY_LIGHTWEIGHT_POSITIVE_FEEDBACK:"SEE_WHY_LIGHTWEIGHT_POSITIVE_FEEDBACK",SHOW_CONTENT:"SHOW_CONTENT"});e.exports=a}),null);
__d("useInformTreatmentFollowupExperience",["CometMisinfoSeeWhyDialogEntryPoint.entrypoint","gkx","useCometEntryPointDialog","useIXTContentTriggerDialog"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("gkx")("1770065");function a(a){var c=a.contentID,d=a.entryPoint,e=a.ixtTriggerEvent;a=a.location;c=c.split(":").filter(function(a){return a!==""}).pop();var f=b("useCometEntryPointDialog")(b("CometMisinfoSeeWhyDialogEntryPoint.entrypoint"),{entID:c}),h=f[0];f=f[1];a=b("useIXTContentTriggerDialog")({content_id:c,entry_point:(c=d)!=null?c:"UNKNOWN",location:(d=a)!=null?d:"UNKNOWN",trigger_event_type:(c=e)!=null?c:"INFORM_TREATMENT_SEE_WHY"});var i=a[0];d=a[1];if(e!=null&&g)return[function(){return i({})},d];else return[h,f]}}),null);
__d("CometWarningScreenOverlayCenterButton.react",["CIXWarningScreenActions","CometRelay","CometTextWithEntitiesRelay.react","CometWarningScreenOverlayCenterButton_data.graphql","TetraButton.react","getJSEnumSafe","react","recoverableViolation","useCometUFIVideoPlayerStateAndController","useInformTreatmentFollowupExperience"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function j(a,b){switch(a){case"overlay":switch(b){case"PRIMARY":return"overlay";case"SECONDARY":return"fdsOverride_black";case null:return"overlay"}break;case"card":return"secondary"}return"overlay"}function a(a){var c,d=b("useCometUFIVideoPlayerStateAndController")(),e=b("CometRelay").useFragment(g!==void 0?g:g=b("CometWarningScreenOverlayCenterButton_data.graphql"),a.data);c=b("useInformTreatmentFollowupExperience")({contentID:(c=a.contentID)!=null?c:"",ixtTriggerEvent:e.ixt_trigger});var f=c[0];c=c[1];var h=e.label,k=e.render_type,l=e.type;if(h==null||l==null){b("recoverableViolation")("Empty data passed","comet_warning_screens");return null}l==="OPEN_MISINFO_SEE_WHY_DIALOG"&&a.storyID==null&&b("recoverableViolation")("No story ID for misinfo","comet_warning_screens");if(l==="OPEN_MISINFO_SEE_WHY_DIALOG"&&a.contentID==null){b("recoverableViolation")("No content ID for misinfo","comet_warning_screens");return null}var m={};l==="SHOW_CONTENT"?m={onPress:function(){d&&d.controller.play("warning_screen_cover"),a.logAction("SHOW_CONTENT"),a.showContent()},testid:"CometWarningScreen-ShowContent"}:e.ixt_trigger!=null?m={onPress:function(){a.logAction(b("getJSEnumSafe")(b("CIXWarningScreenActions"),l)),f({})},ref:c}:m={linkProps:{target:"_blank",url:e.context},onPress:function(){a.logAction("HELP_CENTER_REDIRECT")}};return i.jsx("div",{className:"oqcyycmt q9uorilb",children:i.jsx(b("TetraButton.react"),babelHelpers["extends"]({label:i.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:h}),size:"medium",type:j(a.type,k)},m))})}}),null);
__d("CometWarningScreenOverlayIcon.react",["CometRelay","CometWarningScreenOverlayIcon_data.graphql","TetraIcon.react","TintableIconSource","coerceRelayImage","react","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometWarningScreenOverlayIcon_data.graphql"),a.data);if(c.icon==null)throw b("unrecoverableViolation")("Icon missing for Warning Screen","comet_frx");c=new(b("TintableIconSource"))("FB",b("coerceRelayImage")(c.icon),24);return i.jsx(b("TetraIcon.react"),{color:a.color,icon:c,size:24})}}),null);
__d("CometWarningScreenOverlayContentDefaultFullCover.react",["CometColumn.react","CometColumnItem.react","CometRelay","CometRow.react","CometRowItem.react","CometTextWithEntitiesRelay.react","CometWarningScreenContext","CometWarningScreenOverlayCenterButton.react","CometWarningScreenOverlayContentDefaultFullCover_data.graphql","CometWarningScreenOverlayIcon.react","TetraText.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c,d=b("CometRelay").useFragment(g!==void 0?g:g=b("CometWarningScreenOverlayContentDefaultFullCover_data.graphql"),a.data),e=b("CometWarningScreenContext").useShowOverlay(),f=a.storyID,h=d.title,j=d.subtitle;return i.jsx("div",{className:"j102wcjv kr520xx4 j9ispegn pmk7jnqg dati1w0a ihqw7lf3 hv4rvrfc discj3wi ggxiycxj hihg3u9x cbu4d94t n7fi1qx3 j83agx80 i09qtzwb",ref:(c=a.containerRefs)==null?void 0:c.overlayContainerRef,children:i.jsx("div",{className:"taijpn5t buofh1pr j83agx80 bp9cbjyn",ref:(c=a.containerRefs)==null?void 0:c.contentContainerRef,children:i.jsx(b("CometColumn.react"),{children:i.jsxs(b("CometColumnItem.react"),{children:[i.jsx("div",{className:"sjgh65i0 taijpn5t buofh1pr j83agx80 bp9cbjyn",children:i.jsx(b("CometWarningScreenOverlayIcon.react"),{color:"white",data:d})}),h!=null?i.jsx(b("TetraText.react"),{align:"center",color:"white",type:"headlineEmphasized3",children:i.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:h})}):null,i.jsxs(i.Fragment,{children:[j!=null?i.jsx("div",{className:"s9t1a10h",children:i.jsx(b("TetraText.react"),{align:"center",color:"white",type:"body3",children:i.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:j})})}):null,d.warning_screen_actions.length>0?i.jsx("div",{className:"mrt03zmi cxgpxx05 b3onmgus ph5uu5jm",children:i.jsx(b("CometRow.react"),{align:"center",spacing:12,children:d.warning_screen_actions.map(function(c,d){return i.jsx(b("CometRowItem.react"),{expanding:!1,children:i.jsx(b("CometWarningScreenOverlayCenterButton.react"),{contentID:a.contentID,data:c,logAction:a.logAction,showContent:function(){return e(!1)},storyID:f,type:"overlay"})},d)})})}):null]})]})})})})}}),null);
__d("useLightWeightCardOffset",["CometRouteRenderType","CometWarningScreenContext","react","useCometUFIVideoPlayerStateAndController","useLayoutEffect_SAFE_FOR_SSR","useResizeObserver"],(function(a,b,c,d,e,f){"use strict";f.useLightWeightCardOffsetForFullScreenMediaPlayerStyle=a;f.useLightWeightCardOffset=c;var g,h=g||b("react"),i=552,j=112,k=16,l=j+k,m=48,n=16,o=12,p=750,q=120,r=.7;function a(){var a=b("CometRouteRenderType").useIsPushView(),c=h.useRef(null),d=h.useState(0),e=d[0],f=d[1],g=h.useCallback(function(b){if(a){b=Math.max(b-i,0);b=b/2;b=Math.max(j,Math.min(b,l));b=(l-b)/k;b=b*m;f(b)}},[a,f]);d=b("useResizeObserver")(function(a){return g(a.width)});d(c.current);return{containerRef:c,vertical:e}}var s=function(a){return-Math.pow(2,-10*a)+1};function t(a,b,c,d){var e=Date.now(),f=null,g=function(c){c=a+(b-a)*c;d(c)},h=function a(){var b=Date.now()-e;g(s(Math.min(b/c,1)));f=window.requestAnimationFrame(a)};window.setTimeout(function(){window.cancelAnimationFrame(f),g(1)},c);h()}function c(){var a=b("useCometUFIVideoPlayerStateAndController")(),c=h.useRef(null),d=h.useRef(null),e=h.useState(0),f=e[0],g=e[1],i=b("CometWarningScreenContext").useSetAdditionalRequiredHeight();e=h.useState(!1);var j=e[0],k=e[1],l=h.useCallback(function(b){var a=b.card;b=b.container;if(j)return;var c=b.height-a.height,d=Math.max(q,r*b.height);d=Math.max(0,d-c);if(d<n){i(0);g(0);return}c=d>b.height+2*o;c?(i(a.height+2*o),g(b.height+2*o)):(i(d-n),g(d))},[j,i,g]),m=h.useCallback(function(b){var a=b.card;b=b.container;b=f<b.height+2*o;b&&t(f,a.height+2*o,p,function(a){g(a),i(a-n)})},[i,g,f]),s=c.current,u=d.current;b("useLayoutEffect_SAFE_FOR_SSR")(function(){s!=null&&u!=null&&l({card:s.getBoundingClientRect(),container:u.getBoundingClientRect()})},[s,u,l]);h.useMemo(function(b){b==null?void 0:b();return a==null?void 0:(b=a.controller)==null?void 0:b.observeOn().playRequest(function(){k(!0),s!=null&&u!=null&&m({card:s.getBoundingClientRect(),container:u.getBoundingClientRect()})})},[a,s,u,m]);return{cardRef:c,containerRef:d,vertical:f}}}),null);
__d("CometWarningScreenOverlayContentDefaultLightweight.react",["ix","CometCard.react","CometRelay","CometRow.react","CometRowItem.react","CometStyleXSheet","CometTextWithEntitiesRelay.react","CometWarningScreenContext","CometWarningScreenOverlayCenterButton.react","CometWarningScreenOverlayContentDefaultLightweight_data.graphql","CometWarningScreenOverlayIcon.react","TetraCircleButton.react","TetraText.react","TetraTextPairing.react","fbicon","react","useLightWeightCardOffset"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=i||b("react"),k=(c=b("CometStyleXSheet").CometStyleXSheet==null?void 0:b("CometStyleXSheet").CometStyleXSheet.DARK_MODE_CLASS_NAME)!=null?c:"";function l(a){var c=b("CometRelay").useFragment(h!==void 0?h:h=b("CometWarningScreenOverlayContentDefaultLightweight_data.graphql"),a.data),d=b("CometWarningScreenContext").useSetAdditionalRequiredHeight(),e=b("CometWarningScreenContext").useShowOverlay(),f=a.logAction,i=j.useCallback(function(){d(0),e(!1),f("SHOW_CONTENT")},[d,e,f]),l=a.storyID,m=c.title,n=c.subtitle,o=c.warning_screen_actions.filter(function(a){return a.type!=="SHOW_CONTENT"}),p=a.offset,q=a.position,r=a.shouldForceDarkMode;return j.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a ggxiycxj hihg3u9x cbu4d94t n7fi1qx3 j83agx80 i09qtzwb",ref:p.containerRef,style:{bottom:-p.vertical,top:p.vertical},children:j.jsx("div",{className:"j9ispegn pmk7jnqg oqq733wu dati1w0a ihqw7lf3 hv4rvrfc discj3wi ggxiycxj hihg3u9x taijpn5t cbu4d94t n7fi1qx3 j83agx80 bp9cbjyn"+(q==="TOP"?" kr520xx4":" i09qtzwb"),children:j.jsx("div",{className:q==="TOP"?"k4urcfbm lvkh322w":"k4urcfbm",ref:p.cardRef,children:j.jsx("div",{className:r?k:null,children:j.jsx(b("CometCard.react"),{background:"white",border:"solid",dropShadow:2,children:j.jsx("div",{className:"b3onmgus e5nlhep0 ph5uu5jm ecm0bbzt",children:j.jsxs("div",{className:"ihqw7lf3",children:[j.jsxs(b("CometRow.react"),{align:"start",expanding:!0,children:[j.jsx(b("CometRowItem.react"),{children:j.jsx("div",{className:"hcukyx3x cxmmr5t8",children:j.jsx(b("CometWarningScreenOverlayIcon.react"),{color:"primary",data:c})})}),(m!=null||n!=null)&&j.jsx(b("CometRowItem.react"),{expanding:!0,children:j.jsx("div",{className:"s7sz1jes aahdfvyu",children:j.jsx(b("TetraTextPairing.react"),{body:n!=null&&j.jsx(b("TetraText.react"),{color:"primary",type:"body3",children:j.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:n})}),headline:m&&j.jsx(b("TetraText.react"),{color:"primary",type:"bodyLink3",children:j.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:m})}),level:3})})})]}),o.length>0&&j.jsx(b("CometRow.react"),{wrap:"forward",children:j.jsx(b("CometRowItem.react"),{expanding:!0,children:o.map(function(c,d){return j.jsx(b("CometRowItem.react"),{expanding:!1,children:j.jsx(b("CometWarningScreenOverlayCenterButton.react"),{contentID:a.contentID,data:c,logAction:a.logAction,showContent:function(){},storyID:l,type:"card"})},d)})})}),j.jsx("div",{className:"kr520xx4 pmk7jnqg tw6a2znq f10w8fjw d1544ag0 pybr56ya n7fi1qx3",children:j.jsx(b("TetraCircleButton.react"),{icon:b("fbicon")._(g("478232"),16),label:"Close",onPress:i,size:32})})]})})})})})})})}function m(a){var c=b("useLightWeightCardOffset").useLightWeightCardOffsetForFullScreenMediaPlayerStyle();return j.jsx(l,babelHelpers["extends"]({offset:c,position:"TOP",shouldForceDarkMode:!0},a))}function n(a){var c=b("useLightWeightCardOffset").useLightWeightCardOffset();return j.jsx(l,babelHelpers["extends"]({offset:c,position:"BOTTOM",shouldForceDarkMode:!1},a))}function o(a){return j.jsx(l,babelHelpers["extends"]({offset:{vertical:0},position:"BOTTOM",shouldForceDarkMode:!1},a))}function a(a){var b=a.allowExpandingIfNecessary,c=a.isFullScreenMediaPlayerStyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["allowExpandingIfNecessary","isFullScreenMediaPlayerStyle"]);if(c)return j.jsx(m,babelHelpers["extends"]({},a));return b?j.jsx(n,babelHelpers["extends"]({},a)):j.jsx(o,babelHelpers["extends"]({},a))}}),null);
__d("CometWarningScreenOverlayContentDefault.react",["CometRelay","CometWarningScreenOverlayContentDefaultFullCover.react","CometWarningScreenOverlayContentDefaultLightweight.react","CometWarningScreenOverlayContentDefault_data.graphql","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=a.allowExpandingIfNecessary,d=a.containerRefs,e=a.contentID,f=a.data,h=a.isFullScreenMediaPlayerStyle,j=a.logAction,k=a.storyID;a=a.url;f=b("CometRelay").useFragment(g!==void 0?g:g=b("CometWarningScreenOverlayContentDefault_data.graphql"),f);switch(f.render_type){case"LIGHTWEIGHT":return i.jsx(b("CometWarningScreenOverlayContentDefaultLightweight.react"),{allowExpandingIfNecessary:c,contentID:e,data:f,isFullScreenMediaPlayerStyle:h,logAction:j,storyID:k,url:a});case"FULL_COVER":default:return i.jsx(b("CometWarningScreenOverlayContentDefaultFullCover.react"),{containerRefs:d,contentID:e,data:f,logAction:j,storyID:k,url:a})}}}),null);
__d("CometWarningScreenOverlayContentSmall.react",["fbt","CometPressable.react","CometRelay","CometWarningScreenOverlayContentSmall_data.graphql","CometWarningScreenOverlayIcon.react","react","stylex","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j,k=i||b("react"),l={content:{alignItems:"bp9cbjyn",display:"j83agx80",flexGrow:"buofh1pr",justifyContent:"taijpn5t"},intercepter:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",":active":{transform:"tm8avpzi"}},overlayContainer:{bottom:"i09qtzwb",display:"j83agx80",end:"n7fi1qx3",flexDirection:"cbu4d94t",overflowX:"hihg3u9x",overflowY:"ggxiycxj",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",zIndex:"j102wcjv"},overlayContainerSmall:{paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",pointerEvents:"hzruof5a"}};function a(a){var c,d=b("CometRelay").useFragment(h!==void 0?h:h=b("CometWarningScreenOverlayContentSmall_data.graphql"),a.data),e=b("useCometRouterDispatcher")();if(d.render_type==="LIGHTWEIGHT")return null;var f=a.logAction,i=a.url,m=i!=null?k.jsx(b("CometPressable.react"),{"aria-label":g._("Che \u0111i n\u1ed9i dung nh\u1ea1y c\u1ea3m trong album"),display:"block",hideHoverOverlay:!0,onPress:function(a){e!=null&&(f("OPEN_CONTENT_VIEWER"),e.go(i,{}),a.preventDefault())},xstyle:l.intercepter}):null;return k.jsxs("div",{children:[k.jsx("div",{className:(j||(j=b("stylex")))(l.overlayContainer,l.overlayContainerSmall),ref:(c=a.containerRefs)==null?void 0:c.overlayContainerRef,children:k.jsx("div",{className:j(l.content),ref:(c=a.containerRefs)==null?void 0:c.contentContainerRef,children:k.jsx(b("CometWarningScreenOverlayIcon.react"),{color:"white",data:d})})}),m]})}}),null);
__d("CometWarningScreenOverlayContent.react",["CometRelay","CometWarningScreenOverlayContentDefault.react","CometWarningScreenOverlayContentSmall.react","CometWarningScreenOverlayContent_data.graphql","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometWarningScreenOverlayContent_data.graphql"),a.data);switch(a.layout){case"SMALL":return i.jsx(b("CometWarningScreenOverlayContentSmall.react"),{containerRefs:a.containerRefs,contentID:a.contentID,data:c,logAction:a.logAction,storyID:a.storyID,url:a.url});case"DEFAULT":default:return i.jsx(b("CometWarningScreenOverlayContentDefault.react"),{allowExpandingIfNecessary:a.allowExpandingIfNecessary,containerRefs:a.containerRefs,contentID:a.contentID,data:c,isFullScreenMediaPlayerStyle:a.isFullScreenMediaPlayerStyle,logAction:a.logAction,storyID:a.storyID,url:a.url})}}}),null);
__d("CometWarningScreenOverlayCovered.react",["CometRelay","CometWarningScreenContext","CometWarningScreenOverlayBackground.react","CometWarningScreenOverlayContent.react","CometWarningScreenOverlayCovered_data.graphql","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometWarningScreenOverlayCovered_data.graphql"),a.data),d=c.render_type!=="LIGHTWEIGHT",e=b("CometWarningScreenContext").useMakeContentVisibleDespiteOverlay();i.useEffect(function(){e(!d)},[e,d]);return i.jsxs(i.Fragment,{children:[d&&i.jsx(b("CometWarningScreenOverlayBackground.react"),{data:c,mediaUri:a.mediaUri}),i.jsx(b("CometWarningScreenOverlayContent.react"),{allowExpandingIfNecessary:a.allowExpandingIfNecessary,containerRefs:a.containerRefs,contentID:a.contentID,data:c,isFullScreenMediaPlayerStyle:a.isFullScreenMediaPlayerStyle,layout:a.layout,logAction:a.logAction,storyID:a.storyID,url:a.url})]})}}),null);
__d("useWarningScreenLayout",["react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(){var a=h.useState("DEFAULT"),b=a[0],c=a[1],d=h.useRef(null),e=h.useRef(null);h.useLayoutEffect(function(){if(d.current==null||e.current==null)return;d.current!=null&&e.current!=null&&(d.current.clientHeight-e.current.clientHeight<=0&&c("SMALL"))},[d,e]);return[b,{contentContainerRef:e,overlayContainerRef:d}]}}),null);
__d("CometWarningScreenOverlayCoveredResizable.react",["CometRelay","CometWarningScreenOverlayCovered.react","CometWarningScreenOverlayCoveredResizable_data.graphql","react","useWarningScreenLayout"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometWarningScreenOverlayCoveredResizable_data.graphql"),a.data),d=b("useWarningScreenLayout")(),e=d[0];d=d[1];return i.jsx(b("CometWarningScreenOverlayCovered.react"),{allowExpandingIfNecessary:a.allowExpandingIfNecessary,containerRefs:d,contentID:a.contentID,data:c,isFullScreenMediaPlayerStyle:a.isFullScreenMediaPlayerStyle,layout:e,logAction:a.logAction,mediaUri:a.mediaUri,storyID:a.storyID,url:a.url})}}),null);
__d("CometWarningScreenOverlayUncovered.react",["fbt","ix","CometRouteRenderType","CometWarningScreenContext","TetraCircleButton.react","fbicon","react","stylex","unrecoverableViolation","useCometRouterState","useCometUFIVideoPlayerStateAndController"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=i||b("react"),l={showOverlayButton:{end:"cypi58rs",pointerEvents:"mrt03zmi",position:"pmk7jnqg",top:"dn56xbwz"}};function a(a){var c=b("useCometUFIVideoPlayerStateAndController")(),d=b("CometWarningScreenContext").useShowOverlay(),e=b("useCometRouterState")();if(e==null)throw b("unrecoverableViolation")("Cannot render comet app with no route provider","comet_infra");e=b("CometRouteRenderType").useIsPushView();e=e&&a.xstyle!=null?a.xstyle:l.showOverlayButton;return k.jsx("div",{className:(j||(j=b("stylex")))(e),children:k.jsx(b("TetraCircleButton.react"),{icon:b("fbicon")._(h("511436"),24),label:g._("Show overlay"),onPress:function(){c&&c.controller.pause("warning_screen_cover"),d(!0),a.logAction("HIDE_CONTENT")},size:40,testid:void 0,type:"dark-overlay"})})}}),null);
__d("WarningScreenRenderType",[],(function(a,b,c,d,e,f){a=Object.freeze({FULL_COVER:"FULL_COVER",LIGHTWEIGHT:"LIGHTWEIGHT",POST_COVER:"POST_COVER"});e.exports=a}),null);
__d("CometWarningScreenOverlay.react",["CometRelay","CometStoryRenderLocationContext.react","CometTimeSpentNavigation","CometWarningScreenClientLogger","CometWarningScreenContext","CometWarningScreenOverlayCovered.react","CometWarningScreenOverlayCoveredResizable.react","CometWarningScreenOverlayUncovered.react","CometWarningScreenOverlay_data.graphql","WarningScreenRenderType","getJSEnumSafe","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c,d,e,f,h=b("CometRelay").useFragment(g!==void 0?g:g=b("CometWarningScreenOverlay_data.graphql"),a.data),j=(c=a.storyID)!=null?c:h.container_story_id,k=h.content_id;c=a.mediaUri;var l=a.surface,m=a.url,n=h.top_objectionable_category,o=b("getJSEnumSafe")(b("WarningScreenRenderType"),h.render_type);d=(d=a.isFullScreenMediaPlayerStyle)!=null?d:!1;e=(e=a.allowExpandingIfNecessary)!=null?e:!0;f=(f=a.allowReCoveringContent)!=null?f:!0;var p=b("CometWarningScreenContext").useIsOverlayShown(),q=b("CometWarningScreenContext").useSetParentRenderInstructions(),r=i.useContext(b("CometStoryRenderLocationContext.react")),s=b("CometTimeSpentNavigation").getPathInfo(),t=s?s.name:"",u=a.integrityUIElement;i.useEffect(function(){q(o==="LIGHTWEIGHT"?"CLIP_TO_PARENT":"CLIP_TO_MEDIA")},[o,q]);var v=b("CometWarningScreenContext").useParentRenderInstructions();i.useMemo(function(){return v==="CLIP_TO_MEDIA"&&b("CometWarningScreenClientLogger").logWarningScreenEvent(null,k,t,"mounted",u,j,r,l,n,null,"warning_screens",o)},[k,t,u,j,r,l,n,o,v]);s=function(a){a!=null&&b("CometWarningScreenClientLogger").logWarningScreenEvent(a,k,t,"action",u,j,r,l,n,null,"warning_screens",o)};if(n==null)return null;if(p||(a==null?void 0:a.alwaysShowCoverComponent)===!0){p=a.alwaysShowDetails===!0;var w=a.alwaysUseSmallLayout===!0;if(w)return i.jsx(b("CometWarningScreenOverlayCovered.react"),{allowExpandingIfNecessary:e,contentID:k,data:h,isFullScreenMediaPlayerStyle:d,layout:"SMALL",logAction:s,mediaUri:c,storyID:j,url:m});return p?i.jsx(b("CometWarningScreenOverlayCovered.react"),{allowExpandingIfNecessary:e,contentID:k,data:h,isFullScreenMediaPlayerStyle:d,layout:"DEFAULT",logAction:s,mediaUri:c,storyID:j,url:m}):i.jsx(b("CometWarningScreenOverlayCoveredResizable.react"),{allowExpandingIfNecessary:e,contentID:k,data:h,isFullScreenMediaPlayerStyle:d,logAction:s,mediaUri:c,storyID:j,url:m})}else if(f&&o!=="LIGHTWEIGHT")return i.jsx(b("CometWarningScreenOverlayUncovered.react"),{logAction:s,xstyle:a.xstyle});else return i.jsx("div",{})}}),null);
__d("StoriesCardOverlayPositioner_bounds.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesCardOverlayPositioner_bounds",selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"rotation",storageKey:null}],type:"StoryOverlayRectangle",abstractKey:null};e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a=g._("Th\u00eam n\u1eefa");f.ADD_MORE=a;b=g._("Ch\u1ec9nh s\u1eeda ph\u1ea7n \u0110\u00e1ng ch\u00fa \u00fd");f.EDIT_FEATURED=b;c=g._("Ch\u1ec9nh s\u1eeda b\u1ed9 s\u01b0u t\u1eadp \u0110\u00e1ng ch\u00fa \u00fd");f.EDIT_FEATURED_COLLECTION=c;d=g._("\u0110\u00e1ng ch\u00fa \u00fd");f.FEATURED=d;e=g._("Ph\u1ea7n \u0110\u00e1ng ch\u00fa \u00fd");f.FEATURED_SECTION=e;a=g._("T\u00ecm h\u1ed7 tr\u1ee3 ho\u1eb7c b\u00e1o c\u00e1o m\u1ee5c \u0111\u00e1ng ch\u00fa \u00fd");f.REPORT_ITEM=a;b=g._("Chi ti\u1ebft v\u1ec1 nh\u1eefng ng\u01b0\u1eddi xem m\u1ee5c \u0111\u00e1ng ch\u00fa \u00fd s\u1ebd hi\u1ec3n th\u1ecb t\u1ea1i \u0111\u00e2y.");f.ZERO_VIEWER_COUNT_TEXT=b}),null);
__d("StoriesQueryArgumentsContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c={hideSelfBucket:!1,initialBucketID:null,initialBucketsCount:9,pageBucketsCount:9};d=a.createContext(c);e.exports=d}),null);
__d("StoriesCardOverlayPositioner.react",["CometRelay","StoriesCardOverlayPositioner_bounds.graphql","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=a.bounds,d=a.children,e=a.containerHeight;a=a.containerWidth;c=b("CometRelay").useFragment(g!==void 0?g:g=b("StoriesCardOverlayPositioner_bounds.graphql"),c);if(c!=null){var f=c.height,h=c.rotation,j=c.width,k=c.x;c=c.y;if(typeof f==="number"&&typeof j==="number"&&typeof h==="number"&&typeof k==="number"&&typeof c==="number"){if(c>1||k>1)return null;f=f*e;e=j*a;j=c*100;a=k*100;c={height:f+"px",left:a+"%",position:"absolute",top:j+"%",width:e+"px"};k={height:"100%",transform:"rotate("+h+"deg)",width:"100%"};return i.jsx("div",{className:"storiesCardOverlay/root",style:c,children:i.jsx("div",{className:"storiesCardOverlay/rotation",style:k,children:d})})}}return null}}),null);
__d("StoriesPauseReasons",[],(function(a,b,c,d,e,f){"use strict";a="BUCKET_TRANSITION";f.BUCKET_TRANSITION=a;b="BUG_DIALOG";f.BUG_DIALOG=b;c="CARD_CHANGE";f.CARD_CHANGE=c;d="CARD_TRANSITION_INITIATED";f.CARD_TRANSITION_INITIATED=d;e="CLICK_ADD_STORY";f.CLICK_ADD_STORY=e;a="CLICK_ARCHIVE_RESHARE_BUTTON";f.CLICK_ARCHIVE_RESHARE_BUTTON=a;b="CLICK_EMOJI_SELECTOR";f.CLICK_EMOJI_SELECTOR=b;c="CLICK_GIF_SELECTOR";f.CLICK_GIF_SELECTOR=c;d="CLICK_ON_OVERLAY_STICKER";f.CLICK_ON_OVERLAY_STICKER=d;e="CLICK_PAUSE_ICON";f.CLICK_PAUSE_ICON=e;a="CLICK_SEE_MORE_LONG_TEXT";f.CLICK_SEE_MORE_LONG_TEXT=a;b="CLICK_STICKER_SELECTOR";f.CLICK_STICKER_SELECTOR=b;c="CONFIRMATION_DIALOG";f.CONFIRMATION_DIALOG=c;d="EXTENDED_VIEWER";f.EXTENDED_VIEWER=d;e="FOCUSE_ON_INPUT";f.FOCUSE_ON_INPUT=e;a="HOVER_ON_ARCHIVE_RESHARE_BUTTON";f.HOVER_ON_ARCHIVE_RESHARE_BUTTON=a;b="HOVER_ON_OVERLAY_STICKER";f.HOVER_ON_OVERLAY_STICKER=b;c="HOVER_ON_PAUSE_OVERLAY";f.HOVER_ON_PAUSE_OVERLAY=c;d="HOVER_ON_RATING_STICKER";f.HOVER_ON_RATING_STICKER=d;e="HOVER_ON_REACTION_ICON";f.HOVER_ON_REACTION_ICON=e;a="HOVER_ON_SHARE_BUTTON";f.HOVER_ON_SHARE_BUTTON=a;b="HOVER_ON_SONG_STICKER";f.HOVER_ON_SONG_STICKER=b;c="JEWEL";f.JEWEL=c;d="KEYBOARD";f.KEYBOARD=d;e="LWR_PLAYBACK";f.LWR_PLAYBACK=e;a="MENU";f.MENU=a;b="MESSAGE_VIEWER";f.MESSAGE_VIEWER=b;c="MOUSE_CLICK_AND_HOLD";f.MOUSE_CLICK_AND_HOLD=c;d="MOUSE_ENTER_POLL_STICKER";f.MOUSE_ENTER_POLL_STICKER=d;e="REPORT_DIALOG";f.REPORT_DIALOG=e;a="SETTINGS_DIALOG";f.SETTINGS_DIALOG=a;b="TILE_GRID_BUTTON";f.TILE_GRID_BUTTON=b;c="VIDEO_PLAYBACK";f.VIDEO_PLAYBACK=c;d="VIEWER_SHEET_OVERLAY";f.VIEWER_SHEET_OVERLAY=d;e="VISIBILITY_CHANGE";f.VISIBILITY_CHANGE=e}),null);
__d("StoriesUniqueID",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g="js_",h=36,i=0;function a(){return g+(i++).toString(h)}}),null);