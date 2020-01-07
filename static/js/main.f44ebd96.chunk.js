(this["webpackJsonpdice-scoresheets"]=this["webpackJsonpdice-scoresheets"]||[]).push([[0],{192:function(e,a,t){e.exports=t(342)},197:function(e,a,t){},198:function(e,a,t){},342:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),s=t.n(l),c=(t(197),t(18)),o=t(19),i=t(21),m=t(20),u=t(22),d=(t(198),t(14)),h=t(2),p=t.n(h),v=t(25),E=t.n(v);E.a.propTypes={classes:p.a.object.isRequired};var y=Object(d.withStyles)((function(e){return{button:{margin:"1em"}}}))((function(e){var a=e.classes;return r.a.createElement("div",null,r.a.createElement(E.a,{classes:{},variant:"contained",color:"primary",className:a.button,onClick:function(){e.toggleTable()}},"Create Scoresheet"))})),g=t(56),b=t.n(g),f=t(57),w=t.n(f),S=t(34),k=t.n(S),C=t(55),O=t.n(C),j=t(43),N=t.n(j),T=t(54),P=t.n(T),x=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={anchorEl:null},t.handleClick=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t.handleCloseClick=function(e){t.props.chooseGame(e.currentTarget.id),t.setState({anchorEl:null})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.anchorEl;return r.a.createElement("div",null,r.a.createElement(E.a,{classes:{},id:"game-button","aria-owns":e?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},this.props.game,r.a.createElement(P.a,null,"arrow_drop_down")),r.a.createElement(O.a,{id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleClose},r.a.createElement(N.a,{id:"yahtzee",onClick:this.handleCloseClick},"Yahtzee"),r.a.createElement(N.a,{id:"farkle (Coming Soon)",disabled:!0},"Farkle (Coming Soon)")))}}]),a}(r.a.Component),A=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.props.game;return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{position:"fixed",color:"primary"},r.a.createElement(w.a,{className:e.toolBar},r.a.createElement(k.a,{id:"header-text",variant:"h6",color:"inherit",onClick:this.props.showMain},"Dice Scoresheets"),r.a.createElement(x,{game:a,chooseGame:this.props.chooseGame}))))}}]),a}(r.a.Component),M=Object(d.withStyles)({root:{flexGrow:1},toolBar:{justifyContent:"space-between"}})(A),B=t(125),z=t(41),I=t.n(z),R=t(42),F=t.n(R),U=t(60),L=t.n(U),G=t(59),V=t.n(G),Y=t(58),W=t.n(Y),D=t(7),_=Array.from(Array(8).keys()).map((function(e){return e+1})),H=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleClose=function(){t.props.onClose(t.props.selectedValue)},t.handleListItemClick=function(e){t.props.onClose(e)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=(a.classes,a.onClose,a.selectedValue,Object(B.a)(a,["classes","onClose","selectedValue"]));return r.a.createElement(W.a,Object.assign({onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},t),r.a.createElement(V.a,{id:"simple-dialog-title"},"Players"),r.a.createElement("div",null,r.a.createElement(I.a,null,_.map((function(a){return r.a.createElement(F.a,{button:!0,onClick:function(){return e.handleListItemClick(a)},key:a},r.a.createElement(L.a,{primary:a}))})))))}}]),a}(r.a.Component),J=Object(d.withStyles)({})(H),q=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,selectedValue:"",btnText:"How Many Players"},t.handleClickOpen=function(){t.setState({open:!0})},t.setBtnText=function(e){return"".concat(e,1===e?" Player":" Players")},t.handleClose=function(e){t.setState({open:!1}),e&&(t.props.updatePlayers(e),t.setState({btnText:t.setBtnText(e)}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen,classes:{}},this.state.btnText,r.a.createElement(D.a,null,"arrow_drop_down")),r.a.createElement(J,{selectedValue:this.state.selectedValue,open:this.state.open,onClose:this.handleClose}))}}]),a}(r.a.Component),X=t(61),$=t.n(X),K=t(64),Q=t.n(K),Z=t(16),ee=t.n(Z),ae=t(62),te=t.n(ae),ne=t(44),re=t.n(ne),le=t(28),se=t.n(le),ce=t(63),oe=t.n(ce),ie=t(23),me=t.n(ie),ue=0;function de(e){return{id:ue+=1,row:e}}var he=[de("Ones"),de("Twos"),de("Threes"),de("Fours"),de("Fives"),de("Sixes"),de("Sum"),de("Bonus"),de("Upper Total"),de("Three of a kind"),de("Four of a kind"),de("Full House"),de("Small Straight"),de("Large Straight"),de("Chance"),de("Yahtzee!"),de("Yahtzee Bonus"),de("TOTAL")],pe=function e(a){Object(c.a)(this,e),this.name=a,this.scores={},this.setScores=function(){var e=this;he.forEach((function(a){e.scores[a.row]=""}))}},ve=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={players:[]},t.addPlayers=function(){for(var e=[],a=0;a<t.props.numPlayers;a++){var n=new pe("Player ".concat(a+1));n.setScores(),e.push(n)}t.setState({players:e})},t.updateTotals=function(){t.state.players.forEach((function(e){var a=e.scores;a.Sum=t.addUpper(a),a.Sum>=63?a.Bonus=35:a.Bonus=0,a["Upper Total"]=parseInt(a.Sum)+parseInt(a.Bonus),a["Upper Total"]||(a["Upper Total"]=0),a.TOTAL=t.addLower(a["Upper Total"],a)}))},t.updatePlayerName=function(e){var a=t.state.players;a[e.target.name].name=e.target.value,t.setState({players:a})},t.updatePlayerScore=function(e){var a=t.state.players,n=e.target.name.split("-");a[n[0]].scores[n[1]]=e.target.value,t.setState({players:a}),t.updateTotals()},t.returnMenuItems=function(e,a,t){for(var n=[],l=e;l<a+1;l++)n.push(r.a.createElement(D.b,{key:l,value:l},l));return void 0!==t&&n.unshift(r.a.createElement(D.b,{key:a+1,value:0},"0")),n},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"addLower",value:function(e,a){var t=e;return["Three of a kind","Four of a kind","Full House","Small Straight","Large Straight","Yahtzee!","Yahtzee Bonus"].forEach((function(e){""!==a[e]&&(t+=a[e])})),t}},{key:"addUpper",value:function(e){var a=0;return["Ones","Twos","Threes","Fours","Fives","Sixes"].forEach((function(t){""!==e[t]&&(a+=e[t])})),a}},{key:"componentDidUpdate",value:function(e,a){e!==this.props&&this.addPlayers(),a!==this.state&&this.updateTotals()}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",{id:"yahtzee-table"},r.a.createElement("div",{id:"yt-header"}),r.a.createElement("div",{id:"yt-left"}),r.a.createElement("div",{id:"yt-main"})),r.a.createElement(se.a,{className:a.root},r.a.createElement($.a,{className:a.table},r.a.createElement(te.a,null,r.a.createElement(re.a,null,r.a.createElement(ee.a,{className:a.th}),this.state.players.map((function(t,n){return r.a.createElement(ee.a,{className:a.td,key:n},r.a.createElement(oe.a,{onChange:e.updatePlayerName,name:n.toString(),className:a.noPadding,inputProps:{className:a.smInput},placeholder:t.name,variant:"filled",margin:"dense"}))})))),r.a.createElement(Q.a,null,he.map((function(t){return r.a.createElement(re.a,{key:t.id,className:a.trs},r.a.createElement(ee.a,{className:a.th,component:"th",scope:"row"},t.row),e.state.players.map((function(n,l){return t.id<7?r.a.createElement(ee.a,{className:a.td,key:l},r.a.createElement(me.a,{name:"".concat(l.toString(),"-").concat(t.row),onChange:e.updatePlayerScore,classes:{root:a.selectRoot,select:a.select},value:n.scores[t.row]},r.a.createElement(D.b,{value:""}),r.a.createElement(D.b,{value:0},"0"),r.a.createElement(D.b,{value:t.id},t.id),r.a.createElement(D.b,{value:2*t.id},2*t.id),r.a.createElement(D.b,{value:3*t.id},3*t.id),r.a.createElement(D.b,{value:4*t.id},4*t.id),r.a.createElement(D.b,{value:5*t.id},5*t.id))):t.id<9?r.a.createElement(ee.a,{className:a.td,key:l},r.a.createElement("div",{className:"sub-totals"},n.scores[t.row])):9===t.id||18===t.id?r.a.createElement(ee.a,{className:a.td,key:l},r.a.createElement("div",{className:"table-totals"},n.scores[t.row])):10===t.id||11===t.id||15===t.id?r.a.createElement(ee.a,{className:a.td,key:l},r.a.createElement(me.a,{name:"".concat(l.toString(),"-").concat(t.row),onChange:e.updatePlayerScore,classes:{root:a.selectRoot,select:a.select},value:n.scores[t.row]},r.a.createElement(D.b,{value:""}),e.returnMenuItems(5,30,0),"}}")):12===t.id?r.a.createElement(ee.a,{className:a.td,key:l},r.a.createElement(me.a,{name:"".concat(l.toString(),"-").concat(t.row),onChange:e.updatePlayerScore,classes:{root:a.selectRoot,select:a.select},value:n.scores[t.row]},r.a.createElement(D.b,{value:""}),r.a.createElement(D.b,{value:0},"0"),r.a.createElement(D.b,{value:25},"25"))):13===t.id?r.a.createElement(ee.a,{className:a.td,key:l},r.a.createElement(me.a,{name:"".concat(l.toString(),"-").concat(t.row),onChange:e.updatePlayerScore,classes:{root:a.selectRoot,select:a.select},value:n.scores[t.row]},r.a.createElement(D.b,{value:""}),r.a.createElement(D.b,{value:0},"0"),r.a.createElement(D.b,{value:30},"30"))):14===t.id?r.a.createElement(ee.a,{className:a.td,key:l},r.a.createElement(me.a,{name:"".concat(l.toString(),"-").concat(t.row),onChange:e.updatePlayerScore,classes:{root:a.selectRoot,select:a.select},value:n.scores[t.row]},r.a.createElement(D.b,{value:""}),r.a.createElement(D.b,{value:0},"0"),r.a.createElement(D.b,{value:40},"40"))):16===t.id?r.a.createElement(ee.a,{className:a.td,key:l},r.a.createElement(me.a,{name:"".concat(l.toString(),"-").concat(t.row),onChange:e.updatePlayerScore,classes:{root:a.selectRoot,select:a.select},value:n.scores[t.row]},r.a.createElement(D.b,{value:""}),r.a.createElement(D.b,{value:0},"0"),r.a.createElement(D.b,{value:50},"50"))):17===t.id?r.a.createElement(ee.a,{className:a.td,key:l},r.a.createElement(me.a,{name:"".concat(l.toString(),"-").concat(t.row),onChange:e.updatePlayerScore,classes:{root:a.selectRoot,select:a.select},value:n.scores[t.row]},r.a.createElement(D.b,{value:""}),r.a.createElement(D.b,{value:0},"0"),r.a.createElement(D.b,{value:100},"100"),r.a.createElement(D.b,{value:200},"200"),r.a.createElement(D.b,{value:300},"300"),r.a.createElement(D.b,{value:400},"400"),r.a.createElement(D.b,{value:500},"500"))):void 0})))}))))))}}]),a}(r.a.Component),Ee=Object(d.withStyles)((function(e){return{root:{width:"100%",margin:"auto",overflowX:"auto"},selectRoot:{width:"75px"},select:{paddingRight:"10px"},table:{minWidth:360},td:{padding:"5px",minWidth:"75px",textAlign:"center"},th:{padding:"0.5em",position:"sticky",left:0,minWidth:"90px",background:"white",boxShadow:"2px 0px 4px grey",zIndex:100},input:{padding:"5px",textAlign:"center"},smInput:{padding:"5px 10px",fontSize:"0.8em",textAlign:"center"},noPadding:{padding:0}}}))(ve),ye=Object(d.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{light:"#9162e4",main:"#5e35b1",dark:"#280680",contrastText:"#fff"},secondary:{light:"#80e27e",main:"#4caf50",dark:"#087f23",contrastText:"#000"}}}),ge=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={numPlayers:"",game:"Yahtzee",showTable:!1,hideMain:!1,showCreateScore:!1},t.updatePlayers=function(e){t.setState({numPlayers:e})},t.chooseGame=function(e){t.setState({game:e})},t.toggleTable=function(){var e=t.state.showTable,a=t.state.hideMain;t.setState({showTable:!e,hideMain:!a})},t.showMain=function(){t.setState({hideMain:!1,showTable:!1})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,a){this.state.numPlayers!==a.numPlayers&&""===a.numPlayers&&this.setState({showCreateScore:!this.state.showCreateScore})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.MuiThemeProvider,{theme:ye},r.a.createElement(M,{game:this.state.game,chooseGame:this.chooseGame,showMain:this.showMain}),r.a.createElement("div",{className:"App-body"},r.a.createElement("div",{className:this.state.hideMain?"hidden":"home-main"},r.a.createElement("div",{id:"home-img"},r.a.createElement("div",{id:"dice-top-row",className:"die-img-row"},r.a.createElement("img",{className:"die-img",src:"svg/die-green.svg",alt:"green-die"}),r.a.createElement("img",{className:"die-img",src:"svg/die-purple.svg",alt:"purple-die"})),r.a.createElement("div",{id:"dice-bottom-row",className:"die-img-row"},r.a.createElement("img",{className:"die-img",src:"svg/die-purple.svg",alt:"purple-die"}),r.a.createElement("img",{className:"die-img",src:"svg/die-green.svg",alt:"green-die"}),r.a.createElement("img",{className:"die-img",src:"svg/die-purple.svg",alt:"purple-die"}))),r.a.createElement("div",{className:"buttons"},r.a.createElement(q,{numPlayers:this.state.numPlayers,updatePlayers:this.updatePlayers}),r.a.createElement("div",{className:this.state.showCreateScore?"create-score":"hidden"},r.a.createElement(y,{numPlayers:this.state.numPlayers,toggleTable:this.toggleTable}))),r.a.createElement("div",{className:"credit"},r.a.createElement("span",null,"Developed by dboydgit"))),r.a.createElement("div",{className:this.state.showTable?"home-table":"hidden"},r.a.createElement(Ee,{numPlayers:this.state.numPlayers})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[192,1,2]]]);
//# sourceMappingURL=main.f44ebd96.chunk.js.map