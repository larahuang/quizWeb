import{u as x,E as H,F as L}from"./evaluate-b7133f0e.js";import{d as R,s as I,w as T,o as z,a,c as d,e as l,F as P,r as S,u as o,t as e,f as c,g as p,i as h,h as B,v as D,n as C,b as M}from"./index-ad330dcb.js";const j={class:"test-container"},J=l("div",{class:"h1"},[l("h1",null,[l("b",null,"英文測驗評量")])],-1),O={class:"text-content"},Q={key:0,class:"main_content"},W={class:"words"},X={class:"title"},Z={class:"multiple_ol"},ll=["onClick"],sl=l("span",null,"A",-1),ol=l("img",{src:"https://i.imgur.com/gdKYGgu.png"},null,-1),tl={class:"value"},el=["onClick"],il=l("span",null,"B",-1),nl=l("img",{src:"https://i.imgur.com/gdKYGgu.png"},null,-1),al={class:"value"},dl=["onClick"],cl=l("span",null,"C",-1),ul=l("img",{src:"https://i.imgur.com/gdKYGgu.png"},null,-1),_l={class:"value"},rl=["onClick"],vl=l("span",null,"D",-1),pl=l("img",{src:"https://i.imgur.com/gdKYGgu.png"},null,-1),hl={class:"value"},gl={class:"source"},ml={class:"video_content"},Cl=l("div",{class:"video-title"},[l("b",null,"請聽語音")],-1),kl={class:"Pay-group"},fl=["onClick"],Vl={class:"video"},wl=["src"],yl={class:"multiple_img_area"},Al={class:"multiple_img"},$l=l("span",null,"A",-1),bl=["src","onClick"],Pl=l("span",null,"B",-1),Sl=["src","onClick"],Bl=l("span",null,"C",-1),Dl=["src","onClick"],El=l("span",null,"D",-1),Fl=["src","onClick"],Kl={class:"ul"},Ul=["onClick"],Yl={class:"rightAmount"},Gl={class:"rightAmount"},Nl=l("div",{class:"title"},[l("b",null,"答對了！！")],-1),ql=l("img",{src:"https://i.imgur.com/PUVe5uL.png"},null,-1),xl=[Nl,ql],Hl=l("div",{class:"title"},[l("b",null,"答錯了！！")],-1),Ll=l("img",{src:"https://i.imgur.com/P0KRY1w.png"},null,-1),Rl=[Hl,Ll],Il=l("div",{class:"dialog_all"},[l("div",{class:"title"},[l("b",null,"你剛剛已經作答過了！！")])],-1),Tl={class:"dialog_all"},zl={class:"title"},ss=R({__name:"one",setup(Ml){const k=x(),{multiple:E,activeId:F,isAnswer:jl,dialogSuccess:u,dialogFail:n,isTransform:f,videoPlayHide:Jl,videoStop:K,countNum:Ol,disabled:Ql,dialogAlready:_,rightAmount:V,sun:Wl,alreadyAs:w,isAnswerID:U,dialogSun:r}=I(k),{getEvaluateList:Y,changeActive:G,openPage:N,answer1:y,answer2:A,answer3:$,answer4:b,playAudio:q,stopAudio:Xl}=k;return T(w,(g,t)=>{console.log(g,t),g==10&&(r.value=!0,_.value=!1,n.value=!1)}),z(()=>{Y(),N(),U.value=""}),(g,t)=>{const v=H;return a(),d("div",j,[J,l("div",O,[(a(!0),d(P,null,S(o(E),(s,m)=>(a(),d("div",{class:"multiple-content",key:m},[o(F)==m?(a(),d("div",Q,[B(l("div",W,[l("div",X,[l("b",null,e(s.question),1)]),l("div",null,[l("ol",Z,[l("li",{onClick:i=>o(y)(s._id,s.isCorrect,s.multiple[0])},[sl,ol,l("div",tl,e(s.multiple[0]),1)],8,ll),l("li",{onClick:i=>o(A)(s._id,s.isCorrect,s.multiple[1])},[il,nl,l("div",al,e(s.multiple[1]),1)],8,el),l("li",{onClick:i=>o($)(s._id,s.isCorrect,s.multiple[2])},[cl,ul,l("div",_l,e(s.multiple[2]),1)],8,dl),l("li",{onClick:i=>o(b)(s._id,s.isCorrect,s.multiple[3])},[vl,pl,l("div",hl,e(s.multiple[3]),1)],8,rl)])])],512),[[D,s.question!=""]]),B(l("div",gl,[l("div",ml,[Cl,l("div",kl,[l("div",{class:C(["loader",{videoPlayShow:o(f)}])},"ing",2),l("div",{class:C([{videoPlayHide:o(f)},"music"])},null,2),l("div",{class:"PayBar",onClick:i=>o(q)(s.mp3)},[l("i",{class:C(["fa-solid fa-play",{videoPlayHide:o(K)}])},null,2)],8,fl)]),l("div",Vl,[l("audio",{controls:"",ref_for:!0,ref:"video",class:"audio"},[l("source",{src:s.mp3},null,8,wl)],512)])]),l("div",yl,[l("ol",Al,[l("li",null,[$l,l("img",{src:s.multiple[0],onClick:i=>o(y)(s._id,s.isCorrect,s.multiple[0])},null,8,bl)]),l("li",null,[Pl,l("img",{src:s.multiple[1],onClick:i=>o(A)(s._id,s.isCorrect,s.multiple[1])},null,8,Sl)]),l("li",null,[Bl,l("img",{src:s.multiple[2],onClick:i=>o($)(s._id,s.isCorrect,s.multiple[2])},null,8,Dl)]),l("li",null,[El,l("img",{src:s.multiple[3],onClick:i=>o(b)(s._id,s.isCorrect,s.multiple[3])},null,8,Fl)])])])],512),[[D,s.question===""]])])):M("",!0)]))),128)),l("ul",Kl,[(a(),d(P,null,S(10,s=>l("li",{class:"item",key:s,onClick:m=>o(G)(s)},[l("span",null,e(s),1)],8,Ul)),64))]),l("div",Yl," 答對題目"+e(o(V)),1),l("div",Gl," 已經作答"+e(o(w)),1)]),c(L),c(v,{class:"dialog_result",modelValue:o(u),"onUpdate:modelValue":t[1]||(t[1]=s=>h(u)?u.value=s:null)},{default:p(()=>[l("div",{class:"dialog_all",onClick:t[0]||(t[0]=s=>u.value=!1)},xl)]),_:1},8,["modelValue"]),c(v,{class:"dialog_result",modelValue:o(n),"onUpdate:modelValue":t[3]||(t[3]=s=>h(n)?n.value=s:null)},{default:p(()=>[l("div",{class:"dialog_all",onClick:t[2]||(t[2]=s=>n.value=!1)},Rl)]),_:1},8,["modelValue"]),c(v,{class:"dialog_result",modelValue:o(_),"onUpdate:modelValue":t[4]||(t[4]=s=>h(_)?_.value=s:null)},{default:p(()=>[Il]),_:1},8,["modelValue"]),c(v,{class:"dialog_result",modelValue:o(r),"onUpdate:modelValue":t[5]||(t[5]=s=>h(r)?r.value=s:null)},{default:p(()=>[l("div",Tl,[l("div",zl,[l("b",null,"總分："+e(o(V)*10),1)])])]),_:1},8,["modelValue"])])}}});export{ss as default};
