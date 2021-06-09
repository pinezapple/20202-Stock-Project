if (self.CavalryLogger) { CavalryLogger.start_js(["QCv25Wn"]); }

__d("FriendingCometPYMKCard_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"},{defaultValue:230,kind:"LocalArgument",name:"size"}],kind:"Fragment",metadata:null,name:"FriendingCometPYMKCard_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Variable",name:"height",variableName:"size"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"size"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:[{kind:"Literal",name:"iconSize",value:16}],kind:"FragmentSpread",name:"FriendingCometMutualFriendsSocialContext_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("FriendingCometFriendRequestCancelMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},e=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestCancelMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestCancelResponsePayload",kind:"LinkedField",name:"friend_request_cancel",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"cancelled_friend_requestee",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestCancelMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestCancelResponsePayload",kind:"LinkedField",name:"friend_request_cancel",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"cancelled_friend_requestee",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},c,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}]},params:{id:"2464692713654802",metadata:{},name:"FriendingCometFriendRequestCancelMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometPYMKBlacklistSuggestionMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"PymkSuggestionBlacklistResponsePayload",kind:"LinkedField",name:"pymk_suggestion_blacklist",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"blacklisted_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometPYMKBlacklistSuggestionMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometPYMKBlacklistSuggestionMutation",selections:b},params:{id:"2882558265094181",metadata:{},name:"FriendingCometPYMKBlacklistSuggestionMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometHScrollGlimmerCard.react",["BaseGlimmer.react","CometCard.react","react","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){a=a.onVisible;a=b("useVisibilityObserver")({onVisible:a,options:{rootMargin:200}});return h.jsx("div",{className:"k4urcfbm datstx6m j83agx80",ref:a,children:h.jsxs(b("CometCard.react"),{background:"white",border:"solid",dropShadow:1,children:[h.jsx("div",{className:"k4urcfbm d5it6em2",children:h.jsx(b("BaseGlimmer.react"),{className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",index:0})}),h.jsxs("div",{className:"tw6a2znq f10w8fjw d1544ag0 pybr56ya hdvgg9ib",children:[h.jsx(b("BaseGlimmer.react"),{className:"r1eg49ei rs0gx3tq i4qgphn6 kv0toi1t j6sty90h jos75b7i t0qjyqq4",index:0}),h.jsx(b("BaseGlimmer.react"),{className:"n99xedck ku2m03ct cyypbtt7 kv0toi1t j6sty90h jos75b7i t0qjyqq4",index:0})]})]})})}}),null);
__d("CometRecommendationsUnitCard.react",["fbt","ix","ActorHovercard.react","CometAspectRatioContainer.react","CometBackgroundImage.react","CometCard.react","CometColumn.react","CometColumnItem.react","CometImage.react","CometLink.react","TetraButton.react","TetraCircleButton.react","TetraTextPairing.react","fbicon","react","stylex","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=i||b("react"),l={cardContext:{alignItems:"bp9cbjyn",display:"j83agx80",height:"gl3lb2sf",width:"k4urcfbm"},container:{width:"k4urcfbm"},contentColumn:{maxWidth:"d2edcug0"},contentRoot:{display:"j83agx80"},contentRowShort:{height:"bq79dmyb"},contentRowStandard:{height:"fbzcu06b"},contentRowTall:{height:"lz9ov98a"},image:{height:"datstx6m",objectFit:"bixrwtb6",width:"k4urcfbm"},imageContainer:{paddingBottom:"d5it6em2",position:"l9j0dhe7",width:"k4urcfbm"},imageLink:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",display:"a8c37x1j"},inset:{bottom:"i09qtzwb",boxShadow:"oaz4zybt",height:"ay7djpcl",position:"pmk7jnqg",width:"k4urcfbm"},xoutButton:{end:"swmj3c3o",position:"pmk7jnqg",top:"fcg2cn6m"}};function a(a,c){var d=a.accessibilityLabel,e=a.actorID,f=a.badge,i=a.body,m=a.cardAction,n=a.cardContentHeightLevel,o=a.cardContext;o=o===void 0?null:o;var p=a.cardFooter;p=p===void 0?null:p;var q=a.dropShadow;q=q===void 0?2:q;var r=a.headline,s=a.imageAlt,t=a.imageAspectRatio,u=a.imageSrc,v=a.isCardContextHidden;v=v===void 0?!1:v;var w=a.linkURI,x=a.meta,y=a.onClick,z=a.onHeadlineClick,A=a.onImageClick,B=a.onImpression,C=a.onRemove;a=a.testid;var D=k.useRef(!1);a=k.useCallback(function(){if(e==null)return;D.current||(B&&B(),D.current=!0)},[e,B]);a=b("useVisibilityObserver")({onVisible:a});var E=function(){y&&y(),A&&A()},F=function(){y&&y(),z&&z()};return k.jsx("div",{className:(j||(j=b("stylex")))(l.container),"data-testid":void 0,ref:a,children:k.jsx(b("CometCard.react"),{background:"white",border:"solid",dropShadow:q,ref:c,children:k.jsxs("div",{className:j(l.contentRoot),children:[k.jsxs(b("CometColumn.react"),{expanding:!0,paddingTop:0,paddingVertical:12,spacing:12,xstyle:l.contentColumn,children:[k.jsx(b("CometColumnItem.react"),{children:t==null?k.jsxs("div",{className:(j||(j=b("stylex")))(l.imageContainer),children:[k.jsx(b("CometLink.react"),{"aria-hidden":d==null,"aria-label":d,href:w,onClick:E,xstyle:l.imageLink,children:k.jsx(b("CometImage.react"),{alt:s,src:u,xstyle:l.image})}),k.jsx("div",{className:(j||(j=b("stylex")))(l.inset)})]}):k.jsx(b("CometLink.react"),{href:w,onClick:E,children:k.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:t,children:k.jsx(b("CometBackgroundImage.react"),{alt:s,src:u})})})}),k.jsx(b("CometColumnItem.react"),{paddingHorizontal:12,xstyle:[n===0&&l.contentRowShort,n===1&&l.contentRowStandard,n===2&&l.contentRowTall],children:k.jsx(b("TetraTextPairing.react"),{body:i,bodyColor:"secondary",headline:k.jsx(b("ActorHovercard.react"),{actorID:e,children:function(a){return k.jsxs(k.Fragment,{children:[k.jsx(b("CometLink.react"),{"aria-hidden":!1,href:w,onClick:F,ref:a,children:r}),f]})}}),headlineLineLimit:n==null?1:2,level:3,meta:x})}),!v&&k.jsx(b("CometColumnItem.react"),{paddingHorizontal:12,children:k.jsx("div",{className:(j||(j=b("stylex")))(l.cardContext),children:o})}),m!=null&&k.jsx(b("CometColumnItem.react"),{expanding:!0,paddingHorizontal:12,verticalAlign:"bottom",children:k.jsx(b("TetraButton.react"),babelHelpers["extends"]({},m,{reduceEmphasis:(a=m.reduceEmphasis)!=null?a:!0}))}),p&&k.jsx(b("CometColumnItem.react"),{paddingHorizontal:12,children:p})]}),C!=null?k.jsx("div",{className:(j||(j=b("stylex")))(l.xoutButton),children:k.jsx(b("TetraCircleButton.react"),{icon:b("fbicon")._(h("478233"),20),label:g._("\u0110\u00f3ng"),onPress:C,size:32,type:"dark-overlay"})}):null]})})})}c=k.forwardRef(a);e.exports=c}),null);
__d("FriendingCometFriendRequestCancelMutation",["CometRelay","FriendingCometFriendRequestCancelMutation.graphql","ProfileActionFriendingMutationUtils","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h=g!==void 0?g:g=b("FriendingCometFriendRequestCancelMutation.graphql");function a(a,c,d,e){return b("CometRelay").commitMutation(a,{mutation:h,onError:e,optimisticResponse:{friend_request_cancel:{cancelled_friend_requestee:{friendship_status:"CAN_REQUEST",id:c,profile_action:b("ProfileActionFriendingMutationUtils").getOptimisticActionForFriendshipStatus("CAN_REQUEST",c)}}},variables:{input:{cancelled_friend_requestee_id:c,source:d},scale:b("WebPixelRatio").get()}})}}),null);
__d("FriendingCometPYMKCard.react",["fbt","ix","CometRecommendationsUnitCard.react","CometRelay","FriendingCometErrorHandler.react","FriendingCometFriendRequestCancelMutation","FriendingCometFriendRequestSendMutation","FriendingCometMutualFriendsSocialContext.react","FriendingCometPYMKCard_user.graphql","TetraButton.react","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=j||b("react");function a(a){var c=b("CometRelay").useFragment(i!==void 0?i:i=b("FriendingCometPYMKCard_user.graphql"),a.user),d=a.addFriendSource,e=a.cancelRequestSource,f=a.dropShadow;f=f===void 0?2:f;var j=a.hasButtonIcons;j=j===void 0?!0:j;var l=a.hasRemoveTextButton;l=l===void 0?!1:l;var m=a.logAddFriend,n=a.logClick,o=a.logImpression,p=a.onRemove,q=a.profileURI,r=a.pymkLocation;a=c.friendship_status;var s=c.id,t=c.name,u=c.profile_picture;u=u==null?void 0:u.uri;var v=b("CometRelay").useRelayEnvironment(),w=k.useRef(!1),x=k.useRef(a),y=x.current!==a;y&&(x.current=a);var z=b("FriendingCometErrorHandler.react").useFriendingErrorHandler({addFriendId:(x=s)!=null?x:"0",addFriendSource:d});x=k.useCallback(function(){s!=null&&(b("FriendingCometFriendRequestSendMutation").commit(v,s,d,z,r),m!=null&&m())},[d,v,z,s,m,r]);var A=k.useCallback(function(){s!=null&&(w.current=!0,b("FriendingCometFriendRequestCancelMutation").commit(v,s,e,z))},[e,v,z,s]);if(s==null||u==null||t==null)return null;var B=void 0,C=null,D=null;switch(a){case"CAN_REQUEST":B={icon:j?b("fbicon")._(h("497883"),16):null,label:g._("Th\u00eam b\u1ea1n b\u00e8"),onPress:x,testid:"add_button"};C=l?k.jsx("div",{className:"k4urcfbm hddg9phg",children:k.jsx(b("TetraButton.react"),{icon:j?b("fbicon")._(h("664704"),16):null,label:g._("X\u00f3a, g\u1ee1 b\u1ecf"),onPress:p,testid:void 0,type:"secondary"})}):null;D=w.current?g._("\u0110\u00e3 h\u1ee7y l\u1eddi m\u1eddi"):null;break;case"OUTGOING_REQUEST":B=l?void 0:{icon:j?b("fbicon")._(h("664704"),16):null,label:g._("H\u1ee7y"),onPress:A,reduceEmphasis:!1,testid:"cancel_request_button",type:"secondary"};C=l?k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"k4urcfbm m7zwrmfr"}),k.jsx("div",{className:"k4urcfbm hddg9phg",children:k.jsx(b("TetraButton.react"),{icon:j?b("fbicon")._(h("664704"),16):null,label:g._("H\u1ee7y"),onPress:A,testid:void 0,type:"secondary"})})]}):null;D=g._("\u0110\u00e3 g\u1eedi l\u1eddi m\u1eddi");break}a=null;if(y&&D!=null)a=k.jsx(b("TetraText.react"),{color:"secondary",numberOfLines:1,type:"body3",children:D});else{A=(j=(x=c.social_context)==null?void 0:x.text)!=null?j:"";a=A!==""?k.jsx(b("FriendingCometMutualFriendsSocialContext.react"),{iconSize:16,socialContextText:A,textType:"body3",truncateContextText:!0,user:c}):null}w.current=!1;return k.jsx(b("CometRecommendationsUnitCard.react"),{actorID:s,cardAction:B,cardContext:a,cardFooter:C,dropShadow:f,headline:t,imageAlt:t!==""?g._("\u1ea2nh \u0111\u1ea1i di\u1ec7n c\u1ee7a {name}",[g._param("name",t)]):g._("\u1ea2nh \u0111\u1ea1i di\u1ec7n"),imageSrc:u,linkURI:q,onClick:n,onImpression:o,onRemove:l?void 0:p,testid:void 0})}}),null);
__d("FriendingCometPYMKBlacklistSuggestionMutation",["CometRelay","FriendingCometPYMKBlacklistSuggestionMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h=g!==void 0?g:g=b("FriendingCometPYMKBlacklistSuggestionMutation.graphql");function a(a,c,d,e,f,g,i){var j=function(a,f){f===void 0&&(f=e);a=d!=null?a.get(d):null;if(!a)return;var h=g!=null?{location:g}:null;a=b("CometRelay").ConnectionHandler.getConnection(a,c,h);if(!a)return;b("CometRelay").ConnectionHandler.deleteNode(a,f)};return b("CometRelay").commitMutation(a,{mutation:h,onError:i,optimisticUpdater:j,updater:function(a){var b=a.getRootField("pymk_suggestion_blacklist");if(!b)return;b=b.getLinkedRecord("blacklisted_user");if(!b)return;b=b.getValue("id");b=typeof b==="string"?""+b:null;b!=null&&j(a,b)},variables:{input:{people_you_may_know_id:e,people_you_may_know_location:f}}})}}),null);
__d("RegularPymkAddFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744254");c=b("FalcoLoggerInternal").create("regular_pymk_add",a);e.exports=c}),null);
__d("RegularPymkImpFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744255");c=b("FalcoLoggerInternal").create("regular_pymk_imp",a);e.exports=c}),null);
__d("RegularPymkProfileFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744256");c=b("FalcoLoggerInternal").create("regular_pymk_profile",a);e.exports=c}),null);
__d("RegularPymkXoutFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744257");c=b("FalcoLoggerInternal").create("regular_pymk_xout",a);e.exports=c}),null);