(this["webpackJsonpreactnd-project-would-you-rather-starter"]=this["webpackJsonpreactnd-project-would-you-rather-starter"]||[]).push([[0],{41:function(e,t,a){e.exports=a(54)},47:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),c=(a(46),a(47),a(6)),i=a(17),l=a(8),u=a(3),m={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"/1.svg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"/2.svg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"/3.svg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},d={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function E(e){return new Promise((function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){d=Object(u.a)(Object(u.a)({},d),{},Object(l.a)({},r.id,r)),m=Object(u.a)(Object(u.a)({},m),{},Object(l.a)({},n,Object(u.a)(Object(u.a)({},m[n]),{},{questions:m[n].questions.concat([r.id])}))),t(r)}),1e3)}))}function b(e){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){m=Object(u.a)(Object(u.a)({},m),{},Object(l.a)({},t,Object(u.a)(Object(u.a)({},m[t]),{},{answers:Object(u.a)(Object(u.a)({},m[t].answers),{},Object(l.a)({},a,n))}))),d=Object(u.a)(Object(u.a)({},d),{},Object(l.a)({},a,Object(u.a)(Object(u.a)({},d[a]),{},Object(l.a)({},n,Object(u.a)(Object(u.a)({},d[a][n]),{},{votes:d[a][n].votes.concat([t])}))))),e()}),500)}))}(e)}function O(){return function(e){return Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(u.a)({},m))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(u.a)({},d))}),1e3)}))]).then((function(e){var t=Object(i.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var a=t.users,n=t.questions;e(function(e){return{type:"RECEIVE_USERS",users:e}}(a)),e(function(e){return{type:"GET_QUESTIONS",questions:e}}(n))})).catch((function(){alert("Sorry, there was an error retrieving data, please refresh the page.")}))}}function p(e){return function(t){var a,n,r="optionOne"===e.vote;t(r?{type:"SET_ANSWER_ONE",questionId:(n=e).questionId,userId:n.userId}:{type:"SET_ANSWER_TWO",questionId:(a=e).questionId,userId:a.userId}),t(function(e){var t=e.questionId;return{type:"SET_USER_ANSWER",userId:e.userId,questionId:t,vote:e.vote}}(e)),b({authedUser:e.userId,qid:e.questionId,answer:e.vote}).catch((function(a){var n,o;t(r?{type:"UNSET_ANSWER_ONE",questionId:(o=e).questionId,userId:o.userId}:{type:"SET_ANSWER_TWO",questionId:(n=e).questionId,userId:n.userId}),t(function(e){var t=e.questionId;return{type:"REMOVE_USER_ANSWER",userId:e.userId,questionId:t,vote:e.vote}}(e)),alert("Sorry, there was an error saving your answer, please try again.")}))}}function v(e){return function(t){return(a=e,E(a)).then((function(e){var a,n;t({type:"SET_QUESTION",id:(a=e).id,author:a.author,optionOne:a.optionOne,optionTwo:a.optionTwo,timestamp:a.timestamp}),t((n=e.id,{type:"ADD_USER_QUESTION",userId:e.author,questionId:n}))})).catch((function(e){alert("Sorry, there was an error saving your poll, please try again.")}));var a}}var g=a(12),h=a(7);function j(e){return r.a.createElement("img",{src:e.avatarUrl,alt:e.name+" avatar",style:{width:"80%"}})}var f=a(61),w=a(55);function I(e){var t=new Date(e.question.timestamp).toLocaleDateString("en-US",{timeZone:"UTC"});return r.a.createElement(f.a,{style:{minWidth:"222px",maxWidth:"300px",margin:"auto"},className:"mb-4 text-center"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Header,null,e.users[e.question.author].name),r.a.createElement(f.a.Img,{variant:"top",as:j,name:e.users[e.question.author].name,avatarUrl:e.users[e.question.author].avatarURL}),r.a.createElement(f.a.Text,{className:"mb-3 mt-3"},"asked on ",t),r.a.createElement(f.a.Subtitle,{className:"mb-3 mt-3 text-muted"},"Would you rather..."),r.a.createElement(g.b,{className:"float-right",to:{pathname:"/questions/".concat(e.question.id)}},r.a.createElement(w.a,{variant:"success"},"View poll"))))}var x=a(56),T=a(33);function y(e){var t=Object.keys(e.questions),a=Object.keys(e.users[e.loggedInUser.id].answers);return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(T.a,null,r.a.createElement("p",{className:"text-center mb-4"},e.answered?"Answered polls selected":"Unanswered polls selected"))),r.a.createElement(x.a,null,e.answered?t.filter((function(e){return a.includes(e)})).sort((function(t,a){return e.questions[a].timestamp-e.questions[t].timestamp})).map((function(t){return r.a.createElement(T.a,{key:t},r.a.createElement(I,{id:t,question:e.questions[t],loggedInUser:e.loggedInUser,users:e.users}))})):t.filter((function(e){return!a.includes(e)})).sort((function(t,a){return e.questions[a].timestamp-e.questions[t].timestamp})).map((function(t){return r.a.createElement(T.a,{key:t},r.a.createElement(I,{id:t,question:e.questions[t],loggedInUser:e.loggedInUser,users:e.users}))}))))}function q(e){return{type:"SET_DISPLAY_ANSWERED_QUESTIONS",display:e}}var S=a(57);function N(e){var t=Object(c.b)(),a=Object(c.c)((function(e){return e.questions})),n=Object(c.c)((function(e){return e.users})),o=Object(c.c)((function(e){return e.loggedInUser.displayAnsweredQuestions}));return r.a.createElement(S.a,{as:"main"},r.a.createElement(x.a,null,r.a.createElement(T.a,null,r.a.createElement("h2",{className:"text-center mt-4 mb-4"},"Select polls to display:"))),r.a.createElement(x.a,{className:"justify-content-center  mb-4"},r.a.createElement(T.a,{sx:"4",className:"text-right m-2"},r.a.createElement(w.a,{variant:"success",disabled:!o&&!0,onClick:function(){t(q(null))}},"Unanswered")),r.a.createElement(T.a,{sx:"4",className:"text-left m-2"},r.a.createElement(w.a,{variant:"success",disabled:o&&!0,onClick:function(){t(q(!0))}},"Answered"))),r.a.createElement(y,{answered:o,questions:a,loggedInUser:e.loggedInUser,users:n}))}function U(e){return r.a.createElement(T.a,null,r.a.createElement(f.a,{style:{minWidth:"222px",maxWidth:"300px",margin:"auto"},className:"mb-4 text-center justify-content-center"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Header,null,e.users[e.id].name),r.a.createElement(f.a.Img,{className:"text-center justify-content-center",variant:"top",as:j,name:e.users[e.id].name,avatarUrl:e.users[e.id].avatarURL}),r.a.createElement(f.a.Text,{className:"mt-4"},"Questions: ",e.users[e.id].questions.length),r.a.createElement(f.a.Text,null,"Answers: ",Object.keys(e.users[e.id].answers).length),r.a.createElement(f.a.Text,null,"Score:"," ",e.users[e.id].questions.length+Object.keys(e.users[e.id].answers).length))))}function _(){var e=Object(c.c)((function(e){return e.users})),t=Object.keys(e);return r.a.createElement(S.a,{as:"main"},r.a.createElement(x.a,{className:"mt-4"},r.a.createElement(T.a,{className:"text-center"},r.a.createElement("h2",{className:"mt-4"},"Leaderboard"))),r.a.createElement(x.a,{className:"mt-4"},t.sort((function(t,a){return Object.keys(e[a].answers).length+e[a].questions.length-(Object.keys(e[t].answers).length+e[t].questions.length)})).map((function(t){return r.a.createElement(U,{key:t,id:t,users:e})}))))}var k=a(59);function R(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),m=u[0],d=u[1],E=Object(n.useState)(""),b=Object(i.a)(E,2),O=b[0],p=b[1],g=Object(c.b)();return O?r.a.createElement(h.a,{to:{pathname:"/"}}):r.a.createElement(S.a,{as:"main"},r.a.createElement(x.a,null,r.a.createElement(T.a,{className:"m-4 text-center"},r.a.createElement("h2",null,"Your question:"))),r.a.createElement(x.a,{className:"justify-content-center"},r.a.createElement(T.a,{className:"m-8 text-center ",xs:"12",sm:"8"},r.a.createElement(k.a,{onSubmit:function(t){return function(t){t.preventDefault();var a={author:e.loggedInUser.id,optionOneText:o,optionTwoText:m};g(v(a)).then((function(e){p(!0)}))}(t)}},r.a.createElement(k.a.Group,{controlId:"formOptionOne"},r.a.createElement(k.a.Label,null,"Would you rather.."),r.a.createElement(k.a.Control,{size:"lg",as:"textarea",rows:"3",placeholder:"Enter option one",onChange:function(e){return t=e.target.value,void s(t);var t},value:o,maxLength:400,required:!0})),r.a.createElement(k.a.Group,{controlId:"formOptionTwo"},r.a.createElement(k.a.Label,null,"or.."),r.a.createElement(k.a.Control,{size:"lg",as:"textarea",rows:"3",placeholder:"Enter option two",onChange:function(e){return t=e.target.value,void d(t);var t},value:m,maxLength:400,required:!0})),r.a.createElement(w.a,{type:"submit",className:"mt-4",variant:"success",value:"submit"},"Save poll")))))}function F(e){var t=Object(c.b)();return r.a.createElement(T.a,{sm:"12"},r.a.createElement(w.a,{variant:"success",className:"m-2",onClick:function(){t({type:"SET_LOGGED_IN_USER",user:e.user})}},e.name))}function W(){var e=Object(c.c)((function(e){return e.users})),t=Object.keys(e);return r.a.createElement(x.a,null,r.a.createElement(T.a,null,r.a.createElement("h2",{className:"text-center mt-4"},"Select user:"),r.a.createElement(x.a,{className:"mt-4 text-center"},t.map((function(t){return r.a.createElement(F,{key:e[t].id,name:e[t].name,user:e[t]})})))))}function A(){return r.a.createElement(S.a,{as:"main"},r.a.createElement(W,null))}var L=a(60);function D(e){var t=Object(c.b)(),a=Object(h.g)();return r.a.createElement(L.a,{fill:!0,variant:"pills",defaultActiveKey:a.pathname},r.a.createElement(L.a.Item,null,r.a.createElement(L.a.Link,{as:g.b,to:"/",eventKey:"/"},"Dashboard")),r.a.createElement(L.a.Item,null,r.a.createElement(L.a.Link,{as:g.b,to:"/add",eventKey:"/add"},"New poll")),r.a.createElement(L.a.Item,null,r.a.createElement(L.a.Link,{as:g.b,to:"/leaderboard",eventKey:"/leaderboard"},"Leaderboard")),e.loggedInUser&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a.Item,null,r.a.createElement(L.a.Link,{disabled:!0,eventKey:"username"},"Hello ",e.loggedInUser.name)),r.a.createElement(L.a.Item,null,r.a.createElement(L.a.Link,{eventKey:"logout",onClick:function(){t({type:"LOGOUT"})}},"Logout"))))}var z=a(58),C=a(62);function G(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"mt-4 text-center"},r.a.createElement(f.a.Header,{as:"h3"},"Results"),r.a.createElement(f.a,{className:"m-2 text-center",bg:"light"},r.a.createElement(f.a.Header,null,e.textForOne),r.a.createElement(f.a.Text,{className:"m-2"},e.userAnsweredOne&&r.a.createElement(z.a,{className:"m-1",variant:"info"},"Your answer")),e.percentageForOne.toFixed(0)>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a.Text,{as:"div",className:"m-2"},r.a.createElement(C.a,{label:"".concat(e.percentageForOne.toFixed(0),"%"),variant:e.percentageForOne>=e.percentageForTwo?"success":"warning",now:e.percentageForOne})),r.a.createElement(f.a.Text,{className:"m-2"},e.votesForOne," out of"," ",e.votesForOne+e.votesForTwo," votes")):r.a.createElement(f.a.Text,{as:"div",className:"m-2"},"No votes")),r.a.createElement(f.a,{className:"m-2 text-center",bg:"light"},r.a.createElement(f.a.Header,null,e.textForTwo),!e.userAnsweredOne&&r.a.createElement(f.a.Text,null,r.a.createElement(z.a,{className:"m-1",variant:"info"},"Your answer")),e.percentageForTwo.toFixed(0)>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a.Text,{as:"div",className:"m-2"},r.a.createElement(C.a,{label:"".concat(e.percentageForTwo.toFixed(0),"%"),variant:e.percentageForTwo>=e.percentageForOne?"success":"warning",now:e.percentageForTwo})),r.a.createElement(f.a.Text,{className:"m-2"},e.votesForTwo," out of"," ",e.votesForOne+e.votesForTwo," votes")):r.a.createElement(f.a.Text,{as:"div",className:"m-2"},"No votes"))))}function Q(e){var t=Object(c.b)(),a=Object(n.useState)([]),o=Object(i.a)(a,2),s=o[0],l=o[1];var u=e.optionOne.votes.includes(e.loggedInUser.id),m=e.optionTwo.votes.includes(e.loggedInUser.id),d=u||m;function E(e,t){return 0===e?0:0===t?100:100*e/(e+t)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{onSubmit:function(a){return function(a){a.preventDefault();var n="OptionOne"===s;n&&t(p({questionId:e.questionId,userId:e.loggedInUser.id,vote:"optionOne"})),n||t(p({questionId:e.questionId,userId:e.loggedInUser.id,vote:"optionTwo"}))}(a)}},r.a.createElement(k.a.Check,{inline:!0,label:e.optionOne.text,type:"radio",id:"answer-one-radio",defaultChecked:u,disabled:d,onChange:function(e){return l(e.target.value)},value:"OptionOne"}),r.a.createElement(k.a.Check,{inline:!0,label:e.optionTwo.text,type:"radio",id:"answer-two-radio",defaultChecked:m,disabled:d,onChange:function(e){return l(e.target.value)},value:"OptionTwo"}),!d&&r.a.createElement(w.a,{className:"mt-4",variant:"success",type:"submit",value:"submit"},"Vote now!")),d&&r.a.createElement(G,{votesForOne:e.optionOne.votes.length,votesForTwo:e.optionTwo.votes.length,textForOne:e.optionOne.text,textForTwo:e.optionTwo.text,percentageForOne:E(e.optionOne.votes.length,e.optionTwo.votes.length),percentageForTwo:E(e.optionTwo.votes.length,e.optionOne.votes.length),userAnsweredOne:u}))}function P(){return r.a.createElement(S.a,{as:"main"},r.a.createElement(x.a,{className:"mt-4"},r.a.createElement(T.a,{className:"text-center"},r.a.createElement("h2",{className:"mt-4"},"Not found 404"))))}function H(e){var t=Object(h.g)(),a=Object(h.h)(),n=t.pathname.replace(a.path,""),o=Object(c.c)((function(e){return e.questions[n]})),s=Object(c.c)((function(e){return e.users})),i=o?new Date(o.timestamp):null,l=o?i.toLocaleDateString("en-US",{timeZone:"UTC"}):null;return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(S.a,{as:"main"},r.a.createElement(x.a,null,r.a.createElement(T.a,null,r.a.createElement(f.a,{style:{minWidth:"222px",maxWidth:"300px",margin:"auto"},className:"mb-4 mt-4 text-center"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Header,null,s[o.author].name),r.a.createElement(f.a.Img,{variant:"top",as:j,name:s[o.author].name,avatarUrl:s[o.author].avatarURL}),r.a.createElement(f.a.Text,{className:"mb-3 mt-3"},"asked on ",l),r.a.createElement(f.a.Subtitle,{className:"mb-3 mt-3 text-muted"},"Would you rather..."),r.a.createElement(f.a.Text,{as:"div",className:"mb-3 mt-3"},r.a.createElement(Q,{questionId:n,optionOne:o.optionOne,optionTwo:o.optionTwo,loggedInUser:e.loggedInUser}))))))):r.a.createElement(h.b,{path:"*",component:P}))}function V(){var e=Object(c.b)();Object(n.useEffect)((function(){e(O())}),[e]);var t=Object(c.c)((function(e){return e.loggedInUser}));return r.a.createElement(g.a,null,r.a.createElement(D,{loggedInUser:t}),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0},t?r.a.createElement(N,{loggedInUser:t}):r.a.createElement(A,null)),r.a.createElement(h.b,{path:"/leaderboard",exact:!0},t?r.a.createElement(_,{loggedInUser:t}):r.a.createElement(A,null)),r.a.createElement(h.b,{path:"/add",exact:!0},t?r.a.createElement(R,{loggedInUser:t}):r.a.createElement(A,null)),r.a.createElement(h.b,{path:"/questions/"},t?r.a.createElement(H,{loggedInUser:t}):r.a.createElement(A,null)),r.a.createElement(h.b,{path:"*",component:P})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(16);var M=Object(K.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USERS":return Object(u.a)(Object(u.a)({},e),t.users);case"SET_USER_ANSWER":return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.userId,Object(u.a)(Object(u.a)({},e[t.userId]),{},{answers:Object(u.a)(Object(u.a)({},e[t.userId].answers),{},Object(l.a)({},t.questionId,t.vote))})));case"REMOVE_USER_ANSWER":return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.userId,Object(u.a)(Object(u.a)({},e[t.userId]),{},{answers:Object.keys(e[t.userId].answers).filter((function(e){return e!==t.questionId})).reduce((function(a,n){return a[n]=e[t.userId].answers[n],a}),{})})));case"ADD_USER_QUESTION":return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.userId,Object(u.a)(Object(u.a)({},e[t.userId]),{},{questions:e[t.userId].questions.concat(t.questionId)})));default:return Object(u.a)({},e)}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_QUESTIONS":return Object(u.a)(Object(u.a)({},e),t.questions);case"SET_ANSWER_ONE":return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.questionId,Object(u.a)(Object(u.a)({},e[t.questionId]),{},{optionOne:Object(u.a)(Object(u.a)({},e[t.questionId].optionOne),{},{votes:e[t.questionId].optionOne.votes.concat([t.userId])})})));case"UNSET_ANSWER_ONE":return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.questionId,Object(u.a)(Object(u.a)({},e[t.questionId]),{},{optionOne:Object(u.a)(Object(u.a)({},e[t.questionId].optionOne),{},{votes:e[t.questionId].optionOne.votes.filter((function(e){return e!==t.userId}))})})));case"SET_ANSWER_TWO":return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.questionId,Object(u.a)(Object(u.a)({},e[t.questionId]),{},{optionTwo:Object(u.a)(Object(u.a)({},e[t.questionId].optionTwo),{},{votes:e[t.questionId].optionTwo.votes.concat([t.userId])})})));case"SET_ANSWER_TWO":return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.questionId,Object(u.a)(Object(u.a)({},e[t.questionId]),{},{optionTwo:Object(u.a)(Object(u.a)({},e[t.questionId].optionOne),{},{votes:e[t.questionId].optionTwo.votes.filter((function(e){return e!==t.userId}))})})));case"SET_QUESTION":return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.id,{id:t.id,author:t.author,optionOne:t.optionOne,optionTwo:t.optionTwo,timestamp:t.timestamp}));default:return Object(u.a)({},e)}},loggedInUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED_IN_USER":return Object(u.a)(Object(u.a)({},e),t.user);case"SET_DISPLAY_ANSWERED_QUESTIONS":return Object(u.a)(Object(u.a)({},e),{},{displayAnsweredQuestions:t.display});case"LOGOUT":return null;default:return e}}}),B=a(37),Y=a(38),J=a.n(Y),$=Object(K.a)(B.a,J.a),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,Z=Object(K.e)(M,X($));s.a.render(r.a.createElement(c.a,{store:Z},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.9f9a9247.chunk.js.map