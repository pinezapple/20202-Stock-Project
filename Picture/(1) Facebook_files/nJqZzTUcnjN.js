if (self.CavalryLogger) { CavalryLogger.start_js(["im+L1o8"]); }

__d("MarketplaceEcommCartAddProductMutation.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"formatted_amount",storageKey:null},e=[d],f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g=[f],h={alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:g,storageKey:null},i=[{kind:"Literal",name:"first",value:50}],j={alias:null,args:null,kind:"ScalarField",name:"valid_for_checkout",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"quantity",storageKey:null},l={alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"listing_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"amount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"currency",storageKey:null}],storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"can_checkout",storageKey:null},n=[{kind:"Literal",name:"callsite",value:"COMET_CART"}],o={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={kind:"Variable",name:"scale",variableName:"scale"},s=[{kind:"Literal",name:"height",value:40},r,{kind:"Literal",name:"width",value:40}],t=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],u={alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MarketplaceEcommCartAddProductMutation",selections:[{alias:null,args:c,concreteType:"MarketplaceEcommerceCartAddProductResponsePayload",kind:"LinkedField",name:"marketplace_ecommerce_cart_add_product",plural:!1,selections:[{alias:null,args:null,concreteType:"MarketplaceEcommCart",kind:"LinkedField",name:"cart",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometMarketplaceCartCheckoutSection_ecommCart"},{args:null,kind:"FragmentSpread",name:"CometMarketplaceCartItemsSection_ecommCart"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MarketplaceEcommCartAddProductMutation",selections:[{alias:null,args:c,concreteType:"MarketplaceEcommerceCartAddProductResponsePayload",kind:"LinkedField",name:"marketplace_ecommerce_cart_add_product",plural:!1,selections:[{alias:null,args:null,concreteType:"MarketplaceEcommCart",kind:"LinkedField",name:"cart",plural:!1,selections:[{alias:"shops_item_count",args:null,kind:"ScalarField",name:"item_count",storageKey:null},{alias:"shops_cart_subtotal",args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"cart_subtotal",plural:!1,selections:e,storageKey:null},f,{alias:null,args:null,kind:"ScalarField",name:"is_mixed_prod_and_sandbox_cart",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_multiple_shipping_profiles_enabled",storageKey:null},{alias:"shops_cart_merchants",args:null,concreteType:"MarketplaceEcommCartMerchant",kind:"LinkedField",name:"cart_merchants",plural:!0,selections:[h,{alias:null,args:i,concreteType:"MarketplaceEcommCartMerchantProductItemsConnection",kind:"LinkedField",name:"product_items",plural:!1,selections:[{alias:null,args:null,concreteType:"MarketplaceEcommCartMerchantProductItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[j,k,{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"node",plural:!1,selections:[f,l],storageKey:null}],storageKey:null}],storageKey:"product_items(first:50)"},m],storageKey:null},{alias:"data",args:n,concreteType:"CommerceIntegrityBuyerStatus",kind:"LinkedField",name:"buyer_integrity_status",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_style",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],storageKey:null},{alias:null,args:null,concreteType:"CommerceIntegrityBuyerStatusCTA",kind:"LinkedField",name:"cta",plural:!1,selections:[o,{alias:null,args:null,kind:"ScalarField",name:"action",storageKey:null},p],storageKey:null}],storageKey:'buyer_integrity_status(callsite:"COMET_CART")'},{alias:null,args:n,concreteType:"CommerceIntegrityBuyerStatus",kind:"LinkedField",name:"buyer_integrity_status",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"checkout_disabled",storageKey:null}],storageKey:'buyer_integrity_status(callsite:"COMET_CART")'},{alias:null,args:null,concreteType:"MarketplaceEcommCartMerchant",kind:"LinkedField",name:"cart_merchants",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"seller",plural:!1,selections:[q,f,{kind:"InlineFragment",selections:[{alias:"url",args:null,kind:"ScalarField",name:"marketplace_profile_share_uri",storageKey:null},{alias:"profile_picture",args:s,concreteType:"Image",kind:"LinkedField",name:"commerce_profile_picture_with_fallback",plural:!1,selections:t,storageKey:null},u,{alias:"full_name",args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:s,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:t,storageKey:null},p,u,{alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mini_shop_uri",storageKey:null},{alias:null,args:null,concreteType:"CommerceMerchantSettings",kind:"LinkedField",name:"preferred_merchant_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_free_shipping",storageKey:null},{alias:null,args:null,concreteType:"FixedCostShippingProfile",kind:"LinkedField",name:"universal_shipping_profile",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1},{kind:"Literal",name:"orderby",value:["cost"]}],concreteType:"FixedCostShippingProfileToShippingOptionsConnection",kind:"LinkedField",name:"fixed_cost_shipping_options",plural:!1,selections:[{alias:null,args:null,concreteType:"FixedCostShippingOption",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"cost",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"cart_minimum_for_free_shipping",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"amount_with_offset",storageKey:null},d],storageKey:null},f],storageKey:null}],storageKey:'fixed_cost_shipping_options(first:1,orderby:["cost"])'},f],storageKey:null},f],storageKey:null}],type:"Page",abstractKey:null}],storageKey:null},m,{alias:null,args:null,kind:"ScalarField",name:"item_count",storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"cart_merchant_subtotal",plural:!1,selections:e,storageKey:null},h,{alias:null,args:i,concreteType:"MarketplaceEcommCartMerchantProductItemsConnection",kind:"LinkedField",name:"product_items",plural:!1,selections:[{alias:null,args:null,concreteType:"MarketplaceEcommCartMerchantProductItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[j,{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"node",plural:!1,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"quantity_in_marketplace_ecommerce_cart",storageKey:null},l,{alias:null,args:[{kind:"Literal",name:"sales_channel",value:"FACEBOOK"}],concreteType:"ProductItemBuyerVisibleDiscountsConnection",kind:"LinkedField",name:"buyer_visible_discounts",plural:!1,selections:[{alias:null,args:null,concreteType:"ProductDiscount",kind:"LinkedField",name:"nodes",plural:!0,selections:g,storageKey:null}],storageKey:'buyer_visible_discounts(sales_channel:"FACEBOOK")'},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[q,{alias:null,args:[{kind:"Literal",name:"height",value:132},r,{kind:"Literal",name:"sizing",value:"contain-fit"},{kind:"Literal",name:"width",value:132}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:t,storageKey:null},f],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"commerce_dynamic_inventory",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"commerce_inventory",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"commerce_in_stock",storageKey:null},{alias:"current_listing_price",args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"listing_price",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"CatalogItemUnitPrice",kind:"LinkedField",name:"per_unit_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"strikethrough_price",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"ProductVariantAttributeInformation",kind:"LinkedField",name:"variant_attribute_information",plural:!0,selections:[o,{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:null}],storageKey:null},k],storageKey:null}],storageKey:"product_items(first:50)"},{alias:null,args:null,kind:"ScalarField",name:"is_c2c_merchant",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"checkout_info_message",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"5395431900527537",metadata:{},name:"MarketplaceEcommCartAddProductMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMarketplacePDPC2CMessageButton_target.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMarketplacePDPC2CMessageButton_target",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actors",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"callsite",value:"COMET_PDP"}],concreteType:"CommerceIntegrityBuyerStatus",kind:"LinkedField",name:"commerce_integrity_buyer_status",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"checkout_disabled",storageKey:null}],storageKey:'commerce_integrity_buyer_status(callsite:"COMET_PDP")'}],type:"MarketplaceListingWithBuyerIntegrityStatus",abstractKey:"__isMarketplaceListingWithBuyerIntegrityStatus"}],type:"MarketplaceListingRenderable",abstractKey:"__isMarketplaceListingRenderable"};e.exports=a}),null);
__d("CometMarketplacePDPShareButton_target.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMarketplacePDPShareButton_target",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_share",storageKey:null}],type:"MarketplaceListingWithIntegrityStatus",abstractKey:"__isMarketplaceListingWithIntegrityStatus"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometMarketplaceShareMenu_entity"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reportable_ent_id",storageKey:null}],type:"MarketplaceListingRenderable",abstractKey:"__isMarketplaceListingRenderable"};e.exports=a}),null);
__d("CometMarketplacePDPShareButton_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMarketplacePDPShareButton_viewer",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("MarketplacePDPMoreButton_target.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MarketplacePDPMoreButton_target",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"MessageThread",kind:"LinkedField",name:"seller_message_thread",plural:!1,selections:[a],storageKey:null}],type:"MarketplaceMessageable",abstractKey:"__isMarketplaceMessageable"},a,{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"marketplace_listing_seller",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reportable_ent_id",storageKey:null}],type:"MarketplaceListingRenderable",abstractKey:"__isMarketplaceListingRenderable"}}();e.exports=a}),null);
__d("MarketplaceEcommCartAddProductMutation.react",["CometRelay","MarketplaceEcommCartAddProductMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h=g!==void 0?g:g=b("MarketplaceEcommCartAddProductMutation.graphql");function a(a,c,d){return b("CometRelay").commitMutation(a,{mutation:h,onCompleted:d&&d.onCompleted,onError:d&&d.onError,variables:{input:c}})}}),null);
__d("ChexCheckoutSuccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743355");c=b("FalcoLoggerInternal").create("chex_checkout_success",a);e.exports=c}),null);
__d("useLogChexCheckoutSuccess",["ChexCheckoutSuccessFalcoEvent","react","useCurrentMarketplaceSurface"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(){var a=b("useCurrentMarketplaceSurface")(),c=a.referralSurface,d=a.surface;return h.useCallback(function(a,e,f){b("ChexCheckoutSuccessFalcoEvent").log(function(){return babelHelpers["extends"]({},f,{clienttime:Date.now(),otherUserID:a,productItemID:e,referralSurface:c,surface:d})})},[d,c])}}),null);
__d("CometMarketplaceAddToCartToast",["fbt","ix","BaseToasterStateManager","TetraIcon.react","deferredLoadComponent","fbicon","react","requireDeferred"],(function(a,b,c,d,e,f,g,h){"use strict";f.showSuccessToast=a;f.showErrorToast=c;var i,j=b("deferredLoadComponent")(b("requireDeferred")("MarketplaceAddToCartSuccessToast.react").__setRef("CometMarketplaceAddToCartToast")),k=b("deferredLoadComponent")(b("requireDeferred")("CometToast.react").__setRef("CometMarketplaceAddToCartToast")),l=i||(i=b("react")),m=b("BaseToasterStateManager").getInstance();function a(a,b,c,d,e,f,g,h){h!=null&&m["delete"](h);var i=m.push(l.jsx(j,{imageUri:a,onClose:function(){m["delete"](i)},productID:c,productName:b,quantity:d,referralCode:String(e),referralSurface:f,surface:g}),5e3);return i}function c(a,c){c!=null&&m["delete"](c);c=g._("{error-description}",[g._param("error-description",a)]);var d=m.push(l.jsx(k,{icon:l.jsx(b("TetraIcon.react"),{color:"warning",icon:b("fbicon")._(h("502062"),20)}),loadImmediately:!0,message:c,onDismiss:function(){m["delete"](d)},truncateText:!1}),5e3);return d}}),null);
__d("MarketplacePDPMediaViewerNullState.hybrid",["fbt","MarketplacePDPContext.hybrid","NullStateMedia","cjsr:1121735","cjsr:796208","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(){var a=b("MarketplacePDPContext.hybrid").usePDPContext();a=a.isPreview;return i.jsx("div",{className:"taijpn5t datstx6m buofh1pr cbu4d94t j83agx80 bp9cbjyn"+(a===!0?" b3i9ofy5":""),children:a===!0?i.jsx("div",{className:"nxkscmto",children:i.jsx(b("cjsr:796208"),{body:g._("Trong khi t\u1ea1o, b\u1ea1n c\u00f3 th\u1ec3 xem tr\u01b0\u1edbc \u0111\u1ec3 bi\u1ebft b\u00e0i ni\u00eam y\u1ebft s\u1ebd hi\u1ec3n th\u1ecb th\u1ebf n\u00e0o v\u1edbi m\u1ecdi ng\u01b0\u1eddi tr\u00ean Marketplace."),bodyColor:"secondary",headline:g._("Xem tr\u01b0\u1edbc b\u00e0i ni\u00eam y\u1ebft c\u1ee7a b\u1ea1n"),headlineColor:"secondary",level:1,textAlign:"center"})}):i.jsx(b("cjsr:1121735"),{headline:g._("Kh\u00f4ng c\u00f3 \u1ea3nh"),icon:b("NullStateMedia")})})}}),null);
__d("CometMarketplacePDPC2CMessageButton.client",["MarketplaceInboxSingleThreadDialog.entrypoint","MarketplaceMessageSellerDialog.entrypoint","TetraButton.react","gkx","react","useCometEntryPointDialog","useMessengerThreadURLDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=b("gkx")("1489406");function a(a){var c,d=b("useMessengerThreadURLDispatcher")(),e=a.existingThreadId,f=a.label;c=b("useCometEntryPointDialog")(b("MarketplaceInboxSingleThreadDialog.entrypoint"),{threadID:(c=e)!=null?c:""});var g=c[0];c=b("useCometEntryPointDialog")(b("MarketplaceMessageSellerDialog.entrypoint").MarketplaceMessageSellerDialogEntrypoint,{id:(c=a.id)!=null?c:""});var j=c[0];c=h.useCallback(function(){var b;return j({forSaleItemID:(b=a.id)!=null?b:"",sellerName:(b=a.sellerName)!=null?b:"",shouldUseB2CMutation:a.shouldUseB2CMutation,uiComponent:"contact_seller_button"})},[j,a.id,a.sellerName,a.shouldUseB2CMutation]);var k=h.useCallback(function(){if(e==null)return;if(!b("gkx")("708253")&&i){g({});return}e!=null&&d(e)},[e,d,g]);return h.jsx(b("TetraButton.react"),{disabled:a.disabled,label:f,onPress:e!=null?k:c,testid:void 0})}}),null);
__d("CometMiniShopPDPStickyCTAHeaderContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(!1);e.exports=c}),null);
__d("CometMarketplacePDPC2CMessageButton.hybrid",["CometMarketplacePDPC2CMessageButton_target.graphql","CometMiniShopPDPStickyCTAHeaderContext","MarketplacePDPContext.hybrid","RelayFlight.hybrid","cjsr:1855892","cjsr:815278","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=b("RelayFlight.hybrid").useFragment(g!==void 0?g:g=b("CometMarketplacePDPC2CMessageButton_target.graphql"),a.target),d=b("MarketplacePDPContext.hybrid").usePDPContext();d=d.isPreview;d=d===void 0?!1:d;var e=i.useContext(b("CometMiniShopPDPStickyCTAHeaderContext")),f=a.existingThreadId,h=a.label,j=a.shouldUseB2CMutation,k=c.id,l=c.story;l=l==null?void 0:(l=l.actors[0])==null?void 0:l.name;if(k==null)return null;c=((c=c.commerce_integrity_buyer_status)==null?void 0:c.checkout_disabled)===!0;var m=j===!0?"message_seller_button":"contact_seller_button";return i.jsx(b("cjsr:815278"),{component:m,logClick:!0,logImpression:!0,metadata:{extraData:JSON.stringify({is_sticky_cta:Boolean(e)}),productItemID:k,referralCode:a.referralCode},testid:void 0,children:i.jsx("div",{className:"k4urcfbm",children:i.jsx(b("cjsr:1855892"),{disabled:a.disabled===!0||d||c,existingThreadId:f,id:k,label:h,sellerName:l,shouldUseB2CMutation:j,testid:void 0})})})}}),null);
__d("CometMarketplacePDPShareButton.react",["fbt","ix","CometEntryPointPopoverTrigger.react","CometMarketplacePDPShareButton_target.graphql","CometMarketplacePDPShareButton_viewer.graphql","CometMarketplaceShareMenu.entrypoint","CometMarketplaceUIComponent.react","CometTooltip.react","MarketplacePDPContext.hybrid","RelayFlight.hybrid","TetraButton.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k,l=k||b("react");function a(a){var c=a.type,d=c===void 0?"secondary":c,e=babelHelpers.objectWithoutPropertiesLoose(a,["type"]);c=b("RelayFlight.hybrid").useFragment(i!==void 0?i:i=b("CometMarketplacePDPShareButton_target.graphql"),e.target);b("RelayFlight.hybrid").useFragment(j!==void 0?j:j=b("CometMarketplacePDPShareButton_viewer.graphql"),e.viewer);a=b("MarketplacePDPContext.hybrid").usePDPContext();var f=a.isPreview,k=f===void 0?!1:f,m=a.serverSessionID,n=a.trackingData;f=c.can_share;a=c.id;var o=c.is_viewer_seller,p=c.reportable_ent_id;c=c.story;return f!==!0||c==null?null:l.jsx(b("CometTooltip.react"),{position:"above",tooltip:g._("Chia s\u1ebb"),children:l.jsx(b("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{},otherProps:{entity:c,id:a,is_viewer_seller:o,onClose:function(){},reportableEntId:p,viewerPages:[]},popoverEntryPoint:b("CometMarketplaceShareMenu.entrypoint"),children:function(a,c){return l.jsx(b("CometMarketplaceUIComponent.react"),{component:"share_button",logClick:!0,logImpression:!0,metadata:{serverSessionID:m,tracking:n},children:l.jsx(b("TetraButton.react"),{disabled:k,icon:b("fbicon")._(h("484394"),16),label:g._("Chia s\u1ebb"),labelIsHidden:e.showLabel!==!0,onPress:c,reduceEmphasis:d==="primary",ref:a,testid:void 0,type:d})})}})})}}),null);
__d("MarketplacePDPMoreButton.react",["fbt","ix","CometLazyPopoverTrigger.react","CometMarketplaceUIComponent.react","CometRelay","JSResourceForInteraction","MarketplacePDPContext.hybrid","MarketplacePDPMoreButton_target.graphql","TetraButton.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||b("react"),l=b("JSResourceForInteraction")("CometMarketplaceMoreItemsMenu.react").__setRef("MarketplacePDPMoreButton.react");function a(a){var c,d,e=b("MarketplacePDPContext.hybrid").usePDPContext(),f=b("MarketplacePDPContext.hybrid").usePDPContext(),i=f.serverSessionID,j=f.trackingData;f=a.target;a=a.target;var m=a.id;a=a.reportable_ent_id;var n=f.is_viewer_seller===!0;if(m==null||a==null||n)return null;n=f.is_hidden===!0;c=(c=f.marketplace_listing_seller)==null?void 0:c.id;d=(d=f.marketplace_listing_seller)==null?void 0:d.__typename;d=d==="Page"||d==="User"?d:null;f=f.seller_message_thread!=null||d==="Page";var o=e.isPreview===!0;return k.jsx(b("CometLazyPopoverTrigger.react"),{align:"end",popoverProps:{canReportSeller:f,isHidden:n,listingId:m,onHide:e.dismissModal,reportableEntId:a,reportableSellerType:d,sellerId:c,trackingData:e.trackingData},popoverResource:l,children:function(a,c){return k.jsx(b("CometMarketplaceUIComponent.react"),{component:"more_action_button",logClick:!0,logImpression:!0,metadata:{serverSessionID:i,tracking:j},children:k.jsx(b("TetraButton.react"),{disabled:o,icon:b("fbicon")._(h("484389"),16),label:g._("T\u00f9y ch\u1ecdn m\u1eb7t h\u00e0ng kh\u00e1c"),labelIsHidden:!0,onPress:c,ref:a,testid:void 0,type:"secondary"})})}})}c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED(a,{target:i!==void 0?i:i=b("MarketplacePDPMoreButton_target.graphql")});e.exports=c}),null);
__d("MessengerBlurpleLogoSvg.bs",["react","useCometUniqueID"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=a.width;a=a.height;c=c!==void 0?c:"80";a=a!==void 0?a:"80";var d=b("useCometUniqueID")(),e=h.useMemo(function(){return h.cloneElement(h.jsx("path",{}),{fillRule:"evenodd",clipRule:"evenodd",d:"M40 .914C17.995.914.937 17.033.937 38.804c0 11.389 4.668 21.23 12.268 28.026a3.12 3.12 0 011.05 2.227l.212 6.95c.068 2.215 2.358 3.658 4.386 2.763l7.753-3.423a3.115 3.115 0 012.087-.153A42.602 42.602 0 0040 76.695c22.005 0 39.063-16.118 39.063-37.89C79.063 17.033 62.005.915 40 .915z",fill:"url(#"+(d+")"),suppressHydrationWarning:!0})},[d]),f=h.useMemo(function(){return h.cloneElement(h.jsx("radialGradient",{}),{id:d,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"rotate(-57.092 80.25 24.628) scale(85.1246)",suppressHydrationWarning:!0,children:h.jsxs(h.Fragment,{children:[h.jsx("stop",{stopColor:"#09F"}),h.jsx("stop",{offset:"0.61",stopColor:"#A033FF"}),h.jsx("stop",{offset:"0.935",stopColor:"#FF5280"}),h.jsx("stop",{offset:"1",stopColor:"#FF7061"})]})})},[d]);return h.jsxs("svg",{width:c,height:a,viewBox:" 0 0 80 80",fill:"none",children:[e,h.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.543 49.886L28.018 31.68a5.86 5.86 0 018.472-1.563l9.127 6.844a2.343 2.343 0 002.823-.008L60.765 27.6c1.645-1.248 3.793.72 2.692 2.467L51.982 48.272a5.86 5.86 0 01-8.472 1.563l-9.127-6.845a2.344 2.344 0 00-2.823.01l-12.325 9.354c-1.646 1.248-3.793-.72-2.692-2.467z",fill:"#fff"}),h.jsx("defs",{children:f})]})}c=a;f.make=c}),null);
__d("MessengerBlurpleLogoSvg.re",["MessengerBlurpleLogoSvg.bs"],(function(a,b,c,d,e,f){a=b("MessengerBlurpleLogoSvg.bs").make;f.make=a}),null);
__d("CometMediaViewerFilmstrip.react",["fbt","ix","CometBackgroundImage.react","CometImage.react","CometPressable.react","CometThrottle","Locale","TetraIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=i||b("react");c=36;d=6;var l=c+d*2,m={imageInner:{height:"datstx6m",objectFit:"r0294ipz",overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"k4urcfbm"},root:{alignItems:"bp9cbjyn",display:"j83agx80",height:"tv7at329",paddingTop:"cxgpxx05",paddingBottom:"sj5x9vvc",transitionDuration:"pc15xi3s",transitionProperty:"flx89l3n",transitionTimingFunction:"eloblzlw",whiteSpace:"g0qnabr5"},thumbnail:{cursor:"nhd2j8a9",height:"tv7at329",width:"thwo4zme"},thumbnailContainer:{borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",display:"q9uorilb",flexShrink:"pfnyh3mw",height:"tv7at329",marginEnd:"fv0vnmcu",marginStart:"ggphbty4",overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"thwo4zme"},thumbnailNonActive:{opacity:"ggwglk7f",":hover":{opacity:"oecfc0l4"}},videoIcon:{alignItems:"bp9cbjyn",display:"j83agx80",height:"bipmatt0",justifyContent:"taijpn5t",position:"pmk7jnqg",width:"iyyx5f41"}};function n(a){var c=a.image.mediaType!=="video"&&Boolean(a.image.isUseImageResizing)?{backgroundColor:a.image.backgroundColor}:{},d=a.image.mediaType!=="video"?a.image.uri:a.image.thumbnailUri;return k.jsx("div",{className:(j||(j=b("stylex")))(m.thumbnailContainer),children:k.jsx(b("CometPressable.react"),{display:"inline",label:g._("H\u00ecnh thu nh\u1ecf {index}",[g._param("index",a.index)]),onPress:a.onClick,overlayDisabled:!0,children:k.jsxs("div",{className:j(m.thumbnail,a.active!==!0&&m.thumbnailNonActive),style:c,children:[a.image.mediaType==="video"?k.jsx("div",{className:(j||(j=b("stylex")))(m.videoIcon),children:k.jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(h("507224"),12)})}):null,a.image.mediaType!=="video"&&Boolean(a.image.isUseImageResizing)?k.jsx(b("CometImage.react"),{src:d,xstyle:m.imageInner}):k.jsx(b("CometBackgroundImage.react"),{src:d})]})})})}function a(a){var c=k.useState(0),d=c[0],e=c[1],f=k.useRef(null),g=k.useRef(null),h=k.useRef(null);k.useEffect(function(){function c(){if(f.current!=null){var b=f.current,c=b.offsetWidth;b=b.scrollWidth;var g=h.current;if(b===c)return;b=-d/l;var i=Math.floor((c+-d)/l),j=b+Math.floor((i-b)/2);if(g!=null){if(a.activeIndex>g&&(a.activeIndex<j||i===a.images.length)){h.current=a.activeIndex;return}if(a.activeIndex<g&&(a.activeIndex>j||b===0)){h.current=a.activeIndex;return}}j=d-(a.activeIndex-((i=g)!=null?i:0))*l;j=Math.min(0,j);j=Math.max(Math.floor(c-a.images.length*l),j);h.current=a.activeIndex;e(j)}}c();g.current!=null&&window.removeEventListener("resize",g.current);c=b("CometThrottle")(c,100);g.current=c;window.addEventListener("resize",c);return function(){g.current!=null&&window.removeEventListener("resize",g.current)}},[a.images,a.activeIndex,d]);return a.images.length<2?null:k.jsx("div",{className:(j||(j=b("stylex")))(m.root),ref:f,style:{transform:"translate3d("+(b("Locale").isRTL()?-d:d)+"px, 0, 0)"},children:a.images.map(function(b,c){return k.jsx(n,{active:a.activeIndex===c,image:b,index:c,onClick:function(b){a.onSetImage(c)}},"thumbnail_"+c)})})}}),null);