(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34c347a8"],{"13b3":function(e,t,i){},"166a":function(e,t,i){},5914:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("core-section",{attrs:{id:"what-ive-done"}},[i("abstract-3"),i("core-heading",[e._v("What I've done")]),i("v-col",{attrs:{cols:"12"}},[i("v-carousel",{staticClass:"elevation-0",attrs:{cycle:!1,height:650,"show-arrows":!1,"hide-delimiter-background":""}},e._l(e.projects,(function(e,t){return i("v-carousel-item",{key:t},[i("project",{attrs:{value:e}})],1)})),1)],1)],1)},s=[],a=(i("d3b7"),i("3ca3"),i("ddb0"),{name:"WhatIveDone",components:{Abstract3:function(){return i.e("chunk-55b6ea69").then(i.bind(null,"ca96"))},Project:function(){return i.e("chunk-2d0abc5c").then(i.bind(null,"1766"))}},data:function(){return{projects:[{name:"Al sharq",category:"Arabic News Paper",src:"classic-cafe.png",description:"Al Sharq is an Arabic and pro-government daily newspaper published in Doha, Qatar. The paper is one of the three leading Arabic newspapers in the Qatar."},{name:"The Peninsula Qatar",category:"English News Paper",src:"classic-cafe.png",description:"The Peninsula, one of the leading English dailies in Qatar and Middle East. With over 65 million pageviews thepeninsula.qa (thepeninsulaqatar.com), we can proudly say, is the top news website in both English and Arabic in Qatar and Middle East. Last year we had over 8.5 million users visit our website and good majority of the visitors are from Qatar, making us a very hyper local website.."},{name:"Lusail News",category:"Arabic News Paper",src:"classic-cafe.png",description:"Successfully spearheaded the development of APIs and database infrastructure for the innovative Lusail News mobile application. Contributed to enhancing user engagement and facilitating seamless news delivery."},{name:"Alwaraq",category:"Printing Press",src:"classic-cafe.png",description:"Al Waraq Printing Press (AWPP) is the leading Printing Press of the region, comprising of Commercial Printing (offset, packaging, sheet), Digital Printing and Packaging Printing."},{name:"Top Solutions",category:"Interior Design",src:"flagship.jpg",description:"TOP Solutions is a leading manufacturer and provider of a full range of turnkey services in the interior design and exhibition stand industryHeadquartered in Dubai with 3 manufacturing facilities in Lebanon, Qatar and the UAE, TOP Solutions services clients across Asia, Europe and the Middle East. The Company's 70+ Team takes on intricate projects and specializes in high-end turnkey shop fitting and large scale exhibition stands. Its ongoing success stems out of a partnership approach with customers, leading to an in-depth understanding of a brand's needs and the delivery of superlative finishing on time and within budget."},{name:"Dar Al Sharq Group",category:"Corporate",src:"biere.jpg",description:"Dar Al Sharq Is The Largest Multi Activities Press Institution In Qatar, Leading The Media Landscape. It Publishes 4 Newspapers (Al-Sharq, Al-Arab, Peninsula, And Lusail), And Prints More Than 8 Local And International Newspapers. It Currently Consists Of A Group Of Media Companies That Provide Their Customers With Integrated And Specialized Services In Media, Advertising, And Public Relations."},{name:"Alsharq Technology",category:"Corporate",src:"biere.jpg",description:"Alsharq Technology is a Corporate site having WEB and CMS. It is build to showcase the Portfolio projects, Career section, mission vision, goals and values and upcomming projects."},{name:"Al mahbrah",category:"E-Commerce",src:"biere.jpg",description:"Al Mahbrah is a single vendor ecommerce, with QPay Integrated Payment Gateway. To order or print there custom designs, writings on diffrent products, like T-shirt, Mugs, Bags etc etc."},{name:"Billing CRM",category:"Billing",src:"biere.jpg",description:"Billing CRM is a B to C invoice system for Owner and Customer. Owner can Add Diffrent Product and create invoice with assciated client. Both can send and recieve inovice , tickets, and business contracts etc with payment options."},{name:"Eaqaqa",category:"Research And Innovation",src:"biere.jpg",description:"Eaqaqa is Qatar University Project for teachers and professors.Professors are to upload the there research , thesis, books, articles. also give access to uplaod a diffrent seminars and activites picture previsouly held in Unversity."},{name:"Tiollo",category:"Food And Restaurants",src:"biere.jpg",description:"Tiollo is a multivendor restaurants ecosystem. Through System end-user can order deliciues food and book a table easily."},{name:"Almass Water distrbution system",category:"Marketing and Graphic Design",src:"biere.jpg",description:"Al Mass water has the following modules,1. Online Web Application for Al mass water distribution system 2. SMS Gateway and Email integration for Alerts. 3. Coupon Management System. 4. Assign coupon Management System. 5. Role based User Management 6. Zone Management System. 7. Driver Management System. 8. Sales Man Management System. 9. Customer Management System. 10. Reporting Dashboard ."},{name:"Ajt Qatar Properties",category:"Real Estate",src:"biere.jpg",description:"Ajt Properties is a Websit which facilitate the local and expsts residence of Qatar to search , lease and rent the properties thorugh portal."},{name:"SSR Qatar",category:"Recruitement Agency",src:"biere.jpg",description:"SSR is a recruitment agency in Qatar. It is one of the fastest growing recruitment agencies in Qatar duly licensed and approved by the Ministry of Labor, Government of Qatar, managed by a team of highly experienced and motivated HR professionals.SSR provides recruiting services for the diffrent trades and industries. Like Information Technology, Human Resource, Engineering, Oil & Gas, Construction, Medical, HVAC, Household."},{name:"The Peninsula",category:"News",src:"biere.jpg",description:"The Peninsula, one of the leading English dailies in Qatar. The Peninsula has been successfully providing  extensive news coverage from around the world with a primary focus on life in Qatar."}]}}}),r=a,o=i("2877"),c=i("6544"),u=i.n(c),l=i("5530"),h=(i("a9e3"),i("63b7"),i("99af"),i("7db0"),i("c740"),i("13b3"),i("c3f0")),d=i("afdd"),f=i("9d26"),p=i("604c"),m=p["a"].extend({name:"v-window",directives:{Touch:h["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(l["a"])(Object(l["a"])({},p["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var e=this.vertical?"y":"x",t=this.internalReverse?!this.isReverse:this.isReverse,i=t?"-reverse":"";return"v-window-".concat(e).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(e){return!e.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var e=this;return this.items.findIndex((function(t,i){return e.internalValue===e.getValue(t,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(e,t){this.isReverse=this.updateReverse(e,t)}},mounted:function(){var e=this;window.requestAnimationFrame((function(){return e.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var e=[this.genDefaultSlot()];return this.showArrows&&e.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},e)},genIcon:function(e,t,i){var n,s,a,r=this,o={click:function(e){e.stopPropagation(),r.changedByDelimiters=!0,i()}},c={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(e))},u=null!=(n=null==(s=(a=this.$scopedSlots)[e])?void 0:s.call(a,{on:o,attrs:c}))?n:[this.$createElement(d["a"],{props:{icon:!0},attrs:c,on:o},[this.$createElement(f["a"],{props:{large:!0}},t)])];return this.$createElement("div",{staticClass:"v-window__".concat(e)},u)},genControlIcons:function(){var e=[],t=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&t&&"string"===typeof t){var i=this.genIcon("prev",t,this.prev);i&&e.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&e.push(s)}return e},getNextIndex:function(e){var t=(e+1)%this.items.length,i=this.items[t];return i.disabled?this.getNextIndex(t):t},getPrevIndex:function(e){var t=(e+this.items.length-1)%this.items.length,i=this.items[t];return i.disabled?this.getPrevIndex(t):t},next:function(){if(this.hasActiveItems&&this.hasNext){var e=this.getNextIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var e=this.getPrevIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)}},updateReverse:function(e,t){var i=this.items.length,n=i-1;return i<=2?e<t:e===n&&0===t||(0!==e||t!==n)&&e<t}},render:function(e){var t=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){t.$vuetify.rtl?t.prev():t.next()},right:function(){t.$vuetify.rtl?t.next():t.prev()},end:function(e){e.stopPropagation()},start:function(e){e.stopPropagation()}};i.directives.push({name:"touch",value:n})}return e("div",i,[this.genContainer()])}}),g=i("37c6"),v=p["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return p["a"].options.computed.classes.call(this)}},methods:{genData:p["a"].options.methods.genData}}),w=i("80d2"),y=i("d9bd"),b=m.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(e){return e>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(l["a"])(Object(l["a"])({},m.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(e,t){e!==t&&e&&(this.internalHeight=e)},cycle:function(e){e?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(y["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:m.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var e=this,t=this.items.length,i=[],n=0;n<t;n++){var s=this.$createElement(d["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(f["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(v,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(t){e.internalValue=t}}},i)},genProgress:function(){return this.$createElement(g["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(e){var t=m.options.render.call(this,e);return t.data.style="height: ".concat(Object(w["g"])(this.height),";"),this.hideDelimiters||t.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&t.children.push(this.genProgress()),t}}),A=i("9d65"),T=i("4e82c"),I=i("58df"),x=Object(I["a"])(A["a"],Object(T["a"])("windowGroup","v-window-item","v-window")),C=x.extend().extend().extend({name:"v-window-item",directives:{Touch:h["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(w["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(e){var t=this;this.inTransition&&this.$nextTick((function(){t.computedTransition&&t.inTransition&&(t.windowGroup.transitionHeight=Object(w["g"])(e.clientHeight))}))}},render:function(e){var t=this;return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[t.genWindowItem()]})))}}),S=i("adda"),j=i("1c87"),P=Object(I["a"])(C,j["a"]),V=P.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(S["a"],{staticClass:"v-carousel__item",props:Object(l["a"])(Object(l["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(w["n"])(this))]},genWindowItem:function(){var e=this.generateRouteLink(),t=e.tag,i=e.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(t,i,this.genDefaultSlot())}}}),B=i("62ad"),M=Object(o["a"])(r,n,s,!1,null,null,null);t["default"]=M.exports;u()(M,{VCarousel:b,VCarouselItem:V,VCol:B["a"]})},"604c":function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var n=i("5530"),s=(i("a9e3"),i("4de4"),i("d3b7"),i("a434"),i("159b"),i("fb6a"),i("7db0"),i("c740"),i("166a"),i("2b0e")),a=i("80d2"),r=s["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["j"]}}}),o=i("a452"),c=i("7560"),u=i("58df"),l=i("d9bd"),h=Object(u["a"])(r,o["a"],c["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var e=this;return this.items.filter((function(t,i){return e.toggleMethod(e.getValue(t,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var e=this;if(!this.multiple)return function(t){return e.valueComparator(e.internalValue,t)};var t=this.internalValue;return Array.isArray(t)?function(i){return t.some((function(t){return e.valueComparator(t,i)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(l["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(e,t){return void 0===e.value?t:e.value},onClick:function(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register:function(e){var t=this,i=this.items.push(e)-1;e.$on("change",(function(){return t.onClick(e)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,i)},unregister:function(e){if(!this._isDestroyed){var t=this.items.indexOf(e),i=this.getValue(e,t);this.items.splice(t,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(e){return e!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(e,t){var i=this.getValue(e,t);e.isActive=this.toggleMethod(i)},updateItemsState:function(){var e=this;this.$nextTick((function(){if(e.mandatory&&!e.selectedItems.length)return e.updateMandatory();e.items.forEach(e.updateItem)}))},updateInternalValue:function(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory:function(e){if(this.items.length){var t=this.items.slice();e&&t.reverse();var i=t.find((function(e){return!e.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(e){var t=Array.isArray(this.internalValue)?this.internalValue:[],i=t.slice(),n=i.findIndex((function(t){return t===e}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(e),this.internalValue=i)},updateSingle:function(e){var t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render:function(e){return e(this.tag,this.genData(),this.$slots.default)}});h.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"63b7":function(e,t,i){},"9d65":function(e,t,i){"use strict";var n=i("d9bd"),s=i("2b0e");t["a"]=s["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(n["e"])("lazy",this)},methods:{showLazyContent:function(e){return this.hasContent&&e?e():[this.$createElement()]}}})},a434:function(e,t,i){"use strict";var n=i("23e7"),s=i("da84"),a=i("23cb"),r=i("5926"),o=i("07fa"),c=i("7b0b"),u=i("65f0"),l=i("8418"),h=i("1dde"),d=h("splice"),f=s.TypeError,p=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var i,n,s,h,d,w,y=c(this),b=o(y),A=a(e,b),T=arguments.length;if(0===T?i=n=0:1===T?(i=0,n=b-A):(i=T-2,n=m(p(r(t),0),b-A)),b+i-n>g)throw f(v);for(s=u(y,n),h=0;h<n;h++)d=A+h,d in y&&l(s,h,y[d]);if(s.length=n,i<n){for(h=A;h<b-n;h++)d=h+n,w=h+i,d in y?y[w]=y[d]:delete y[w];for(h=b;h>b-n+i;h--)delete y[h-1]}else if(i>n)for(h=b-n;h>A;h--)d=h+n-1,w=h+i-1,d in y?y[w]=y[d]:delete y[w];for(h=0;h<i;h++)y[h+A]=arguments[h+2];return y.length=b-n+i,s}})},afdd:function(e,t,i){"use strict";var n=i("8336");t["a"]=n["a"]},c3f0:function(e,t,i){"use strict";i("d3b7"),i("159b");var n=i("80d2"),s=function(e){var t=e.touchstartX,i=e.touchendX,n=e.touchstartY,s=e.touchendY,a=.5,r=16;e.offsetX=i-t,e.offsetY=s-n,Math.abs(e.offsetY)<a*Math.abs(e.offsetX)&&(e.left&&i<t-r&&e.left(e),e.right&&i>t+r&&e.right(e)),Math.abs(e.offsetX)<a*Math.abs(e.offsetY)&&(e.up&&s<n-r&&e.up(e),e.down&&s>n+r&&e.down(e))};function a(e,t){var i=e.changedTouches[0];t.touchstartX=i.clientX,t.touchstartY=i.clientY,t.start&&t.start(Object.assign(e,t))}function r(e,t){var i=e.changedTouches[0];t.touchendX=i.clientX,t.touchendY=i.clientY,t.end&&t.end(Object.assign(e,t)),s(t)}function o(e,t){var i=e.changedTouches[0];t.touchmoveX=i.clientX,t.touchmoveY=i.clientY,t.move&&t.move(Object.assign(e,t))}function c(e){var t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:function(e){return a(e,t)},touchend:function(e){return r(e,t)},touchmove:function(e){return o(e,t)}}}function u(e,t,i){var s=t.value,a=s.parent?e.parentElement:e,r=s.options||{passive:!0};if(a){var o=c(t.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=o,Object(n["r"])(o).forEach((function(e){a.addEventListener(e,o[e],r)}))}}function l(e,t,i){var s=t.value.parent?e.parentElement:e;if(s&&s._touchHandlers){var a=s._touchHandlers[i.context._uid];Object(n["r"])(a).forEach((function(e){s.removeEventListener(e,a[e])})),delete s._touchHandlers[i.context._uid]}}var h={inserted:u,unbind:l};t["a"]=h},c740:function(e,t,i){"use strict";var n=i("23e7"),s=i("b727").findIndex,a=i("44d2"),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),a(r)}}]);
//# sourceMappingURL=chunk-34c347a8.cce823a5.js.map