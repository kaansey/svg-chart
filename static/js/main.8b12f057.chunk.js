(this["webpackJsonpsvg-charts-react"]=this["webpackJsonpsvg-charts-react"]||[]).push([[0],{29:function(n,e,t){n.exports=t.p+"static/media/statistics.5d9093cb.svg"},41:function(n,e,t){n.exports=t(507)},507:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(1),a=t.n(i),s=t(28),o=t.n(s),c=t(3),p=t(29),l=t.n(p);function j(){var n=Object(r.a)(["\n  width: 20px;\n  margin-right: 10px;\n"]);return j=function(){return n},n}function _(){var n=Object(r.a)(["\n  margin-left: 10px;\n"]);return _=function(){return n},n}function S(){var n=Object(r.a)(["\n  color: #718096;\n"]);return S=function(){return n},n}function u(){var n=Object(r.a)(["\n  font-size: 16px;\n"]);return u=function(){return n},n}function d(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 840px;\n  margin: auto;\n  height: 35px;\n"]);return d=function(){return n},n}function y(){var n=Object(r.a)(["\n  padding: 8px 0;\n  border-bottom: 1px solid #edf2f7;\n"]);return y=function(){return n},n}var h=c.b.div(y()),x=c.b.div(d()),m=c.b.div(u()),E=c.b.div(S()),g=c.b.a(_()),f=c.b.img(j()),v=a.a.memo((function(){return a.a.createElement(h,null,a.a.createElement(x,null,a.a.createElement(m,null,a.a.createElement(f,{src:l.a}),"SVG Charts React"),a.a.createElement(E,null,a.a.createElement(g,{href:"https://github.com/kaansey/svg-charts-react"},"Github"),a.a.createElement(g,{href:"https://www.npmjs.com/package/svg-charts-react"},"Npm"))))})),P=t(5);function b(){var n=Object(r.a)(["\n  padding: 0.5rem;\n  background: #f4f5f7;\n  border-radius: 4px;\n  margin: 1rem 0;\n  box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px, rgba(9, 30, 66, 0.3) 0px 8px 16px -8px;\n  .live-preview {\n    background: #eeeeee;\n    border-radius: 4px 4px 0 0;\n  }\n  .live-editor {\n    font-size: 12px;\n    text-align: left;\n    textarea {\n      background: #313b48 !important;\n    }\n  }\n"]);return b=function(){return n},n}var C=c.b.div(b()),B=function(n){return a.a.createElement("div",null,a.a.createElement(C,null,a.a.createElement(P.d,{className:"provider",code:n.code,scope:n.scope,noInline:n.noInline||!1,theme:n.theme},a.a.createElement(P.a,{className:"live-editor"}),a.a.createElement(P.c,{className:"live-preview"}),a.a.createElement(P.b,null))))};function k(){var n=Object(r.a)(["\n  width: 130px;\n  color: #718096;\n  font-size: 13px;\n"]);return k=function(){return n},n}function T(){var n=Object(r.a)(["\n  width: 145px;\n  padding: 24px 15px 0 0;\n"]);return T=function(){return n},n}var O=c.b.div(T()),G=c.b.div(k()),M=a.a.memo((function(){return a.a.createElement(O,null,a.a.createElement(G,null,a.a.createElement("a",{href:"/#"},"Pie Chart")))}));function w(){var n=Object(r.a)(["\n  padding: 10px;\n  background-color: #ecf1f5;\n"]);return w=function(){return n},n}c.b.div(w());var L={plain:{color:"#e7d2ed"},styles:[{types:["prolog","comment","doctype","cdata"],style:{color:"hsl(30, 20%, 50%)"}},{types:["property","tag","boolean","number","constant","symbol"],style:{color:"#f677e1"}},{types:["attr-name","string","char","builtin","insterted"],style:{color:"hsl(75, 70%, 70%)"}},{types:["operator","entity","url","string","variable","language-css"],style:{color:"hsl(40, 90%, 70%)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["regex","important"],style:{color:"#e90"}},{types:["atrule","attr-value","keyword"],style:{color:"#f677e1"}},{types:["punctuation","symbol"],style:{opacity:"0.7"}}]},H=t(38),I=t.n(H),D=function(){return(D=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},N={BLUE:"#4d8af0",RED:"#cc3333",GREEN:"#2e8f59",YELLOW:"#a3a328"},A=function(n,e){var t=parseInt(n.replace("#",""),16),r=Math.round(2.55*e),i=(t>>16)+r,a=(t>>8&255)+r,s=(255&t)+r;return"#"+(16777216+65536*(i<255?i<1?0:i:255)+256*(a<255?a<1?0:a:255)+(s<255?s<1?0:s:255)).toString(16).slice(1)},W=function(n,e){var t=e.color,r=e.diffPercentage,i=void 0===r?3:r,a=t.startsWith("#")?t:function(n){return(n=n.toUpperCase())in N?N[n]:N.BLUE}(t),s=n[0];s.color||(s.color=a,a=A(a,i));for(var o=1;o<n.length;o++)n[o].color||(n[o].color=a,a=A(a,i));return n},F=0,K=a.a.memo((function(n){var e=n.center,t=n.data,r=n.onHover,i=n.expandSize,s=n.strokeWidth,o=n.strokeColor,c=n.strokeLinejoin,p=n.transitionTimingFunction,l=n.transitionDuration,j=t.reduce((function(n,e){return e.value+n}),0),_=function(n,e){return function(t){r(n,e,t)}};return j<1?null:t.map((function(n,r){var S=e+(n.hovered?i:0)-s/2,u=function(n){var e=n.total,t=n.radius,r=n.value,i=n.center,a=Number((r/e*360*Math.PI/180).toFixed(4)),s=(i+Math.sin(a)*t).toFixed(4),o=(i-Math.cos(a)*t).toFixed(4);return"\n          M"+i+" "+i+",\n          L"+i+" "+(i-t)+",\n          A"+t+" "+t+",\n          0 "+(a>Math.PI?1:0)+" 1,\n          "+s+" "+o+"Z"}({total:j,radius:S,value:n.value,center:e}),d=(F/j*360).toFixed(4);F+=n.value;var y=1===t.length;return a.a.createElement("g",{key:"pie"+r,transform:"rotate("+d+", "+e+", "+e+")"},y?a.a.createElement("circle",{cx:e,cy:e,r:S,fill:n.color}):a.a.createElement("path",{d:u,fill:n.color,stroke:o,strokeWidth:s,strokeLinejoin:c,onMouseEnter:_(n,r),onMouseLeave:_(null,null),onTouchStart:_(n,r),onTouchEnd:_(null,null),style:{transitionProperty:"all",transitionTimingFunction:p,transitionDuration:l}}))}))})),z=a.a.memo((function(n){return a.a.createElement("div",null,n.data.title,": ",a.a.createElement("b",null,n.data.percentage,"%"))})),U=function(n){var e=n.data,t=n.viewBoxSize,r=Object(i.useState)(),s=r[0],o=r[1],c=n.viewBoxSize/2,p=n.expandOnHover?n.expandSize:0,l=function(n,e,t){var r=n.filter((function(n){return n.value>0})).sort((function(n,e){return e.value-n.value})),i=n.reduce((function(n,e){return e.value+n}),0);return r.length&&e?r.map((function(n,e){var r=(15.91549430919*Number((n.value/i*360*Math.PI/180).toFixed(4))).toFixed(2);return D(D({},n),{hovered:e===t,percentage:r})})):r}(e,n.expandOnHover,s);n.colorTone&&(l=W(l,n.colorTone));var j=Object(i.useCallback)((function(){if(n.showTooltip&&l[s]){var e=l[s],t=n.CustomTooltipTemplate;return a.a.createElement(t,{data:e})}return null}),[s]);return l&&l.length>0?a.a.createElement(a.a.Fragment,null,a.a.createElement("svg",{"data-tip":"","data-for":"tooltip",viewBox:"0 0 "+(t+2*p)+" "+(t+2*p)},a.a.createElement("g",{transform:"translate("+p+", "+p+")"},a.a.createElement(K,{center:c,data:l,onHover:function(e,t,r){n.expandOnHover&&o(t),n.onPieHover&&n.onPieHover(e,t,r)},expandSize:n.expandSize,strokeColor:n.strokeColor,strokeLinejoin:n.strokeLinejoin,strokeWidth:n.strokeWidth,transitionDuration:n.transitionDuration,transitionTimingFunction:n.transitionTimingFunction}))),a.a.createElement(I.a,{id:"tooltip",getContent:j})):null};function R(){var n=Object(r.a)(["\n  width: 300px;\n  margin: auto;\n  padding: 10px;\n"]);return R=function(){return n},n}U.defaultProps={viewBoxSize:100,expandOnHover:!0,expandSize:3,onPieHover:function(){},shrinkOnTouchEnd:!1,strokeColor:"#fff",strokeLinejoin:"round",strokeWidth:0,transitionDuration:"0s",transitionTimingFunction:"ease-out",showTooltip:!0,CustomTooltipTemplate:z};var V={PieChart:a.a.memo(U),Wrapper:c.b.div(R())},J=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Sample with color tone"),a.a.createElement("p",null,"The ",a.a.createElement("b",null,"colorTone")," property will generate lighten colors from the given color. The lighten level of the color configurable by the ",a.a.createElement("b",null,"diffPercentage")," property."),a.a.createElement("p",null,"Auto-generated colors can be overwriten by ",a.a.createElement("b",null,"color")," property in your sample data."),a.a.createElement("p",null,"This is the example how you can use the ",a.a.createElement("b",null,"colorTone")," and how you can overwrite for spesific data"),a.a.createElement(B,{noInline:!0,code:'\n    sampleData = [\n      { title: "Pie 1", value: 100 },\n      { title: "Pie 2", value: 60 },\n      { title: "Pie 5", value: 10, color: "#add8e6" },\n      { title: "Pie 3", value: 30 },\n      { title: "Pie 4", value: 20 }\n    ]\n    \n    render(\n      <Wrapper>\n        <PieChart\n          key={"pie-1"}\n          data = {sampleData}\n          viewBoxSize = {100}\n          expandOnHover = {true}\n          expandSize = {3}\n          shrinkOnTouchEnd = {false}\n          strokeColor = {\'#eee\'}\n          strokeLinejoin = {\'round\'}\n          strokeWidth = {0}\n          transitionDuration = {\'0s\'}\n          transitionTimingFunction = {\'ease-out\'}\n          // color can be "blue", "red", "green", "yellow" or any hex color\n          colorTone = {{color:\'red\', diffPercentage: 4 }}\n          onPieHover = {(data, index, event) => {\n            if (data) {\n              console.log("On Mouse Hover", { data, index, event });\n            } else {\n              console.log("On Mouse Leave:", { index, event });\n            }\n          }}\n        />\n      </Wrapper>\n    )\n',scope:V,theme:L}),a.a.createElement("h3",null,"Sample with specific colors"),a.a.createElement(B,{noInline:!0,code:'\nsampleData = [\n  { title: "Pie 1", value: 100, color: "#4d8af0" },\n  { title: "Pie 2", value: 60, color: "#5f9cff" },\n  { title: "Pie 3", value: 30, color: "#71aeff" },\n  { title: "Pie 4", value: 20, color: "#83c0ff" },\n  { title: "Pie 5", value: 10, color: "#95d2ff" }\n]\n\nrender(\n  <Wrapper>\n    <PieChart\n      key={"pie-2"}\n      data = {sampleData}\n    />\n  </Wrapper>\n)\n',scope:V,theme:L}),a.a.createElement("h3",null,"Sample with cutom tooltip template"),a.a.createElement(B,{noInline:!0,code:'\nconst CustomTooltipTemplate = ({data}) => {\n  return (\n    <div>\n      <div>{data.title}</div>\n      <div>{data.percentage}</div>\n    </div>\n  );\n};\n\nrender(\n  <Wrapper>\n    <PieChart\n      key={"pie-3"}\n      data = {sampleData}\n      CustomTooltipTemplate={CustomTooltipTemplate}\n    />\n  </Wrapper>\n)\n',scope:V,theme:L}))};function Y(){var n=Object(r.a)(["\n  border-left: 1px solid #edf2f7;\n  padding-left: 15px;\n  width: 100%;\n"]);return Y=function(){return n},n}function Z(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  max-width: 840px;\n  margin: auto;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return Z=function(){return n},n}var q=c.b.div(Z()),X=c.b.div(Y()),Q=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null),a.a.createElement(q,null,a.a.createElement(M,null),a.a.createElement(X,null,a.a.createElement(J,null))))};function $(){var n=Object(r.a)(["\n  body {\n    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji,\n      Segoe UI Emoji, Segoe UI Symbol;\n    padding: 0px;\n    margin: 0px;\n    width: 100%;\n    color: #2d3748;\n  }\n  a:link    {\n    text-decoration:  none;\n    font-weight:      normal;\n    background-color: inherit;\n    color: inherit;\n    } \n  a:visited {\n    text-decoration:  none;\n    font-weight:      normal;\n    background-color: inherit;\n    color: inherit;\n    } \n  a:hover   {\n    text-decoration:  none;\n    font-weight:      normal;\n    background-color: inherit;\n    color: inherit;\n    } \n  a:active  {\n    text-decoration:  none;\n    font-weight:      normal;\n    background-color: inherit;\n    color: inherit;\n    } \n\n  p {\n    font-size: 15px;\n    line-height: 27px;\n  }\n"]);return $=function(){return n},n}var nn=Object(c.a)($());o.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(nn,null),a.a.createElement(Q,null)),document.getElementById("root"))},63:function(n,e,t){var r={"./Binary_Property/ASCII.js":64,"./Binary_Property/ASCII_Hex_Digit.js":65,"./Binary_Property/Alphabetic.js":66,"./Binary_Property/Any.js":67,"./Binary_Property/Assigned.js":68,"./Binary_Property/Bidi_Control.js":69,"./Binary_Property/Bidi_Mirrored.js":70,"./Binary_Property/Case_Ignorable.js":71,"./Binary_Property/Cased.js":72,"./Binary_Property/Changes_When_Casefolded.js":73,"./Binary_Property/Changes_When_Casemapped.js":74,"./Binary_Property/Changes_When_Lowercased.js":75,"./Binary_Property/Changes_When_NFKC_Casefolded.js":76,"./Binary_Property/Changes_When_Titlecased.js":77,"./Binary_Property/Changes_When_Uppercased.js":78,"./Binary_Property/Dash.js":79,"./Binary_Property/Default_Ignorable_Code_Point.js":80,"./Binary_Property/Deprecated.js":81,"./Binary_Property/Diacritic.js":82,"./Binary_Property/Emoji.js":83,"./Binary_Property/Emoji_Component.js":84,"./Binary_Property/Emoji_Modifier.js":85,"./Binary_Property/Emoji_Modifier_Base.js":86,"./Binary_Property/Emoji_Presentation.js":87,"./Binary_Property/Extended_Pictographic.js":88,"./Binary_Property/Extender.js":89,"./Binary_Property/Grapheme_Base.js":90,"./Binary_Property/Grapheme_Extend.js":91,"./Binary_Property/Hex_Digit.js":92,"./Binary_Property/IDS_Binary_Operator.js":93,"./Binary_Property/IDS_Trinary_Operator.js":94,"./Binary_Property/ID_Continue.js":95,"./Binary_Property/ID_Start.js":96,"./Binary_Property/Ideographic.js":97,"./Binary_Property/Join_Control.js":98,"./Binary_Property/Logical_Order_Exception.js":99,"./Binary_Property/Lowercase.js":100,"./Binary_Property/Math.js":101,"./Binary_Property/Noncharacter_Code_Point.js":102,"./Binary_Property/Pattern_Syntax.js":103,"./Binary_Property/Pattern_White_Space.js":104,"./Binary_Property/Quotation_Mark.js":105,"./Binary_Property/Radical.js":106,"./Binary_Property/Regional_Indicator.js":107,"./Binary_Property/Sentence_Terminal.js":108,"./Binary_Property/Soft_Dotted.js":109,"./Binary_Property/Terminal_Punctuation.js":110,"./Binary_Property/Unified_Ideograph.js":111,"./Binary_Property/Uppercase.js":112,"./Binary_Property/Variation_Selector.js":113,"./Binary_Property/White_Space.js":114,"./Binary_Property/XID_Continue.js":115,"./Binary_Property/XID_Start.js":116,"./General_Category/Cased_Letter.js":117,"./General_Category/Close_Punctuation.js":118,"./General_Category/Connector_Punctuation.js":119,"./General_Category/Control.js":120,"./General_Category/Currency_Symbol.js":121,"./General_Category/Dash_Punctuation.js":122,"./General_Category/Decimal_Number.js":123,"./General_Category/Enclosing_Mark.js":124,"./General_Category/Final_Punctuation.js":125,"./General_Category/Format.js":126,"./General_Category/Initial_Punctuation.js":127,"./General_Category/Letter.js":128,"./General_Category/Letter_Number.js":129,"./General_Category/Line_Separator.js":130,"./General_Category/Lowercase_Letter.js":131,"./General_Category/Mark.js":132,"./General_Category/Math_Symbol.js":133,"./General_Category/Modifier_Letter.js":134,"./General_Category/Modifier_Symbol.js":135,"./General_Category/Nonspacing_Mark.js":136,"./General_Category/Number.js":137,"./General_Category/Open_Punctuation.js":138,"./General_Category/Other.js":139,"./General_Category/Other_Letter.js":140,"./General_Category/Other_Number.js":141,"./General_Category/Other_Punctuation.js":142,"./General_Category/Other_Symbol.js":143,"./General_Category/Paragraph_Separator.js":144,"./General_Category/Private_Use.js":145,"./General_Category/Punctuation.js":146,"./General_Category/Separator.js":147,"./General_Category/Space_Separator.js":148,"./General_Category/Spacing_Mark.js":149,"./General_Category/Surrogate.js":150,"./General_Category/Symbol.js":151,"./General_Category/Titlecase_Letter.js":152,"./General_Category/Unassigned.js":153,"./General_Category/Uppercase_Letter.js":154,"./Script/Adlam.js":155,"./Script/Ahom.js":156,"./Script/Anatolian_Hieroglyphs.js":157,"./Script/Arabic.js":158,"./Script/Armenian.js":159,"./Script/Avestan.js":160,"./Script/Balinese.js":161,"./Script/Bamum.js":162,"./Script/Bassa_Vah.js":163,"./Script/Batak.js":164,"./Script/Bengali.js":165,"./Script/Bhaiksuki.js":166,"./Script/Bopomofo.js":167,"./Script/Brahmi.js":168,"./Script/Braille.js":169,"./Script/Buginese.js":170,"./Script/Buhid.js":171,"./Script/Canadian_Aboriginal.js":172,"./Script/Carian.js":173,"./Script/Caucasian_Albanian.js":174,"./Script/Chakma.js":175,"./Script/Cham.js":176,"./Script/Cherokee.js":177,"./Script/Common.js":178,"./Script/Coptic.js":179,"./Script/Cuneiform.js":180,"./Script/Cypriot.js":181,"./Script/Cyrillic.js":182,"./Script/Deseret.js":183,"./Script/Devanagari.js":184,"./Script/Dogra.js":185,"./Script/Duployan.js":186,"./Script/Egyptian_Hieroglyphs.js":187,"./Script/Elbasan.js":188,"./Script/Elymaic.js":189,"./Script/Ethiopic.js":190,"./Script/Georgian.js":191,"./Script/Glagolitic.js":192,"./Script/Gothic.js":193,"./Script/Grantha.js":194,"./Script/Greek.js":195,"./Script/Gujarati.js":196,"./Script/Gunjala_Gondi.js":197,"./Script/Gurmukhi.js":198,"./Script/Han.js":199,"./Script/Hangul.js":200,"./Script/Hanifi_Rohingya.js":201,"./Script/Hanunoo.js":202,"./Script/Hatran.js":203,"./Script/Hebrew.js":204,"./Script/Hiragana.js":205,"./Script/Imperial_Aramaic.js":206,"./Script/Inherited.js":207,"./Script/Inscriptional_Pahlavi.js":208,"./Script/Inscriptional_Parthian.js":209,"./Script/Javanese.js":210,"./Script/Kaithi.js":211,"./Script/Kannada.js":212,"./Script/Katakana.js":213,"./Script/Kayah_Li.js":214,"./Script/Kharoshthi.js":215,"./Script/Khmer.js":216,"./Script/Khojki.js":217,"./Script/Khudawadi.js":218,"./Script/Lao.js":219,"./Script/Latin.js":220,"./Script/Lepcha.js":221,"./Script/Limbu.js":222,"./Script/Linear_A.js":223,"./Script/Linear_B.js":224,"./Script/Lisu.js":225,"./Script/Lycian.js":226,"./Script/Lydian.js":227,"./Script/Mahajani.js":228,"./Script/Makasar.js":229,"./Script/Malayalam.js":230,"./Script/Mandaic.js":231,"./Script/Manichaean.js":232,"./Script/Marchen.js":233,"./Script/Masaram_Gondi.js":234,"./Script/Medefaidrin.js":235,"./Script/Meetei_Mayek.js":236,"./Script/Mende_Kikakui.js":237,"./Script/Meroitic_Cursive.js":238,"./Script/Meroitic_Hieroglyphs.js":239,"./Script/Miao.js":240,"./Script/Modi.js":241,"./Script/Mongolian.js":242,"./Script/Mro.js":243,"./Script/Multani.js":244,"./Script/Myanmar.js":245,"./Script/Nabataean.js":246,"./Script/Nandinagari.js":247,"./Script/New_Tai_Lue.js":248,"./Script/Newa.js":249,"./Script/Nko.js":250,"./Script/Nushu.js":251,"./Script/Nyiakeng_Puachue_Hmong.js":252,"./Script/Ogham.js":253,"./Script/Ol_Chiki.js":254,"./Script/Old_Hungarian.js":255,"./Script/Old_Italic.js":256,"./Script/Old_North_Arabian.js":257,"./Script/Old_Permic.js":258,"./Script/Old_Persian.js":259,"./Script/Old_Sogdian.js":260,"./Script/Old_South_Arabian.js":261,"./Script/Old_Turkic.js":262,"./Script/Oriya.js":263,"./Script/Osage.js":264,"./Script/Osmanya.js":265,"./Script/Pahawh_Hmong.js":266,"./Script/Palmyrene.js":267,"./Script/Pau_Cin_Hau.js":268,"./Script/Phags_Pa.js":269,"./Script/Phoenician.js":270,"./Script/Psalter_Pahlavi.js":271,"./Script/Rejang.js":272,"./Script/Runic.js":273,"./Script/Samaritan.js":274,"./Script/Saurashtra.js":275,"./Script/Sharada.js":276,"./Script/Shavian.js":277,"./Script/Siddham.js":278,"./Script/SignWriting.js":279,"./Script/Sinhala.js":280,"./Script/Sogdian.js":281,"./Script/Sora_Sompeng.js":282,"./Script/Soyombo.js":283,"./Script/Sundanese.js":284,"./Script/Syloti_Nagri.js":285,"./Script/Syriac.js":286,"./Script/Tagalog.js":287,"./Script/Tagbanwa.js":288,"./Script/Tai_Le.js":289,"./Script/Tai_Tham.js":290,"./Script/Tai_Viet.js":291,"./Script/Takri.js":292,"./Script/Tamil.js":293,"./Script/Tangut.js":294,"./Script/Telugu.js":295,"./Script/Thaana.js":296,"./Script/Thai.js":297,"./Script/Tibetan.js":298,"./Script/Tifinagh.js":299,"./Script/Tirhuta.js":300,"./Script/Ugaritic.js":301,"./Script/Vai.js":302,"./Script/Wancho.js":303,"./Script/Warang_Citi.js":304,"./Script/Yi.js":305,"./Script/Zanabazar_Square.js":306,"./Script_Extensions/Adlam.js":307,"./Script_Extensions/Ahom.js":308,"./Script_Extensions/Anatolian_Hieroglyphs.js":309,"./Script_Extensions/Arabic.js":310,"./Script_Extensions/Armenian.js":311,"./Script_Extensions/Avestan.js":312,"./Script_Extensions/Balinese.js":313,"./Script_Extensions/Bamum.js":314,"./Script_Extensions/Bassa_Vah.js":315,"./Script_Extensions/Batak.js":316,"./Script_Extensions/Bengali.js":317,"./Script_Extensions/Bhaiksuki.js":318,"./Script_Extensions/Bopomofo.js":319,"./Script_Extensions/Brahmi.js":320,"./Script_Extensions/Braille.js":321,"./Script_Extensions/Buginese.js":322,"./Script_Extensions/Buhid.js":323,"./Script_Extensions/Canadian_Aboriginal.js":324,"./Script_Extensions/Carian.js":325,"./Script_Extensions/Caucasian_Albanian.js":326,"./Script_Extensions/Chakma.js":327,"./Script_Extensions/Cham.js":328,"./Script_Extensions/Cherokee.js":329,"./Script_Extensions/Common.js":330,"./Script_Extensions/Coptic.js":331,"./Script_Extensions/Cuneiform.js":332,"./Script_Extensions/Cypriot.js":333,"./Script_Extensions/Cyrillic.js":334,"./Script_Extensions/Deseret.js":335,"./Script_Extensions/Devanagari.js":336,"./Script_Extensions/Dogra.js":337,"./Script_Extensions/Duployan.js":338,"./Script_Extensions/Egyptian_Hieroglyphs.js":339,"./Script_Extensions/Elbasan.js":340,"./Script_Extensions/Elymaic.js":341,"./Script_Extensions/Ethiopic.js":342,"./Script_Extensions/Georgian.js":343,"./Script_Extensions/Glagolitic.js":344,"./Script_Extensions/Gothic.js":345,"./Script_Extensions/Grantha.js":346,"./Script_Extensions/Greek.js":347,"./Script_Extensions/Gujarati.js":348,"./Script_Extensions/Gunjala_Gondi.js":349,"./Script_Extensions/Gurmukhi.js":350,"./Script_Extensions/Han.js":351,"./Script_Extensions/Hangul.js":352,"./Script_Extensions/Hanifi_Rohingya.js":353,"./Script_Extensions/Hanunoo.js":354,"./Script_Extensions/Hatran.js":355,"./Script_Extensions/Hebrew.js":356,"./Script_Extensions/Hiragana.js":357,"./Script_Extensions/Imperial_Aramaic.js":358,"./Script_Extensions/Inherited.js":359,"./Script_Extensions/Inscriptional_Pahlavi.js":360,"./Script_Extensions/Inscriptional_Parthian.js":361,"./Script_Extensions/Javanese.js":362,"./Script_Extensions/Kaithi.js":363,"./Script_Extensions/Kannada.js":364,"./Script_Extensions/Katakana.js":365,"./Script_Extensions/Kayah_Li.js":366,"./Script_Extensions/Kharoshthi.js":367,"./Script_Extensions/Khmer.js":368,"./Script_Extensions/Khojki.js":369,"./Script_Extensions/Khudawadi.js":370,"./Script_Extensions/Lao.js":371,"./Script_Extensions/Latin.js":372,"./Script_Extensions/Lepcha.js":373,"./Script_Extensions/Limbu.js":374,"./Script_Extensions/Linear_A.js":375,"./Script_Extensions/Linear_B.js":376,"./Script_Extensions/Lisu.js":377,"./Script_Extensions/Lycian.js":378,"./Script_Extensions/Lydian.js":379,"./Script_Extensions/Mahajani.js":380,"./Script_Extensions/Makasar.js":381,"./Script_Extensions/Malayalam.js":382,"./Script_Extensions/Mandaic.js":383,"./Script_Extensions/Manichaean.js":384,"./Script_Extensions/Marchen.js":385,"./Script_Extensions/Masaram_Gondi.js":386,"./Script_Extensions/Medefaidrin.js":387,"./Script_Extensions/Meetei_Mayek.js":388,"./Script_Extensions/Mende_Kikakui.js":389,"./Script_Extensions/Meroitic_Cursive.js":390,"./Script_Extensions/Meroitic_Hieroglyphs.js":391,"./Script_Extensions/Miao.js":392,"./Script_Extensions/Modi.js":393,"./Script_Extensions/Mongolian.js":394,"./Script_Extensions/Mro.js":395,"./Script_Extensions/Multani.js":396,"./Script_Extensions/Myanmar.js":397,"./Script_Extensions/Nabataean.js":398,"./Script_Extensions/Nandinagari.js":399,"./Script_Extensions/New_Tai_Lue.js":400,"./Script_Extensions/Newa.js":401,"./Script_Extensions/Nko.js":402,"./Script_Extensions/Nushu.js":403,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":404,"./Script_Extensions/Ogham.js":405,"./Script_Extensions/Ol_Chiki.js":406,"./Script_Extensions/Old_Hungarian.js":407,"./Script_Extensions/Old_Italic.js":408,"./Script_Extensions/Old_North_Arabian.js":409,"./Script_Extensions/Old_Permic.js":410,"./Script_Extensions/Old_Persian.js":411,"./Script_Extensions/Old_Sogdian.js":412,"./Script_Extensions/Old_South_Arabian.js":413,"./Script_Extensions/Old_Turkic.js":414,"./Script_Extensions/Oriya.js":415,"./Script_Extensions/Osage.js":416,"./Script_Extensions/Osmanya.js":417,"./Script_Extensions/Pahawh_Hmong.js":418,"./Script_Extensions/Palmyrene.js":419,"./Script_Extensions/Pau_Cin_Hau.js":420,"./Script_Extensions/Phags_Pa.js":421,"./Script_Extensions/Phoenician.js":422,"./Script_Extensions/Psalter_Pahlavi.js":423,"./Script_Extensions/Rejang.js":424,"./Script_Extensions/Runic.js":425,"./Script_Extensions/Samaritan.js":426,"./Script_Extensions/Saurashtra.js":427,"./Script_Extensions/Sharada.js":428,"./Script_Extensions/Shavian.js":429,"./Script_Extensions/Siddham.js":430,"./Script_Extensions/SignWriting.js":431,"./Script_Extensions/Sinhala.js":432,"./Script_Extensions/Sogdian.js":433,"./Script_Extensions/Sora_Sompeng.js":434,"./Script_Extensions/Soyombo.js":435,"./Script_Extensions/Sundanese.js":436,"./Script_Extensions/Syloti_Nagri.js":437,"./Script_Extensions/Syriac.js":438,"./Script_Extensions/Tagalog.js":439,"./Script_Extensions/Tagbanwa.js":440,"./Script_Extensions/Tai_Le.js":441,"./Script_Extensions/Tai_Tham.js":442,"./Script_Extensions/Tai_Viet.js":443,"./Script_Extensions/Takri.js":444,"./Script_Extensions/Tamil.js":445,"./Script_Extensions/Tangut.js":446,"./Script_Extensions/Telugu.js":447,"./Script_Extensions/Thaana.js":448,"./Script_Extensions/Thai.js":449,"./Script_Extensions/Tibetan.js":450,"./Script_Extensions/Tifinagh.js":451,"./Script_Extensions/Tirhuta.js":452,"./Script_Extensions/Ugaritic.js":453,"./Script_Extensions/Vai.js":454,"./Script_Extensions/Wancho.js":455,"./Script_Extensions/Warang_Citi.js":456,"./Script_Extensions/Yi.js":457,"./Script_Extensions/Zanabazar_Square.js":458,"./index.js":459,"./unicode-version.js":460};function i(n){var e=a(n);return t(e)}function a(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=a,n.exports=i,i.id=63}},[[41,1,2]]]);
//# sourceMappingURL=main.8b12f057.chunk.js.map