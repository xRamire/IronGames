(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},109:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(27),s=a.n(r),i=(a(83),a(2)),l=a(5),o=a(11),j=(a(84),a(126)),d=a.p+"static/media/ironhack-1.06a8361a.svg",b=(a(85),a(0)),u=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"main-background",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)("img",{className:"main-logo",src:d,alt:"logo"}),Object(b.jsxs)("div",{className:"main-text",children:[Object(b.jsx)("h1",{children:"Welcome to IronGames"}),Object(b.jsx)("p",{children:"Discover what ironhackers made in the third week of IronHack Web-Dev course!"})]})]})})})},h=a(16),O=a(25),m=a.n(O),g=function e(){var t=this;Object(h.a)(this,e),this.getAllGames=function(){return t.app.get("/all")},this.getOneGame=function(e){return t.app.get("/game/".concat(e))},this.getGameDetails=function(e){return t.app.get("/game/details/".concat(e))},this.createGame=function(e){return t.app.post("/new",e)},this.editGame=function(e){return t.app.put("/edit/".concat(e._id),e)},this.deleteGame=function(e){return t.app.delete("/delete/".concat(e))},this.app=m.a.create({baseURL:"".concat("https://irongames-backend.onrender.com/api","/games"),withCredentials:!0})};a(105);var x=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"search",children:Object(b.jsx)("b",{children:"Search:"})}),Object(b.jsx)("input",{className:"search-bar",onChange:function(t){return function(t){var a=t.currentTarget.value;e.getSearch(a.toLowerCase())}(t)},name:"name",type:"text"})]})},p=a(127),f=a(132),v=a(128),w=a(74),U=a(7),N=a(130),y=function e(){var t=this;Object(h.a)(this,e),this.uploadImage=function(e){return t.app.post("/image",e)},this.app=m.a.create({baseURL:"".concat("https://irongames-backend.onrender.com/api","/upload")})},C=(a(106),function(e){var t=e.size,a=e.shape,c={width:"lg"===t?60:30,height:"lg"===t?60:30};return Object(b.jsx)("div",{className:"spinner ".concat(a),style:c})}),G=new g,D=new y;var S=function(e){var t=Object(c.useState)({title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:""}),a=Object(l.a)(t,2),n=a[0],r=a[1],s=n.title,o=n.description,j=(n.genre,n.creators),d=(n.imageUrl,n.github),u=n.date,h=n.gameUrl,O=Object(c.useState)({loading:!1}),m=Object(l.a)(O,2),g=m[0],x=m[1],f=function(e){var t=e.currentTarget,a=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(b.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),G.createGame(n).then((function(t){e.closeModal(),e.getAllGames()})).catch((function(e){return console.log(e)}))},children:[Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"title",children:[Object(b.jsx)(N.a.Label,{children:"Title"}),Object(b.jsx)(N.a.Control,{onChange:f,value:s,name:"title",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"description",children:[Object(b.jsx)(N.a.Label,{children:"Description"}),Object(b.jsx)(N.a.Control,{onChange:f,value:o,name:"description",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"genre",children:[Object(b.jsx)(N.a.Label,{children:"Genre"}),Object(b.jsxs)(N.a.Select,{"aria-label":"Default select example",onChange:f,name:"genre",type:"text",children:[Object(b.jsx)("option",{children:"Open this select menu"}),Object(b.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(b.jsx)("option",{value:"Fighting",children:"Fighting"}),Object(b.jsx)("option",{value:"Beat'em up",children:"Beat'em up"}),Object(b.jsx)("option",{value:"Shooter",children:"Shooter"}),Object(b.jsx)("option",{value:"Multiplayer",children:"Multiplayer"}),Object(b.jsx)("option",{value:"Sports",children:"Sports"}),Object(b.jsx)("option",{value:"Terror",children:"Terror"}),Object(b.jsx)("option",{value:"Racing",children:"Racing"}),Object(b.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"creators",children:[Object(b.jsx)(N.a.Label,{children:"Creators"}),Object(b.jsx)(N.a.Control,{onChange:f,value:j,name:"creators",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"github",children:[Object(b.jsx)(N.a.Label,{children:"Github"}),Object(b.jsx)(N.a.Control,{onChange:f,value:d,name:"github",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"date",children:[Object(b.jsx)(N.a.Label,{children:"Date"}),Object(b.jsx)(N.a.Control,{onChange:f,value:u,name:"date",type:"date"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"gameUrl",children:[Object(b.jsx)(N.a.Label,{children:"GameUrl"}),Object(b.jsx)(N.a.Control,{onChange:f,value:h,name:"gameUrl",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"imageUrl",children:[Object(b.jsx)(N.a.Label,{children:"Image archive"}),Object(b.jsx)(N.a.Control,{onChange:function(e){x({loading:!0});var t=new FormData;t.append("imageData",e.target.files[0]),D.uploadImage(t).then((function(e){r(Object(i.a)(Object(i.a)({},n),{},{imageUrl:e.data.cloudinary_url})),x({loading:!1})})).catch((function(e){return console.log(e)}))},name:"imageData",type:"file"})]}),g.loading&&Object(b.jsx)(C,{shape:"circle"}),Object(b.jsx)(p.a,{disabled:g.loading,variant:"primary",type:"submit",children:"Submit"})]})},M=a(133),I=a(8),k=(a(109),function(e){var t=e._id,a=e.title,c=e.description,n=e.genre,r=e.creators,s=e.imageUrl;e.github,e.date,e.gameUrl,e.reviews;return Object(b.jsxs)(M.a,{className:"game-card",style:{width:"18rem"},children:[Object(b.jsx)(M.a.Img,{variant:"top",src:s}),Object(b.jsxs)(M.a.Body,{children:[Object(b.jsx)(M.a.Title,{children:a}),Object(b.jsx)(M.a.Text,{children:c}),Object(b.jsx)(M.a.Text,{children:n}),Object(b.jsx)(M.a.Text,{children:r}),Object(b.jsxs)("div",{className:"card-button",children:[Object(b.jsx)(I.b,{to:"/game/".concat(t),children:Object(b.jsx)(p.a,{variant:"primary",children:"Lets Play!"})}),Object(b.jsx)(I.b,{to:"/game/details/".concat(t),children:Object(b.jsx)(p.a,{variant:"secondary",children:"Details"})})]})]})]})});a(112);var L=function(e){var t,a=Object(c.useState)({showModal:!1}),n=Object(l.a)(a,2),r=n[0],s=n[1],o=function(){s({showModal:!1})};return Object(b.jsxs)("div",{children:["ADMIN"===(null===(t=e.loggedUser)||void 0===t?void 0:t.role)&&Object(b.jsx)(p.a,{className:"button",onClick:function(){s({showModal:!0})},children:"Add game"}),Object(b.jsxs)(f.a,{show:r.showModal,backdrop:"static",onHide:o,children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:Object(b.jsx)(f.a.Title,{children:"New Game"})}),Object(b.jsx)(f.a.Body,{children:Object(b.jsx)(S,{getAllGames:e.getAllGames,closeModal:o})})]}),Object(b.jsx)(v.a,{children:e.games.map((function(e){return Object(b.jsx)(w.a,{children:Object(b.jsx)(k,Object(i.a)({},e))},e._id)}))})]})},R=(a(113),new g);var T=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),d=o[0],u=o[1],h=Object(c.useState)([]),O=Object(l.a)(h,2),m=O[0],g=O[1],p=function(){R.getAllGames().then((function(e){var t=e.data;r(t),g(t)})).catch((function(e){return console.log(e)}))};return Object(c.useEffect)((function(){p()}),[]),Object(c.useEffect)((function(){var e=n.filter((function(e){return e.title.toLowerCase().includes(d)}));g(e)}),[d]),Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{className:"div-content",children:[Object(b.jsx)("h1",{children:"Game List"}),Object(b.jsx)(x,{className:"search",getSearch:function(e){u(e)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)(L,Object(i.a)({loggedUser:e.loggedUser,getAllGames:p,games:m},e))]})},A=new g,E=new y;var _=function(e){var t=Object(c.useState)({_id:"",title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:"",reviews:""}),a=Object(l.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)({loading:!1}),o=Object(l.a)(s,2),j=o[0],d=o[1];Object(c.useEffect)((function(){r(e.game)}),[]);var u=n.title,h=n.description,O=n.genre,m=n.creators,g=(n.imageUrl,n.github),x=n.date,f=n.gameUrl,v=function(e){var t=e.currentTarget,a=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(b.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),A.editGame(n).then((function(t){e.setGame(t.data),e.closeModal()})).catch((function(e){return console.log(e)}))},children:[Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"title",children:[Object(b.jsx)(N.a.Label,{children:"Title"}),Object(b.jsx)(N.a.Control,{onChange:v,value:u,name:"title",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"description",children:[Object(b.jsx)(N.a.Label,{children:"Description"}),Object(b.jsx)(N.a.Control,{onChange:v,value:h,name:"description",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"genre",children:[Object(b.jsx)(N.a.Label,{children:"Genre"}),Object(b.jsxs)(N.a.Select,{"aria-label":"Default select example",onChange:v,name:"genre",type:"text",children:[Object(b.jsxs)("option",{children:["Actual genre: ",O]}),Object(b.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(b.jsx)("option",{value:"Fighting",children:"Fighting"}),Object(b.jsx)("option",{value:"Beat'em up",children:"Beat'em up"}),Object(b.jsx)("option",{value:"Shooter",children:"Shooter"}),Object(b.jsx)("option",{value:"Multiplayer",children:"Multiplayer"}),Object(b.jsx)("option",{value:"Sports",children:"Sports"}),Object(b.jsx)("option",{value:"Terror",children:"Terror"}),Object(b.jsx)("option",{value:"Racing",children:"Racing"}),Object(b.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"creators",children:[Object(b.jsx)(N.a.Label,{children:"Creators"}),Object(b.jsx)(N.a.Control,{onChange:v,value:m,name:"creators",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"github",children:[Object(b.jsx)(N.a.Label,{children:"Github"}),Object(b.jsx)(N.a.Control,{onChange:v,value:g,name:"github",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"date",children:[Object(b.jsx)(N.a.Label,{children:"Date"}),Object(b.jsx)(N.a.Control,{onChange:v,value:x,name:"date",type:"date"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"gameUrl",children:[Object(b.jsx)(N.a.Label,{children:"GameUrl"}),Object(b.jsx)(N.a.Control,{onChange:v,value:f,name:"gameUrl",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"imageUrl",children:[Object(b.jsx)(N.a.Label,{children:"Image archive"}),Object(b.jsx)(N.a.Control,{onChange:function(e){d({loading:!0});var t=new FormData;t.append("imageData",e.target.files[0]),E.uploadImage(t).then((function(e){r(Object(i.a)(Object(i.a)({},n),{},{imageUrl:e.data.cloudinary_url})),d({loading:!1})})).catch((function(e){return console.log(e)}))},name:"imageData",type:"file"})]}),j.loading&&Object(b.jsx)(C,{shape:"circle"}),Object(b.jsx)(p.a,{disabled:j.loading,variant:"primary",type:"submit",children:"Submit"})]})},B=(a(114),function e(){var t=this;Object(h.a)(this,e),this.getAllReviews=function(e){return t.app.get("/all/".concat(e))},this.createReview=function(e){return t.app.post("/new",e)},this.editReview=function(e){return t.app.put("/edit/".concat(e._id),e)},this.deleteReview=function(e){return t.app.delete("/delete/".concat(e))},this.app=m.a.create({baseURL:"".concat("https://irongames-backend.onrender.com/api","/reviews"),withCredentials:!0})}),P=new B;var F=function(e){var t=Object(c.useState)({comment:"",rating:"",game:e.game._id}),a=Object(l.a)(t,2),n=a[0],r=a[1],s=n.comment,o=(n.rating,n.game,function(e){var t=e.currentTarget,a=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))});return Object(b.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),P.createReview(n).then((function(t){e.getAllReviews(),e.closeReviewModal()})).catch((function(e){return console.log(e)}))},children:[Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"comment",children:[Object(b.jsx)(N.a.Label,{children:"Comment"}),Object(b.jsx)(N.a.Control,{onChange:o,value:s,name:"comment",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"rating",children:[Object(b.jsx)(N.a.Label,{children:"Rating"}),Object(b.jsxs)(N.a.Select,{"aria-label":"Default select example",onChange:o,name:"rating",type:"text",children:[Object(b.jsx)("option",{children:"Rate this game"}),Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"})]})]}),Object(b.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})},H=(a(115),function(e){e._id;var t=e.comment,a=(e.game,e.rating),n=e.owner,r=(e.loggedUser,e.reviewDelete,Object(c.useState)({showReviewDeleteModal:!1})),s=Object(l.a)(r,2),i=s[0];s[1],i.showReviewDeleteModal;return Object(b.jsxs)(M.a,{className:"review-card",style:{width:"18rem"},children:[Object(b.jsx)(M.a.Img,{variant:"top",src:n.image}),Object(b.jsxs)(M.a.Body,{children:[Object(b.jsx)(M.a.Title,{children:n.username}),Object(b.jsx)(M.a.Text,{children:Object(b.jsx)("b",{children:a})}),Object(b.jsx)(M.a.Text,{children:t})]})]})});var J=function(e){return Object(b.jsx)(v.a,{children:e.reviews.map((function(t){return Object(b.jsx)(w.a,{children:Object(b.jsx)(H,Object(i.a)({loggedUser:e.loggedUser,reviewDelete:e.reviewDelete},t))},t._id)}))})},W=function e(){var t=this;Object(h.a)(this,e),this.getAllUsers=function(){return t.app.get("/all")},this.getUserDetails=function(e){return t.app.get("/profile/".concat(e))},this.getMyProfile=function(e){return t.app.get("/my-profile")},this.userEdit=function(e){return t.app.put("/edit/".concat(e._id),e)},this.userDelete=function(e){return t.app.delete("/delete/".concat(e))},this.favGame=function(e){return t.app.put("/favs/fav/".concat(e))},this.unfavGame=function(e){return t.app.put("/favs/unfav/".concat(e))},this.app=m.a.create({baseURL:"".concat("https://irongames-backend.onrender.com/api","/user"),withCredentials:!0})},z=new g,V=new B,Y=new W;var q=function(e){var t,a,n,r=Object(c.useState)({_id:"",title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:"",reviews:""}),s=Object(l.a)(r,2),i=s[0],o=s[1],d=i.title,u=i.description,h=i.genre,O=i.creators,m=i.imageUrl,g=i.github,x=i.date,U=(i.gameUrl,Object(c.useState)([])),N=Object(l.a)(U,2),y=N[0],C=N[1],G=e.match.params.id,D=Object(c.useState)({showEditModal:!1}),S=Object(l.a)(D,2),M=S[0],k=S[1],L=M.showEditModal,R=function(){k({showEditModal:!1})},T=Object(c.useState)({showReviewModal:!1}),A=Object(l.a)(T,2),E=A[0],B=A[1],P=E.showReviewModal,H=function(){B({showReviewModal:!1})},W=Object(c.useState)({showGameDeleteModal:!1}),q=Object(l.a)(W,2),K=q[0],Q=q[1],X=K.showGameDeleteModal,Z=function(){Q({showGameDeleteModal:!1})},$=function(){V.getAllReviews(G).then((function(e){var t=e.data;C(t)})).catch((function(e){return console.log(e)}))};return Object(c.useEffect)((function(){z.getGameDetails(G).then((function(e){console.log(e.data);var t=e.data,a=t._id,c=t.title,n=t.description,r=t.genre,s=t.creators,i=t.imageUrl,l=t.github,j=t.date,d=t.gameUrl;o({_id:a,title:c,description:n,genre:r,creators:s,imageUrl:i,github:l,date:j,gameUrl:d})})).catch((function(e){return console.log(e)})),$()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)(j.a,{className:"container-margin",children:["ADMIN"===(null===(t=e.loggedUser)||void 0===t?void 0:t.role)&&Object(b.jsx)(p.a,{className:"buttons",onClick:function(){k({showEditModal:!0})},children:"Edit"}),Object(b.jsxs)(f.a,{show:L,backdrop:"static",onHide:R,children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:Object(b.jsx)(f.a.Title,{children:"Edit Game"})}),Object(b.jsx)(f.a.Body,{children:Object(b.jsx)(_,{game:i,closeModal:R,setGame:o})})]}),e.loggedUser&&Object(b.jsx)(p.a,{className:"buttons",onClick:function(){B({showReviewModal:!0})},children:"Add Review"}),Object(b.jsxs)(f.a,{show:P,backdrop:"static",onHide:H,children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:Object(b.jsx)(f.a.Title,{children:"New Review"})}),Object(b.jsx)(f.a.Body,{children:Object(b.jsx)(F,{game:i,closeReviewModal:H,getAllReviews:$})})]}),"ADMIN"===(null===(a=e.loggedUser)||void 0===a?void 0:a.role)&&Object(b.jsx)(p.a,{className:"buttons",onClick:function(){Q({showGameDeleteModal:!0})},children:"Delete Game"}),Object(b.jsxs)(f.a,{show:X,backdrop:"static",onHide:Z,children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:Object(b.jsx)(f.a.Title,{children:"This game will be deleted, are you sure?"})}),Object(b.jsx)(f.a.Body,{children:"ADMIN"===(null===(n=e.loggedUser)||void 0===n?void 0:n.role)&&Object(b.jsxs)(I.b,{to:"/game-list",onClick:function(){z.deleteGame(G).then((function(e){return null})).catch((function(e){return console.log(e)}))},closeReviewModal:Z,children:[" ",Object(b.jsx)(p.a,{children:"Confirm"})]})})]}),e.loggedUser&&(e.loggedUser.favs.includes(i._id)?Object(b.jsx)(p.a,{className:"buttons",onClick:function(){e.loggedUser.favs.includes(i._id)&&Y.unfavGame(G).then((function(t){var a=t.data;e.storeUser(a)})).catch((function(e){return console.log(e)}))},children:"Delete from Favorites"}):Object(b.jsx)(p.a,{className:"buttons",onClick:function(){e.loggedUser.favs.includes(i._id)||Y.favGame(G).then((function(t){var a=t.data;e.storeUser(a)})).catch((function(e){return console.log(e)}))},children:"Add to Favorites"}))]}),Object(b.jsx)(j.a,{className:"padding",children:Object(b.jsxs)(v.a,{children:[Object(b.jsx)(w.a,{md:6,style:{overflow:"hidden"},children:Object(b.jsxs)("article",{children:[Object(b.jsx)("h2",{children:d}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:u}),Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Genre:"})," ",h]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Made by:"})," ",O]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Published on:"})," ",new Date(x).toDateString()]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{className:"github",href:g,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"Github"})})}),Object(b.jsx)(I.b,{to:"/game/".concat(i._id),children:Object(b.jsx)(p.a,{variant:"primary",children:"Play Now!"})})]})]})}),Object(b.jsx)(w.a,{className:"padding-img",md:4,children:Object(b.jsx)("img",{className:"game-details-img",src:m,alt:d})})]})}),Object(b.jsxs)(j.a,{className:"reviews",children:[Object(b.jsx)("h2",{children:"Reviews"}),Object(b.jsx)("hr",{}),Object(b.jsx)(J,{reviews:y,reviewDelete:function(){V.deleteReview(G).then((function(e){return null})).catch((function(e){return console.log(e)}))},loggedUser:e.loggedUser})]})]})},K=a(131),Q=a(129),X=function e(){var t=this;Object(h.a)(this,e),this.signup=function(e,a,c){return t.app.post("/signup",{username:e,password:a,email:c})},this.login=function(e,a){return t.app.post("/login",{username:e,password:a})},this.logout=function(){return t.app.get("/logout")},this.isloggedin=function(){return t.app.get("/isloggedin")},this.app=m.a.create({baseURL:"".concat("https://irongames-backend.onrender.com/api","/auth"),withCredentials:!0})},Z=new X,$=function(e){var t=e.loggedUser,a=e.storeUser;return Object(b.jsx)("nav",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{className:"title-logo",children:[Object(b.jsx)("img",{className:"logo",src:d,alt:"logo"}),Object(b.jsx)(K.a.Brand,{className:"title",as:I.b,to:"/",children:"IronGames"})]}),Object(b.jsxs)(Q.a,{className:"nav",children:[Object(b.jsx)(Q.a.Link,{className:"link",as:I.b,to:"/",children:"Home"}),Object(b.jsx)(Q.a.Link,{className:"link",as:I.b,to:"/game-list",children:"Videogames"}),Object(b.jsx)(Q.a.Link,{className:"link",as:I.b,to:"/user-list",children:"Users"}),t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Q.a.Link,{className:"link",as:I.b,to:"/my-profile",children:"Profile"}),Object(b.jsx)(Q.a.Link,{className:"link",as:I.b,to:"/",onClick:function(){Z.logout().then((function(e){return a(null)})).catch((function(e){return console.log(e)}))},children:"Logout"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Q.a.Link,{className:"link",as:I.b,to:"/signup",children:"Signup"}),Object(b.jsx)(Q.a.Link,{className:"link",as:I.b,to:"/login",children:"Login"})]})]})]})})},ee=(a(118),new X);var te=function(e){var t=Object(c.useState)({username:"",password:"",email:""}),a=Object(l.a)(t,2),n=a[0],r=a[1],s=n.username,o=n.password,d=n.email,u=function(e){var t=e.currentTarget,a=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(b.jsx)(j.a,{className:"signup",children:Object(b.jsx)(v.a,{children:Object(b.jsxs)(w.a,{md:{span:4,offset:4},children:[Object(b.jsx)("h2",{children:"Signup"}),Object(b.jsx)("hr",{}),Object(b.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),ee.signup(s,o,d).then((function(t){e.storeUser(t.data)})).catch((function(e){return console.log(e.response.data.message)}))},children:[Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"username",children:[Object(b.jsx)(N.a.Label,{children:"Username"}),Object(b.jsx)(N.a.Control,{onChange:u,value:s,name:"username",type:"text",placeholder:"Username"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"email",children:[Object(b.jsx)(N.a.Label,{children:"Email"}),Object(b.jsx)(N.a.Control,{onChange:u,value:d,name:"email",type:"text",placeholder:"Email"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"password",children:[Object(b.jsx)(N.a.Label,{children:"Password"}),Object(b.jsx)(N.a.Control,{onChange:u,value:o,name:"password",type:"password",placeholder:"Password"})]}),Object(b.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})},ae=(a(119),new X);var ce=function(e){var t=Object(c.useState)({username:"",password:""}),a=Object(l.a)(t,2),n=a[0],r=a[1],s=function(e){var t=e.currentTarget,a=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(b.jsx)(j.a,{className:"login",children:Object(b.jsx)(v.a,{children:Object(b.jsxs)(w.a,{md:{span:4,offset:4},children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsx)("hr",{}),Object(b.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),ae.login(n.username,n.password).then((function(t){e.storeUser(t.data),e.history.push("/game-list")})).catch((function(e){return console.log(e.response.data.message)}))},children:[Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"username",children:[Object(b.jsx)(N.a.Label,{children:"Username"}),Object(b.jsx)(N.a.Control,{onChange:s,value:n.username,name:"username",type:"text",placeholder:"Username"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"password",children:[Object(b.jsx)(N.a.Label,{children:"Password"}),Object(b.jsx)(N.a.Control,{onChange:s,value:n.password,name:"password",type:"password",placeholder:"Password"})]}),Object(b.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})},ne=(a(120),function(e){var t=e._id,a=e.username,c=e.email,n=e.role,r=(e.favs,e.image),s=e.loggedUser;return Object(b.jsxs)(M.a,{className:"user-card",style:{width:"18rem"},children:[Object(b.jsx)(M.a.Img,{variant:"top",src:r}),Object(b.jsxs)(M.a.Body,{children:[Object(b.jsxs)(M.a.Title,{children:[" ",a]}),"ADMIN"===(null===s||void 0===s?void 0:s.role)&&Object(b.jsx)(M.a.Text,{children:c}),Object(b.jsx)(M.a.Text,{children:n}),Object(b.jsx)("div",{className:"user-card-button2",children:Object(b.jsx)(I.b,{to:"/profile/".concat(t),children:Object(b.jsx)(p.a,{variant:"primary",children:"Profile"})})})]})]})});var re=function(e){var t=e.users,a=e.loggedUser;return Object(b.jsx)("div",{children:Object(b.jsx)(v.a,{children:t.map((function(e){return Object(b.jsx)(w.a,{children:Object(b.jsx)(ne,Object(i.a)({loggedUser:a},e))},e._id)}))})})},se=(a(121),new W);var ie=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),o=i[0],d=i[1],u=Object(c.useState)([]),h=Object(l.a)(u,2),O=h[0],m=h[1],g=function(){se.getAllUsers().then((function(e){var t=e.data;r(t),m(t)})).catch((function(e){return console.log(e)}))};return Object(c.useEffect)((function(){g()}),[]),Object(c.useEffect)((function(){var e=n.filter((function(e){return e.username.toLowerCase().includes(o)}));m(e)}),[o]),Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{className:"div-user-content",children:[Object(b.jsx)("h1",{children:"User List"}),Object(b.jsx)(x,{getSearch:function(e){d(e)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)(re,{getAllUsers:g,users:O,loggedUser:e.loggedUser})]})},le=(a(73),new W);var oe=function(e){var t,a,n=Object(c.useState)({username:"",password:"",email:"",image:"",favs:[]}),r=Object(l.a)(n,2),s=r[0],i=r[1],o=s.username,d=(s.password,s.email),u=s.image,h=s.favs,O=e.match.params.id;Object(c.useEffect)((function(){le.getUserDetails(O).then((function(e){var t=e.data,a=t.username,c=t.email,n=t.image,r=t.favs;i({username:a,email:c,image:n,favs:r})})).catch((function(e){return console.log(e)}))}),[]);var m=Object(c.useState)({showUserDeleteModal:!1}),g=Object(l.a)(m,2),x=g[0],U=g[1],N=x.showUserDeleteModal,y=function(){U({showUserDeleteModal:!1})};return Object(b.jsxs)("div",{children:[Object(b.jsxs)(j.a,{children:["ADMIN"===(null===(t=e.loggedUser)||void 0===t?void 0:t.role)&&Object(b.jsx)(p.a,{className:"buttons",onClick:function(){U({showUserDeleteModal:!0})},children:"Delete this account"}),Object(b.jsxs)(f.a,{show:N,backdrop:"static",onHide:y,children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:Object(b.jsx)(f.a.Title,{children:"This account will be deleted, are you sure?"})}),Object(b.jsx)(f.a.Body,{children:e.loggedUser&&Object(b.jsx)(I.b,{as:I.b,to:"/user-list",onClick:function(){le.userDelete(O).then((function(t){return e.storeUser(null)})).catch((function(e){return console.log(e)}))},closeReviewModal:y,children:Object(b.jsx)(p.a,{children:"Confirm"})})})]})]}),Object(b.jsx)(j.a,{className:"padding",children:Object(b.jsxs)(v.a,{children:[Object(b.jsxs)(w.a,{md:6,style:{overflow:"hidden"},children:[Object(b.jsx)("h1",{children:"Profile details"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("article",{children:[Object(b.jsx)("h3",{children:o}),Object(b.jsxs)("div",{children:["ADMIN"===(null===(a=e.loggedUser)||void 0===a?void 0:a.role)&&Object(b.jsx)("p",{children:d}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{children:"Favorite games"}),Object(b.jsx)("p",{children:h.map((function(e){return Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:e.title})})}))})]})]})]}),Object(b.jsx)(w.a,{className:"padding-img",md:4,children:Object(b.jsx)("img",{className:"profile-img",src:u,alt:"avatar"})})]})})]})},je=new W,de=new y;var be=function(e){var t=Object(c.useState)({_id:"",username:"",password:"",email:"",image:"",favs:""}),a=Object(l.a)(t,2),n=a[0],r=a[1],s=(n.username,n.password),o=n.email,j=(n.image,n.favs,Object(c.useState)({loading:!1})),d=Object(l.a)(j,2),u=d[0],h=d[1];Object(c.useEffect)((function(){r(e.profile)}),[]);var O=function(e){var t=e.currentTarget,a=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},n),{},Object(U.a)({},a,c)))};return Object(b.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),je.userEdit(n).then((function(t){e.setProfile(t.data),e.closeModal()})).catch((function(e){return console.log(e)}))},children:[Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"password",children:[Object(b.jsx)(N.a.Label,{children:"Password"}),Object(b.jsx)(N.a.Control,{onChange:O,value:s,name:"password",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"email",children:[Object(b.jsx)(N.a.Label,{children:"Email"}),Object(b.jsx)(N.a.Control,{onChange:O,value:o,name:"email",type:"text"})]}),Object(b.jsxs)(N.a.Group,{className:"mb-3",controlId:"image",children:[Object(b.jsx)(N.a.Label,{children:"Image archive"}),Object(b.jsx)(N.a.Control,{onChange:function(e){h({loading:!0});var t=new FormData;t.append("imageData",e.target.files[0]),de.uploadImage(t).then((function(e){r(Object(i.a)(Object(i.a)({},n),{},{image:e.data.cloudinary_url})),h({loading:!1})})).catch((function(e){return console.log(e)}))},name:"imageData",type:"file"})]}),u.loading&&Object(b.jsx)(C,{shape:"circle"}),Object(b.jsx)(p.a,{disabled:u.loading,variant:"primary",type:"submit",children:"Submit"})]})},ue=new W;var he=function(e){var t=Object(c.useState)({_id:"",username:"",password:"",email:"",image:"",favs:[]}),a=Object(l.a)(t,2),n=a[0],r=a[1],s=e.match.params.id,i=n.username,o=(n.password,n.email),d=n.image,u=n.favs,h=function(){ue.getMyProfile(s).then((function(e){var t=e.data,a=t.username,c=t.email,n=t.image,s=t._id,i=t.favs;r({username:a,email:c,image:n,_id:s,favs:i})})).catch((function(e){return console.log(e)}))};Object(c.useEffect)((function(){h()}),[]);var O=Object(c.useState)({showEditModal:!1}),m=Object(l.a)(O,2),g=m[0],x=m[1],U=g.showEditModal,N=function(){x({showEditModal:!1})},y=Object(c.useState)({showUserDeleteModal:!1}),C=Object(l.a)(y,2),G=C[0],D=C[1],S=G.showUserDeleteModal,M=function(){D({showUserDeleteModal:!1})};return Object(b.jsxs)("div",{children:[Object(b.jsxs)(j.a,{children:[Object(b.jsx)(p.a,{className:"buttons",onClick:function(){x({showEditModal:!0})},children:"Edit"}),Object(b.jsxs)(f.a,{show:U,backdrop:"static",onHide:N,children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:Object(b.jsx)(f.a.Title,{children:"Edit Profile"})}),Object(b.jsx)(f.a.Body,{children:Object(b.jsx)(be,{loggedUser:e.loggedUser,profile:n,closeModal:N,setProfile:r,getMyProfile:h})})]}),Object(b.jsx)(p.a,{className:"buttons",onClick:function(){D({showUserDeleteModal:!0})},children:"Delete my account"}),Object(b.jsxs)(f.a,{show:S,backdrop:"static",onHide:M,children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:Object(b.jsx)(f.a.Title,{children:"Your account will be deleted, are you sure?"})}),Object(b.jsx)(f.a.Body,{children:e.loggedUser&&Object(b.jsxs)(I.b,{as:I.b,to:"/",onClick:function(){ue.userDelete(e.loggedUser._id).then((function(e){return null})).catch((function(e){return console.log(e)}))},closeReviewModal:M,children:[" ",Object(b.jsx)(p.a,{children:"Confirm"})," "]})})]})]}),Object(b.jsx)(j.a,{className:"padding",children:Object(b.jsxs)(v.a,{children:[Object(b.jsxs)(w.a,{md:6,style:{overflow:"hidden"},children:[Object(b.jsx)("h1",{children:"My Profile"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("article",{children:[Object(b.jsx)("h3",{children:i}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:o}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{children:"Favorite games"}),Object(b.jsx)("p",{children:u.map((function(e){return Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:e.title})})}))})]})]})]}),Object(b.jsx)(w.a,{className:"padding-img",md:4,children:Object(b.jsx)("img",{className:"profile-img",src:d,alt:"avatar"})})]})})]})},Oe=(a(122),new g);var me=function(e){var t=Object(c.useState)({title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:"",reviews:""}),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){var t=e.match.params.id;Oe.getOneGame(t).then((function(e){var t=e.data,a=t.title,c=t.description,n=t.genre,s=t.creators,i=t.imageUrl,l=t.github,o=t.date,j=t.gameUrl;r({title:a,description:c,genre:n,creators:s,imageUrl:i,github:l,date:o,gameUrl:j})})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsx)("div",{className:"game-wrap",children:Object(b.jsx)("iframe",{className:"game-frame",title:n.title,src:n.gameUrl})})},ge=a(3),xe=["component"];var pe=function(e){var t=e.component,a=Object(ge.a)(e,xe),c=localStorage.getItem("isAuthenticated");return console.log("this",c),Object(b.jsx)(o.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return c?Object(b.jsx)(t,Object(i.a)({},e)):Object(b.jsx)(o.a,{to:"/login"})}}))},fe=new X;var ve=function(){var e=Object(c.useState)({loggedUser:void 0}),t=Object(l.a)(e,2),a=t[0],n=t[1],r=a.loggedUser;Object(c.useEffect)((function(){fe.isloggedin().then((function(e){return s(e.data)})).catch((function(e){return s(null)}))}),[]);var s=function(e){n(Object(i.a)(Object(i.a)({},a),{},{loggedUser:e}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)($,{storeUser:s,loggedUser:r}),Object(b.jsx)("main",{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(u,{})}}),Object(b.jsx)(o.b,{path:"/game-list",exact:!0,render:function(){return Object(b.jsx)(T,{loggedUser:r})}}),Object(b.jsx)(o.b,{path:"/game/details/:id",render:function(e){return Object(b.jsx)(q,Object(i.a)({loggedUser:r,storeUser:s},e))}}),Object(b.jsx)(o.b,{path:"/game/:id",render:function(e){return Object(b.jsx)(me,Object(i.a)({},e))}}),Object(b.jsx)(o.b,{path:"/user-list",render:function(e){return Object(b.jsx)(ie,Object(i.a)({loggedUser:r},e))}}),Object(b.jsx)(o.b,{path:"/profile/:id",render:function(e){return Object(b.jsx)(oe,Object(i.a)(Object(i.a)({},e),{},{loggedUser:r}))}}),Object(b.jsx)(o.b,{path:"/my-profile",render:function(e){return Object(b.jsx)(he,Object(i.a)({loggedUser:r,storeUser:s},e))}}),r?Object(b.jsx)(o.a,{to:"/"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.b,{path:"/signup",render:function(e){return Object(b.jsx)(te,Object(i.a)(Object(i.a)({},e),{},{storeUser:s}))}}),Object(b.jsx)(o.b,{path:"/login",render:function(e){return Object(b.jsx)(ce,Object(i.a)(Object(i.a)({},e),{},{storeUser:s}))}}),Object(b.jsx)(pe,{exact:!0,path:"/logout"})]})]})})]})};a(123);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(I.a,{children:Object(b.jsx)(ve,{})})}),document.getElementById("root"))},73:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.cbf22bb2.chunk.js.map