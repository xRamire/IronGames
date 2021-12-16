(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(27),s=a.n(r),i=(a(84),a(2)),l=a(5),o=a(11),j=(a(85),a(8)),d=a(116),b=a(117),u=a(0),h=function(){return Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h1",{children:"Bievenid@ a IronHack Games!"}),Object(u.jsx)("p",{children:"Una MERN Stack sobre juegos"}),Object(u.jsx)("hr",{}),Object(u.jsx)(j.b,{to:"/game-list",children:Object(u.jsx)(b.a,{variant:"dark",size:"lg",children:"Ver juegos"})})]})},O=a(16),m=a(25),g=a.n(m),x=function e(){var t=this;Object(O.a)(this,e),this.getAllGames=function(){return t.app.get("/all")},this.getOneGame=function(e){return t.app.get("/game/".concat(e))},this.getGameDetails=function(e){return t.app.get("/game/details/".concat(e))},this.createGame=function(e){return t.app.post("/new",e)},this.editGame=function(e){return t.app.put("/edit/".concat(e._id),e)},this.deleteGame=function(e){return t.app.delete("/delete/".concat(e))},this.app=g.a.create({baseURL:"".concat("https://irongames.herokuapp.com/api","/games"),withCredentials:!0})};var p=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:["Search:",Object(u.jsx)("input",{onChange:function(t){return function(t){var a=t.currentTarget.value;e.getSearch(a.toLowerCase())}(t)},name:"name",type:"text"})]})})},f=a(122),v=a(118),w=a(77),U=a(7),y=a(120),C=(a(109),function(e){var t=e.size,a=e.shape,n={width:"lg"===t?60:30,height:"lg"===t?60:30};return Object(u.jsx)("div",{className:"spinner ".concat(a),style:n})}),D=function e(){var t=this;Object(O.a)(this,e),this.uploadImage=function(e){return t.app.post("/image",e)},this.app=g.a.create({baseURL:"".concat("https://irongames.herokuapp.com/api","/upload")})},G=new x,S=new D;var M=function(e){var t=Object(n.useState)({_id:"",title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:"",reviews:""}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)({loading:!1}),o=Object(l.a)(s,2),j=o[0],d=o[1];Object(n.useEffect)((function(){r(e.game)}),[]);var h=c.title,O=c.description,m=c.genre,g=c.creators,x=(c.imageUrl,c.github),p=c.date,f=c.gameUrl,v=function(e){var t=e.currentTarget,a=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},c),{},Object(U.a)({},a,n)))};return Object(u.jsxs)(y.a,{onSubmit:function(t){t.preventDefault(),G.editGame(c).then((function(t){e.setGame(t.data),e.closeModal()})).catch((function(e){return console.log(e)}))},children:[Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"title",children:[Object(u.jsx)(y.a.Label,{children:"Title"}),Object(u.jsx)(y.a.Control,{onChange:v,value:h,name:"title",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"description",children:[Object(u.jsx)(y.a.Label,{children:"Description"}),Object(u.jsx)(y.a.Control,{onChange:v,value:O,name:"description",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"genre",children:[Object(u.jsx)(y.a.Label,{children:"Genre"}),Object(u.jsxs)(y.a.Select,{"aria-label":"Default select example",onChange:v,name:"genre",type:"text",children:[Object(u.jsxs)("option",{children:["Actual genre: ",m]}),Object(u.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(u.jsx)("option",{value:"Fighting",children:"Fighting"}),Object(u.jsx)("option",{value:"Beat'em up",children:"Beat'em up"}),Object(u.jsx)("option",{value:"Shooter",children:"Shooter"}),Object(u.jsx)("option",{value:"Multiplayer",children:"Multiplayer"}),Object(u.jsx)("option",{value:"Sports",children:"Sports"}),Object(u.jsx)("option",{value:"Terror",children:"Terror"}),Object(u.jsx)("option",{value:"Racing",children:"Racing"}),Object(u.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"creators",children:[Object(u.jsx)(y.a.Label,{children:"Creators"}),Object(u.jsx)(y.a.Control,{onChange:v,value:g,name:"creators",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"github",children:[Object(u.jsx)(y.a.Label,{children:"Github"}),Object(u.jsx)(y.a.Control,{onChange:v,value:x,name:"github",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"date",children:[Object(u.jsx)(y.a.Label,{children:"Date"}),Object(u.jsx)(y.a.Control,{onChange:v,value:p,name:"date",type:"date"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"gameUrl",children:[Object(u.jsx)(y.a.Label,{children:"GameUrl"}),Object(u.jsx)(y.a.Control,{onChange:v,value:f,name:"gameUrl",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"imageUrl",children:[Object(u.jsx)(y.a.Label,{children:"Image archive"}),Object(u.jsx)(y.a.Control,{onChange:function(e){d({loading:!0});var t=new FormData;t.append("imageData",e.target.files[0]),S.uploadImage(t).then((function(e){r(Object(i.a)(Object(i.a)({},c),{},{imageUrl:e.data.cloudinary_url})),d({loading:!1})})).catch((function(e){return console.log(e)}))},name:"imageData",type:"file"})]}),j.loading&&Object(u.jsx)(C,{shape:"circle"}),Object(u.jsx)(b.a,{disabled:j.loading,variant:"primary",type:"submit",children:"Submit"})]})},N=(a(73),function e(){var t=this;Object(O.a)(this,e),this.getAllReviews=function(e){return t.app.get("/all/".concat(e))},this.createReview=function(e){return t.app.post("/new",e)},this.editReview=function(e){return t.app.put("/edit/".concat(e._id),e)},this.deleteReview=function(e){return t.app.delete("/delete/".concat(e))},this.app=g.a.create({baseURL:"".concat("https://irongames.herokuapp.com/api","/reviews"),withCredentials:!0})}),L=new N;var I=function(e){var t=Object(n.useState)({comment:"",rating:"",game:e.game._id}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=c.comment,o=(c.rating,c.game,function(e){var t=e.currentTarget,a=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},c),{},Object(U.a)({},a,n)))});return Object(u.jsxs)(y.a,{onSubmit:function(t){t.preventDefault(),L.createReview(c).then((function(t){e.getAllReviews(),e.closeReviewModal()})).catch((function(e){return console.log(e)}))},children:[Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"comment",children:[Object(u.jsx)(y.a.Label,{children:"Comment"}),Object(u.jsx)(y.a.Control,{onChange:o,value:s,name:"comment",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"rating",children:[Object(u.jsx)(y.a.Label,{children:"Rating"}),Object(u.jsxs)(y.a.Select,{"aria-label":"Default select example",onChange:o,name:"rating",type:"text",children:[Object(u.jsx)("option",{children:"Rate this game"}),Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"})]})]}),Object(u.jsx)(b.a,{variant:"primary",type:"submit",children:"Submit"})]})},k=a(123),R=(a(110),function(e){e._id;var t=e.comment,a=(e.game,e.rating),c=e.owner,r=e.loggedUser,s=e.reviewDelete,i=Object(n.useState)({showReviewDeleteModal:!1}),o=Object(l.a)(i,2),j=o[0],d=o[1],h=j.showReviewDeleteModal,O=function(){d({showReviewDeleteModal:!1})};return Object(u.jsx)(k.a,{className:"game-card",style:{width:"18rem"},children:Object(u.jsxs)(k.a.Body,{children:[Object(u.jsx)(k.a.Title,{children:c.username}),Object(u.jsx)(k.a.Text,{children:Object(u.jsx)("img",{className:"review-img",src:c.image,alt:"avatar"})}),Object(u.jsx)(k.a.Text,{children:a}),Object(u.jsx)(k.a.Text,{children:t}),"ADMIN"===(null===r||void 0===r?void 0:r.role)&&Object(u.jsx)(b.a,{onClick:function(){d({showReviewDeleteModal:!0})},children:"Delete Review"}),Object(u.jsxs)(f.a,{show:h,backdrop:"static",onHide:O,children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:Object(u.jsx)(f.a.Title,{children:"This will delete the review, are you sure?"})}),Object(u.jsx)(f.a.Body,{children:"ADMIN"===(null===r||void 0===r?void 0:r.role)&&Object(u.jsx)(b.a,{onClick:s,closeReviewModal:O,children:"Delete Review"})})]})]})})});var T=function(e){return Object(u.jsx)(v.a,{children:e.reviews.map((function(t){return Object(u.jsx)(w.a,{children:Object(u.jsx)(R,Object(i.a)({loggedUser:e.loggedUser,reviewDelete:e.reviewDelete},t))},t._id)}))})},E=function e(){var t=this;Object(O.a)(this,e),this.getAllUsers=function(){return t.app.get("/all")},this.getUserDetails=function(e){return t.app.get("/profile/".concat(e))},this.getMyProfile=function(e){return t.app.get("/my-profile")},this.userEdit=function(e){return t.app.put("/edit/".concat(e._id),e)},this.userDelete=function(e){return t.app.delete("/delete/".concat(e))},this.favGame=function(e){return t.app.put("/favs/fav/".concat(e))},this.unfavGame=function(e){return t.app.put("/favs/unfav/".concat(e))},this.app=g.a.create({baseURL:"".concat("https://irongames.herokuapp.com/api","/user"),withCredentials:!0})},A=new x,_=new N,B=new E;var P=function(e){var t,a,c,r,s=Object(n.useState)({_id:"",title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:"",reviews:""}),i=Object(l.a)(s,2),o=i[0],h=i[1],O=o.title,m=o.description,g=o.genre,x=o.creators,p=o.imageUrl,U=o.github,y=o.date,C=o.gameUrl,D=Object(n.useState)([]),G=Object(l.a)(D,2),S=G[0],N=G[1],L=e.match.params.id,k=Object(n.useState)({showEditModal:!1}),R=Object(l.a)(k,2),E=R[0],P=R[1],H=E.showEditModal,F=function(){P({showEditModal:!1})},z=Object(n.useState)({showReviewModal:!1}),J=Object(l.a)(z,2),V=J[0],q=J[1],K=V.showReviewModal,Q=function(){q({showReviewModal:!1})},W=Object(n.useState)({showGameDeleteModal:!1}),X=Object(l.a)(W,2),Y=X[0],Z=X[1],$=Y.showGameDeleteModal,ee=function(){Z({showGameDeleteModal:!1})},te=function(){_.getAllReviews(L).then((function(e){var t=e.data;N(t)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){A.getGameDetails(L).then((function(e){console.log(e.data);var t=e.data,a=t._id,n=t.title,c=t.description,r=t.genre,s=t.creators,i=t.imageUrl,l=t.github,o=t.date,j=t.gameUrl;h({_id:a,title:n,description:c,genre:r,creators:s,imageUrl:i,github:l,date:o,gameUrl:j})})).catch((function(e){return console.log(e)})),te()}),[]),Object(u.jsxs)("div",{children:["ADMIN"===(null===(t=e.loggedUser)||void 0===t?void 0:t.role)&&Object(u.jsx)(b.a,{onClick:function(){P({showEditModal:!0})},children:"Edit"}),Object(u.jsxs)(f.a,{show:H,backdrop:"static",onHide:F,children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:Object(u.jsx)(f.a.Title,{children:"Edit Game"})}),Object(u.jsx)(f.a.Body,{children:Object(u.jsx)(M,{game:o,closeModal:F,setGame:h})})]}),e.loggedUser&&Object(u.jsx)(b.a,{onClick:function(){q({showReviewModal:!0})},children:"Add Review"}),Object(u.jsxs)(f.a,{show:K,backdrop:"static",onHide:Q,children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:Object(u.jsx)(f.a.Title,{children:"New Review"})}),Object(u.jsx)(f.a.Body,{children:Object(u.jsx)(I,{game:o,closeReviewModal:Q,getAllReviews:te})})]}),"ADMIN"===(null===(a=e.loggedUser)||void 0===a?void 0:a.role)&&Object(u.jsx)(b.a,{onClick:function(){Z({showGameDeleteModal:!0})},children:"Delete Game"}),Object(u.jsxs)(f.a,{show:$,backdrop:"static",onHide:ee,children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:Object(u.jsx)(f.a.Title,{children:"This will delete the game, are you sure?"})}),Object(u.jsx)(f.a.Body,{children:"ADMIN"===(null===(c=e.loggedUser)||void 0===c?void 0:c.role)&&Object(u.jsx)(j.b,{to:"/",onClick:function(){A.deleteGame(L).then((function(e){return null})).catch((function(e){return console.log(e)}))},closeReviewModal:ee,children:"Delete Game"})})]}),(null===(r=e.loggedUser)||void 0===r?void 0:r.favs.includes(o._id))?Object(u.jsx)(b.a,{onClick:function(){e.loggedUser.favs.includes(o._id)&&B.unfavGame(L).then((function(t){var a=t.data;e.storeUser(a)})).catch((function(e){return console.log(e)}))},children:"Delete from Favorites"}):Object(u.jsx)(b.a,{onClick:function(){e.loggedUser.favs.includes(o._id)||B.favGame(L).then((function(t){var a=t.data;e.storeUser(a)})).catch((function(e){return console.log(e)}))},children:"Add to Favorites"}),Object(u.jsxs)(d.a,{className:"padding",children:[Object(u.jsxs)(v.a,{children:[Object(u.jsx)(w.a,{md:6,style:{overflow:"hidden"},children:Object(u.jsxs)("article",{children:[Object(u.jsx)("h2",{children:O}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:m}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("p",{children:["Genre: ",g]}),Object(u.jsxs)("p",{children:["Made by: ",x]}),Object(u.jsxs)("p",{children:["Published on: ",new Date(y).toDateString()]}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:U,children:"Github"})}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:C,children:"Play"})})]})]})}),Object(u.jsx)(w.a,{md:4,children:Object(u.jsx)("img",{className:"details-img",src:p,alt:O})})]}),Object(u.jsx)(T,{reviews:S,reviewDelete:function(){_.deleteReview(L).then((function(e){return null})).catch((function(e){return console.log(e)}))},loggedUser:e.loggedUser})]})]})},H=new x,F=new D;var z=function(e){var t=Object(n.useState)({title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:""}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=c.title,o=c.description,j=(c.genre,c.creators),d=(c.imageUrl,c.github),h=c.date,O=c.gameUrl,m=Object(n.useState)({loading:!1}),g=Object(l.a)(m,2),x=g[0],p=g[1],f=function(e){var t=e.currentTarget,a=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},c),{},Object(U.a)({},a,n)))};return Object(u.jsxs)(y.a,{onSubmit:function(t){t.preventDefault(),H.createGame(c).then((function(t){e.closeModal(),e.getAllGames()})).catch((function(e){return console.log(e)}))},children:[Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"title",children:[Object(u.jsx)(y.a.Label,{children:"Title"}),Object(u.jsx)(y.a.Control,{onChange:f,value:s,name:"title",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"description",children:[Object(u.jsx)(y.a.Label,{children:"Description"}),Object(u.jsx)(y.a.Control,{onChange:f,value:o,name:"description",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"genre",children:[Object(u.jsx)(y.a.Label,{children:"Genre"}),Object(u.jsxs)(y.a.Select,{"aria-label":"Default select example",onChange:f,name:"genre",type:"text",children:[Object(u.jsx)("option",{children:"Open this select menu"}),Object(u.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(u.jsx)("option",{value:"Fighting",children:"Fighting"}),Object(u.jsx)("option",{value:"Beat'em up",children:"Beat'em up"}),Object(u.jsx)("option",{value:"Shooter",children:"Shooter"}),Object(u.jsx)("option",{value:"Multiplayer",children:"Multiplayer"}),Object(u.jsx)("option",{value:"Sports",children:"Sports"}),Object(u.jsx)("option",{value:"Terror",children:"Terror"}),Object(u.jsx)("option",{value:"Racing",children:"Racing"}),Object(u.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"creators",children:[Object(u.jsx)(y.a.Label,{children:"Creators"}),Object(u.jsx)(y.a.Control,{onChange:f,value:j,name:"creators",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"github",children:[Object(u.jsx)(y.a.Label,{children:"Github"}),Object(u.jsx)(y.a.Control,{onChange:f,value:d,name:"github",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"date",children:[Object(u.jsx)(y.a.Label,{children:"Date"}),Object(u.jsx)(y.a.Control,{onChange:f,value:h,name:"date",type:"date"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"gameUrl",children:[Object(u.jsx)(y.a.Label,{children:"GameUrl"}),Object(u.jsx)(y.a.Control,{onChange:f,value:O,name:"gameUrl",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"imageUrl",children:[Object(u.jsx)(y.a.Label,{children:"Image archive"}),Object(u.jsx)(y.a.Control,{onChange:function(e){p({loading:!0});var t=new FormData;t.append("imageData",e.target.files[0]),F.uploadImage(t).then((function(e){r(Object(i.a)(Object(i.a)({},c),{},{imageUrl:e.data.cloudinary_url})),p({loading:!1})})).catch((function(e){return console.log(e)}))},name:"imageData",type:"file"})]}),x.loading&&Object(u.jsx)(C,{shape:"circle"}),Object(u.jsx)(b.a,{disabled:x.loading,variant:"primary",type:"submit",children:"Submit"})]})},J=function(e){var t=e._id,a=e.title,n=e.description,c=e.genre,r=e.creators,s=e.imageUrl;e.github,e.date,e.gameUrl,e.reviews;return Object(u.jsxs)(k.a,{className:"game-card",style:{width:"18rem"},children:[Object(u.jsx)(k.a.Img,{variant:"top",src:s}),Object(u.jsxs)(k.a.Body,{children:[Object(u.jsxs)(k.a.Title,{children:[" ",a]}),Object(u.jsxs)(k.a.Text,{children:[n,"."]}),Object(u.jsxs)(k.a.Text,{children:[c,"."]}),Object(u.jsxs)(k.a.Text,{children:[r,"."]}),Object(u.jsx)(j.b,{to:"/game/".concat(t),children:Object(u.jsx)(b.a,{variant:"primary",children:"Jugar"})}),Object(u.jsx)(j.b,{to:"/game/details/".concat(t),children:Object(u.jsx)(b.a,{variant:"primary",children:"Details"})})]})]})};var V=function(e){var t,a=Object(n.useState)({showModal:!1}),c=Object(l.a)(a,2),r=c[0],s=c[1],o=function(){s({showModal:!1})};return Object(u.jsxs)("div",{children:["ADMIN"===(null===(t=e.loggedUser)||void 0===t?void 0:t.role)&&Object(u.jsx)(b.a,{onClick:function(){s({showModal:!0})},children:"Add game"}),Object(u.jsxs)(f.a,{show:r.showModal,backdrop:"static",onHide:o,children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:Object(u.jsx)(f.a.Title,{children:"New Game"})}),Object(u.jsx)(f.a.Body,{children:Object(u.jsx)(z,{getAllGames:e.getAllGames,closeModal:o})})]}),Object(u.jsx)(v.a,{children:e.games.map((function(e){return Object(u.jsx)(w.a,{children:Object(u.jsx)(J,Object(i.a)({},e))},e._id)}))})]})},q=new x;var K=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),j=o[0],b=o[1],h=Object(n.useState)([]),O=Object(l.a)(h,2),m=O[0],g=O[1],x=function(){q.getAllGames().then((function(e){var t=e.data;r(t),g(t)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){x()}),[]),Object(n.useEffect)((function(){var e=c.filter((function(e){return e.title.toLowerCase().includes(j)}));g(e)}),[j]),Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h1",{children:"Game List"}),Object(u.jsx)(p,{getSearch:function(e){b(e)}}),Object(u.jsx)(V,Object(i.a)({loggedUser:e.loggedUser,getAllGames:x,games:m},e))]})},Q=a(121),W=a(119),X=function e(){var t=this;Object(O.a)(this,e),this.signup=function(e,a,n){return t.app.post("/signup",{username:e,password:a,email:n})},this.login=function(e,a){return t.app.post("/login",{username:e,password:a})},this.logout=function(){return t.app.get("/logout")},this.isloggedin=function(){return t.app.get("/isloggedin")},this.app=g.a.create({baseURL:"process.env.REACT_APP_BASE_URL",withCredentials:!0})},Y=new X,Z=function(e){var t=e.loggedUser,a=e.storeUser;return Object(u.jsx)(Q.a,{bg:"dark",variant:"dark",children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(Q.a.Brand,{as:j.b,to:"/",children:"Navbar"}),Object(u.jsxs)(W.a,{className:"me-auto",children:[Object(u.jsx)(W.a.Link,{as:j.b,to:"/",children:"Inicio"}),Object(u.jsx)(W.a.Link,{as:j.b,to:"/game-list",children:"Videogames list"}),Object(u.jsx)(W.a.Link,{as:j.b,to:"/user-list",children:"User list"}),t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(W.a.Link,{as:j.b,to:"/my-profile",children:"Profile"}),Object(u.jsx)(W.a.Link,{as:j.b,to:"/",onClick:function(){Y.logout().then((function(e){return a(null)})).catch((function(e){return console.log(e)}))},children:"Logout"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(W.a.Link,{as:j.b,to:"/signup",children:"Signup"}),Object(u.jsx)(W.a.Link,{as:j.b,to:"/login",children:"Login"})]})]})]})})},$=new X;var ee=function(e){var t=Object(n.useState)({username:"",password:"",email:""}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=c.username,o=c.password,j=c.email,h=function(e){var t=e.currentTarget,a=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},c),{},Object(U.a)({},a,n)))};return Object(u.jsx)(d.a,{children:Object(u.jsx)(v.a,{children:Object(u.jsxs)(w.a,{md:{span:4,offset:4},children:[Object(u.jsx)("h2",{children:"Registro"}),Object(u.jsxs)(y.a,{onSubmit:function(t){t.preventDefault(),$.signup(s,o,j).then((function(t){e.storeUser(t.data)})).catch((function(e){return console.log(e.response.data.message)}))},children:[Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"username",children:[Object(u.jsx)(y.a.Label,{children:"Username"}),Object(u.jsx)(y.a.Control,{onChange:h,value:s,name:"username",type:"text",placeholder:"Username"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"email",children:[Object(u.jsx)(y.a.Label,{children:"Email"}),Object(u.jsx)(y.a.Control,{onChange:h,value:j,name:"email",type:"text",placeholder:"Email"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"password",children:[Object(u.jsx)(y.a.Label,{children:"Password"}),Object(u.jsx)(y.a.Control,{onChange:h,value:o,name:"password",type:"password",placeholder:"Password"})]}),Object(u.jsx)(b.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})},te=new X;var ae=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=function(e){var t=e.currentTarget,a=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},c),{},Object(U.a)({},a,n)))};return Object(u.jsx)(d.a,{children:Object(u.jsx)(v.a,{children:Object(u.jsxs)(w.a,{md:{span:4,offset:4},children:[Object(u.jsx)("h2",{children:"Login"}),Object(u.jsx)("hr",{}),Object(u.jsxs)(y.a,{onSubmit:function(t){t.preventDefault(),te.login(c.username,c.password).then((function(t){e.storeUser(t.data),e.history.push("/game-list")})).catch((function(e){return console.log(e.response.data.message)}))},children:[Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"username",children:[Object(u.jsx)(y.a.Label,{children:"Username"}),Object(u.jsx)(y.a.Control,{onChange:s,value:c.username,name:"username",type:"text",placeholder:"Username"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"password",children:[Object(u.jsx)(y.a.Label,{children:"Password"}),Object(u.jsx)(y.a.Control,{onChange:s,value:c.password,name:"password",type:"password",placeholder:"Password"})]}),Object(u.jsx)(b.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})},ne=function(){return Object(u.jsx)("footer",{style:{background:"#212529",color:"white",textAlign:"center",fontSize:".7em",position:"fixed",bottom:0,padding:5,width:"100%"},children:"Todos los derechos reservados"})},ce=(a(74),function(e){var t=e._id,a=e.username,n=e.email,c=e.role,r=(e.favs,e.image);return Object(u.jsxs)(k.a,{className:"user-card",style:{width:"18rem"},children:[Object(u.jsx)(k.a.Img,{variant:"top",src:r}),Object(u.jsxs)(k.a.Body,{children:[Object(u.jsxs)(k.a.Title,{children:[" ",a]}),Object(u.jsx)(k.a.Text,{children:n}),Object(u.jsx)(k.a.Text,{children:c}),Object(u.jsx)(j.b,{to:"/profile/".concat(t),children:Object(u.jsx)(b.a,{variant:"primary",children:"Profile"})})]})]})});var re=function(e){var t=e.users;return Object(u.jsx)("div",{children:Object(u.jsx)(v.a,{children:t.map((function(e){return Object(u.jsx)(w.a,{children:Object(u.jsx)(ce,Object(i.a)({},e))},e._id)}))})})},se=new E;var ie=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),o=i[0],j=i[1],b=Object(n.useState)([]),h=Object(l.a)(b,2),O=h[0],m=h[1],g=function(){se.getAllUsers().then((function(e){var t=e.data;r(t),m(t)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){g()}),[]),Object(n.useEffect)((function(){var e=c.filter((function(e){return e.username.toLowerCase().includes(o)}));m(e)}),[o]),Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h1",{children:"User List"}),Object(u.jsx)(p,{getSearch:function(e){j(e)}}),Object(u.jsx)(re,{getAllUsers:g,users:O})]})},le=new E,oe=new D;var je=function(e){var t=Object(n.useState)({_id:"",username:"",password:"",email:"",image:"",favs:""}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=(c.username,c.password),o=c.email,j=(c.image,c.favs,Object(n.useState)({loading:!1})),d=Object(l.a)(j,2),h=d[0],O=d[1];Object(n.useEffect)((function(){r(e.profile)}),[]);var m=function(e){var t=e.currentTarget,a=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},c),{},Object(U.a)({},a,n)))};return Object(u.jsxs)(y.a,{onSubmit:function(t){t.preventDefault(),le.userEdit(c).then((function(t){e.setProfile(t.data),e.closeModal()})).catch((function(e){return console.log(e)}))},children:[Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"password",children:[Object(u.jsx)(y.a.Label,{children:"Password"}),Object(u.jsx)(y.a.Control,{onChange:m,value:s,name:"password",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"email",children:[Object(u.jsx)(y.a.Label,{children:"Email"}),Object(u.jsx)(y.a.Control,{onChange:m,value:o,name:"email",type:"text"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"image",children:[Object(u.jsx)(y.a.Label,{children:"Image archive"}),Object(u.jsx)(y.a.Control,{onChange:function(e){O({loading:!0});var t=new FormData;t.append("imageData",e.target.files[0]),oe.uploadImage(t).then((function(e){r(Object(i.a)(Object(i.a)({},c),{},{image:e.data.cloudinary_url})),O({loading:!1})})).catch((function(e){return console.log(e)}))},name:"imageData",type:"file"})]}),h.loading&&Object(u.jsx)(C,{shape:"circle"}),Object(u.jsx)(b.a,{disabled:h.loading,variant:"primary",type:"submit",children:"Submit"})]})},de=new E;var be=function(e){var t=Object(n.useState)({username:"",password:"",email:"",image:"",favs:""}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=c.username,i=(c.password,c.email),o=c.image,h=c.favs,O=e.match.params.id;Object(n.useEffect)((function(){de.getUserDetails(O).then((function(e){var t=e.data,a=t.username,n=t.email,c=t.image,s=t.favs;r({username:a,email:n,image:c,favs:s})})).catch((function(e){return console.log(e)}))}),[]);var m=Object(n.useState)({showUserDeleteModal:!1}),g=Object(l.a)(m,2),x=g[0],p=g[1],U=x.showUserDeleteModal,y=function(){p({showUserDeleteModal:!1})};return Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{onClick:function(){p({showUserDeleteModal:!0})},children:"Delete my Profile"}),Object(u.jsxs)(f.a,{show:U,backdrop:"static",onHide:y,children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:Object(u.jsx)(f.a.Title,{children:"This user will be deleted, are you sure?"})}),Object(u.jsx)(f.a.Body,{children:e.loggedUser&&Object(u.jsx)(j.b,{as:j.b,to:"/",onClick:function(){de.userDelete(O).then((function(t){return e.storeUser(null)})).catch((function(e){return console.log(e)}))},closeReviewModal:y,children:"Delete Profile"})})]}),Object(u.jsxs)(d.a,{className:"padding",children:[Object(u.jsx)("h1",{children:"Profile details"}),Object(u.jsxs)(v.a,{className:"justify-content-around",children:[Object(u.jsx)(w.a,{md:6,style:{overflow:"hidden"},children:Object(u.jsxs)("article",{children:[Object(u.jsx)("h2",{children:s}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:i}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:h})]})]})}),Object(u.jsx)(w.a,{md:4,children:Object(u.jsx)("img",{className:"details-img",src:o,alt:"avatar"})})]})]})]})},ue=new E;var he=function(e){var t=Object(n.useState)({_id:"",username:"",password:"",email:"",image:"",favs:[]}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=e.match.params.id,i=c.username,o=(c.password,c.email),h=c.image,O=c.favs,m=function(){ue.getMyProfile(s).then((function(e){var t=e.data,a=t.username,n=t.email,c=t.image,s=t._id,i=t.favs;r({username:a,email:n,image:c,_id:s,favs:i})})).catch((function(e){return console.log(e)}))};Object(n.useEffect)((function(){m()}),[]);var g=Object(n.useState)({showEditModal:!1}),x=Object(l.a)(g,2),p=x[0],U=x[1],y=p.showEditModal,C=function(){U({showEditModal:!1})},D=Object(n.useState)({showUserDeleteModal:!1}),G=Object(l.a)(D,2),S=G[0],M=G[1],N=S.showUserDeleteModal,L=function(){M({showUserDeleteModal:!1})};return Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{onClick:function(){U({showEditModal:!0})},children:"Edit"}),Object(u.jsxs)(f.a,{show:y,backdrop:"static",onHide:C,children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:Object(u.jsx)(f.a.Title,{children:"Edit Profile"})}),Object(u.jsx)(f.a.Body,{children:Object(u.jsx)(je,{loggedUser:e.loggedUser,profile:c,closeModal:C,setProfile:r,getMyProfile:m})})]}),Object(u.jsx)(b.a,{onClick:function(){M({showUserDeleteModal:!0})},children:"Delete my Profile"}),Object(u.jsxs)(f.a,{show:N,backdrop:"static",onHide:L,children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:Object(u.jsx)(f.a.Title,{children:"Edit Profile"})}),Object(u.jsx)(f.a.Body,{children:e.loggedUser&&Object(u.jsx)(j.b,{as:j.b,to:"/",onClick:function(){ue.userDelete(e.loggedUser._id).then((function(e){return null})).catch((function(e){return console.log(e)}))},closeReviewModal:L,children:"Delete my Profile"})})]}),Object(u.jsxs)(d.a,{className:"padding",children:[Object(u.jsx)("h1",{children:"Profile details"}),Object(u.jsxs)(v.a,{className:"justify-content-around",children:[Object(u.jsx)(w.a,{md:6,style:{overflow:"hidden"},children:Object(u.jsxs)("article",{children:[Object(u.jsx)("h2",{children:i}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:o}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:O.map((function(e){return Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:e.title})})}))})]})]})}),Object(u.jsx)(w.a,{md:4,children:Object(u.jsx)("img",{className:"details-img",src:h,alt:"avatar"})})]})]})]})},Oe=new x;var me=function(e){var t=Object(n.useState)({title:"",description:"",genre:"",creators:"",imageUrl:"",github:"",date:"",gameUrl:"",reviews:""}),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=e.match.params.id;Oe.getOneGame(t).then((function(e){var t=e.data,a=t.title,n=t.description,c=t.genre,s=t.creators,i=t.imageUrl,l=t.github,o=t.date,j=t.gameUrl;r({title:a,description:n,genre:c,creators:s,imageUrl:i,github:l,date:o,gameUrl:j})})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)(d.a,{children:Object(u.jsx)("iframe",{id:c.gameUrl,title:c.title,style:{marginLeft:"-15vh",width:"100%",height:"100vh"},src:c.gameUrl})})},ge=a(3),xe=["component"];var pe=function(e){var t=e.component,a=Object(ge.a)(e,xe),n=localStorage.getItem("isAuthenticated");return console.log("this",n),Object(u.jsx)(o.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return n?Object(u.jsx)(t,Object(i.a)({},e)):Object(u.jsx)(o.a,{to:"/login"})}}))},fe=new X;var ve=function(){var e=Object(n.useState)({loggedUser:void 0}),t=Object(l.a)(e,2),a=t[0],c=t[1],r=a.loggedUser;Object(n.useEffect)((function(){fe.isloggedin().then((function(e){return s(e.data)})).catch((function(e){return s(null)}))}),[]);var s=function(e){c(Object(i.a)(Object(i.a)({},a),{},{loggedUser:e}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Z,{storeUser:s,loggedUser:r}),Object(u.jsx)("main",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(h,{})}}),Object(u.jsx)(o.b,{path:"/game-list",exact:!0,render:function(){return Object(u.jsx)(K,{loggedUser:r})}}),Object(u.jsx)(o.b,{path:"/game/details/:id",render:function(e){return Object(u.jsx)(P,Object(i.a)({loggedUser:r,storeUser:s},e))}}),Object(u.jsx)(o.b,{path:"/game/:id",render:function(e){return Object(u.jsx)(me,Object(i.a)({},e))}}),Object(u.jsx)(o.b,{path:"/user-list",render:function(){return Object(u.jsx)(ie,{})}}),Object(u.jsx)(o.b,{path:"/profile/:id",render:function(e){return Object(u.jsx)(be,Object(i.a)(Object(i.a)({},e),{},{loggedUser:r}))}}),Object(u.jsx)(o.b,{path:"/my-profile",render:function(e){return Object(u.jsx)(he,Object(i.a)({loggedUser:r,storeUser:s},e))}}),r?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.b,{path:"/signup",render:function(e){return Object(u.jsx)(ee,Object(i.a)(Object(i.a)({},e),{},{storeUser:s}))}}),Object(u.jsx)(o.b,{path:"/login",render:function(e){return Object(u.jsx)(ae,Object(i.a)(Object(i.a)({},e),{},{storeUser:s}))}}),Object(u.jsx)(pe,{exact:!0,path:"/logout"})]})]})}),Object(u.jsx)(ne,{})]})};a(113);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(ve,{})})}),document.getElementById("root"))},73:function(e,t,a){},74:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.a767fd23.chunk.js.map