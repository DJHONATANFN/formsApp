"use strict";(self.webpackChunkformnApp=self.webpackChunkformnApp||[]).push([[850],{850:(G,h,i)=>{i.r(h),i.d(h,{AuthModule:()=>k});var a=i(95),m=i(6814),p=i(1643),e=i(4946),y=i(9735),f=i(5592),T=i(7394);class F extends T.w0{constructor(t,n){super()}schedule(t,n=0){return this}}const c={setInterval(r,t,...n){const{delegate:s}=c;return s?.setInterval?s.setInterval(r,t,...n):setInterval(r,t,...n)},clearInterval(r){const{delegate:t}=c;return(t?.clearInterval||clearInterval)(r)},delegate:void 0};var U=i(9039);const g={now:()=>(g.delegate||Date).now(),delegate:void 0};class d{constructor(t,n=d.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,s){return new this.schedulerActionCtor(this,t).schedule(s,n)}}d.now=g.now;const v=new class w extends d{constructor(t,n=d.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let s;this._active=!0;do{if(s=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,s){for(;t=n.shift();)t.unsubscribe();throw s}}}(class q extends F{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var s;if(this.closed)return this;this.state=t;const o=this.id,l=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(l,o,n)),this.pending=!0,this.delay=n,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(l,this.id,n),this}requestAsyncId(t,n,s=0){return c.setInterval(t.flush.bind(t,this),s)}recycleAsyncId(t,n,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return n;null!=n&&c.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(t,n);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let o,s=!1;try{this.work(t)}catch(l){s=!0,o=l||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:s}=n;this.work=this.state=this.scheduler=null,this.pending=!1,(0,U.P)(s,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}}),I=v;var C=i(5211),Z=i(8180),x=i(9360),S=i(8251),b=i(2420),N=i(975),V=i(1631),R=i(4829);function A(r,t){return t?n=>(0,C.z)(t.pipe((0,Z.q)(1),function P(){return(0,x.e)((r,t)=>{r.subscribe((0,S.x)(t,b.Z))})}()),n.pipe(A(r))):(0,V.z)((n,s)=>(0,R.Xf)(r(n,s)).pipe((0,Z.q)(1),(0,N.h)(n)))}var j=i(671);let O=(()=>{var r;class t{constructor(){}validate(s){const o=s.value;return new f.y(u=>{console.log({email:o}),"jhonatan@gmail.com"===o&&(u.next({emailTaken:!0}),u.complete()),u.next(null),u.complete()}).pipe(function L(r,t=v){const n=function J(r=0,t,n=I){let s=-1;return null!=t&&((0,j.K)(t)?n=t:s=t),new f.y(o=>{let l=function E(r){return r instanceof Date&&!isNaN(r)}(r)?+r-n.now():r;l<0&&(l=0);let u=0;return n.schedule(function(){o.closed||(o.next(u++),0<=s?this.schedule(void 0,s):o.complete())},l)})}(r,t);return A(()=>n)}(3e3))}registerOnValidatorChange(s){throw new Error("Method not implemented.")}}return(r=t).\u0275fac=function(s){return new(s||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),t})();function Y(r,t){1&r&&(e.TgZ(0,"span",13),e._uU(1," Debe de ser en formato de nombre y apellido "),e.qZA())}function M(r,t){1&r&&(e.TgZ(0,"span",13),e._uU(1," mensaje de error del email "),e.qZA())}function z(r,t){1&r&&(e.TgZ(0,"span",13),e._uU(1," El username no puede ser Strider "),e.qZA())}function Q(r,t){1&r&&(e.TgZ(0,"span",13),e._uU(1," La contrase\xf1a debe de ser mayor de 6 caracteres. "),e.qZA())}function B(r,t){1&r&&(e.TgZ(0,"span",13),e._uU(1," Las contrase\xf1as deben de ser iguales "),e.qZA())}const D=[{path:"",children:[{path:"sign-up",component:(()=>{var r;class t{constructor(s,o,l){this.fb=s,this.validatorsService=o,this.emailValidator=l,this.myForm=this.fb.group({name:["",[a.kI.required,a.kI.pattern(this.validatorsService.firstNameAndLastnamePattern)]],email:["",[a.kI.required,a.kI.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],username:["",[a.kI.required,this.validatorsService.cantBeStrider]],password:["",[a.kI.required,a.kI.minLength(6)]],password2:["",[a.kI.required]]},{validators:[this.validatorsService.isFieldOneEqualFieldTwo("password","password2")]})}isValidField(s){return this.validatorsService.isValidField(this.myForm,s)}onSubmit(){this.myForm.markAllAsTouched()}}return(r=t).\u0275fac=function(s){return new(s||r)(e.Y36(a.qu),e.Y36(y.S),e.Y36(O))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:76,vars:27,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","placeholder","Nombre del usuario","formControlName","name",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","placeholder","Email del usuario","formControlName","email",1,"form-control"],["type","text","placeholder","Nombre c\xf3digo del usuario","formControlName","username",1,"form-control"],["type","password","placeholder","Password de su cuenta","formControlName","password",1,"form-control"],["type","password","placeholder","Confirmar la contrase\xf1a","formControlName","password2",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(s,o){1&s&&(e.TgZ(0,"h2"),e._uU(1,"Validaciones Reactivas"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,Y,2,0,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,M,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Username"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,z,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",3)(25,"label",4),e._uU(26,"Password"),e.qZA(),e.TgZ(27,"div",5),e._UZ(28,"input",10),e.YNc(29,Q,2,0,"span",7),e.qZA()(),e.TgZ(30,"div",3)(31,"label",4),e._uU(32,"Confirmar"),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"input",11),e.YNc(35,B,2,0,"span",7),e.qZA()(),e.TgZ(36,"div",0)(37,"div",1)(38,"button",12),e._uU(39," Crear "),e.qZA()()()()()(),e.TgZ(40,"h2"),e._uU(41),e.qZA(),e.TgZ(42,"h2"),e._uU(43),e.qZA(),e.TgZ(44,"h2"),e._uU(45),e.qZA(),e.TgZ(46,"h2"),e._uU(47,"Form errors"),e.qZA(),e.TgZ(48,"pre"),e._uU(49),e.ALo(50,"json"),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Nombre"),e.qZA(),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA(),e.TgZ(56,"h5"),e._uU(57,"Email"),e.qZA(),e.TgZ(58,"pre"),e._uU(59),e.ALo(60,"json"),e.qZA(),e.TgZ(61,"h5"),e._uU(62,"Username"),e.qZA(),e.TgZ(63,"pre"),e._uU(64),e.ALo(65,"json"),e.qZA(),e.TgZ(66,"h5"),e._uU(67,"Password"),e.qZA(),e.TgZ(68,"pre"),e._uU(69),e.ALo(70,"json"),e.qZA(),e.TgZ(71,"h5"),e._uU(72,"Confirmar"),e.qZA(),e.TgZ(73,"pre"),e._uU(74),e.ALo(75,"json"),e.qZA()),2&s&&(e.xp6(5),e.Q6J("formGroup",o.myForm),e.xp6(6),e.Q6J("ngIf",o.isValidField("name")),e.xp6(6),e.Q6J("ngIf",o.isValidField("email")),e.xp6(6),e.Q6J("ngIf",o.isValidField("username")),e.xp6(6),e.Q6J("ngIf",o.isValidField("password")),e.xp6(6),e.Q6J("ngIf",o.isValidField("password2")),e.xp6(6),e.hij("Form Valid: ",o.myForm.valid,""),e.xp6(2),e.hij("Form Status: ",o.myForm.status,""),e.xp6(2),e.hij("Form Pending: ",o.myForm.pending," "),e.xp6(4),e.Oqu(e.lcZ(50,15,o.myForm.errors)),e.xp6(5),e.Oqu(e.lcZ(55,17,o.myForm.controls.name.errors)),e.xp6(5),e.Oqu(e.lcZ(60,19,o.myForm.controls.email.errors)),e.xp6(5),e.Oqu(e.lcZ(65,21,o.myForm.controls.username.errors)),e.xp6(5),e.Oqu(e.lcZ(70,23,o.myForm.value.password)),e.xp6(5),e.Oqu(e.lcZ(75,25,o.myForm.controls.password2.errors)))},dependencies:[m.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,m.Ts],encapsulation:2}),t})()},{path:"**",redirectTo:"sign-up"}]}];let X=(()=>{var r;class t{}return(r=t).\u0275fac=function(s){return new(s||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.Bz.forChild(D),p.Bz]}),t})(),k=(()=>{var r;class t{}return(r=t).\u0275fac=function(s){return new(s||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.ez,X,a.UX]}),t})()}}]);