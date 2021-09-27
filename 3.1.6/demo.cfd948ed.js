import{c as e}from"./mobile.86e8db9b.js";import{_ as i}from"./index.8b2edc29.js";import{m as t,a as s,r as a,e as n,j as o,k as l,g as c,o as m,F as r,i as d,t as b,l as v}from"./vendor.9cc7b6f2.js";const{createDemo:p}=e("popover"),u=p({setup(){const e=t({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,Customized:!1,disableAction:!1,topLocation:!1,rightLocation:!1,leftLocation:!1});return{iconItemList:s([{name:"选项一"},{name:"选项二"},{name:"选项三"}]),itemList:s([{name:"选项一",icon:"my2"},{name:"选项二",icon:"cart2"},{name:"选项三",icon:"location2"}]),visible:e,itemListDisabled:s([{name:"选项一",disabled:!0},{name:"选项二",disabled:!0},{name:"选项三"}]),selfContent:s([{name:"service",desc:"选项一"},{name:"notice",desc:"选项二"},{name:"location",desc:"选项三"},{name:"category",desc:"选项四"},{name:"scan2",desc:"选项五"},{name:"message",desc:"选项六"}])}}}),h={class:"demo"},L=c("h2",null,"基础用法",-1),f=v("明朗风格"),I=v("暗黑风格"),y=c("h2",null,"选项配置",-1),_=v("展示图标"),g=v("禁用选项"),k=c("h2",null,"自定义内容",-1),q=v("自定义内容"),U={class:"self-content"},T={class:"self-content-desc"},C=c("h2",null,"位置自定义",-1),j=v("向上弹出"),z=c("h2",null,null,-1),w=v("向右弹出"),A=v("向左弹出");var D=i(u,[["render",function(e,i,t,s,v,p){const u=a("nut-button"),D=a("nut-popover"),x=a("nut-icon");return m(),n("div",h,[L,o(D,{visible:e.visible.lightTheme,"onUpdate:visible":i[0]||(i[0]=i=>e.visible.lightTheme=i),iconItemList:e.iconItemList},{reference:l((()=>[o(u,{type:"primary",shape:"square"},{default:l((()=>[f])),_:1})])),_:1},8,["visible","iconItemList"]),o(D,{visible:e.visible.darkTheme,"onUpdate:visible":i[1]||(i[1]=i=>e.visible.darkTheme=i),theme:"dark",iconItemList:e.iconItemList},{reference:l((()=>[o(u,{type:"primary",shape:"square"},{default:l((()=>[I])),_:1})])),_:1},8,["visible","iconItemList"]),y,o(D,{visible:e.visible.showIcon,"onUpdate:visible":i[2]||(i[2]=i=>e.visible.showIcon=i),theme:"dark",iconItemList:e.itemList},{reference:l((()=>[o(u,{type:"primary",shape:"square"},{default:l((()=>[_])),_:1})])),_:1},8,["visible","iconItemList"]),o(D,{visible:e.visible.disableAction,"onUpdate:visible":i[3]||(i[3]=i=>e.visible.disableAction=i),iconItemList:e.itemListDisabled},{reference:l((()=>[o(u,{type:"primary",shape:"square"},{default:l((()=>[g])),_:1})])),_:1},8,["visible","iconItemList"]),k,o(D,{visible:e.visible.Customized,"onUpdate:visible":i[4]||(i[4]=i=>e.visible.Customized=i)},{reference:l((()=>[o(u,{type:"primary",shape:"square"},{default:l((()=>[q])),_:1})])),content:l((()=>[c("div",U,[(m(!0),n(r,null,d(e.selfContent,((e,i)=>(m(),n("div",{class:"self-content-item",key:i},[o(x,{name:e.name,size:"15"},null,8,["name"]),c("div",T,b(e.desc),1)])))),128))])])),_:1},8,["visible"]),C,o(D,{visible:e.visible.topLocation,"onUpdate:visible":i[5]||(i[5]=i=>e.visible.topLocation=i),location:"top",theme:"dark",iconItemList:e.iconItemList},{reference:l((()=>[o(u,{type:"primary",shape:"square"},{default:l((()=>[j])),_:1})])),_:1},8,["visible","iconItemList"]),z,o(D,{visible:e.visible.rightLocation,"onUpdate:visible":i[6]||(i[6]=i=>e.visible.rightLocation=i),location:"right",theme:"dark",iconItemList:e.iconItemList},{reference:l((()=>[o(u,{type:"primary",shape:"square"},{default:l((()=>[w])),_:1})])),_:1},8,["visible","iconItemList"]),o(D,{visible:e.visible.leftLocation,"onUpdate:visible":i[7]||(i[7]=i=>e.visible.leftLocation=i),location:"left",theme:"dark",iconItemList:e.iconItemList},{reference:l((()=>[o(u,{type:"primary",shape:"square"},{default:l((()=>[A])),_:1})])),_:1},8,["visible","iconItemList"])])}]]);export{D as default};
