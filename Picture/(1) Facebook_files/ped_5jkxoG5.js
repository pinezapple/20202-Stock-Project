if (self.CavalryLogger) { CavalryLogger.start_js(["Dtyn1xi"]); }

__d("PagesCometUnownedFeedContainerFeedQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3880224705429314",metadata:{},name:"PagesCometUnownedFeedContainerFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PagesCometUnownedSinglePageRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4460189054015287",metadata:{},name:"PagesCometUnownedSinglePageRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometTopChartsCityQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3803444283097040",metadata:{},name:"CometTopChartsCityQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildPagesUnownedSinglePageRoute.entrypoint",["JSResourceForInteraction","PagesCometUnownedSinglePageRootQuery$Parameters","WebPixelRatio","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f){"use strict";a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResourceForInteraction")("PagesCometUnownedSinglePageRoot.react").__setRef("buildPagesUnownedSinglePageRoute.entrypoint"),function(a){a=a.routeProps.pageID;a={parameters:b("PagesCometUnownedSinglePageRootQuery$Parameters"),variables:{pageID:a,scale:b("WebPixelRatio").get()}};return{singlePageRootQueryReference:a}});e.exports=a}),null);
__d("PagesCometUnownedRoot.entrypoint",["CometPageCardsContainerQuery$Parameters","JSResourceForInteraction","PagesCometUnownedFeedContainerFeedQuery$Parameters","WebPixelRatio","buildPagesUnownedSinglePageRoute.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildPagesUnownedSinglePageRoute.entrypoint")(b("JSResourceForInteraction")("PagesCometUnownedRoot.react").__setRef("PagesCometUnownedRoot.entrypoint"),function(a){a=a.routeProps;return{extraProps:{pageID:a.pageID},queries:{pageCardsContainerQueryReference:{parameters:b("CometPageCardsContainerQuery$Parameters"),variables:{location:"SECONDARY_COLUMN",pageID:a.pageID,scale:b("WebPixelRatio").get(),useDefaultActor:!1}},pageFeedQueryReference:{parameters:b("PagesCometUnownedFeedContainerFeedQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometSinglePageContentContainerFeedQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE_TIMELINE",feedbackSource:22,pageID:a.pageID,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"timeline",scale:b("WebPixelRatio").get(),useDefaultActor:!1}}}}});e.exports=a}),null);
__d("CometTopChartsCity.entrypoint",["CometTopChartsCityQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";a=new Date();var g=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1),h=new Date(a.getFullYear(),a.getMonth(),a.getDate()+2),i=new Date(a.getFullYear(),a.getMonth(),a.getDate()+7),j=new Date(a.getFullYear(),a.getMonth()+1,a.getDate());c={getPreloadProps:function(a){return{queries:{queryRef:{parameters:b("CometTopChartsCityQuery$Parameters"),variables:{args:{city_extended_info:!0,city_query:a.routeProps.id},pageId:a.routeProps.id,timestamp_day_after_next_day:Math.floor(h.getTime()/1e3),timestamp_next_day:Math.floor(g.getTime()/1e3),timestamp_next_month:Math.floor(j.getTime()/1e3),timestamp_next_week:Math.floor(i.getTime()/1e3)}}}}},root:b("JSResourceForInteraction")("CometTopChartsCity.react").__setRef("CometTopChartsCity.entrypoint")};e.exports=c}),null);