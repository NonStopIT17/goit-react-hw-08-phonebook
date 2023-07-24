"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[266],{9266:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var i,o,a,t,l,s,p,x,d,c,u=(0,r(630).Z)(),b=(r(2791),r(168)),m=r(225),h=m.Z.div(i||(i=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=m.Z.h2(o||(o=(0,b.Z)(["\n  text-align: center;\n  font-size: 50px;\n"]))),f=m.Z.p(a||(a=(0,b.Z)(["\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),w=m.Z.input(t||(t=(0,b.Z)(["\n  width: 100%;\n  height: 40px;\n  margin-bottom: 10px;\n  outline: none;\n  border: solid 2px teal;\n  border-radius: 5px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    border: none;\n    border: solid 2px red;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  }\n"]))),Z=m.Z.button(l||(l=(0,b.Z)(["\n  width: 150px;\n  height: 40px;\n  border-radius: 5px;\n  color: white;\n  background-color: teal;\n  border: none;\n  margin: 0px, auto, 0px, auto;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: red;\n  }\n"]))),j=r(184);function v(){return(0,j.jsxs)(h,{children:[(0,j.jsx)(g,{children:"Authorization"}),(0,j.jsx)(f,{children:"Enter your login and password"}),(0,j.jsx)(w,{name:"email",id:"outlined-basic",label:"Email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email"}),(0,j.jsx)(w,{name:"password",type:"password",id:"outlined-basic",label:"Password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,j.jsx)(Z,{type:"submit",children:"Sign in"})]})}var y=m.Z.div(s||(s=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=m.Z.h2(p||(p=(0,b.Z)(["\n  text-align: center;\n  font-size: 50px;\n"]))),z=m.Z.p(x||(x=(0,b.Z)(["\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),_=m.Z.input(d||(d=(0,b.Z)(["\n  width: 100%;\n  height: 40px;\n  margin-bottom: 10px;\n  outline: none;\n  border: solid 2px teal;\n  border-radius: 5px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    border: none;\n    border: solid 2px red;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  }\n"]))),E=m.Z.button(c||(c=(0,b.Z)(["\n  width: 150px;\n  height: 40px;\n  border-radius: 5px;\n  color: white;\n  background-color: teal;\n  border: none;\n  margin: 0px, auto, 0px, auto;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: red;\n  }\n"])));function C(){return(0,j.jsxs)(y,{children:[(0,j.jsx)(k,{children:"Registration"}),(0,j.jsx)(z,{children:"Enter your registration details"}),(0,j.jsx)(_,{type:"text",name:"name",id:"outlined-basic",label:"Username",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 username"}),(0,j.jsx)(_,{type:"email",name:"email",id:"outlined-basic",label:"Email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email"}),(0,j.jsx)(_,{name:"password",type:"password",id:"outlined-basic",label:"Password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,j.jsx)(E,{type:"submit",children:"Registration"})]})}var R=r(7689),S=r(9434),D=r(8724);function I(){var n=(0,R.TH)(),e=(0,S.I0)();return(0,j.jsx)("div",{className:"root",children:(0,j.jsx)("form",{className:"form",onSubmit:function(r){r.preventDefault();var i=r.currentTarget;"/register"===n.pathname&&e((0,D.z2)({name:i.elements.name.value,email:i.elements.email.value,password:i.elements.password.value})),"/login"===n.pathname&&e((0,D.x4)({email:i.elements.email.value,password:i.elements.password.value})),i.reset()},children:(0,j.jsx)(u,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",maxWidth:640,margin:"auto",padding:5,borderRadius:3,boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",children:"/login"===n.pathname?(0,j.jsx)(v,{}):"/register"===n.pathname?(0,j.jsx)(C,{}):null})})})}}}]);
//# sourceMappingURL=266.ff82a92f.chunk.js.map