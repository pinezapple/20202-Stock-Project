if (self.CavalryLogger) { CavalryLogger.start_js(["SjTgrZU"]); }

__d("MWChatHasSearchTabContent.bs",["MWChatMultitabStateHook.bs","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=b("MWChatMultitabStateHook.bs").useHook_DEPRECATED(void 0);return h.useCallback(function(a){a=c.openTabsState.find(function(a){return a.threadID===0});if(a!==void 0)return a.hasContent.contents;else return!1},[c])}f.useHook=a}),null);
__d("MWChatBlurNewTab.bs",["MWChatMultitabContext.bs","MWChatMultitabDispatcher.bs","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=h.useContext(b("MWChatMultitabContext.bs").context);return h.useCallback(function(a){if(c!==void 0)return b("MWChatMultitabDispatcher.bs").dispatch(void 0,c,4)},[c])}f.useHook=a}),null);
__d("MWChatFocusNewTab.bs",["MWChatMultitabContext.bs","MWChatMultitabDispatcher.bs","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=h.useContext(b("MWChatMultitabContext.bs").context);return h.useCallback(function(a){if(c!==void 0)return b("MWChatMultitabDispatcher.bs").dispatch(void 0,c,5)},[c])}f.useHook=a}),null);
__d("MWChatHeaderNew.bs",["cssVar","fbt","CometPressable.react","MWTheme.bs","bs_curry","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=i||b("react"),l={root:{position:"l9j0dhe7",display:"j83agx80",flexShrink:"pfnyh3mw",justifyContent:"i1fnvgqd",alignItems:"bp9cbjyn",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingTop:"cxgpxx05",paddingBottom:"sj5x9vvc",paddingStart:"dati1w0a",paddingEnd:"hv4rvrfc",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",boxShadow:"pcdcaq2l",backgroundColor:"nred35xi",height:"k7cz35w2",zIndex:"kavbgo14"},title:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",whiteSpace:"g0qnabr5",textOverflow:"ltmttdrg",fontWeight:"ekzkrbhg",color:"oo9gr5id"}};function a(a){var c=a.isTabFocused,d=a.closeChatTab;a=a.title;c=c?b("MWTheme.bs").top(b("MWTheme.bs").$$default):"#bec2c9";c=k.jsxs("svg",{width:"30px",height:"30px",viewBox:"0 0 24 24",children:[k.jsx("line",{x1:"6",x2:"18",y1:"6",y2:"18",strokeLinecap:"round",strokeWidth:"2",stroke:c}),k.jsx("line",{x1:"6",x2:"18",y1:"18",y2:"6",strokeLinecap:"round",strokeWidth:"2",stroke:c})]});return k.jsxs("div",{className:(j||(j=b("stylex")))(l.root),children:[k.jsx("div",{className:j(l.title),children:a}),k.jsx(b("CometPressable.react"),{"aria-label":h._("Thu nh\u1ecf tab"),onPress:function(a){return b("bs_curry")._1(d,void 0)},overlayRadius:"50%",children:c})]})}c=a;f.styles=l;f.make=c}),null);
__d("MWChatTabTokenizerInternalLayoutInlineStrategy.react",["CometScrollableArea.react","CometTokenizerInputStrategyEventListener.react","CometTypeaheadViewStrategyEventListener.react","cometHandleHighlightDropOnMouseLeave","emptyFunction","react","stylex","useCometInternalTypeaheadState","useCometTypeaheadKeyboardForScrollableArea","useCometTypeaheadLayoutStrategyStyles"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={view:{backgroundColor:"cwj9ozl2",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr"},viewHidden:{pointerEvents:"hzruof5a",visibility:"kr9hpln1"}};function a(a,c){var d=a.commandConfigs,e=a.extraLayoutProps,f=e.afterViewContent,g=e.ariaProps,k=g.ariaDescribedByProps,l=g.ariaInputProps,m=g.ariaViewProps;g=e.beforeViewContent;var n=e.helperTextComponent,o=e.isLoading;e=e.isOpened;var p=a.inputStrategyRenderer,q=a.isDisabled,r=a.label,s=a.onBackspace,t=a.onBlur,u=a.onChange,v=a.onDownArrow,w=a.onEnter,x=a.onEscape,y=a.onFocus,z=a.onShiftTab,A=a.onTab,B=a.onUpArrow,C=a.queryString,D=a.selectedEntries,E=a.tokensStrategyRenderer,F=a.viewStrategyRenderer,G=a.xstyles;G=G===void 0?{}:G;var H=babelHelpers.objectWithoutPropertiesLoose(a,["commandConfigs","extraLayoutProps","inputStrategyRenderer","isDisabled","label","onBackspace","onBlur","onChange","onDownArrow","onEnter","onEscape","onFocus","onShiftTab","onTab","onUpArrow","queryString","selectedEntries","tokensStrategyRenderer","viewStrategyRenderer","xstyles"]);a=b("useCometInternalTypeaheadState")();var I=a.activeEntries,J=a.highlightedEntry;a=b("useCometTypeaheadLayoutStrategyStyles")({isOpened:e,xstyles:G});G=a.inputXStyle;var K=a.layoutXStyle,L=a.viewXStyle_DO_NOT_USE,M=b("useCometTypeaheadKeyboardForScrollableArea")(J),N=b("cometHandleHighlightDropOnMouseLeave")(H.onHighlightEntry);return i.jsxs("div",{className:(h||(h=b("stylex")))(K),children:[i.jsx("div",{className:h(G),onClick:H.onClick,role:"presentation",children:i.jsx(b("CometTokenizerInputStrategyEventListener.react"),{commandConfigs:d,onBackspace:s,onBlur:t,onChange:u,onClick:b("emptyFunction"),onDownArrow:v,onEnter:w,onEscape:x,onFocus:y,onShiftTab:z,onTab:A,onUpArrow:B,ref:c,children:function(a,b){return i.jsx(p,babelHelpers["extends"]({},b,{ariaProps:l,autoFocus:H.autoFocus,id:H.id,inputEndContent:H.inputEndContent,inputExtraProps:H.inputExtraProps,inputStartContent:i.jsx(E,{isDisabled:q,onPress:H.onRemoveEntry,tokens:D}),isDisabled:q,label:r,placeholder:D.length>0?null:H.placeholder,queryString:C,ref:a,testid:void 0}))}})}),n!=null&&i.jsx("div",babelHelpers["extends"]({},k,{children:n})),g,e&&i.jsx(b("CometTypeaheadViewStrategyEventListener.react"),{onOutsideClick:H.onOutsideClick,children:function(a){return i.jsx("div",{className:(h||(h=b("stylex")))([j.view,L,I.length===0&&!o&&j.viewHidden]),onMouseLeave:N,ref:a,children:i.jsx(b("CometScrollableArea.react"),{horizontal:!1,ref:M,children:i.jsx(F,{ariaProps:m,entries:I,highlightedEntry:J,isLoading:o,onHighlightEntry:H.onHighlightEntry,onPressEntry:H.onPressEntry,queryString:C})})})}}),f]})}c=i.forwardRef(a);e.exports=c}),null);
__d("MWChatTabTokenizerBaseLayoutInlineStrategy.react",["CometTypeaheadHelperText.react","MWChatTabTokenizerInternalLayoutInlineStrategy.react","react","useCometInternalTypeaheadFetch","useCometInternalTypeaheadState","useCometInternalTypeaheadStateDispatcher","useCometTokenizerInternalLayoutInlineStrategyHandlers","useCometTypeaheadInputRefs","useCometTypeaheadLayoutContextualStrategyARIAProps"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a,c){var d=a.extraLayoutProps;d=d===void 0?{}:d;var e=d.afterViewContent;d=d.beforeViewContent;var f=a.helperText,g=a.label,i=a.onBackspace,j=a.onBlur,k=a.onChange,l=a.onDownArrow,m=a.onEnter,n=a.onEscape,o=a.onHighlightEntry,p=a.onOutsideClick,q=a.onPressEntry,r=a.onRemoveEntry,s=a.onUpArrow,t=a.viewRole,u=a.selectedEntries;a=babelHelpers.objectWithoutPropertiesLoose(a,["extraLayoutProps","helperText","label","onBackspace","onBlur","onChange","onDownArrow","onEnter","onEscape","onHighlightEntry","onOutsideClick","onPressEntry","onRemoveEntry","onUpArrow","viewRole","selectedEntries"]);var v=b("useCometInternalTypeaheadFetch")();v=v.isLoading;var w=b("useCometInternalTypeaheadState")(),x=w.activeEntries;w=w.highlightedEntry;var y=b("useCometInternalTypeaheadStateDispatcher")(),z=y.dispatchIsOpened;h.useEffect(function(){z(!0)},[z]);y=b("useCometTypeaheadInputRefs")(c);c=y.composedRef;y=y.inputRef;y=b("useCometTokenizerInternalLayoutInlineStrategyHandlers")({inputRef:y,onBackspace:i,onBlur:j,onChange:k,onDownArrow:l,onEnter:m,onEscape:n,onHighlightEntry:o,onOutsideClick:p,onPressEntry:q,onRemoveEntry:r,onUpArrow:s,selectedEntries:u});i=b("useCometTypeaheadLayoutContextualStrategyARIAProps")({activeEntries:x,helperText:f,highlightedEntry:w,inputLabel:g,isOpened:!0,viewRole:t});return h.jsx(b("MWChatTabTokenizerInternalLayoutInlineStrategy.react"),babelHelpers["extends"]({},a,y,{extraLayoutProps:{afterViewContent:e,ariaProps:i,beforeViewContent:d,helperTextComponent:f!=null?h.jsx(b("CometTypeaheadHelperText.react"),{text:f}):null,isLoading:v,isOpened:!0},label:g,ref:c,selectedEntries:u,viewRole:t}))}c=h.forwardRef(a);e.exports=c}),null);
__d("MWChatTabsTokenizerLayoutInlineStrategy.react",["fbt","MWChatTabTokenizerBaseLayoutInlineStrategy.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";f.createMWChatTabsTokenizerLayoutInlineStrategy=a;var h,i,j=h||b("react"),k={layout:{position:"l9j0dhe7",width:"jbcpqwzg"},offsetView:{height:"btdsrvhy",maxHeight:"f7dnaohx","@media (min-height: 1280px)":{height:"pv6a5gh5"}},root:{display:"j83agx80"},to:{color:"oo9gr5id",fontSize:"jq4qci2q",fontWeight:"knj5qynh",lineHeight:"a3bd9o3v",marginStart:"dhix69tm",marginTop:"aov4n071",zIndex:"s90hwng2"},typeaheadInput:{backgroundColor:"nred35xi",boxSizing:"rq0escxv",display:"a8c37x1j",paddingEnd:"dflh9lhu",paddingStart:"scb9dxdr"},view:{backgroundColor:"nred35xi",borderTop:"opwvks06",height:"mbhqdu15",maxHeight:"oxtv4ib6",position:"pmk7jnqg",start:"feeahcbg",top:"i42f9fw1",width:"jbcpqwzg","@media (min-height: 1280px)":{height:"h4lgqe89"}}};function a(a){a===void 0&&(a=!1);function c(c,d){var e=c.xstyles;e=e===void 0?{}:e;var f=e.viewXStyle_DO_NOT_USE;e=babelHelpers.objectWithoutPropertiesLoose(c,["xstyles"]);c=j.useMemo(function(){var b;return{inputXStyle:[k.typeaheadInput],layoutXStyle:[k.layout],viewXStyle_DO_NOT_USE:[k.view,f,(b=a)!=null?b:k.offsetView]}},[f]);return j.jsxs("div",{className:(i||(i=b("stylex")))(k.root),children:[j.jsx("div",{className:i(k.to),children:g._("\u0110\u1ebfn:")}),j.jsx(b("MWChatTabTokenizerBaseLayoutInlineStrategy.react"),babelHelpers["extends"]({},e,{contextualProps:{align:"start",disableAutoFlip:!0},label:g._("T\u00ecm ki\u1ebfm theo t\u00ean ho\u1eb7c nh\u00f3m"),layerContext:"root",ref:d,xstyles:c}))]})}return j.forwardRef(c)}}),null);
__d("UseMWLightSpeedChatSearchSuggestedContacts.bs",["useMWLightSpeedChatSearchSuggestedContacts"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("useMWLightSpeedChatSearchSuggestedContacts")()}f.useHook=a}),null);
__d("VideoChatLinksLoggingSurface",[],(function(a,b,c,d,e,f){a=Object.freeze({IMESSAGE_EXTENSION_LOGIN:"imessage_extension_login",IMESSAGE_EXTENSION_MAIN:"imessage_extension_main",IMESSAGE_EXTENSION_FALLBACK:"imessage_extension_fallback",IMESSAGE_THREAD:"imessage_thread",IMESSAGE_TRAY:"imessage_tray",LINKS_LIST:"messenger_links_list",CALL_TAB:"messenger_calls_tab",MESSENGER_GUEST_REMOVAL_SHEET_SURFACE:"messenger_guest_removal_sheet",MESSENGER_LINK_SHARE_SHEET:"messenger_link_share_sheet",MESSENGER_REVOKE_CONFIRMATION:"revoke_confirmation",MESSENGER_SCRIM:"messenger_scrim",MESSENGER_SHARE_CONFIRMATION:"share_confirmation",MESSENGER_THREAD:"messenger_thread",MESSENGER_THREAD_DETAIL:"messenger_thread_detail",MESSENGER_THREAD_DETAIL_LINK_MANAGEMENT:"messenger_thread_detail_link_management",MESSENGER_SINGLE_GUEST_REMOVAL_CONFIRMATION_SURFACE:"messenger_single_guest_removal_confirmation",MESSENGER_ALL_GUEST_REMOVAL_CONFIRMATION_SURFACE:"messenger_all_guests_removal_confirmation",VCL_HOME_SCRIM:"vcl_home_scrim",VCL_MEETUPS_SCRIM:"vcl_meetups_scrim",VCL_MEETUPS_SHARE_FRAGMENT:"vcl_meetups_share_fragment",CALL_CONTROLS_DRAWER:"call_controls_vcl_drawer",CALL_CONTROLS_MEETUPS_DRAWER:"call_controls_meetups_drawer",PEOPLE_TAB:"people_tab",COMPOSER:"composer",INBOX:"inbox",LOBBY:"messenger_lobby",QP_INTENT:"qp_intent",VCL_MEETUPS_NOTIFICATION:"vcl_meetups_notification",SMS_THREAD:"sms_thread",MESSENGER_DOT_COM:"messenger_dot_com",M_DOT_ME:"m_dot_me",FACEBOOK_DOT_COM:"facebook_dot_com",MSNGR_DOT_COM:"msngr_dot_com",ACTIVE_NOW_TAB:"active_now_tab",INBOX_UNIT:"inbox_unit",LOBBY_AUTO_JOIN:"lobby_auto_join",DEEPLINK:"deeplink",WHATSAPP:"whatsapp",INBOX_TRAY:"inbox_tray",ROOMS_MANAGEMENT_SHEET:"room_management_sheet",ROOMS_CREATION_SHEET:"room_creation_sheet",IN_THREAD_XMA:"xma",MEETUP_JOIN_INTENT:"meetup_join_intent",MEETUP_THIRD_PARTY_INTENT:"meetup_third_party_intent",ROSTER_SHEET_DRAWER:"roster_sheet_drawer",JOIN_REQUESTS_DRAWER:"join_requests_drawer",PROFILE_DETAIL_VIEW:"profile_detail_view",MAIN_ACTIVITY_ACCOUNT_SWITCH:"main_activity_account_switch",JOINABLE_VIDEO_CHATS:"joinable_video_chats",THREAD_BANNER:"thread_banner",INBOX_ROOM_JOIN_BUTTON:"inbox_room_join_button",THREAD_VIEW_JOIN_BUTTON:"thread_view_join_button",ACTIVE_CONTACT_ROOM_JOIN_BUTTON:"active_contact_room_join_button",ROOM_JOIN_BUTTON_OTHER:"room_join_button_other",FB_AUDIO_REDIRECT:"fb_audio_redirect",FBAUD_IO_REDIRECT:"fbaud_io_redirect",MDOTME_REDIRECT:"mdotme_redirect",MDOTME_IAB_REDIRECT:"mdotme_iab_redirect",MESSENGER_DOT_COM_V_REDIRECT:"messenger_dot_com_v_redirect",WKDOTPL_REDIRECT:"wkdotpl_redirect",MSNGR_SHORT_REDIRECT:"msngr_short_redirect",MESSENGER_INBOX:"messenger_inbox",MESSENGER_INBOX_ON_COMET:"messenger_inbox_on_comet",FB_CHAT_SIDE_BAR:"fb_chat_side_bar",FB_MESSENGER_JEWEL:"fb_messenger_jewel",FB_TRAY:"fb_tray",WWW_BLACKLISTED_DOMAIN:"blacklisted_domain_landing_page",WWW_LANDING_PAGE:"www_landing_page",WWW_INCALL:"www_incall",WWW_INTERSTITIAL:"www_interstitial",WWW_WAITING_LOBBY:"www_waiting_lobby",WWW_PERMISSION_LOBBY:"www_permission_lobby",WWW_PRECALL_LOBBY:"www_precall_lobby",WWW_PRECALL_OWNER_LOBBY:"www_precall_owner_lobby",WWW_INVALID_LINK:"www_invalid_link",WWW_LIVE_PRODUCER:"www_live_producer",WWW_LIVE_PRODUCER_V2:"www_live_producer_v2",WWW_MOBILE_APP_STORE_REDIRECT:"www_mobile_app_store_redirect",WWW_POSTCALL:"www_postcall",WWW_UNSUPPORTED_BROWSER:"www_unsupported_browser",WWW_OWNER_INTERSTITIAL:"www_owner_interstitial",WWW_OWNER_LOBBY:"www_owner_lobby",WWW_FACEBOOK_WINDOW:"www_facebook_window",WWW_WORKPLACE_WINDOW:"www_workplace_window",WWW_WORK_CHAT_COMPOSER:"www_work_chat_composer",WWW_ADD_PARTICIPANTS_DIALOG:"www_add_participants_dialog",WWW_GROUPCALL_CREATE:"www_groupcall_create",WWW_SOMETHINGS_WRONG_DIALOG:"www_somethings_wrong_dialog",WWW_NOTIFICATION:"www_notification",WWW_INVITE_FRIEND_DIALOG:"www_invite_friend_dialog",WWW_MEDIA_PERMISSION_ERROR:"www_media_permission_error",MESSENGER_DESKTOP_CLIENT:"archon_client",MESSENGER_DESKTOP_PARENT_WINDOW:"archon_parent_window",GENERAL_SERVER:"general_server",LIGHTSPEED_SERVER:"lightspeed_server",MCLASSIC_SERVER:"mclassic_server",IG_NATIVE_ROOM_SERVER:"ig_native_room_server",R2L_OPT_IN_DIALOG:"r2l_opt_in_dialog",R2L_WAITING_FOR_BROADCAST_DIALOG:"r2l_waiting_for_broadcast_dialog",R2L_LOBBY_INTERSTITIAL_DIALOG:"r2l_lobby_interstitial_dialog",R2L_LEARN_MORE_DIALOG:"r2l_learn_more_dialog",R2L_BROADCAST_LIVE_TO_FB_DIALOG:"r2l_broadcast_live_to_fb_dialog",R2L_READY_FOR_LIVE_DIALOG:"r2l_ready_for_live_dialog",R2L_START_LIVE_DIALOG:"r2l_start_live_dialog",R2L_END_LIVE_DIALOG:"r2l_end_live_dialog",R2L_LOBBY:"r2l_lobby",NPE_ROOM:"npe_room"});e.exports=a}),null);
__d("MWNewChatTabContainer.bs",["fbt","ix","BootloaderResource","CometMessengerCreateGroupDialog.entrypoint","CometPlaceholder.react","CometProgressRingIndeterminate.react","JSResource","LSDatabaseType.bs","LSThreadAttributionStore.bs","LsSystemFolder.bs","MDSText.react","MWChatBlurNewTab.bs","MWChatCloseNewTab.bs","MWChatConfirmTabCloseDialog.bs","MWChatFocusComposerContext.bs","MWChatFocusNewTab.bs","MWChatHasSearchTabContent.bs","MWChatHeaderNew.bs","MWChatLightSpeedSearchTypeahead.bs","MWChatOpenTabForGroup.bs","MWChatOpenTabForPage.bs","MWChatOpenTabForUser.bs","MWChatSearchClearSearchResults.bs","MWChatSyncEmojisDatabase.bs","MWChatTabContainerShared.bs","MWChatTabFocusHandler.bs","MWChatTabsTokenizerLayoutInlineStrategy.react","MWChatTokenizerTokenStrategy.react","MWLSDatabaseLazySync.bs","MWLSJewelLoadMoreThreads.bs","MessengerWebEntryPoint","TetraListCell.react","UseMWLightSpeedChatSearchSuggestedContacts.bs","VideoChatLinksLoggingSurface","bs_caml_option","bs_curry","fbicon","gkx","qex","react","stylex","useCometConfirmationDialog","useCometEntryPointDialog","useMWChatNewVideoChat","useMWChatSearchTypeaheadCallbacks"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=i||b("react"),l=b("CometMessengerCreateGroupDialog.entrypoint"),m=b("useCometEntryPointDialog");function a(a){return b("useMWChatNewVideoChat")()}var n=b("JSResource")("MWThreadPreview.bs").__setRef("MWNewChatTabContainer.bs");function o(a,c,d,e,f,g,h,i,j){j={tokens:a,openTabForUser:f,openTabForGroup:g,openTabForPage:h};c!==void 0&&(j.hasContent=b("bs_caml_option").valFromOption(c));d!==void 0&&(j.isTabFocused=b("bs_caml_option").valFromOption(d));e!==void 0&&(j.onBeforeOpenTabForGroup=b("bs_caml_option").valFromOption(e));i!==void 0&&(j.empty=b("bs_caml_option").valFromOption(i));return j}function p(a){return k.createElement(b("BootloaderResource").read(n).make,a)}e={reasonResource:n,makeProps:o,make:p};var q=b("JSResource")("MWLightSpeedChatTabContactsContainer.bs").__setRef("MWNewChatTabContainer.bs");function c(a,b,c){return{isSearchView:a,setTokens:b}}function r(a){return k.createElement(b("BootloaderResource").read(q).make,a)}c={reasonResource:q,makeProps:c,make:r};var s={container:{height:"datstx6m",display:"j83agx80",position:"l9j0dhe7",flexDirection:"cbu4d94t",overflowX:"ni8dbmo4",overflowY:"stjgntxs",isolation:"fbhpx0h9"},searchInput:{flexShrink:"pfnyh3mw",minHeight:"tgvbjcpo",position:"l9j0dhe7",zIndex:"tkr6xdv7",backgroundColor:"nred35xi",maxHeight:"nwf6jgls",boxShadow:"flhsghwj"},searchInputForContactsList:{borderBottom:"s1tcr66n",boxShadow:"mvk8q8v6"},searchView:{boxShadow:"mvk8q8v6"},spinner:{display:"j83agx80",alignItems:"bp9cbjyn",justifyContent:"taijpn5t",flexGrow:"buofh1pr"}},t=b("JSResource")("MWChatRHCSearchTypeahead.bs").__setRef("MWNewChatTabContainer.bs");function u(a,c,d,e){e={};a!==void 0&&(e.emptyEntries_DO_NOT_USE=b("bs_caml_option").valFromOption(a));c!==void 0&&(e.onEscape=b("bs_caml_option").valFromOption(c));d!==void 0&&(e.entryPoint=b("bs_caml_option").valFromOption(d));return e}function v(a){return k.createElement(b("BootloaderResource").read(t).make,a)}var w={reasonResource:t,makeProps:u,make:v};function d(a){var c=a.hasContent,d=a.isMultitab,e=a.isSearchView,f=a.isTabFocused,i=a.useSidebarChatStyles,n=a.searchInitialParticipant;a=d!==void 0?d:!1;d=i!==void 0?i:!1;b("MWChatSyncEmojisDatabase.bs").useMaybeLazySync(void 0);i=b("qex")._("1586110");i=i==null?{}:{fontSize:String(i)+"px"};var q=b("MWChatHasSearchTabContent.bs").useHook(void 0),t=b("MWChatSearchClearSearchResults.bs").useHook(void 0),w=b("MWChatCloseNewTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN),x=b("MWChatFocusNewTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN),y=b("MWChatBlurNewTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN),z=b("useCometConfirmationDialog")(),A=z[0];z=k.useState(function(){if(n!==void 0)return[b("bs_caml_option").valFromOption(n)];else return[]});var B=z[1];z=z[0];var C=k.useCallback(function(a){if(b("bs_curry")._1(q,void 0))return b("bs_curry")._3(A,b("MWChatConfirmTabCloseDialog.bs").content,function(a){b("bs_curry")._1(w,void 0);return b("bs_curry")._1(t,void 0)},function(a){});else{b("bs_curry")._1(w,void 0);return b("bs_curry")._1(t,void 0)}},[A,w,t,q]),D=b("LSThreadAttributionStore.bs").getSourceForNewThread(void 0),E=b("bs_curry")._3(b("MWChatOpenTabForUser.bs").useHook,void 0,D,b("MessengerWebEntryPoint").SEARCH),F=b("bs_curry")._3(b("MWChatOpenTabForPage.bs").useHook,void 0,D,b("MessengerWebEntryPoint").SEARCH),G=b("bs_curry")._3(b("MWChatOpenTabForGroup.bs").useHook,void 0,D,b("MessengerWebEntryPoint").SEARCH),H=b("bs_curry")._3(b("MWChatOpenTabForGroup.bs").useHook,void 0,D,b("MessengerWebEntryPoint").NEW_MESSAGE_BUTTON),I=H[0];H=m(l,function(a){});var J=H[0],K=function(a){return J({entryPointOfDialog:b("MessengerWebEntryPoint").NEW_MESSAGE_BUTTON,onCreateGroup:function(a){return I(a,!1)}},function(a){})};H=b("useMWChatNewVideoChat")();var L=H[0],M=b("MWLSDatabaseLazySync.bs").useSync(b("LSDatabaseType.bs").ranking);b("MWLSJewelLoadMoreThreads.bs").useTryInitialising0x0Snapshot(b("LsSystemFolder.bs").inbox);k.useEffect(function(){b("bs_curry")._1(M,void 0)},[M]);H=k.useState(function(){return!1});var N=H[1],O=b("useMWChatSearchTypeaheadCallbacks").useMWChatSearchTypeaheadCallbacks(B,F),P=k.useCallback(function(a){return b("bs_curry")._1(N,function(a){return!0})},[N]),Q=b("UseMWLightSpeedChatSearchSuggestedContacts.bs").useHook(void 0),R=k.useMemo(function(){return b("MWChatTabsTokenizerLayoutInlineStrategy.react").createMWChatTabsTokenizerLayoutInlineStrategy(!1)},[]),S=b("qex")._("2048334")===!0?!1:b("qex")._("19")===!0;return k.jsx("div",{className:(j||(j=b("stylex")))(b("MWChatTabContainerShared.bs").styles.chatTab,a?b("MWChatTabContainerShared.bs").styles.chatTabNoBottomRadius:!1,d?b("MWChatTabContainerShared.bs").styles.sidebarChatOverrides:!1,b("qex")._("1586109")===!0?b("MWChatTabContainerShared.bs").styles.chatTabThin:!1),style:i,children:k.jsx(b("MWChatFocusComposerContext.bs").provider,{children:k.jsx(b("MWChatTabFocusHandler.bs").make,{onEscape:function(a){return b("bs_curry")._1(C,void 0)},onFocus:function(a){return b("bs_curry")._1(x,void 0)},onBlur:function(a){if(f)return b("bs_curry")._1(y,void 0)},children:k.jsxs("div",{className:j(s.container),children:[k.jsx(b("MWChatHeaderNew.bs").make,{isTabFocused:f,closeChatTab:C,title:e?g._("T\u00ecm ki\u1ebfm tr\u00ean Messenger"):g._("Tin nh\u1eafn m\u1edbi")}),k.jsx("div",{className:j(s.searchInput,e?s.searchView:!1,b("gkx")("1526694")&&z.length===0?s.searchInputForContactsList:!1),children:e?k.jsx(v,u(Q,function(a){return b("bs_curry")._1(C,void 0)},D,void 0)):k.jsx(b("MWChatLightSpeedSearchTypeahead.bs").make,{isDisabled:H[0],onAddToken:O[1],onChangeTokens:O[0],onSearchAbandon:C,onSearchCompletion:function(a){},tokens:z,includeRecommendations:!1,tokenItemRenderer:b("MWChatTokenizerTokenStrategy.react"),layoutStategyRenderer:R})}),k.jsx(b("CometPlaceholder.react"),{children:e?null:k.jsx(p,o(z,c,f,P,E[0],G[0],F,b("bs_caml_option").some(k.jsxs(k.Fragment,{children:[S?k.jsx(b("TetraListCell.react"),{paddingHorizontal:4,body:k.jsx(b("MDSText.react"),{type:"headline4",children:g._("T\u1ea1o nh\u00f3m m\u1edbi")}),addOnPrimary:{color:"gray",size:36,disabled:void 0,shape:"circle",icon:b("fbicon")._(h("485091"),20),type:"contained-icon"},onPress:function(a){K(void 0);return b("bs_curry")._1(C,void 0)}}):null,S?k.jsx(b("TetraListCell.react"),{paddingHorizontal:4,body:k.jsx(b("MDSText.react"),{type:"headline4",children:g._("T\u1ea1o ph\u00f2ng h\u1ecdp m\u1eb7t m\u1edbi")}),addOnPrimary:{color:"gray",size:36,disabled:void 0,shape:"circle",icon:b("fbicon")._(h("1388374"),20),type:"contained-icon"},onPress:function(a){b("bs_curry")._2(L,b("VideoChatLinksLoggingSurface").COMPOSER,void 0);return b("bs_curry")._1(C,void 0)}}):null,k.jsx(r,{isSearchView:e,setTokens:B})]})),void 0)),fallback:b("gkx")("1526694")?k.jsx("div",{className:(j||(j=b("stylex")))(s.spinner),children:k.jsx(b("CometProgressRingIndeterminate.react"),{color:"disabled",size:24})}):null})]})})})},"local")}var x=b("MWChatTabContainerShared.bs").styles;d=d;f.cometMessengerCreateGroupDialogEntrypoint=l;f.useCometEntryPointDialog=m;f.useMWChatNewVideoChat=a;f.shareStyles=x;f.LazyMWThreadPreview=e;f.LazyMWChatTabContactsContainer=c;f.styles=s;f.LazyMWChatRHCSearchTypeahead=w;f.make=d}),null);
__d("MWChatSearchTypeahead.react",["BaseTokenizer.react","CometRelay","MWChatSearchInputStrategy.react","MWChatSearchIssueLightspeedQuery.re","MWChatSearchTypeaheadLightspeedDataSource","MWChatSearchTypeaheadViewStrategy.react","react","useBaseTokenizerDecorators","useCometTokenizerListTokenStrategy","useStable","withMWChatEscapeDecorator","withMWChatSearchTokenManagementDecorator"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.emptyEntries_DO_NOT_USE,d=a.excludedIDs,e=a.includeRecommendations,f=e===void 0?!0:e;e=a.isDisabled;var g=a.layoutStategyRenderer,i=a.onAddToken,j=a.onChangeTokens,k=a.onSearchAbandon,l=a.onSearchCompletion,m=a.tokenItemRenderer,n=a.tokens;a=a.xstyles;var o=h.useState(""),p=o[0];o=o[1];var q=b("CometRelay").useRelayEnvironment(),r=b("useStable")(function(){return new(b("MWChatSearchTypeaheadLightspeedDataSource"))({excludedIDs:d,includeRecommendations:f,lightspeedSupportedTypes:b("MWChatSearchIssueLightspeedQuery.re").allSupportedTypes,limit:7,relayEnvironment:q,source:b("MWChatSearchIssueLightspeedQuery.re").Surfaces.universal})});k=b("useBaseTokenizerDecorators")({escapeDecorator:{decorate:b("withMWChatEscapeDecorator"),params:{onSearchAbandon:k}},tokenManagementDecorator:{decorate:b("withMWChatSearchTokenManagementDecorator"),params:{dataSource:r}}});var s=h.useRef(null),t=s.current;h.useEffect(function(){t&&t.focus()},[t,n]);h.useEffect(function(){r.setTokens(n)},[r,n]);m=b("useCometTokenizerListTokenStrategy")({tokenItemRenderer:m});return h.jsx(b("BaseTokenizer.react"),{autoFocus:!0,dataSource:r,decorators:k,emptyEntries_DO_NOT_USE:c,inputStrategyRenderer:b("MWChatSearchInputStrategy.react"),isDisabled:e,layoutStrategyRenderer:g,onAddToken:i,onChange:o,onChangeTokens:j,onSearchCompletion:l,queryString:p,ref:s,testid:void 0,tokens:n,tokensStrategyRenderer:m,viewStrategyRenderer:b("MWChatSearchTypeaheadViewStrategy.react"),xstyles:a})}}),null);
__d("MWChatSearchTypeaheadContainer.react",["CometRelay","MWChatCanonicalGroupSearchQuery","MWChatSearchResultType","MWChatSearchTypeahead.react","MessengerWebEventsFalcoEvent","WorkplaceMSCreateThread","compactArray","react","useMWChatOpenTabForGroup","useMWChatOpenTabForPage","useMWChatOpenTabForUser"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.entryPoint,d=a.includeRecommendations,e=a.layoutStategyRenderer,f=a.onChangeIsFetching,g=a.onChangeTokens,i=a.onClosePreview,j=a.onOpenPreviewForGroup,k=a.onOpenPreviewForUser,l=a.onSearchAbandon,m=a.tokenItemRenderer,n=a.tokens,o=a.xstyles;a=babelHelpers.objectWithoutPropertiesLoose(a,["entryPoint","includeRecommendations","layoutStategyRenderer","onChangeIsFetching","onChangeTokens","onClosePreview","onOpenPreviewForGroup","onOpenPreviewForUser","onSearchAbandon","tokenItemRenderer","tokens","xstyles"]);var p=b("CometRelay").useRelayEnvironment(),q=h.useRef(null),r=h.useState(!1),s=r[0],t=r[1];r=b("useMWChatOpenTabForPage")("search",c);var u=b("useMWChatOpenTabForGroup")("search",c),v=u[0];u[1];u=b("useMWChatOpenTabForUser")("search",c);var w=u[0];u[1];var x=b("WorkplaceMSCreateThread").useHook("comet_create_group"),y=a.openTabForPage||r;c=h.useCallback(function(a){g(function(b){return a});q.current!=null&&q.current.unsubscribe();f(!1);switch(a.length){case 0:i();break;case 1:var c=a[0];c=c.getRawData();c=c.id;k(c);break;default:c=b("compactArray")(a.map(function(a){return a.getRawData().id}));f(!0);q.current=b("MWChatCanonicalGroupSearchQuery").fetchCanonicalGroupThreadId(p,c,{error:function(){f(!1)},next:function(a){f(!1),a!=null?j(a):i()}})}},[g,i,k,f,p,j]);u=h.useCallback(function(a){var c=a.getRawData(),d=c.id;c=c.resultType;switch(c){case b("MWChatSearchResultType").GROUP:b("MessengerWebEventsFalcoEvent").log(function(){return{event_name:"search_click_result",thread_fbid:d}});v(d);break;case b("MWChatSearchResultType").PAGE:b("MessengerWebEventsFalcoEvent").log(function(){return{event_name:"search_click_result",other_user_fbid:d}});y(d);break;case b("MWChatSearchResultType").USER:b("MessengerWebEventsFalcoEvent").log(function(){return{event_name:"search_click_result",other_user_fbid:d}});a.getIsInstagramAccount()&&w(d);break;default:return}},[v,y,w]);a=h.useCallback(function(){if(s)return;q.current!=null&&q.current.unsubscribe();if(n.length===1){var a=n[0];a=a.getRawData();a=a.id;w(a)}if(n.length>1){var c=b("compactArray")(n.map(function(a){return a.getRawData().id}));f(!0);q.current=b("MWChatCanonicalGroupSearchQuery").fetchCanonicalGroupThreadId(p,c,{error:function(){f(!1)},next:function(a){if(a!=null){v(a);return}x(c).then(function(a){v(a)})["catch"](function(){f(!1)})}})}t(!0)},[s,n,f,w,p,v,x]);h.useEffect(function(){return function(){q.current!=null&&q.current.unsubscribe()}},[]);return h.jsx(b("MWChatSearchTypeahead.react"),{includeRecommendations:d,isDisabled:s,layoutStategyRenderer:e,onAddToken:u,onChangeTokens:c,onSearchAbandon:l,onSearchCompletion:a,tokenItemRenderer:m,tokens:n,xstyles:o})}}),null);
__d("WorkMWChatHeaderNew.bs",["fbt","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react"),k={root:{position:"l9j0dhe7",display:"j83agx80",flexShrink:"pfnyh3mw",justifyContent:"i1fnvgqd",alignItems:"bp9cbjyn",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingTop:"cxgpxx05",paddingBottom:"sj5x9vvc",paddingStart:"tw6a2znq",paddingEnd:"d1544ag0",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",backgroundColor:"nred35xi",height:"k7cz35w2",zIndex:"kavbgo14"},title:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",whiteSpace:"g0qnabr5",textOverflow:"ltmttdrg",fontWeight:"ekzkrbhg",color:"oo9gr5id"}};function a(a){return j.jsx("div",{className:(i||(i=b("stylex")))(k.root),children:j.jsx("div",{className:i(k.title),children:g._("Tin nh\u1eafn m\u1edbi")})})}c=a;f.styles=k;f.make=c}),null);
__d("MWChatTabContainerNew.bs",["fbt","BootloaderResource","CometPlaceholder.react","CometProgressRingIndeterminate.react","CurrentUser","JSResource","LSThreadAttributionStore.bs","MWChatBlurNewTab.bs","MWChatCloseNewTab.bs","MWChatConfirmTabCloseDialog.bs","MWChatFocusComposerContext.bs","MWChatFocusNewTab.bs","MWChatHasSearchTabContent.bs","MWChatHeaderNew.bs","MWChatOpenTabForGroup.bs","MWChatOpenTabForPage.bs","MWChatOpenTabForUser.bs","MWChatSearchClearSearchResults.bs","MWChatSearchTypeaheadContainer.react","MWChatTabContainerShared.bs","MWChatTabFocusHandler.bs","MWChatTokenizerLayoutContextualStrategy.react","MWChatTokenizerTokenStrategy.react","MessengerWebEntryPoint","WorkMWChatHeaderNew.bs","bs_caml_option","bs_curry","gkx","qex","react","stylex","useCometConfirmationDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react"),k={container:{height:"datstx6m",display:"j83agx80",position:"l9j0dhe7",flexDirection:"cbu4d94t",overflowX:"ni8dbmo4",overflowY:"stjgntxs",isolation:"fbhpx0h9"},searchInput:{flexShrink:"pfnyh3mw",minHeight:"tgvbjcpo",zIndex:"tkr6xdv7",backgroundColor:"nred35xi",maxHeight:"nwf6jgls",boxShadow:"flhsghwj"},searchInputForContactsList:{borderBottom:"s1tcr66n",boxShadow:"mvk8q8v6"},searchView:{boxShadow:"mvk8q8v6"},spinner:{display:"j83agx80",alignItems:"bp9cbjyn",justifyContent:"taijpn5t",flexGrow:"buofh1pr"}},l=b("JSResource")("MWChatTabNew.bs").__setRef("MWChatTabContainerNew.bs");function m(a,c,d,e,f,g,h,i,j,k){k={previewThreadID:a,isTabFocused:c,isFetching:d,hasContent:e,tokens:f,openTabForUser:g,openTabForGroup:h,openTabForPage:i};j!==void 0&&(k.empty=b("bs_caml_option").valFromOption(j));return k}function n(a){return j.createElement(b("BootloaderResource").read(l).make,a)}c={reasonResource:l,makeProps:m,make:n};var o=b("JSResource")("WorkplaceChatTabNew.bs").__setRef("MWChatTabContainerNew.bs");function p(a,c,d,e,f,g){g={previewThreadID:a,isTabFocused:c,hasContent:e,tokens:f};d!==void 0&&(g.quickRepliesUI=b("bs_caml_option").valFromOption(d));return g}function q(a){return j.createElement(b("BootloaderResource").read(o).make,a)}d={reasonResource:o,makeProps:p,make:q};var r=b("JSResource")("MWChatTabContactsContainer.bs").__setRef("MWChatTabContainerNew.bs");function s(a,b,c,d){return{isSearchView:a,onOpenPreviewForUser:b,setTokens:c}}function t(a){return j.createElement(b("BootloaderResource").read(r).make,a)}e={reasonResource:r,makeProps:s,make:t};var u=b("JSResource")("WorkGalahadMWChatSearchTypeaheadContainer.bs").__setRef("MWChatTabContainerNew.bs");function v(a,b,c,d,e,f,g,h){return{tokens:a,onChangeTokens:b,onChangeIsFetching:c,onSearchAbandon:d,onClosePreview:e,onOpenPreviewForUser:f,onOpenPreviewForGroup:g}}function w(a){return j.createElement(b("BootloaderResource").read(u).make,a)}var x={reasonResource:u,makeProps:v,make:w},y=b("JSResource")("MWChatRHCSearchTypeahead.bs").__setRef("MWChatTabContainerNew.bs");function z(a,c,d,e){e={};a!==void 0&&(e.emptyEntries_DO_NOT_USE=b("bs_caml_option").valFromOption(a));c!==void 0&&(e.onEscape=b("bs_caml_option").valFromOption(c));d!==void 0&&(e.entryPoint=b("bs_caml_option").valFromOption(d));return e}function A(a){return j.createElement(b("BootloaderResource").read(y).make,a)}var B={reasonResource:y,makeProps:z,make:A};function a(a){var c=a.hasContent,d=a.isMultitab,e=a.isSearchView,f=a.isTabFocused,h=a.useSidebarChatStyles,l=a.searchInitialParticipant;a=d!==void 0?d:!1;d=h!==void 0?h:!1;var o=b("MWChatHasSearchTabContent.bs").useHook(void 0),r=b("MWChatSearchClearSearchResults.bs").useHook(void 0),u=b("MWChatCloseNewTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN),x=b("MWChatFocusNewTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN),y=b("MWChatBlurNewTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN);h=j.useState(function(){if(l!==void 0)return[b("bs_caml_option").valFromOption(l)];else return[]});var B=h[1],C=h[0];h=j.useState(function(){if(C.length!==1)return;var a=C[0];return{NAME:"User",VAL:a.getRawData().id}});var D=h[1];h=h[0];var E=function(a){b("bs_curry")._1(D,function(b){return{NAME:"User",VAL:a}});return b("bs_curry")._1(r,void 0)},F=j.useState(function(){return!1}),G=F[1],H=b("useCometConfirmationDialog")(),I=H[0],J=j.useCallback(function(a){if(b("bs_curry")._1(o,void 0))return b("bs_curry")._3(I,b("MWChatConfirmTabCloseDialog.bs").content,function(a){b("bs_curry")._1(u,void 0);return b("bs_curry")._1(r,void 0)},function(a){});else{b("bs_curry")._1(u,void 0);return b("bs_curry")._1(r,void 0)}},[I,u,r]);H=b("qex")._("1586110");H=H==null?{}:{fontSize:String(H)+"px"};var K=b("bs_curry")._3(b("MWChatOpenTabForUser.bs").useHook,void 0,void 0,b("MessengerWebEntryPoint").SEARCH),L=b("bs_curry")._3(b("MWChatOpenTabForPage.bs").useHook,void 0,void 0,b("MessengerWebEntryPoint").SEARCH),M=b("bs_curry")._3(b("MWChatOpenTabForGroup.bs").useHook,void 0,void 0,b("MessengerWebEntryPoint").SEARCH),N=j.useMemo(function(){return b("MWChatTokenizerLayoutContextualStrategy.react").createMWChatTokenizerLayoutContextualStrategy(!1,"root")},[]),O=b("LSThreadAttributionStore.bs").getSourceForNewThread(void 0),P=b("CurrentUser").isWorkUser();return j.jsx("div",{className:(i||(i=b("stylex")))(b("CurrentUser").isWorkUser()?b("MWChatTabContainerShared.bs").styles.workChatTab:b("MWChatTabContainerShared.bs").styles.chatTab,a?b("MWChatTabContainerShared.bs").styles.chatTabNoBottomRadius:!1,d?b("MWChatTabContainerShared.bs").styles.sidebarChatOverrides:!1,b("qex")._("1586109")===!0?b("MWChatTabContainerShared.bs").styles.chatTabThin:!1),style:H,children:j.jsx(b("MWChatFocusComposerContext.bs").provider,{children:j.jsx(b("MWChatTabFocusHandler.bs").make,{onEscape:function(a){return b("bs_curry")._1(J,void 0)},onFocus:function(a){return b("bs_curry")._1(x,void 0)},onBlur:function(a){if(f)return b("bs_curry")._1(y,void 0)},children:j.jsxs("div",{className:i(k.container),children:[b("CurrentUser").isWorkUser()?j.jsx(b("WorkMWChatHeaderNew.bs").make,{}):j.jsx(b("MWChatHeaderNew.bs").make,{isTabFocused:f,closeChatTab:J,title:e?g._("T\u00ecm ki\u1ebfm tr\u00ean Messenger"):g._("Tin nh\u1eafn m\u1edbi")}),j.jsx("div",{className:i(k.searchInput,e?k.searchView:!1,b("gkx")("1526694")&&C.length===0?k.searchInputForContactsList:!1),children:P?j.jsx(w,v(C,B,function(a){return b("bs_curry")._1(G,function(b){return a})},function(a){return b("bs_curry")._1(J,void 0)},function(a){return b("bs_curry")._1(D,function(a){})},E,function(a){b("bs_curry")._1(D,function(b){return{NAME:"Group",VAL:a}});return b("bs_curry")._1(r,void 0)},void 0)):e?j.jsx(A,z(void 0,function(a){return b("bs_curry")._1(J,void 0)},O,void 0)):j.jsx(b("MWChatSearchTypeaheadContainer.react"),{tokens:C,onChangeTokens:B,onChangeIsFetching:function(a){return b("bs_curry")._1(G,function(b){return a})},onSearchAbandon:function(a){return b("bs_curry")._1(J,void 0)},onClosePreview:function(a){return b("bs_curry")._1(D,function(a){})},onOpenPreviewForUser:E,onOpenPreviewForGroup:function(a){return b("bs_curry")._1(D,function(b){return{NAME:"Group",VAL:a}})},tokenItemRenderer:b("MWChatTokenizerTokenStrategy.react"),layoutStategyRenderer:N,entryPoint:O})}),j.jsx(b("CometPlaceholder.react"),{children:b("CurrentUser").isWorkUser()?j.jsx(q,p(h,f,void 0,c,C,void 0)):e?null:j.jsx(n,m(h,f,F[0],c,C,K[0],M[0],L,b("bs_caml_option").some(j.jsx(t,s(e,E,B,void 0))),void 0)),fallback:b("gkx")("1526694")?j.jsx("div",{className:(i||(i=b("stylex")))(k.spinner),children:j.jsx(b("CometProgressRingIndeterminate.react"),{color:"disabled",size:24})}):null})]})})})},"local")}var C=b("MWChatTabContainerShared.bs").styles;a=a;f.shareStyles=C;f.styles=k;f.LazyMWChatTabNew=c;f.LazyWorkplaceChatTabNew=d;f.LazyMWChatTabContactsContainer=e;f.LazyWorkGalahadMWChatSearchTypeaheadContainer=x;f.LazyMWChatRHCSearchTypeahead=B;f.make=a}),null);