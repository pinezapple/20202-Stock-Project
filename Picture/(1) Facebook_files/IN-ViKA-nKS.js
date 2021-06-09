if (self.CavalryLogger) { CavalryLogger.start_js(["6O1byKc"]); }

__d("CometToastNotification_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometToastNotification_actor",selections:[{args:null,kind:"FragmentSpread",name:"CometNotificationsListItem_actor"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometToastNotification_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometToastNotification_notification",selections:[{args:[{kind:"Literal",name:"isToast",value:!0}],kind:"FragmentSpread",name:"CometNotificationsListItem_notification"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometNotificationSound",["Sound"],(function(a,b,c,d,e,f){"use strict";var g=5e3;b("Sound").init(["audio/mpeg"]);a=function(){function a(a){this.$2=0,this.$1=a}var c=a.prototype;c.play=function(a){var c=Date.now();if(c-this.$2<g||this.$1==null)return;this.$2=c;b("Sound").playOnlyIfImmediate(this.$1,a,!1)};return a}();e.exports=a}),null);
__d("CometToastNotification.react",["fbt","CometNotificationsListItem.react","CometNotificationsUpdateSeenStateMutation","CometRelay","CometToastCard.react","CometToastNotification_actor.graphql","CometToastNotification_notification.graphql","react","recoverableViolation","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j,k=j||b("react"),l=b("requireDeferred")("NotifBeeperDismissFalcoEvent").__setRef("CometToastNotification.react"),m="comet_toast",n="beeper",o="MAIN_SURFACE",p="MARK_SEEN";function a(a){var c,d=b("CometRelay").useRelayEnvironment(),e=b("CometRelay").useFragment(h!==void 0?h:h=b("CometToastNotification_actor.graphql"),a.actor),f=b("CometRelay").useFragment(i!==void 0?i:i=b("CometToastNotification_notification.graphql"),a.notification),j=f==null?void 0:f.id,q=f==null?void 0:f.seen_state,r=k.useCallback(function(){if(j==null||q!=="UNSEEN_AND_UNREAD")return;b("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation(d,{environment:o,input:{environment:o,is_comet:!0,last_notif_sync_time:0,notif_ids:[j],source:m,update_type:p}},{onError:function(a){b("recoverableViolation")("Mark as seen mutation failed with an error: ","Notifications",{error:a})},onSuccess:function(){}})},[j,d,q]);if(f==null){b("recoverableViolation")("Comet Toast should have non-null notification","Notifications");return null}var s=a.onCloseClick;a=g._("Th\u00f4ng b\u00e1o m\u1edbi");var t=e==null?void 0:e.id,u=f.notif_id;c=(c=f.body)==null?void 0:c.text;c=u==null||c==null?null:{id:u,text:c};return k.jsx(b("CometToastCard.react"),{accessibilityAnnouncement:c,content:k.jsx(b("CometNotificationsListItem.react"),{actor:e,loggerContext:n,notification:f,onClick:s}),headline:a,onCloseClick:function(){s(),u!=null&&t!=null&&l.onReady(function(a){a=a.log;return a(function(){return{notification_data:{alert_id:u,logger_context:n,user_id:t},ref:"www_tab"}})})},onMouseEnter:r})}}),null);