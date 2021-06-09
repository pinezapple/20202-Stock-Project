if (self.CavalryLogger) { CavalryLogger.start_js(["8teeOXE"]); }

__d("MWChatMediaRootQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"after"},b={defaultValue:null,kind:"LocalArgument",name:"before"},c={defaultValue:null,kind:"LocalArgument",name:"first"},d={defaultValue:null,kind:"LocalArgument",name:"last"},e={defaultValue:null,kind:"LocalArgument",name:"messageID"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},g={defaultValue:null,kind:"LocalArgument",name:"threadID"},h=[{kind:"Variable",name:"id",variableName:"threadID"}],i={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},j=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"},{kind:"Variable",name:"message_id",variableName:"messageID"},{kind:"Literal",name:"message_shared_media_type",value:"PHOTO_AND_VIDEO"}],k={alias:null,args:null,kind:"ScalarField",name:"message_id",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"timestamp_precise",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"legacy_attachment_id",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},r={alias:"image_thumb",args:[{kind:"Literal",name:"height",value:250},{kind:"Literal",name:"width",value:250}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[o,p,q],storageKey:"image(height:250,width:250)"};o={kind:"InlineFragment",selections:[n,{alias:null,args:null,kind:"ScalarField",name:"blurred_image_uri",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:2048},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:2048}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[o,p,q,{alias:null,args:null,kind:"ScalarField",name:"downloadable_uri",storageKey:null}],storageKey:null},r],type:"MessageImage",abstractKey:null};p={kind:"InlineFragment",selections:[n,{alias:"sdUrl",args:[{kind:"Literal",name:"quality",value:"SD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"SD")'},{alias:"hdUrl",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},r,{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"original_dimensions",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null}],type:"MessageVideo",abstractKey:null};q={alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null};n={alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_previous_page",storageKey:null}],storageKey:null};r={kind:"InlineFragment",selections:[i],type:"Node",abstractKey:"__isNode"};return{fragment:{argumentDefinitions:[a,b,c,d,e,f,g],kind:"Fragment",metadata:null,name:"MWChatMediaRootQuery",selections:[{alias:null,args:h,concreteType:"MessageThread",kind:"LinkedField",name:"message_thread",plural:!1,selections:[i,{alias:null,args:j,concreteType:"MessagesWithAttachmentsOfThreadConnection",kind:"LinkedField",name:"messages_with_attachments",plural:!1,selections:[{alias:null,args:null,concreteType:"MessagesWithAttachmentsOfThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[k,i,l,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"blob_attachments",plural:!0,selections:[m,o,p],storageKey:null}],type:"UserMessage",abstractKey:null}],storageKey:null},q],storageKey:null},n],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[g,e,a,c,b,d,f],kind:"Operation",name:"MWChatMediaRootQuery",selections:[{alias:null,args:h,concreteType:"MessageThread",kind:"LinkedField",name:"message_thread",plural:!1,selections:[i,{alias:null,args:j,concreteType:"MessagesWithAttachmentsOfThreadConnection",kind:"LinkedField",name:"messages_with_attachments",plural:!1,selections:[{alias:null,args:null,concreteType:"MessagesWithAttachmentsOfThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[m,{kind:"InlineFragment",selections:[k,i,l,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"blob_attachments",plural:!0,selections:[m,o,p,r],storageKey:null}],type:"UserMessage",abstractKey:null},r],storageKey:null},q],storageKey:null},n],storageKey:null}],storageKey:null}]},params:{id:"3067366190029158",metadata:{},name:"MWChatMediaRootQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("MWChatMediaData",[],(function(a,b,c,d,e,f){"use strict";var g=function(a){return a==null||a.__typename!=="MessageVideo"||a.sdUrl==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null||a.original_dimensions==null||a.original_dimensions.x==null||a.original_dimensions.y==null?null:{hdUrl:a.hdUrl,imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id,originalDimensions:{x:a.original_dimensions.x,y:a.original_dimensions.y},sdUrl:a.sdUrl}},h=function(a){return a==null||a.__typename!=="MessageImage"||a.image==null||a.image.uri==null||a.image.width==null||a.image.height==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null?null:{blurredImageUri:a.blurred_image_uri,image:{downloadableUri:a.image.downloadable_uri,height:a.image.height,uri:a.image.uri,width:a.image.width},imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id}};a=function(a){return a.reduce(function(a,b){if(b==null||b.node==null||b.node.id==null||b.node.message_id==null||b.node.blob_attachments==null||b.cursor==null)return a;var c=b.node,d=c.blob_attachments,e=c.id,f=c.message_id,i=c.timestamp_precise,j=b.cursor;c=d.map(function(a){if(a.__typename==="MessageImage"){var b=h(a);return b==null?null:{__typename:"MessageImage",attachment:b,cursor:j,messageID:f,nodeID:e,timestamp:i}}else if(a.__typename==="MessageVideo"){b=g(a);return b==null?null:{__typename:"MessageVideo",attachment:b,cursor:j,messageID:f,nodeID:e,timestamp:i}}else return null}).filter(Boolean);return a.concat(c)},[]).filter(Boolean)};f.normalizeMessages=a}),null);
__d("MWChatMediaReducer",[],(function(a,b,c,d,e,f){"use strict";a={curIdx:0,hasNextPage:!1,hasPrevPage:!1,initialCursor:null,isFetchingNextPage:!1,isFetchingPrevPage:!1,mediaList:[]};f.initialState=a;b=function(a,b){switch(b.type){case"initialize":return babelHelpers["extends"]({},a,{curIdx:b.curIdx,initialCursor:b.initialCursor,mediaList:b.mediaList});case"startFetchingNextPage":return babelHelpers["extends"]({},a,{isFetchingNextPage:!0});case"startFetchingPrevPage":return babelHelpers["extends"]({},a,{isFetchingPrevPage:!0});case"prevPageReceived":return babelHelpers["extends"]({},a,{curIdx:a.curIdx+b.medias.length,hasPrevPage:b.hasPrevPage,isFetchingPrevPage:!1,mediaList:b.medias.concat(a.mediaList)});case"nextPageReceived":return babelHelpers["extends"]({},a,{hasNextPage:b.hasNextPage,isFetchingNextPage:!1,mediaList:a.mediaList.concat(b.medias)});case"messageDeleted":return babelHelpers["extends"]({},a,{curIdx:Math.min(Math.max(b.curIdx,0),a.mediaList.length-1),mediaList:b.mediaList});case"viewMediaAtIndex":return babelHelpers["extends"]({},a,{curIdx:Math.min(Math.max(b.curIdx,0),a.mediaList.length-1)});default:return a}};f.reducer=b}),null);
__d("MWChatMediaUtil",["ExecutionEnvironment"],(function(a,b,c,d,e,f){"use strict";a=function(a){if(!b("ExecutionEnvironment").canUseDOM)return;a.forEach(function(a){if(typeof a==="string"){var b=new Image();b.src=a}})};f.prefetchImages=a}),null);
__d("MWChatMediaViewerImage.react",["fbt","CometHero.react","CometPagelet.react","CometPhotoViewerImageSuspense","CometPhotoViewerInnerWrapper.react","CometPressable.react","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react"),j=g._("Kh\u00f4ng c\u00f3 m\u00f4 t\u1ea3.");function a(a){var c=a.blurredImageURI,d=a.imageURI,e=a.origHeight,f=a.origSrc;a=a.origWidth;var h=i.useState(!1),k=h[0],l=h[1];h=b("CometPhotoViewerInnerWrapper.react").useCometPhotoViewerContainerStyles(!0);return i.jsx("div",{"data-testid":void 0,children:i.jsxs(b("CometPagelet.react").Placeholder,{className:h,fallback:f!=null?i.jsx(b("CometPhotoViewerInnerWrapper.react").CometPhotoViewerPlaceholderWrapper,{height:e,imageUri:f,showPlaceholderImage:f!=null&&a!=null&&e!=null,width:a,withFooter:!0}):null,name:"MessengerMediaViewerPhoto",pageletType:"media",children:[i.jsx(b("CometHero.react"),{description:"MWChatMediaViewerImage"}),c==null||k?i.jsx(b("CometPhotoViewerInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponent:function(a){return i.jsx(b("CometPhotoViewerImageSuspense"),{alt:j,className:a,src:d},d)},withFooter:!0}):i.jsx(b("CometPressable.react"),{display:"inline",label:g._("Nh\u1ea5n \u0111\u1ec3 xem n\u1ed9i dung nh\u1ea1y c\u1ea3m"),onPress:function(){return l(!0)},children:i.jsx(b("CometPhotoViewerInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponent:function(a){return i.jsx(b("CometPhotoViewerImageSuspense"),{alt:j,className:a,src:c},c)},withFooter:!0})})]},d)})}}),null);
__d("MWChatMediaViewerNavigationTapTarget.react",["ix","CometPressable.react","CometTrackingNodeProvider.react","TetraishSkittleIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=h||b("react"),k={buttonContainerBackground:{backgroundColor:"r898ja9m"},buttonContainerHoverLeft:{opacity:"pedkr2u6",transform:"lhh4dqlf"},buttonContainerHoverRight:{opacity:"pedkr2u6",transform:"k9ht9y5y"},fullHeight:{height:"datstx6m"},invisible:{opacity:"b5wmifdl",transitionDuration:"ijkhr0an",transitionTimingFunction:"s13u9afw",visibility:"kr9hpln1"},navButton:{alignItems:"bp9cbjyn",display:"j83agx80",opacity:"l8rlqa9s",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a",position:"l9j0dhe7",transitionDuration:"ms05siws",transitionProperty:"pnx7fd3z",transitionTimingFunction:"msbwk0y7",willChange:"srfxjet1"},root:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t",opacity:"pedkr2u6",position:"l9j0dhe7",transitionDuration:"c5ndavph",transitionProperty:"l23jz15m",transitionTimingFunction:"ot9fgl3s",willChange:"ffxd5cwt",zIndex:"tkr6xdv7"},tapTargetOverlay:{height:"datstx6m"}};function a(a){var c=a.direction,d=a.disable,e=d===void 0?!1:d;d=a.invisible;d=d===void 0?!1:d;var f=a.label,h=a.onClick,l=a.testid;l=a.trackingNode;return j.jsx("div",{className:(i||(i=b("stylex")))(k.root,d&&k.invisible,k.fullHeight),children:j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:l,children:j.jsx(b("CometPressable.react"),{"aria-label":f,focusable:!1,onPress:h,testid:void 0,xstyle:k.tapTargetOverlay,children:function(a){a=a.hovered;return j.jsx("div",{className:(i||(i=b("stylex")))(k.navButton,k.buttonContainerBackground,a&&(c==="previous"?k.buttonContainerHoverLeft:k.buttonContainerHoverRight)),children:j.jsx(b("TetraishSkittleIcon.react"),{color:"gray",disabled:e,icon:c==="previous"?b("fbicon")._(g("492491"),24):b("fbicon")._(g("492539"),24),size:48})})}})})})}}),null);
__d("XMessengerDotComCometRootControllerRouteBuilder",["jsExtraRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsExtraRouteBuilder")("/",Object.freeze({no_rdr:!1}),["/t/"],void 0);c=a;e.exports=c}),null);
__d("MWChatMediaViewerStage.react",["fbt","CometBlurredBackgroundImage.react","CometKeys","CometLink.react","CometMediaViewerFilmstrip.react","CurrentEnvironment","Locale","MWChatMediaViewerNavigationTapTarget.react","MessengerBlurpleLogoSvg.re","XMessengerDotComCometRootControllerRouteBuilder","deferredLoadComponent","gkx","react","requireDeferred","stylex","useCometRouterDispatcher","useDebounced","useLayerKeyCommands","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=h||b("react"),k=b("deferredLoadComponent")(b("requireDeferred")("MWChatMediaViewerControls.react").__setRef("MWChatMediaViewerStage.react")),l=2e3,m=b("gkx")("1299319");function a(a){var c=a.activeIndex,d=a.attachmentID,e=a.backgroundSrc,f=a.children,h=a.disableNextButton,n=a.disablePrevButton,o=a.downloadLink,p=a.hideNextButton,q=a.hidePrevButton,r=a.messageID,s=a.setActiveIndex,t=a.showMessengerLink,u=b("CurrentEnvironment").messengerdotcom,v=b("gkx")("1224637"),w=b("gkx")("1844772"),x=g._("\u1ea2nh tr\u01b0\u1edbc \u0111\u00f3"),y=g._("\u1ea2nh ti\u1ebfp theo"),z=j.useRef(!0),A=j.useState(!1),B=A[0],C=A[1],D=j.useRef(null),E=b("useCometRouterDispatcher")();A=function(){return F.isPending()?G():F()};var F=b("useDebounced")(function(){C(!1),G()},l,!0),G=b("useDebounced")(function(){C(!0),z.current=!1},l,!1);b("useLayoutEffect_SAFE_FOR_SSR")(function(){G(),D.current&&z.current&&D.current.focus()});var H=function(){E!=null&&E.popPushView()},I=j.useMemo(function(){var c=[];!q&&!n&&c.push({command:{key:b("CometKeys").LEFT},description:x,handler:function(){return s(a.activeIndex-1)}});!p&&!h&&c.push({command:{key:b("CometKeys").RIGHT},description:y,handler:function(){return s(a.activeIndex+1)}});return c},[h,n,p,q,y,x,a.activeIndex,s]),J=j.jsx(b("MWChatMediaViewerNavigationTapTarget.react"),{direction:b("Locale").isRTL()?"next":"previous",disable:n,invisible:q||B,label:x,onClick:function(){return s(c-1)},testid:void 0,trackingNode:143});B=j.jsx(b("MWChatMediaViewerNavigationTapTarget.react"),{direction:b("Locale").isRTL()?"previous":"next",disable:h,invisible:p||B,label:y,onClick:function(){return s(c+1)},testid:void 0,trackingNode:142});b("useLayerKeyCommands")(I);return j.jsxs("div",{className:"iqfcb0g7 abiwlrkh l9j0dhe7 p01isnhg datstx6m buofh1pr cbu4d94t j83agx80 tqsryivl bp9cbjyn",onMouseMove:A,ref:D,tabIndex:"0",children:[t&&j.jsx("div",{className:"s90hwng2 dn56xbwz re5koujm pmk7jnqg",children:j.jsx(b("CometLink.react"),{"aria-label":"Messenger",href:b("XMessengerDotComCometRootControllerRouteBuilder").buildURL({}),children:j.jsx(b("MessengerBlurpleLogoSvg.re").make,{height:"40",width:"40"})})}),j.jsx("div",{className:"tkr6xdv7 k4urcfbm pmk7jnqg d5n6dh0y osjxmdq5"}),j.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg akz8cqyu n7fi1qx3 i09qtzwb",children:e!=null?j.jsx(b("CometBlurredBackgroundImage.react"),{src:e}):null}),j.jsxs("div",{className:"k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 taijpn5t datstx6m buofh1pr j83agx80 rq0escxv j0qtgc86 e9n865no",children:[d!=null&&r!=null?j.jsx("div",{className:(i||(i=b("stylex"))).dedupe({"align-items-1":"bp9cbjyn","display-1":"j83agx80","end-1":"oxoulkyr","height-1":"byvelhso","position-1":"pmk7jnqg","z-index-1":"tkr6xdv7"},u?{"end-1":"n7fi1qx3","height-1":"e5d9fub0"}:null,v?{"end-1":"hhcrnkbu","height-1":"cb02d2ww","z-index-1":"kavbgo14"}:null),children:j.jsx(k,{attachmentID:d,canForward:w,downloadLink:o,messageID:r})}):null,j.jsxs("div",{className:"du4w35lb kr520xx4 j9ispegn pmk7jnqg i1fnvgqd n7fi1qx3 j83agx80 i09qtzwb bp9cbjyn",children:[!m&&j.jsx("div",{"aria-hidden":!0,className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb","data-testid":void 0,onClick:H}),J,B]}),f]}),j.jsx("div",{className:"stjgntxs ni8dbmo4 d2edcug0",children:j.jsx(b("CometMediaViewerFilmstrip.react"),{activeIndex:c,images:a.thumbnails.map(function(a){return babelHelpers["extends"]({},a,{mediaType:"image"})}),onSetImage:s})})]})}}),null);
__d("MWChatMediaViewerVideo.react",["CometRouteRenderType","MWChatVideoPlayer.react","react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react");function a(a){var c=b("CometRouteRenderType").useIsPushView();return i.jsx("div",{className:(h||(h=b("stylex"))).dedupe({"align-items-1":"bp9cbjyn","display-1":"j83agx80","flex-grow-1":"buofh1pr","justify-content-1":"taijpn5t","min-height-1":"pnzxbu4t","width-1":"k4urcfbm"},c?{"height-1":"n626y76b"}:null,c?null:{"height-1":"ojb6a8i8"}),children:i.jsx(b("MWChatVideoPlayer.react"),{controls:"default",fbid:a.fbid,hdSrc:a.hdSrc,initialForceHD:!0,originalHeight:a.originalHeight,originalWidth:a.originalWidth,sdSrc:a.sdSrc})})}}),null);
__d("MWChatMessageId.re",["MWChatMessageId.bs","bs_curry"],(function(a,b,c,d,e,f){a=b("MWChatMessageId.bs").getMessageId;f.getMessageId=a;c=b("MWChatMessageId.bs").getThreadId;f.getThreadId=c;d=b("MWChatMessageId.bs").getTimestamp;f.getTimestamp=d;e=function(a,c,d){a=b("bs_curry")._3(b("MWChatMessageId.bs").makeSent,a,c,d);return a};f.makeSent=e}),null);
__d("MWChatMediaRoot.react",["fbt","CometContentNotAvailable.react","CometErrorBoundary.react","CometErrorRoot.react","CometRelay","CometRouteParams","CometRouterPushViewStackContext","MWChatDeleteMessageEventEmitter","MWChatMediaData","MWChatMediaReducer","MWChatMediaRootQuery.graphql","MWChatMediaUtil","MWChatMediaViewerImage.react","MWChatMediaViewerStage.react","MWChatMediaViewerVideo.react","MWChatMessageId.re","WebPixelRatio","gkx","react","useIsMountedRef"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=i||b("react"),k=20,l=h!==void 0?h:h=b("MWChatMediaRootQuery.graphql");function m(a){var c=b("CometRelay").useRelayEnvironment(),d=b("CometRouteParams").useRouteParams();a.props.manualRouteParams!=null&&(d=a.props.manualRouteParams);var e=j.useContext(b("CometRouterPushViewStackContext"))||[];e=e.length===0&&b("gkx")("1968579");var f=j.useState(null),h=f[0],i=f[1];f=j.useReducer(b("MWChatMediaReducer").reducer,b("MWChatMediaReducer").initialState);var m=f[0],n=m.curIdx,o=m.hasNextPage,p=m.hasPrevPage,q=m.initialCursor,r=m.isFetchingNextPage,s=m.isFetchingPrevPage,t=m.mediaList,u=f[1],v=b("useIsMountedRef")(),w=b("CometRelay").usePreloadedQuery(l,a.queries.messengerMediaRootQueryReference);if(h!==null)throw h;j.useEffect(function(){var a;a=w==null?void 0:(a=w.message_thread)==null?void 0:(a=a.messages_with_attachments)==null?void 0:(a=a.edges[0])==null?void 0:a.cursor;if(a!=null&&q===null){var c;c=w==null?void 0:(c=w.message_thread)==null?void 0:(c=c.messages_with_attachments)==null?void 0:c.edges;if(c!=null){c=b("MWChatMediaData").normalizeMessages(c);var e=0;d.attachment_id!=null&&(e=c.findIndex(function(a){return a.attachment.legacyAttachmentID===d.attachment_id}));u({curIdx:e,initialCursor:a,mediaList:c,type:"initialize"})}}},[q,w,d.attachment_id]);var x=w==null?void 0:(m=w.message_thread)==null?void 0:m.id;j.useEffect(function(){var a=b("MWChatDeleteMessageEventEmitter").subscribe(function(a){var b=n,d=t.filter(function(c,d){c=c.messageID===a;c&&(d<=n&&n>0&&b--);return!c});d.length!==t.length&&(x!=null&&c.commitUpdate(function(a){return(a=a.get(x))==null?void 0:a.invalidateRecord()}));u({curIdx:b,mediaList:d,type:"messageDeleted"})});return a},[c,x,n,t]);var y=j.useCallback(function(a){u({type:"startFetchingPrevPage"});return b("CometRelay").fetchQuery(c,l,{before:a,last:k,scale:b("WebPixelRatio").get(),threadID:d.thread_id}).toPromise().then(function(a){var c;if(!v.current)return;a=a==null?void 0:(a=a.message_thread)==null?void 0:a.messages_with_attachments;c=b("MWChatMediaData").normalizeMessages((c=a==null?void 0:a.edges)!=null?c:[]);if(c.length>0){u({hasPrevPage:(a=a==null?void 0:(a=a.page_info)==null?void 0:a.has_previous_page)!=null?a:!1,medias:c,type:"prevPageReceived"})}})["catch"](function(a){if(!v.current)return;i(a)})},[c,v,d.thread_id]),z=j.useCallback(function(a){u({type:"startFetchingNextPage"});return b("CometRelay").fetchQuery(c,l,{after:a,first:k,scale:b("WebPixelRatio").get(),threadID:d.thread_id}).toPromise().then(function(a){var c;if(!v.current)return;a=a==null?void 0:(a=a.message_thread)==null?void 0:a.messages_with_attachments;c=b("MWChatMediaData").normalizeMessages((c=a==null?void 0:a.edges)!=null?c:[]);if(c.length>0){u({hasNextPage:(a=a==null?void 0:(a=a.page_info)==null?void 0:a.has_next_page)!=null?a:!1,medias:c,type:"nextPageReceived"})}})["catch"](function(a){if(!v.current)return;i(a)})},[c,v,d.thread_id]);j.useEffect(function(){q!=null&&(z(q),y(q))},[c,z,y,q,d.thread_id]);var A=(a=(f=t[0])==null?void 0:f.cursor)!=null?a:null,B=(m=(h=t[t.length-1])==null?void 0:h.cursor)!=null?m:null;j.useEffect(function(){n<=k/2&&p&&!s&&A!=null?y(A):n>=t.length-k/2&&o&&!r&&B!=null&&z(B)},[n,y,z,o,p,A,B,t.length,r,s]);f=t[n-1];a=t[n+1];var C=null,D=null;f!=null&&f.__typename==="MessageImage"&&(C=f.attachment.image.uri);a!=null&&a.__typename==="MessageImage"&&(D=a.attachment.image.uri);j.useEffect(function(){b("MWChatMediaUtil").prefetchImages([C,D])},[C,D]);h=t[n];if(q==null)return null;if(h==null)return j.jsx(b("CometContentNotAvailable.react"),{});m=t.map(function(a){var b=a.attachment.imageThumb,c=b.height,d=b.uri;b=b.width;return{alt:g._("Kh\u00f4ng c\u00f3 m\u00f4 t\u1ea3."),height:c,key:(c=a.attachment.legacyAttachmentID)!=null?c:d,uri:d,width:b}}).filter(Boolean);return j.jsx(b("MWChatMediaViewerStage.react"),{activeIndex:n,attachmentID:h.attachment.legacyAttachmentID,backgroundSrc:h.attachment.imageThumb.uri,disableNextButton:r&&t[n+1]==null,disablePrevButton:s&&t[n-1]==null,downloadLink:h.__typename==="MessageVideo"?(f=h.attachment.hdUrl)!=null?f:h.attachment.sdUrl:h.attachment.image.downloadableUri,hideNextButton:!o&&t[n+1]==null,hidePrevButton:!p&&t[n-1]==null,messageID:typeof d.thread_id==="string"&&h.timestamp!=null?b("MWChatMessageId.re").makeSent(d.thread_id,h.messageID,h.timestamp):null,setActiveIndex:function(a){return u({curIdx:a,type:"viewMediaAtIndex"})},showMessengerLink:e,thumbnails:m,children:h.__typename==="MessageVideo"?j.jsx(b("MWChatMediaViewerVideo.react"),{fbid:h.nodeID,hdSrc:h.attachment.hdUrl!=null?h.attachment.hdUrl:void 0,originalHeight:h.attachment.originalDimensions.x,originalWidth:h.attachment.originalDimensions.y,sdSrc:h.attachment.sdUrl}):h.__typename==="MessageImage"?j.jsx(b("MWChatMediaViewerImage.react"),{blurredImageURI:h.attachment.blurredImageUri,imageURI:h.attachment.image.uri}):null})}function a(a){a=j.jsx(m,babelHelpers["extends"]({},a));return j.jsx(b("CometErrorBoundary.react"),{fallback:function(){return j.jsx(b("CometErrorRoot.react"),{})},children:a})}}),null);