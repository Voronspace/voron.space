(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{294:function(t,e,o){var content=o(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("8d8f06c0",content,!0,{sourceMap:!1})},296:function(t,e,o){"use strict";o.r(e);var r={props:{car:{required:!0,type:Object},carousel:{type:Boolean,default:!1}},data:function(){return{}}},c=(o(299),o(32)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"carousel-agile"},[o("div",{class:["carsList-itemImage",[t.carousel&&t.car.photos.length>1?"opacity-0":""]],style:"background-image: url('https://img.voron.io/"+t.car.side_img+"')"}),t._v(" "),t.carousel&&t.car.photos.length>1?o("client-only",{attrs:{placeholder:"Loading..."}},[o("agile",{attrs:{options:{autoplay:!0,dots:!1,navButtons:!0,slidesToShow:1,responsive:[{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:1e3,settings:{slidesToShow:5}}]}}},[t._l(t.car.photos,(function(e,r){return o("div",{key:r,staticClass:"slide"},[o("img",{attrs:{src:"https://img.voron.io/gallery/"+t.car.tid+"/"+e+"@3x.jpg",alt:""}})])})),t._v(" "),o("template",{slot:"prevButton"},[o("i",{staticClass:"fal fa-angle-left"})]),t._v(" "),o("template",{slot:"nextButton"},[o("i",{staticClass:"fal fa-angle-right"})])],2)],1):t._e(),t._v(" "),o("div",{staticClass:"carsList-itemIcons"},[0!=t.car.seats?o("div",{staticClass:"block-icon-auto"},[o("div",{staticClass:"icon-auto"},[2!=t.car.seats?o("i",{staticClass:"fal fa-users"}):t._e(),t._v(" "),2==t.car.seats?o("i",{staticClass:"fal fa-user-friends"}):t._e()]),t._v(" "),o("span",[t._v(t._s(t._f("declOfNum")(t.car.seats,["место","места","мест"],!0)))])]):t._e(),t._v(" "),0!=t.car.horsepower?o("div",{staticClass:"block-icon-auto"},[t._m(0),t._v(" "),o("span",[t._v(t._s(t.car.horsepower)+" л.с.")])]):t._e(),t._v(" "),o("div",{staticClass:"block-icon-auto"},[t._m(1),t._v(" "),o("span",[t._v(t._s(t.car.fuelType))])]),t._v(" "),o("div",{staticClass:"block-icon-auto"},[o("div",{staticClass:"icon-auto"},[t._v("\n        "+t._s(t._f("number")(t.car.minAgeDriver))+"\n      ")]),t._v(" "),o("span",[t._v("Возраст")])]),t._v(" "),o("div",{staticClass:"block-icon-auto"},[o("div",{staticClass:"icon-auto"},[t._v("\n        "+t._s(t._f("number")(t.car.minAgeDriversLicence))+"\n      ")]),t._v(" "),o("span",[t._v("Стаж")])])]),t._v(" "),o("div",{staticClass:"carsList-itemName"},[o("div",{staticClass:"carsList-itemPreCaption"}),t._v(" "),o("div",{staticClass:"carsList-itemCaption"},[t._v(t._s(t.car.title))]),t._v(" "),o("div",{staticClass:"carsList-itemSubCaption"},[t._v("\n      "+t._s(t.car.body.title)+"\n      "+t._s(t.car.model.title)),o("br"),o("em",[o("small",[t._v("Депозит для новых клиентов "+t._s(t._f("number")(t.car.depositMax))+"\n          "),o("span",{staticClass:"rouble"},[t._v("₽")]),t._v(" *")])])])]),t._v(" "),o("div",{staticClass:"carsList-itemPrice"},[o("div",{staticClass:"carsList-itemPreCaption"},[t._v("стоимость")]),t._v(" "),o("div",{staticClass:"carsList-itemCaption"},[o("span",{staticClass:"carsList-item-ColorBlue"},[t._v(t._s(t._f("number")(t.car.costPerHour))+"\n        "),o("span",{staticClass:"icon icon-rouble-semibold"},[t._v("/мин")])])]),t._v(" "),o("div",{staticClass:"carsList-itemSubCaption"},[t._v("\n      от "+t._s(t._f("number")(t.car.max_daily_cost))+" "),o("span",{staticClass:"rouble"},[t._v("₽")]),t._v("/сутки\n    ")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon-auto"},[e("i",{staticClass:"fal fa-tachometer-alt-fastest"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon-auto"},[e("i",{staticClass:"fal fa-gas-pump"})])}],!1,null,null,null);e.default=component.exports},299:function(t,e,o){"use strict";o(294)},300:function(t,e,o){var r=o(39)(!1);r.push([t.i,".carousel-agile .agile{margin-top:90px;margin-left:-10px;margin-right:-10px;position:relative}.carousel-agile .carsList-itemContent{height:560px!important}.carousel-agile .agile__actions{z-index:1000;position:absolute!important;left:auto;right:auto;top:50%;width:100%;margin-top:-16px;padding:0 15px!important}.carousel-agile .agile__actions button{-webkit-appearance:button;background:rgba(0,0,0,.5);color:#fff;width:32px!important;height:32px!important;line-height:28px;text-align:center;border-radius:50%;border:none;transition:all .3s ease-in-out;font-size:1.3rem;left:auto;right:auto}.carousel-agile .agile__actions button:hover{background:rgba(0,0,0,.7)}.carousel-agile .slide img{width:100%;height:auto;border-radius:15px}.carousel-agile .slide{padding:0 5px}.opacity-05{opacity:.5}.opacity-0{opacity:0}",""]),t.exports=r}}]);