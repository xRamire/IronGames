(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},110:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(27),r=a.n(s),i=(a(83),a(84),a(2)),l=a(5),o=a(11),j=(a(85),a(126)),d=a(127),b=a.p+"static/media/ironhack-1.06a8361a.svg",u=(a(86),a(0)),h=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{className:"landing home-bg",children:Object(u.jsx)(j.a,{children:Object(u.jsx)(d.a,{children:Object(u.jsx)("div",{className:"main-background",children:Object(u.jsxs)("div",{className:"main-text",children:[Object(u.jsx)("h1",{children:"Welcome to IronGames"}),Object(u.jsx)("p",{children:"Discover what ironhackers made in the third week of IronHack Web-Dev course!"})]})})})})})})},O=a(16),m=a(25),g=a.n(m),x=function e(){var t=this;Object(O.a)(this,e),this.getAllGames=function(){return t.app.get("/all")},this.getOneGame=function(e){return t.app.get("/game/".concat(e))},this.getGameDetails=function(e){return t.app.get("/game/details/".concat(e))},this.createGame=function(e){return t.app.post("/new",e)},this.editGame=function(e){return t.app.put("/edit/".concat(e._id),e)},this.deleteGame=function(e){return t.app.delete("/delete/".concat(e))},this.app=g.a.create({baseURL:"".concat("https://irongames.onrender.com/api","/games"),withCredentials:!0})};a(106);var p=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{className:"search",children:Object(u.jsx)("b",{children:"Search:"})}),Object(u.jsx)("input",{className:"search-bar",onChange:function(t){return function(t){var a=t.currentTarget.value;e.getSearch(a.toLowerCase())}(t)},name:"name",type:"text"})]})},f=a(128),v=a(132),w=a(74),U=a(7),N=a(130),y=function e(){var t=this;Object(O.a)(this,e),this.uploadImage=function(e){return t.app.post("/image",e)},this.app=g.a.create({baseURL:"".concat("https://irongames.onrender.com/api","/upload")})},C=(a(107),function(e){var t=e.size,a=e.shape,c={width:"lg"===t?60:30,height:"lg"===t?60:30};return Object(u.jsx)("div",{className:"spinner ".concat(a),style:c})}),G=new x,D=new y;var S=function(e){var t=Object(c.useState)({title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:""}),a=Object(l.a)(t,2),n=a[0],s=a[1],r=n.title,o=n.description,j=(n.genre,n.creators),d=(n.imageUrl,n.github),b=n.date,h=n.gameUrl,O=Object(c.useState)({loading:!1}),m=Object(l.a)(O,2),g=m[0],x=m[1],p=function(e){var t=e.currentTarget,a=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(u.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),G.createGame(n).then((function(t){e.closeModal(),e.getAllGames()})).catch((function(e){return console.log(e)}))},children:[Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"title",children:[Object(u.jsx)(N.a.Label,{children:"Title"}),Object(u.jsx)(N.a.Control,{onChange:p,value:r,name:"title",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"description",children:[Object(u.jsx)(N.a.Label,{children:"Description"}),Object(u.jsx)(N.a.Control,{onChange:p,value:o,name:"description",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"genre",children:[Object(u.jsx)(N.a.Label,{children:"Genre"}),Object(u.jsxs)(N.a.Select,{"aria-label":"Default select example",onChange:p,name:"genre",type:"text",children:[Object(u.jsx)("option",{children:"Open this select menu"}),Object(u.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(u.jsx)("option",{value:"Fighting",children:"Fighting"}),Object(u.jsx)("option",{value:"Beat'em up",children:"Beat'em up"}),Object(u.jsx)("option",{value:"Shooter",children:"Shooter"}),Object(u.jsx)("option",{value:"Multiplayer",children:"Multiplayer"}),Object(u.jsx)("option",{value:"Sports",children:"Sports"}),Object(u.jsx)("option",{value:"Terror",children:"Terror"}),Object(u.jsx)("option",{value:"Racing",children:"Racing"}),Object(u.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"creators",children:[Object(u.jsx)(N.a.Label,{children:"Creators"}),Object(u.jsx)(N.a.Control,{onChange:p,value:j,name:"creators",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"github",children:[Object(u.jsx)(N.a.Label,{children:"Github"}),Object(u.jsx)(N.a.Control,{onChange:p,value:d,name:"github",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"date",children:[Object(u.jsx)(N.a.Label,{children:"Date"}),Object(u.jsx)(N.a.Control,{onChange:p,value:b,name:"date",type:"date"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"gameUrl",children:[Object(u.jsx)(N.a.Label,{children:"GameUrl"}),Object(u.jsx)(N.a.Control,{onChange:p,value:h,name:"gameUrl",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"imageUrl",children:[Object(u.jsx)(N.a.Label,{children:"Image archive"}),Object(u.jsx)(N.a.Control,{onChange:function(e){x({loading:!0});var t=new FormData;t.append("imageData",e.target.files[0]),D.uploadImage(t).then((function(e){s(Object(i.a)(Object(i.a)({},n),{},{imageUrl:e.data.cloudinary_url})),x({loading:!1})})).catch((function(e){return console.log(e)}))},name:"imageData",type:"file"})]}),g.loading&&Object(u.jsx)(C,{shape:"circle"}),Object(u.jsx)(f.a,{disabled:g.loading,variant:"primary",type:"submit",children:"Submit"})]})},M=a(133),I=a(8),L=(a(110),function(e){var t=e._id,a=e.title,c=e.description,n=e.genre,s=e.creators,r=e.imageUrl;e.github,e.date,e.gameUrl,e.reviews;return Object(u.jsxs)(M.a,{className:"game-card",style:{width:"18rem"},children:[Object(u.jsx)(M.a.Img,{variant:"top",src:r}),Object(u.jsxs)(M.a.Body,{children:[Object(u.jsx)(M.a.Title,{children:a}),Object(u.jsx)(M.a.Text,{children:c}),Object(u.jsx)(M.a.Text,{children:n}),Object(u.jsx)(M.a.Text,{children:s}),Object(u.jsxs)("div",{className:"card-button",children:[Object(u.jsx)(I.b,{to:"/game/".concat(t),children:Object(u.jsx)(f.a,{variant:"primary",children:"Lets Play!"})}),Object(u.jsx)(I.b,{to:"/game/details/".concat(t),children:Object(u.jsx)(f.a,{variant:"secondary",children:"Details"})})]})]})]})});a(113);var k=function(e){var t,a=Object(c.useState)({showModal:!1}),n=Object(l.a)(a,2),s=n[0],r=n[1],o=function(){r({showModal:!1})};return Object(u.jsxs)("div",{children:["ADMIN"===(null===(t=e.loggedUser)||void 0===t?void 0:t.role)&&Object(u.jsx)(f.a,{className:"button",onClick:function(){r({showModal:!0})},children:"Add game"}),Object(u.jsxs)(v.a,{show:s.showModal,backdrop:"static",onHide:o,children:[Object(u.jsx)(v.a.Header,{closeButton:!0,children:Object(u.jsx)(v.a.Title,{children:"New Game"})}),Object(u.jsx)(v.a.Body,{children:Object(u.jsx)(S,{getAllGames:e.getAllGames,closeModal:o})})]}),Object(u.jsx)(d.a,{children:e.games.map((function(e){return Object(u.jsx)(w.a,{children:Object(u.jsx)(L,Object(i.a)({},e))},e._id)}))})]})},R=(a(114),new x);var T=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),d=o[0],b=o[1],h=Object(c.useState)([]),O=Object(l.a)(h,2),m=O[0],g=O[1],x=function(){R.getAllGames().then((function(e){var t=e.data;s(t),g(t)})).catch((function(e){return console.log(e)}))};return Object(c.useEffect)((function(){x()}),[]),Object(c.useEffect)((function(){var e=n.filter((function(e){return e.title.toLowerCase().includes(d)}));g(e)}),[d]),Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("div",{className:"div-content",children:[Object(u.jsx)("h1",{children:"Game List"}),Object(u.jsx)(p,{className:"search",getSearch:function(e){b(e)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)(k,Object(i.a)({loggedUser:e.loggedUser,getAllGames:x,games:m},e))]})},A=new x,E=new y;var _=function(e){var t=Object(c.useState)({_id:"",title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:"",reviews:""}),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)({loading:!1}),o=Object(l.a)(r,2),j=o[0],d=o[1];Object(c.useEffect)((function(){s(e.game)}),[]);var b=n.title,h=n.description,O=n.genre,m=n.creators,g=(n.imageUrl,n.github),x=n.date,p=n.gameUrl,v=function(e){var t=e.currentTarget,a=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(u.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),A.editGame(n).then((function(t){e.setGame(t.data),e.closeModal()})).catch((function(e){return console.log(e)}))},children:[Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"title",children:[Object(u.jsx)(N.a.Label,{children:"Title"}),Object(u.jsx)(N.a.Control,{onChange:v,value:b,name:"title",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"description",children:[Object(u.jsx)(N.a.Label,{children:"Description"}),Object(u.jsx)(N.a.Control,{onChange:v,value:h,name:"description",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"genre",children:[Object(u.jsx)(N.a.Label,{children:"Genre"}),Object(u.jsxs)(N.a.Select,{"aria-label":"Default select example",onChange:v,name:"genre",type:"text",children:[Object(u.jsxs)("option",{children:["Actual genre: ",O]}),Object(u.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(u.jsx)("option",{value:"Fighting",children:"Fighting"}),Object(u.jsx)("option",{value:"Beat'em up",children:"Beat'em up"}),Object(u.jsx)("option",{value:"Shooter",children:"Shooter"}),Object(u.jsx)("option",{value:"Multiplayer",children:"Multiplayer"}),Object(u.jsx)("option",{value:"Sports",children:"Sports"}),Object(u.jsx)("option",{value:"Terror",children:"Terror"}),Object(u.jsx)("option",{value:"Racing",children:"Racing"}),Object(u.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"creators",children:[Object(u.jsx)(N.a.Label,{children:"Creators"}),Object(u.jsx)(N.a.Control,{onChange:v,value:m,name:"creators",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"github",children:[Object(u.jsx)(N.a.Label,{children:"Github"}),Object(u.jsx)(N.a.Control,{onChange:v,value:g,name:"github",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"date",children:[Object(u.jsx)(N.a.Label,{children:"Date"}),Object(u.jsx)(N.a.Control,{onChange:v,value:x,name:"date",type:"date"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"gameUrl",children:[Object(u.jsx)(N.a.Label,{children:"GameUrl"}),Object(u.jsx)(N.a.Control,{onChange:v,value:p,name:"gameUrl",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"imageUrl",children:[Object(u.jsx)(N.a.Label,{children:"Image archive"}),Object(u.jsx)(N.a.Control,{onChange:function(e){d({loading:!0});var t=new FormData;t.append("imageData",e.target.files[0]),E.uploadImage(t).then((function(e){s(Object(i.a)(Object(i.a)({},n),{},{imageUrl:e.data.cloudinary_url})),d({loading:!1})})).catch((function(e){return console.log(e)}))},name:"imageData",type:"file"})]}),j.loading&&Object(u.jsx)(C,{shape:"circle"}),Object(u.jsx)(f.a,{disabled:j.loading,variant:"primary",type:"submit",children:"Submit"})]})},B=(a(115),function e(){var t=this;Object(O.a)(this,e),this.getAllReviews=function(e){return t.app.get("/all/".concat(e))},this.createReview=function(e){return t.app.post("/new",e)},this.editReview=function(e){return t.app.put("/edit/".concat(e._id),e)},this.deleteReview=function(e){return t.app.delete("/delete/".concat(e))},this.app=g.a.create({baseURL:"".concat("https://irongames.onrender.com/api","/reviews"),withCredentials:!0})}),P=new B;var F=function(e){var t=Object(c.useState)({comment:"",rating:"",game:e.game._id}),a=Object(l.a)(t,2),n=a[0],s=a[1],r=n.comment,o=(n.rating,n.game,function(e){var t=e.currentTarget,a=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))});return Object(u.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),P.createReview(n).then((function(t){e.getAllReviews(),e.closeReviewModal()})).catch((function(e){return console.log(e)}))},children:[Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"comment",children:[Object(u.jsx)(N.a.Label,{children:"Comment"}),Object(u.jsx)(N.a.Control,{onChange:o,value:r,name:"comment",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"rating",children:[Object(u.jsx)(N.a.Label,{children:"Rating"}),Object(u.jsxs)(N.a.Select,{"aria-label":"Default select example",onChange:o,name:"rating",type:"text",children:[Object(u.jsx)("option",{children:"Rate this game"}),Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"})]})]}),Object(u.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})},H=(a(116),function(e){e._id;var t=e.comment,a=(e.game,e.rating),n=e.owner,s=(e.loggedUser,e.reviewDelete,Object(c.useState)({showReviewDeleteModal:!1})),r=Object(l.a)(s,2),i=r[0];r[1],i.showReviewDeleteModal;return Object(u.jsxs)(M.a,{className:"review-card",style:{width:"18rem"},children:[Object(u.jsx)(M.a.Img,{variant:"top",src:n.image}),Object(u.jsxs)(M.a.Body,{children:[Object(u.jsx)(M.a.Title,{children:n.username}),Object(u.jsx)(M.a.Text,{children:Object(u.jsx)("b",{children:a})}),Object(u.jsx)(M.a.Text,{children:t})]})]})});var J=function(e){return Object(u.jsx)(d.a,{children:e.reviews.map((function(t){return Object(u.jsx)(w.a,{children:Object(u.jsx)(H,Object(i.a)({loggedUser:e.loggedUser,reviewDelete:e.reviewDelete},t))},t._id)}))})},W=function e(){var t=this;Object(O.a)(this,e),this.getAllUsers=function(){return t.app.get("/all")},this.getUserDetails=function(e){return t.app.get("/profile/".concat(e))},this.getMyProfile=function(e){return t.app.get("/my-profile")},this.userEdit=function(e){return t.app.put("/edit/".concat(e._id),e)},this.userDelete=function(e){return t.app.delete("/delete/".concat(e))},this.favGame=function(e){return t.app.put("/favs/fav/".concat(e))},this.unfavGame=function(e){return t.app.put("/favs/unfav/".concat(e))},this.app=g.a.create({baseURL:"".concat("https://irongames.onrender.com/api","/user"),withCredentials:!0})},z=new x,V=new B,Y=new W;var q=function(e){var t,a,n,s=Object(c.useState)({_id:"",title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:"",reviews:""}),r=Object(l.a)(s,2),i=r[0],o=r[1],b=i.title,h=i.description,O=i.genre,m=i.creators,g=i.imageUrl,x=i.github,p=i.date,U=(i.gameUrl,Object(c.useState)([])),N=Object(l.a)(U,2),y=N[0],C=N[1],G=e.match.params.id,D=Object(c.useState)({showEditModal:!1}),S=Object(l.a)(D,2),M=S[0],L=S[1],k=M.showEditModal,R=function(){L({showEditModal:!1})},T=Object(c.useState)({showReviewModal:!1}),A=Object(l.a)(T,2),E=A[0],B=A[1],P=E.showReviewModal,H=function(){B({showReviewModal:!1})},W=Object(c.useState)({showGameDeleteModal:!1}),q=Object(l.a)(W,2),K=q[0],Q=q[1],X=K.showGameDeleteModal,Z=function(){Q({showGameDeleteModal:!1})},$=function(){V.getAllReviews(G).then((function(e){var t=e.data;C(t)})).catch((function(e){return console.log(e)}))};return Object(c.useEffect)((function(){z.getGameDetails(G).then((function(e){console.log(e.data);var t=e.data,a=t._id,c=t.title,n=t.description,s=t.genre,r=t.creators,i=t.imageUrl,l=t.github,j=t.date,d=t.gameUrl;o({_id:a,title:c,description:n,genre:s,creators:r,imageUrl:i,github:l,date:j,gameUrl:d})})).catch((function(e){return console.log(e)})),$()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)(j.a,{className:"container-margin",children:["ADMIN"===(null===(t=e.loggedUser)||void 0===t?void 0:t.role)&&Object(u.jsx)(f.a,{className:"buttons",onClick:function(){L({showEditModal:!0})},children:"Edit"}),Object(u.jsxs)(v.a,{show:k,backdrop:"static",onHide:R,children:[Object(u.jsx)(v.a.Header,{closeButton:!0,children:Object(u.jsx)(v.a.Title,{children:"Edit Game"})}),Object(u.jsx)(v.a.Body,{children:Object(u.jsx)(_,{game:i,closeModal:R,setGame:o})})]}),e.loggedUser&&Object(u.jsx)(f.a,{className:"buttons",onClick:function(){B({showReviewModal:!0})},children:"Add Review"}),Object(u.jsxs)(v.a,{show:P,backdrop:"static",onHide:H,children:[Object(u.jsx)(v.a.Header,{closeButton:!0,children:Object(u.jsx)(v.a.Title,{children:"New Review"})}),Object(u.jsx)(v.a.Body,{children:Object(u.jsx)(F,{game:i,closeReviewModal:H,getAllReviews:$})})]}),"ADMIN"===(null===(a=e.loggedUser)||void 0===a?void 0:a.role)&&Object(u.jsx)(f.a,{className:"buttons",onClick:function(){Q({showGameDeleteModal:!0})},children:"Delete Game"}),Object(u.jsxs)(v.a,{show:X,backdrop:"static",onHide:Z,children:[Object(u.jsx)(v.a.Header,{closeButton:!0,children:Object(u.jsx)(v.a.Title,{children:"This game will be deleted, are you sure?"})}),Object(u.jsx)(v.a.Body,{children:"ADMIN"===(null===(n=e.loggedUser)||void 0===n?void 0:n.role)&&Object(u.jsxs)(I.b,{to:"/game-list",onClick:function(){z.deleteGame(G).then((function(e){return null})).catch((function(e){return console.log(e)}))},closeReviewModal:Z,children:[" ",Object(u.jsx)(f.a,{children:"Confirm"})]})})]}),e.loggedUser&&(e.loggedUser.favs.includes(i._id)?Object(u.jsx)(f.a,{className:"buttons",onClick:function(){e.loggedUser.favs.includes(i._id)&&Y.unfavGame(G).then((function(t){var a=t.data;e.storeUser(a)})).catch((function(e){return console.log(e)}))},children:"Delete from Favorites"}):Object(u.jsx)(f.a,{className:"buttons",onClick:function(){e.loggedUser.favs.includes(i._id)||Y.favGame(G).then((function(t){var a=t.data;e.storeUser(a)})).catch((function(e){return console.log(e)}))},children:"Add to Favorites"}))]}),Object(u.jsx)(j.a,{className:"padding",children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(w.a,{md:6,style:{overflow:"hidden"},children:Object(u.jsxs)("article",{children:[Object(u.jsx)("h2",{children:b}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:h}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Genre:"})," ",O]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Made by:"})," ",m]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Published on:"})," ",new Date(p).toDateString()]}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{className:"github",href:x,target:"_blank",rel:"noreferrer",children:Object(u.jsx)("b",{children:"Github"})})}),Object(u.jsx)(I.b,{to:"/game/".concat(i._id),children:Object(u.jsx)(f.a,{variant:"primary",children:"Play Now!"})})]})]})}),Object(u.jsx)(w.a,{className:"padding-img",md:4,children:Object(u.jsx)("img",{className:"game-details-img",src:g,alt:b})})]})}),Object(u.jsxs)(j.a,{className:"reviews",children:[Object(u.jsx)("h2",{children:"Reviews"}),Object(u.jsx)("hr",{}),Object(u.jsx)(J,{reviews:y,reviewDelete:function(){V.deleteReview(G).then((function(e){return null})).catch((function(e){return console.log(e)}))},loggedUser:e.loggedUser})]})]})},K=a(129),Q=a(131),X=function e(){var t=this;Object(O.a)(this,e),this.signup=function(e,a,c){return t.app.post("/signup",{username:e,password:a,email:c})},this.login=function(e,a){return t.app.post("/login",{username:e,password:a})},this.logout=function(){return t.app.get("/logout")},this.isloggedin=function(){return t.app.get("/isloggedin")},this.app=g.a.create({baseURL:"".concat("https://irongames.onrender.com/api","/auth"),withCredentials:!0})},Z=new X,$=function(e){var t=e.loggedUser,a=e.storeUser;return Object(u.jsx)(K.a,{className:"nav",children:Object(u.jsx)(j.a,{children:Object(u.jsxs)(d.a,{className:"h-100 align-items-center",children:[Object(u.jsx)(w.a,{children:Object(u.jsxs)("div",{className:"title-logo h-100",children:[Object(u.jsx)("img",{className:"logo",src:b,alt:"logo"}),Object(u.jsx)(Q.a.Brand,{className:"title",as:I.b,to:"/",children:"IronGames"})]})}),Object(u.jsx)(w.a,{children:Object(u.jsxs)("div",{className:"d-flex h-100 justify-content-end",children:[Object(u.jsx)(K.a.Link,{className:"link",as:I.b,to:"/",children:"Home"}),Object(u.jsx)(K.a.Link,{className:"link",as:I.b,to:"/game-list",children:"Videogames"}),Object(u.jsx)(K.a.Link,{className:"link",as:I.b,to:"/user-list",children:"Users"}),t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(K.a.Link,{className:"link",as:I.b,to:"/my-profile",children:"Profile"}),Object(u.jsx)(K.a.Link,{className:"link",as:I.b,to:"/",onClick:function(){Z.logout().then((function(e){return a(null)})).catch((function(e){return console.log(e)}))},children:"Logout"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(K.a.Link,{className:"link",as:I.b,to:"/signup",children:"Signup"}),Object(u.jsx)(K.a.Link,{className:"link",as:I.b,to:"/login",children:"Login"})]})]})})]})})})},ee=(a(119),new X);var te=function(e){var t=Object(c.useState)({username:"",password:"",email:""}),a=Object(l.a)(t,2),n=a[0],s=a[1],r=n.username,o=n.password,b=n.email,h=function(e){var t=e.currentTarget,a=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(u.jsx)(j.a,{className:"signup",children:Object(u.jsx)(d.a,{children:Object(u.jsxs)(w.a,{md:{span:4,offset:4},children:[Object(u.jsx)("h2",{children:"Signup"}),Object(u.jsx)("hr",{}),Object(u.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),ee.signup(r,o,b).then((function(t){e.storeUser(t.data)})).catch((function(e){return console.log(e.response.data.message)}))},children:[Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"username",children:[Object(u.jsx)(N.a.Label,{children:"Username"}),Object(u.jsx)(N.a.Control,{onChange:h,value:r,name:"username",type:"text",placeholder:"Username"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"email",children:[Object(u.jsx)(N.a.Label,{children:"Email"}),Object(u.jsx)(N.a.Control,{onChange:h,value:b,name:"email",type:"text",placeholder:"Email"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"password",children:[Object(u.jsx)(N.a.Label,{children:"Password"}),Object(u.jsx)(N.a.Control,{onChange:h,value:o,name:"password",type:"password",placeholder:"Password"})]}),Object(u.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})},ae=(a(120),new X);var ce=function(e){var t=Object(c.useState)({username:"",password:""}),a=Object(l.a)(t,2),n=a[0],s=a[1],r=function(e){var t=e.currentTarget,a=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(u.jsx)(j.a,{className:"login",children:Object(u.jsx)(d.a,{children:Object(u.jsxs)(w.a,{md:{span:4,offset:4},children:[Object(u.jsx)("h2",{children:"Login"}),Object(u.jsx)("hr",{}),Object(u.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),ae.login(n.username,n.password).then((function(t){e.storeUser(t.data),e.history.push("/game-list")})).catch((function(e){return console.log(e.response.data.message)}))},children:[Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"username",children:[Object(u.jsx)(N.a.Label,{children:"Username"}),Object(u.jsx)(N.a.Control,{onChange:r,value:n.username,name:"username",type:"text",placeholder:"Username"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"password",children:[Object(u.jsx)(N.a.Label,{children:"Password"}),Object(u.jsx)(N.a.Control,{onChange:r,value:n.password,name:"password",type:"password",placeholder:"Password"})]}),Object(u.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})},ne=(a(121),function(e){var t=e._id,a=e.username,c=e.email,n=e.role,s=(e.favs,e.image),r=e.loggedUser;return Object(u.jsxs)(M.a,{className:"user-card",style:{width:"18rem"},children:[Object(u.jsx)(M.a.Img,{variant:"top",src:s}),Object(u.jsxs)(M.a.Body,{children:[Object(u.jsxs)(M.a.Title,{children:[" ",a]}),"ADMIN"===(null===r||void 0===r?void 0:r.role)&&Object(u.jsx)(M.a.Text,{children:c}),Object(u.jsx)(M.a.Text,{children:n}),Object(u.jsx)("div",{className:"user-card-button2",children:Object(u.jsx)(I.b,{to:"/profile/".concat(t),children:Object(u.jsx)(f.a,{variant:"primary",children:"Profile"})})})]})]})});var se=function(e){var t=e.users,a=e.loggedUser;return Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{children:t.map((function(e){return Object(u.jsx)(w.a,{children:Object(u.jsx)(ne,Object(i.a)({loggedUser:a},e))},e._id)}))})})},re=(a(122),new W);var ie=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),o=i[0],d=i[1],b=Object(c.useState)([]),h=Object(l.a)(b,2),O=h[0],m=h[1],g=function(){re.getAllUsers().then((function(e){var t=e.data;s(t),m(t)})).catch((function(e){return console.log(e)}))};return Object(c.useEffect)((function(){g()}),[]),Object(c.useEffect)((function(){var e=n.filter((function(e){return e.username.toLowerCase().includes(o)}));m(e)}),[o]),Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("div",{className:"div-user-content",children:[Object(u.jsx)("h1",{children:"User List"}),Object(u.jsx)(p,{getSearch:function(e){d(e)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)(se,{getAllUsers:g,users:O,loggedUser:e.loggedUser})]})},le=(a(73),new W);var oe=function(e){var t,a,n=Object(c.useState)({username:"",password:"",email:"",image:"",favs:[]}),s=Object(l.a)(n,2),r=s[0],i=s[1],o=r.username,b=(r.password,r.email),h=r.image,O=r.favs,m=e.match.params.id;Object(c.useEffect)((function(){le.getUserDetails(m).then((function(e){var t=e.data,a=t.username,c=t.email,n=t.image,s=t.favs;i({username:a,email:c,image:n,favs:s})})).catch((function(e){return console.log(e)}))}),[]);var g=Object(c.useState)({showUserDeleteModal:!1}),x=Object(l.a)(g,2),p=x[0],U=x[1],N=p.showUserDeleteModal,y=function(){U({showUserDeleteModal:!1})};return Object(u.jsxs)("div",{children:[Object(u.jsxs)(j.a,{children:["ADMIN"===(null===(t=e.loggedUser)||void 0===t?void 0:t.role)&&Object(u.jsx)(f.a,{className:"buttons",onClick:function(){U({showUserDeleteModal:!0})},children:"Delete this account"}),Object(u.jsxs)(v.a,{show:N,backdrop:"static",onHide:y,children:[Object(u.jsx)(v.a.Header,{closeButton:!0,children:Object(u.jsx)(v.a.Title,{children:"This account will be deleted, are you sure?"})}),Object(u.jsx)(v.a.Body,{children:e.loggedUser&&Object(u.jsx)(I.b,{as:I.b,to:"/user-list",onClick:function(){le.userDelete(m).then((function(t){return e.storeUser(null)})).catch((function(e){return console.log(e)}))},closeReviewModal:y,children:Object(u.jsx)(f.a,{children:"Confirm"})})})]})]}),Object(u.jsx)(j.a,{className:"padding",children:Object(u.jsxs)(d.a,{children:[Object(u.jsxs)(w.a,{md:6,style:{overflow:"hidden"},children:[Object(u.jsx)("h1",{children:"Profile details"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("article",{children:[Object(u.jsx)("h3",{children:o}),Object(u.jsxs)("div",{children:["ADMIN"===(null===(a=e.loggedUser)||void 0===a?void 0:a.role)&&Object(u.jsx)("p",{children:b}),Object(u.jsx)("hr",{}),Object(u.jsx)("h4",{children:"Favorite games"}),Object(u.jsx)("p",{children:O.map((function(e){return Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:e.title})})}))})]})]})]}),Object(u.jsx)(w.a,{className:"padding-img",md:4,children:Object(u.jsx)("img",{className:"profile-img",src:h,alt:"avatar"})})]})})]})},je=new W,de=new y;var be=function(e){var t=Object(c.useState)({_id:"",username:"",password:"",email:"",image:"",favs:""}),a=Object(l.a)(t,2),n=a[0],s=a[1],r=(n.username,n.password),o=n.email,j=(n.image,n.favs,Object(c.useState)({loading:!1})),d=Object(l.a)(j,2),b=d[0],h=d[1];Object(c.useEffect)((function(){s(e.profile)}),[]);var O=function(e){var t=e.currentTarget,a=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(u.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),je.userEdit(n).then((function(t){e.setProfile(t.data),e.closeModal()})).catch((function(e){return console.log(e)}))},children:[Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"password",children:[Object(u.jsx)(N.a.Label,{children:"Password"}),Object(u.jsx)(N.a.Control,{onChange:O,value:r,name:"password",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"email",children:[Object(u.jsx)(N.a.Label,{children:"Email"}),Object(u.jsx)(N.a.Control,{onChange:O,value:o,name:"email",type:"text"})]}),Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"image",children:[Object(u.jsx)(N.a.Label,{children:"Image archive"}),Object(u.jsx)(N.a.Control,{onChange:function(e){h({loading:!0});var t=new FormData;t.append("imageData",e.target.files[0]),de.uploadImage(t).then((function(e){s(Object(i.a)(Object(i.a)({},n),{},{image:e.data.cloudinary_url})),h({loading:!1})})).catch((function(e){return console.log(e)}))},name:"imageData",type:"file"})]}),b.loading&&Object(u.jsx)(C,{shape:"circle"}),Object(u.jsx)(f.a,{disabled:b.loading,variant:"primary",type:"submit",children:"Submit"})]})},ue=new W;var he=function(e){var t=Object(c.useState)({_id:"",username:"",password:"",email:"",image:"",favs:[]}),a=Object(l.a)(t,2),n=a[0],s=a[1],r=e.match.params.id,i=n.username,o=(n.password,n.email),b=n.image,h=n.favs,O=function(){ue.getMyProfile(r).then((function(e){var t=e.data,a=t.username,c=t.email,n=t.image,r=t._id,i=t.favs;s({username:a,email:c,image:n,_id:r,favs:i})})).catch((function(e){return console.log(e)}))};Object(c.useEffect)((function(){O()}),[]);var m=Object(c.useState)({showEditModal:!1}),g=Object(l.a)(m,2),x=g[0],p=g[1],U=x.showEditModal,N=function(){p({showEditModal:!1})},y=Object(c.useState)({showUserDeleteModal:!1}),C=Object(l.a)(y,2),G=C[0],D=C[1],S=G.showUserDeleteModal,M=function(){D({showUserDeleteModal:!1})};return Object(u.jsxs)("div",{children:[Object(u.jsxs)(j.a,{children:[Object(u.jsx)(f.a,{className:"buttons",onClick:function(){p({showEditModal:!0})},children:"Edit"}),Object(u.jsxs)(v.a,{show:U,backdrop:"static",onHide:N,children:[Object(u.jsx)(v.a.Header,{closeButton:!0,children:Object(u.jsx)(v.a.Title,{children:"Edit Profile"})}),Object(u.jsx)(v.a.Body,{children:Object(u.jsx)(be,{loggedUser:e.loggedUser,profile:n,closeModal:N,setProfile:s,getMyProfile:O})})]}),Object(u.jsx)(f.a,{className:"buttons",onClick:function(){D({showUserDeleteModal:!0})},children:"Delete my account"}),Object(u.jsxs)(v.a,{show:S,backdrop:"static",onHide:M,children:[Object(u.jsx)(v.a.Header,{closeButton:!0,children:Object(u.jsx)(v.a.Title,{children:"Your account will be deleted, are you sure?"})}),Object(u.jsx)(v.a.Body,{children:e.loggedUser&&Object(u.jsxs)(I.b,{as:I.b,to:"/",onClick:function(){ue.userDelete(e.loggedUser._id).then((function(e){return null})).catch((function(e){return console.log(e)}))},closeReviewModal:M,children:[" ",Object(u.jsx)(f.a,{children:"Confirm"})," "]})})]})]}),Object(u.jsx)(j.a,{className:"padding",children:Object(u.jsxs)(d.a,{children:[Object(u.jsxs)(w.a,{md:6,style:{overflow:"hidden"},children:[Object(u.jsx)("h1",{children:"My Profile"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("article",{children:[Object(u.jsx)("h3",{children:i}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:o}),Object(u.jsx)("hr",{}),Object(u.jsx)("h4",{children:"Favorite games"}),Object(u.jsx)("p",{children:h.map((function(e){return Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:e.title})})}))})]})]})]}),Object(u.jsx)(w.a,{className:"padding-img",md:4,children:Object(u.jsx)("img",{className:"profile-img",src:b,alt:"avatar"})})]})})]})},Oe=(a(123),new x);var me=function(e){var t=Object(c.useState)({title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:"",reviews:""}),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){var t=e.match.params.id;Oe.getOneGame(t).then((function(e){var t=e.data,a=t.title,c=t.description,n=t.genre,r=t.creators,i=t.imageUrl,l=t.github,o=t.date,j=t.gameUrl;s({title:a,description:c,genre:n,creators:r,imageUrl:i,github:l,date:o,gameUrl:j})})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)("div",{className:"game-wrap",children:Object(u.jsx)("iframe",{className:"game-frame",title:n.title,src:n.gameUrl})})},ge=a(3),xe=["component"];var pe=function(e){var t=e.component,a=Object(ge.a)(e,xe),c=localStorage.getItem("isAuthenticated");return console.log("this",c),Object(u.jsx)(o.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return c?Object(u.jsx)(t,Object(i.a)({},e)):Object(u.jsx)(o.a,{to:"/login"})}}))},fe=new X;var ve=function(){var e=Object(c.useState)({loggedUser:void 0}),t=Object(l.a)(e,2),a=t[0],n=t[1],s=a.loggedUser;Object(c.useEffect)((function(){fe.isloggedin().then((function(e){return r(e.data)})).catch((function(e){return r(null)}))}),[]);var r=function(e){n(Object(i.a)(Object(i.a)({},a),{},{loggedUser:e}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)($,{storeUser:r,loggedUser:s}),Object(u.jsx)("main",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(h,{})}}),Object(u.jsx)(o.b,{path:"/game-list",exact:!0,render:function(){return Object(u.jsx)(T,{loggedUser:s})}}),Object(u.jsx)(o.b,{path:"/game/details/:id",render:function(e){return Object(u.jsx)(q,Object(i.a)({loggedUser:s,storeUser:r},e))}}),Object(u.jsx)(o.b,{path:"/game/:id",render:function(e){return Object(u.jsx)(me,Object(i.a)({},e))}}),Object(u.jsx)(o.b,{path:"/user-list",render:function(e){return Object(u.jsx)(ie,Object(i.a)({loggedUser:s},e))}}),Object(u.jsx)(o.b,{path:"/profile/:id",render:function(e){return Object(u.jsx)(oe,Object(i.a)(Object(i.a)({},e),{},{loggedUser:s}))}}),Object(u.jsx)(o.b,{path:"/my-profile",render:function(e){return Object(u.jsx)(he,Object(i.a)({loggedUser:s,storeUser:r},e))}}),s?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.b,{path:"/signup",render:function(e){return Object(u.jsx)(te,Object(i.a)(Object(i.a)({},e),{},{storeUser:r}))}}),Object(u.jsx)(o.b,{path:"/login",render:function(e){return Object(u.jsx)(ce,Object(i.a)(Object(i.a)({},e),{},{storeUser:r}))}}),Object(u.jsx)(pe,{exact:!0,path:"/logout"})]})]})})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(I.a,{children:Object(u.jsx)(ve,{})})}),document.getElementById("root"))},73:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.0573e4d4.chunk.js.map