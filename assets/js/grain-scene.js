var kc=0,yl=1,Gc=2;var tr=1,Hc=2,cs=3,Gn=0,Ve=1,Ze=2,Pn=0,Ai=1,_l=2,Al=3,Ml=4,Wc=5;var ei=100,Xc=101,qc=102,Yc=103,Kc=104,Zc=200,Jc=201,Qc=202,jc=203,qr=204,Yr=205,$c=206,th=207,eh=208,nh=209,ih=210,sh=211,rh=212,ah=213,oh=214,Kr=0,Zr=1,Jr=2,Mi=3,Qr=4,jr=5,$r=6,ta=7,La=0,lh=1,ch=2,_n=0,Sl=1,bl=2,Tl=3,er=4,wl=5,El=6,Cl=7;var Rl=300,oi=301,Ei=302,Ua=303,Na=304,nr=306,Si=1e3,bn=1001,ea=1002,Fe=1003,hh=1004;var ir=1005;var ze=1006,Da=1007;var li=1008;var $e=1009,Il=1010,Pl=1011,hs=1012,Fa=1013,An=1014,un=1015,Ln=1016,Ba=1017,Oa=1018,us=1020,Ll=35902,Ul=35899,Nl=1021,Dl=1022,dn=1023,Tn=1026,ci=1027,za=1028,Va=1029,hi=1030,ka=1031;var Ga=1033,sr=33776,rr=33777,ar=33778,or=33779,Ha=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Ka=37492,Za=37496,Ja=37488,Qa=37489,lr=37490,ja=37491,$a=37808,to=37809,eo=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,xo=36283,vo=36284,cr=36285,yo=36286;var Us=2300,na=2301,Xr=2302,ll=2303,cl=2400,hl=2401,ul=2402;var uh=3200;var hr=0,dh=1,qn="",He="srgb",Ns="srgb-linear",Ds="linear",le="srgb";var yi=7680;var dl=519,fh=512,ph=513,mh=514,_o=515,gh=516,xh=517,Ao=518,vh=519,fl=35044,Fl=35048;var Bl="300 es",yn=2e3,Ji=2001;function au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ou(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){let i=Fs("canvas");return i.style.display="block",i}var pc={},Qi=null;function Ol(...i){let t="THREE."+i.shift();Qi?Qi("log",t,...i):console.log(t,...i)}function _h(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Dt(...i){i=_h(i);let t="THREE."+i.shift();if(Qi)Qi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=_h(i);let t="THREE."+i.shift();if(Qi)Qi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _i(...i){let t=i.join(" ");t in pc||(pc[t]=!0,Dt(...i))}function Ah(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Mh={[Kr]:Zr,[Jr]:$r,[Qr]:ta,[Mi]:jr,[Zr]:Kr,[$r]:Jr,[ta]:Qr,[jr]:Mi},wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Do=Math.PI/180,ia=180/Math.PI;function ur(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function Fo(i,t,e){return(1-e)*i+e*t}function bs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wl=class Wl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;var Mt=Wl,Ee=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],x=r[a+2],A=r[a+3];if(f!==A||c!==u||l!==d||h!==x){let m=c*u+l*d+h*x+f*A;m<0&&(u=-u,d=-d,x=-x,A=-A,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),b=Math.sin(w);p=Math.sin(p*w)/b,o=Math.sin(o*w)/b,c=c*p+u*o,l=l*p+d*o,h=h*p+x*o,f=f*p+A*o}else{c=c*p+u*o,l=l*p+d*o,h=h*p+x*o,f=f*p+A*o;let w=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=w,l*=w,h*=w,f*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*f+c*d-l*u,t[e+1]=c*x+h*u+l*f-o*d,t[e+2]=l*x+h*d+o*u-c*f,t[e+3]=h*x-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),d=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*x,this._y=l*d*f-u*h*x,this._z=l*h*x+u*d*f,this._w=l*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+l*d*x,this._y=l*d*f-u*h*x,this._z=l*h*x-u*d*f,this._w=l*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-l*d*x,this._y=l*d*f+u*h*x,this._z=l*h*x+u*d*f,this._w=l*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-l*d*x,this._y=l*d*f+u*h*x,this._z=l*h*x-u*d*f,this._w=l*h*f+u*d*x;break;case"YZX":this._x=u*h*f+l*d*x,this._y=l*d*f+u*h*x,this._z=l*h*x-u*d*f,this._w=l*h*f-u*d*x;break;case"XZY":this._x=u*h*f-l*d*x,this._y=l*d*f-u*h*x,this._z=l*h*x+u*d*f,this._w=l*h*f+u*d*x;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xl=class Xl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bo.copy(this).projectOnVector(t),this.sub(Bo)}reflect(t){return this.sub(Bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xl.prototype.isVector3=!0;var I=Xl,Bo=new I,mc=new Ee,ql=class ql{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],A=s[0],m=s[3],p=s[6],w=s[1],b=s[4],_=s[7],C=s[2],M=s[5],R=s[8];return r[0]=a*A+o*w+c*C,r[3]=a*m+o*b+c*M,r[6]=a*p+o*_+c*R,r[1]=l*A+h*w+f*C,r[4]=l*m+h*b+f*M,r[7]=l*p+h*_+f*R,r[2]=u*A+d*w+x*C,r[5]=u*m+d*b+x*M,r[8]=u*p+d*_+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,x=e*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/x;return t[0]=f*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=u*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=d*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ql.prototype.isMatrix3=!0;var Ht=ql,Oo=new Ht,gc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cu(){let i={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ns]:{primaries:t,whitePoint:n,transfer:Ds,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:le,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}var $t=cu();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fi,sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=Fs("canvas")),Fi.width=t.width,Fi.height=t.height;let s=Fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hu=0,ji=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zo(s[a].image)):r.push(zo(s[a]))}else r=zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var uu=0,Vo=new I,Ke=class i extends wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=ze,a=li,o=dn,c=$e,l=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ur(),this.name="",this.source=new ji(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Si:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Si:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Rl;Ke.DEFAULT_ANISOTROPY=1;var Yl=class Yl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],x=c[9],A=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-A)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+A)<.1&&Math.abs(x+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,_=(d+1)/2,C=(p+1)/2,M=(h+u)/4,R=(f+A)/4,v=(x+m)/4;return b>_&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=R/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=v/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=v/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-x)*(m-x)+(f-A)*(f-A)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(f-A)/w,this.z=(u-h)/w,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yl.prototype.isVector4=!0;var ye=Yl,ra=class extends wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ke(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ji(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ra{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Bs=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pa=class Pa{constructor(t,e,n,s,r,a,o,c,l,h,f,u,d,x,A,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,d,x,A,m)}set(t,e,n,s,r,a,o,c,l,h,f,u,d,x,A,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=x,p[11]=A,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,x=o*h,A=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+x*l,e[5]=u-A*l,e[9]=-o*c,e[2]=A-u*l,e[6]=x+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,x=l*h,A=l*f;e[0]=u+A*o,e[4]=x*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=A+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,x=l*h,A=l*f;e[0]=u-A*o,e[4]=-a*f,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=A-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,x=o*h,A=o*f;e[0]=c*h,e[4]=x*l-d,e[8]=u*l+A,e[1]=c*f,e[5]=A*l+u,e[9]=d*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,x=o*c,A=o*l;e[0]=c*h,e[4]=A-u*f,e[8]=x*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+x,e[10]=u-A*f}else if(t.order==="XZY"){let u=a*c,d=a*l,x=o*c,A=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+A,e[5]=a*h,e[9]=d*f-x,e[2]=x*f-d,e[6]=o*h,e[10]=A*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(du,t,fu)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Kn.crossVectors(n,tn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Kn.crossVectors(n,tn)),Kn.normalize(),Mr.crossVectors(tn,Kn),s[0]=Kn.x,s[4]=Mr.x,s[8]=tn.x,s[1]=Kn.y,s[5]=Mr.y,s[9]=tn.y,s[2]=Kn.z,s[6]=Mr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],A=n[6],m=n[10],p=n[14],w=n[3],b=n[7],_=n[11],C=n[15],M=s[0],R=s[4],v=s[8],E=s[12],P=s[1],L=s[5],B=s[9],q=s[13],K=s[2],V=s[6],Y=s[10],H=s[14],j=s[3],tt=s[7],pt=s[11],dt=s[15];return r[0]=a*M+o*P+c*K+l*j,r[4]=a*R+o*L+c*V+l*tt,r[8]=a*v+o*B+c*Y+l*pt,r[12]=a*E+o*q+c*H+l*dt,r[1]=h*M+f*P+u*K+d*j,r[5]=h*R+f*L+u*V+d*tt,r[9]=h*v+f*B+u*Y+d*pt,r[13]=h*E+f*q+u*H+d*dt,r[2]=x*M+A*P+m*K+p*j,r[6]=x*R+A*L+m*V+p*tt,r[10]=x*v+A*B+m*Y+p*pt,r[14]=x*E+A*q+m*H+p*dt,r[3]=w*M+b*P+_*K+C*j,r[7]=w*R+b*L+_*V+C*tt,r[11]=w*v+b*B+_*Y+C*pt,r[15]=w*E+b*q+_*H+C*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],x=t[3],A=t[7],m=t[11],p=t[15],w=c*d-l*u,b=o*d-l*f,_=o*u-c*f,C=a*d-l*h,M=a*u-c*h,R=a*f-o*h;return e*(A*w-m*b+p*_)-n*(x*w-m*C+p*M)+s*(x*b-A*C+p*R)-r*(x*_-A*M+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],x=t[12],A=t[13],m=t[14],p=t[15],w=e*o-n*a,b=e*c-s*a,_=e*l-r*a,C=n*c-s*o,M=n*l-r*o,R=s*l-r*c,v=h*A-f*x,E=h*m-u*x,P=h*p-d*x,L=f*m-u*A,B=f*p-d*A,q=u*p-d*m,K=w*q-b*B+_*L+C*P-M*E+R*v;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/K;return t[0]=(o*q-c*B+l*L)*V,t[1]=(s*B-n*q-r*L)*V,t[2]=(A*R-m*M+p*C)*V,t[3]=(u*M-f*R-d*C)*V,t[4]=(c*P-a*q-l*E)*V,t[5]=(e*q-s*P+r*E)*V,t[6]=(m*_-x*R-p*b)*V,t[7]=(h*R-u*_+d*b)*V,t[8]=(a*B-o*P+l*v)*V,t[9]=(n*P-e*B-r*v)*V,t[10]=(x*M-A*_+p*w)*V,t[11]=(f*_-h*M-d*w)*V,t[12]=(o*E-a*L-c*v)*V,t[13]=(e*L-n*E+s*v)*V,t[14]=(A*b-x*C-m*w)*V,t[15]=(h*C-f*b+u*w)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,x=r*f,A=a*h,m=a*f,p=o*f,w=c*l,b=c*h,_=c*f,C=n.x,M=n.y,R=n.z;return s[0]=(1-(A+p))*C,s[1]=(d+_)*C,s[2]=(x-b)*C,s[3]=0,s[4]=(d-_)*M,s[5]=(1-(u+p))*M,s[6]=(m+w)*M,s[7]=0,s[8]=(x+b)*R,s[9]=(m-w)*R,s[10]=(1-(u+A))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bi.set(s[0],s[1],s[2]).length(),o=Bi.set(s[4],s[5],s[6]).length(),c=Bi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gn.copy(this);let l=1/a,h=1/o,f=1/c;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,e.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=yn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),x,A;if(c)x=r/(a-r),A=a*r/(a-r);else if(o===yn)x=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===Ji)x=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),x,A;if(c)x=1/(a-r),A=a/(a-r);else if(o===yn)x=-2/(a-r),A=-(a+r)/(a-r);else if(o===Ji)x=-1/(a-r),A=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Pa.prototype.isMatrix4=!0;var re=Pa,Bi=new I,gn=new re,du=new I(0,0,0),fu=new I(1,1,1),Kn=new I,Mr=new I,tn=new I,vc=new re,yc=new Ee,En=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pu=0,_c=new I,Oi=new Ee,Fn=new re,Sr=new I,Ts=new I,mu=new I,gu=new Ee,Ac=new I(1,0,0),Mc=new I(0,1,0),Sc=new I(0,0,1),bc={type:"added"},xu={type:"removed"},zi={type:"childadded",child:null},ko={type:"childremoved",child:null},Ie=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new En,n=new Ee,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ht}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ts,Sr,this.up):Fn.lookAt(Sr,Ts,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},vu={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let m=e.getJointPose(A,n),p=this._getHandJoint(l,A);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;l.inputState.pinching&&u>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},br={h:0,s:0,l:0};function Go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var _t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=lu(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Go(a,r,t+1/3),this.g=Go(a,r,t),this.b=Go(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return $t.workingToColorSpace(Ge.copy(this),t),Math.round(Kt(Ge.r*255,0,255))*65536+Math.round(Kt(Ge.g*255,0,255))*256+Math.round(Kt(Ge.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=He){$t.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(br);let n=Fo(Zn.h,br.h,e),s=Fo(Zn.s,br.s,e),r=Fo(Zn.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new _t;_t.NAMES=Sh;var zs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bi=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new I,Bn=new I,Ho=new I,On=new I,Vi=new I,ki=new I,Tc=new I,Wo=new I,Xo=new I,qo=new I,Yo=new ye,Ko=new ye,Zo=new ye,ti=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Bn.subVectors(n,e),Ho.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(Bn),c=xn.dot(Ho),l=Bn.dot(Bn),h=Bn.dot(Ho),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Yo.setScalar(0),Ko.setScalar(0),Zo.setScalar(0),Yo.fromBufferAttribute(t,e),Ko.fromBufferAttribute(t,n),Zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector(Ko,r.y),a.addScaledVector(Zo,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Bn.subVectors(t,e),xn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),ki.subVectors(r,n),Wo.subVectors(t,n);let c=Vi.dot(Wo),l=ki.dot(Wo);if(c<=0&&l<=0)return e.copy(n);Xo.subVectors(t,s);let h=Vi.dot(Xo),f=ki.dot(Xo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Vi,a);qo.subVectors(t,r);let d=Vi.dot(qo),x=ki.dot(qo);if(x>=0&&d<=x)return e.copy(r);let A=d*l-c*x;if(A<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(ki,o);let m=h*x-d*f;if(m<=0&&f-h>=0&&d-x>=0)return Tc.subVectors(r,s),o=(f-h)/(f-h+(d-x)),e.copy(s).addScaledVector(Tc,o);let p=1/(m+A+u);return a=A*p,o=u*p,e.copy(n).addScaledVector(Vi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),wr.subVectors(this.max,ws),Gi.subVectors(t.a,ws),Hi.subVectors(t.b,ws),Wi.subVectors(t.c,ws),Jn.subVectors(Hi,Gi),Qn.subVectors(Wi,Hi),mi.subVectors(Gi,Wi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-mi.y,mi.x,0];return!Jo(e,Gi,Hi,Wi,wr)||(e=[1,0,0,0,1,0,0,0,1],!Jo(e,Gi,Hi,Wi,wr))?!1:(Er.crossVectors(Jn,Qn),e=[Er.x,Er.y,Er.z],Jo(e,Gi,Hi,Wi,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new I,new I,new I,new I,new I,new I,new I,new I],vn=new I,Tr=new Cn,Gi=new I,Hi=new I,Wi=new I,Jn=new I,Qn=new I,mi=new I,ws=new I,wr=new I,Er=new I,gi=new I;function Jo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var we=new I,Cr=new Mt,yu=0,We=class extends wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vs=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ks=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},_u=new Cn,Es=new I,Qo=new I,Hn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_u.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);let e=Es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Qo)),this.expandByPoint(Es.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Au=0,ln=new re,jo=new Ie,Xi=new I,en=new Cn,Cs=new Cn,De=new I,Ce=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?ks:Vs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(en.min,Cs.min),en.expandByPoint(De),De.addVectors(en.max,Cs.max),en.expandByPoint(De)):(en.expandByPoint(Cs.min),en.expandByPoint(Cs.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)De.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(t,l),De.add(Xi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new I,c[v]=new I;let l=new I,h=new I,f=new I,u=new Mt,d=new Mt,x=new Mt,A=new I,m=new I;function p(v,E,P){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,E),x.fromBufferAttribute(r,P),h.sub(l),f.sub(l),d.sub(u),x.sub(u);let L=1/(d.x*x.y-x.x*d.y);isFinite(L)&&(A.copy(h).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(L),o[v].add(A),o[E].add(A),o[P].add(A),c[v].add(m),c[E].add(m),c[P].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let v=0,E=w.length;v<E;++v){let P=w[v],L=P.start,B=P.count;for(let q=L,K=L+B;q<K;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let b=new I,_=new I,C=new I,M=new I;function R(v){C.fromBufferAttribute(s,v),M.copy(C);let E=o[v];b.copy(E),b.sub(C.multiplyScalar(C.dot(E))).normalize(),_.crossVectors(M,E);let L=_.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,L)}for(let v=0,E=w.length;v<E;++v){let P=w[v],L=P.start,B=P.count;for(let q=L,K=L+B;q<K;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,f=new I;if(t)for(let u=0,d=t.count;u<d;u+=3){let x=t.getX(u+0),A=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,x=0;for(let A=0,m=c.length;A<m;A++){o.isInterleavedBufferAttribute?d=c[A]*o.data.stride+o.offset:d=c[A]*h;for(let p=0;p<h;p++)u[x++]=l[d++]}return new We(u,h,f)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Mu=0,Rn=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=Ai,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Vn=new I,$o=new I,Rr=new I,jn=new I,tl=new I,Ir=new I,el=new I,Gs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub($o);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Rr),o=jn.dot(this.direction),c=-jn.dot(Rr),l=jn.lengthSq(),h=Math.abs(1-a*a),f,u,d,x;if(h>0)if(f=a*c-o,u=a*o-c,x=r*h,f>=0)if(u>=-x)if(u<=x){let A=1/h;f*=A,u*=A,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=x?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy($o).addScaledVector(Rr,u),d}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){tl.subVectors(e,t),Ir.subVectors(n,t),el.crossVectors(tl,Ir);let a=this.direction.dot(el),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);let c=o*this.direction.dot(Ir.crossVectors(jn,Ir));if(c<0)return null;let l=o*this.direction.dot(tl.cross(jn));if(l<0||c+l>a)return null;let h=-o*jn.dot(el);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ni=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wc=new re,xi=new Gs,Pr=new Hn,Ec=new I,Lr=new I,Ur=new I,Nr=new I,nl=new I,Dr=new I,Cc=new I,Fr=new I,ie=class extends Ie{constructor(t=new Ce,e=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(nl.fromBufferAttribute(f,t),a?Dr.addScaledVector(nl,h):Dr.addScaledVector(nl.sub(e),h))}e.add(Dr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(Pr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Pr,Ec)===null||xi.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(wc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,A=u.length;x<A;x++){let m=u[x],p=a[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,C=b;_<C;_+=3){let M=o.getX(_),R=o.getX(_+1),v=o.getX(_+2);s=Br(this,p,t,n,l,h,f,M,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),A=Math.min(o.count,d.start+d.count);for(let m=x,p=A;m<p;m+=3){let w=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);s=Br(this,a,t,n,l,h,f,w,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,A=u.length;x<A;x++){let m=u[x],p=a[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,C=b;_<C;_+=3){let M=_,R=_+1,v=_+2;s=Br(this,p,t,n,l,h,f,M,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),A=Math.min(c.count,d.start+d.count);for(let m=x,p=A;m<p;m+=3){let w=m,b=m+1,_=m+2;s=Br(this,a,t,n,l,h,f,w,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Su(i,t,e,n,s,r,a,o){let c;if(t.side===Ve?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Gn,o),c===null)return null;Fr.copy(o),Fr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Fr);return l<e.near||l>e.far?null:{distance:l,point:Fr.clone(),object:i}}function Br(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Lr),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Nr);let h=Su(i,t,e,n,Lr,Ur,Nr,Cc);if(h){let f=new I;ti.getBarycoord(Cc,Lr,Ur,Nr,f),s&&(h.uv=ti.getInterpolatedAttribute(s,o,c,l,f,new Mt)),r&&(h.uv1=ti.getInterpolatedAttribute(r,o,c,l,f,new Mt)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,c,l,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};ti.getNormal(Lr,Ur,Nr,u.normal),h.face=u,h.barycoord=f}return h}var Hs=class extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Fe,h=Fe,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qi=new re,Rc=new re,Or=[],Ic=new Cn,bu=new re,Rs=new ie,Is=new Hn,In=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Ic.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(Ic)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Is.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),Rc.multiplyMatrices(n,qi),Rs.matrixWorld=Rc,Rs.raycast(t,Or);for(let a=0,o=Or.length;a<o;a++){let c=Or[a];c.instanceId=r,c.object=this,e.push(c)}Or.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hs(new Float32Array(s*this.count),s,this.count,za,un));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},il=new I,Tu=new I,wu=new Ht,Sn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=il.subVectors(n,e).cross(Tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wu.getNormalMatrix(t),s=this.coplanarPoint(il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new Hn,Eu=new Mt(.5,.5),zr=new I,es=class{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],x=r[8],A=r[9],m=r[10],p=r[11],w=r[12],b=r[13],_=r[14],C=r[15];if(s[0].setComponents(l-a,d-h,p-x,C-w).normalize(),s[1].setComponents(l+a,d+h,p+x,C+w).normalize(),s[2].setComponents(l+o,d+f,p+A,C+b).normalize(),s[3].setComponents(l-o,d-f,p-A,C-b).normalize(),n)s[4].setComponents(c,u,m,_).normalize(),s[5].setComponents(l-c,d-u,p-m,C-_).normalize();else if(s[4].setComponents(l-c,d-u,p-m,C-_).normalize(),e===yn)s[5].setComponents(l+c,d+u,p+m,C+_).normalize();else if(e===Ji)s[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);let e=Eu.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zr.x=s.normal.x>0?t.max.x:t.min.x,zr.y=s.normal.y>0?t.max.y:t.min.y,zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oa=class extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pc=new re,pl=new Gs,Vr=new Hn,kr=new I,Ws=class extends Ie{constructor(t=new Ce,e=new oa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;Pc.copy(s).invert(),pl.copy(t.ray).applyMatrix4(Pc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let x=u,A=d;x<A;x++){let m=l.getX(x);kr.fromBufferAttribute(f,m),Lc(kr,m,c,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let x=u,A=d;x<A;x++)kr.fromBufferAttribute(f,x),Lc(kr,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lc(i,t,e,n,s,r,a){let o=pl.distanceSqToPoint(i);if(o<e){let c=new I;pl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Xs=class extends Ke{constructor(t=[],e=oi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ns=class extends Ke{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wn=class extends Ke{constructor(t,e,n=An,s,r,a,o=Fe,c=Fe,l,h=Tn,f=1){if(h!==Tn&&h!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ji(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},la=class extends Wn{constructor(t,e=An,n=oi,s,r,a=Fe,o=Fe,c,l=Tn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qs=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(f,2));function x(A,m,p,w,b,_,C,M,R,v,E){let P=_/R,L=C/v,B=_/2,q=C/2,K=M/2,V=R+1,Y=v+1,H=0,j=0,tt=new I;for(let pt=0;pt<Y;pt++){let dt=pt*L-q;for(let At=0;At<V;At++){let Zt=At*P-B;tt[A]=Zt*w,tt[m]=dt*b,tt[p]=K,l.push(tt.x,tt.y,tt.z),tt[A]=0,tt[m]=0,tt[p]=M>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(At/R),f.push(1-pt/v),H+=1}}for(let pt=0;pt<v;pt++)for(let dt=0;dt<R;dt++){let At=u+dt+V*pt,Zt=u+dt+V*(pt+1),fe=u+(dt+1)+V*(pt+1),te=u+(dt+1)+V*pt;c.push(At,Zt,te),c.push(Zt,fe,te),j+=6}o.addGroup(d,j,E),d+=j,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ys=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new I,h=new Mt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Mt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new re;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Kt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ks=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ca=class extends Ks{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Uc=new I,Nc=new I,sl=new zl,rl=new zl,al=new zl,Xn=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Nc.subVectors(s[0],s[1]).add(s[0]),l=Nc);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Uc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Uc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(f),d),A=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);A<1e-4&&(A=1),x<1e-4&&(x=A),m<1e-4&&(m=A),sl.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,x,A,m),rl.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,x,A,m),al.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,x,A,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),rl.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),al.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(sl.calc(c),rl.calc(c),al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Cu(i,t){let e=1-i;return e*e*t}function Ru(i,t){return 2*(1-i)*i*t}function Iu(i,t){return i*i*t}function Ps(i,t,e,n){return Cu(i,t)+Ru(i,e)+Iu(i,n)}function Pu(i,t){let e=1-i;return e*e*e*t}function Lu(i,t){let e=1-i;return 3*e*e*i*t}function Uu(i,t){return 3*(1-i)*i*i*t}function Nu(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return Pu(i,t)+Lu(i,e)+Uu(i,n)+Nu(i,s)}var ha=class extends hn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ua=class extends hn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y),Ls(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},da=class extends hn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends hn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends hn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ti=class extends hn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y),Ps(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},is=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Dc(o,c.x,l.x,h.x,f.x),Dc(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},Du=Object.freeze({__proto__:null,ArcCurve:ca,CatmullRomCurve3:Xn,CubicBezierCurve:ha,CubicBezierCurve3:ua,EllipseCurve:Ks,LineCurve:da,LineCurve3:fa,QuadraticBezierCurve:pa,QuadraticBezierCurve3:Ti,SplineCurve:is});var ss=class i extends Ce{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,f=new I,u=new Mt,d=new I,x=new I,A=new I,m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,A.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(A.x,A.y,A.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.x+=A.x,d.y+=A.y,d.z+=A.z,d.normalize(),c.push(d.x,d.y,d.z),A.copy(x)}for(let w=0;w<=e;w++){let b=n+w*h*s,_=Math.sin(b),C=Math.cos(b);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*_,f.y=t[M].y,f.z=t[M].x*C,a.push(f.x,f.y,f.z),u.x=w/e,u.y=M/(t.length-1),o.push(u.x,u.y);let R=c[3*M+0]*_,v=c[3*M+1],E=c[3*M+0]*C;l.push(R,v,E)}}for(let w=0;w<e;w++)for(let b=0;b<t.length-1;b++){let _=b+w*t.length,C=_,M=_+t.length,R=_+t.length+1,v=_+1;r.push(C,M,v),r.push(R,v,M)}this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ii=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],x=[],A=[],m=[];for(let p=0;p<h;p++){let w=p*u-a;for(let b=0;b<l;b++){let _=b*f-r;x.push(_,-w,0),A.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){let b=w+l*p,_=w+l*(p+1),C=w+1+l*(p+1),M=w+1+l*p;d.push(b,_,M),d.push(_,C,M)}this.setIndex(d),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(A,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var rs=class i extends Ce{constructor(t=new Ti(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,l=new Mt,h=new I,f=[],u=[],d=[],x=[];A(),this.setIndex(x),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(d,2));function A(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),w(),p()}function m(b){h=t.getPointAt(b/e,h);let _=a.normals[b],C=a.binormals[b];for(let M=0;M<=s;M++){let R=M/s*Math.PI*2,v=Math.sin(R),E=-Math.cos(R);c.x=E*_.x+v*C.x,c.y=E*_.y+v*C.y,c.z=E*_.z+v*C.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=e;b++)for(let _=1;_<=s;_++){let C=(s+1)*(b-1)+(_-1),M=(s+1)*b+(_-1),R=(s+1)*b+_,v=(s+1)*(b-1)+_;x.push(C,M,v),x.push(M,R,v)}}function w(){for(let b=0;b<=e;b++)for(let _=0;_<=s;_++)l.x=b/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Du[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ci(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Fc(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=Ci(i[e]);for(let s in n)t[s]=n[s]}return t}function Fc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var bh={clone:Ci,merge:qe},Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=Fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new _t().setHex(s.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ma=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Be=class extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wi=class extends Be{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Zs=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=La,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ga=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hl:r=t,o=2*e-n;break;case ul:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hl:a=t,c=2*n-e;break;case ul:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),A=x*x,m=A*x,p=-u*m+2*u*A-u*x,w=(1+u)*m+(-1.5-2*u)*A+(-.5+u)*x+1,b=(-1-d)*m+(1.5+d)*A+.5*x,_=d*m-d*A;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+w*a[l+C]+b*a[c+C]+_*a[f+C];return r}},ya=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},_a=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Aa=class extends si{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-e)/(s-e),A=1-x;for(let m=0;m!==o;++m)r[m]=a[l+m]*A+a[c+m]*x;return r}let u=o*2,d=t-1;for(let x=0;x!==o;++x){let A=a[l+x],m=a[c+x],p=d*u+x*2,w=f[p],b=f[p+1],_=t*u+x*2,C=h[_],M=h[_+1],R=(n-e)/(s-e),v,E,P,L,B;for(let q=0;q<8;q++){v=R*R,E=v*R,P=1-R,L=P*P,B=L*P;let V=B*e+3*L*R*w+3*P*v*C+E*s-n;if(Math.abs(V)<1e-10)break;let Y=3*L*(w-e)+6*P*R*(C-w)+3*v*(s-C);if(Math.abs(Y)<1e-10)break;R=R-V/Y,R=Math.max(0,Math.min(1,R))}r[x]=B*A+3*L*R*b+3*P*v*M+E*m}return r}},sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gr(e,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gr(t.times,Array),values:Gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Aa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Us:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case Xr:e=this.InterpolantFactoryMethodSmooth;break;case ll:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return Xr;case this.InterpolantFactoryMethodBezier:return ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Bt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ou(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let A=e[f+x];if(A!==e[u+x]||A!==e[d+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=na;var ri=class extends sn{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Us;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Ma.prototype.ValueTypeName="color";var Sa=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="number";var ba=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Ee.slerpFlat(r,0,a,l-o,a,l,c);return r}},Js=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends sn{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Us;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Ta.prototype.ValueTypeName="vector";var wa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],x=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Th=new wa,Ea=class{constructor(t){this.manager=t!==void 0?t:Th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qs=class extends as{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ol=new re,Bc=new I,Oc=new I,Ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ji||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hr=new I,Wr=new Ee,Mn=new I,js=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hr,Wr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hr,Wr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$n=new I,zc=new Mt,Vc=new Mt,Oe=class extends js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,zc,Vc),e.subVectors(Vc,zc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Do*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ml=class extends Ca{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends as{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},os=class extends js{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gl=class extends Ca{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends as{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new gl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Yi=-90,Ki=1,Ra=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Yi,Ki,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Yi,Ki,t,e);r.layers=this.layers,this.add(r);let a=new Oe(Yi,Ki,t,e);a.layers=this.layers,this.add(a);let o=new Oe(Yi,Ki,t,e);o.layers=this.layers,this.add(o);let c=new Oe(Yi,Ki,t,e);c.layers=this.layers,this.add(c);let l=new Oe(Yi,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ia=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kl="\\[\\]\\.:\\/",zu=new RegExp("["+kl+"]","g"),Gl="[^"+kl+"]",Vu="[^"+kl.replace("\\.","")+"]",ku=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Gu=/(WCOD+)?/.source.replace("WCOD",Vu),Hu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Wu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Xu=new RegExp("^"+ku+Gu+Hu+Wu+"$"),qu=["material","materials","bones","map"],xl=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zu,"")}static parseTrackName(t){let e=Xu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=xl;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $0=new Float32Array(1);var Kl=class Kl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Kl.prototype.isMatrix2=!0;var vl=Kl;function Hl(i,t,e,n){let s=Yu(n);switch(e){case Nl:return i*t;case za:return i*t/s.components*s.byteLength;case Va:return i*t/s.components*s.byteLength;case hi:return i*t*2/s.components*s.byteLength;case ka:return i*t*2/s.components*s.byteLength;case Dl:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Ga:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case qa:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case Ka:case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case lr:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case po:case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xo:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cr:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yu(i){switch(i){case $e:case Il:return{byteLength:1,components:1};case hs:case Pl:case Ln:return{byteLength:2,components:1};case Ba:case Oa:return{byteLength:2,components:4};case An:case Fa:case un:return{byteLength:4,components:1};case Ll:case Ul:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Kh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function td(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<f.length;d++){let x=f[u],A=f[d];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++u,f[u]=A)}f.length=u+1;for(let d=0,x=f.length;d<x;d++){let A=f[d];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,md=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Td=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Yd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$d=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,df=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,up=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ap=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ep=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:hd,begin_vertex:ud,beginnormal_vertex:dd,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:vd,clipping_planes_vertex:yd,color_fragment:_d,color_pars_fragment:Ad,color_pars_vertex:Md,color_vertex:Sd,common:bd,cube_uv_reflection_fragment:Td,defaultnormal_vertex:wd,displacementmap_pars_vertex:Ed,displacementmap_vertex:Cd,emissivemap_fragment:Rd,emissivemap_pars_fragment:Id,colorspace_fragment:Pd,colorspace_pars_fragment:Ld,envmap_fragment:Ud,envmap_common_pars_fragment:Nd,envmap_pars_fragment:Dd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:Yd,envmap_vertex:Bd,fog_vertex:Od,fog_pars_vertex:zd,fog_fragment:Vd,fog_pars_fragment:kd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:Kd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Qd,lights_physical_fragment:jd,lights_physical_pars_fragment:$d,lights_fragment_begin:tf,lights_fragment_maps:ef,lights_fragment_end:nf,lightprobes_pars_fragment:sf,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:af,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:lf,map_fragment:cf,map_pars_fragment:hf,map_particle_fragment:uf,map_particle_pars_fragment:df,metalnessmap_fragment:ff,metalnessmap_pars_fragment:pf,morphinstance_vertex:mf,morphcolor_vertex:gf,morphnormal_vertex:xf,morphtarget_pars_vertex:vf,morphtarget_vertex:yf,normal_fragment_begin:_f,normal_fragment_maps:Af,normal_pars_fragment:Mf,normal_pars_vertex:Sf,normal_vertex:bf,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Rf,opaque_fragment:If,packing:Pf,premultiplied_alpha_fragment:Lf,project_vertex:Uf,dithering_fragment:Nf,dithering_pars_fragment:Df,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:Bf,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:zf,shadowmap_vertex:Vf,shadowmask_pars_fragment:kf,skinbase_vertex:Gf,skinning_pars_vertex:Hf,skinning_vertex:Wf,skinnormal_vertex:Xf,specularmap_fragment:qf,specularmap_pars_fragment:Yf,tonemapping_fragment:Kf,tonemapping_pars_fragment:Zf,transmission_fragment:Jf,transmission_pars_fragment:Qf,uv_pars_fragment:jf,uv_pars_vertex:$f,uv_vertex:tp,worldpos_vertex:ep,background_vert:np,background_frag:ip,backgroundCube_vert:sp,backgroundCube_frag:rp,cube_vert:ap,cube_frag:op,depth_vert:lp,depth_frag:cp,distance_vert:hp,distance_frag:up,equirect_vert:dp,equirect_frag:fp,linedashed_vert:pp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:xp,meshlambert_vert:vp,meshlambert_frag:yp,meshmatcap_vert:_p,meshmatcap_frag:Ap,meshnormal_vert:Mp,meshnormal_frag:Sp,meshphong_vert:bp,meshphong_frag:Tp,meshphysical_vert:wp,meshphysical_frag:Ep,meshtoon_vert:Cp,meshtoon_frag:Rp,points_vert:Ip,points_frag:Pp,shadow_vert:Lp,shadow_frag:Up,sprite_vert:Np,sprite_frag:Dp},gt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Nn={basic:{uniforms:qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:qe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:qe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new _t(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:qe([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:qe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:qe([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:qe([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:qe([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:qe([gt.lights,gt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Nn.physical={uniforms:qe([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Mo={r:0,b:0,g:0},Fp=new re,Zh=new Ht;Zh.set(-1,0,0,0,1,0,0,0,1);function Bp(i,t,e,n,s,r){let a=new _t(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(w){let b=w.isScene===!0?w.background:null;if(b&&b.isTexture){let _=w.backgroundBlurriness>0;b=t.get(b,_)}return b}function x(w){let b=!1,_=d(w);_===null?m(a,o):_&&_.isColor&&(m(_,1),b=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(w,b){let _=d(b);_&&(_.isCubeTexture||_.mapping===nr)?(l===void 0&&(l=new ie(new cn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Ci(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zh),l.material.toneMapped=$t.getTransfer(_.colorSpace)!==le,(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ie(new ii(2,2),new Xe({name:"BackgroundMaterial",uniforms:Ci(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$t.getTransfer(_.colorSpace)!==le,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,b){w.getRGB(Mo,Vl(i)),e.buffers.color.setClear(Mo.r,Mo.g,Mo.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:x,addToRenderList:A,dispose:p}}function Op(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,B,q,K,V){let Y=!1,H=f(L,K,q,B);r!==H&&(r=H,l(r.object)),Y=d(L,K,q,V),Y&&x(L,K,q,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(L,B,q,K),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,B,q,K){let V=K.wireframe===!0,Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);let H=L.isInstancedMesh===!0?L.id:0,j=Y[H];j===void 0&&(j={},Y[H]=j);let tt=j[q.id];tt===void 0&&(tt={},j[q.id]=tt);let pt=tt[V];return pt===void 0&&(pt=u(c()),tt[V]=pt),pt}function u(L){let B=[],q=[],K=[];for(let V=0;V<e;V++)B[V]=0,q[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:K,object:L,attributes:{},index:null}}function d(L,B,q,K){let V=r.attributes,Y=B.attributes,H=0,j=q.getAttributes();for(let tt in j)if(j[tt].location>=0){let dt=V[tt],At=Y[tt];if(At===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(At=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(At=L.instanceColor)),dt===void 0||dt.attribute!==At||At&&dt.data!==At.data)return!0;H++}return r.attributesNum!==H||r.index!==K}function x(L,B,q,K){let V={},Y=B.attributes,H=0,j=q.getAttributes();for(let tt in j)if(j[tt].location>=0){let dt=Y[tt];dt===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(dt=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(dt=L.instanceColor));let At={};At.attribute=dt,dt&&dt.data&&(At.data=dt.data),V[tt]=At,H++}r.attributes=V,r.attributesNum=H,r.index=K}function A(){let L=r.newAttributes;for(let B=0,q=L.length;B<q;B++)L[B]=0}function m(L){p(L,0)}function p(L,B){let q=r.newAttributes,K=r.enabledAttributes,V=r.attributeDivisors;q[L]=1,K[L]===0&&(i.enableVertexAttribArray(L),K[L]=1),V[L]!==B&&(i.vertexAttribDivisor(L,B),V[L]=B)}function w(){let L=r.newAttributes,B=r.enabledAttributes;for(let q=0,K=B.length;q<K;q++)B[q]!==L[q]&&(i.disableVertexAttribArray(q),B[q]=0)}function b(L,B,q,K,V,Y,H){H===!0?i.vertexAttribIPointer(L,B,q,V,Y):i.vertexAttribPointer(L,B,q,K,V,Y)}function _(L,B,q,K){A();let V=K.attributes,Y=q.getAttributes(),H=B.defaultAttributeValues;for(let j in Y){let tt=Y[j];if(tt.location>=0){let pt=V[j];if(pt===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),pt!==void 0){let dt=pt.normalized,At=pt.itemSize,Zt=t.get(pt);if(Zt===void 0)continue;let fe=Zt.buffer,te=Zt.type,Q=Zt.bytesPerElement,ot=te===i.INT||te===i.UNSIGNED_INT||pt.gpuType===Fa;if(pt.isInterleavedBufferAttribute){let nt=pt.data,Pt=nt.stride,Ot=pt.offset;if(nt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<tt.locationSize;Lt++)p(tt.location+Lt,nt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Lt=0;Lt<tt.locationSize;Lt++)m(tt.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Lt=0;Lt<tt.locationSize;Lt++)b(tt.location+Lt,At/tt.locationSize,te,dt,Pt*Q,(Ot+At/tt.locationSize*Lt)*Q,ot)}else{if(pt.isInstancedBufferAttribute){for(let nt=0;nt<tt.locationSize;nt++)p(tt.location+nt,pt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let nt=0;nt<tt.locationSize;nt++)m(tt.location+nt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let nt=0;nt<tt.locationSize;nt++)b(tt.location+nt,At/tt.locationSize,te,dt,At*Q,At/tt.locationSize*nt*Q,ot)}}else if(H!==void 0){let dt=H[j];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(tt.location,dt);break;case 3:i.vertexAttrib3fv(tt.location,dt);break;case 4:i.vertexAttrib4fv(tt.location,dt);break;default:i.vertexAttrib1fv(tt.location,dt)}}}}w()}function C(){E();for(let L in n){let B=n[L];for(let q in B){let K=B[q];for(let V in K){let Y=K[V];for(let H in Y)h(Y[H].object),delete Y[H];delete K[V]}}delete n[L]}}function M(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let q in B){let K=B[q];for(let V in K){let Y=K[V];for(let H in Y)h(Y[H].object),delete Y[H];delete K[V]}}delete n[L.id]}function R(L){for(let B in n){let q=n[B];for(let K in q){let V=q[K];if(V[L.id]===void 0)continue;let Y=V[L.id];for(let H in Y)h(Y[H].object),delete Y[H];delete V[L.id]}}}function v(L){for(let B in n){let q=n[B],K=L.isInstancedMesh===!0?L.id:0,V=q[K];if(V!==void 0){for(let Y in V){let H=V[Y];for(let j in H)h(H[j].object),delete H[j];delete V[Y]}delete q[K],Object.keys(q).length===0&&delete n[B]}}}function E(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:A,enableAttribute:m,disableUnusedAttributes:w}}function zp(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$e&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!v)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Dt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:_,maxSamples:C,samples:M}}function kp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Sn,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,A=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let w=r?0:n,b=w*4,_=p.clippingState||null;c.value=_,_=h(x,u,b,d);for(let C=0;C!==b;++C)_[C]=e[C];p.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,x){let A=f!==null?f.length:0,m=null;if(A!==0){if(m=c.value,x!==!0||m===null){let p=d+A*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=d;b!==A;++b,_+=4)a.copy(f[b]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,m}}var ui=4,wh=[.125,.215,.35,.446,.526,.582],Ri=20,Gp=256,dr=new os,Eh=new _t,Zl=null,Jl=0,Ql=0,jl=!1,Hp=new I,ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hp}=r;Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,Jl,Ql),this._renderer.xr.enabled=jl,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Ln,format:dn,colorSpace:Ns,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wp(r)),this._blurMaterial=qp(r,t,e),this._ggxMaterial=Xp(r,t,e)}return s}_compileMaterial(t){let e=new ie(new Ce,t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,s,r){let c=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Eh),f.toneMapping=_n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ie(new cn,new ni({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,m=A.material,p=!1,w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,p=!0):(m.color.copy(Eh),p=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let C=this._cubeSize;ds(s,_*C,b>2?C:0,C,C),f.setRenderTarget(s),p&&f.render(A,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===oi||t.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ds(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,dr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,d=f*u,{_lodMax:x}=this,A=this._sizeLods[n],m=3*A*(n>x-ui?n-x+ui:0),p=4*(this._cubeSize-A);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=x-e,ds(r,m,p,3*A,2*A),s.setRenderTarget(r),s.render(o,dr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,ds(t,m,p,3*A,2*A),s.setRenderTarget(t),s.render(o,dr)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=l;let u=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),A=r/x,m=isFinite(r)?1+Math.floor(h*A):Ri;m>Ri&&Dt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let p=[],w=0;for(let R=0;R<Ri;++R){let v=R/A,E=Math.exp(-v*v/2);p.push(E),R===0?w+=E:R<m&&(w+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=x,u.mipInt.value=b-n;let _=this._sizeLods[s],C=3*_*(s>b-ui?s-b+ui:0),M=4*(this._cubeSize-_);ds(e,C,M,3*_,2*_),c.setRenderTarget(e),c.render(f,dr)}};function Wp(i){let t=[],e=[],n=[],s=i,r=i-ui+1+wh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ui?c=wh[a-i+ui-1]:a===0&&(c=0),e.push(c);let l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,x=6,A=3,m=2,p=1,w=new Float32Array(A*x*d),b=new Float32Array(m*x*d),_=new Float32Array(p*x*d);for(let M=0;M<d;M++){let R=M%3*2/3-1,v=M>2?0:-1,E=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];w.set(E,A*x*M),b.set(u,m*x*M);let P=[M,M,M,M,M,M];_.set(P,p*x*M)}let C=new Ce;C.setAttribute("position",new We(w,A)),C.setAttribute("uv",new We(b,m)),C.setAttribute("faceIndex",new We(_,p)),n.push(new ie(C,null)),s>ui&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ch(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xp(i,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function qp(i,t,e){let n=new Float32Array(Ri),s=new I(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Rh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ih(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var bo=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Pn});r.uniforms.tEquirect.value=e;let a=new ie(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=ze),new Ra(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Yp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ua||d===Na)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let A=new bo(x.height);return A.fromEquirectangularTexture(i,u),t.set(u,A),u.addEventListener("dispose",l),o(A.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,x=d===Ua||d===Na,A=d===oi||d===Ei;if(x||A){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ps(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return x&&w&&w.height>0||A&&w&&c(w)?(n===null&&(n=new ps(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Ua?u.mapping=oi:d===Na&&(u.mapping=Ei),u}function c(u){let d=0,x=6;for(let A=0;A<x;A++)u[A]!==void 0&&d++;return d===x}function l(u){let d=u.target;d.removeEventListener("dispose",l);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Kp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&_i("WebGLRenderer: "+n+" extension not supported."),s}}}function Zp(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function l(f){let u=[],d=f.index,x=f.attributes.position,A=0;if(x===void 0)return;if(d!==null){let w=d.array;A=d.version;for(let b=0,_=w.length;b<_;b+=3){let C=w[b+0],M=w[b+1],R=w[b+2];u.push(C,M,M,R,R,C)}}else{let w=x.array;A=x.version;for(let b=0,_=w.length/3-1;b<_;b+=3){let C=b+0,M=b+1,R=b+2;u.push(C,M,M,R,R,C)}}let m=new(x.count>=65535?ks:Vs)(u,1);m.version=A;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Jp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let A=0;for(let m=0;m<d;m++)A+=u[m];e.update(A,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Qp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jp(i,t,e){let n=new WeakMap,s=new ye;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],b=0;d===!0&&(b=1),x===!0&&(b=2),A===!0&&(b=3);let _=o.attributes.position.count*b,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*C*4*f),R=new Bs(M,_,C,f);R.type=un,R.needsUpdate=!0;let v=b*4;for(let P=0;P<f;P++){let L=m[P],B=p[P],q=w[P],K=_*C*4*P;for(let V=0;V<L.count;V++){let Y=V*v;d===!0&&(s.fromBufferAttribute(L,V),M[K+Y+0]=s.x,M[K+Y+1]=s.y,M[K+Y+2]=s.z,M[K+Y+3]=0),x===!0&&(s.fromBufferAttribute(B,V),M[K+Y+4]=s.x,M[K+Y+5]=s.y,M[K+Y+6]=s.z,M[K+Y+7]=0),A===!0&&(s.fromBufferAttribute(q,V),M[K+Y+8]=s.x,M[K+Y+9]=s.y,M[K+Y+10]=s.z,M[K+Y+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new Mt(_,C)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let A=0;A<l.length;A++)d+=l[A];let x=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function $p(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var tm={[Sl]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[er]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function em(i,t,e,n,s,r){let a=new nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Wn(t,e):void 0}),o=new nn(t,e,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new Ce;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let l=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ie(c,l),f=new os(-1,1,1,-1,0,1),u=null,d=null,x=!1,A,m=null,p=[],w=!1;this.setSize=function(b,_){a.setSize(b,_),o.setSize(b,_);for(let C=0;C<p.length;C++){let M=p[C];M.setSize&&M.setSize(b,_)}},this.setEffects=function(b){p=b,w=p.length>0&&p[0].isRenderPass===!0;let _=a.width,C=a.height;for(let M=0;M<p.length;M++){let R=p[M];R.setSize&&R.setSize(_,C)}},this.begin=function(b,_){if(x||b.toneMapping===_n&&p.length===0)return!1;if(m=_,_!==null){let C=_.width,M=_.height;(a.width!==C||a.height!==M)&&this.setSize(C,M)}return w===!1&&b.setRenderTarget(a),A=b.toneMapping,b.toneMapping=_n,!0},this.hasRenderPass=function(){return w},this.end=function(b,_){b.toneMapping=A,x=!0;let C=a,M=o;for(let R=0;R<p.length;R++){let v=p[R];if(v.enabled!==!1&&(v.render(b,M,C,_),v.needsSwap!==!1)){let E=C;C=M,M=E}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,l.defines={},$t.getTransfer(u)===le&&(l.defines.SRGB_TRANSFER="");let R=tm[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=C.texture,b.setRenderTarget(m),b.render(h,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Jh=new Ke,ec=new Wn(1,1),Qh=new Bs,jh=new aa,$h=new Xs,Ph=[],Lh=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Dh=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Eo(i,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Dh.set(n),i.uniformMatrix2fv(this.addr,!1,Dh),Le(e,n)}}function om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),Le(e,n)}}function lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),Le(e,n)}}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=e.isReversedDepthBuffer()?Ao:_o,r=ec):r=Jh,e.setTexture2D(t||r,s)}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jh,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$h,s)}function _m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qh,s)}function Am(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return _m}}function Mm(i,t){i.uniform1fv(this.addr,t)}function Sm(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function bm(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Tm(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function wm(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Em(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rm(i,t){i.uniform1iv(this.addr,t)}function Im(i,t){i.uniform2iv(this.addr,t)}function Pm(i,t){i.uniform3iv(this.addr,t)}function Lm(i,t){i.uniform4iv(this.addr,t)}function Um(i,t){i.uniform1uiv(this.addr,t)}function Nm(i,t){i.uniform2uiv(this.addr,t)}function Dm(i,t){i.uniform3uiv(this.addr,t)}function Fm(i,t){i.uniform4uiv(this.addr,t)}function Bm(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ec:a=Jh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Om(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jh,r[a])}function zm(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$h,r[a])}function Vm(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qh,r[a])}function km(i){switch(i){case 5126:return Mm;case 35664:return Sm;case 35665:return bm;case 35666:return Tm;case 35674:return wm;case 35675:return Em;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Um;case 36294:return Nm;case 36295:return Dm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Vm}}var nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Am(e.type)}},ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=km(e.type)}},sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function Fh(i,t){i.seq.push(t),i.map[t.id]=t}function Gm(i,t,e){let n=i.name,s=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),a=$l.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Fh(e,l===void 0?new nc(o,i,t):new ic(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new sc(o),Fh(e,f)),e=f}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Gm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hm=37297,Wm=0;function Xm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Oh=new Ht;function qm(i){$t._getMatrix(Oh,$t.workingColorSpace,i);let t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ds:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Xm(i.getShaderSource(t),o)}else return r}function Ym(i,t){let e=qm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Km={[Sl]:"Linear",[bl]:"Reinhard",[Tl]:"Cineon",[er]:"ACESFilmic",[El]:"AgX",[Cl]:"Neutral",[wl]:"Custom"};function Zm(i,t){let e=Km[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var So=new I;function Jm(){$t.getLuminanceCoefficients(So);let i=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function jm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pr(i){return i!==""}function Vh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(t0,n0)}var e0=new Map;function n0(i,t){let e=qt[t];if(e===void 0){let n=e0.get(t);if(n!==void 0)e=qt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return rc(e)}var i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(i0,s0)}function s0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var r0={[tr]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function a0(i){return r0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var o0={[oi]:"ENVMAP_TYPE_CUBE",[Ei]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE_UV"};function l0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":o0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var c0={[Ei]:"ENVMAP_MODE_REFRACTION"};function h0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":c0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var u0={[La]:"ENVMAP_BLENDING_MULTIPLY",[lh]:"ENVMAP_BLENDING_MIX",[ch]:"ENVMAP_BLENDING_ADD"};function d0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":u0[i.combine]||"ENVMAP_BLENDING_NONE"}function f0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function p0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=a0(e),l=l0(e),h=h0(e),f=d0(e),u=f0(e),d=Qm(e),x=jm(r),A=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?qt.tonemapping_pars_fragment:"",e.toneMapping!==_n?Zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),Jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=rc(a),a=Vh(a,e),a=kh(a,e),o=rc(o),o=Vh(o,e),o=kh(o,e),a=Gh(a),o=Gh(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=w+m+a,_=w+p+o,C=Bh(s,s.VERTEX_SHADER,b),M=Bh(s,s.FRAGMENT_SHADER,_);s.attachShader(A,C),s.attachShader(A,M),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function R(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(A)||"",q=s.getShaderInfoLog(C)||"",K=s.getShaderInfoLog(M)||"",V=B.trim(),Y=q.trim(),H=K.trim(),j=!0,tt=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,C,M);else{let pt=zh(s,C,"vertex"),dt=zh(s,M,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+pt+`
`+dt)}else V!==""?Dt("WebGLProgram: Program Info Log:",V):(Y===""||H==="")&&(tt=!1);tt&&(L.diagnostics={runnable:j,programLog:V,vertexShader:{log:Y,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(C),s.deleteShader(M),v=new fs(s,A),E=$m(s,A)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(A,Hm)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=C,this.fragmentShader=M,this}var m0=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oc(t),e.set(t,n)),n}},oc=class{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}};function g0(i){return i===hi||i===lr||i===cr}function x0(i,t,e,n,s,r){let a=new Os,o=new ac,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function A(v,E,P,L,B,q){let K=L.fog,V=B.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=t.get(v.envMap||Y,H),tt=j&&j.mapping===nr?j.image.height:null,pt=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Dt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,At=dt!==void 0?dt.length:0,Zt=0;V.morphAttributes.position!==void 0&&(Zt=1),V.morphAttributes.normal!==void 0&&(Zt=2),V.morphAttributes.color!==void 0&&(Zt=3);let fe,te,Q,ot;if(pt){let St=Nn[pt];fe=St.vertexShader,te=St.fragmentShader}else{fe=v.vertexShader,te=v.fragmentShader;let St=o.getVertexShaderStage(v),me=o.getFragmentShaderStage(v);o.update(v,St,me),Q=St.id,ot=me.id}let nt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Ot=B.isInstancedMesh===!0,Lt=B.isBatchedMesh===!0,pe=!!v.map,Jt=!!v.matcap,se=!!j,jt=!!v.aoMap,Xt=!!v.lightMap,Ae=!!v.bumpMap&&v.wireframe===!1,_e=!!v.normalMap,Se=!!v.displacementMap,be=!!v.emissiveMap,de=!!v.metalnessMap,Me=!!v.roughnessMap,U=v.anisotropy>0,Te=v.clearcoat>0,ee=v.dispersion>0,T=v.iridescence>0,g=v.sheen>0,F=v.transmission>0,k=U&&!!v.anisotropyMap,W=Te&&!!v.clearcoatMap,et=Te&&!!v.clearcoatNormalMap,rt=Te&&!!v.clearcoatRoughnessMap,X=T&&!!v.iridescenceMap,J=T&&!!v.iridescenceThicknessMap,ct=g&&!!v.sheenColorMap,Ct=g&&!!v.sheenRoughnessMap,ft=!!v.specularMap,lt=!!v.specularColorMap,It=!!v.specularIntensityMap,Ut=F&&!!v.transmissionMap,Ft=F&&!!v.thicknessMap,S=!!v.gradientMap,ht=!!v.alphaMap,Z=v.alphaTest>0,ut=!!v.alphaHash,xt=!!v.extensions,$=_n;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&($=i.toneMapping);let wt={shaderID:pt,shaderType:v.type,shaderName:v.name,vertexShader:fe,fragmentShader:te,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Lt,batchingColor:Lt&&B._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&B.instanceColor!==null,instancingMorph:Ot&&B.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:pe,matcap:Jt,envMap:se,envMapMode:se&&j.mapping,envMapCubeUVHeight:tt,aoMap:jt,lightMap:Xt,bumpMap:Ae,normalMap:_e,displacementMap:Se,emissiveMap:be,normalMapObjectSpace:_e&&v.normalMapType===dh,normalMapTangentSpace:_e&&v.normalMapType===hr,packedNormalMap:_e&&v.normalMapType===hr&&g0(v.normalMap.format),metalnessMap:de,roughnessMap:Me,anisotropy:U,anisotropyMap:k,clearcoat:Te,clearcoatMap:W,clearcoatNormalMap:et,clearcoatRoughnessMap:rt,dispersion:ee,iridescence:T,iridescenceMap:X,iridescenceThicknessMap:J,sheen:g,sheenColorMap:ct,sheenRoughnessMap:Ct,specularMap:ft,specularColorMap:lt,specularIntensityMap:It,transmission:F,transmissionMap:Ut,thicknessMap:Ft,gradientMap:S,opaque:v.transparent===!1&&v.blending===Ai&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:Z,alphaHash:ut,combine:v.combine,mapUv:pe&&x(v.map.channel),aoMapUv:jt&&x(v.aoMap.channel),lightMapUv:Xt&&x(v.lightMap.channel),bumpMapUv:Ae&&x(v.bumpMap.channel),normalMapUv:_e&&x(v.normalMap.channel),displacementMapUv:Se&&x(v.displacementMap.channel),emissiveMapUv:be&&x(v.emissiveMap.channel),metalnessMapUv:de&&x(v.metalnessMap.channel),roughnessMapUv:Me&&x(v.roughnessMap.channel),anisotropyMapUv:k&&x(v.anisotropyMap.channel),clearcoatMapUv:W&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(v.sheenRoughnessMap.channel),specularMapUv:ft&&x(v.specularMap.channel),specularColorMapUv:lt&&x(v.specularColorMap.channel),specularIntensityMapUv:It&&x(v.specularIntensityMap.channel),transmissionMapUv:Ut&&x(v.transmissionMap.channel),thicknessMapUv:Ft&&x(v.thicknessMap.channel),alphaMapUv:ht&&x(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_e||U),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(pe||ht),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&_e===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:pe&&v.map.isVideoTexture===!0&&$t.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:be&&v.emissiveMap.isVideoTexture===!0&&$t.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ze,flipSided:v.side===Ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&v.extensions.multiDraw===!0||Lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(E,v),w(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function w(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let E=d[v.type],P;if(E){let L=Nn[E];P=bh.clone(L.uniforms)}else P=v.uniforms;return P}function _(v,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new p0(i,E,v,s),l.push(P),h.set(E,P)),P}function C(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function R(){o.dispose()}return{getParameters:A,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:C,releaseShaderCache:M,programs:l,dispose:R}}function v0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,x,A,m,p){let w=i[t];return w===void 0?(w={id:u.id,object:u,geometry:d,material:x,materialVariant:a(u),groupOrder:A,renderOrder:u.renderOrder,z:m,group:p},i[t]=w):(w.id=u.id,w.object=u,w.geometry=d,w.material=x,w.materialVariant=a(u),w.groupOrder=A,w.renderOrder=u.renderOrder,w.z=m,w.group=p),t++,w}function c(u,d,x,A,m,p){let w=o(u,d,x,A,m,p);x.transmission>0?n.push(w):x.transparent===!0?s.push(w):e.push(w)}function l(u,d,x,A,m,p){let w=o(u,d,x,A,m,p);x.transmission>0?n.unshift(w):x.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,d,x){e.length>1&&e.sort(u||y0),n.length>1&&n.sort(d||Wh),s.length>1&&s.sort(d||Wh),x&&(e.reverse(),n.reverse(),s.reverse())}function f(){for(let u=t,d=i.length;u<d;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function _0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xh,i.set(n,[a])):s>=r.length?(a=new Xh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function A0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new _t};break;case"SpotLight":e={position:new I,direction:new I,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function M0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var S0=0;function b0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T0(i){let t=new A0,e=M0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new re,a=new re;function o(l){let h=0,f=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,x=0,A=0,m=0,p=0,w=0,b=0,_=0,C=0,M=0,R=0;l.sort(b0);for(let E=0,P=l.length;E<P;E++){let L=l[E],B=L.color,q=L.intensity,K=L.distance,V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hi?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*q,f+=B.g*q,u+=B.b*q;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],q);R++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let H=L.shadow,j=e.get(L);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=L.shadow.matrix,w++}n.directional[d]=Y,d++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(B).multiplyScalar(q),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[A]=Y;let H=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,H.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[A]=H.matrix,L.castShadow){let j=e.get(L);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,n.spotShadow[A]=j,n.spotShadowMap[A]=V,_++}A++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(B).multiplyScalar(q),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Y,m++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let H=L.shadow,j=e.get(L);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=L.shadow.matrix,b++}n.point[x]=Y,x++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(q),Y.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let v=n.hash;(v.directionalLength!==d||v.pointLength!==x||v.spotLength!==A||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==w||v.numPointShadows!==b||v.numSpotShadows!==_||v.numSpotMaps!==C||v.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=A,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+C-M,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,v.directionalLength=d,v.pointLength=x,v.spotLength=A,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=w,v.numPointShadows=b,v.numSpotShadows=_,v.numSpotMaps=C,v.numLightProbes=R,n.version=S0++)}function c(l,h){let f=0,u=0,d=0,x=0,A=0,m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let b=l[p];if(b.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(b.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let _=n.hemi[A];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),A++}}}return{setup:o,setupView:c,state:n}}function qh(i){let t=new T0(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function w0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qh(i),t.set(s,[o])):r>=a.length?(o=new qh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,R0=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],I0=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Yh=new re,fr=new I,tc=new I;function P0(i,t,e){let n=new es,s=new Mt,r=new Mt,a=new ye,o=new ga,c=new xa,l={},h=e.maxTextureSize,f={[Gn]:Ve,[Ve]:Gn,[Ze]:Ze},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:E0,fragmentShader:C0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ce;x.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new ie(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let p=this.type;this.render=function(M,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Hc&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tr);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Pn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let q=p!==this.type;q&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(V=>V.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,V=M.length;K<V;K++){let Y=M[K],H=Y.shadow;if(H===void 0){Dt("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=tt,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===cs){if(Y.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(s.x,s.y,{format:hi,type:Ln,minFilter:ze,magFilter:ze,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new Wn(s.x,s.y,un),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=Tn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe}else Y.isPointLight?(H.map=new bo(s.x),H.map.depthTexture=new la(s.x,An)):(H.map=new nn(s.x,s.y),H.map.depthTexture=new Wn(s.x,s.y,An)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=Tn,this.type===tr?(H.map.depthTexture.compareFunction=tt?Ao:_o,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe);H.camera.updateProjectionMatrix()}let pt=H.map.isWebGLCubeRenderTarget?6:1;for(let dt=0;dt<pt;dt++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,dt),i.clear();else{dt===0&&(i.setRenderTarget(H.map),i.clear());let At=H.getViewport(dt);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),B.viewport(a)}if(Y.isPointLight){let At=H.camera,Zt=H.matrix,fe=Y.distance||At.far;fe!==At.far&&(At.far=fe,At.updateProjectionMatrix()),fr.setFromMatrixPosition(Y.matrixWorld),At.position.copy(fr),tc.copy(At.position),tc.add(R0[dt]),At.up.copy(I0[dt]),At.lookAt(tc),At.updateMatrixWorld(),Zt.makeTranslation(-fr.x,-fr.y,-fr.z),Yh.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Yh,At.coordinateSystem,At.reversedDepth)}else H.updateMatrices(Y);n=H.getFrustum(),_(R,v,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===cs&&w(H,v),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,P,L)};function w(M,R){let v=t.update(A);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new nn(s.x,s.y,{format:hi,type:Ln})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,A,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(R,null,v,d,A,null)}function b(M,R,v,E){let P=null,L=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)P=L;else if(P=v.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=P.uuid,q=R.uuid,K=l[B];K===void 0&&(K={},l[B]=K);let V=K[q];V===void 0&&(V=P.clone(),K[q]=V,R.addEventListener("dispose",C)),P=V}if(P.visible=R.visible,P.wireframe=R.wireframe,E===cs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=i.properties.get(P);B.light=v}return P}function _(M,R,v,E,P){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===cs)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let q=t.update(M),K=M.material;if(Array.isArray(K)){let V=q.groups;for(let Y=0,H=V.length;Y<H;Y++){let j=V[Y],tt=K[j.materialIndex];if(tt&&tt.visible){let pt=b(M,tt,E,P);M.onBeforeShadow(i,M,R,v,q,pt,j),i.renderBufferDirect(v,null,q,pt,M,j),M.onAfterShadow(i,M,R,v,q,pt,j)}}}else if(K.visible){let V=b(M,K,E,P);M.onBeforeShadow(i,M,R,v,q,V,null),i.renderBufferDirect(v,null,q,V,M,null),M.onAfterShadow(i,M,R,v,q,V,null)}}let B=M.children;for(let q=0,K=B.length;q<K;q++)_(B[q],R,v,E,P)}function C(M){M.target.removeEventListener("dispose",C);for(let v in l){let E=l[v],P=M.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function L0(i,t){function e(){let S=!1,ht=new ye,Z=null,ut=new ye(0,0,0,0);return{setMask:function(xt){Z!==xt&&!S&&(i.colorMask(xt,xt,xt,xt),Z=xt)},setLocked:function(xt){S=xt},setClear:function(xt,$,wt,St,me){me===!0&&(xt*=St,$*=St,wt*=St),ht.set(xt,$,wt,St),ut.equals(ht)===!1&&(i.clearColor(xt,$,wt,St),ut.copy(ht))},reset:function(){S=!1,Z=null,ut.set(-1,0,0,0)}}}function n(){let S=!1,ht=!1,Z=null,ut=null,xt=null;return{setReversed:function($){if(ht!==$){let wt=t.get("EXT_clip_control");$?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ht=$;let St=xt;xt=null,this.setClear(St)}},getReversed:function(){return ht},setTest:function($){$?nt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function($){Z!==$&&!S&&(i.depthMask($),Z=$)},setFunc:function($){if(ht&&($=Mh[$]),ut!==$){switch($){case Kr:i.depthFunc(i.NEVER);break;case Zr:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Qr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case $r:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=$}},setLocked:function($){S=$},setClear:function($){xt!==$&&(xt=$,ht&&($=1-$),i.clearDepth($))},reset:function(){S=!1,Z=null,ut=null,xt=null,ht=!1}}}function s(){let S=!1,ht=null,Z=null,ut=null,xt=null,$=null,wt=null,St=null,me=null;return{setTest:function(he){S||(he?nt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(he){ht!==he&&!S&&(i.stencilMask(he),ht=he)},setFunc:function(he,rn,an){(Z!==he||ut!==rn||xt!==an)&&(i.stencilFunc(he,rn,an),Z=he,ut=rn,xt=an)},setOp:function(he,rn,an){($!==he||wt!==rn||St!==an)&&(i.stencilOp(he,rn,an),$=he,wt=rn,St=an)},setLocked:function(he){S=he},setClear:function(he){me!==he&&(i.clearStencil(he),me=he)},reset:function(){S=!1,ht=null,Z=null,ut=null,xt=null,$=null,wt=null,St=null,me=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},d=new WeakMap,x=[],A=null,m=!1,p=null,w=null,b=null,_=null,C=null,M=null,R=null,v=new _t(0,0,0),E=0,P=!1,L=null,B=null,q=null,K=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),H=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),H=j>=2);let pt=null,dt={},At=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),fe=new ye().fromArray(At),te=new ye().fromArray(Zt);function Q(S,ht,Z,ut){let xt=new Uint8Array(4),$=i.createTexture();i.bindTexture(S,$),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<Z;wt++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ht+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return $}let ot={};ot[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Mi),Ae(!1),_e(yl),nt(i.CULL_FACE),jt(Pn);function nt(S){h[S]!==!0&&(i.enable(S),h[S]=!0)}function Pt(S){h[S]!==!1&&(i.disable(S),h[S]=!1)}function Ot(S,ht){return u[S]!==ht?(i.bindFramebuffer(S,ht),u[S]=ht,S===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),S===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Lt(S,ht){let Z=x,ut=!1;if(S){Z=d.get(ht),Z===void 0&&(Z=[],d.set(ht,Z));let xt=S.textures;if(Z.length!==xt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let $=0,wt=xt.length;$<wt;$++)Z[$]=i.COLOR_ATTACHMENT0+$;Z.length=xt.length,ut=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ut=!0);ut&&i.drawBuffers(Z)}function pe(S){return A!==S?(i.useProgram(S),A=S,!0):!1}let Jt={[ei]:i.FUNC_ADD,[Xc]:i.FUNC_SUBTRACT,[qc]:i.FUNC_REVERSE_SUBTRACT};Jt[Yc]=i.MIN,Jt[Kc]=i.MAX;let se={[Zc]:i.ZERO,[Jc]:i.ONE,[Qc]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[ih]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[$c]:i.DST_ALPHA,[jc]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[nh]:i.ONE_MINUS_DST_COLOR,[th]:i.ONE_MINUS_DST_ALPHA,[sh]:i.CONSTANT_COLOR,[rh]:i.ONE_MINUS_CONSTANT_COLOR,[ah]:i.CONSTANT_ALPHA,[oh]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(S,ht,Z,ut,xt,$,wt,St,me,he){if(S===Pn){m===!0&&(Pt(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),S!==Wc){if(S!==p||he!==P){if((w!==ei||C!==ei)&&(i.blendEquation(i.FUNC_ADD),w=ei,C=ei),he)switch(S){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",S);break}else switch(S){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Al:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",S);break}b=null,_=null,M=null,R=null,v.set(0,0,0),E=0,p=S,P=he}return}xt=xt||ht,$=$||Z,wt=wt||ut,(ht!==w||xt!==C)&&(i.blendEquationSeparate(Jt[ht],Jt[xt]),w=ht,C=xt),(Z!==b||ut!==_||$!==M||wt!==R)&&(i.blendFuncSeparate(se[Z],se[ut],se[$],se[wt]),b=Z,_=ut,M=$,R=wt),(St.equals(v)===!1||me!==E)&&(i.blendColor(St.r,St.g,St.b,me),v.copy(St),E=me),p=S,P=!1}function Xt(S,ht){S.side===Ze?Pt(i.CULL_FACE):nt(i.CULL_FACE);let Z=S.side===Ve;ht&&(Z=!Z),Ae(Z),S.blending===Ai&&S.transparent===!1?jt(Pn):jt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),a.setFunc(S.depthFunc),a.setTest(S.depthTest),a.setMask(S.depthWrite),r.setMask(S.colorWrite);let ut=S.stencilWrite;o.setTest(ut),ut&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),be(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(S){L!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),L=S)}function _e(S){S!==kc?(nt(i.CULL_FACE),S!==B&&(S===yl?i.cullFace(i.BACK):S===Gc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),B=S}function Se(S){S!==q&&(H&&i.lineWidth(S),q=S)}function be(S,ht,Z){S?(nt(i.POLYGON_OFFSET_FILL),(K!==ht||V!==Z)&&(K=ht,V=Z,a.getReversed()&&(ht=-ht),i.polygonOffset(ht,Z))):Pt(i.POLYGON_OFFSET_FILL)}function de(S){S?nt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Me(S){S===void 0&&(S=i.TEXTURE0+Y-1),pt!==S&&(i.activeTexture(S),pt=S)}function U(S,ht,Z){Z===void 0&&(pt===null?Z=i.TEXTURE0+Y-1:Z=pt);let ut=dt[Z];ut===void 0&&(ut={type:void 0,texture:void 0},dt[Z]=ut),(ut.type!==S||ut.texture!==ht)&&(pt!==Z&&(i.activeTexture(Z),pt=Z),i.bindTexture(S,ht||ot[S]),ut.type=S,ut.texture=ht)}function Te(){let S=dt[pt];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(S){Bt("WebGLState:",S)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(S){Bt("WebGLState:",S)}}function g(){try{i.texSubImage2D(...arguments)}catch(S){Bt("WebGLState:",S)}}function F(){try{i.texSubImage3D(...arguments)}catch(S){Bt("WebGLState:",S)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(S){Bt("WebGLState:",S)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(S){Bt("WebGLState:",S)}}function et(){try{i.texStorage2D(...arguments)}catch(S){Bt("WebGLState:",S)}}function rt(){try{i.texStorage3D(...arguments)}catch(S){Bt("WebGLState:",S)}}function X(){try{i.texImage2D(...arguments)}catch(S){Bt("WebGLState:",S)}}function J(){try{i.texImage3D(...arguments)}catch(S){Bt("WebGLState:",S)}}function ct(S){return f[S]!==void 0?f[S]:i.getParameter(S)}function Ct(S,ht){f[S]!==ht&&(i.pixelStorei(S,ht),f[S]=ht)}function ft(S){fe.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),fe.copy(S))}function lt(S){te.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),te.copy(S))}function It(S,ht){let Z=l.get(ht);Z===void 0&&(Z=new WeakMap,l.set(ht,Z));let ut=Z.get(S);ut===void 0&&(ut=i.getUniformBlockIndex(ht,S.name),Z.set(S,ut))}function Ut(S,ht){let ut=l.get(ht).get(S);c.get(ht)!==ut&&(i.uniformBlockBinding(ht,ut,S.__bindingPointIndex),c.set(ht,ut))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},pt=null,dt={},u={},d=new WeakMap,x=[],A=null,m=!1,p=null,w=null,b=null,_=null,C=null,M=null,R=null,v=new _t(0,0,0),E=0,P=!1,L=null,B=null,q=null,K=null,V=null,fe.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Pt,bindFramebuffer:Ot,drawBuffers:Lt,useProgram:pe,setBlending:jt,setMaterial:Xt,setFlipSided:Ae,setCullFace:_e,setLineWidth:Se,setPolygonOffset:be,setScissorTest:de,activeTexture:Me,bindTexture:U,unbindTexture:Te,compressedTexImage2D:ee,compressedTexImage3D:T,texImage2D:X,texImage3D:J,pixelStorei:Ct,getParameter:ct,updateUBOMapping:It,uniformBlockBinding:Ut,texStorage2D:et,texStorage3D:rt,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:W,scissor:ft,viewport:lt,reset:Ft}}function U0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,h=new WeakMap,f=new Set,u,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,g){return x?new OffscreenCanvas(T,g):Fs("canvas")}function m(T,g,F){let k=1,W=ee(T);if((W.width>F||W.height>F)&&(k=F/Math.max(W.width,W.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let et=Math.floor(k*W.width),rt=Math.floor(k*W.height);u===void 0&&(u=A(et,rt));let X=g?A(et,rt):u;return X.width=et,X.height=rt,X.getContext("2d").drawImage(T,0,0,et,rt),Dt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+et+"x"+rt+")."),X}else return"data"in T&&Dt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function p(T){return T.generateMipmaps}function w(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,g,F,k,W,et=!1){if(T!==null){if(i[T]!==void 0)return i[T];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let rt;k&&(rt=t.get("EXT_texture_norm16"),rt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8),F===i.UNSIGNED_SHORT&&rt&&(X=rt.R16_EXT),F===i.SHORT&&rt&&(X=rt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),g===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8),F===i.UNSIGNED_SHORT&&rt&&(X=rt.RG16_EXT),F===i.SHORT&&rt&&(X=rt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&rt&&(X=rt.RGB16_EXT),F===i.SHORT&&rt&&(X=rt.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),g===i.RGBA){let J=et?Ds:$t.getTransfer(W);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=J===le?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&rt&&(X=rt.RGBA16_EXT),F===i.SHORT&&rt&&(X=rt.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function C(T,g){let F;return T?g===null||g===An||g===us?F=i.DEPTH24_STENCIL8:g===un?F=i.DEPTH32F_STENCIL8:g===hs&&(F=i.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===An||g===us?F=i.DEPTH_COMPONENT24:g===un?F=i.DEPTH_COMPONENT32F:g===hs&&(F=i.DEPTH_COMPONENT16),F}function M(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fe&&T.minFilter!==ze?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function R(T){let g=T.target;g.removeEventListener("dispose",R),E(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function v(T){let g=T.target;g.removeEventListener("dispose",v),L(g)}function E(T){let g=n.get(T);if(g.__webglInit===void 0)return;let F=T.source,k=d.get(F);if(k){let W=k[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(T),Object.keys(k).length===0&&d.delete(F)}n.remove(T)}function P(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let F=T.source,k=d.get(F);delete k[g.__cacheKey],a.memory.textures--}function L(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let W=0;W<g.__webglFramebuffer[k].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[k][W]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=T.textures;for(let k=0,W=F.length;k<W;k++){let et=n.get(F[k]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(T)}let B=0;function q(){B=0}function K(){return B}function V(T){B=T}function Y(){let T=B;return T>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function H(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function j(T,g){let F=n.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let k=T.image;if(k===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(F,T,g);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function tt(T,g){let F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Pt(F,T,g);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function pt(T,g){let F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Pt(F,T,g);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function dt(T,g){let F=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){Ot(F,T,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let At={[Si]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},Zt={[Fe]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},fe={[fh]:i.NEVER,[vh]:i.ALWAYS,[ph]:i.LESS,[_o]:i.LEQUAL,[mh]:i.EQUAL,[Ao]:i.GEQUAL,[gh]:i.GREATER,[xh]:i.NOTEQUAL};function te(T,g){if(g.type===un&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===ze||g.magFilter===Da||g.magFilter===ir||g.magFilter===li||g.minFilter===ze||g.minFilter===Da||g.minFilter===ir||g.minFilter===li)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,At[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,At[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,At[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Zt[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Zt[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Fe||g.minFilter!==ir&&g.minFilter!==li||g.type===un&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Q(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",R));let k=g.source,W=d.get(k);W===void 0&&(W={},d.set(k,W));let et=H(g);if(et!==T.__cacheKey){W[et]===void 0&&(W[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),W[et].usedTimes++;let rt=W[T.__cacheKey];rt!==void 0&&(W[T.__cacheKey].usedTimes--,rt.usedTimes===0&&P(g)),T.__cacheKey=et,T.__webglTexture=W[et].texture}return F}function ot(T,g,F){return Math.floor(Math.floor(T/F)/g)}function nt(T,g,F,k){let et=T.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,k,g.data);else{et.sort((Ct,ft)=>Ct.start-ft.start);let rt=0;for(let Ct=1;Ct<et.length;Ct++){let ft=et[rt],lt=et[Ct],It=ft.start+ft.count,Ut=ot(lt.start,g.width,4),Ft=ot(ft.start,g.width,4);lt.start<=It+1&&Ut===Ft&&ot(lt.start+lt.count-1,g.width,4)===Ut?ft.count=Math.max(ft.count,lt.start+lt.count-ft.start):(++rt,et[rt]=lt)}et.length=rt+1;let X=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ct=0,ft=et.length;Ct<ft;Ct++){let lt=et[Ct],It=Math.floor(lt.start/4),Ut=Math.ceil(lt.count/4),Ft=It%g.width,S=Math.floor(It/g.width),ht=Ut,Z=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,S),e.texSubImage2D(i.TEXTURE_2D,0,Ft,S,ht,Z,F,k,g.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,X),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function Pt(T,g,F){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);let W=Q(T,g),et=g.source;e.bindTexture(k,T.__webglTexture,i.TEXTURE0+F);let rt=n.get(et);if(et.version!==rt.__version||W===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Z=$t.getPrimaries($t.workingColorSpace),ut=g.colorSpace===qn?null:$t.getPrimaries(g.colorSpace),xt=g.colorSpace===qn||Z===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let J=m(g.image,!1,s.maxTextureSize);J=Te(g,J);let ct=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type),ft=_(g.internalFormat,ct,Ct,g.normalized,g.colorSpace,g.isVideoTexture);te(k,g);let lt,It=g.mipmaps,Ut=g.isVideoTexture!==!0,Ft=rt.__version===void 0||W===!0,S=et.dataReady,ht=M(g,J);if(g.isDepthTexture)ft=C(g.format===ci,g.type),Ft&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,ft,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,ft,J.width,J.height,0,ct,Ct,null));else if(g.isDataTexture)if(It.length>0){Ut&&Ft&&e.texStorage2D(i.TEXTURE_2D,ht,ft,It[0].width,It[0].height);for(let Z=0,ut=It.length;Z<ut;Z++)lt=It[Z],Ut?S&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,lt.width,lt.height,ct,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,Z,ft,lt.width,lt.height,0,ct,Ct,lt.data);g.generateMipmaps=!1}else Ut?(Ft&&e.texStorage2D(i.TEXTURE_2D,ht,ft,J.width,J.height),S&&nt(g,J,ct,Ct)):e.texImage2D(i.TEXTURE_2D,0,ft,J.width,J.height,0,ct,Ct,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ut&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ft,It[0].width,It[0].height,J.depth);for(let Z=0,ut=It.length;Z<ut;Z++)if(lt=It[Z],g.format!==dn)if(ct!==null)if(Ut){if(S)if(g.layerUpdates.size>0){let xt=Hl(lt.width,lt.height,g.format,g.type);for(let $ of g.layerUpdates){let wt=lt.data.subarray($*xt/lt.data.BYTES_PER_ELEMENT,($+1)*xt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,$,lt.width,lt.height,1,ct,wt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,J.depth,ct,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ft,lt.width,lt.height,J.depth,0,lt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?S&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,J.depth,ct,Ct,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,ft,lt.width,lt.height,J.depth,0,ct,Ct,lt.data)}else{Ut&&Ft&&e.texStorage2D(i.TEXTURE_2D,ht,ft,It[0].width,It[0].height);for(let Z=0,ut=It.length;Z<ut;Z++)lt=It[Z],g.format!==dn?ct!==null?Ut?S&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,ft,lt.width,lt.height,0,lt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?S&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,lt.width,lt.height,ct,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,Z,ft,lt.width,lt.height,0,ct,Ct,lt.data)}else if(g.isDataArrayTexture)if(Ut){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ft,J.width,J.height,J.depth),S)if(g.layerUpdates.size>0){let Z=Hl(J.width,J.height,g.format,g.type);for(let ut of g.layerUpdates){let xt=J.data.subarray(ut*Z/J.data.BYTES_PER_ELEMENT,(ut+1)*Z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,J.width,J.height,1,ct,Ct,xt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ct,Ct,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,J.width,J.height,J.depth,0,ct,Ct,J.data);else if(g.isData3DTexture)Ut?(Ft&&e.texStorage3D(i.TEXTURE_3D,ht,ft,J.width,J.height,J.depth),S&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ct,Ct,J.data)):e.texImage3D(i.TEXTURE_3D,0,ft,J.width,J.height,J.depth,0,ct,Ct,J.data);else if(g.isFramebufferTexture){if(Ft)if(Ut)e.texStorage2D(i.TEXTURE_2D,ht,ft,J.width,J.height);else{let Z=J.width,ut=J.height;for(let xt=0;xt<ht;xt++)e.texImage2D(i.TEXTURE_2D,xt,ft,Z,ut,0,ct,Ct,null),Z>>=1,ut>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),f.add(g),Z.onpaint=ut=>{let xt=ut.changedElements;for(let $ of f)xt.includes($.image)&&($.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let xt=i.RGBA,$=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,$,wt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Ut&&Ft){let Z=ee(It[0]);e.texStorage2D(i.TEXTURE_2D,ht,ft,Z.width,Z.height)}for(let Z=0,ut=It.length;Z<ut;Z++)lt=It[Z],Ut?S&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ct,Ct,lt):e.texImage2D(i.TEXTURE_2D,Z,ft,ct,Ct,lt);g.generateMipmaps=!1}else if(Ut){if(Ft){let Z=ee(J);e.texStorage2D(i.TEXTURE_2D,ht,ft,Z.width,Z.height)}S&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Ct,J)}else e.texImage2D(i.TEXTURE_2D,0,ft,ct,Ct,J);p(g)&&w(k),rt.__version=et.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ot(T,g,F){if(g.image.length!==6)return;let k=Q(T,g),W=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);let et=n.get(W);if(W.version!==et.__version||k===!0){e.activeTexture(i.TEXTURE0+F);let rt=$t.getPrimaries($t.workingColorSpace),X=g.colorSpace===qn?null:$t.getPrimaries(g.colorSpace),J=g.colorSpace===qn||rt===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ct=g.isCompressedTexture||g.image[0].isCompressedTexture,Ct=g.image[0]&&g.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!ct&&!Ct?ft[$]=m(g.image[$],!0,s.maxCubemapSize):ft[$]=Ct?g.image[$].image:g.image[$],ft[$]=Te(g,ft[$]);let lt=ft[0],It=r.convert(g.format,g.colorSpace),Ut=r.convert(g.type),Ft=_(g.internalFormat,It,Ut,g.normalized,g.colorSpace),S=g.isVideoTexture!==!0,ht=et.__version===void 0||k===!0,Z=W.dataReady,ut=M(g,lt);te(i.TEXTURE_CUBE_MAP,g);let xt;if(ct){S&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ft,lt.width,lt.height);for(let $=0;$<6;$++){xt=ft[$].mipmaps;for(let wt=0;wt<xt.length;wt++){let St=xt[wt];g.format!==dn?It!==null?S?Z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt,0,0,St.width,St.height,It,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt,Ft,St.width,St.height,0,St.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt,0,0,St.width,St.height,It,Ut,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt,Ft,St.width,St.height,0,It,Ut,St.data)}}}else{if(xt=g.mipmaps,S&&ht){xt.length>0&&ut++;let $=ee(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ft,$.width,$.height)}for(let $=0;$<6;$++)if(Ct){S?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,It,Ut,ft[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,ft[$].width,ft[$].height,0,It,Ut,ft[$].data);for(let wt=0;wt<xt.length;wt++){let me=xt[wt].image[$].image;S?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt+1,0,0,me.width,me.height,It,Ut,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt+1,Ft,me.width,me.height,0,It,Ut,me.data)}}else{S?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,It,Ut,ft[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,It,Ut,ft[$]);for(let wt=0;wt<xt.length;wt++){let St=xt[wt];S?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt+1,0,0,It,Ut,St.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt+1,Ft,It,Ut,St.image[$])}}}p(g)&&w(i.TEXTURE_CUBE_MAP),et.__version=W.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Lt(T,g,F,k,W,et){let rt=r.convert(F.format,F.colorSpace),X=r.convert(F.type),J=_(F.internalFormat,rt,X,F.normalized,F.colorSpace),ct=n.get(g),Ct=n.get(F);if(Ct.__renderTarget=g,!ct.__hasExternalTextures){let ft=Math.max(1,g.width>>et),lt=Math.max(1,g.height>>et);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,et,J,ft,lt,g.depth,0,rt,X,null):e.texImage2D(W,et,J,ft,lt,0,rt,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Me(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,W,Ct.__webglTexture,0,de(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,W,Ct.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(T,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let k=g.depthTexture,W=k&&k.isDepthTexture?k.type:null,et=C(g.stencilBuffer,W),rt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(g),et,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(g),et,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,et,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,T)}else{let k=g.textures;for(let W=0;W<k.length;W++){let et=k[W],rt=r.convert(et.format,et.colorSpace),X=r.convert(et.type),J=_(et.internalFormat,rt,X,et.normalized,et.colorSpace);Me(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(g),J,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(g),J,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,J,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(T,g,F){let k=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),te(i.TEXTURE_CUBE_MAP,g.depthTexture);let ct=r.convert(g.depthTexture.format),Ct=r.convert(g.depthTexture.type),ft;g.depthTexture.format===Tn?ft=i.DEPTH_COMPONENT24:g.depthTexture.format===ci&&(ft=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ft,g.width,g.height,0,ct,Ct,null)}}else j(g.depthTexture,0);let et=W.__webglTexture,rt=de(g),X=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,J=g.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Tn)Me(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,X,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,J,X,et,0);else if(g.depthTexture.format===ci)Me(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,X,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,J,X,et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(T){let g=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",W)};k.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=k}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)Jt(g.__webglFramebuffer[k],T,k);else{let k=T.texture.mipmaps;k&&k.length>0?Jt(g.__webglFramebuffer[0],T,0):Jt(g.__webglFramebuffer,T,0)}else if(F){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),pe(g.__webglDepthbuffer[k],T,!1);else{let W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,et)}}else{let k=T.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),pe(g.__webglDepthbuffer,T,!1);else{let W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(T,g,F){let k=n.get(T);g!==void 0&&Lt(k.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&se(T)}function Xt(T){let g=T.texture,F=n.get(T),k=n.get(g);T.addEventListener("dispose",v);let W=T.textures,et=T.isWebGLCubeRenderTarget===!0,rt=W.length>1;if(rt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,a.memory.textures++),et){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let J=0;J<g.mipmaps.length;J++)F.__webglFramebuffer[X][J]=i.createFramebuffer()}else F.__webglFramebuffer[X]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)F.__webglFramebuffer[X]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(rt)for(let X=0,J=W.length;X<J;X++){let ct=n.get(W[X]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Me(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<W.length;X++){let J=W[X];F.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[X]);let ct=r.convert(J.format,J.colorSpace),Ct=r.convert(J.type),ft=_(J.internalFormat,ct,Ct,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),lt=de(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ft,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,F.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),te(i.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)Lt(F.__webglFramebuffer[X][J],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,J);else Lt(F.__webglFramebuffer[X],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(g)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let X=0,J=W.length;X<J;X++){let ct=W[X],Ct=n.get(ct),ft=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Ct.__webglTexture),te(ft,ct),Lt(F.__webglFramebuffer,T,ct,i.COLOR_ATTACHMENT0+X,ft,0),p(ct)&&w(ft)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(X=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,k.__webglTexture),te(X,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)Lt(F.__webglFramebuffer[J],T,g,i.COLOR_ATTACHMENT0,X,J);else Lt(F.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,X,0);p(g)&&w(X),e.unbindTexture()}T.depthBuffer&&se(T)}function Ae(T){let g=T.textures;for(let F=0,k=g.length;F<k;F++){let W=g[F];if(p(W)){let et=b(T),rt=n.get(W).__webglTexture;e.bindTexture(et,rt),w(et),e.unbindTexture()}}}let _e=[],Se=[];function be(T){if(T.samples>0){if(Me(T)===!1){let g=T.textures,F=T.width,k=T.height,W=i.COLOR_BUFFER_BIT,et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(T),X=g.length>1;if(X)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let J=T.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ct]);let Ct=n.get(g[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ct,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,W,i.NEAREST),c===!0&&(_e.length=0,Se.length=0,_e.push(i.COLOR_ATTACHMENT0+ct),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_e.push(et),Se.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ct]);let Ct=n.get(g[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function de(T){return Math.min(s.maxSamples,T.samples)}function Me(T){let g=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(T){let g=a.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function Te(T,g){let F=T.colorSpace,k=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ns&&F!==qn&&($t.getTransfer(F)===le?(k!==dn||W!==$e)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",F)),g}function ee(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.getTextureUnits=K,this.setTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=tt,this.setTexture3D=pt,this.setTextureCube=dt,this.rebindTextures=jt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function N0(i,t){function e(n,s=qn){let r,a=$t.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Pl)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Nl)return i.ALPHA;if(n===Dl)return i.RGB;if(n===dn)return i.RGBA;if(n===Tn)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===za)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Ka||n===Za||n===Ja||n===Qa||n===lr||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Ka)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ja)return r.COMPRESSED_R11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lr)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===vo||n===cr||n===yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:D0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,x=null,A=typeof XRWebGLBinding<"u",m=new lc,p={},w=e.getContextAttributes(),b=null,_=null,C=[],M=[],R=new Mt,v=null,E=new Oe;E.viewport=new ye;let P=new Oe;P.viewport=new ye;let L=[E,P],B=new Ia,q=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=C[Q];return ot===void 0&&(ot=new $i,C[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=C[Q];return ot===void 0&&(ot=new $i,C[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=C[Q];return ot===void 0&&(ot=new $i,C[Q]=ot),ot.getHandSpace()};function V(Q){let ot=M.indexOf(Q.inputSource);if(ot===-1)return;let nt=C[ot];nt!==void 0&&(nt.update(Q.inputSource,Q.frame,l||a),nt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",H);for(let Q=0;Q<C.length;Q++){let ot=M[Q];ot!==null&&(M[Q]=null,C[Q].disconnect(ot))}q=null,K=null,m.reset();for(let Q in p)delete p[Q];t.setRenderTarget(b),d=null,u=null,f=null,s=null,_=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&A&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Pt=null,Ot=null;w.depth&&(Ot=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=w.stencil?ci:Tn,Pt=w.stencil?us:An);let Lt={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new nn(u.textureWidth,u.textureHeight,{format:dn,type:$e,depthTexture:new Wn(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new nn(d.framebufferWidth,d.framebufferHeight,{format:dn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Q){for(let ot=0;ot<Q.removed.length;ot++){let nt=Q.removed[ot],Pt=M.indexOf(nt);Pt>=0&&(M[Pt]=null,C[Pt].disconnect(nt))}for(let ot=0;ot<Q.added.length;ot++){let nt=Q.added[ot],Pt=M.indexOf(nt);if(Pt===-1){for(let Lt=0;Lt<C.length;Lt++)if(Lt>=M.length){M.push(nt),Pt=Lt;break}else if(M[Lt]===null){M[Lt]=nt,Pt=Lt;break}if(Pt===-1)break}let Ot=C[Pt];Ot&&Ot.connect(nt)}}let j=new I,tt=new I;function pt(Q,ot,nt){j.setFromMatrixPosition(ot.matrixWorld),tt.setFromMatrixPosition(nt.matrixWorld);let Pt=j.distanceTo(tt),Ot=ot.projectionMatrix.elements,Lt=nt.projectionMatrix.elements,pe=Ot[14]/(Ot[10]-1),Jt=Ot[14]/(Ot[10]+1),se=(Ot[9]+1)/Ot[5],jt=(Ot[9]-1)/Ot[5],Xt=(Ot[8]-1)/Ot[0],Ae=(Lt[8]+1)/Lt[0],_e=pe*Xt,Se=pe*Ae,be=Pt/(-Xt+Ae),de=be*-Xt;if(ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(de),Q.translateZ(be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ot[10]===-1)Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Me=pe+be,U=Jt+be,Te=_e-de,ee=Se+(Pt-de),T=se*Jt/U*Me,g=jt*Jt/U*Me;Q.projectionMatrix.makePerspective(Te,ee,T,g,Me,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function dt(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ot=Q.near,nt=Q.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),B.near=P.near=E.near=ot,B.far=P.far=E.far=nt,(q!==B.near||K!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,K=B.far),B.layers.mask=Q.layers.mask|6,E.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let Pt=Q.parent,Ot=B.cameras;dt(B,Pt);for(let Lt=0;Lt<Ot.length;Lt++)dt(Ot[Lt],Pt);Ot.length===2?pt(B,E,P):B.projectionMatrix.copy(E.projectionMatrix),At(Q,B,Pt)};function At(Q,ot,nt){nt===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(nt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ia*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Q){c=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Q){return p[Q]};let Zt=null;function fe(Q,ot){if(h=ot.getViewerPose(l||a),x=ot,h!==null){let nt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Pt=!1;nt.length!==B.cameras.length&&(B.cameras.length=0,Pt=!0);for(let Jt=0;Jt<nt.length;Jt++){let se=nt[Jt],jt=null;if(d!==null)jt=d.getViewport(se);else{let Ae=f.getViewSubImage(u,se);jt=Ae.viewport,Jt===0&&(t.setRenderTargetTextures(_,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(_))}let Xt=L[Jt];Xt===void 0&&(Xt=new Oe,Xt.layers.enable(Jt),Xt.viewport=new ye,L[Jt]=Xt),Xt.matrix.fromArray(se.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(se.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(jt.x,jt.y,jt.width,jt.height),Jt===0&&(B.matrix.copy(Xt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pt===!0&&B.cameras.push(Xt)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){f=n.getBinding();let Jt=f.getDepthInformation(nt[0]);Jt&&Jt.isValid&&Jt.texture&&m.init(Jt,s.renderState)}if(Ot&&Ot.includes("camera-access")&&A){t.state.unbindTexture(),f=n.getBinding();for(let Jt=0;Jt<nt.length;Jt++){let se=nt[Jt].camera;if(se){let jt=p[se];jt||(jt=new qs,p[se]=jt);let Xt=f.getCameraImage(se);jt.sourceTexture=Xt}}}}for(let nt=0;nt<C.length;nt++){let Pt=M[nt],Ot=C[nt];Pt!==null&&Ot!==void 0&&Ot.update(Pt,ot,l||a)}Zt&&Zt(Q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}let te=new Kh;te.setAnimationLoop(fe),this.setAnimationLoop=function(Q){Zt=Q},this.dispose=function(){}}},B0=new re,tu=new Ht;tu.set(-1,0,0,0,1,0,0,0,1);function O0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,b,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),A(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),b=w.envMap,_=w.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function A(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,C){let M=C.program;n.uniformBlockBinding(_,M)}function l(_,C){let M=s[_.id];M===void 0&&(m(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",w));let R=C.program;n.updateUBOMapping(_,R);let v=t.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){let C=f();_.__bindingPointIndex=C;let M=i.createBuffer(),R=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,M),M}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let C=s[_.id],M=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let v=0,E=M.length;v<E;v++){let P=M[v];if(Array.isArray(P))for(let L=0,B=P.length;L<B;L++)d(P[L],v,L,R);else d(P,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,C,M,R){if(A(_,C,M,R)===!0){let v=_.__offset,E=_.value;if(Array.isArray(E)){let P=0;for(let L=0;L<E.length;L++){let B=E[L],q=p(B);x(B,_.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function x(_,C,M){typeof _=="number"||typeof _=="boolean"?C[0]=_:_.isMatrix3?(C[0]=_.elements[0],C[1]=_.elements[1],C[2]=_.elements[2],C[3]=0,C[4]=_.elements[3],C[5]=_.elements[4],C[6]=_.elements[5],C[7]=0,C[8]=_.elements[6],C[9]=_.elements[7],C[10]=_.elements[8],C[11]=0):ArrayBuffer.isView(_)?C.set(new _.constructor(_.buffer,_.byteOffset,C.length)):_.toArray(C,M)}function A(_,C,M,R){let v=_.value,E=C+"_"+M;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{let P=R[E];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(_){let C=_.uniforms,M=0,R=16;for(let E=0,P=C.length;E<P;E++){let L=Array.isArray(C[E])?C[E]:[C[E]];for(let B=0,q=L.length;B<q;B++){let K=L[B],V=Array.isArray(K.value)?K.value:[K.value];for(let Y=0,H=V.length;Y<H;Y++){let j=V[Y],tt=p(j),pt=M%R,dt=pt%tt.boundary,At=pt+dt;M+=dt,At!==0&&R-At<tt.storage&&(M+=R-At),K.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=tt.storage}}}let v=M%R;return v>0&&(M+=R-v),_.__size=M,_.__cache={},this}function p(_){let C={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(C.boundary=4,C.storage=4):_.isVector2?(C.boundary=8,C.storage=8):_.isVector3||_.isColor?(C.boundary=16,C.storage=12):_.isVector4?(C.boundary=16,C.storage=16):_.isMatrix3?(C.boundary=48,C.storage=48):_.isMatrix4?(C.boundary=64,C.storage=64):_.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(C.boundary=16,C.storage=_.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",_),C}function w(_){let C=_.target;C.removeEventListener("dispose",w);let M=a.indexOf(C.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}var V0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function k0(){return Un===null&&(Un=new Hs(V0,16,16,hi,Ln),Un.name="DFG_LUT",Un.minFilter=ze,Un.magFilter=ze,Un.wrapS=bn,Un.wrapT=bn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var To=class{constructor(t={}){let{canvas:e=yh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=$e}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let A=d,m=new Set([Ga,ka,Va]),p=new Set([$e,An,hs,us,Ba,Oa]),w=new Uint32Array(4),b=new Int32Array(4),_=new I,C=null,M=null,R=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,B=null,q=null,K=null,V=null;this._outputColorSpace=He;let Y=0,H=0,j=null,tt=-1,pt=null,dt=new ye,At=new ye,Zt=null,fe=new _t(0),te=0,Q=e.width,ot=e.height,nt=1,Pt=null,Ot=null,Lt=new ye(0,0,Q,ot),pe=new ye(0,0,Q,ot),Jt=!1,se=new es,jt=!1,Xt=!1,Ae=new re,_e=new I,Se=new ye,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Me(){return j===null?nt:1}let U=n;function Te(y,D){return e.getContext(y,D)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",rn,!1),U===null){let D="webgl2";if(U=Te(D,y),U===null)throw Te(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Bt("WebGLRenderer: "+y.message),y}let ee,T,g,F,k,W,et,rt,X,J,ct,Ct,ft,lt,It,Ut,Ft,S,ht,Z,ut,xt,$;function wt(){ee=new Kp(U),ee.init(),ut=new N0(U,ee),T=new Vp(U,ee,t,ut),g=new L0(U,ee),T.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),q=U.createFramebuffer(),K=U.createFramebuffer(),V=U.createFramebuffer(),F=new Qp(U),k=new v0,W=new U0(U,ee,g,k,T,ut,F),et=new Yp(P),rt=new td(U),xt=new Op(U,rt),X=new Zp(U,rt,F,xt),J=new $p(U,X,rt,xt,F),S=new jp(U,T,W),It=new kp(k),ct=new x0(P,et,ee,T,xt,It),Ct=new O0(P,k),ft=new _0,lt=new w0(ee),Ft=new Bp(P,et,g,J,x,c),Ut=new P0(P,J,T),$=new z0(U,F,T,g),ht=new zp(U,ee,F),Z=new Jp(U,ee,F),F.programs=ct.programs,P.capabilities=T,P.extensions=ee,P.properties=k,P.renderLists=ft,P.shadowMap=Ut,P.state=g,P.info=F}wt(),A!==$e&&(E=new em(A,e.width,e.height,o,s,r));let St=new cc(P,U);this.xr=St,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(y){y!==void 0&&(nt=y,this.setSize(Q,ot,!1))},this.getSize=function(y){return y.set(Q,ot)},this.setSize=function(y,D,G=!0){if(St.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=y,ot=D,e.width=Math.floor(y*nt),e.height=Math.floor(D*nt),G===!0&&(e.style.width=y+"px",e.style.height=D+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(Q*nt,ot*nt).floor()},this.setDrawingBufferSize=function(y,D,G){Q=y,ot=D,nt=G,e.width=Math.floor(y*G),e.height=Math.floor(D*G),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(A===$e){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(dt)},this.getViewport=function(y){return y.copy(Lt)},this.setViewport=function(y,D,G,O){y.isVector4?Lt.set(y.x,y.y,y.z,y.w):Lt.set(y,D,G,O),g.viewport(dt.copy(Lt).multiplyScalar(nt).round())},this.getScissor=function(y){return y.copy(pe)},this.setScissor=function(y,D,G,O){y.isVector4?pe.set(y.x,y.y,y.z,y.w):pe.set(y,D,G,O),g.scissor(At.copy(pe).multiplyScalar(nt).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(y){g.setScissorTest(Jt=y)},this.setOpaqueSort=function(y){Pt=y},this.setTransparentSort=function(y){Ot=y},this.getClearColor=function(y){return y.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,G=!0){let O=0;if(y){let z=!1;if(j!==null){let mt=j.texture.format;z=m.has(mt)}if(z){let mt=j.texture.type,vt=p.has(mt),at=Ft.getClearColor(),bt=Ft.getClearAlpha(),Tt=at.r,kt=at.g,Wt=at.b;vt?(w[0]=Tt,w[1]=kt,w[2]=Wt,w[3]=bt,U.clearBufferuiv(U.COLOR,0,w)):(b[0]=Tt,b[1]=kt,b[2]=Wt,b[3]=bt,U.clearBufferiv(U.COLOR,0,b))}else O|=U.COLOR_BUFFER_BIT}D&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Ft.dispose(),ft.dispose(),lt.dispose(),k.dispose(),et.dispose(),J.dispose(),xt.dispose(),$.dispose(),ct.dispose(),St.dispose(),St.removeEventListener("sessionstart",vr),St.removeEventListener("sessionend",Ms),Dn.stop()};function me(y){y.preventDefault(),Ol("WebGLRenderer: Context Lost."),L=!0}function he(){Ol("WebGLRenderer: Context Restored."),L=!1;let y=F.autoReset,D=Ut.enabled,G=Ut.autoUpdate,O=Ut.needsUpdate,z=Ut.type;wt(),F.autoReset=y,Ut.enabled=D,Ut.autoUpdate=G,Ut.needsUpdate=O,Ut.type=z}function rn(y){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function an(y){let D=y.target;D.removeEventListener("dispose",an),Uo(D)}function Uo(y){_s(y),k.remove(y)}function _s(y){let D=k.get(y).programs;D!==void 0&&(D.forEach(function(G){ct.releaseProgram(G)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,G,O,z,mt){D===null&&(D=be);let vt=z.isMesh&&z.matrixWorld.determinantAffine()<0,at=Ne(y,D,G,O,z);g.setMaterial(O,vt);let bt=G.index,Tt=1;if(O.wireframe===!0){if(bt=X.getWireframeAttribute(G),bt===void 0)return;Tt=2}let kt=G.drawRange,Wt=G.attributes.position,yt=kt.start*Tt,ae=(kt.start+kt.count)*Tt;mt!==null&&(yt=Math.max(yt,mt.start*Tt),ae=Math.min(ae,(mt.start+mt.count)*Tt)),bt!==null?(yt=Math.max(yt,0),ae=Math.min(ae,bt.count)):Wt!=null&&(yt=Math.max(yt,0),ae=Math.min(ae,Wt.count));let xe=ae-yt;if(xe<0||xe===1/0)return;xt.setup(z,O,at,G,bt);let ue,oe=ht;if(bt!==null&&(ue=rt.get(bt),oe=Z,oe.setIndex(ue)),z.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*Me()),oe.setMode(U.LINES)):oe.setMode(U.TRIANGLES);else if(z.isLine){let Re=O.linewidth;Re===void 0&&(Re=1),g.setLineWidth(Re*Me()),z.isLineSegments?oe.setMode(U.LINES):z.isLineLoop?oe.setMode(U.LINE_LOOP):oe.setMode(U.LINE_STRIP)}else z.isPoints?oe.setMode(U.POINTS):z.isSprite&&oe.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Re=z._multiDrawStarts,N=z._multiDrawCounts,it=z._multiDrawCount,st=bt?rt.get(bt).bytesPerElement:1,zt=k.get(O).currentProgram.getUniforms();for(let Rt=0;Rt<it;Rt++)zt.setValue(U,"_gl_DrawID",Rt),oe.render(Re[Rt]/st,N[Rt])}else if(z.isInstancedMesh)oe.renderInstances(yt,xe,z.count);else if(G.isInstancedBufferGeometry){let Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,N=Math.min(G.instanceCount,Re);oe.renderInstances(yt,xe,N)}else oe.render(yt,xe)};function As(y,D,G){y.transparent===!0&&y.side===Ze&&y.forceSinglePass===!1?(y.side=Ve,y.needsUpdate=!0,Ni(y,D,G),y.side=Gn,y.needsUpdate=!0,Ni(y,D,G),y.side=Ze):Ni(y,D,G)}this.compile=function(y,D,G=null){G===null&&(G=y),M=lt.get(G),M.init(D),v.push(M),G.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),y!==G&&y.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),M.setupLights();let O=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let mt=z.material;if(mt)if(Array.isArray(mt))for(let vt=0;vt<mt.length;vt++){let at=mt[vt];As(at,G,z),O.add(at)}else As(mt,G,z),O.add(mt)}),M=v.pop(),O},this.compileAsync=function(y,D,G=null){let O=this.compile(y,D,G);return new Promise(z=>{function mt(){if(O.forEach(function(vt){k.get(vt).currentProgram.isReady()&&O.delete(vt)}),O.size===0){z(y);return}setTimeout(mt,10)}ee.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Pi=null;function xr(y){Pi&&Pi(y)}function vr(){Dn.stop()}function Ms(){Dn.start()}let Dn=new Kh;Dn.setAnimationLoop(xr),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(y){Pi=y,St.setAnimationLoop(y),y===null?Dn.stop():Dn.start()},St.addEventListener("sessionstart",vr),St.addEventListener("sessionend",Ms),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(y,D);let G=St.enabled===!0&&St.isPresenting===!0,O=E!==null&&(j===null||G)&&E.begin(P,j);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(D),D=St.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,D,j),M=lt.get(y,v.length),M.init(D),M.state.textureUnits=W.getTextureUnits(),v.push(M),Ae.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),se.setFromProjectionMatrix(Ae,yn,D.reversedDepth),Xt=this.localClippingEnabled,jt=It.init(this.clippingPlanes,Xt),C=ft.get(y,R.length),C.init(),R.push(C),St.enabled===!0&&St.isPresenting===!0){let vt=P.xr.getDepthSensingMesh();vt!==null&&Li(vt,D,-1/0,P.sortObjects)}Li(y,D,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(Pt,Ot,D.reversedDepth),de=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,de&&Ft.addToRenderList(C,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&It.beginShadows();let z=M.state.shadowsArray;if(Ut.render(z,y,D),jt===!0&&It.endShadows(),(O&&E.hasRenderPass())===!1){let vt=C.opaque,at=C.transmissive;if(M.setupLights(),D.isArrayCamera){let bt=D.cameras;if(at.length>0)for(let Tt=0,kt=bt.length;Tt<kt;Tt++){let Wt=bt[Tt];Ss(vt,at,y,Wt)}de&&Ft.render(y);for(let Tt=0,kt=bt.length;Tt<kt;Tt++){let Wt=bt[Tt];yr(C,y,Wt,Wt.viewport)}}else at.length>0&&Ss(vt,at,y,D),de&&Ft.render(y),yr(C,y,D)}j!==null&&H===0&&(W.updateMultisampleRenderTarget(j),W.updateRenderTargetMipmap(j)),O&&E.end(P),y.isScene===!0&&y.onAfterRender(P,y,D),xt.resetDefaultState(),tt=-1,pt=null,v.pop(),v.length>0?(M=v[v.length-1],W.setTextureUnits(M.state.textureUnits),jt===!0&&It.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,B!==null&&B.renderEnd()};function Li(y,D,G,O){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLightProbeGrid)M.pushLightProbeGrid(y);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||se.intersectsSprite(y)){O&&Se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ae);let vt=J.update(y),at=y.material;at.visible&&C.push(y,vt,at,G,Se.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||se.intersectsObject(y))){let vt=J.update(y),at=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Se.copy(y.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Se.copy(vt.boundingSphere.center)),Se.applyMatrix4(y.matrixWorld).applyMatrix4(Ae)),Array.isArray(at)){let bt=vt.groups;for(let Tt=0,kt=bt.length;Tt<kt;Tt++){let Wt=bt[Tt],yt=at[Wt.materialIndex];yt&&yt.visible&&C.push(y,vt,yt,G,Se.z,Wt)}}else at.visible&&C.push(y,vt,at,G,Se.z,null)}}let mt=y.children;for(let vt=0,at=mt.length;vt<at;vt++)Li(mt[vt],D,G,O)}function yr(y,D,G,O){let{opaque:z,transmissive:mt,transparent:vt}=y;M.setupLightsView(G),jt===!0&&It.setGlobalState(P.clippingPlanes,G),O&&g.viewport(dt.copy(O)),z.length>0&&Ui(z,D,G),mt.length>0&&Ui(mt,D,G),vt.length>0&&Ui(vt,D,G),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ss(y,D,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[O.id]===void 0){let yt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[O.id]=new nn(1,1,{generateMipmaps:!0,type:yt?Ln:$e,minFilter:li,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let mt=M.state.transmissionRenderTarget[O.id],vt=O.viewport||dt;mt.setSize(vt.z*P.transmissionResolutionScale,vt.w*P.transmissionResolutionScale);let at=P.getRenderTarget(),bt=P.getActiveCubeFace(),Tt=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(fe),te=P.getClearAlpha(),te<1&&P.setClearColor(16777215,.5),P.clear(),de&&Ft.render(G);let kt=P.toneMapping;P.toneMapping=_n;let Wt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),M.setupLightsView(O),jt===!0&&It.setGlobalState(P.clippingPlanes,O),Ui(y,G,O),W.updateMultisampleRenderTarget(mt),W.updateRenderTargetMipmap(mt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let ae=0,xe=D.length;ae<xe;ae++){let ue=D[ae],{object:oe,geometry:Re,material:N,group:it}=ue;if(N.side===Ze&&oe.layers.test(O.layers)){let st=N.side;N.side=Ve,N.needsUpdate=!0,_r(oe,G,O,Re,N,it),N.side=st,N.needsUpdate=!0,yt=!0}}yt===!0&&(W.updateMultisampleRenderTarget(mt),W.updateRenderTargetMipmap(mt))}P.setRenderTarget(at,bt,Tt),P.setClearColor(fe,te),Wt!==void 0&&(O.viewport=Wt),P.toneMapping=kt}function Ui(y,D,G){let O=D.isScene===!0?D.overrideMaterial:null;for(let z=0,mt=y.length;z<mt;z++){let vt=y[z],{object:at,geometry:bt,group:Tt}=vt,kt=vt.material;kt.allowOverride===!0&&O!==null&&(kt=O),at.layers.test(G.layers)&&_r(at,D,G,bt,kt,Tt)}}function _r(y,D,G,O,z,mt){y.onBeforeRender(P,D,G,O,z,mt),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(P,D,G,O,y,mt),z.transparent===!0&&z.side===Ze&&z.forceSinglePass===!1?(z.side=Ve,z.needsUpdate=!0,P.renderBufferDirect(G,D,O,z,y,mt),z.side=Gn,z.needsUpdate=!0,P.renderBufferDirect(G,D,O,z,y,mt),z.side=Ze):P.renderBufferDirect(G,D,O,z,y,mt),y.onAfterRender(P,D,G,O,z,mt)}function Ni(y,D,G){D.isScene!==!0&&(D=be);let O=k.get(y),z=M.state.lights,mt=M.state.shadowsArray,vt=z.state.version,at=ct.getParameters(y,z.state,mt,D,G,M.state.lightProbeGridArray),bt=ct.getProgramCacheKey(at),Tt=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;let kt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=et.get(y.envMap||O.environment,kt),O.envMapRotation=O.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Tt===void 0&&(y.addEventListener("dispose",an),Tt=new Map,O.programs=Tt);let Wt=Tt.get(bt);if(Wt!==void 0){if(O.currentProgram===Wt&&O.lightsStateVersion===vt)return pn(y,at),Wt}else at.uniforms=ct.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,G,at),y.onBeforeCompile(at,P),Wt=ct.acquireProgram(at,bt),Tt.set(bt,Wt),O.uniforms=at.uniforms;let yt=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=It.uniform),pn(y,at),O.needsLights=mn(y),O.lightsStateVersion=vt,O.needsLights&&(yt.ambientLightColor.value=z.state.ambient,yt.lightProbe.value=z.state.probe,yt.directionalLights.value=z.state.directional,yt.directionalLightShadows.value=z.state.directionalShadow,yt.spotLights.value=z.state.spot,yt.spotLightShadows.value=z.state.spotShadow,yt.rectAreaLights.value=z.state.rectArea,yt.ltc_1.value=z.state.rectAreaLTC1,yt.ltc_2.value=z.state.rectAreaLTC2,yt.pointLights.value=z.state.point,yt.pointLightShadows.value=z.state.pointShadow,yt.hemisphereLights.value=z.state.hemi,yt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,yt.spotLightMatrix.value=z.state.spotLightMatrix,yt.spotLightMap.value=z.state.spotLightMap,yt.pointShadowMatrix.value=z.state.pointShadowMatrix),O.lightProbeGrid=M.state.lightProbeGridArray.length>0,O.currentProgram=Wt,O.uniformsList=null,Wt}function Ar(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=fs.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function pn(y,D){let G=k.get(y);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function No(y,D){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;_.setFromMatrixPosition(D.matrixWorld);for(let G=0,O=y.length;G<O;G++){let z=y[G];if(z.texture!==null&&z.boundingBox.containsPoint(_))return z}return null}function Ne(y,D,G,O,z){D.isScene!==!0&&(D=be),W.resetTextureUnits();let mt=D.fog,vt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,at=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$t.workingColorSpace,bt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Tt=et.get(O.envMap||vt,bt),kt=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),yt=!!G.morphAttributes.position,ae=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color,ue=_n;O.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ue=P.toneMapping);let oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Re=oe!==void 0?oe.length:0,N=k.get(O),it=M.state.lights;if(jt===!0&&(Xt===!0||y!==pt)){let ne=y===pt&&O.id===tt;It.setState(O,y,ne)}let st=!1;O.version===N.__version?(N.needsLights&&N.lightsStateVersion!==it.state.version||N.outputColorSpace!==at||z.isBatchedMesh&&N.batching===!1||!z.isBatchedMesh&&N.batching===!0||z.isBatchedMesh&&N.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&N.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&N.instancing===!1||!z.isInstancedMesh&&N.instancing===!0||z.isSkinnedMesh&&N.skinning===!1||!z.isSkinnedMesh&&N.skinning===!0||z.isInstancedMesh&&N.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&N.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&N.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&N.instancingMorph===!1&&z.morphTexture!==null||N.envMap!==Tt||O.fog===!0&&N.fog!==mt||N.numClippingPlanes!==void 0&&(N.numClippingPlanes!==It.numPlanes||N.numIntersection!==It.numIntersection)||N.vertexAlphas!==kt||N.vertexTangents!==Wt||N.morphTargets!==yt||N.morphNormals!==ae||N.morphColors!==xe||N.toneMapping!==ue||N.morphTargetsCount!==Re||!!N.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,N.__version=O.version);let zt=N.currentProgram;st===!0&&(zt=Ni(O,D,z),B&&O.isNodeMaterial&&B.onUpdateProgram(O,zt,N));let Rt=!1,Yt=!1,Nt=!1,Vt=zt.getUniforms(),Gt=N.uniforms;if(g.useProgram(zt.program)&&(Rt=!0,Yt=!0,Nt=!0),O.id!==tt&&(tt=O.id,Yt=!0),N.needsLights){let ne=No(M.state.lightProbeGridArray,z);N.lightProbeGrid!==ne&&(N.lightProbeGrid=ne,Yt=!0)}if(Rt||pt!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Vt.setValue(U,"projectionMatrix",y.projectionMatrix),Vt.setValue(U,"viewMatrix",y.matrixWorldInverse);let Je=Vt.map.cameraPosition;Je!==void 0&&Je.setValue(U,_e.setFromMatrixPosition(y.matrixWorld)),T.logarithmicDepthBuffer&&Vt.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Vt.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),pt!==y&&(pt=y,Yt=!0,Nt=!0)}if(N.needsLights&&(it.state.directionalShadowMap.length>0&&Vt.setValue(U,"directionalShadowMap",it.state.directionalShadowMap,W),it.state.spotShadowMap.length>0&&Vt.setValue(U,"spotShadowMap",it.state.spotShadowMap,W),it.state.pointShadowMap.length>0&&Vt.setValue(U,"pointShadowMap",it.state.pointShadowMap,W)),z.isSkinnedMesh){Vt.setOptional(U,z,"bindMatrix"),Vt.setOptional(U,z,"bindMatrixInverse");let ne=z.skeleton;ne&&(ne.boneTexture===null&&ne.computeBoneTexture(),Vt.setValue(U,"boneTexture",ne.boneTexture,W))}z.isBatchedMesh&&(Vt.setOptional(U,z,"batchingTexture"),Vt.setValue(U,"batchingTexture",z._matricesTexture,W),Vt.setOptional(U,z,"batchingIdTexture"),Vt.setValue(U,"batchingIdTexture",z._indirectTexture,W),Vt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Vt.setValue(U,"batchingColorTexture",z._colorsTexture,W));let ve=G.morphAttributes;if((ve.position!==void 0||ve.normal!==void 0||ve.color!==void 0)&&S.update(z,G,zt),(Yt||N.receiveShadow!==z.receiveShadow)&&(N.receiveShadow=z.receiveShadow,Vt.setValue(U,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(Gt.envMapIntensity.value=D.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=k0()),Yt){if(Vt.setValue(U,"toneMappingExposure",P.toneMappingExposure),N.needsLights&&on(Gt,Nt),mt&&O.fog===!0&&Ct.refreshFogUniforms(Gt,mt),Ct.refreshMaterialUniforms(Gt,O,nt,ot,M.state.transmissionRenderTarget[y.id]),N.needsLights&&N.lightProbeGrid){let ne=N.lightProbeGrid;Gt.probesSH.value=ne.texture,Gt.probesMin.value.copy(ne.boundingBox.min),Gt.probesMax.value.copy(ne.boundingBox.max),Gt.probesResolution.value.copy(ne.resolution)}fs.upload(U,Ar(N),Gt,W)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(fs.upload(U,Ar(N),Gt,W),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Vt.setValue(U,"center",z.center),Vt.setValue(U,"modelViewMatrix",z.modelViewMatrix),Vt.setValue(U,"normalMatrix",z.normalMatrix),Vt.setValue(U,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let ne=O.uniformsGroups;for(let Je=0,Di=ne.length;Je<Di;Je++){let fc=ne[Je];$.update(fc,zt),$.bind(fc,zt)}}return zt}function on(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function mn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(y,D,G){let O=k.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),k.get(y.texture).__webglTexture=D,k.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let G=k.get(y);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,G=0){j=y,Y=D,H=G;let O=null,z=!1,mt=!1;if(y){let at=k.get(y);if(at.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,at.__webglFramebuffer),dt.copy(y.viewport),At.copy(y.scissor),Zt=y.scissorTest,g.viewport(dt),g.scissor(At),g.setScissorTest(Zt),tt=-1;return}else if(at.__webglFramebuffer===void 0)W.setupRenderTarget(y);else if(at.__hasExternalTextures)W.rebindTextures(y,k.get(y.texture).__webglTexture,k.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let kt=y.depthTexture;if(at.__boundDepthTexture!==kt){if(kt!==null&&k.has(kt)&&(y.width!==kt.image.width||y.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(y)}}let bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);let Tt=k.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[D])?O=Tt[D][G]:O=Tt[D],z=!0):y.samples>0&&W.useMultisampledRTT(y)===!1?O=k.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?O=Tt[G]:O=Tt,dt.copy(y.viewport),At.copy(y.scissor),Zt=y.scissorTest}else dt.copy(Lt).multiplyScalar(nt).floor(),At.copy(pe).multiplyScalar(nt).floor(),Zt=Jt;if(G!==0&&(O=q),g.bindFramebuffer(U.FRAMEBUFFER,O)&&g.drawBuffers(y,O),g.viewport(dt),g.scissor(At),g.setScissorTest(Zt),z){let at=k.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,at.__webglTexture,G)}else if(mt){let at=D;for(let bt=0;bt<y.textures.length;bt++){let Tt=k.get(y.textures[bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+bt,Tt.__webglTexture,G,at)}}else if(y!==null&&G!==0){let at=k.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,at.__webglTexture,G)}tt=-1},this.readRenderTargetPixels=function(y,D,G,O,z,mt,vt,at=0){if(!(y&&y.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){g.bindFramebuffer(U.FRAMEBUFFER,bt);try{let Tt=y.textures[at],kt=Tt.format,Wt=Tt.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+at),!T.textureFormatReadable(kt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Wt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-O&&G>=0&&G<=y.height-z&&U.readPixels(D,G,O,z,ut.convert(kt),ut.convert(Wt),mt)}finally{let Tt=j!==null?k.get(j).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(y,D,G,O,z,mt,vt,at=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt)if(D>=0&&D<=y.width-O&&G>=0&&G<=y.height-z){g.bindFramebuffer(U.FRAMEBUFFER,bt);let Tt=y.textures[at],kt=Tt.format,Wt=Tt.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+at),!T.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(D,G,O,z,ut.convert(kt),ut.convert(Wt),0);let ae=j!==null?k.get(j).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,ae);let xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ah(U,xe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt),U.deleteBuffer(yt),U.deleteSync(xe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,G=0){let O=Math.pow(2,-G),z=Math.floor(y.image.width*O),mt=Math.floor(y.image.height*O),vt=D!==null?D.x:0,at=D!==null?D.y:0;W.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,vt,at,z,mt),g.unbindTexture()},this.copyTextureToTexture=function(y,D,G=null,O=null,z=0,mt=0){let vt,at,bt,Tt,kt,Wt,yt,ae,xe,ue=y.isCompressedTexture?y.mipmaps[mt]:y.image;if(G!==null)vt=G.max.x-G.min.x,at=G.max.y-G.min.y,bt=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,kt=G.min.y,Wt=G.isBox3?G.min.z:0;else{let Gt=Math.pow(2,-z);vt=Math.floor(ue.width*Gt),at=Math.floor(ue.height*Gt),y.isDataArrayTexture?bt=ue.depth:y.isData3DTexture?bt=Math.floor(ue.depth*Gt):bt=1,Tt=0,kt=0,Wt=0}O!==null?(yt=O.x,ae=O.y,xe=O.z):(yt=0,ae=0,xe=0);let oe=ut.convert(D.format),Re=ut.convert(D.type),N;D.isData3DTexture?(W.setTexture3D(D,0),N=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(W.setTexture2DArray(D,0),N=U.TEXTURE_2D_ARRAY):(W.setTexture2D(D,0),N=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let it=g.getParameter(U.UNPACK_ROW_LENGTH),st=g.getParameter(U.UNPACK_IMAGE_HEIGHT),zt=g.getParameter(U.UNPACK_SKIP_PIXELS),Rt=g.getParameter(U.UNPACK_SKIP_ROWS),Yt=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,ue.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),g.pixelStorei(U.UNPACK_SKIP_ROWS,kt),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Wt);let Nt=y.isDataArrayTexture||y.isData3DTexture,Vt=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let Gt=k.get(y),ve=k.get(D),ne=k.get(Gt.__renderTarget),Je=k.get(ve.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,ne.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Di=0;Di<bt;Di++)Nt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(y).__webglTexture,z,Wt+Di),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(D).__webglTexture,mt,xe+Di)),U.blitFramebuffer(Tt,kt,vt,at,yt,ae,vt,at,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||k.has(y)){let Gt=k.get(y),ve=k.get(D);g.bindFramebuffer(U.READ_FRAMEBUFFER,K),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let ne=0;ne<bt;ne++)Nt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.__webglTexture,z,Wt+ne):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gt.__webglTexture,z),Vt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.__webglTexture,mt,xe+ne):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,mt),z!==0?U.blitFramebuffer(Tt,kt,vt,at,yt,ae,vt,at,U.COLOR_BUFFER_BIT,U.NEAREST):Vt?U.copyTexSubImage3D(N,mt,yt,ae,xe+ne,Tt,kt,vt,at):U.copyTexSubImage2D(N,mt,yt,ae,Tt,kt,vt,at);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Vt?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(N,mt,yt,ae,xe,vt,at,bt,oe,Re,ue.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(N,mt,yt,ae,xe,vt,at,bt,oe,ue.data):U.texSubImage3D(N,mt,yt,ae,xe,vt,at,bt,oe,Re,ue):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,mt,yt,ae,vt,at,oe,Re,ue.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,mt,yt,ae,ue.width,ue.height,oe,ue.data):U.texSubImage2D(U.TEXTURE_2D,mt,yt,ae,vt,at,oe,Re,ue);g.pixelStorei(U.UNPACK_ROW_LENGTH,it),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(U.UNPACK_SKIP_PIXELS,zt),g.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Yt),mt===0&&D.generateMipmaps&&U.generateMipmap(N),g.unbindTexture()},this.initRenderTarget=function(y){k.get(y).__webglFramebuffer===void 0&&W.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?W.setTextureCube(y,0):y.isData3DTexture?W.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?W.setTexture2DArray(y,0):W.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){Y=0,H=0,j=null,g.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var eu="data:image/jpeg;base64,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9999999999+99999+9999999999999999999999999999+99999+9999999999999999999999999999+99999+9999999999999999999999999999+99999+9999999999999999999999999999+99999+9999999999999999999999999999+99x29+9999999999999999999999999999+96lX9+9999999999999999999999999999+9rKc9+9999999999999999999999999999+99c99+99999999999999999999999999997xxxxx399999999999999999999999999999999999999999999999999+TV999999999999999999999999999pv8Avft6SdvffffffffffffffffaNvfffffehVevpvicY9e8dfffffffffffff3vfffffeU8Rvmvpt/ffJ/Td/ffffffffffe1ZvfffMvffa2vknnffX2tfHtRcfSspcfdBfFGZVrz1ZvfbbopvvffbFXNqz/Tvthn+mDPcuXfaGwfvffffmvfffffaCZ3/XF3/nvfh+vb4LKh7QqvffffffffffZlXSaLvX9/tvVh2UPhZnaaRrvffffffffffftfcheamEmmeMv3Jup/3euu+IPfffffffffXypT/TvOrCua/zPYc1vT3fnT/PffffffffffffbX0TXT7zS0dcvfFffffffffffffffffffffffffffffffXj8/wB733333333333333333333332oIornqUG485ab3333333333333333333333313333333333333333333333333333333333330bZR0L33333333333333333333333333n74iUZnXulwTb3333333333333333333331t2R1nQp6oh/3f3333333333333333333332884oIM844IYd/33333333333333333333332eAoimaXXVjb3333333333333333333333322/6/wCvusP+89999999999999999999999999999999999999999999999999999995D199999999999999999999999999999999DB399991999997i09999SY99999+993S15aBBB9997hm999KBBCc90yBCY9663P9sAB3zBBBBNtSBBBHx6DBBBQqCBBBSJ99+y4CBapHBBDHe+NLBBBHn+tLBBBBBFas994kLKDNz+uKP1+++++HDOe+++uKDBDHN9997ARNA+ve+b+e++++++uO+++++++/qI+99960RBDe+G6ZG+2+++5+++++++++++4e99996LAdD+3P8Avgg/vjv8cXe+uzNsuvvv3ffffZX0LHjxPvk+7DfvvvuolvvrzEfvu+3vfffYFoWrGjBvudtvPvMPd/8A/XDjLb3Wz333332TWXFL91P0UIIAIIAIIIIAAIIIIsT333333ejc4Xi7PX0JypJLbYay44wJrotU7333332Z+wFEFqn330DLLBJ9LLn04IXy9z3333332nQ+IovQ+T33BseXgPJAJAt01/333333333+Qp7rITw773z20E2z/wDsfAKH09999999995c7WOoD5OU9g0k978TV9uE99o9199999999xZmYcUBQe9owYw9P9o198952Ut999999999DR81txoy19cQYY5/956929qk99999+9999brHGuYmYR9s88M8F09c/oe9g999993pa/93sQYmQqX5s98sY39Fd98/q95V99995r7Z+/7WXOxWJ3b+8w4hV9F9506S9r99999999sdg1AfhNjWAx9888c9999i/8AQfY/ffffffffffwHXQ3HvAgffPPPPff/xAArEQEAAgECAwcFAQEBAAAAAAABABEhMUEQIFEwYXGBobHRQJHB4fBQ8XD/2gAIAQMBAT8Q/wDQEkkkkk7uCHj+rgUj/gpKG9DzcPqfpgte7P3/AMFIyWXHRXz6H9+5YVr4/wAJJCH9fX/ASgE7ud3O7ndzu4IR/phfBT9ZUqJXALi9JUoiV9FazHDzhcolQesSptCLcrrKODG56RLN/SMVdePaoqIgvYSmr56JXSDUe6bRjLrjYprAz6vAmnUnpu0FvljdIAQ5FAt5RLvgTflK26Qem4JZTKrolQ5YAv3TFGsVFhcr2YkG4YJxGLNeGOdZktMNCUF4BhdJ1REVUQTDFliZUZNHLvzAFMYs0mC1ITcWtWsCp4ZdSo6phKwa0M1DeHaY7Mz4uAYyY7olBslBuAXHO+mj4zV2gBag6rg5YMGwYSEIi1bwyqCXtc9JwXoDh6iBT5R1TqcK1iivWIFwX0LmbdTTmj49qFo7QXJbwJpj1OsJVtx3puC9AcPUQiR6TcWouCDBpuXAjdEQQrgtOaPj2oOVpd8RO8gmu+sfKQOItlqc3FHcQESCFRQLYhadZZbXUduLuG6MX3QahuP0bOmGNQKPeVjGRzqDc6S509ezNphHCku/LFbdvDQkBgEVIqUJO/PtNgkHQzO4gBpGbqo7DDlq4wzWBtg4KrSaRdtCAGDt7mqP/JM9Rge0C2Tu0Vjdqm9WSpoVCbXBQLZkdF/X6KuWbVQLSeoITQ+oKrMySiqZi4hK0Q1zEIlpSiFXEHSUNP8Ae2TdHC40jQv6t6O6KVGZVRFKsxsA3lIIAHWUAYgsg1PSXsGrECxLn6dbQwpRsRQB0hQomFW0oPWKUekbDolSpgIcMdKakWiXATX6e0uccvwl9OT/AM0l5b6ijhnVcwlCjgK2lDylGIdG2JliCOn1NbylVKSkolJSIOspKXcANP8AXWoZdotQb+lV8NjlQcyuDUG+Rairg3zAunGiFONmORXx6HCjDyWcRqDfBai3wGoN8AXBPYLV/vGGfk+P+zGuHdj24LXEanQ5bqdWNuTYeFmDlGppi3yBWMFq93z8TFDR0OAK0Qeo6fPxFqLfBZfKvEeW1VL4Xz64Jqu3ofl295jtDof2fPjVGBXl1fEDeLfBYOqCcB4X2F818bjQto/tI7sHq/3dyN3oN/7eUjo9/GXtKi8KlzXhcU/RXC1RMH+AfPt4y4NvJR0Pd/dZgACgiwsLndxua40cyhpr2lAWUdYg0j1fH45TQ0Njr493vFMuIx0ikqVNbiZeUXgTAA0SuC0XBZMpyFQG9fT+0Izf/HKBAzsfl+Iq7ZebmvC7gXrxZaQbadzKW3lAu4mqY8UsqAvM1XfESomMyeux4dfaIrdeWuFnY/L+IrdscmYYm1MSLBrjZKRjZKysrKSnIKysrKysrFsNHq+H9UB0Pd4/1c1ADwPy/iOVscOeDiOkupWgm9PoPn2lv0K5GnpMVk9dvI+ftFbLeY3FjY6/r3lnWYhF2l7SsVDKpaOhu9f12C2raCRQwdgJZp6TQsvT5fSak+OeztvXu+YsxcQS6hLtlO0yamru89f12DUnTPpE9WWu323jWOF6PfHXoa3r8REaeIK0Qdavf7azdjvfj9s1bfYNXsass0ANoZlSuvC6ajKu7v8AHz9uQWqPg/jWaIqMA6+kUFy4qtO+r9YnUbzLOADFVsuAlM/8S2K03/7HYfLP69Y7w8fg+YFQ0d2OyB6zNlnXqxJolrCXmIQut2+fKKrbymNtLDdGt34reX3H2+GLYAtxr5736x3Yr5/MvsfX8sd1KJmjBMBQVqOfj7RQp09e56xQDqfj79KhIDfZ5/U17jp8yscWsb2iOsrCYRoaeHNb0YOHxM+3rHC2sbVef4mY6Vee/rwp0Vxhd7/z8cTwa58usTtMadld0DTx/UW9ZkKh0ZVzRiJoTGtfZ+/nn9Rff9BwqjQdff8AEIGu88O/mh56+nvxVjIBp5PtvGzhoGdSu8l7vKrPv4wtp6Nq7BBPn4TADQaQxwZxw1IxbCXY00PDnwXRj7FcPtM+78DBVbKfEx68MHQPVz8HlwpoaK45Upe8eWZJq1+JVZJV1DGsVMQyXKWGJXGuh5/q+camin2ZcdXDBOq+lfLD1jB+YJLT8bxWe/AzO+Hkf3o8yu3p+ZdZ0GMLG9TXOHTz3f2ZlrF3ivhUB2l7yk0jx+/IFQKt0z5RWDw8kpxY9Ee6sEFpY+8dW1BPu17Xxw7nHz63zAAbQyDrKByl6S4hEajDPY9XfgaTWXLhCVmjWUB19scgAgLo163BQOABep+4nHVOlH2Aimdm4bDdf2P3w012z9sxb7AYVFvLMytsHj+oFw0xK3ZllNp5Qm8cvSL2Gg/lcBaEd+K+/BrPRw1fd+TswDOnvMSiBmGqcDXkwc7vc7D/xAArEQEAAgECAwgDAQEBAQAAAAABABEhEDEgQVEwQGFxkaHR8IGx4cFQ8WD/2gAIAQIBAT8Q7bZxbO+7OLZ33ZxbO+7OLZ33ZxbO+7NSUdVvl/ag2WabO+7NDZco88gez/ZWqOWNNnfdmjKEqO+enjK7Ts77s1JLrs76JUpKSkpKRSv+mtaAd8s0Dei1A6y5b0g33K+reDZfGtS3pBidINznG+UCpfSW6Aso6xXamy5QIPqPgSl9XHbL6xLhfOc4QlXqLZvrRcpu7ReusJ1v9RC9OEUcFVGM5cO+C9VuHNKOsUQl5TdaVGgmUdYr8r4lzX8ypdcw3mW0SpTlKc41w7nGWiGIkJs0No4YbRciDU3IFtRUaNtdn4j5tYZDlN03Q47fsQ6pvEpgmYhtN02R30Npum3S0By/UzryhMN5S5sm/tYoinR8ols2aG03TZHfQ2jvLszEiCUy/uUGIszdNk39rMmpzN0SyYbxXMkNoM6ErOYl6bzCnmZixUbbQqEsmDmC4lb9mNRplHWPIaW6F8pTLS0yS9BGkMSzS3S3S3uFyzRaWy2W02o9MRNdjv4pPHKdJ4It94bsqYNvtS27Pu0z9eMHoi4MyMQbBUKMksQW6Yhdyy2/97mhshZqFoWa72GIGYGYGZUrEKmISsyoVHu4y5cuXcuXLg1Lly493r9WV+rKfVlPqyn1ZT6sp9WU+rKfVlPqyn1ZX6sr9XvBMzMzM6ZlszMx71bLly5cvS5f/wBsoFv/AAFAtgti/Y++Vw5K8vl/kA3Vvjn99msHta4QLUOSo6vx81BN5Pj9rRQyxlsnX4+eBYMG+BdRridAy74kC2GyUdX/ADrGLZer9x+NQIWvIdPn4iV0aXFvgOqXFvhGoN6PENS1FLTb93mXcfb758A4GV5feUs27fu0pu4wtdvfYDUELcTwc934/flDaOBv/CP74TcbrzgzELU2b4QqJxbI9pS0y9Jm3H2PvXhVP53p5eP6hFG0pBBrQBcnAcdpB2yCpngC+IUr1fd2AUcKrtc3/D5lajYmymOMEYFZWNSjhOqPRwpAXfXhGoNagLZkMDpzfj9wAKOG++cevgf6wMDlDDiJdTZshRgLuC6dLCeNPE1qkp0lOkp0nknklOkp0lJTgqLKFv3eANtv68uJUrjm/wCH+zomZUJR+YIqN5ugXtOc5Re2Pc/H7infuK5rnMhgdP78esAUUcSL6z0/v6hoBM3FiJZKXa1MFYR4UdeidP72CDeWDXYLmuczuB7/AAe8Gw406l7ePxBKwygC5R2lIERzmFu0a+ZyOn97DzxGuJVQO3uQRyPv5g3k1Wt4Nnf69Y7d+D5h1Guw2rd2iDeV7scYnVAcpRKspAzvOjBt8/HrwK7CfiAdmE0ekGA/PnAXyELp5QwUS4gb5QoKmzerH99ovleXy/Ez1W+OeyUbBLHOeXQ+7zJTN0oMxbmy4jtygqG3Py6fmBRRw4qLCc5PA+Z01+/iUi1Vnb8QKhe3xOuvb4g0Vh5szQteyY+YCwb+3lEbwh/v/txoKV2bl8jbxevxLZTyhveOCoCAGiVDc33d34q29xk8nErRRLqyZj5n45e2lvIQZS8P8+dWhyglLnsrXqeX9gG2KmyAqyUNoIkEFOZu4nkP7cvTf048vxPT+um6m/L9RIuzTC/J/wA9/wBakUM/0/cDHMX4P4ZUcub/AJ5RZ63PsMhz5ecI6nLAZEvtFKTroNNkDzjCvSIA7uXz49p659c6Zfnen9Y/CHHk6Zuq+xj5fzpmoOAz2e7bMHz+Zkp2YOVxRtIDK42q5RBsRbieoP4/vGnVg+0qOjQynoHv9J5zx8RlTeEQ5aOx0/fETnoaLXMf19xMdoZUlLc2ltVFN4FtRBqZj5en9/XBvqKwdMvjnvrk+N+gIyhuZgGvPPpn41z8TPx7VxESZhACtiFT/IcpszJg0YgqtldIxYJazslCd/nPA38CCgNBbOg9Eddh62+rcuuqVbcler/NN8OePXHZ2D83y/sVBceqdAVCiXMVyGJWJuJZ8dD37DdaHBPZn60Ao6tPef49mlnVfbEzmERmwdNjV3mQ+P8Aj2H/xAAtEAEAAQMDAgUEAwEBAQEAAAABEQAhMUFRYXGBECCRobEwwdHwQOHxUGBwkP/aAAgBAQABPxD/APN927du3bt27du3bt27du3bt27dwhXKOB8o7/8AhXbuBAZjAAVXAC9qLRgVxEYzizuGtB1HTog9o/8ACO3ZPifciq+qsuXy7v0FLlK7clD/AODdu0gSkxCdEt3hUJguQEEZEdJIoly/nCt9IkncVZTDuCavWD1/8G7d2X+hqj1aMMlkYFkuwvpTZaU2kXJygOlJXpgWI6kC9/8Awbt2BnCt4nq7hFBC7U1MfBJelCyjkLJ3MyaCFrygILEqZf8Awbt2gshCFDIlSYYmkMUcqabKKfa6hKnKu/8A4V277/8AwZ27dg7UBYJk6sO1ftP3r9p+9ftP3r9p+9ftP3r9p+9ftP3r9p+9ftP3r9p+9ftP3r9p+9I7UhYZk6sO/wD8tNIiUHL4CJIj0/7KgSoHPgKxMoeHziAVQm1CFEQK3rUFMOyae9KYTkSzuK0OEm43hozjtN3p/wBc3jtDf0rQ5S7DeChKhyrZ3NT0w7Jh7UgURIVvWhgC4Dfy2vEIbvBRdksHhJMSTmKDGL2XKSnRtLaf+MQhZexl6UBmAP8AASnUtJeKTGB2XfzUkxJOY8C7JZKtaYE3OHyAkhkHZv6UcQGJweEaEIytaDqRAuQ6U6rEH2lOhh8kPRqJMpY56xrTVJSl5I/4cCJytNReEJf3YqTNn7H1miSULQTUwYWxz1jSjS4fJD0KNRiGomMiBYp0qdCE4Gng8QmYw0okzIuzf08bp1dl+fCOxWzzTUBJlP0anrjsR4aYtm60UKDcSLa1AgB1PLJ/OdG/Iaj9gqO0oDfX94ojcAPrIgA1aVJsJUvatMWzdaPCOsO5NMQEmQ/Rqe5Xxx4WTq7r8eCJkzvUeNCDwIBlHJMvhbKYLFSbERZDeN6sxACjDtQpdZC1V14mLHFdK7+EPIqS39jlAb1qyyS8+sAUjCkpo8Ks7FG3b5BOJV0pLg98blmHslQe7LxdF+wdaAjAQBwiWT+TMwuwGrRFYPLdh2/NKr94uqx+akuTsMrQKkwimdkn6MUgCxzEq80b2aMqJEdRHw6V2qy8zFnihwJICquxggDDvUGhEWR2narZRAY8GAZRwdHwLGhDSAl96xXEUfVsffwmHDQdjVoGEAgKkMZhilZuIS0BSYZiPK2V5rEhYeAKuxzS7AY7dgYEQBYko6AQ4F8u7lb+LA1wXGm+7aZOVdhyQfJqOojR1wsswgwbF3+SMzqQ3/I0MkFxy/Ber+8X3GrQhPgI7r2x60iGT2FPoifsk3lhet9bvNMiknWJoWDgIayWygmkZSJCVMOWk7mj4cRA9Sz9q6ni6HhxQ9rL6/Hhen7l2/Pnfhqm0c3s+tLGEPSP4HljfREyZ+jlzspzxfP/ACCrIPuP9TVhSCewEvzUbxSHt+pFEqCUNt+w94rK7NKFy+4r9DCvRb3B1T93BRd1zpMjgC3vrTVLK/QS0f2L+reHFH3sPr8+HQ83RppWUl1b04nA6uKEzRHWntpaDdoQLO7u7+Zw1qqbE7W6RMNRs/adAaD+IlIG4jqeQKiSvSMvsFSVYoOiAT1Hx1jWkfcWoESJN48sm9Sb+Jdgu1/geeTC9KQyjtSguVO1j5aNUZr6x9qRIAlXAUwzjNjr3zQfSYOVgrE4DsR4f4Ff4Fax4A2BKrAG7QQKsWl4bHMrw1MSEQxOYnJqrvBam6Nygzi/WiI6iV+m/enAIikFsKDJ38wo2NnZ3p7aGg2aNzRFOpwepmmhZCHUvQAAwEVx6S7WPfw/2Aav2+g+KGY2Bg6svr4Wf0KI9jOxF+RgKcjO/CWfJeVSwAJbuPAzUbcMaI6Bd4L0WMQRbbC3aGC5hwUqR1NwO5BjutGJqSQG6BcgXR0qaJYNMSyAvdZ6UNuiWTuG2TQd4beE0n6d1cCkQYSlthkkPcajqI+CqbpxzZSwCYCnSSwx2IXL8iUfLQgo4jL1VqUssGjQ8UU0xwknWTina3IyfpDI6Cz6niXyYNAafMsBq1IkEEiaSiz0Hegc/OCOoR0IXcKADjyUykIXLXGuPEo6qhgaj7qs4zjGQZ9cevgeRg4JwPW/api7CCJtOBqrHLajrwxjqEsBKtgDFB9iRvsSHWDoUV3pHcAgrqJ0pqwp5JvJe5H1pgYnEGbKBqZOl6c/UGVEImojFREIyP8AdLcRBSwgTpelCdiaDWuItVu7tXI+Lp+Whu0PlMgu0+f/AGAaP28OHQHez70gocJHhw2Y9D+6V3JYcuKEHA9foS8q1JQO6ZE1FqJG5M6JtTI+EuGUWvIa/wBxNI3KRg91YHS+4eQU4SdIjuIKYc80rsr+OIoMJBq78AHiLMqCAmIdUaHGWI2XNuJ7w6VzfmgBPnwF0QRqGX0Hp4A8r4hkryGReLF21sEI9+t1jx3LX+hTx8m2WIsHEtyZ4pBBM8DCPI0TEcrZQS5wclAAISJqaNPI3PQixcrbgl0pH6IF4o6D3y3aEBZvN2Saxdz4k0eD0X5q+95A4H5Grpntknuy+A83GcwWel+9LMKTZSFta7uq0MFRpkAp2h38TNvUNMtzJOyhsiyJYemiaklHhUhar0Qe0U48BHtGjB/RIUdTO1KLgt1Ga7ln0f78AdwJphOUl1b02mhLq49p+kUUZgEzbc1VnhvSyxIV2r+4v1z4AIIuQYRLjVp3Z50J6Czmh3xFKYRMngA4lBgQgPVB3pEO1ADCsppC9DYsBGjZJpPiBBuF7L8+BYlQ54L2fA+Hw7EBrTDuke3j0osQgGCV91QktxqZMYdWB9qciCacje6A+/gSAX95+M+KHJl6X9ihYYj2g+am3WXVp2BvkNLz62O9LiIcgbRHxQlmky52BtAmRp3zMCkkjowDrD4lC3Md/wAXg25lh3RPUpx4aPevihH0gDiCHUz9qYRkIdS9AbgTV8oIfBBBdS/Th7mefZHNMEtn5Ofph0qVBrO3I3PDfv1Sclo74DmnVwdKiRHZPDJmMHQRPvXWuCI49UU0Gcy/pOo7tIHEEBbca+ZE4Y538gI5Wq0av/ctpAGw91P3oyVOGZjqT+OClw7Oj6xTiickht6hV5NYei3cfdPTwClDAIHeHwek6UJd2Cs7WAk91JT+KzouCVXSfDDpOKEPk1e9fFSF+kSCS6k8LZQQfUhJ6QLuJjmRxNMW1Zz9goeQCqmBiPajnwe2mBcY/M7RQY4lIO/Pkbnv4OYBcXkg+EE4W3ggmoYY6LbDlvsNeoXPf44LqAKF39QuFPgOtDYN+SJtWmAQqGCgGnh+g2+QYvJOI5W8JihSTWrAZTP1EeAAqc4MH0eStlIR0OfUv2aQk0LUUBAOt/Z4PkTUJ0ejkgpZmsiWAmZdgqaQxEizyh8E8lDVhoF9VqDO7ZrMWOPB2Krjwf8AePj+Q2fy0w4GJ4BXBGtOtAhKv2xoWp0rwa1t5LRpK200CgG8+7RHpTpCksCAUq2MvgFUW/DPwk1JK2ciKBybjk4ShbwAKLu8u1Kw4SJAzGsSAarw0hZ6pTKrlp1SEl57W1kt5NvH9Nu+kC72qeGqM0ppUms0CRXLkfUk1pVyJC+jfVe2G9ABHNlkyE1Vfkk1o625MGEfEYQvxJssjkaMdSZDomaDFjuwom4hSNA6F1wNSQ2HnYDQYAsFWXjpJCeuCDaXxVnh4f7PfTjw994+P5DZAMvQTgf1zTqoYyBKHco38HwFAOA8pwwVBlZvWXpom1cEcBfYptEQbSfJ7a96+KOEDAbeMTqh/VeQl9vwz0/kxzxBQZ8QnxxcBktseddmhHYTzwoUXSbuYKl5YLbeBLkhofhMzO3gKIczPi8ah2pcO3yo2Eg3ooBs04Ma9her4CYDzFS+x4ia1X08L9nvpxQjoqfaNKU/jscDIPeW+1aM1P8AXE+ZHBMdrR7Vma0GhCHuHo0mTYIog9R60giOG1TVTTcMRbAI9TTwY1l2B+7sZW1WxzdDYY5mTzZjwKUneyoeyeEheApi2PxHHgIEyUTRmx6FQAguQm7wZeCr582pEsvOKYiEZJF89GNtqeak8UNPPu2e4e4UE/K9aufFDBuiAjTuno+BWnOZsjcyMbcHwR+JKAGVXBR/CgsBcapBB1nR4LwJvIQ+o1pUFIX70BWbOKGacxveh2sLonhAKSxuhJZzMev8VUixkw3fIOiiRiFkFEPUoiyVZGJE4R8j5mPwASq7BUhVIDs4eYoQMWOgJc2YVG8NKJKp1knoA6INIwSBxPKwNkkoGcShTeFhwlYlWmUumFCNF2ZCya3oxmae1QQiuOJYnRB3plRHq9kaRPA3gSCMyizIjbar1aNsoZmFAIBcbYq0S7y5uNFKxpJUm9WtS1ky4IC3gRoDAkxA3ETJ4OIJVEQ5Mi4BpKCeeAJeYJ5rgetTXvBuyLFCl4kjan1Au4yZIzcbbVkkZKzYEYe4jRoNok+9XUJU/ekGAhFtPd01dAHrXz2UxrVgtpeyrxTtxE6Cwhxc96YpsiJwTvsmopU9wLedoE4yalBLC9M1ExRhoie/VIfSiVokzmnuBRrQi3yxCieqkV9NKhssXHI6rIlkom6Mkkkimwlzua1KudLOjZSOA64qKSgzG7xG4aympSPwRkQyI3HimxIM3zDEjBaRnrQaykFdU6A3FqAvNKV2C3ZGJuquv8VEAEIkibUxvUZRq5uAvyL0aFwIz26Mstr3WSwVYJCbuY6NSUOjYYJ1aP8AozZftnDe+wMo7ciVyGhDJpbt7eOxrj95nsSlt70ZoxZAjXSVO1Zu+AcKRYDYMA4mjKFkcrcGh6UuO0RpIWBi23j+/SZG5WBDIgEQAFgDTwnBCNaWbDEwUKAMJ4a8EAphKxR3GAmACwcUiMkgplvFvKOKECLEg7J80ANTll71JjyRAW5iKfdhZ9PAUERJEYR3KTCknvz1KGdSZuS1l+f1Yhw81qEyKegWVcC6nkiaHpQAAABAGA8B7hiJ6DA9aZoMyD/amBAOHzBrznwereZU6xr3miu6mW6gJU6cw8u6yuq/yB438tt4HqDUzRTf20in0pqxvene73oFsZTX0eHUoDJJCV/i6EefWKETMhg5WChi7av0g02nNRX2UEQeId9ZnpRWaERPpDRPeKgO1MVnaSnwccyId01BXEjvSBRlOkVjhJ88G1cj1rODmXe6TRB8KdW156oobU46GZL5NR1GaVICI1EXoqSFNrf8lVoS4MkXBJMkjRmlsWfuS/aVT5yhkPgA1n0YnL3oft8CHPYoi28yjnIfZpBrBHx0+SkK1MhT6l9quIdo/wCnNCkqazfoKeVE/qnwNLkr3+FqNNmRMeIKUch6BfVj7UYFjKXsR71tSJet5HeiYG6ZxGPdUrts99MQ7LQ6CpYnWUD0+hDaP9VQ8wPSn8pI5Z9nrUzd1/5ZbFulSZT1a/0PqIKQqyrj2rvVT27g9xpnKHsWSLuFW4NkZN7b0aWjFI/QPypjKDIPFo7CjXLI69Ek8hXrYN9JlJsd4qR9CXOBPq6vK0x0gqMi5osMaAbv/dD6UHm5GzU8L3M94H0RSp9WFtdJJ7lQd9kIi1mXuVBg7XusnuNWuF/VFXCu0j7C/hRbO1hHEFuB2p4zhOGQblvYaGv/AIEUwp0YqVF3U91Sa3Fqmkf+sClXKvX/AKLACI0Enc0oiN4oIgQgYQy4u1MwUmBhpGFKKHEg3oAosKCeasfQKxExgs7dE08bOFqYAJ7FqIJRSV0jPTTxFNBxN5yNxCYEohSl6GkKXMGUls2g0ogCKaWwQckkTo2YoPM5lJeMDAPWGJo86eTeBADQ+fBp5mp8jCITAlEKCUydk4CliyspTwXWOtIdcNqyChjgoKZgWOKvdQywEGlhO0kxRltSbIACcGrTxfE6sAFpN6ONWxEM5oOaD4MDUSRpQUlIgITaUk9oMs1JZtCMwBlhsaHFJjd4oHC2o1Yjn/mtr6kwNM8b07YbUmoTsgot70tGLBLSDIAYanvRqU1gSNlizdbkpH1qERVAFrw+lWiOgxNLMXbLcNBVkYKoGTTZU5YCCKFkkLM2bQ0XbABBSZoqmLDZimBgZqmCWAgAzltUNhpKBCIykiZd80NpSEIt5RmCI3oOcpakykQQAyb1MCwAkBZJCiNm0LxSQgX1iC4JUsWGgSGCTchgi+qamcpApAmF8fRoxsTsKRViSQ+lT/WMRHE0N1Q2SwYhFKLzNZ8Z1GYXEwuDWZonQnmYBkzigIKWDLC5cbYRSg6+8CMRMXrGbxINc0hwLNUkgte61LcIW8bf9G6c5i+kf/EB7oSCUbwtACOsCUna9BEkkASN5pYFEkJg3s0v7YAVbJpSojQCiMy6RSQQrCEu8xQkCEsCY3jajlLmAZbMYaGIuBB7n/dYERQTZ6sSwujUPwUZpb7EtDdJGQ9PeIR1lm80EttPmb3Ij7VLECRmz4ayvJUWIISZLS7yQ8zStWTJbmzcBtxTrWQbLLE9E9adYl7qhdJUncUGluEiyxH/AFVmmhxW8BY7VqjKjvGBlbNAeEmIHCJkpPoEQ4XgJuEaIxKGYDMFqRJQSYFQkupVkG1S5AO2NTDsaFwLDpQSuiRKJBBkdbxahWAJVbBvSTw/KJB0Rpt/jM6A1ptQM4LxcAJrrRIQuAiACSIkRNqMZ9B6bwBO5mpd2jryp4BKwVmsTFQRdtkmJYHcp8oIX9cGHLFRy3MNO5AU5w1CcF3ACw5iKXiwCrKZMBBe4VYgS6nshC4L1NMozGAiSxv/AM61z93UWBeyBCYgzdMF9aJpbKRINIGB4p1tEokesUI3odcgydDtBpAGMDcTE0nVhhFLUEMdgVSS4RF8gRMVC4zck6fRPZUGkH3ge+bh1lxdpRDLlZXlpyiyNzeiycKgZ7nBOBOqMT0aBMl3rUcCp56VkTqVDi7Sog4XPdSWZXwiUWiUJIoF5kUUWXECjaYppdqAhk3LRQ9qym3Q0ytAGDF6jw3gkxKZQSTaXemMOaCG4K8FaBvpVQDBZMXkU5n/AJrFnPaqgAFbuhSXmYkVNkiXWL1cQ2o6hVnLAaxRAq7EoQJgG0md6vu50/Kguj3ikIF+0hRUmDCLoxagkDsWoYN0BQlYWqPHPIDNclvUEOUaCVG5MWxSEEYW0xQBvStH9dtIzOQRMXkoClY8aEGH7hQxi2GTykT2iaPV4GIQBbmlGFjJAcAr2pLJO4NDFIx4TCwDFCYF5q8T61bICUDNtXYp8iYs4wCRhyFSek2EC4AjkpndXG7sJUyAGbNMepqSYQEC6QC2FhrC1+Z4iNr3pZm9NdHYRGdRTEsY/wCbMNmGuT60MYY6Upynq0plPehTCnRqZZWalESjaanmlLKerViJR1oQQI6NSzM33qTKe9TDIxSnKer4QYR3qUZFO9SmZS80q5Z60KYU6NTLKz3oRhHRqTKe/wDzmmJIcOBMv5Js2bNmzZs2bNmzZs2bNmzZs2bNmzbTElOHBiX/AEAAt4EbxBEheJmJdGlmUEglVhOB0rOOxQNoNoTNEhwIiAKJRUyc7UZcjCguZb2bZtUFWT0YiAkwkw9auJDtKx0F9KoPxWYa4bMl7UoolGAnlhmHG1CPCUQwRFxEdEa0EsFAmIxV5JZmRRHFIQUkwcYBVDfipSooE5YJCGw6OzBThPik3WyXXMRep9/woMzBJizpQQEMYZgAnF+NaKJJTdFCSRGDaoHQzc0YIJVLxGLtGRA1coQDr/0xmonjnQjR5uKNlpmoj8wJYQRBZ0WnwcC8wlhAQoGikd2Fjc8CklCs3HUtLYWeGlOUQ6VRWmENiByNjKRFUwMoVR4XXfUwTwBmN1MwT6U4iQYbVvBbDeNKiLTXoGTQhhLpJlHskvBlZZhhBUtmKT2JSg4AAIwjdapRg0Q0VS6WJZTISCjpoLjsbkZTFmM2MdLpKCxRZs82d1WmTigyRqllEJrSmDCknWkIBaSI6VeyJqKnlZMS7U1EnqDwJZMil7lpppNC9CJEoJynT/pPkARmaQy4Lz2otJgIF1EhA3R4vUsJwQAlAXmW2Sns9ki+YHIYsZAloww2IkkRF5DFQZxKsktAAKMYNWmxjE0vUMTcuTJUF+dngQuzlxU5TUMGmMmVSek0JGFUCLiyki30o19BAEMmmEO9ZiEWgpWLyi/DSl7LuqLLzH3qPZdwEkkhhiJuDs00iUIYFqTr1o0+3IsL95MDW4xVtSkWAQmGFm2cDRHQ0cVjnJNFjEt6h0cTAEBC5ODarJkCIVIRdm5bKg6m/uSoXVEWREf+mE2gBkLs0FtTzZJFAJDASxsUKjUm2TI5iJvgbNJXDHYymuIGbRrQnCkAQFRsgNNm0QUSVE0kN6AAEDN6azGgIbil5nDFFLxCIKYjlWXtTT+fQKXM1DlbkXpZFDDntQimAkJXaiI70jAmsoWTW3G7RzIPNnoCmbbWiyJpTF4DeTTMLBnErFMRwfReDl0Dwlwq2Khp2KcIQ3sklqW8t5umO+7lqKzM9cATYKMN061CURY1qMzJXUP/AN8IQTiHAbdaQOfYdv8AwkoROzblpExEq61EEuPtyUCQQkTX+PIwTsbN2gBwcOn9/wDlMLjtvP4qREpXxgrovatun8aa2/0TxSVlSrQoyMJqUFrYJ7Hn6cEsx/a1KS6V+3igCCEia/xJN/O+cDBquxTU5saBt5YiybnR+fonsCltHVTV/pbjagRCkfo5YK2oq+PguPJoFwmnD+fonqmu5P709REq5fBydU5/eKEBBEkTX6ecUf2wZ9M+axY/0zxQVc8stTviGVz5SrClWpYmy2uevmeEiRNGpSgtfe6ecIM46B0pVEVbq6+F2T/oDmg6CkTXzpDYwGVsU0N2waDbzLIuDU/rQgII3E182cGAacH5rLLd8jk8ps/vFCAgjcTXz6LtWzsTs6uDu03aii97QPWrxZj8HPVacGRnD93v5W9xxqKpeHtceAiGZ2TZrTDXfk3PFQKgC6ulNPotuW/0F7uZNBtT5zkNR28hYL5XSpOXEuv4nlvHVZ8ijLAkTXyxElesAW22fn6BydtNeZ+KDAKRNfFAgBKulTIcOF/r53BFeH94oQChG4mvkiWNBXdDLS/+6Vlu4pApsJLsYHeaSc0MOgsenn+fguKb2jGgPImN0iaUAR7WnT+PCctDa1bdPpMFNgcvTmiIkQruV3oC6yiRKWRjQ1XFaM7Ywdd3zvKqnr3oAghImviGAUq6VZk/6J5+lFLs/tKCLjJRt85aRSm21cn6LskPH64oRBGRwmtO1RICTrp3NS4hIPA6o+HenrOiJerPqPmN/wBIkFvf1HOnicAEq6VYs/6Z8woiKJcTSpiysnKfnn6Rv4N1plOfHg91wtYdzaryp/RGn0UBS2zv/FCIIyOtKIgASrpTzaJblu+EXY+alA0Cyfoyily4f7qUsGHB/f0grNKAOpbFR2JJJS6ODpBTGaJD6AW758yqXgkr/XNL0UCu/A+pgqApwTPKz4YJcVfq9d379PKWjpNOtMFA5WKJhbrz9FQFWA1aVlY3/GlVlZXyTC6mjUtsOVk+jPuWye3pUxYGxr/FKhBq0ZIz+1imrE1fCPm3dSofxrufXhz4atQCLKQg3ZsFRDBJFT5nZBzVuVZH0Isdc+e56QC9L7B7VkmN53/Jh3qzXErDFoDMdqWVpgY9d/CdsANeDyAiAGVpmVg1/GlVlZfAURGE1KgLbbk60dImE81lY92m+yGvXznXBhKGIPZ6PoYJcVPhy6FSVuxoeUuwNSow5bcd6EBBHCfThz4atNEMd11psQWZY/SOhLT/AD0yOoNXLP0FlDJoDifUdt6VEiDRuxu7regdIRmZWfZ9qIniyBum8eEtYFjT+fJl4cDLVyNk481qrc0agukOHp5CUfbdaRTnx9HFypofg/PzT0v3L1Z/ST6OVGpYajJczXp9CHPhq1LQO7NOTczG2R+OaQsAYFwY6Hv9BDggcqcAatIzUuew/wBQa1pQxObr44qwRHkEpSojnw9astUAsT0vSIBEKYJ2RpAiplXXxm4dfQfmnrEyvhZzNju2w1rQZlkeuh6VHC8N7Q0wloFluVv3WrJJfxgJvdKih1OOtZV6/jSqqsrr9SJl92hsyYTwmF/QZamOx5e/1Y6f3Soexqankhz4atS0DuzQ+gWMBurgqLeCGeh1ctutL0KZI/1x9Bt/8I1V0DdodBjZhrKW5zdKXaCGci7lTHAd6AQNDNX9tQb3QlQl73aYFlVSWwwUaHHPgoIG9Ts/veJLrdhlsDq1iyAOg4PJODZIut3G3p5BQQUHPP19QnKoew7s0iIq5X65dgalRhy2470OOWIZnpUtA7s0icnKtWcdMN7Ghy261BF2XvctXW2x9EZFiR9Y7uxlqfmERXd9mwUAAAAWA08FTpMD0Yj1qA5DLL/Z+aYSIskS5N43rAblCIg6UJ1f260G9k061fm2NDyYCKjXF6Hz5FDKFJveA0S40AEAEmgsPUf+MZNlUgDdrSQJT0urlt1p4Z3QOX6OUB9Jdv8Aw1oN5lTQZTV1nTFMizZ1pYTsUyeB8UUxIETpk96hXgxOZwR6FIdoA3i3u1Cggth8/FGEgWu5I04pVZWV8id1YYGtBMJ8KHR7A8ffZ2pCUrzT0xcUbQnN1wE+kj/xUYAyXjbanwa1MZn+SvVxg+lxnUI8mzd6KEU02JxKH7uaSNKRO6JnfNAgDx4TescUMHVif3SozYDItRcFxJHSO80nDtCJoXNJnuUAbFOS0GfLHQ0WoYHrL2PEnNCaRFlv4mAgm+MnaFf6av8ATVH+dSeS7U2zbzHCQWDY4GvKgAEJEZE/jqBK0BDlktzma8O8Vm47gGwYDg+kE6kXZu/sddKOPtZBYtAacKCJKSd6ASZYLhFzsW71PBHLi/b80MsQkujp7/NcSAikxQosr0KELCB00rNISla+LPtVlAJQTFRJkAG15uvo+LEdEJr78IpgxBIwWPyvjZ5NskPJuClVXE+Eu/hA5D0pfL9RSuX7UvpOilQ1gC/ChCHKy2+5r08HLqQmX+u1DBGFIE3Ir3FDzhXkZWGUmwVGeYFhDKNGL2+pLpE7Tc2tfQL03fLhPba5y8UqqrK/SkiUFwHTa2GvSnArQYKC1ttgpEAtaZ4KD0lONjHdisJKjGoJKgiVh9ahsgGQ2YoiBR2lvKgAmCPioqPkIWUybUQhw5ZUSzxF6loiFiTrb0PWh3fgIrKB3uosQEHHg9y62+T3XjB2Y8i8GHDQMnoNLKu/0JAb0JOyulf4/wCNf4v41/j/AI0jlFp6E04rOa916n3qRTffiaB79JWhOgUKkQRwWJ7XahHIWphECLkG56TVgp5CCSWkEetP1q3MNzLUj4qfHrqEx6yh8ejQ23qKGymhpnoNGs9qAz3gUeVvD4ENX2NaRG6FZd3+g0+msMAtDSD47mhwomws8jlelZdRCcAmiLhhSTL/AKR7UgcrBCXmXerCLcbdIaI6WLqvvikiZjeT80C4LChs3uNS634qLSGRkF2oBBJTA/JqRJkWw2v1iac6lSzPE7+W+DwTKsvdfovkZAbXHjEbGcItDScHE7/S0o8XwmC6Io0r3j585uhCKCaQeHHerZfQxmJnW+1KjLQkZQjC4vih3AJyGX2irjyTRst2In1870gZWkshRBtyZjou8VbVDLYGxgOD6acVCyBoDr+Rp6vdvTGriYpHAFOj/vzRZkhzJSgvCu36TSgVuwa5FQdiQJxBGa1IsW3f7QpgbJzc+KBsC8DYaYlpI/vrURGLBtFInWTm0TCO1QgJCy5CuO80c2cPlQCII2R1pgQjch6UcON6l7qg+SKaZwHNsa2B4Jo2rpmUkIDprFFAMzPQMnq0OzEADaMbPefp2fvlK6MDbEROJo/tyog1V+hIQAEW4ZB6Usq70E88yioS8MX0ovW5JQDcJby+aTBAIBurgq+QASOh0OV9opVEUZVZV+nabBYGgO/5Gi/bBmTdcy0iFAQXmbSNXBAYjQsdDSnEMbHoqQcFno1AEYEljKlQsJgkB+3oAhU24FrmCAm94+KEO1QpAXsHDTFFBkESzbvTMcZmprHo3qQCRJyMwJSVyAyN3U+Poe0fpIYdqh2ah2ah2ah2ah2ah2avs1Dt9ZQKAGV0pnGkwnmjQ5e00qWEges7uXtH1MZSsAND22a5ouIUhl111qCiRNhbcNe9XDXQZWUv1obYHlGkE/ipO4IVBJaU009Kl0MgvmQvUwkXLQqioDDdEZuvU23khiNqawlJ1Bq3YSNE00Z9qQx2ClRh8qC/ZC+1LUo0sAWqI1KW+6Z7jxHnrgKxG7a0n1D9q9gP8qF75BRKGuRf+lEvANnmW0N80n4JfvSmAopodBSmh0/BSuexFL/bovn1dT/n1Nn1NTfmUtn1H5r/AEn5r/Sfmv8ASfmg8eo/Nf7Sg/zKBx6+g8D30H96kf5Sgvvh+K5r+21BaXqaB1uooPMv1zQGV7P5o1vco1V0ZQBPmIHVKd0T+c3z6Kat0oRur9SRabVBD2uhq4zEWiDBfCenGlN2oBGSs6/u1KoJCI8W/eadJEFtcml0iA1YbuxQhJoJPq600G8WVPd6NLJhCtgjH7mkR0lajz9mplxUIkQ1AigqiiNqCVRgdioYDgrFG5LEszpSG5Szno/NfBDSP5TY5pKg3QOWtQjiKzn6qlsoeZVsS6DU2G7qmw3WCtl9xX9pWdl3V2PWo2Xd4O4teX6K/wARX+AV/mlfulfvFftFfulf5JX+AV/gK5fori+Noo3HZruetTuu7wdvHtT/AECt72q5FSHcWk6MIWmY+mdC9CJjT6JbuW/1WU5haZmeOrrgp5TRIAsNODQqzIFGgOE+LVJgCvbybNMrW/fZE3qYUIsnR39moGMrJ4KNioSQheoBKTKj1m3enduYbKj7UUF3N4RxDm1W+k2KRTUpEaGCRY4xTx4ps2dZvS5W5BqNmoqDnIE1dD5p8GoJG2j2WddvGXPcVBY9KgMA7VBkHekc+tXAelbEuiraSktE7Vt+qVsruK41eHpP9pU/2Gp2epr9L1+l66vdXV7q/S9dHuqdnqan+w1P9p4O41f2iv8AAVv+qVLX0KhU3x765R1VLElcENQ7oT6YaOrBUqNk2V+tiO/1jBVLB3D5dCpzmcYjgbBUyQWbPahjYuILDvNNU1RaR+9OpYNkjSmm1jT1096w1OxIh/elFmRhCuiZhocnAsFnqqfFKKG0j8zerhogjmO9BXEIl7ilsWQy4OZp69e4bVN3BkpRnm1Nz3nYweSXL7Aq7K9FbqeqaCx6VB4LtUjUKSz6lJZ9auE9K5nqrYH3VsJTjUl/VX6hX7hX+yV/slf7hX+iV/ulfulfvFftFS19CoVP9jX+qrdh3VzPRrhFf61KAhdBqVVkrfoN2jGFsxC407ZaQ7coI5XP1hSQESZtDdaHei7CMEyZ6uq63oyiBlhhiC203oIQvlPxRKQ8jAZpR+iwQqsR8+lByeQhEaW96OQhL3j+qdYoPqVIsgS7QNqeMCw3zh9KjozQZ4C5jX1oHDzH6PWpCacpefvnwk/QXQGsaugatKmituvfXtg8sr5CtSZDpSbPZAqLlU3xeqoGoLHoVBoO1WNiotPrSWfUr/Wr/eq5KaHehGCa7DQ6ADWv2jXM9Vcz1VzPVXM9VftGv2jX7hrhV/rV/tV/rV/qVNo9aCUAWxepgaSLtxf1pZx2iDcae6m8HKSd368lW45Z54j3xUIKXG4zyPYpAnJK7EZoWajIwWS3TeoRrTKTyxgOtJ2AmodP3SmTIM64Ovr+ahpDlm3Sad7BErQFQmMKfNSF7kzJovrRDMAiFp2l4aNWSI4JH5pacAiT31p4jEgkvakK2cYAWU7UoCaLOwfBoc+aTK6kVPgHWl/9jUmQ6U3uwBU3Kd4rcX1Vcx6rXDr/ACqix6FOT2ltaVYknMWqDp23o6bibVojABpESJvU0GGs1/vV/tVxfWuB61wPWp3HrVuKjYelT/ir/IoBVBdUIO9cIZMX0VWNIRcXLv6RSFBlZLlc/wAAeiyLp0qE+8Sxbekbt6CUW5N0UIBEMJss9bxSmy8LpMTUXpEOd/u07AyspyNT2XKyleJoHdoiANzkibVd8qV9qmAmCG7QPRoJg3f3BUFlidw3idpLelLiMQUdJm/rSQjbCnDrTtYqNy2NKyaDNhcP2Xp5nUMGVwVwHpepvZKbffQqfAdaXaD1ak0elJcvsK3+yFS1oTZSjJLkvdmmcIKYuuKITiYilkN0qEX3pWTnzRgORBSwpviiLUsDR2AnFf5Vf5Vf5Vf5Xg3HqBOvE0l3IJOglpED4V1AsvdKcUTjOzPeawQfwcsBLSBAKQz6fc2LUAoyoDsjigiy1Ab5PvRBAC7t23GKtViACxMXKBUDhhYrUA8oUiAa9T80UGRNhZ/zNKqQqTUoSMBIC0wBemGUJAs3sfulXZkiXsNC37elNRayXjRvUR8HRRnOhzpWCQtiSzw0dQvr5oikOWpiOHTfrU6ge1I59atifQWpsNQQCF6FE4IsxcU9hFxdaWNWDMFOXXijBsjeKCbzcNzSspJbUTEDqBSGU7aTyqo5Toq5P1rLtuAyd6WypurTunetv9O9XbHoU8abmA7tNgv/AEym1p/aSX4o5HQFrlLvWlUZS6rK/wASY28JIowvgbG70oGejeHrO7TdoYGy6sYqUKJSGubIcUbOwDJp33pFuzwFn3qQZFxJPalCKQC68/ioJka37d6lksqelKGFRdjWaOoLX0oCEqY0LfvWrQMhveWp+KAsZWeTesRTJux6OvApmCqdV+3lO4g+9PEiBgNPCOCnjPU+KAGd0b0N6BlBuFqQgx2hpg1xGLWKGRNMW4aLQgByiXuZoYyQFNL5MsNMUlhywkMdtam2bLAG6607AhQWpv5XLA25Um8poihpC5EDu3rStKZlgh1vtUsFdQP639qRO/V+q29qmxf+mBWMfxgZTNstwm77F9qFwoKIIIGwaFLmJa65vSkzQzDF6NOoS5YalbhgZXf1KE0ALQWKHcAyyHeNeKaEirQGibVmjEJNlDJNPDoabsWaWRJcyiP6o1iY0nNDfIAxiSJo0eOVrdeCFXamgmzc7nK9g8pxgPvTzNgwGnkgmYuVERZgEekxQBDEkYNE4WldXEgwAuFLcdaUCOAAGEkwvGlqXk7K+6mtcmyPigujXYs2W02oRmXiQYbBvXNyRj1tWQbqqR9g+7rG/uC7QDZDmywHrQ+gcnciDZE5qP35i7t1MSRdxWRiNRbuHQbTtQ2qpFmGaQZwttKH94jhREhJF8lMWu9SNws7muG1MEciI03Gwb3c/wAfXjgwWVwFEo88QlN3my4IKwmFKd2PmnOsLwdfzUT2EhOlKJGJs7k/vapAkQu3m0UycBDahs+y0s3gjyAY+aclGRjd/nWigQIQg3cUCJRLKL0kbhKV7VbiuJqyj8xR4gy6a0/4lPaoy8iLWhdUR0HymjbPvxTzNgsG3gokN5qcSN2x4g1AmRAqOxVwAcycYTqtnNJjclLrZCMEsOZrldxsYT46eJkSLQ5Y0xHehgpxeg9We9S7+R1QVbtGoN+KIaqxyltrGN6ZJXpTopcHBnigQRZKl1jwACAAp2zUUQQHUixbSn3cwlMrCnxTKVvUi6MB+f4oAhGACVdqhTscKSEJ22dzbSlHhDYnrGaRhRCw7ccUEiQKzR0oAi6eDTAIE0zNv2aLboEElCaDNyasTN16BQYtBl1Qv8lDIAXU81EamyX7eibjiU/mrHdyH5pyMlmkxb4rQoFHRvV0td1Eu6sActI92piDgIPJLVYF1qeAQMFQIlqdJv6FISpfILMFq7pHxVm8byCLw5tPxV4QiVcy3yu/hk3And2Oxs9TwWnO+pmHx2rp5IJy4pGY/ZaOP4bMkMNQ056UxDzxMc2ew9o8woIgyIwj/GODZlsjL4MHPSgmBKJ1760Ehwy9SPkogwN2HT1k9KRDNqt1P0pYe3hVRxyKYIsInnSavXyTtOn7pUBSYnoTQWIApMjKNOPIcZd2oEKt/wBpqJIJyZ6WqHWOxVqREQhtDpNMlmDRiF6lUkHLW/Jl28jEP8oIMf3d6/dBQph11PmCBE5ygGlYtTGHFHWTxncgyMLbuE0jaI6mPrp1GmDIgNbx1x6+VhxyYAu8CPWpXBgmW9mqv6UqpKrdXL5bK8ilQCcAPrSGK+mQKGL6aXwU4GLq0KqYCnmoIWaC7ipJiSdv4RpQQ2vg5cH9UjAEYSYHQPWpME+QudT7lGOYHNy9zepLQsTGt+s0EpNS2SQzxpSJnFKR0D704CegB27zWEcN1pTWooyWe1QTK2Ea8NQ9Ilfb29K6eNmpBOt6HIjC3AsOtg61NIZwTgOAg7eTBZZfagQCVopvq3oFYCWtYfQK6F1rWX1DxG6X07YPoelPRLqbrd8jXkLql9Ae9POqFOkrPSPKwTNJqP2jzF3WrYGDYCI5XeoWITiaUQVYmzApAJBMI5uIE0TNH/oIscxcMXuZOaQUkoRIT2BLIlG7QiBYTqbkWWmrWFhDRP4BpVHSowBVneBvpSb3A5lpgWYwA5i9tKhxwws4vajEnVtbeKunLlle29EA1y6ElvhQBJYubpgOlG32J9f9mp4XsP2atnAXDXtrUTUBGFudSixpxVy5/NHwyF6LIiGRS9KWXSLMjuWqVuQugc1jeVl1IHeT2PJm8th96WWWvSPQoFYLtLDW5bceCZKg5PJtdD3P8J5bUyzMIZ7RFKcMZe7x6Y7eTHb12lu9iXtVjgpYxT3ZfIsC7Xoi8FCrtsBP1oAJ+L+Agw4CxlmgobDYJMKET38knKBQtY5EHtQYyHKAsTASxr/Ae7wMwx9tyrVkIARALYnb4olEG7DNoD7tDDlZFjY9aEisBt4iT0qHUF3+2pIojLa7IGn90kJBVyy4kPakaZLGRmfefWr7UwxL3/NKgMhcky5oW4HgR5oXe5TKP3dqTkdVsdXFr1AMeBjoadaZkNYhKu+KGgIkNiQ2dhafxtC6Fh6Hv42ZYF14q7RAWDYoL/kHakRN2szlb8vDBa699FAZUHI60CNwPx42nYH58uDgOr7/ACahLBkMxMPoB8ix0Td6BOkmu8+RIMJm1qddRxywIRi4B0KV7awOgwfxS2DYMTeOXBy0AZCAsBAeljq1AQGQvKbcTg3q9ZX5uu9TLJnoJj7UsqiIRM3zvaZp5yVLEMXPvajlCdlHKtThywkLepcxoacu1MMiuDOHM03Ahdt6p24aJeWWYMJ+WoIybJd2nen6IElcGfuFWEM5ZlmhMpULyl/uVtFMb6n2PkWmpf7CgVAy0whLe5qL9VDbsLBxRJby80iLL4c3LPvWLNIpAStikMsDNwPu8gEAlWOtIJixovuCkJmCOgnySoEISHIx42rYD5tHsfKdERFrLnhu4o3VqV0ZX6SRO3ShCV4HOXS1/CdbBBMChuWNyNmaGZu0CIBoAB9AFYBVwGtTf0QtH0w35aFwUR2tjZqGNASWDgqSIkKPpPxV5pSd1MnZpUxa5kRD7UoQsGIQP9tAKMxHDZ+3pRiwWEz2aNK4BBpPxU1YB4kbx8+lMNK7oxJmihOIi265nXigQujEBmsHqPemLaXA/ZpGI/W5rVwGCJ5XoQ7eJCQ4N2lUrlrluOrwL/BOnhz259vGC0GaH5uQPmac0n340IjZDoQfHklonswZexV+pC6DD2Kt4ezT5ipSIXsW+x7+Bpz28t/aaVm1jwBH4fJ2ngpTyLF0Qo/uT9JBZDEKGRO9JLZOgUC6S058PxqhSxR0lEAWYFQg8kjbAwSxckvQcgtBQo6TDCaJnG8JETvyBBBbXywG2ils52F3aoAUYBK7rut2hrTgunD+aJ9XkfUOtFlSQBeXWN9aWDZYFIdfWrzAm02q1/8Akf5VxsBD296TS4cF/wBzSRViWeKx3Hmk1AiGWFY5jjakEyDBChugyShE1cr8KLFCglhiKvIpKZh8AjvSJT1oU+NodLvWgVgy04QYt760CAy2pjA2Fc0Nc0Y8gWyE9wfkoAU9PPtlK0lVd5Z8hIl2OiQPdpSstxO7QqEgXHZoipmmwPsPAg1oruPnoqZUq67vkOGCnAu9Ad6Xi4mqS/T97oc+H9Yn1rZRuQxOhirRYqUsF4FHtR2uJsxFJwHoNaHTKineMDyeSE8XIfsZ7VF8W5ISvuvaKAJAZGrVI2LTp3L0cmFISUtHvTbljE9YD5pSu5ug22ApnSMa3ttQYgfr1pEIkLndoWFpDEZOn4qRmDLKWY2SrjJsLpE+9Kos7lcluzv+tFssR2bUlxuILO9zHNIgFLgvPvU8EYtQUFJUIf0HfxIJ4M99KVVXLVqmme+nh2hbrQDzYFFbgMswFIYGZcbKgTUtmjxnpoD5N7gN5UlFF6K8tQIBsR5NgrPN728Y3rAmwPkqEsISyc1srnD5UPKM6Wumv4FfUIUERUJrRJchNxpAKktuc1ytmvpoBcScAN6ecXy72Ws6N7VPfpWIysZZbNgpSISqqyrr5EXb0xg4+rZ3qbgFsP1pHpQAYwk6TQVgAUS5eobmgwYTSlCE+GD0mlQANka/eowmQXh66vFJvGSxyb3q5SC5i96UM262pgBZWE0pgTKanWskUSALcOSz8FRqxCECD01odCIqvLW1WC1atfcppDKJm6j2Hr48hufbw5Bc+3hyK59qL7kYRBQCJBCaFsykMFHZaOc0hQZFT18jGTAjsn4KjNAx1D4HlbDCXr+T8+Mntork/C0QZDPSHzWxRvrD2HkloIDdbBQ2E5GEkrv6T6aBgJkARks2ejatLa+1KFFxYBNjFk7xVhQ8L5wpycRNWFZSShkW4ZvLfmigAjliKzwuPu0hF8ul4CzBqFdaEcOISLgWEWd7vGRuBhw37BNGsCX0HuDLytAi5S67d9K37R9mpMIgysNHYy4tcYvQEKIwMUAak3/TTcAhy6fjpVtu5tLvvUzxBhbcTvSkqDJKKIQDBM9G1NALGdeT4TEDBIbmp8NEROlWySxLSorlholbHos9GsjDfsvjw5oa2I0qBGrFTIwWKCQGtqYsMFihAeaAqlQhsypAhMqyvkldhN3JPcqPSDqkq93lbSSnbPbxl1hHof2VLSHxr/YKbMXibD8h8gSCczEr3oHek7V7dUl+f4D2GkMAtmDmxV/QTZ0ALmwaUQYxCWgawLB45EZJGE/TiiYQXvp9ykVplQ5jb4pFxKccxTkLCXAFMhoRb9D70yq2UBPSKIhUK4I7K0GRBGQpmb7UHEQs5R9qGSb8zvSquUYCmyDohY6UStGZ2bUmxhtnFBfXiX0T4pSQEnLuw0Ge3WCUV7dUjpSZhG2kPz7qVJJV158OhyDv4Wv+p4egPgEyYL0squt/KrSGS6JNN8M9WFnz5JCTMVC2iM2UV8njlbQdS9JqSvxfyFNXKd3kfv5NtMjhfA+v8WZ4LLpX9D3ihGhkmAAcQB702JCTljEdfiiNMmu6aMUQMv3emFNnmmEWawYL5d6hpFSf0T+KXjuxCg9qC9y7SGx7Vm8b8L/o0BkGZxeih0IhSOkcJWLYmhEIRM7aP7zQlgBs6UoRhmB0RUTXmCBm+ZpY5ZBguY60TcTwkj3jx2b4+D9DbwsfceCzgR6+ZJIrXSpLea9/IgufXwUR/wAK8gdO4F1JJfRoIA28lpWXzvuL6/xWNCiiZJbuHagJhioiexplqAhEji3qffk2fUOKRzhlke0ulGYBLKWDn7UQahhcyxDf0qaSPlo/xPCbRzdKkpM4bWle5akyCa8VOE7Lh2tVwxMYVYLBvlif3FFIgEmDdqYcu8y7XO1EWlMOKAHNFauOZoUDDkzABv39XjYdgPCzYS9fCwN58GB+keb/2Q==";var Co=class extends bi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new cn;t.deleteAttribute("uv");let e=new Be({side:Ve}),n=new Be,s=new $s(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ie(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new In(t,n,6),o=new Ie;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ie(t,gs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ie(t,gs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ie(t,gs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new ie(t,gs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new ie(t,gs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new ie(t,gs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function gs(i){return new Zs({color:0,emissive:16777215,emissiveIntensity:i})}var mr=new I;function fn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;mr.copy(t),mr[n]=0,mr.normalize();let l=.5*a/(a+o),h=1-mr.angleTo(i)/c;return Math.sign(mr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Ro=class i extends cn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,x=f.length/6,A=new I,m=.5/a;for(let p=0,w=0;p<f.length;p+=3,w+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=h.x*Math.sign(c.x)+l.x*r,f[p+1]=h.y*Math.sign(c.y)+l.y*r,f[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/x)){case 0:A.set(1,0,0),d[w+0]=fn(A,l,"z","y",r,n),d[w+1]=1-fn(A,l,"y","z",r,e);break;case 1:A.set(-1,0,0),d[w+0]=1-fn(A,l,"z","y",r,n),d[w+1]=1-fn(A,l,"y","z",r,e);break;case 2:A.set(0,1,0),d[w+0]=1-fn(A,l,"x","z",r,t),d[w+1]=fn(A,l,"z","x",r,n);break;case 3:A.set(0,-1,0),d[w+0]=1-fn(A,l,"x","z",r,t),d[w+1]=1-fn(A,l,"z","x",r,n);break;case 4:A.set(0,0,1),d[w+0]=1-fn(A,l,"x","y",r,t),d[w+1]=1-fn(A,l,"y","x",r,e);break;case 5:A.set(0,0,-1),d[w+0]=fn(A,l,"x","y",r,t),d[w+1]=1-fn(A,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function hc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ce,l=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let x=0;x<d.count;++x)f.push(d.getX(x)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(let h in r){let f=nu(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let A=0;A<a[h].length;++A)d.push(a[h][A][u]);let x=nu(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}}return c}function nu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new We(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/e;for(let u=0,d=h.count;u<d;u++)for(let x=0;x<e;x++){let A=h.getComponent(u,x);o.setComponent(u+f,x,A)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Ye=Math.PI*2,Io=new I(0,1,0),fi=.34,Ue=(i,t,e)=>i+(t-i)*e,Yn=i=>i<0?0:i>1?1:i,di=i=>i*i*(3-2*i),G0=i=>i*i*i*(i*(i*6-15)+10),Et=(i,t,e)=>new I(i,t,e),pi=(i,t=0)=>{let e=new Ee().setFromUnitVectors(Io,i.clone().normalize());return t?e.multiply(new Ee().setFromAxisAngle(Io,t)):e};function Po(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var gr=(i,t)=>Math.atan2(Math.sin(i-t),Math.cos(i-t)),xs=(i,t)=>Math.exp(-(i/t)*(i/t));function vs({segs:i,rings:t,husk:e=!1,thetaStart:n=0,thetaLen:s=Ye,seed:r=1}){let a=e?.535:.5,o=e?.106:.091,c=r*1.7,l=i+1,h=new Float32Array((t+1)*l*3),f=new Float32Array((t+1)*l*2),u=new Float32Array((t+1)*l),d=0,x=0,A=0;for(let b=0;b<=t;b++){let _=Math.sin((b/t-.5)*Math.PI),C=Math.abs(_),M;e?M=o*Math.pow(Math.max(0,1-Math.pow(C,2.1)),.7):(M=_>0?o*Math.pow(Math.max(0,1-Math.pow(C,2.7)),.66):o*Math.pow(Math.max(0,1-Math.pow(C,3.1)),.56),M*=1+.03*Math.sin(_*2.4+c)+.012*Math.sin(_*7.3+c*2));for(let R=0;R<=i;R++){let v=n+s*R/i,E=e?v:v+.1*_,P=M;if(e)P*=.985+.05*Math.pow(Math.abs(Math.cos(E*2.5)),14),P*=1+.05*xs(gr(E,0),.22);else{let B=di(Yn((-.7-_)/.26));P*=1-.5*B*Math.pow(Math.max(0,Math.cos(E-.35)),1.3),P*=1-.12*xs(_+.86,.06)*xs(gr(E,.35),.35),P*=1-.06*xs(gr(E,Math.PI/2),.1)-.04*xs(gr(E,-Math.PI/2),.12);let q=1-Math.pow(C,6);for(let K of[.62,-.62,2.52,-2.52])P*=1-.04*q*xs(gr(E,K+.05*Math.sin(_*3+c)),.07);P*=1+.012*Math.sin(E*3+_*5+c)*Math.cos(_*1.3)}let L=.024*(1-_*_)+.006*Math.sin(_*3+c);h[d++]=P*Math.cos(E)+L,h[d++]=_*a,h[d++]=P*Math.sin(E)*(e?.84:.76),f[x++]=R/i,f[x++]=(_+1)/2,u[A++]=Yn(P/o)}}let m=[];for(let b=0;b<t;b++)for(let _=0;_<i;_++){let C=b*l+_,M=C+l;m.push(C,M,C+1,M,M+1,C+1)}let p=new Ce;p.setIndex(m),p.setAttribute("position",new ce(h,3)),p.setAttribute("uv",new ce(f,2)),p.setAttribute("aThick",new ce(u,1)),p.computeVertexNormals();let w=p.attributes.normal.array;if(s>=Ye-1e-6)for(let b=0;b<=t;b++){let _=b*l*3,C=(b*l+i)*3;for(let M=0;M<3;M++){let R=(w[_+M]+w[C+M])/2;w[_+M]=w[C+M]=R}}for(let b=0;b<=i;b++)w.set([0,-1,0],b*3),w.set([0,1,0],(t*l+b)*3);return p.attributes.normal.needsUpdate=!0,p}function iu(i,t,e){let n=new _t(t),s=`vec3(${n.r.toFixed(3)}, ${n.g.toFixed(3)}, ${n.b.toFixed(3)})`;return i.customProgramCacheKey=()=>"sss-"+t+e,i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aThick;
varying float vThick;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vThick = aThick;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vThick;`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      {
        vec3 V = normalize(vViewPosition);
        float thin = clamp(1.0 - vThick, 0.0, 1.0);
        vec3 sss = vec3(0.0);
        #if NUM_DIR_LIGHTS > 0
        for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
          vec3 Ld = directionalLights[i].direction;
          float back = pow(clamp(dot(V, -normalize(Ld + normal * 0.5)), 0.0, 1.0), 3.0);
          float ndl = dot(normal, Ld);
          float wrap = clamp((ndl + 0.55) / 1.55, 0.0, 1.0) - clamp(ndl, 0.0, 1.0);
          sss += directionalLights[i].color * (back * (0.35 + 1.7 * thin) + wrap * 0.7);
        }
        #endif
        float fres = pow(1.0 - clamp(dot(V, normal), 0.0, 1.0), 2.2);
        reflectedLight.directDiffuse += sss * ${s} * diffuseColor.rgb * ${e.toFixed(3)};
        reflectedLight.indirectDiffuse += ${s} * fres * (0.25 + 0.5 * thin) * ${e.toFixed(3)};
      }`)},i}function uc(i,t,e=48){let n=[],s=[],r=[],a=new I,o=Et(0,0,1);for(let l=0;l<=e;l++){let h=l/e,f=i.getPointAt(h),u=i.getTangentAt(h);a.crossVectors(u,o).normalize();let d=t*Math.pow(Math.sin(Math.PI*Math.min(1,h*1.15+.02)),.55)*(1-.55*h);if(n.push(f.x-a.x*d,f.y-a.y*d,f.z-a.z*d,f.x+a.x*d,f.y+a.y*d,f.z+a.z*d),r.push(0,h,1,h),l<e){let x=l*2;s.push(x,x+2,x+1,x+1,x+2,x+3)}}let c=new Ce;return c.setIndex(s),c.setAttribute("position",new ce(n,3)),c.setAttribute("uv",new ce(r,2)),c.computeVertexNormals(),c}function H0(i,t,e){let n=new Xn([Et(-.06,-8,0),Et(0,-3.2,.05),Et(.1,-.8,.1),Et(.38,.85,.12),Et(.92,1.72,.07),Et(1.5,1.78,0),Et(1.92,1.25,-.06),Et(2.08,.55,-.1)],!1,"centripetal"),s=[],r=[];for(let c=0;c<t;c++){let l=c/(t-1),h=Ue(.47,.955,l),f=n.getPointAt(h),u=n.getTangentAt(h),d=Math.abs(u.y)>.9?Et(1,0,0):Io,x=new I().crossVectors(u,d).normalize(),A=new I().crossVectors(u,x).normalize(),m=c*2.39996+i()*.5,p=x.clone().multiplyScalar(Math.cos(m)).addScaledVector(A,Math.sin(m)),w=Ue(1.2,.45,l)*(.85+i()*.3),b=u.clone().multiplyScalar(.6).addScaledVector(p,.8).normalize(),_=f.clone().addScaledVector(b,w);_.y-=.24*w;let C=f.clone().addScaledVector(b,w*.55);C.y-=.02;let M=new Ti(f,C,_);r.push(M);let R=Math.max(3,Math.round(e*(.55+w*.6)));for(let v=0;v<R;v++){let E=Ue(.3,1,R===1?1:v/(R-1)),P=M.getPointAt(E),L=M.getTangentAt(E),B=new I().crossVectors(L,p);B.lengthSq()<1e-4&&(B=x.clone()),B.normalize();let q=L.clone().addScaledVector(B,(v%2?1:-1)*.45).addScaledVector(p,.2).normalize();s.push({p:P.clone().addScaledVector(q,fi*.48),q:pi(q,i()*Ye)})}}let a=n.getTangentAt(1),o={p:n.getPointAt(1).addScaledVector(a,fi*.5),q:pi(a,.6)};return{rachis:n,curves:r,slots:s,tip:o}}function Ii(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new ns(s);return r.wrapS=r.wrapT=Si,n&&(r.colorSpace=He),r.anisotropy=4,r}function W0(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=document.createElement("canvas");r.width=e,r.height=n;let a=r.getContext("2d"),o=a.createImageData(e,n),c=o.data,l=(f,u)=>s[((u+n)%n*e+(f+e)%e)*4]/255;for(let f=0;f<n;f++)for(let u=0;u<e;u++){let d=(l(u+1,f)-l(u-1,f))*t,x=(l(u,f+1)-l(u,f-1))*t,A=Math.hypot(d,x,1),m=(f*e+u)*4;c[m]=(-d/A*.5+.5)*255,c[m+1]=(x/A*.5+.5)*255,c[m+2]=(1/A*.5+.5)*255,c[m+3]=255}a.putImageData(o,0,0);let h=new ns(r);return h.wrapS=h.wrapT=Si,h.anisotropy=4,h}function X0(){let i=Po(3),t=512,e=1024,n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");s.fillStyle="#808080",s.fillRect(0,0,t,e);for(let c=0;c<260;c++){let l=i()*t,h=.05+i()*.13,f=.8+i()*2.6,u=2+i()*5;s.strokeStyle=i()<.5?`rgba(255,255,255,${h})`:`rgba(0,0,0,${h})`,s.lineWidth=.6+i()*2.4,s.beginPath();for(let d=0;d<=e;d+=10){let x=l+Math.sin(d/e*u*Ye+c)*f;d?s.lineTo(x,d):s.moveTo(x,d)}s.stroke()}for(let c of[.1,.4,.6,.9]){let l=s.createLinearGradient(c*t-10,0,c*t+10,0);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(.5,"rgba(0,0,0,.16)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.fillRect(c*t-10,e*.08,20,e*.84)}for(let c=0;c<22;c++){s.strokeStyle=`rgba(0,0,0,${.08+i()*.12})`,s.lineWidth=.8;let l=e*(.12+i()*.76),h=i()*t;s.beginPath(),s.moveTo(h,l),s.quadraticCurveTo(h+16,l+(i()-.5)*8,h+30+i()*60,l+(i()-.5)*6),s.stroke()}for(let c=0;c<2200;c++)s.fillStyle=`rgba(0,0,0,${.04+i()*.12})`,s.beginPath(),s.arc(i()*t,i()*e,.4+i()*1.1,0,Ye),s.fill();let r=s.createRadialGradient(t*.42,e*.035,1,t*.42,e*.035,34);r.addColorStop(0,"rgba(0,0,0,.35)"),r.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=r,s.fillRect(0,0,t,90);let a=W0(n,4.2),o=Ii(t,e,(c,l,h)=>{c.fillStyle="#ECE3CF",c.fillRect(0,0,l,h);let f=c.createRadialGradient(l*.5,h*.52,6,l*.5,h*.52,h*.3);f.addColorStop(0,"rgba(255,253,247,.62)"),f.addColorStop(1,"rgba(255,253,247,0)"),c.save(),c.scale(1,1.6),c.fillStyle=f,c.fillRect(0,0,l,h),c.restore();let u=c.createRadialGradient(l*.3,h*.44,4,l*.3,h*.44,l*.22);u.addColorStop(0,"rgba(255,255,252,.42)"),u.addColorStop(1,"rgba(255,255,252,0)"),c.fillStyle=u,c.fillRect(0,0,l,h);let d=c.createLinearGradient(0,0,0,h);d.addColorStop(0,"rgba(196,170,120,.72)"),d.addColorStop(.1,"rgba(214,194,150,.26)"),d.addColorStop(.24,"rgba(230,214,180,0)"),d.addColorStop(.8,"rgba(230,214,180,0)"),d.addColorStop(.93,"rgba(214,194,150,.3)"),d.addColorStop(1,"rgba(190,162,112,.75)"),c.fillStyle=d,c.fillRect(0,0,l,h);for(let A=0;A<160;A++)c.fillStyle=`rgba(176,150,104,${.04+i()*.08})`,c.fillRect(i()*l,i()*h*.3,.8+i()*1.8,h*(.3+i()*.6));for(let A=0;A<26;A++)c.fillStyle=`rgba(150,118,72,${.08+i()*.12})`,c.fillRect(i()*l,h*(.02+i()*.1),.8+i()*1.4,h*(.03+i()*.08));let x=c.createRadialGradient(l*.42,h*.035,2,l*.42,h*.035,30);x.addColorStop(0,"rgba(140,108,62,.75)"),x.addColorStop(1,"rgba(140,108,62,0)"),c.fillStyle=x,c.fillRect(0,0,l,80);for(let A=0;A<50;A++)c.fillStyle=`rgba(120,96,60,${.06+i()*.12})`,c.beginPath(),c.arc(i()*l,i()*h,.6+i()*1.1,0,Ye),c.fill()},!0);return{normal:a,map:o}}function q0(){let i=Po(11),t=Ii(128,256,(n,s,r)=>{n.fillStyle="#7a7a7a",n.fillRect(0,0,s,r);for(let a=0;a<r;a+=5)for(let o=0;o<s;o+=4)n.fillStyle=`rgba(255,255,255,${.18+i()*.2})`,n.beginPath(),n.arc(o+a/5%2*2,a+2,1.3,0,Ye),n.fill();for(let a=0;a<5;a++)n.fillStyle="rgba(255,255,255,.55)",n.fillRect(a/5*s,0,3,r)}),e=Ii(128,256,(n,s,r)=>{n.fillStyle="#f2f2f2",n.fillRect(0,0,s,r);for(let o=0;o<5;o++)n.fillStyle="rgba(120,90,50,.28)",n.fillRect(o/5*s+1,0,2,r);for(let o=0;o<260;o++)n.fillStyle=`rgba(${i()<.5?"90,70,40":"255,255,255"},${.05+i()*.08})`,n.fillRect(i()*s,i()*r,1+i()*2,2+i()*8);let a=n.createLinearGradient(0,0,0,r);a.addColorStop(0,"rgba(110,80,45,.22)"),a.addColorStop(.12,"rgba(110,80,45,0)"),a.addColorStop(.9,"rgba(110,80,45,0)"),a.addColorStop(1,"rgba(110,80,45,.25)"),n.fillStyle=a,n.fillRect(0,0,s,r)},!0);return{bump:t,map:e}}function dc(){return Ii(64,64,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)})}function Y0(){return new Promise(i=>{let t=new Image;t.onload=()=>i(Ii(t.naturalWidth,t.naturalHeight,(e,n,s)=>e.drawImage(t,0,0,n,s),!0)),t.onerror=()=>i(Ii(4,4,(e,n,s)=>{e.fillStyle="#F9F6EE",e.fillRect(0,0,n,s)},!0)),t.src=eu})}var K0=()=>new Xe({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uOpacity:{value:0},uDeep:{value:new _t("#7E8F6B")},uShallow:{value:new _t("#C9CFB4")},uSky:{value:new _t("#FFF6E2")}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform float uTime, uOpacity; uniform vec3 uDeep, uShallow, uSky; varying vec2 vUv;
    float ring(vec2 p, vec2 c, float f, float s, float d){ float r = length(p - c); return sin(r * f - uTime * s) * exp(-r * d); }
    void main(){
      vec2 p = vUv * 2.0 - 1.0; float r = length(p);
      float h = ring(p, vec2(-0.2, 0.0), 42.0, 1.4, 3.0) + 0.7 * ring(p, vec2(0.45, 0.3), 34.0, 1.1, 3.6) + 0.5 * ring(p, vec2(-0.5, -0.4), 50.0, 1.7, 4.2);
      float sheen = smoothstep(0.35, 1.0, h * 0.5 + 0.5);
      vec3 col = mix(uDeep, uShallow, smoothstep(1.0, 0.0, r));
      col = mix(col, uSky, sheen * 0.45 + smoothstep(0.2, -0.8, p.y) * 0.18);
      float a = smoothstep(1.0, 0.45, r) * uOpacity;
      gl_FragColor = vec4(col, a * 0.92);
      #include <colorspace_fragment>
    }`}),Z0=i=>new Xe({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uSize:{value:26},uOpacity:{value:.5},uColor:{value:new _t("#FFF4DC")},uMap:{value:i},uBox:{value:new I(9,7,6)}},vertexShader:`
    attribute float aSeed; uniform float uTime, uSize; uniform vec3 uBox; varying float vA;
    void main(){
      vec3 p = position;
      p.y = mod(p.y + uTime * (0.05 + 0.08 * aSeed) + uBox.y * 0.5, uBox.y) - uBox.y * 0.5;
      p.x += sin(uTime * 0.27 + aSeed * 6.283) * 0.18;
      p.z += cos(uTime * 0.21 + aSeed * 4.0) * 0.12;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position = projectionMatrix * mv;
      gl_PointSize = uSize * (0.35 + aSeed) / -mv.z;
      vA = 0.35 + 0.65 * fract(aSeed * 7.31);
    }`,fragmentShader:`
    uniform float uOpacity; uniform vec3 uColor; uniform sampler2D uMap; varying float vA;
    void main(){ float a = texture2D(uMap, gl_PointCoord).r * uOpacity * vA; if (a < 0.003) discard; gl_FragColor = vec4(uColor, a);
      #include <colorspace_fragment>
    }`}),Qt={x:6.2,y:-3.2,z:.2,rim:2.3,fill:2.16,depth:1.25},Lo=i=>Qt.y+1.25+.5*(1-(i/Qt.fill)**2),ru="#F9F6EE",su="#EEEBDF",J0="#0F3D2E",ys="#E9E3D4";function Q0(i){let t=i.tip,e=(c,l,h=0)=>({p:c,q:pi(l,h)}),n=(c,l,h,f)=>{let u=Et(Math.cos(l),0,-Math.sin(l));return e(c,Io.clone().multiplyScalar(Math.cos(h)).addScaledVector(u,Math.sin(h)),f)},s=Et(Qt.x-.15,Lo(.2)+.03,Qt.z+.35),r={tip:t,studio:n(t.p.clone(),.35,-.42,1.25),fall:{p:t.p.clone().add(Et(-.35,-1.95,.45)),q:t.q.clone().multiply(new Ee().setFromAxisAngle(Et(1,0,0),1.25))},heap:e(Et(.98,-2.16,.22),Et(1,.12,.35),.4),mill:e(Et(.95,-1.9,.95),Et(1,.32,.12),1.1),pack:e(Et(.95,-.42,-.12),Et(.2,1,.08),.3),kitchen:e(s,Et(1,.07,.62),2.2)},a={target:t.p,yaw:0,pitch:.1,frame:[3,3],hero:"tip",husk:0,huskVis:1,ripe:.5,milled:0,layout:"panicle",stem:1,leaves:1,bgP:1,water:0,pack:0,packAt:0,floor:0,bowl:0,motes:.45,gold:0,spin:0,opacity:1,key:2.6,keyColor:"#FFF1DA",rim:1.2,rimColor:"#FFE2B0",hemi:.55,env:.75,exposure:1,fog:ru},o=c=>Object.assign({},a,c);return{poses:r,hero:o({hero:"studio",target:t.p,yaw:.35,pitch:.06,frame:[.4,.4],husk:1,huskVis:0,ripe:.45,milled:1,layout:"seed",stem:0,leaves:0,bgP:0,motes:.55,spin:1,key:4.2,keyColor:"#FFF3E0",rim:3.4,rimColor:"#FFC98A",hemi:.14,env:.32,exposure:1.02}),farmers:o({target:Et(1,.85,0),yaw:.18,pitch:.05,frame:[3,3.1],ripe:.32}),practicesA:o({target:Et(.75,-.05,.1),yaw:-.3,pitch:.22,frame:[3.7,4.3],ripe:.38,water:1,fog:su,motes:.35}),practicesB:o({target:Et(.85,.1,.1),yaw:.4,pitch:.17,frame:[3.5,4.1],ripe:.92,water:1,fog:su,motes:.4}),why:o({target:Et(1.05,.9,0),yaw:-.55,pitch:.03,frame:[2.8,3.1],ripe:1,fog:J0,motes:.9,gold:1,key:1.1,keyColor:"#FFD8A8",rim:3.4,rimColor:"#FFC27A",hemi:.22,env:.35,exposure:.95}),journey0:o({target:Et(1.05,.8,0),yaw:.12,pitch:.08,frame:[3,3.3],ripe:1,fog:ys}),journey1:o({target:Et(1.1,-.75,.15),yaw:.22,pitch:.1,frame:[3.3,4.4],ripe:1,hero:"fall",layout:"fall",stem:.3,leaves:.15,bgP:0,fog:ys,floor:.3}),journey2:o({target:Et(.95,-2.35,.1),yaw:.3,pitch:.42,frame:[2.9,2.1],ripe:1,hero:"heap",layout:"heap",stem:0,leaves:0,bgP:0,fog:ys,floor:1,motes:.25}),journey3:o({target:Et(.95,-2.35,.2),yaw:-.12,pitch:.36,frame:[2.5,2],ripe:1,hero:"mill",husk:1,huskVis:.6,milled:1,layout:"graded",stem:0,leaves:0,bgP:0,fog:ys,floor:1,motes:.25}),journey4:o({target:Et(.95,-1.5,0),yaw:.28,pitch:.12,frame:[2.6,3.4],ripe:1,hero:"pack",husk:1,huskVis:0,milled:1,layout:"packed",stem:0,leaves:0,bgP:0,pack:1,fog:ys,floor:1,motes:.25}),journey5:o({target:Et(Qt.x-1.25,Qt.y+1.9,Qt.z-.5),yaw:-.18,pitch:.3,frame:[7.6,5.4],ripe:1,hero:"kitchen",husk:1,huskVis:0,milled:1,layout:"bowl",stem:0,leaves:0,bgP:0,pack:1,packAt:1,bowl:1,fog:ys,motes:.3,key:3,rim:2.2}),closing:o({target:Et(Qt.x-1,Qt.y+2.4,Qt.z-.4),yaw:.28,pitch:.18,frame:[7.8,6.3],ripe:1,hero:"kitchen",husk:1,huskVis:0,milled:1,layout:"bowl",stem:0,leaves:0,bgP:0,pack:1,packAt:1,bowl:1,motes:.35,key:3.2,keyColor:"#FFF3E0",rim:2.6,rimColor:"#FFC98A",hemi:.4,env:.6}),end:o({target:Et(Qt.x-1,Qt.y+2.4,Qt.z-.4),yaw:.4,pitch:.18,frame:[8.6,6.9],ripe:1,hero:"kitchen",husk:1,huskVis:0,milled:1,layout:"bowl",stem:0,leaves:0,bgP:0,pack:1,packAt:1,bowl:1,motes:.3,opacity:0,key:3.2,keyColor:"#FFF3E0",rim:2.6,rimColor:"#FFC98A",hemi:.4,env:.6})}}function j0(i,t,e){let n={},s=()=>({p:new Float32Array(t*3),q:new Float32Array(t*4),s:new Float32Array(t)}),r=(l,h,f,u,d)=>{f.toArray(l.p,h*3),u.toArray(l.q,h*4),l.s[h]=d},a=()=>new Ee().setFromAxisAngle(Et(e()-.5,e()-.5,e()-.5).normalize(),e()*Ye);n.panicle=s(),n.seed=s(),n.fall=s(),n.heap=s(),n.graded=s(),n.packed=s(),n.bowl=s();let o=7,c=Et(.95,-.82,-.22);for(let l=0;l<t;l++){let h=i.slots[l];r(n.panicle,l,h.p,h.q,.97),r(n.seed,l,h.p,h.q,0),r(n.fall,l,h.p.clone().add(Et((e()-.5)*1.3,-1.4-e()*2.4,(e()-.5)*1.3)),a(),.97);let f=.72*Math.pow(e(),.6),u=e()*Ye,d=.46*Math.pow(1-f/.72,1.3)+e()*.05;r(n.heap,l,Et(.95+Math.cos(u)*f,-2.6+d,.05+Math.sin(u)*f*.85),pi(Et(Math.cos(u+1.3),(e()-.5)*.5,Math.sin(u+1.3)),e()*Ye),.95);let x=l%o,A=Math.floor(l/o);r(n.graded,l,Et(.95+(x-(o-1)/2)*.17,-2.6,1.3-A*.39-x%2*.19),pi(Et((e()-.5)*.03,0,-1),Math.PI/2+(e()-.5)*.2),.95),r(n.packed,l,c,pi(Et(.1,1,0)),0);let m=Qt.fill*.85*Math.sqrt(e()),p=e()*Ye;r(n.bowl,l,Et(Qt.x+Math.cos(p)*m,Lo(m)+.035+e()*.02,Qt.z+Math.sin(p)*m),pi(Et(Math.cos(p*3+l),(e()-.5)*.25,Math.sin(p*3+l)),e()*Ye),.95)}return n.packed.arc=1,n}function Ay({canvas:i,story:t,onReady:e,onFail:n}){let s;try{s=new To({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(N){n&&n(N.message);return}let r=t.content,a=matchMedia("(pointer: coarse)").matches,c=Math.min(innerWidth,innerHeight)<700||(navigator.hardwareConcurrency||8)<=4,h=Math.min(devicePixelRatio||1,c?1.5:2);s.setPixelRatio(h),s.setClearColor(0,0),s.outputColorSpace=He,s.toneMapping=er;let f=!0,u=new bi,d=new Oe(30,1,.05,80),x=new ps(s),A=x.fromScene(new Co,.04);u.environment=A.texture,x.dispose(),u.fog=new zs(new _t(ru),10,30);let m=new Qs(16775142,7241557,.55),p=new ls(16773594,2.6);p.position.set(-3.5,5,6);let w=new ls(16769712,1.2);w.position.set(5,2.5,-4),u.add(m,p,w,p.target,w.target);let b=Po(2024),_=H0(b,c?10:13,c?5:6),C=_.slots.length,M=j0(_,C,b),R=Q0(_),v=Float32Array.from({length:C},()=>b()),E=q0(),P=X0(),L=iu(new wi({color:16777215,map:P.map,normalMap:P.normal,normalScale:new Mt(1.15,1.15),roughness:.34,specularIntensity:.7,clearcoat:.3,clearcoatRoughness:.16,sheen:.18,sheenColor:new _t(16774110),sheenRoughness:.5}),"#FFDDB0",.6),B=iu(new Be({color:16777215,map:P.map,normalMap:P.normal,normalScale:new Mt(.45,.45),roughness:.42}),"#FFDDB0",.45),q=new _t,K=new wi({color:13211727,roughness:.62,map:E.map,bumpMap:E.bump,bumpScale:1.4,sheen:.6,sheenColor:new _t(16770744),sheenRoughness:.6,side:Ze,transparent:!0}),V=new Be({color:13211727,roughness:.6,map:E.map,bumpMap:E.bump,bumpScale:1}),Y=new Be({color:8032072,roughness:.7,transparent:!0}),H=new Be({color:7309893,roughness:.55,side:Ze,transparent:!0}),j=new Be({color:11903066,roughness:.7,transparent:!0,map:E.map}),tt=new Be({color:9345621,roughness:.7,transparent:!0}),pt=c?{segs:64,rings:80}:{segs:128,rings:160},dt=new je,At=new ie(vs(pt),L);dt.add(At);let Zt=[0,1].map(N=>{let it=new je;it.position.y=-.535;let st=new ie(vs({...pt,husk:!0,thetaStart:N?Math.PI:0,thetaLen:Math.PI}),K);return st.position.y=.535,it.add(st),dt.add(it),it});dt.scale.setScalar(fi),u.add(dt);let fe=hc([new rs(_.rachis,160,.024,7,!1),..._.curves.map(N=>new rs(N,20,.009,5,!1))]),te=new ie(fe,Y),Q=hc([uc(new Xn([Et(0,-2.7,.05),Et(-.45,-1.4,.3),Et(-.95,0,.42),Et(-1.2,.9,.3),Et(-1.05,1.45,.2)]),.13),uc(new Xn([Et(.02,-3.7,0),Et(.6,-2.6,.4),Et(1.3,-1.75,.62),Et(1.9,-1.45,.55),Et(2.3,-1.6,.45)]),.12),uc(new Xn([Et(-.03,-4.6,0),Et(-.7,-3.4,-.4),Et(-1.5,-2.6,-.5),Et(-2.1,-2.5,-.3)]),.12)]),ot=new ie(Q,H),nt=vs({segs:c?12:16,rings:c?14:20,husk:!0}),Pt=new In(nt,V,C),Ot=new In(vs({segs:c?12:16,rings:c?18:26,seed:3}),B,C),Lt=new _t;for(let N=0;N<C;N++){let it=.9+b()*.18;Pt.setColorAt(N,Lt.setRGB(it,it*(.96+b()*.06),it*(.9+b()*.12)));let st=.95+b()*.07;Ot.setColorAt(N,Lt.setRGB(st,st,st*(.97+b()*.04)))}for(let N of[Pt,Ot])N.instanceMatrix.setUsage(Fl),N.frustumCulled=!1;u.add(te,ot,Pt,Ot);let pe=new je,Jt=vs({segs:8,rings:10,husk:!0});[[-2.4,-.5,-3.4,.9,1],[4.1,-.9,-4.6,-.6,1.05],[-.6,-.3,-7.2,2.2,1.1]].forEach(([N,it,st,zt,Rt])=>{let Yt=new je;Yt.add(new ie(fe,tt));let Nt=new In(Jt,j,C),Vt=new re,Gt=Et(fi,fi,fi);_.slots.forEach((ve,ne)=>Nt.setMatrixAt(ne,Vt.compose(ve.p,ve.q,Gt))),Yt.add(Nt),Yt.position.set(N,it,st),Yt.rotation.y=zt,Yt.scale.setScalar(Rt),pe.add(Yt)}),u.add(pe);let se=new ie(new Ys(2.6,72),K0());se.rotation.x=-Math.PI/2,se.position.set(.45,-1.7,.2),u.add(se);let jt=new ie(new ii(4.2,3.2),new ni({map:dc(),color:7033908,transparent:!0,depthWrite:!1,opacity:0}));jt.rotation.x=-Math.PI/2,jt.position.set(.95,-2.66,.05),u.add(jt);let Xt=new je,Ae=new is([[0,.07],[.9,.1],[1.6,.32],[2.08,.75],[2.27,1.2],[2.31,1.27],[2.38,1.22],[2.25,.8],[1.85,.32],[1.2,.06],[1.08,0],[.95,-.02],[0,-.02]].map(([N,it])=>new Mt(N,it))).getPoints(90),_e=new wi({color:998702,roughness:.32,clearcoat:.8,clearcoatRoughness:.12,side:Ze,transparent:!0}),Se=new ss(Ae,c?64:110);Se.scale(1,Qt.depth,1),Xt.add(new ie(Se,_e));let be=[];for(let N=0;N<=24;N++){let it=N/24*(Qt.fill+.06);be.push(new Mt(it,Lo(Math.min(it,Qt.fill))-Qt.y-.07-(it>Qt.fill?.12:0)))}let de=new ss(be,c?48:80);{let N=de.attributes.position,it=de.attributes.uv;for(let st=0;st<N.count;st++)it.setXY(st,N.getX(st)/Qt.fill*1.6,N.getZ(st)/Qt.fill*1.6)}let Me=Ii(512,512,(N,it,st)=>{let zt=Po(21);N.fillStyle="#B9AD93",N.fillRect(0,0,it,st);for(let Rt=0;Rt<2600;Rt++){let Yt=zt()*it,Nt=zt()*st,Vt=zt()*Math.PI,Gt=9+zt()*4;N.save(),N.translate(Yt,Nt),N.rotate(Vt),N.fillStyle="rgba(90,78,58,.35)",N.beginPath(),N.ellipse(1,1.2,Gt,1.9,0,0,Ye),N.fill();let ve=205+zt()*45;N.fillStyle=`rgb(${ve},${ve-6},${ve-22})`,N.beginPath(),N.ellipse(0,0,Gt,1.8,0,0,Ye),N.fill(),N.restore()}},!0),U=new ie(de,new Be({map:Me,roughness:.7,transparent:!0,side:Ze}));U.position.set(Qt.x,Qt.y,Qt.z),Xt.add(U);let Te=c?420:800,ee=new In(vs({segs:8,rings:12,seed:5}),B,Te),T=new Float32Array(Te),g=new Float32Array(Te),F=[],k=[];for(let N=0;N<Te;N++){let it=Qt.fill*Math.sqrt(b()),st=b()*Ye,zt=b()*.02;F.push(Et(Qt.x+Math.cos(st)*it,Lo(it)-zt,Qt.z+Math.sin(st)*it)),k.push(pi(Et(Math.cos(st*5+N),(b()-.5)*.35,Math.sin(st*5+N)),b()*Ye)),g[N]=fi*(.9+b()*.12),T[N]=b();let Rt=.93+b()*.09;ee.setColorAt(N,Lt.setRGB(Rt,Rt*.995,Rt*(.96+b()*.05)))}ee.frustumCulled=!1,Xt.add(ee);let W=new ie(new ii(7,7),new ni({map:dc(),color:7033908,transparent:!0,depthWrite:!1,opacity:0}));W.rotation.x=-Math.PI/2,W.position.set(Qt.x,Qt.y-.03,Qt.z),u.add(W),Xt.children[0].position.set(Qt.x,Qt.y,Qt.z),u.add(Xt);let et=new je,rt=new Be({color:15722971,roughness:.5,metalness:.05,transparent:!0}),X=new Be({color:16777215,roughness:.45,transparent:!0}),J=new ie(new Ro(1.32,2.05,.5,4,.09),[rt,rt,rt,rt,X,rt]),ct=new ie(new cn(1.34,.09,.2),new Be({color:998702,roughness:.5,metalness:.05,transparent:!0}));ct.position.y=1,et.add(J,ct),et.position.set(.95,-1.85,-.25),u.add(et);let Ct=[rt,X,ct.material];Y0().then(N=>{X.map=N,X.needsUpdate=!0,f=!0});let ft=c?110:240,lt=new Float32Array(ft*3),It=new Float32Array(ft);for(let N=0;N<ft;N++)lt[N*3]=(b()-.5)*9,lt[N*3+1]=(b()-.5)*7,lt[N*3+2]=(b()-.5)*6,It[N]=b();let Ut=new Ce;Ut.setAttribute("position",new ce(lt,3)),Ut.setAttribute("aSeed",new ce(It,1));let Ft=new Ws(Ut,Z0(dc()));Ft.frustumCulled=!1,u.add(Ft);let S={target:new I,heroP:new I,heroQ:new Ee,fog:new _t,keyColor:new _t,rimColor:new _t,frame:[1,1],fx:.5,fy:.5,fw:1,fh:1},ht=["yaw","pitch","husk","huskVis","ripe","milled","stem","leaves","bgP","water","pack","packAt","floor","bowl","motes","gold","spin","opacity","key","rim","hemi","env","exposure"],Z=new _t,ut=new _t;function xt(N,it){let st=it.length,zt=Math.min(st-2,Math.max(0,Math.floor(N))),Rt=st<2?0:Yn(N-zt),Yt=it[zt],Nt=it[Math.min(st-1,zt+1)],Vt=R[Yt.key]||R.hero,Gt=R[Nt.key]||R.hero;for(let Je of ht)S[Je]=Ue(Vt[Je],Gt[Je],Rt);S.target.lerpVectors(Vt.target,Gt.target,Rt),S.frame[0]=Ue(Vt.frame[0],Gt.frame[0],Rt),S.frame[1]=Ue(Vt.frame[1],Gt.frame[1],Rt);let ve=R.poses[Vt.hero],ne=R.poses[Gt.hero];S.heroP.lerpVectors(ve.p,ne.p,Rt),S.heroQ.slerpQuaternions(ve.q,ne.q,Rt),S.fog.copy(Z.set(Vt.fog)).lerp(ut.set(Gt.fog),Rt),S.keyColor.copy(Z.set(Vt.keyColor)).lerp(ut.set(Gt.keyColor),Rt),S.rimColor.copy(Z.set(Vt.rimColor)).lerp(ut.set(Gt.rimColor),Rt),S.fx=Ue(Yt.fx,Nt.fx,Rt),S.fy=Ue(Yt.fy,Nt.fy,Rt),S.fw=Ue(Yt.fw,Nt.fw,Rt),S.fh=Ue(Yt.fh,Nt.fh,Rt),S.layoutA=Vt.layout,S.layoutB=Gt.layout,S.f=Rt}let $=new _t("#8AA552"),wt=new _t("#BDB15E"),St=new _t("#CB9A52"),me=new _t("#6E8C43"),he=new _t("#B8925A"),rn=new _t("#FFF6E3"),an=new _t("#FFC978"),Uo=new re,_s=new I,As=new Ee,Pi=new Ee,xr=new Ee,vr=new I,Ms=new Ee,Dn=Et(.3,1,.2).normalize(),Li="";function yr(){let N=M[S.layoutA],it=M[S.layoutB],st=S.f,zt=S.layoutA+S.layoutB+st.toFixed(4)+(S.milled<.5?"h":"m");if(zt===Li)return;Li=zt;let Rt=N.arc||it.arc?1:0;Pt.visible=S.milled<.5,Ot.visible=!Pt.visible;let Yt=Pt.visible?Pt:Ot;for(let Nt=0;Nt<C;Nt++){let Vt=v[Nt]*.42,Gt=N===it?1:di(Yn((st-Vt)/.58));if(_s.set(Ue(N.p[Nt*3],it.p[Nt*3],Gt),Ue(N.p[Nt*3+1],it.p[Nt*3+1],Gt),Ue(N.p[Nt*3+2],it.p[Nt*3+2],Gt)),Rt){let ne=it.p[Nt*3]-N.p[Nt*3],Je=it.p[Nt*3+2]-N.p[Nt*3+2];_s.y+=Math.sin(Math.PI*Gt)*(.8+.25*Math.hypot(ne,Je))}Pi.fromArray(N.q,Nt*4),xr.fromArray(it.q,Nt*4),As.slerpQuaternions(Pi,xr,Gt);let ve=Ue(N.s[Nt],it.s[Nt],Rt&&it.arc?di(Yn((Gt-.55)/.45)):Gt)*fi;Yt.setMatrixAt(Nt,Uo.compose(_s,As,vr.set(ve,ve,ve)))}Yt.instanceMatrix.needsUpdate=!0}let Ss=-1,Ui=new re,_r=new I;function Ni(){let N=S.bowl;if(pn(Xt,N),pn(W,N),_e.opacity=di(Yn(N*2)),_e.depthWrite=N>.6,U.material.opacity=di(Yn((N-.35)*2.5)),W.material.opacity=N*.4,!(Math.abs(N-Ss)<1e-4)){Ss=N;for(let it=0;it<Te;it++){let st=di(Yn((N-.3-T[it]*.5)/.2));ee.setMatrixAt(it,Ui.compose(F[it],k[it],_r.setScalar(g[it]*st)))}ee.instanceMatrix.needsUpdate=!0}}function Ar(N,it){return N<.5?it.copy($).lerp(wt,N/.5):it.copy(wt).lerp(St,(N-.5)/.5)}let pn=(N,it)=>{N.visible=it>.01};function No(N){Ar(S.ripe,q),K.color.copy(q),K.opacity=S.huskVis,V.color.copy(q),Y.color.copy(me).lerp(he,S.ripe),Y.opacity=S.stem*S.stem,pn(te,S.stem),H.color.copy(me).lerp(he,S.ripe*.85),H.opacity=S.leaves*S.leaves,pn(ot,S.leaves),j.color.copy(q),j.opacity=S.bgP*S.bgP,tt.color.copy(Y.color),tt.opacity=S.bgP*S.bgP,pn(pe,S.bgP),se.material.uniforms.uOpacity.value=S.water,se.material.uniforms.uTime.value=N,pn(se,S.water),jt.material.opacity=S.floor*.32,pn(jt,S.floor),Ni();let it=S.pack*S.pack;Ct.forEach(Yt=>{Yt.opacity=it,Yt.depthWrite=it>.95}),pn(et,S.pack);let st=di(S.packAt),zt=Ue(1,2.35,st);et.scale.setScalar(zt),et.position.set(Ue(.95,Qt.x-2.75,st),Ue(-1.85-(1-S.pack)*.5,Qt.y+1.025*zt,st),Ue(-.25,Qt.z-2.1,st)),et.rotation.y=Ue(-.35,0,S.pack)+st*.32,Ft.material.uniforms.uTime.value=N,Ft.material.uniforms.uOpacity.value=S.motes*.55,Ft.material.uniforms.uColor.value.copy(rn).lerp(an,S.gold),Ft.material.uniforms.uSize.value=(26+30*S.gold)*h,Ft.position.copy(S.target),p.color.copy(S.keyColor),p.intensity=S.key,w.color.copy(S.rimColor),w.intensity=S.rim,m.intensity=S.hemi,u.environmentIntensity=S.env,s.toneMappingExposure=S.exposure,u.fog.color.copy(S.fog),i.style.opacity=S.opacity.toFixed(3),dt.position.copy(S.heroP),Ms.setFromAxisAngle(Dn,Math.sin(N*.32)*.55*S.spin),dt.quaternion.copy(S.heroQ).multiply(Ms);let Rt=di(S.husk);Zt[0].rotation.x=Rt*1.25,Zt[1].rotation.x=-Rt*1.25,Zt[0].position.z=Rt*.35,Zt[1].position.z=-Rt*.35,Zt[0].visible=Zt[1].visible=S.huskVis>.01,yr()}let Ne={x:0,y:0,tx:0,ty:0},on=1,mn=1;function y(N,it){let st=Math.tan(d.fov*Math.PI/360),zt=on/mn,Rt=Math.max(S.frame[1]/(2*st*S.fh),S.frame[0]/(2*st*zt*S.fw)),Yt=S.yaw+Ne.x*.08+(it?Math.sin(N*.13)*.03:0),Nt=S.pitch+Ne.y*.05;d.position.set(S.target.x+Rt*Math.cos(Nt)*Math.sin(Yt),S.target.y+Rt*Math.sin(Nt),S.target.z+Rt*Math.cos(Nt)*Math.cos(Yt)),d.lookAt(S.target),d.near=Math.max(.02,Rt*.05),d.far=Rt+40,d.setViewOffset(on,mn,(.5-S.fx)*on,(.5-S.fy)*mn,on,mn),d.updateProjectionMatrix();let Vt=Math.max(S.frame[0],S.frame[1]);u.fog.near=Rt+Vt*.6,u.fog.far=Rt+Vt*.6+Math.max(6,Rt*2.4),G()}let D="";function G(){let N="none";if(S.fw<.7){let it=S.fx-S.fw/2-.03-Math.max(0,.5-S.fx)*2,st=S.fx+S.fw/2+.03+Math.max(0,S.fx-.5)*2,zt=Rt=>(Rt*100).toFixed(1)+"%";N=`linear-gradient(90deg, transparent ${zt(it)}, #000 ${zt(it+.1)}, #000 ${zt(st-.1)}, transparent ${zt(st)})`}N!==D&&(D=N,i.style.webkitMaskImage=N,i.style.maskImage=N)}function O(){let N=t.keyframes,it=N.length,st=scrollY;if(it<2||st<=N[0].y)return 0;for(let zt=0;zt<it-1;zt++){let Rt=N[zt],Yt=N[zt+1];if(st<Yt.y){let Nt=(st-Rt.y)/(Yt.y-Rt.y);return zt+(Yt.ease==="linear"?Nt:G0(Yn((Nt-.16)/.68)))}}return it-1}function z(){let N=i.clientWidth||innerWidth,it=i.clientHeight||innerHeight;a&&Math.abs(N-on)<1&&Math.abs(it-mn)<140&&on>1||(on=N,mn=it,s.setSize(on,mn,!1),d.aspect=on/mn,f=!0)}addEventListener("resize",z),z(),a||addEventListener("pointermove",N=>{Ne.tx=N.clientX/innerWidth*2-1,Ne.ty=N.clientY/innerHeight*2-1},{passive:!0});let mt=5e3,vt=performance.now()+mt,at=1,bt=()=>{vt=performance.now()+mt};["scroll","pointermove","pointerdown","touchstart","keydown","wheel"].forEach(N=>addEventListener(N,bt,{passive:!0})),i.addEventListener("webglcontextlost",N=>{N.preventDefault(),cancelAnimationFrame(Tt),n&&n("WebGL context lost")});let Tt=0,kt=performance.now(),Wt=0,yt=O(),ae=!1,xe=-1,ue=0,oe=0;function Re(N){if(Tt=requestAnimationFrame(Re),document.hidden){kt=N;return}let it=Math.min(.1,(N-kt)/1e3);kt=N;let st=t.reduced(),zt=!st&&N<vt;at+=((zt?1:0)-at)*(1-Math.exp(-it*2.5)),at<.002&&(at=0);let Rt=!st&&at>0,Yt=t.keyframes;if(Yt.length<2)return;t.version!==xe&&(xe=t.version,f=!0);let Nt=O(),Vt=yt;st?yt=Math.round(Nt):(Math.abs(Nt-yt)>2.5&&(yt=Nt-Math.sign(Nt-yt)*2.5),yt+=(Nt-yt)*(1-Math.exp(-it*5)),Math.abs(Nt-yt)<1e-4&&(yt=Nt));let Gt=Ne.x,ve=Ne.y;st?Ne.x=Ne.y=0:Rt&&(Ne.x+=(Ne.tx-Ne.x)*(1-Math.exp(-it*3))*at,Ne.y+=(Ne.ty-Ne.y)*(1-Math.exp(-it*3))*at,Wt+=it*at);let ne=yt!==Vt||Ne.x!==Gt||Ne.y!==ve;!Rt&&!ne&&!f||(f=!1,xt(yt,Yt),No(Wt),y(Wt,!st),S.opacity>.001&&s.render(u,d),ae||(ae=!0,e&&e()),zt&&at>.99&&oe<600&&(oe++,ue=it>.026?ue+1:Math.max(0,ue-1),ue>45&&h>1&&(h=Math.max(1,h-.25),s.setPixelRatio(h),s.setSize(on,mn,!1),ue=0)))}return/[?&]debug\b/.test(location.search)&&(window.__mvs={scene:u,hero:dt,grains:Pt,stem:te,leaves:ot,packGroup:et,S,LAY:M}),Tt=requestAnimationFrame(Re),{stop:()=>cancelAnimationFrame(Tt)}}export{Ay as start};
/*! For license information please see grain-scene.js.LEGAL.txt */
