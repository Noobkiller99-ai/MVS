var kc=0,yl=1,Gc=2;var tr=1,Hc=2,cs=3,Gn=0,Ve=1,Ze=2,Pn=0,Mi=1,Al=2,Ml=3,Sl=4,Wc=5;var ei=100,qc=101,Xc=102,Yc=103,Jc=104,Zc=200,Kc=201,jc=202,Qc=203,Xr=204,Yr=205,$c=206,th=207,eh=208,nh=209,ih=210,sh=211,rh=212,ah=213,oh=214,Jr=0,Zr=1,Kr=2,Si=3,jr=4,Qr=5,$r=6,ta=7,La=0,lh=1,ch=2,An=0,_l=1,bl=2,El=3,er=4,Tl=5,wl=6,Cl=7;var Rl=300,oi=301,wi=302,Da=303,Fa=304,nr=306,_i=1e3,bn=1001,ea=1002,Ne=1003,hh=1004;var ir=1005;var ze=1006,Ua=1007;var li=1008;var $e=1009,Il=1010,Pl=1011,hs=1012,Na=1013,Mn=1014,un=1015,Ln=1016,Oa=1017,Ba=1018,us=1020,Ll=35902,Dl=35899,Fl=1021,Ul=1022,fn=1023,En=1026,ci=1027,za=1028,Va=1029,hi=1030,ka=1031;var Ga=1033,sr=33776,rr=33777,ar=33778,or=33779,Ha=35840,Wa=35841,qa=35842,Xa=35843,Ya=36196,Ja=37492,Za=37496,Ka=37488,ja=37489,lr=37490,Qa=37491,$a=37808,to=37809,eo=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,xo=36283,vo=36284,cr=36285,yo=36286;var Ds=2300,na=2301,qr=2302,ll=2303,cl=2400,hl=2401,ul=2402;var uh=3200;var hr=0,fh=1,Xn="",He="srgb",Fs="srgb-linear",Us="linear",le="srgb";var yi=7680;var fl=519,dh=512,ph=513,mh=514,Ao=515,gh=516,xh=517,Mo=518,vh=519,dl=35044,Nl=35048;var Ol="300 es",yn=2e3,Ki=2001;function au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ou(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){let i=Ns("canvas");return i.style.display="block",i}var pc={},ji=null;function Bl(...i){let t="THREE."+i.shift();ji?ji("log",t,...i):console.log(t,...i)}function Ah(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=Ah(i);let t="THREE."+i.shift();if(ji)ji("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ot(...i){i=Ah(i);let t="THREE."+i.shift();if(ji)ji("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ai(...i){let t=i.join(" ");t in pc||(pc[t]=!0,Ut(...i))}function Mh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Sh={[Jr]:Zr,[Kr]:$r,[jr]:ta,[Si]:Qr,[Zr]:Jr,[$r]:Kr,[ta]:jr,[Qr]:Si},Tn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Uo=Math.PI/180,ia=180/Math.PI;function ur(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function No(i,t,e){return(1-e)*i+e*t}function bs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wl=class Wl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;var St=Wl,we=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],x=r[a+2],M=r[a+3];if(d!==M||c!==u||l!==f||h!==x){let m=c*u+l*f+h*x+d*M;m<0&&(u=-u,f=-f,x=-x,M=-M,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),b=Math.sin(T);p=Math.sin(p*T)/b,o=Math.sin(o*T)/b,c=c*p+u*o,l=l*p+f*o,h=h*p+x*o,d=d*p+M*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+x*o,d=d*p+M*o;let T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*d+c*f-l*u,t[e+1]=c*x+h*u+l*d-o*f,t[e+2]=l*x+h*f+o*u-c*d,t[e+3]=h*x-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"YZX":this._x=u*h*d+l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d-u*f*x;break;case"XZY":this._x=u*h*d-l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d+u*f*x;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ql=class ql{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ql.prototype.isVector3=!0;var I=ql,Oo=new I,mc=new we,Xl=class Xl{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],x=n[8],M=s[0],m=s[3],p=s[6],T=s[1],b=s[4],A=s[7],C=s[2],S=s[5],R=s[8];return r[0]=a*M+o*T+c*C,r[3]=a*m+o*b+c*S,r[6]=a*p+o*A+c*R,r[1]=l*M+h*T+d*C,r[4]=l*m+h*b+d*S,r[7]=l*p+h*A+d*R,r[2]=u*M+f*T+x*C,r[5]=u*m+f*b+x*S,r[8]=u*p+f*A+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,x=e*d+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=d*M,t[1]=(s*l-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xl.prototype.isMatrix3=!0;var Ht=Xl,Bo=new Ht,gc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cu(){let i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Us:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:t,whitePoint:n,transfer:Us,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:le,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}var $t=cu();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=Ns("canvas")),Ni.width=t.width,Ni.height=t.height;let s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ns("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hu=0,Qi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zo(s[a].image)):r.push(zo(s[a]))}else r=zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var uu=0,Vo=new I,Je=class i extends Tn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=ze,a=li,o=fn,c=$e,l=i.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ur(),this.name="",this.source=new Qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _i:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _i:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Rl;Je.DEFAULT_ANISOTROPY=1;var Yl=class Yl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],x=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,A=(f+1)/2,C=(p+1)/2,S=(h+u)/4,R=(d+M)/4,v=(x+m)/4;return b>A&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=R/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=S/s,r=v/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=v/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-x)*(m-x)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-x)/T,this.y=(d-M)/T,this.z=(u-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yl.prototype.isVector4=!0;var ye=Yl,ra=class extends Tn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Je(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ra{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Os=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pa=class Pa{constructor(t,e,n,s,r,a,o,c,l,h,d,u,f,x,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,f,x,M,m)}set(t,e,n,s,r,a,o,c,l,h,d,u,f,x,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=x,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,x=o*h,M=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+x*l,e[5]=u-M*l,e[9]=-o*c,e[2]=M-u*l,e[6]=x+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,x=l*h,M=l*d;e[0]=u+M*o,e[4]=x*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=M+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,x=l*h,M=l*d;e[0]=u-M*o,e[4]=-a*d,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,x=o*h,M=o*d;e[0]=c*h,e[4]=x*l-f,e[8]=u*l+M,e[1]=c*d,e[5]=M*l+u,e[9]=f*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,x=o*c,M=o*l;e[0]=c*h,e[4]=M-u*d,e[8]=x*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+x,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*c,f=a*l,x=o*c,M=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fu,t,du)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Jn.crossVectors(n,tn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Jn.crossVectors(n,tn)),Jn.normalize(),Sr.crossVectors(tn,Jn),s[0]=Jn.x,s[4]=Sr.x,s[8]=tn.x,s[1]=Jn.y,s[5]=Sr.y,s[9]=tn.y,s[2]=Jn.z,s[6]=Sr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],x=n[2],M=n[6],m=n[10],p=n[14],T=n[3],b=n[7],A=n[11],C=n[15],S=s[0],R=s[4],v=s[8],w=s[12],P=s[1],L=s[5],O=s[9],X=s[13],J=s[2],V=s[6],Y=s[10],H=s[14],Q=s[3],tt=s[7],pt=s[11],ft=s[15];return r[0]=a*S+o*P+c*J+l*Q,r[4]=a*R+o*L+c*V+l*tt,r[8]=a*v+o*O+c*Y+l*pt,r[12]=a*w+o*X+c*H+l*ft,r[1]=h*S+d*P+u*J+f*Q,r[5]=h*R+d*L+u*V+f*tt,r[9]=h*v+d*O+u*Y+f*pt,r[13]=h*w+d*X+u*H+f*ft,r[2]=x*S+M*P+m*J+p*Q,r[6]=x*R+M*L+m*V+p*tt,r[10]=x*v+M*O+m*Y+p*pt,r[14]=x*w+M*X+m*H+p*ft,r[3]=T*S+b*P+A*J+C*Q,r[7]=T*R+b*L+A*V+C*tt,r[11]=T*v+b*O+A*Y+C*pt,r[15]=T*w+b*X+A*H+C*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],x=t[3],M=t[7],m=t[11],p=t[15],T=c*f-l*u,b=o*f-l*d,A=o*u-c*d,C=a*f-l*h,S=a*u-c*h,R=a*d-o*h;return e*(M*T-m*b+p*A)-n*(x*T-m*C+p*S)+s*(x*b-M*C+p*R)-r*(x*A-M*S+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],x=t[12],M=t[13],m=t[14],p=t[15],T=e*o-n*a,b=e*c-s*a,A=e*l-r*a,C=n*c-s*o,S=n*l-r*o,R=s*l-r*c,v=h*M-d*x,w=h*m-u*x,P=h*p-f*x,L=d*m-u*M,O=d*p-f*M,X=u*p-f*m,J=T*X-b*O+A*L+C*P-S*w+R*v;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/J;return t[0]=(o*X-c*O+l*L)*V,t[1]=(s*O-n*X-r*L)*V,t[2]=(M*R-m*S+p*C)*V,t[3]=(u*S-d*R-f*C)*V,t[4]=(c*P-a*X-l*w)*V,t[5]=(e*X-s*P+r*w)*V,t[6]=(m*A-x*R-p*b)*V,t[7]=(h*R-u*A+f*b)*V,t[8]=(a*O-o*P+l*v)*V,t[9]=(n*P-e*O-r*v)*V,t[10]=(x*S-M*A+p*T)*V,t[11]=(d*A-h*S-f*T)*V,t[12]=(o*w-a*L-c*v)*V,t[13]=(e*L-n*w+s*v)*V,t[14]=(M*b-x*C-m*T)*V,t[15]=(h*C-d*b+u*T)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,x=r*d,M=a*h,m=a*d,p=o*d,T=c*l,b=c*h,A=c*d,C=n.x,S=n.y,R=n.z;return s[0]=(1-(M+p))*C,s[1]=(f+A)*C,s[2]=(x-b)*C,s[3]=0,s[4]=(f-A)*S,s[5]=(1-(u+p))*S,s[6]=(m+T)*S,s[7]=0,s[8]=(x+b)*R,s[9]=(m-T)*R,s[10]=(1-(u+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Oi.set(s[0],s[1],s[2]).length(),o=Oi.set(s[4],s[5],s[6]).length(),c=Oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gn.copy(this);let l=1/a,h=1/o,d=1/c;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,e.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=yn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),x,M;if(c)x=r/(a-r),M=a*r/(a-r);else if(o===yn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ki)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),x,M;if(c)x=1/(a-r),M=a/(a-r);else if(o===yn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ki)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Pa.prototype.isMatrix4=!0;var re=Pa,Oi=new I,gn=new re,fu=new I(0,0,0),du=new I(1,1,1),Jn=new I,Sr=new I,tn=new I,vc=new re,yc=new we,wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pu=0,Ac=new I,Bi=new we,Nn=new re,_r=new I,Es=new I,mu=new I,gu=new we,Mc=new I(1,0,0),Sc=new I(0,1,0),_c=new I(0,0,1),bc={type:"added"},xu={type:"removed"},zi={type:"childadded",child:null},ko={type:"childremoved",child:null},Ie=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new wn,n=new we,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ht}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Es,_r,this.up):Nn.lookAt(_r,Es,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},vu={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&u>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},br={h:0,s:0,l:0};function Go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=lu(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Go(a,r,t+1/3),this.g=Go(a,r,t),this.b=Go(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return $t.workingToColorSpace(Ge.copy(this),t),Math.round(Jt(Ge.r*255,0,255))*65536+Math.round(Jt(Ge.g*255,0,255))*256+Math.round(Jt(Ge.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=He){$t.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(br);let n=No(Zn.h,br.h,e),s=No(Zn.s,br.s,e),r=No(Zn.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new At;At.NAMES=_h;var zs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bi=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new I,On=new I,Ho=new I,Bn=new I,Vi=new I,ki=new I,Ec=new I,Wo=new I,qo=new I,Xo=new I,Yo=new ye,Jo=new ye,Zo=new ye,ti=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),On.subVectors(n,e),Ho.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(On),c=xn.dot(Ho),l=On.dot(On),h=On.dot(Ho),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Yo.setScalar(0),Jo.setScalar(0),Zo.setScalar(0),Yo.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),Zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector(Jo,r.y),a.addScaledVector(Zo,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),On.subVectors(t,e),xn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),ki.subVectors(r,n),Wo.subVectors(t,n);let c=Vi.dot(Wo),l=ki.dot(Wo);if(c<=0&&l<=0)return e.copy(n);qo.subVectors(t,s);let h=Vi.dot(qo),d=ki.dot(qo);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Vi,a);Xo.subVectors(t,r);let f=Vi.dot(Xo),x=ki.dot(Xo);if(x>=0&&f<=x)return e.copy(r);let M=f*l-c*x;if(M<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(ki,o);let m=h*x-f*d;if(m<=0&&d-h>=0&&f-x>=0)return Ec.subVectors(r,s),o=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(Ec,o);let p=1/(m+M+u);return a=M*p,o=u*p,e.copy(n).addScaledVector(Vi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),Tr.subVectors(this.max,Ts),Gi.subVectors(t.a,Ts),Hi.subVectors(t.b,Ts),Wi.subVectors(t.c,Ts),Kn.subVectors(Hi,Gi),jn.subVectors(Wi,Hi),mi.subVectors(Gi,Wi);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-mi.z,mi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,mi.z,0,-mi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-mi.y,mi.x,0];return!Ko(e,Gi,Hi,Wi,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,Gi,Hi,Wi,Tr))?!1:(wr.crossVectors(Kn,jn),e=[wr.x,wr.y,wr.z],Ko(e,Gi,Hi,Wi,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new I,new I,new I,new I,new I,new I,new I,new I],vn=new I,Er=new Cn,Gi=new I,Hi=new I,Wi=new I,Kn=new I,jn=new I,mi=new I,Ts=new I,Tr=new I,wr=new I,gi=new I;function Ko(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Te=new I,Cr=new St,yu=0,We=class extends Tn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vs=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ks=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},Au=new Cn,ws=new I,jo=new I,Hn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);let e=ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(jo)),this.expandByPoint(ws.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mu=0,ln=new re,Qo=new Ie,qi=new I,en=new Cn,Cs=new Cn,Ue=new I,Ce=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?ks:Vs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(en.min,Cs.min),en.expandByPoint(Ue),Ue.addVectors(en.max,Cs.max),en.expandByPoint(Ue)):(en.expandByPoint(Cs.min),en.expandByPoint(Cs.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ue.fromBufferAttribute(o,l),c&&(qi.fromBufferAttribute(t,l),Ue.add(qi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new I,c[v]=new I;let l=new I,h=new I,d=new I,u=new St,f=new St,x=new St,M=new I,m=new I;function p(v,w,P){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),x.fromBufferAttribute(r,P),h.sub(l),d.sub(l),f.sub(u),x.sub(u);let L=1/(f.x*x.y-x.x*f.y);isFinite(L)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(L),o[v].add(M),o[w].add(M),o[P].add(M),c[v].add(m),c[w].add(m),c[P].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let v=0,w=T.length;v<w;++v){let P=T[v],L=P.start,O=P.count;for(let X=L,J=L+O;X<J;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let b=new I,A=new I,C=new I,S=new I;function R(v){C.fromBufferAttribute(s,v),S.copy(C);let w=o[v];b.copy(w),b.sub(C.multiplyScalar(C.dot(w))).normalize(),A.crossVectors(S,w);let L=A.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,L)}for(let v=0,w=T.length;v<w;++v){let P=T[v],L=P.start,O=P.count;for(let X=L,J=L+O;X<J;X+=3)R(t.getX(X+0)),R(t.getX(X+1)),R(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let x=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,x=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*h;for(let p=0;p<h;p++)u[x++]=l[f++]}return new We(u,h,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Su=0,Rn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=Mi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xr,this.blendDst=Yr,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new St().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Vn=new I,$o=new I,Rr=new I,Qn=new I,tl=new I,Ir=new I,el=new I,Gs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub($o);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Rr),o=Qn.dot(this.direction),c=-Qn.dot(Rr),l=Qn.lengthSq(),h=Math.abs(1-a*a),d,u,f,x;if(h>0)if(d=a*c-o,u=a*o-c,x=r*h,d>=0)if(u>=-x)if(u<=x){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($o).addScaledVector(Rr,u),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){tl.subVectors(e,t),Ir.subVectors(n,t),el.crossVectors(tl,Ir);let a=this.direction.dot(el),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);let c=o*this.direction.dot(Ir.crossVectors(Qn,Ir));if(c<0)return null;let l=o*this.direction.dot(tl.cross(Qn));if(l<0||c+l>a)return null;let h=-o*Qn.dot(el);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ni=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tc=new re,xi=new Gs,Pr=new Hn,wc=new I,Lr=new I,Dr=new I,Fr=new I,nl=new I,Ur=new I,Cc=new I,Nr=new I,ie=class extends Ie{constructor(t=new Ce,e=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(nl.fromBufferAttribute(d,t),a?Ur.addScaledVector(nl,h):Ur.addScaledVector(nl.sub(e),h))}e.add(Ur)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(Pr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Pr,wc)===null||xi.origin.distanceToSquared(wc)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let m=u[x],p=a[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let A=T,C=b;A<C;A+=3){let S=o.getX(A),R=o.getX(A+1),v=o.getX(A+2);s=Or(this,p,t,n,l,h,d,S,R,v),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=x,p=M;m<p;m+=3){let T=o.getX(m),b=o.getX(m+1),A=o.getX(m+2);s=Or(this,a,t,n,l,h,d,T,b,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let m=u[x],p=a[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let A=T,C=b;A<C;A+=3){let S=A,R=A+1,v=A+2;s=Or(this,p,t,n,l,h,d,S,R,v),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=x,p=M;m<p;m+=3){let T=m,b=m+1,A=m+2;s=Or(this,a,t,n,l,h,d,T,b,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function _u(i,t,e,n,s,r,a,o){let c;if(t.side===Ve?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Gn,o),c===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Nr);return l<e.near||l>e.far?null:{distance:l,point:Nr.clone(),object:i}}function Or(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Lr),i.getVertexPosition(c,Dr),i.getVertexPosition(l,Fr);let h=_u(i,t,e,n,Lr,Dr,Fr,Cc);if(h){let d=new I;ti.getBarycoord(Cc,Lr,Dr,Fr,d),s&&(h.uv=ti.getInterpolatedAttribute(s,o,c,l,d,new St)),r&&(h.uv1=ti.getInterpolatedAttribute(r,o,c,l,d,new St)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};ti.getNormal(Lr,Dr,Fr,u.normal),h.face=u,h.barycoord=d}return h}var Hs=class extends Je{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ne,h=Ne,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xi=new re,Rc=new re,Br=[],Ic=new Cn,bu=new re,Rs=new ie,Is=new Hn,In=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Ic.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(Ic)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Is.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),Rc.multiplyMatrices(n,Xi),Rs.matrixWorld=Rc,Rs.raycast(t,Br);for(let a=0,o=Br.length;a<o;a++){let c=Br[a];c.instanceId=r,c.object=this,e.push(c)}Br.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hs(new Float32Array(s*this.count),s,this.count,za,un));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},il=new I,Eu=new I,Tu=new Ht,_n=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=il.subVectors(n,e).cross(Eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tu.getNormalMatrix(t),s=this.coplanarPoint(il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new Hn,wu=new St(.5,.5),zr=new I,es=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],M=r[9],m=r[10],p=r[11],T=r[12],b=r[13],A=r[14],C=r[15];if(s[0].setComponents(l-a,f-h,p-x,C-T).normalize(),s[1].setComponents(l+a,f+h,p+x,C+T).normalize(),s[2].setComponents(l+o,f+d,p+M,C+b).normalize(),s[3].setComponents(l-o,f-d,p-M,C-b).normalize(),n)s[4].setComponents(c,u,m,A).normalize(),s[5].setComponents(l-c,f-u,p-m,C-A).normalize();else if(s[4].setComponents(l-c,f-u,p-m,C-A).normalize(),e===yn)s[5].setComponents(l+c,f+u,p+m,C+A).normalize();else if(e===Ki)s[5].setComponents(c,u,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);let e=wu.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zr.x=s.normal.x>0?t.max.x:t.min.x,zr.y=s.normal.y>0?t.max.y:t.min.y,zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oa=class extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pc=new re,pl=new Gs,Vr=new Hn,kr=new I,Ws=class extends Ie{constructor(t=new Ce,e=new oa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;Pc.copy(s).invert(),pl.copy(t.ray).applyMatrix4(Pc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let x=u,M=f;x<M;x++){let m=l.getX(x);kr.fromBufferAttribute(d,m),Lc(kr,m,c,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=u,M=f;x<M;x++)kr.fromBufferAttribute(d,x),Lc(kr,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lc(i,t,e,n,s,r,a){let o=pl.distanceSqToPoint(i);if(o<e){let c=new I;pl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var qs=class extends Je{constructor(t=[],e=oi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ns=class extends Je{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wn=class extends Je{constructor(t,e,n=Mn,s,r,a,o=Ne,c=Ne,l,h=En,d=1){if(h!==En&&h!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},la=class extends Wn{constructor(t,e=Mn,n=oi,s,r,a=Ne,o=Ne,c,l=En){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function x(M,m,p,T,b,A,C,S,R,v,w){let P=A/R,L=C/v,O=A/2,X=C/2,J=S/2,V=R+1,Y=v+1,H=0,Q=0,tt=new I;for(let pt=0;pt<Y;pt++){let ft=pt*L-X;for(let Mt=0;Mt<V;Mt++){let Zt=Mt*P-O;tt[M]=Zt*T,tt[m]=ft*b,tt[p]=J,l.push(tt.x,tt.y,tt.z),tt[M]=0,tt[m]=0,tt[p]=S>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Mt/R),d.push(1-pt/v),H+=1}}for(let pt=0;pt<v;pt++)for(let ft=0;ft<R;ft++){let Mt=u+ft+V*pt,Zt=u+ft+V*(pt+1),de=u+(ft+1)+V*(pt+1),te=u+(ft+1)+V*pt;c.push(Mt,Zt,te),c.push(Zt,de,te),Q+=6}o.addGroup(f,Q,w),f+=Q,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ys=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new I,h=new St;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new St:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new re;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Js=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new St){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ca=class extends Js{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Dc=new I,Fc=new I,sl=new zl,rl=new zl,al=new zl,qn=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Fc.subVectors(s[0],s[1]).add(s[0]),l=Fc);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Dc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),x<1e-4&&(x=M),m<1e-4&&(m=M),sl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,x,M,m),rl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,x,M,m),al.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,x,M,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),rl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),al.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(sl.calc(c),rl.calc(c),al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Cu(i,t){let e=1-i;return e*e*t}function Ru(i,t){return 2*(1-i)*i*t}function Iu(i,t){return i*i*t}function Ps(i,t,e,n){return Cu(i,t)+Ru(i,e)+Iu(i,n)}function Pu(i,t){let e=1-i;return e*e*e*t}function Lu(i,t){let e=1-i;return 3*e*e*i*t}function Du(i,t){return 3*(1-i)*i*i*t}function Fu(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return Pu(i,t)+Lu(i,e)+Du(i,n)+Fu(i,s)}var ha=class extends hn{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ua=class extends hn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y),Ls(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends hn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends hn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends hn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ei=class extends hn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y),Ps(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},is=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Uc(o,c.x,l.x,h.x,d.x),Uc(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new St().fromArray(s))}return this}},Uu=Object.freeze({__proto__:null,ArcCurve:ca,CatmullRomCurve3:qn,CubicBezierCurve:ha,CubicBezierCurve3:ua,EllipseCurve:Js,LineCurve:fa,LineCurve3:da,QuadraticBezierCurve:pa,QuadraticBezierCurve3:Ei,SplineCurve:is});var ss=class i extends Ce{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Jt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,d=new I,u=new St,f=new I,x=new I,M=new I,m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,M.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(M.x,M.y,M.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),c.push(f.x,f.y,f.z),M.copy(x)}for(let T=0;T<=e;T++){let b=n+T*h*s,A=Math.sin(b),C=Math.cos(b);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*A,d.y=t[S].y,d.z=t[S].x*C,a.push(d.x,d.y,d.z),u.x=T/e,u.y=S/(t.length-1),o.push(u.x,u.y);let R=c[3*S+0]*A,v=c[3*S+1],w=c[3*S+0]*C;l.push(R,v,w)}}for(let T=0;T<e;T++)for(let b=0;b<t.length-1;b++){let A=b+T*t.length,C=A,S=A+t.length,R=A+t.length+1,v=A+1;r.push(C,S,v),r.push(R,v,S)}this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ii=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],x=[],M=[],m=[];for(let p=0;p<h;p++){let T=p*u-a;for(let b=0;b<l;b++){let A=b*d-r;x.push(A,-T,0),M.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){let b=T+l*p,A=T+l*(p+1),C=T+1+l*(p+1),S=T+1+l*p;f.push(b,A,S),f.push(A,C,S)}this.setIndex(f),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(M,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var rs=class i extends Ce{constructor(t=new Ei(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,l=new St,h=new I,d=[],u=[],f=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function M(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),T(),p()}function m(b){h=t.getPointAt(b/e,h);let A=a.normals[b],C=a.binormals[b];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,v=Math.sin(R),w=-Math.cos(R);c.x=w*A.x+v*C.x,c.y=w*A.y+v*C.y,c.z=w*A.z+v*C.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=e;b++)for(let A=1;A<=s;A++){let C=(s+1)*(b-1)+(A-1),S=(s+1)*b+(A-1),R=(s+1)*b+A,v=(s+1)*(b-1)+A;x.push(C,S,v),x.push(S,R,v)}}function T(){for(let b=0;b<=e;b++)for(let A=0;A<=s;A++)l.x=b/e,l.y=A/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Uu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ci(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Nc(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Nc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Ci(i[e]);for(let s in n)t[s]=n[s]}return t}function Nc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var bh={clone:Ci,merge:Xe},Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=Nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(s.value);break;case"v2":this.uniforms[n].value=new St().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ma=class extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oe=class extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ti=class extends Oe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Zs=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=La,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ga=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hl:r=t,o=2*e-n;break;case ul:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hl:a=t,c=2*n-e;break;case ul:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),M=x*x,m=M*x,p=-u*m+2*u*M-u*x,T=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*x+1,b=(-1-f)*m+(1.5+f)*M+.5*x,A=f*m-f*M;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+T*a[l+C]+b*a[c+C]+A*a[d+C];return r}},ya=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Aa=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ma=class extends si{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-e)/(s-e),M=1-x;for(let m=0;m!==o;++m)r[m]=a[l+m]*M+a[c+m]*x;return r}let u=o*2,f=t-1;for(let x=0;x!==o;++x){let M=a[l+x],m=a[c+x],p=f*u+x*2,T=d[p],b=d[p+1],A=t*u+x*2,C=h[A],S=h[A+1],R=(n-e)/(s-e),v,w,P,L,O;for(let X=0;X<8;X++){v=R*R,w=v*R,P=1-R,L=P*P,O=L*P;let V=O*e+3*L*R*T+3*P*v*C+w*s-n;if(Math.abs(V)<1e-10)break;let Y=3*L*(T-e)+6*P*R*(C-T)+3*v*(s-C);if(Math.abs(Y)<1e-10)break;R=R-V/Y,R=Math.max(0,Math.min(1,R))}r[x]=O*M+3*L*R*b+3*P*v*S+w*m}return r}},sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gr(e,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gr(t.times,Array),values:Gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ds:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break;case ll:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ot("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ot("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ou(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ot("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let x=0;x!==n;++x){let M=e[d+x];if(M!==e[u+x]||M!==e[f+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=na;var ri=class extends sn{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Ds;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="color";var _a=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="number";var ba=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)we.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ks=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends sn{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ds;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="vector";var Ta=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],x=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Eh=new Ta,wa=class{constructor(t){this.manager=t!==void 0?t:Eh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},js=class extends as{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ol=new re,Oc=new I,Bc=new I,Ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ki||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hr=new I,Wr=new we,Sn=new I,Qs=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hr,Wr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hr,Wr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$n=new I,zc=new St,Vc=new St,Be=class extends Qs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,zc,Vc),e.subVectors(Vc,zc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Uo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ml=class extends Ca{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends as{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},os=class extends Qs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gl=class extends Ca{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends as{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new gl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Yi=-90,Ji=1,Ra=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Yi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new Be(Yi,Ji,t,e);r.layers=this.layers,this.add(r);let a=new Be(Yi,Ji,t,e);a.layers=this.layers,this.add(a);let o=new Be(Yi,Ji,t,e);o.layers=this.layers,this.add(o);let c=new Be(Yi,Ji,t,e);c.layers=this.layers,this.add(c);let l=new Be(Yi,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ia=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kl="\\[\\]\\.:\\/",zu=new RegExp("["+kl+"]","g"),Gl="[^"+kl+"]",Vu="[^"+kl.replace("\\.","")+"]",ku=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Gu=/(WCOD+)?/.source.replace("WCOD",Vu),Hu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Wu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),qu=new RegExp("^"+ku+Gu+Hu+Wu+"$"),Xu=["material","materials","bones","map"],xl=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zu,"")}static parseTrackName(t){let e=qu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=xl;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $g=new Float32Array(1);var Jl=class Jl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Jl.prototype.isMatrix2=!0;var vl=Jl;function Hl(i,t,e,n){let s=Yu(n);switch(e){case Fl:return i*t;case za:return i*t/s.components*s.byteLength;case Va:return i*t/s.components*s.byteLength;case hi:return i*t*2/s.components*s.byteLength;case ka:return i*t*2/s.components*s.byteLength;case Ul:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Ga:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case Ja:case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case lr:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case po:case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xo:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cr:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yu(i){switch(i){case $e:case Il:return{byteLength:1,components:1};case hs:case Pl:case Ln:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case Mn:case Na:case un:return{byteLength:4,components:1};case Ll:case Dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Jh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tf(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],M=d[f];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let M=d[f];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
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
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
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
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
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
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mf=`#ifdef USE_IRIDESCENCE
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
#endif`,gf=`#ifdef USE_BUMPMAP
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
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
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
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
#endif`,td=`uniform sampler2D dfgLUT;
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
}`,ed=`
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sd=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fd=`#if defined( USE_POINTS_UV )
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
#endif`,dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
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
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kd=`float getShadowMask() {
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
}`,Gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
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
}`,Ap=`#define MATCAP
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
}`,Mp=`#define MATCAP
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
}`,Sp=`#define NORMAL
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
}`,_p=`#define NORMAL
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
}`,Ep=`#define PHONG
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
}`,Tp=`#define STANDARD
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
}`,wp=`#define STANDARD
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
}`,Dp=`uniform vec3 color;
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
}`,Fp=`uniform float rotation;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:ff,beginnormal_vertex:df,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:xf,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:Af,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:_f,color_vertex:bf,common:Ef,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Cf,displacementmap_vertex:Rf,emissivemap_fragment:If,emissivemap_pars_fragment:Pf,colorspace_fragment:Lf,colorspace_pars_fragment:Df,envmap_fragment:Ff,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Nf,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Jf,envmap_vertex:Bf,fog_vertex:zf,fog_pars_vertex:Vf,fog_fragment:kf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:Wf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Xf,lights_pars_begin:Yf,lights_toon_fragment:Zf,lights_toon_pars_fragment:Kf,lights_phong_fragment:jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:$f,lights_physical_pars_fragment:td,lights_fragment_begin:ed,lights_fragment_maps:nd,lights_fragment_end:id,lightprobes_pars_fragment:sd,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:ad,logdepthbuf_pars_vertex:od,logdepthbuf_vertex:ld,map_fragment:cd,map_pars_fragment:hd,map_particle_fragment:ud,map_particle_pars_fragment:fd,metalnessmap_fragment:dd,metalnessmap_pars_fragment:pd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:xd,morphtarget_pars_vertex:vd,morphtarget_vertex:yd,normal_fragment_begin:Ad,normal_fragment_maps:Md,normal_pars_fragment:Sd,normal_pars_vertex:_d,normal_vertex:bd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Rd,opaque_fragment:Id,packing:Pd,premultiplied_alpha_fragment:Ld,project_vertex:Dd,dithering_fragment:Fd,dithering_pars_fragment:Ud,roughnessmap_fragment:Nd,roughnessmap_pars_fragment:Od,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:zd,shadowmap_vertex:Vd,shadowmask_pars_fragment:kd,skinbase_vertex:Gd,skinning_pars_vertex:Hd,skinning_vertex:Wd,skinnormal_vertex:qd,specularmap_fragment:Xd,specularmap_pars_fragment:Yd,tonemapping_fragment:Jd,tonemapping_pars_fragment:Zd,transmission_fragment:Kd,transmission_pars_fragment:jd,uv_pars_fragment:Qd,uv_pars_vertex:$d,uv_vertex:tp,worldpos_vertex:ep,background_vert:np,background_frag:ip,backgroundCube_vert:sp,backgroundCube_frag:rp,cube_vert:ap,cube_frag:op,depth_vert:lp,depth_frag:cp,distance_vert:hp,distance_frag:up,equirect_vert:fp,equirect_frag:dp,linedashed_vert:pp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:xp,meshlambert_vert:vp,meshlambert_frag:yp,meshmatcap_vert:Ap,meshmatcap_frag:Mp,meshnormal_vert:Sp,meshnormal_frag:_p,meshphong_vert:bp,meshphong_frag:Ep,meshphysical_vert:Tp,meshphysical_frag:wp,meshtoon_vert:Cp,meshtoon_frag:Rp,points_vert:Ip,points_frag:Pp,shadow_vert:Lp,shadow_frag:Dp,sprite_vert:Fp,sprite_frag:Up},gt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Fn={basic:{uniforms:Xe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Xe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Xe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Xe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Xe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new At(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Xe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Xe([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Xe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Xe([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Xe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Xe([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Xe([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Xe([gt.lights,gt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Fn.physical={uniforms:Xe([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var So={r:0,b:0,g:0},Np=new re,Zh=new Ht;Zh.set(-1,0,0,0,1,0,0,0,1);function Op(i,t,e,n,s,r){let a=new At(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(T){let b=T.isScene===!0?T.background:null;if(b&&b.isTexture){let A=T.backgroundBlurriness>0;b=t.get(b,A)}return b}function x(T){let b=!1,A=f(T);A===null?m(a,o):A&&A.isColor&&(m(A,1),b=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,b){let A=f(b);A&&(A.isCubeTexture||A.mapping===nr)?(l===void 0&&(l=new ie(new cn(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Ci(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=A,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(b.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zh),l.material.toneMapped=$t.getTransfer(A.colorSpace)!==le,(h!==A||d!==A.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ie(new ii(2,2),new qe({name:"BackgroundMaterial",uniforms:Ci(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$t.getTransfer(A.colorSpace)!==le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,b){T.getRGB(So,Vl(i)),e.buffers.color.setClear(So.r,So.g,So.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:x,addToRenderList:M,dispose:p}}function Bp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,O,X,J,V){let Y=!1,H=d(L,J,X,O);r!==H&&(r=H,l(r.object)),Y=f(L,J,X,V),Y&&x(L,J,X,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,A(L,O,X,J),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,O,X,J){let V=J.wireframe===!0,Y=n[O.id];Y===void 0&&(Y={},n[O.id]=Y);let H=L.isInstancedMesh===!0?L.id:0,Q=Y[H];Q===void 0&&(Q={},Y[H]=Q);let tt=Q[X.id];tt===void 0&&(tt={},Q[X.id]=tt);let pt=tt[V];return pt===void 0&&(pt=u(c()),tt[V]=pt),pt}function u(L){let O=[],X=[],J=[];for(let V=0;V<e;V++)O[V]=0,X[V]=0,J[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:J,object:L,attributes:{},index:null}}function f(L,O,X,J){let V=r.attributes,Y=O.attributes,H=0,Q=X.getAttributes();for(let tt in Q)if(Q[tt].location>=0){let ft=V[tt],Mt=Y[tt];if(Mt===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(Mt=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(Mt=L.instanceColor)),ft===void 0||ft.attribute!==Mt||Mt&&ft.data!==Mt.data)return!0;H++}return r.attributesNum!==H||r.index!==J}function x(L,O,X,J){let V={},Y=O.attributes,H=0,Q=X.getAttributes();for(let tt in Q)if(Q[tt].location>=0){let ft=Y[tt];ft===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor));let Mt={};Mt.attribute=ft,ft&&ft.data&&(Mt.data=ft.data),V[tt]=Mt,H++}r.attributes=V,r.attributesNum=H,r.index=J}function M(){let L=r.newAttributes;for(let O=0,X=L.length;O<X;O++)L[O]=0}function m(L){p(L,0)}function p(L,O){let X=r.newAttributes,J=r.enabledAttributes,V=r.attributeDivisors;X[L]=1,J[L]===0&&(i.enableVertexAttribArray(L),J[L]=1),V[L]!==O&&(i.vertexAttribDivisor(L,O),V[L]=O)}function T(){let L=r.newAttributes,O=r.enabledAttributes;for(let X=0,J=O.length;X<J;X++)O[X]!==L[X]&&(i.disableVertexAttribArray(X),O[X]=0)}function b(L,O,X,J,V,Y,H){H===!0?i.vertexAttribIPointer(L,O,X,V,Y):i.vertexAttribPointer(L,O,X,J,V,Y)}function A(L,O,X,J){M();let V=J.attributes,Y=X.getAttributes(),H=O.defaultAttributeValues;for(let Q in Y){let tt=Y[Q];if(tt.location>=0){let pt=V[Q];if(pt===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),pt!==void 0){let ft=pt.normalized,Mt=pt.itemSize,Zt=t.get(pt);if(Zt===void 0)continue;let de=Zt.buffer,te=Zt.type,j=Zt.bytesPerElement,ot=te===i.INT||te===i.UNSIGNED_INT||pt.gpuType===Na;if(pt.isInterleavedBufferAttribute){let nt=pt.data,Pt=nt.stride,Bt=pt.offset;if(nt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<tt.locationSize;Lt++)p(tt.location+Lt,nt.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Lt=0;Lt<tt.locationSize;Lt++)m(tt.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Lt=0;Lt<tt.locationSize;Lt++)b(tt.location+Lt,Mt/tt.locationSize,te,ft,Pt*j,(Bt+Mt/tt.locationSize*Lt)*j,ot)}else{if(pt.isInstancedBufferAttribute){for(let nt=0;nt<tt.locationSize;nt++)p(tt.location+nt,pt.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let nt=0;nt<tt.locationSize;nt++)m(tt.location+nt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let nt=0;nt<tt.locationSize;nt++)b(tt.location+nt,Mt/tt.locationSize,te,ft,Mt*j,Mt/tt.locationSize*nt*j,ot)}}else if(H!==void 0){let ft=H[Q];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(tt.location,ft);break;case 3:i.vertexAttrib3fv(tt.location,ft);break;case 4:i.vertexAttrib4fv(tt.location,ft);break;default:i.vertexAttrib1fv(tt.location,ft)}}}}T()}function C(){w();for(let L in n){let O=n[L];for(let X in O){let J=O[X];for(let V in J){let Y=J[V];for(let H in Y)h(Y[H].object),delete Y[H];delete J[V]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;let O=n[L.id];for(let X in O){let J=O[X];for(let V in J){let Y=J[V];for(let H in Y)h(Y[H].object),delete Y[H];delete J[V]}}delete n[L.id]}function R(L){for(let O in n){let X=n[O];for(let J in X){let V=X[J];if(V[L.id]===void 0)continue;let Y=V[L.id];for(let H in Y)h(Y[H].object),delete Y[H];delete V[L.id]}}}function v(L){for(let O in n){let X=n[O],J=L.isInstancedMesh===!0?L.id:0,V=X[J];if(V!==void 0){for(let Y in V){let H=V[Y];for(let Q in H)h(H[Q].object),delete H[Q];delete V[Y]}delete X[J],Object.keys(X).length===0&&delete n[O]}}}function w(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function zp(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$e&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!v)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:A,maxSamples:C,samples:S}}function kp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let T=r?0:n,b=T*4,A=p.clippingState||null;c.value=A,A=h(x,u,b,f);for(let C=0;C!==b;++C)A[C]=e[C];p.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,x){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=c.value,x!==!0||m===null){let p=f+M*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,A=f;b!==M;++b,A+=4)a.copy(d[b]).applyMatrix4(T,o),a.normal.toArray(m,A),m[A+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var ui=4,Th=[.125,.215,.35,.446,.526,.582],Ri=20,Gp=256,fr=new os,wh=new At,Zl=null,Kl=0,jl=0,Ql=!1,Hp=new I,ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hp}=r;Zl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,Kl,jl),this._renderer.xr.enabled=Ql,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Ln,format:fn,colorSpace:Fs,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wp(r)),this._blurMaterial=Xp(r,t,e),this._ggxMaterial=qp(r,t,e)}return s}_compileMaterial(t){let e=new ie(new Ce,t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,n,s,r){let c=new Be(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(wh),d.toneMapping=An,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ie(new cn,new ni({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,p=!0):(m.color.copy(wh),p=!0);for(let b=0;b<6;b++){let A=b%3;A===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):A===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let C=this._cubeSize;fs(s,A*C,b>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(M,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===oi||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,fr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:x}=this,M=this._sizeLods[n],m=3*M*(n>x-ui?n-x+ui:0),p=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=x-e,fs(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,fr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,fs(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,fr)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=l;let u=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),M=r/x,m=isFinite(r)?1+Math.floor(h*M):Ri;m>Ri&&Ut(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let p=[],T=0;for(let R=0;R<Ri;++R){let v=R/M,w=Math.exp(-v*v/2);p.push(w),R===0?T+=w:R<m&&(T+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=x,u.mipInt.value=b-n;let A=this._sizeLods[s],C=3*A*(s>b-ui?s-b+ui:0),S=4*(this._cubeSize-A);fs(e,C,S,3*A,2*A),c.setRenderTarget(e),c.render(d,fr)}};function Wp(i){let t=[],e=[],n=[],s=i,r=i-ui+1+Th.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ui?c=Th[a-i+ui-1]:a===0&&(c=0),e.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,M=3,m=2,p=1,T=new Float32Array(M*x*f),b=new Float32Array(m*x*f),A=new Float32Array(p*x*f);for(let S=0;S<f;S++){let R=S%3*2/3-1,v=S>2?0:-1,w=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];T.set(w,M*x*S),b.set(u,m*x*S);let P=[S,S,S,S,S,S];A.set(P,p*x*S)}let C=new Ce;C.setAttribute("position",new We(T,M)),C.setAttribute("uv",new We(b,m)),C.setAttribute("faceIndex",new We(A,p)),n.push(new ie(C,null)),s>ui&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ch(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qp(i,t,e){return new qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Xp(i,t,e){let n=new Float32Array(Ri),s=new I(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:To(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Rh(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ih(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}var bo=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Pn});r.uniforms.tEquirect.value=e;let a=new ie(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=ze),new Ra(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Yp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Da||f===Fa)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let M=new bo(x.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,x=f===Da||f===Fa,M=f===oi||f===wi;if(x||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ps(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return x&&T&&T.height>0||M&&T&&c(T)?(n===null&&(n=new ps(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Da?u.mapping=oi:f===Fa&&(u.mapping=wi),u}function c(u){let f=0,x=6;for(let M=0;M<x;M++)u[M]!==void 0&&f++;return f===x}function l(u){let f=u.target;f.removeEventListener("dispose",l);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Jp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ai("WebGLRenderer: "+n+" extension not supported."),s}}}function Zp(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,x=d.attributes.position,M=0;if(x===void 0)return;if(f!==null){let T=f.array;M=f.version;for(let b=0,A=T.length;b<A;b+=3){let C=T[b+0],S=T[b+1],R=T[b+2];u.push(C,S,S,R,R,C)}}else{let T=x.array;M=x.version;for(let b=0,A=T.length/3-1;b<A;b+=3){let C=b+0,S=b+1,R=b+2;u.push(C,S,S,R,R,C)}}let m=new(x.count>=65535?ks:Vs)(u,1);m.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Kp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function jp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qp(i,t,e){let n=new WeakMap,s=new ye;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],b=0;f===!0&&(b=1),x===!0&&(b=2),M===!0&&(b=3);let A=o.attributes.position.count*b,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let S=new Float32Array(A*C*4*d),R=new Os(S,A,C,d);R.type=un,R.needsUpdate=!0;let v=b*4;for(let P=0;P<d;P++){let L=m[P],O=p[P],X=T[P],J=A*C*4*P;for(let V=0;V<L.count;V++){let Y=V*v;f===!0&&(s.fromBufferAttribute(L,V),S[J+Y+0]=s.x,S[J+Y+1]=s.y,S[J+Y+2]=s.z,S[J+Y+3]=0),x===!0&&(s.fromBufferAttribute(O,V),S[J+Y+4]=s.x,S[J+Y+5]=s.y,S[J+Y+6]=s.z,S[J+Y+7]=0),M===!0&&(s.fromBufferAttribute(X,V),S[J+Y+8]=s.x,S[J+Y+9]=s.y,S[J+Y+10]=s.z,S[J+Y+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new St(A,C)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<l.length;M++)f+=l[M];let x=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function $p(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var tm={[_l]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[er]:"ACES_FILMIC_TONE_MAPPING",[wl]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[Tl]:"CUSTOM_TONE_MAPPING"};function em(i,t,e,n,s,r){let a=new nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Wn(t,e):void 0}),o=new nn(t,e,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new Ce;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let l=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ie(c,l),d=new os(-1,1,1,-1,0,1),u=null,f=null,x=!1,M,m=null,p=[],T=!1;this.setSize=function(b,A){a.setSize(b,A),o.setSize(b,A);for(let C=0;C<p.length;C++){let S=p[C];S.setSize&&S.setSize(b,A)}},this.setEffects=function(b){p=b,T=p.length>0&&p[0].isRenderPass===!0;let A=a.width,C=a.height;for(let S=0;S<p.length;S++){let R=p[S];R.setSize&&R.setSize(A,C)}},this.begin=function(b,A){if(x||b.toneMapping===An&&p.length===0)return!1;if(m=A,A!==null){let C=A.width,S=A.height;(a.width!==C||a.height!==S)&&this.setSize(C,S)}return T===!1&&b.setRenderTarget(a),M=b.toneMapping,b.toneMapping=An,!0},this.hasRenderPass=function(){return T},this.end=function(b,A){b.toneMapping=M,x=!0;let C=a,S=o;for(let R=0;R<p.length;R++){let v=p[R];if(v.enabled!==!1&&(v.render(b,S,C,A),v.needsSwap!==!1)){let w=C;C=S,S=w}}if(u!==b.outputColorSpace||f!==b.toneMapping){u=b.outputColorSpace,f=b.toneMapping,l.defines={},$t.getTransfer(u)===le&&(l.defines.SRGB_TRANSFER="");let R=tm[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=C.texture,b.setRenderTarget(m),b.render(h,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Kh=new Je,ec=new Wn(1,1),jh=new Os,Qh=new aa,$h=new qs,Ph=[],Lh=[],Dh=new Float32Array(16),Fh=new Float32Array(9),Uh=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wo(i,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),Le(e,n)}}function om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),Le(e,n)}}function lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Dh.set(n),i.uniformMatrix4fv(this.addr,!1,Dh),Le(e,n)}}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function dm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=e.isReversedDepthBuffer()?Mo:Ao,r=ec):r=Kh,e.setTexture2D(t||r,s)}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$h,s)}function Am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jh,s)}function Mm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Am}}function Sm(i,t){i.uniform1fv(this.addr,t)}function _m(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function bm(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Em(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Tm(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wm(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rm(i,t){i.uniform1iv(this.addr,t)}function Im(i,t){i.uniform2iv(this.addr,t)}function Pm(i,t){i.uniform3iv(this.addr,t)}function Lm(i,t){i.uniform4iv(this.addr,t)}function Dm(i,t){i.uniform1uiv(this.addr,t)}function Fm(i,t){i.uniform2uiv(this.addr,t)}function Um(i,t){i.uniform3uiv(this.addr,t)}function Nm(i,t){i.uniform4uiv(this.addr,t)}function Om(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ec:a=Kh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Bm(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qh,r[a])}function zm(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$h,r[a])}function Vm(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jh,r[a])}function km(i){switch(i){case 5126:return Sm;case 35664:return _m;case 35665:return bm;case 35666:return Em;case 35674:return Tm;case 35675:return wm;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Fm;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Vm}}var nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mm(e.type)}},ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=km(e.type)}},sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function Nh(i,t){i.seq.push(t),i.map[t.id]=t}function Gm(i,t,e){let n=i.name,s=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),a=$l.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Nh(e,l===void 0?new nc(o,i,t):new ic(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new sc(o),Nh(e,d)),e=d}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Gm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Oh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hm=37297,Wm=0;function qm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Bh=new Ht;function Xm(i){$t._getMatrix(Bh,$t.workingColorSpace,i);let t=`mat3( ${Bh.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Us:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qm(i.getShaderSource(t),o)}else return r}function Ym(i,t){let e=Xm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Jm={[_l]:"Linear",[bl]:"Reinhard",[El]:"Cineon",[er]:"ACESFilmic",[wl]:"AgX",[Cl]:"Neutral",[Tl]:"Custom"};function Zm(i,t){let e=Jm[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _o=new I;function Km(){$t.getLuminanceCoefficients(_o);let i=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function Qm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pr(i){return i!==""}function Vh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(tg,ng)}var eg=new Map;function ng(i,t){let e=Xt[t];if(e===void 0){let n=eg.get(t);if(n!==void 0)e=Xt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return rc(e)}var ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(ig,sg)}function sg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var rg={[tr]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function ag(i){return rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var og={[oi]:"ENVMAP_TYPE_CUBE",[wi]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE_UV"};function lg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":og[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var cg={[wi]:"ENVMAP_MODE_REFRACTION"};function hg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ug={[La]:"ENVMAP_BLENDING_MULTIPLY",[lh]:"ENVMAP_BLENDING_MIX",[ch]:"ENVMAP_BLENDING_ADD"};function fg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ug[i.combine]||"ENVMAP_BLENDING_NONE"}function dg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ag(e),l=lg(e),h=hg(e),d=fg(e),u=dg(e),f=jm(e),x=Qm(r),M=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Xt.tonemapping_pars_fragment:"",e.toneMapping!==An?Zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),Km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=rc(a),a=Vh(a,e),a=kh(a,e),o=rc(o),o=Vh(o,e),o=kh(o,e),a=Gh(a),o=Gh(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=T+m+a,A=T+p+o,C=Oh(s,s.VERTEX_SHADER,b),S=Oh(s,s.FRAGMENT_SHADER,A);s.attachShader(M,C),s.attachShader(M,S),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(M)||"",X=s.getShaderInfoLog(C)||"",J=s.getShaderInfoLog(S)||"",V=O.trim(),Y=X.trim(),H=J.trim(),Q=!0,tt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,C,S);else{let pt=zh(s,C,"vertex"),ft=zh(s,S,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+pt+`
`+ft)}else V!==""?Ut("WebGLProgram: Program Info Log:",V):(Y===""||H==="")&&(tt=!1);tt&&(L.diagnostics={runnable:Q,programLog:V,vertexShader:{log:Y,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(C),s.deleteShader(S),v=new ds(s,M),w=$m(s,M)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,Hm)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=S,this}var mg=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oc(t),e.set(t,n)),n}},oc=class{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}};function gg(i){return i===hi||i===lr||i===cr}function xg(i,t,e,n,s,r){let a=new Bs,o=new ac,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function M(v,w,P,L,O,X){let J=L.fog,V=O.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=t.get(v.envMap||Y,H),tt=Q&&Q.mapping===nr?Q.image.height:null,pt=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ut("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ft=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Mt=ft!==void 0?ft.length:0,Zt=0;V.morphAttributes.position!==void 0&&(Zt=1),V.morphAttributes.normal!==void 0&&(Zt=2),V.morphAttributes.color!==void 0&&(Zt=3);let de,te,j,ot;if(pt){let _t=Fn[pt];de=_t.vertexShader,te=_t.fragmentShader}else{de=v.vertexShader,te=v.fragmentShader;let _t=o.getVertexShaderStage(v),me=o.getFragmentShaderStage(v);o.update(v,_t,me),j=_t.id,ot=me.id}let nt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,pe=!!v.map,Kt=!!v.matcap,se=!!Q,Qt=!!v.aoMap,qt=!!v.lightMap,Me=!!v.bumpMap&&v.wireframe===!1,Ae=!!v.normalMap,_e=!!v.displacementMap,be=!!v.emissiveMap,fe=!!v.metalnessMap,Se=!!v.roughnessMap,D=v.anisotropy>0,Ee=v.clearcoat>0,ee=v.dispersion>0,E=v.iridescence>0,g=v.sheen>0,N=v.transmission>0,k=D&&!!v.anisotropyMap,W=Ee&&!!v.clearcoatMap,et=Ee&&!!v.clearcoatNormalMap,rt=Ee&&!!v.clearcoatRoughnessMap,q=E&&!!v.iridescenceMap,K=E&&!!v.iridescenceThicknessMap,ct=g&&!!v.sheenColorMap,Ct=g&&!!v.sheenRoughnessMap,dt=!!v.specularMap,lt=!!v.specularColorMap,It=!!v.specularIntensityMap,Dt=N&&!!v.transmissionMap,Nt=N&&!!v.thicknessMap,_=!!v.gradientMap,ht=!!v.alphaMap,Z=v.alphaTest>0,ut=!!v.alphaHash,xt=!!v.extensions,$=An;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&($=i.toneMapping);let Tt={shaderID:pt,shaderType:v.type,shaderName:v.name,vertexShader:de,fragmentShader:te,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:pe,matcap:Kt,envMap:se,envMapMode:se&&Q.mapping,envMapCubeUVHeight:tt,aoMap:Qt,lightMap:qt,bumpMap:Me,normalMap:Ae,displacementMap:_e,emissiveMap:be,normalMapObjectSpace:Ae&&v.normalMapType===fh,normalMapTangentSpace:Ae&&v.normalMapType===hr,packedNormalMap:Ae&&v.normalMapType===hr&&gg(v.normalMap.format),metalnessMap:fe,roughnessMap:Se,anisotropy:D,anisotropyMap:k,clearcoat:Ee,clearcoatMap:W,clearcoatNormalMap:et,clearcoatRoughnessMap:rt,dispersion:ee,iridescence:E,iridescenceMap:q,iridescenceThicknessMap:K,sheen:g,sheenColorMap:ct,sheenRoughnessMap:Ct,specularMap:dt,specularColorMap:lt,specularIntensityMap:It,transmission:N,transmissionMap:Dt,thicknessMap:Nt,gradientMap:_,opaque:v.transparent===!1&&v.blending===Mi&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:Z,alphaHash:ut,combine:v.combine,mapUv:pe&&x(v.map.channel),aoMapUv:Qt&&x(v.aoMap.channel),lightMapUv:qt&&x(v.lightMap.channel),bumpMapUv:Me&&x(v.bumpMap.channel),normalMapUv:Ae&&x(v.normalMap.channel),displacementMapUv:_e&&x(v.displacementMap.channel),emissiveMapUv:be&&x(v.emissiveMap.channel),metalnessMapUv:fe&&x(v.metalnessMap.channel),roughnessMapUv:Se&&x(v.roughnessMap.channel),anisotropyMapUv:k&&x(v.anisotropyMap.channel),clearcoatMapUv:W&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(v.sheenRoughnessMap.channel),specularMapUv:dt&&x(v.specularMap.channel),specularColorMapUv:lt&&x(v.specularColorMap.channel),specularIntensityMapUv:It&&x(v.specularIntensityMap.channel),transmissionMapUv:Dt&&x(v.transmissionMap.channel),thicknessMapUv:Nt&&x(v.thicknessMap.channel),alphaMapUv:ht&&x(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ae||D),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(pe||ht),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&Ae===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Zt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:pe&&v.map.isVideoTexture===!0&&$t.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:be&&v.emissiveMap.isVideoTexture===!0&&$t.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ze,flipSided:v.side===Ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&v.extensions.multiDraw===!0||Lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(w,v),T(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function T(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let w=f[v.type],P;if(w){let L=Fn[w];P=bh.clone(L.uniforms)}else P=v.uniforms;return P}function A(v,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new pg(i,w,v,s),l.push(P),h.set(w,P)),P}function C(v){if(--v.usedTimes===0){let w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:b,acquireProgram:A,releaseProgram:C,releaseShaderCache:S,programs:l,dispose:R}}function vg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function yg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,M,m,p){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:f,material:x,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[t]=T):(T.id=u.id,T.object=u,T.geometry=f,T.material=x,T.materialVariant=a(u),T.groupOrder=M,T.renderOrder=u.renderOrder,T.z=m,T.group=p),t++,T}function c(u,f,x,M,m,p){let T=o(u,f,x,M,m,p);x.transmission>0?n.push(T):x.transparent===!0?s.push(T):e.push(T)}function l(u,f,x,M,m,p){let T=o(u,f,x,M,m,p);x.transmission>0?n.unshift(T):x.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,f,x){e.length>1&&e.sort(u||yg),n.length>1&&n.sort(f||Wh),s.length>1&&s.sort(f||Wh),x&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let u=t,f=i.length;u<f;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Ag(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new At};break;case"SpotLight":e={position:new I,direction:new I,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _g=0;function bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Eg(i){let t=new Mg,e=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new re,a=new re;function o(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,x=0,M=0,m=0,p=0,T=0,b=0,A=0,C=0,S=0,R=0;l.sort(bg);for(let w=0,P=l.length;w<P;w++){let L=l[w],O=L.color,X=L.intensity,J=L.distance,V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hi?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*X,d+=O.g*X,u+=O.b*X;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],X);R++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let H=L.shadow,Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=Y,f++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(X),Y.distance=J,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[M]=Y;let H=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,H.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[M]=H.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=V,A++}M++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(O).multiplyScalar(X),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Y,m++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let H=L.shadow,Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,n.pointShadow[x]=Q,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=L.shadow.matrix,b++}n.point[x]=Y,x++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(X),Y.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let v=n.hash;(v.directionalLength!==f||v.pointLength!==x||v.spotLength!==M||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==T||v.numPointShadows!==b||v.numSpotShadows!==A||v.numSpotMaps!==C||v.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=A+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,v.directionalLength=f,v.pointLength=x,v.spotLength=M,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=T,v.numPointShadows=b,v.numSpotShadows=A,v.numSpotMaps=C,v.numLightProbes=R,n.version=_g++)}function c(l,h){let d=0,u=0,f=0,x=0,M=0,m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let b=l[p];if(b.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(b.isSpotLight){let A=n.spot[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let A=n.point[u];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let A=n.hemi[M];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),M++}}}return{setup:o,setupView:c,state:n}}function Xh(i){let t=new Eg(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Tg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Xh(i),t.set(s,[o])):r>=a.length?(o=new Xh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
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
}`,Rg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ig=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Yh=new re,dr=new I,tc=new I;function Pg(i,t,e){let n=new es,s=new St,r=new St,a=new ye,o=new ga,c=new xa,l={},h=e.maxTextureSize,d={[Gn]:Ve,[Ve]:Gn,[Ze]:Ze},u=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:wg,fragmentShader:Cg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new Ce;x.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ie(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let p=this.type;this.render=function(S,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Hc&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tr);let w=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Pn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=p!==this.type;X&&R.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(V=>V.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,V=S.length;J<V;J++){let Y=S[J],H=Y.shadow;if(H===void 0){Ut("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Q=H.getFrameExtents();s.multiply(Q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=tt,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===cs){if(Y.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(s.x,s.y,{format:hi,type:Ln,minFilter:ze,magFilter:ze,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new Wn(s.x,s.y,un),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=En,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne}else Y.isPointLight?(H.map=new bo(s.x),H.map.depthTexture=new la(s.x,Mn)):(H.map=new nn(s.x,s.y),H.map.depthTexture=new Wn(s.x,s.y,Mn)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=En,this.type===tr?(H.map.depthTexture.compareFunction=tt?Mo:Ao,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne);H.camera.updateProjectionMatrix()}let pt=H.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<pt;ft++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(H.map),i.clear());let Mt=H.getViewport(ft);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),O.viewport(a)}if(Y.isPointLight){let Mt=H.camera,Zt=H.matrix,de=Y.distance||Mt.far;de!==Mt.far&&(Mt.far=de,Mt.updateProjectionMatrix()),dr.setFromMatrixPosition(Y.matrixWorld),Mt.position.copy(dr),tc.copy(Mt.position),tc.add(Rg[ft]),Mt.up.copy(Ig[ft]),Mt.lookAt(tc),Mt.updateMatrixWorld(),Zt.makeTranslation(-dr.x,-dr.y,-dr.z),Yh.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Yh,Mt.coordinateSystem,Mt.reversedDepth)}else H.updateMatrices(Y);n=H.getFrustum(),A(R,v,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===cs&&T(H,v),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,P,L)};function T(S,R){let v=t.update(M);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new nn(s.x,s.y,{format:hi,type:Ln})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,M,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,v,f,M,null)}function b(S,R,v,w){let P=null,L=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)P=L;else if(P=v.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=P.uuid,X=R.uuid,J=l[O];J===void 0&&(J={},l[O]=J);let V=J[X];V===void 0&&(V=P.clone(),J[X]=V,R.addEventListener("dispose",C)),P=V}if(P.visible=R.visible,P.wireframe=R.wireframe,w===cs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=v}return P}function A(S,R,v,w,P){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===cs)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let X=t.update(S),J=S.material;if(Array.isArray(J)){let V=X.groups;for(let Y=0,H=V.length;Y<H;Y++){let Q=V[Y],tt=J[Q.materialIndex];if(tt&&tt.visible){let pt=b(S,tt,w,P);S.onBeforeShadow(i,S,R,v,X,pt,Q),i.renderBufferDirect(v,null,X,pt,S,Q),S.onAfterShadow(i,S,R,v,X,pt,Q)}}}else if(J.visible){let V=b(S,J,w,P);S.onBeforeShadow(i,S,R,v,X,V,null),i.renderBufferDirect(v,null,X,V,S,null),S.onAfterShadow(i,S,R,v,X,V,null)}}let O=S.children;for(let X=0,J=O.length;X<J;X++)A(O[X],R,v,w,P)}function C(S){S.target.removeEventListener("dispose",C);for(let v in l){let w=l[v],P=S.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function Lg(i,t){function e(){let _=!1,ht=new ye,Z=null,ut=new ye(0,0,0,0);return{setMask:function(xt){Z!==xt&&!_&&(i.colorMask(xt,xt,xt,xt),Z=xt)},setLocked:function(xt){_=xt},setClear:function(xt,$,Tt,_t,me){me===!0&&(xt*=_t,$*=_t,Tt*=_t),ht.set(xt,$,Tt,_t),ut.equals(ht)===!1&&(i.clearColor(xt,$,Tt,_t),ut.copy(ht))},reset:function(){_=!1,Z=null,ut.set(-1,0,0,0)}}}function n(){let _=!1,ht=!1,Z=null,ut=null,xt=null;return{setReversed:function($){if(ht!==$){let Tt=t.get("EXT_clip_control");$?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ht=$;let _t=xt;xt=null,this.setClear(_t)}},getReversed:function(){return ht},setTest:function($){$?nt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function($){Z!==$&&!_&&(i.depthMask($),Z=$)},setFunc:function($){if(ht&&($=Sh[$]),ut!==$){switch($){case Jr:i.depthFunc(i.NEVER);break;case Zr:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case $r:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=$}},setLocked:function($){_=$},setClear:function($){xt!==$&&(xt=$,ht&&($=1-$),i.clearDepth($))},reset:function(){_=!1,Z=null,ut=null,xt=null,ht=!1}}}function s(){let _=!1,ht=null,Z=null,ut=null,xt=null,$=null,Tt=null,_t=null,me=null;return{setTest:function(he){_||(he?nt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(he){ht!==he&&!_&&(i.stencilMask(he),ht=he)},setFunc:function(he,rn,an){(Z!==he||ut!==rn||xt!==an)&&(i.stencilFunc(he,rn,an),Z=he,ut=rn,xt=an)},setOp:function(he,rn,an){($!==he||Tt!==rn||_t!==an)&&(i.stencilOp(he,rn,an),$=he,Tt=rn,_t=an)},setLocked:function(he){_=he},setClear:function(he){me!==he&&(i.clearStencil(he),me=he)},reset:function(){_=!1,ht=null,Z=null,ut=null,xt=null,$=null,Tt=null,_t=null,me=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,x=[],M=null,m=!1,p=null,T=null,b=null,A=null,C=null,S=null,R=null,v=new At(0,0,0),w=0,P=!1,L=null,O=null,X=null,J=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(tt)[1]),H=Q>=1):tt.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),H=Q>=2);let pt=null,ft={},Mt=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),de=new ye().fromArray(Mt),te=new ye().fromArray(Zt);function j(_,ht,Z,ut){let xt=new Uint8Array(4),$=i.createTexture();i.bindTexture(_,$),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<Z;Tt++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ht+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return $}let ot={};ot[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Si),Me(!1),Ae(yl),nt(i.CULL_FACE),Qt(Pn);function nt(_){h[_]!==!0&&(i.enable(_),h[_]=!0)}function Pt(_){h[_]!==!1&&(i.disable(_),h[_]=!1)}function Bt(_,ht){return u[_]!==ht?(i.bindFramebuffer(_,ht),u[_]=ht,_===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),_===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Lt(_,ht){let Z=x,ut=!1;if(_){Z=f.get(ht),Z===void 0&&(Z=[],f.set(ht,Z));let xt=_.textures;if(Z.length!==xt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Tt=xt.length;$<Tt;$++)Z[$]=i.COLOR_ATTACHMENT0+$;Z.length=xt.length,ut=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ut=!0);ut&&i.drawBuffers(Z)}function pe(_){return M!==_?(i.useProgram(_),M=_,!0):!1}let Kt={[ei]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Xc]:i.FUNC_REVERSE_SUBTRACT};Kt[Yc]=i.MIN,Kt[Jc]=i.MAX;let se={[Zc]:i.ZERO,[Kc]:i.ONE,[jc]:i.SRC_COLOR,[Xr]:i.SRC_ALPHA,[ih]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Qc]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[nh]:i.ONE_MINUS_DST_COLOR,[th]:i.ONE_MINUS_DST_ALPHA,[sh]:i.CONSTANT_COLOR,[rh]:i.ONE_MINUS_CONSTANT_COLOR,[ah]:i.CONSTANT_ALPHA,[oh]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(_,ht,Z,ut,xt,$,Tt,_t,me,he){if(_===Pn){m===!0&&(Pt(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),_!==Wc){if(_!==p||he!==P){if((T!==ei||C!==ei)&&(i.blendEquation(i.FUNC_ADD),T=ei,C=ei),he)switch(_){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFunc(i.ONE,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",_);break}else switch(_){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ml:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",_);break}b=null,A=null,S=null,R=null,v.set(0,0,0),w=0,p=_,P=he}return}xt=xt||ht,$=$||Z,Tt=Tt||ut,(ht!==T||xt!==C)&&(i.blendEquationSeparate(Kt[ht],Kt[xt]),T=ht,C=xt),(Z!==b||ut!==A||$!==S||Tt!==R)&&(i.blendFuncSeparate(se[Z],se[ut],se[$],se[Tt]),b=Z,A=ut,S=$,R=Tt),(_t.equals(v)===!1||me!==w)&&(i.blendColor(_t.r,_t.g,_t.b,me),v.copy(_t),w=me),p=_,P=!1}function qt(_,ht){_.side===Ze?Pt(i.CULL_FACE):nt(i.CULL_FACE);let Z=_.side===Ve;ht&&(Z=!Z),Me(Z),_.blending===Mi&&_.transparent===!1?Qt(Pn):Qt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),a.setFunc(_.depthFunc),a.setTest(_.depthTest),a.setMask(_.depthWrite),r.setMask(_.colorWrite);let ut=_.stencilWrite;o.setTest(ut),ut&&(o.setMask(_.stencilWriteMask),o.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),o.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),be(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(_){L!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),L=_)}function Ae(_){_!==kc?(nt(i.CULL_FACE),_!==O&&(_===yl?i.cullFace(i.BACK):_===Gc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),O=_}function _e(_){_!==X&&(H&&i.lineWidth(_),X=_)}function be(_,ht,Z){_?(nt(i.POLYGON_OFFSET_FILL),(J!==ht||V!==Z)&&(J=ht,V=Z,a.getReversed()&&(ht=-ht),i.polygonOffset(ht,Z))):Pt(i.POLYGON_OFFSET_FILL)}function fe(_){_?nt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Se(_){_===void 0&&(_=i.TEXTURE0+Y-1),pt!==_&&(i.activeTexture(_),pt=_)}function D(_,ht,Z){Z===void 0&&(pt===null?Z=i.TEXTURE0+Y-1:Z=pt);let ut=ft[Z];ut===void 0&&(ut={type:void 0,texture:void 0},ft[Z]=ut),(ut.type!==_||ut.texture!==ht)&&(pt!==Z&&(i.activeTexture(Z),pt=Z),i.bindTexture(_,ht||ot[_]),ut.type=_,ut.texture=ht)}function Ee(){let _=ft[pt];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function g(){try{i.texSubImage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function N(){try{i.texSubImage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function et(){try{i.texStorage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function rt(){try{i.texStorage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function q(){try{i.texImage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function K(){try{i.texImage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function ct(_){return d[_]!==void 0?d[_]:i.getParameter(_)}function Ct(_,ht){d[_]!==ht&&(i.pixelStorei(_,ht),d[_]=ht)}function dt(_){de.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),de.copy(_))}function lt(_){te.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),te.copy(_))}function It(_,ht){let Z=l.get(ht);Z===void 0&&(Z=new WeakMap,l.set(ht,Z));let ut=Z.get(_);ut===void 0&&(ut=i.getUniformBlockIndex(ht,_.name),Z.set(_,ut))}function Dt(_,ht){let ut=l.get(ht).get(_);c.get(ht)!==ut&&(i.uniformBlockBinding(ht,ut,_.__bindingPointIndex),c.set(ht,ut))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},pt=null,ft={},u={},f=new WeakMap,x=[],M=null,m=!1,p=null,T=null,b=null,A=null,C=null,S=null,R=null,v=new At(0,0,0),w=0,P=!1,L=null,O=null,X=null,J=null,V=null,de.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Pt,bindFramebuffer:Bt,drawBuffers:Lt,useProgram:pe,setBlending:Qt,setMaterial:qt,setFlipSided:Me,setCullFace:Ae,setLineWidth:_e,setPolygonOffset:be,setScissorTest:fe,activeTexture:Se,bindTexture:D,unbindTexture:Ee,compressedTexImage2D:ee,compressedTexImage3D:E,texImage2D:q,texImage3D:K,pixelStorei:Ct,getParameter:ct,updateUBOMapping:It,uniformBlockBinding:Dt,texStorage2D:et,texStorage3D:rt,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:k,compressedTexSubImage3D:W,scissor:dt,viewport:lt,reset:Nt}}function Dg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap,d=new Set,u,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,g){return x?new OffscreenCanvas(E,g):Ns("canvas")}function m(E,g,N){let k=1,W=ee(E);if((W.width>N||W.height>N)&&(k=N/Math.max(W.width,W.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let et=Math.floor(k*W.width),rt=Math.floor(k*W.height);u===void 0&&(u=M(et,rt));let q=g?M(et,rt):u;return q.width=et,q.height=rt,q.getContext("2d").drawImage(E,0,0,et,rt),Ut("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+et+"x"+rt+")."),q}else return"data"in E&&Ut("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),E;return E}function p(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(E,g,N,k,W,et=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let rt;k&&(rt=t.get("EXT_texture_norm16"),rt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=g;if(g===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8),N===i.UNSIGNED_SHORT&&rt&&(q=rt.R16_EXT),N===i.SHORT&&rt&&(q=rt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),g===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8),N===i.UNSIGNED_SHORT&&rt&&(q=rt.RG16_EXT),N===i.SHORT&&rt&&(q=rt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_SHORT&&rt&&(q=rt.RGB16_EXT),N===i.SHORT&&rt&&(q=rt.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),g===i.RGBA){let K=et?Us:$t.getTransfer(W);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=K===le?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&rt&&(q=rt.RGBA16_EXT),N===i.SHORT&&rt&&(q=rt.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function C(E,g){let N;return E?g===null||g===Mn||g===us?N=i.DEPTH24_STENCIL8:g===un?N=i.DEPTH32F_STENCIL8:g===hs&&(N=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Mn||g===us?N=i.DEPTH_COMPONENT24:g===un?N=i.DEPTH_COMPONENT32F:g===hs&&(N=i.DEPTH_COMPONENT16),N}function S(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ne&&E.minFilter!==ze?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function R(E){let g=E.target;g.removeEventListener("dispose",R),w(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function v(E){let g=E.target;g.removeEventListener("dispose",v),L(g)}function w(E){let g=n.get(E);if(g.__webglInit===void 0)return;let N=E.source,k=f.get(N);if(k){let W=k[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(E),Object.keys(k).length===0&&f.delete(N)}n.remove(E)}function P(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let N=E.source,k=f.get(N);delete k[g.__cacheKey],a.memory.textures--}function L(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let W=0;W<g.__webglFramebuffer[k].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[k][W]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=E.textures;for(let k=0,W=N.length;k<W;k++){let et=n.get(N[k]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(N[k])}n.remove(E)}let O=0;function X(){O=0}function J(){return O}function V(E){O=E}function Y(){let E=O;return E>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),O+=1,E}function H(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function Q(E,g){let N=n.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){let k=E.image;if(k===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(N,E,g);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function tt(E,g){let N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Pt(N,E,g);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function pt(E,g){let N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Pt(N,E,g);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function ft(E,g){let N=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){Bt(N,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}let Mt={[_i]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},Zt={[Ne]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},de={[dh]:i.NEVER,[vh]:i.ALWAYS,[ph]:i.LESS,[Ao]:i.LEQUAL,[mh]:i.EQUAL,[Mo]:i.GEQUAL,[gh]:i.GREATER,[xh]:i.NOTEQUAL};function te(E,g){if(g.type===un&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===ze||g.magFilter===Ua||g.magFilter===ir||g.magFilter===li||g.minFilter===ze||g.minFilter===Ua||g.minFilter===ir||g.minFilter===li)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Mt[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Mt[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Mt[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Zt[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Zt[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ne||g.minFilter!==ir&&g.minFilter!==li||g.type===un&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function j(E,g){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",R));let k=g.source,W=f.get(k);W===void 0&&(W={},f.set(k,W));let et=H(g);if(et!==E.__cacheKey){W[et]===void 0&&(W[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),W[et].usedTimes++;let rt=W[E.__cacheKey];rt!==void 0&&(W[E.__cacheKey].usedTimes--,rt.usedTimes===0&&P(g)),E.__cacheKey=et,E.__webglTexture=W[et].texture}return N}function ot(E,g,N){return Math.floor(Math.floor(E/N)/g)}function nt(E,g,N,k){let et=E.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,k,g.data);else{et.sort((Ct,dt)=>Ct.start-dt.start);let rt=0;for(let Ct=1;Ct<et.length;Ct++){let dt=et[rt],lt=et[Ct],It=dt.start+dt.count,Dt=ot(lt.start,g.width,4),Nt=ot(dt.start,g.width,4);lt.start<=It+1&&Dt===Nt&&ot(lt.start+lt.count-1,g.width,4)===Dt?dt.count=Math.max(dt.count,lt.start+lt.count-dt.start):(++rt,et[rt]=lt)}et.length=rt+1;let q=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ct=0,dt=et.length;Ct<dt;Ct++){let lt=et[Ct],It=Math.floor(lt.start/4),Dt=Math.ceil(lt.count/4),Nt=It%g.width,_=Math.floor(It/g.width),ht=Dt,Z=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,_),e.texSubImage2D(i.TEXTURE_2D,0,Nt,_,ht,Z,N,k,g.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function Pt(E,g,N){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);let W=j(E,g),et=g.source;e.bindTexture(k,E.__webglTexture,i.TEXTURE0+N);let rt=n.get(et);if(et.version!==rt.__version||W===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Z=$t.getPrimaries($t.workingColorSpace),ut=g.colorSpace===Xn?null:$t.getPrimaries(g.colorSpace),xt=g.colorSpace===Xn||Z===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let K=m(g.image,!1,s.maxTextureSize);K=Ee(g,K);let ct=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type),dt=A(g.internalFormat,ct,Ct,g.normalized,g.colorSpace,g.isVideoTexture);te(k,g);let lt,It=g.mipmaps,Dt=g.isVideoTexture!==!0,Nt=rt.__version===void 0||W===!0,_=et.dataReady,ht=S(g,K);if(g.isDepthTexture)dt=C(g.format===ci,g.type),Nt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,dt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,dt,K.width,K.height,0,ct,Ct,null));else if(g.isDataTexture)if(It.length>0){Dt&&Nt&&e.texStorage2D(i.TEXTURE_2D,ht,dt,It[0].width,It[0].height);for(let Z=0,ut=It.length;Z<ut;Z++)lt=It[Z],Dt?_&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,lt.width,lt.height,ct,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,Z,dt,lt.width,lt.height,0,ct,Ct,lt.data);g.generateMipmaps=!1}else Dt?(Nt&&e.texStorage2D(i.TEXTURE_2D,ht,dt,K.width,K.height),_&&nt(g,K,ct,Ct)):e.texImage2D(i.TEXTURE_2D,0,dt,K.width,K.height,0,ct,Ct,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Dt&&Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,It[0].width,It[0].height,K.depth);for(let Z=0,ut=It.length;Z<ut;Z++)if(lt=It[Z],g.format!==fn)if(ct!==null)if(Dt){if(_)if(g.layerUpdates.size>0){let xt=Hl(lt.width,lt.height,g.format,g.type);for(let $ of g.layerUpdates){let Tt=lt.data.subarray($*xt/lt.data.BYTES_PER_ELEMENT,($+1)*xt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,$,lt.width,lt.height,1,ct,Tt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,K.depth,ct,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,dt,lt.width,lt.height,K.depth,0,lt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?_&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,K.depth,ct,Ct,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,dt,lt.width,lt.height,K.depth,0,ct,Ct,lt.data)}else{Dt&&Nt&&e.texStorage2D(i.TEXTURE_2D,ht,dt,It[0].width,It[0].height);for(let Z=0,ut=It.length;Z<ut;Z++)lt=It[Z],g.format!==fn?ct!==null?Dt?_&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,dt,lt.width,lt.height,0,lt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?_&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,lt.width,lt.height,ct,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,Z,dt,lt.width,lt.height,0,ct,Ct,lt.data)}else if(g.isDataArrayTexture)if(Dt){if(Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,K.width,K.height,K.depth),_)if(g.layerUpdates.size>0){let Z=Hl(K.width,K.height,g.format,g.type);for(let ut of g.layerUpdates){let xt=K.data.subarray(ut*Z/K.data.BYTES_PER_ELEMENT,(ut+1)*Z/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,K.width,K.height,1,ct,Ct,xt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ct,Ct,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,K.width,K.height,K.depth,0,ct,Ct,K.data);else if(g.isData3DTexture)Dt?(Nt&&e.texStorage3D(i.TEXTURE_3D,ht,dt,K.width,K.height,K.depth),_&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ct,Ct,K.data)):e.texImage3D(i.TEXTURE_3D,0,dt,K.width,K.height,K.depth,0,ct,Ct,K.data);else if(g.isFramebufferTexture){if(Nt)if(Dt)e.texStorage2D(i.TEXTURE_2D,ht,dt,K.width,K.height);else{let Z=K.width,ut=K.height;for(let xt=0;xt<ht;xt++)e.texImage2D(i.TEXTURE_2D,xt,dt,Z,ut,0,ct,Ct,null),Z>>=1,ut>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),K.parentNode!==Z){Z.appendChild(K),d.add(g),Z.onpaint=ut=>{let xt=ut.changedElements;for(let $ of d)xt.includes($.image)&&($.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let xt=i.RGBA,$=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,$,Tt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Dt&&Nt){let Z=ee(It[0]);e.texStorage2D(i.TEXTURE_2D,ht,dt,Z.width,Z.height)}for(let Z=0,ut=It.length;Z<ut;Z++)lt=It[Z],Dt?_&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ct,Ct,lt):e.texImage2D(i.TEXTURE_2D,Z,dt,ct,Ct,lt);g.generateMipmaps=!1}else if(Dt){if(Nt){let Z=ee(K);e.texStorage2D(i.TEXTURE_2D,ht,dt,Z.width,Z.height)}_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Ct,K)}else e.texImage2D(i.TEXTURE_2D,0,dt,ct,Ct,K);p(g)&&T(k),rt.__version=et.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Bt(E,g,N){if(g.image.length!==6)return;let k=j(E,g),W=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);let et=n.get(W);if(W.version!==et.__version||k===!0){e.activeTexture(i.TEXTURE0+N);let rt=$t.getPrimaries($t.workingColorSpace),q=g.colorSpace===Xn?null:$t.getPrimaries(g.colorSpace),K=g.colorSpace===Xn||rt===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ct=g.isCompressedTexture||g.image[0].isCompressedTexture,Ct=g.image[0]&&g.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!ct&&!Ct?dt[$]=m(g.image[$],!0,s.maxCubemapSize):dt[$]=Ct?g.image[$].image:g.image[$],dt[$]=Ee(g,dt[$]);let lt=dt[0],It=r.convert(g.format,g.colorSpace),Dt=r.convert(g.type),Nt=A(g.internalFormat,It,Dt,g.normalized,g.colorSpace),_=g.isVideoTexture!==!0,ht=et.__version===void 0||k===!0,Z=W.dataReady,ut=S(g,lt);te(i.TEXTURE_CUBE_MAP,g);let xt;if(ct){_&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Nt,lt.width,lt.height);for(let $=0;$<6;$++){xt=dt[$].mipmaps;for(let Tt=0;Tt<xt.length;Tt++){let _t=xt[Tt];g.format!==fn?It!==null?_?Z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt,0,0,_t.width,_t.height,It,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt,Nt,_t.width,_t.height,0,_t.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt,0,0,_t.width,_t.height,It,Dt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt,Nt,_t.width,_t.height,0,It,Dt,_t.data)}}}else{if(xt=g.mipmaps,_&&ht){xt.length>0&&ut++;let $=ee(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Nt,$.width,$.height)}for(let $=0;$<6;$++)if(Ct){_?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,It,Dt,dt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Nt,dt[$].width,dt[$].height,0,It,Dt,dt[$].data);for(let Tt=0;Tt<xt.length;Tt++){let me=xt[Tt].image[$].image;_?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt+1,0,0,me.width,me.height,It,Dt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt+1,Nt,me.width,me.height,0,It,Dt,me.data)}}else{_?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,It,Dt,dt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Nt,It,Dt,dt[$]);for(let Tt=0;Tt<xt.length;Tt++){let _t=xt[Tt];_?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt+1,0,0,It,Dt,_t.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Tt+1,Nt,It,Dt,_t.image[$])}}}p(g)&&T(i.TEXTURE_CUBE_MAP),et.__version=W.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Lt(E,g,N,k,W,et){let rt=r.convert(N.format,N.colorSpace),q=r.convert(N.type),K=A(N.internalFormat,rt,q,N.normalized,N.colorSpace),ct=n.get(g),Ct=n.get(N);if(Ct.__renderTarget=g,!ct.__hasExternalTextures){let dt=Math.max(1,g.width>>et),lt=Math.max(1,g.height>>et);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,et,K,dt,lt,g.depth,0,rt,q,null):e.texImage2D(W,et,K,dt,lt,0,rt,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Se(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,W,Ct.__webglTexture,0,fe(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,W,Ct.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(E,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let k=g.depthTexture,W=k&&k.isDepthTexture?k.type:null,et=C(g.stencilBuffer,W),rt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(g),et,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(g),et,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,et,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,E)}else{let k=g.textures;for(let W=0;W<k.length;W++){let et=k[W],rt=r.convert(et.format,et.colorSpace),q=r.convert(et.type),K=A(et.internalFormat,rt,q,et.normalized,et.colorSpace);Se(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(g),K,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(g),K,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,K,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(E,g,N){let k=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),te(i.TEXTURE_CUBE_MAP,g.depthTexture);let ct=r.convert(g.depthTexture.format),Ct=r.convert(g.depthTexture.type),dt;g.depthTexture.format===En?dt=i.DEPTH_COMPONENT24:g.depthTexture.format===ci&&(dt=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,dt,g.width,g.height,0,ct,Ct,null)}}else Q(g.depthTexture,0);let et=W.__webglTexture,rt=fe(g),q=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,K=g.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===En)Se(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,q,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,K,q,et,0);else if(g.depthTexture.format===ci)Se(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,q,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,K,q,et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(E){let g=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let k=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",W)};k.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=k}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let k=0;k<6;k++)Kt(g.__webglFramebuffer[k],E,k);else{let k=E.texture.mipmaps;k&&k.length>0?Kt(g.__webglFramebuffer[0],E,0):Kt(g.__webglFramebuffer,E,0)}else if(N){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),pe(g.__webglDepthbuffer[k],E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,et)}}else{let k=E.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),pe(g.__webglDepthbuffer,E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(E,g,N){let k=n.get(E);g!==void 0&&Lt(k.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&se(E)}function qt(E){let g=E.texture,N=n.get(E),k=n.get(g);E.addEventListener("dispose",v);let W=E.textures,et=E.isWebGLCubeRenderTarget===!0,rt=W.length>1;if(rt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,a.memory.textures++),et){N.__webglFramebuffer=[];for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[q]=[];for(let K=0;K<g.mipmaps.length;K++)N.__webglFramebuffer[q][K]=i.createFramebuffer()}else N.__webglFramebuffer[q]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let q=0;q<g.mipmaps.length;q++)N.__webglFramebuffer[q]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(rt)for(let q=0,K=W.length;q<K;q++){let ct=n.get(W[q]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Se(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let q=0;q<W.length;q++){let K=W[q];N.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[q]);let ct=r.convert(K.format,K.colorSpace),Ct=r.convert(K.type),dt=A(K.internalFormat,ct,Ct,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),lt=fe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,N.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),te(i.TEXTURE_CUBE_MAP,g);for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Lt(N.__webglFramebuffer[q][K],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else Lt(N.__webglFramebuffer[q],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(g)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let q=0,K=W.length;q<K;q++){let ct=W[q],Ct=n.get(ct),dt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Ct.__webglTexture),te(dt,ct),Lt(N.__webglFramebuffer,E,ct,i.COLOR_ATTACHMENT0+q,dt,0),p(ct)&&T(dt)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,k.__webglTexture),te(q,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Lt(N.__webglFramebuffer[K],E,g,i.COLOR_ATTACHMENT0,q,K);else Lt(N.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,q,0);p(g)&&T(q),e.unbindTexture()}E.depthBuffer&&se(E)}function Me(E){let g=E.textures;for(let N=0,k=g.length;N<k;N++){let W=g[N];if(p(W)){let et=b(E),rt=n.get(W).__webglTexture;e.bindTexture(et,rt),T(et),e.unbindTexture()}}}let Ae=[],_e=[];function be(E){if(E.samples>0){if(Se(E)===!1){let g=E.textures,N=E.width,k=E.height,W=i.COLOR_BUFFER_BIT,et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(E),q=g.length>1;if(q)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let K=E.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ct]);let Ct=n.get(g[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ct,0)}i.blitFramebuffer(0,0,N,k,0,0,N,k,W,i.NEAREST),c===!0&&(Ae.length=0,_e.length=0,Ae.push(i.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ae.push(et),_e.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ct]);let Ct=n.get(g[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function fe(E){return Math.min(s.maxSamples,E.samples)}function Se(E){let g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(E){let g=a.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function Ee(E,g){let N=E.colorSpace,k=E.format,W=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Fs&&N!==Xn&&($t.getTransfer(N)===le?(k!==fn||W!==$e)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",N)),g}function ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=J,this.setTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=tt,this.setTexture3D=pt,this.setTextureCube=ft,this.rebindTextures=Qt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Fg(i,t){function e(n,s=Xn){let r,a=$t.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Pl)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Na)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Fl)return i.ALPHA;if(n===Ul)return i.RGB;if(n===fn)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===za)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Wa||n===qa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Ja||n===Za||n===Ka||n===ja||n===lr||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Ja)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lr)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===vo||n===cr||n===yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qe({vertexShader:Ug,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends Tn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,x=null,M=typeof XRWebGLBinding<"u",m=new lc,p={},T=e.getContextAttributes(),b=null,A=null,C=[],S=[],R=new St,v=null,w=new Be;w.viewport=new ye;let P=new Be;P.viewport=new ye;let L=[w,P],O=new Ia,X=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=C[j];return ot===void 0&&(ot=new $i,C[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=C[j];return ot===void 0&&(ot=new $i,C[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=C[j];return ot===void 0&&(ot=new $i,C[j]=ot),ot.getHandSpace()};function V(j){let ot=S.indexOf(j.inputSource);if(ot===-1)return;let nt=C[ot];nt!==void 0&&(nt.update(j.inputSource,j.frame,l||a),nt.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",H);for(let j=0;j<C.length;j++){let ot=S[j];ot!==null&&(S[j]=null,C[j].disconnect(ot))}X=null,J=null,m.reset();for(let j in p)delete p[j];t.setRenderTarget(b),f=null,u=null,d=null,s=null,A=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",H),T.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Pt=null,Bt=null;T.depth&&(Bt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=T.stencil?ci:En,Pt=T.stencil?us:Mn);let Lt={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new nn(u.textureWidth,u.textureHeight,{format:fn,type:$e,depthTexture:new Wn(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new nn(f.framebufferWidth,f.framebufferHeight,{format:fn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(j){for(let ot=0;ot<j.removed.length;ot++){let nt=j.removed[ot],Pt=S.indexOf(nt);Pt>=0&&(S[Pt]=null,C[Pt].disconnect(nt))}for(let ot=0;ot<j.added.length;ot++){let nt=j.added[ot],Pt=S.indexOf(nt);if(Pt===-1){for(let Lt=0;Lt<C.length;Lt++)if(Lt>=S.length){S.push(nt),Pt=Lt;break}else if(S[Lt]===null){S[Lt]=nt,Pt=Lt;break}if(Pt===-1)break}let Bt=C[Pt];Bt&&Bt.connect(nt)}}let Q=new I,tt=new I;function pt(j,ot,nt){Q.setFromMatrixPosition(ot.matrixWorld),tt.setFromMatrixPosition(nt.matrixWorld);let Pt=Q.distanceTo(tt),Bt=ot.projectionMatrix.elements,Lt=nt.projectionMatrix.elements,pe=Bt[14]/(Bt[10]-1),Kt=Bt[14]/(Bt[10]+1),se=(Bt[9]+1)/Bt[5],Qt=(Bt[9]-1)/Bt[5],qt=(Bt[8]-1)/Bt[0],Me=(Lt[8]+1)/Lt[0],Ae=pe*qt,_e=pe*Me,be=Pt/(-qt+Me),fe=be*-qt;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(fe),j.translateZ(be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Bt[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Se=pe+be,D=Kt+be,Ee=Ae-fe,ee=_e+(Pt-fe),E=se*Kt/D*Se,g=Qt*Kt/D*Se;j.projectionMatrix.makePerspective(Ee,ee,E,g,Se,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ft(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,nt=j.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),O.near=P.near=w.near=ot,O.far=P.far=w.far=nt,(X!==O.near||J!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,J=O.far),O.layers.mask=j.layers.mask|6,w.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let Pt=j.parent,Bt=O.cameras;ft(O,Pt);for(let Lt=0;Lt<Bt.length;Lt++)ft(Bt[Lt],Pt);Bt.length===2?pt(O,w,P):O.projectionMatrix.copy(w.projectionMatrix),Mt(j,O,Pt)};function Mt(j,ot,nt){nt===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(nt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ia*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let Zt=null;function de(j,ot){if(h=ot.getViewerPose(l||a),x=ot,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(A,f.framebuffer),t.setRenderTarget(A));let Pt=!1;nt.length!==O.cameras.length&&(O.cameras.length=0,Pt=!0);for(let Kt=0;Kt<nt.length;Kt++){let se=nt[Kt],Qt=null;if(f!==null)Qt=f.getViewport(se);else{let Me=d.getViewSubImage(u,se);Qt=Me.viewport,Kt===0&&(t.setRenderTargetTextures(A,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(A))}let qt=L[Kt];qt===void 0&&(qt=new Be,qt.layers.enable(Kt),qt.viewport=new ye,L[Kt]=qt),qt.matrix.fromArray(se.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(se.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Kt===0&&(O.matrix.copy(qt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pt===!0&&O.cameras.push(qt)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Kt=d.getDepthInformation(nt[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,s.renderState)}if(Bt&&Bt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Kt=0;Kt<nt.length;Kt++){let se=nt[Kt].camera;if(se){let Qt=p[se];Qt||(Qt=new Xs,p[se]=Qt);let qt=d.getCameraImage(se);Qt.sourceTexture=qt}}}}for(let nt=0;nt<C.length;nt++){let Pt=S[nt],Bt=C[nt];Pt!==null&&Bt!==void 0&&Bt.update(Pt,ot,l||a)}Zt&&Zt(j,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}let te=new Jh;te.setAnimationLoop(de),this.setAnimationLoop=function(j){Zt=j},this.dispose=function(){}}},Og=new re,tu=new Ht;tu.set(-1,0,0,0,1,0,0,0,1);function Bg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,b,A){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),b=T.envMap,A=T.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(A)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,C){let S=C.program;n.uniformBlockBinding(A,S)}function l(A,C){let S=s[A.id];S===void 0&&(m(A),S=h(A),s[A.id]=S,A.addEventListener("dispose",T));let R=C.program;n.updateUBOMapping(A,R);let v=t.render.frame;r[A.id]!==v&&(u(A),r[A.id]=v)}function h(A){let C=d();A.__bindingPointIndex=C;let S=i.createBuffer(),R=A.__size,v=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,S),S}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){let C=s[A.id],S=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let v=0,w=S.length;v<w;v++){let P=S[v];if(Array.isArray(P))for(let L=0,O=P.length;L<O;L++)f(P[L],v,L,R);else f(P,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,C,S,R){if(M(A,C,S,R)===!0){let v=A.__offset,w=A.value;if(Array.isArray(w)){let P=0;for(let L=0;L<w.length;L++){let O=w[L],X=p(O);x(O,A.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,A.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,A.__data)}}function x(A,C,S){typeof A=="number"||typeof A=="boolean"?C[0]=A:A.isMatrix3?(C[0]=A.elements[0],C[1]=A.elements[1],C[2]=A.elements[2],C[3]=0,C[4]=A.elements[3],C[5]=A.elements[4],C[6]=A.elements[5],C[7]=0,C[8]=A.elements[6],C[9]=A.elements[7],C[10]=A.elements[8],C[11]=0):ArrayBuffer.isView(A)?C.set(new A.constructor(A.buffer,A.byteOffset,C.length)):A.toArray(C,S)}function M(A,C,S,R){let v=A.value,w=C+"_"+S;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{let P=R[w];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(A){let C=A.uniforms,S=0,R=16;for(let w=0,P=C.length;w<P;w++){let L=Array.isArray(C[w])?C[w]:[C[w]];for(let O=0,X=L.length;O<X;O++){let J=L[O],V=Array.isArray(J.value)?J.value:[J.value];for(let Y=0,H=V.length;Y<H;Y++){let Q=V[Y],tt=p(Q),pt=S%R,ft=pt%tt.boundary,Mt=pt+ft;S+=ft,Mt!==0&&R-Mt<tt.storage&&(S+=R-Mt),J.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=S,S+=tt.storage}}}let v=S%R;return v>0&&(S+=R-v),A.__size=S,A.__cache={},this}function p(A){let C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(C.boundary=16,C.storage=A.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",A),C}function T(A){let C=A.target;C.removeEventListener("dispose",T);let S=a.indexOf(C.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function b(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}var Vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function kg(){return Dn===null&&(Dn=new Hs(Vg,16,16,hi,Ln),Dn.name="DFG_LUT",Dn.minFilter=ze,Dn.magFilter=ze,Dn.wrapS=bn,Dn.wrapT=bn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var Eo=class{constructor(t={}){let{canvas:e=yh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=$e}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=f,m=new Set([Ga,ka,Va]),p=new Set([$e,Mn,hs,us,Oa,Ba]),T=new Uint32Array(4),b=new Int32Array(4),A=new I,C=null,S=null,R=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,O=null,X=null,J=null,V=null;this._outputColorSpace=He;let Y=0,H=0,Q=null,tt=-1,pt=null,ft=new ye,Mt=new ye,Zt=null,de=new At(0),te=0,j=e.width,ot=e.height,nt=1,Pt=null,Bt=null,Lt=new ye(0,0,j,ot),pe=new ye(0,0,j,ot),Kt=!1,se=new es,Qt=!1,qt=!1,Me=new re,Ae=new I,_e=new ye,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Se(){return Q===null?nt:1}let D=n;function Ee(y,U){return e.getContext(y,U)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",rn,!1),D===null){let U="webgl2";if(D=Ee(U,y),D===null)throw Ee(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Ot("WebGLRenderer: "+y.message),y}let ee,E,g,N,k,W,et,rt,q,K,ct,Ct,dt,lt,It,Dt,Nt,_,ht,Z,ut,xt,$;function Tt(){ee=new Jp(D),ee.init(),ut=new Fg(D,ee),E=new Vp(D,ee,t,ut),g=new Lg(D,ee),E.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),X=D.createFramebuffer(),J=D.createFramebuffer(),V=D.createFramebuffer(),N=new jp(D),k=new vg,W=new Dg(D,ee,g,k,E,ut,N),et=new Yp(P),rt=new tf(D),xt=new Bp(D,rt),q=new Zp(D,rt,N,xt),K=new $p(D,q,rt,xt,N),_=new Qp(D,E,W),It=new kp(k),ct=new xg(P,et,ee,E,xt,It),Ct=new Bg(P,k),dt=new Ag,lt=new Tg(ee),Nt=new Op(P,et,g,K,x,c),Dt=new Pg(P,K,E),$=new zg(D,N,E,g),ht=new zp(D,ee,N),Z=new Kp(D,ee,N),N.programs=ct.programs,P.capabilities=E,P.extensions=ee,P.properties=k,P.renderLists=dt,P.shadowMap=Dt,P.state=g,P.info=N}Tt(),M!==$e&&(w=new em(M,e.width,e.height,o,s,r));let _t=new cc(P,D);this.xr=_t,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(y){y!==void 0&&(nt=y,this.setSize(j,ot,!1))},this.getSize=function(y){return y.set(j,ot)},this.setSize=function(y,U,G=!0){if(_t.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,ot=U,e.width=Math.floor(y*nt),e.height=Math.floor(U*nt),G===!0&&(e.style.width=y+"px",e.style.height=U+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(j*nt,ot*nt).floor()},this.setDrawingBufferSize=function(y,U,G){j=y,ot=U,nt=G,e.width=Math.floor(y*G),e.height=Math.floor(U*G),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(M===$e){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ft)},this.getViewport=function(y){return y.copy(Lt)},this.setViewport=function(y,U,G,B){y.isVector4?Lt.set(y.x,y.y,y.z,y.w):Lt.set(y,U,G,B),g.viewport(ft.copy(Lt).multiplyScalar(nt).round())},this.getScissor=function(y){return y.copy(pe)},this.setScissor=function(y,U,G,B){y.isVector4?pe.set(y.x,y.y,y.z,y.w):pe.set(y,U,G,B),g.scissor(Mt.copy(pe).multiplyScalar(nt).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(y){g.setScissorTest(Kt=y)},this.setOpaqueSort=function(y){Pt=y},this.setTransparentSort=function(y){Bt=y},this.getClearColor=function(y){return y.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,G=!0){let B=0;if(y){let z=!1;if(Q!==null){let mt=Q.texture.format;z=m.has(mt)}if(z){let mt=Q.texture.type,vt=p.has(mt),at=Nt.getClearColor(),bt=Nt.getClearAlpha(),Et=at.r,kt=at.g,Wt=at.b;vt?(T[0]=Et,T[1]=kt,T[2]=Wt,T[3]=bt,D.clearBufferuiv(D.COLOR,0,T)):(b[0]=Et,b[1]=kt,b[2]=Wt,b[3]=bt,D.clearBufferiv(D.COLOR,0,b))}else B|=D.COLOR_BUFFER_BIT}U&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Nt.dispose(),dt.dispose(),lt.dispose(),k.dispose(),et.dispose(),K.dispose(),xt.dispose(),$.dispose(),ct.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",vr),_t.removeEventListener("sessionend",Ss),Un.stop()};function me(y){y.preventDefault(),Bl("WebGLRenderer: Context Lost."),L=!0}function he(){Bl("WebGLRenderer: Context Restored."),L=!1;let y=N.autoReset,U=Dt.enabled,G=Dt.autoUpdate,B=Dt.needsUpdate,z=Dt.type;Tt(),N.autoReset=y,Dt.enabled=U,Dt.autoUpdate=G,Dt.needsUpdate=B,Dt.type=z}function rn(y){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function an(y){let U=y.target;U.removeEventListener("dispose",an),Do(U)}function Do(y){As(y),k.remove(y)}function As(y){let U=k.get(y).programs;U!==void 0&&(U.forEach(function(G){ct.releaseProgram(G)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,G,B,z,mt){U===null&&(U=be);let vt=z.isMesh&&z.matrixWorld.determinantAffine()<0,at=Fe(y,U,G,B,z);g.setMaterial(B,vt);let bt=G.index,Et=1;if(B.wireframe===!0){if(bt=q.getWireframeAttribute(G),bt===void 0)return;Et=2}let kt=G.drawRange,Wt=G.attributes.position,yt=kt.start*Et,ae=(kt.start+kt.count)*Et;mt!==null&&(yt=Math.max(yt,mt.start*Et),ae=Math.min(ae,(mt.start+mt.count)*Et)),bt!==null?(yt=Math.max(yt,0),ae=Math.min(ae,bt.count)):Wt!=null&&(yt=Math.max(yt,0),ae=Math.min(ae,Wt.count));let xe=ae-yt;if(xe<0||xe===1/0)return;xt.setup(z,B,at,G,bt);let ue,oe=ht;if(bt!==null&&(ue=rt.get(bt),oe=Z,oe.setIndex(ue)),z.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Se()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(z.isLine){let Re=B.linewidth;Re===void 0&&(Re=1),g.setLineWidth(Re*Se()),z.isLineSegments?oe.setMode(D.LINES):z.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else z.isPoints?oe.setMode(D.POINTS):z.isSprite&&oe.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Re=z._multiDrawStarts,F=z._multiDrawCounts,it=z._multiDrawCount,st=bt?rt.get(bt).bytesPerElement:1,zt=k.get(B).currentProgram.getUniforms();for(let Rt=0;Rt<it;Rt++)zt.setValue(D,"_gl_DrawID",Rt),oe.render(Re[Rt]/st,F[Rt])}else if(z.isInstancedMesh)oe.renderInstances(yt,xe,z.count);else if(G.isInstancedBufferGeometry){let Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,F=Math.min(G.instanceCount,Re);oe.renderInstances(yt,xe,F)}else oe.render(yt,xe)};function Ms(y,U,G){y.transparent===!0&&y.side===Ze&&y.forceSinglePass===!1?(y.side=Ve,y.needsUpdate=!0,Fi(y,U,G),y.side=Gn,y.needsUpdate=!0,Fi(y,U,G),y.side=Ze):Fi(y,U,G)}this.compile=function(y,U,G=null){G===null&&(G=y),S=lt.get(G),S.init(U),v.push(S),G.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),y!==G&&y.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),S.setupLights();let B=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let mt=z.material;if(mt)if(Array.isArray(mt))for(let vt=0;vt<mt.length;vt++){let at=mt[vt];Ms(at,G,z),B.add(at)}else Ms(mt,G,z),B.add(mt)}),S=v.pop(),B},this.compileAsync=function(y,U,G=null){let B=this.compile(y,U,G);return new Promise(z=>{function mt(){if(B.forEach(function(vt){k.get(vt).currentProgram.isReady()&&B.delete(vt)}),B.size===0){z(y);return}setTimeout(mt,10)}ee.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Pi=null;function xr(y){Pi&&Pi(y)}function vr(){Un.stop()}function Ss(){Un.start()}let Un=new Jh;Un.setAnimationLoop(xr),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(y){Pi=y,_t.setAnimationLoop(y),y===null?Un.stop():Un.start()},_t.addEventListener("sessionstart",vr),_t.addEventListener("sessionend",Ss),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(y,U);let G=_t.enabled===!0&&_t.isPresenting===!0,B=w!==null&&(Q===null||G)&&w.begin(P,Q);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(U),U=_t.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,U,Q),S=lt.get(y,v.length),S.init(U),S.state.textureUnits=W.getTextureUnits(),v.push(S),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(Me,yn,U.reversedDepth),qt=this.localClippingEnabled,Qt=It.init(this.clippingPlanes,qt),C=dt.get(y,R.length),C.init(),R.push(C),_t.enabled===!0&&_t.isPresenting===!0){let vt=P.xr.getDepthSensingMesh();vt!==null&&Li(vt,U,-1/0,P.sortObjects)}Li(y,U,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(Pt,Bt,U.reversedDepth),fe=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,fe&&Nt.addToRenderList(C,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&It.beginShadows();let z=S.state.shadowsArray;if(Dt.render(z,y,U),Qt===!0&&It.endShadows(),(B&&w.hasRenderPass())===!1){let vt=C.opaque,at=C.transmissive;if(S.setupLights(),U.isArrayCamera){let bt=U.cameras;if(at.length>0)for(let Et=0,kt=bt.length;Et<kt;Et++){let Wt=bt[Et];_s(vt,at,y,Wt)}fe&&Nt.render(y);for(let Et=0,kt=bt.length;Et<kt;Et++){let Wt=bt[Et];yr(C,y,Wt,Wt.viewport)}}else at.length>0&&_s(vt,at,y,U),fe&&Nt.render(y),yr(C,y,U)}Q!==null&&H===0&&(W.updateMultisampleRenderTarget(Q),W.updateRenderTargetMipmap(Q)),B&&w.end(P),y.isScene===!0&&y.onAfterRender(P,y,U),xt.resetDefaultState(),tt=-1,pt=null,v.pop(),v.length>0?(S=v[v.length-1],W.setTextureUnits(S.state.textureUnits),Qt===!0&&It.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,O!==null&&O.renderEnd()};function Li(y,U,G,B){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)S.pushLightProbeGrid(y);else if(y.isLight)S.pushLight(y),y.castShadow&&S.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||se.intersectsSprite(y)){B&&_e.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Me);let vt=K.update(y),at=y.material;at.visible&&C.push(y,vt,at,G,_e.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||se.intersectsObject(y))){let vt=K.update(y),at=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),_e.copy(y.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),_e.copy(vt.boundingSphere.center)),_e.applyMatrix4(y.matrixWorld).applyMatrix4(Me)),Array.isArray(at)){let bt=vt.groups;for(let Et=0,kt=bt.length;Et<kt;Et++){let Wt=bt[Et],yt=at[Wt.materialIndex];yt&&yt.visible&&C.push(y,vt,yt,G,_e.z,Wt)}}else at.visible&&C.push(y,vt,at,G,_e.z,null)}}let mt=y.children;for(let vt=0,at=mt.length;vt<at;vt++)Li(mt[vt],U,G,B)}function yr(y,U,G,B){let{opaque:z,transmissive:mt,transparent:vt}=y;S.setupLightsView(G),Qt===!0&&It.setGlobalState(P.clippingPlanes,G),B&&g.viewport(ft.copy(B)),z.length>0&&Di(z,U,G),mt.length>0&&Di(mt,U,G),vt.length>0&&Di(vt,U,G),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function _s(y,U,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){let yt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new nn(1,1,{generateMipmaps:!0,type:yt?Ln:$e,minFilter:li,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let mt=S.state.transmissionRenderTarget[B.id],vt=B.viewport||ft;mt.setSize(vt.z*P.transmissionResolutionScale,vt.w*P.transmissionResolutionScale);let at=P.getRenderTarget(),bt=P.getActiveCubeFace(),Et=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(de),te=P.getClearAlpha(),te<1&&P.setClearColor(16777215,.5),P.clear(),fe&&Nt.render(G);let kt=P.toneMapping;P.toneMapping=An;let Wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),Qt===!0&&It.setGlobalState(P.clippingPlanes,B),Di(y,G,B),W.updateMultisampleRenderTarget(mt),W.updateRenderTargetMipmap(mt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let ae=0,xe=U.length;ae<xe;ae++){let ue=U[ae],{object:oe,geometry:Re,material:F,group:it}=ue;if(F.side===Ze&&oe.layers.test(B.layers)){let st=F.side;F.side=Ve,F.needsUpdate=!0,Ar(oe,G,B,Re,F,it),F.side=st,F.needsUpdate=!0,yt=!0}}yt===!0&&(W.updateMultisampleRenderTarget(mt),W.updateRenderTargetMipmap(mt))}P.setRenderTarget(at,bt,Et),P.setClearColor(de,te),Wt!==void 0&&(B.viewport=Wt),P.toneMapping=kt}function Di(y,U,G){let B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,mt=y.length;z<mt;z++){let vt=y[z],{object:at,geometry:bt,group:Et}=vt,kt=vt.material;kt.allowOverride===!0&&B!==null&&(kt=B),at.layers.test(G.layers)&&Ar(at,U,G,bt,kt,Et)}}function Ar(y,U,G,B,z,mt){y.onBeforeRender(P,U,G,B,z,mt),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(P,U,G,B,y,mt),z.transparent===!0&&z.side===Ze&&z.forceSinglePass===!1?(z.side=Ve,z.needsUpdate=!0,P.renderBufferDirect(G,U,B,z,y,mt),z.side=Gn,z.needsUpdate=!0,P.renderBufferDirect(G,U,B,z,y,mt),z.side=Ze):P.renderBufferDirect(G,U,B,z,y,mt),y.onAfterRender(P,U,G,B,z,mt)}function Fi(y,U,G){U.isScene!==!0&&(U=be);let B=k.get(y),z=S.state.lights,mt=S.state.shadowsArray,vt=z.state.version,at=ct.getParameters(y,z.state,mt,U,G,S.state.lightProbeGridArray),bt=ct.getProgramCacheKey(at),Et=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let kt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=et.get(y.envMap||B.environment,kt),B.envMapRotation=B.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Et===void 0&&(y.addEventListener("dispose",an),Et=new Map,B.programs=Et);let Wt=Et.get(bt);if(Wt!==void 0){if(B.currentProgram===Wt&&B.lightsStateVersion===vt)return pn(y,at),Wt}else at.uniforms=ct.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,G,at),y.onBeforeCompile(at,P),Wt=ct.acquireProgram(at,bt),Et.set(bt,Wt),B.uniforms=at.uniforms;let yt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=It.uniform),pn(y,at),B.needsLights=mn(y),B.lightsStateVersion=vt,B.needsLights&&(yt.ambientLightColor.value=z.state.ambient,yt.lightProbe.value=z.state.probe,yt.directionalLights.value=z.state.directional,yt.directionalLightShadows.value=z.state.directionalShadow,yt.spotLights.value=z.state.spot,yt.spotLightShadows.value=z.state.spotShadow,yt.rectAreaLights.value=z.state.rectArea,yt.ltc_1.value=z.state.rectAreaLTC1,yt.ltc_2.value=z.state.rectAreaLTC2,yt.pointLights.value=z.state.point,yt.pointLightShadows.value=z.state.pointShadow,yt.hemisphereLights.value=z.state.hemi,yt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,yt.spotLightMatrix.value=z.state.spotLightMatrix,yt.spotLightMap.value=z.state.spotLightMap,yt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=Wt,B.uniformsList=null,Wt}function Mr(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=ds.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function pn(y,U){let G=k.get(y);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Fo(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;A.setFromMatrixPosition(U.matrixWorld);for(let G=0,B=y.length;G<B;G++){let z=y[G];if(z.texture!==null&&z.boundingBox.containsPoint(A))return z}return null}function Fe(y,U,G,B,z){U.isScene!==!0&&(U=be),W.resetTextureUnits();let mt=U.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,at=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:$t.workingColorSpace,bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Et=et.get(B.envMap||vt,bt),kt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!G.morphAttributes.position,ae=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color,ue=An;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ue=P.toneMapping);let oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Re=oe!==void 0?oe.length:0,F=k.get(B),it=S.state.lights;if(Qt===!0&&(qt===!0||y!==pt)){let ne=y===pt&&B.id===tt;It.setState(B,y,ne)}let st=!1;B.version===F.__version?(F.needsLights&&F.lightsStateVersion!==it.state.version||F.outputColorSpace!==at||z.isBatchedMesh&&F.batching===!1||!z.isBatchedMesh&&F.batching===!0||z.isBatchedMesh&&F.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&F.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&F.instancing===!1||!z.isInstancedMesh&&F.instancing===!0||z.isSkinnedMesh&&F.skinning===!1||!z.isSkinnedMesh&&F.skinning===!0||z.isInstancedMesh&&F.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&F.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&F.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&F.instancingMorph===!1&&z.morphTexture!==null||F.envMap!==Et||B.fog===!0&&F.fog!==mt||F.numClippingPlanes!==void 0&&(F.numClippingPlanes!==It.numPlanes||F.numIntersection!==It.numIntersection)||F.vertexAlphas!==kt||F.vertexTangents!==Wt||F.morphTargets!==yt||F.morphNormals!==ae||F.morphColors!==xe||F.toneMapping!==ue||F.morphTargetsCount!==Re||!!F.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,F.__version=B.version);let zt=F.currentProgram;st===!0&&(zt=Fi(B,U,z),O&&B.isNodeMaterial&&O.onUpdateProgram(B,zt,F));let Rt=!1,Yt=!1,Ft=!1,Vt=zt.getUniforms(),Gt=F.uniforms;if(g.useProgram(zt.program)&&(Rt=!0,Yt=!0,Ft=!0),B.id!==tt&&(tt=B.id,Yt=!0),F.needsLights){let ne=Fo(S.state.lightProbeGridArray,z);F.lightProbeGrid!==ne&&(F.lightProbeGrid=ne,Yt=!0)}if(Rt||pt!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Vt.setValue(D,"projectionMatrix",y.projectionMatrix),Vt.setValue(D,"viewMatrix",y.matrixWorldInverse);let Ke=Vt.map.cameraPosition;Ke!==void 0&&Ke.setValue(D,Ae.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&Vt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Vt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),pt!==y&&(pt=y,Yt=!0,Ft=!0)}if(F.needsLights&&(it.state.directionalShadowMap.length>0&&Vt.setValue(D,"directionalShadowMap",it.state.directionalShadowMap,W),it.state.spotShadowMap.length>0&&Vt.setValue(D,"spotShadowMap",it.state.spotShadowMap,W),it.state.pointShadowMap.length>0&&Vt.setValue(D,"pointShadowMap",it.state.pointShadowMap,W)),z.isSkinnedMesh){Vt.setOptional(D,z,"bindMatrix"),Vt.setOptional(D,z,"bindMatrixInverse");let ne=z.skeleton;ne&&(ne.boneTexture===null&&ne.computeBoneTexture(),Vt.setValue(D,"boneTexture",ne.boneTexture,W))}z.isBatchedMesh&&(Vt.setOptional(D,z,"batchingTexture"),Vt.setValue(D,"batchingTexture",z._matricesTexture,W),Vt.setOptional(D,z,"batchingIdTexture"),Vt.setValue(D,"batchingIdTexture",z._indirectTexture,W),Vt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Vt.setValue(D,"batchingColorTexture",z._colorsTexture,W));let ve=G.morphAttributes;if((ve.position!==void 0||ve.normal!==void 0||ve.color!==void 0)&&_.update(z,G,zt),(Yt||F.receiveShadow!==z.receiveShadow)&&(F.receiveShadow=z.receiveShadow,Vt.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(Gt.envMapIntensity.value=U.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=kg()),Yt){if(Vt.setValue(D,"toneMappingExposure",P.toneMappingExposure),F.needsLights&&on(Gt,Ft),mt&&B.fog===!0&&Ct.refreshFogUniforms(Gt,mt),Ct.refreshMaterialUniforms(Gt,B,nt,ot,S.state.transmissionRenderTarget[y.id]),F.needsLights&&F.lightProbeGrid){let ne=F.lightProbeGrid;Gt.probesSH.value=ne.texture,Gt.probesMin.value.copy(ne.boundingBox.min),Gt.probesMax.value.copy(ne.boundingBox.max),Gt.probesResolution.value.copy(ne.resolution)}ds.upload(D,Mr(F),Gt,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ds.upload(D,Mr(F),Gt,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Vt.setValue(D,"center",z.center),Vt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Vt.setValue(D,"normalMatrix",z.normalMatrix),Vt.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let ne=B.uniformsGroups;for(let Ke=0,Ui=ne.length;Ke<Ui;Ke++){let dc=ne[Ke];$.update(dc,zt),$.bind(dc,zt)}}return zt}function on(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function mn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(y,U,G){let B=k.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),k.get(y.texture).__webglTexture=U,k.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let G=k.get(y);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,G=0){Q=y,Y=U,H=G;let B=null,z=!1,mt=!1;if(y){let at=k.get(y);if(at.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,at.__webglFramebuffer),ft.copy(y.viewport),Mt.copy(y.scissor),Zt=y.scissorTest,g.viewport(ft),g.scissor(Mt),g.setScissorTest(Zt),tt=-1;return}else if(at.__webglFramebuffer===void 0)W.setupRenderTarget(y);else if(at.__hasExternalTextures)W.rebindTextures(y,k.get(y.texture).__webglTexture,k.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let kt=y.depthTexture;if(at.__boundDepthTexture!==kt){if(kt!==null&&k.has(kt)&&(y.width!==kt.image.width||y.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(y)}}let bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);let Et=k.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Et[U])?B=Et[U][G]:B=Et[U],z=!0):y.samples>0&&W.useMultisampledRTT(y)===!1?B=k.get(y).__webglMultisampledFramebuffer:Array.isArray(Et)?B=Et[G]:B=Et,ft.copy(y.viewport),Mt.copy(y.scissor),Zt=y.scissorTest}else ft.copy(Lt).multiplyScalar(nt).floor(),Mt.copy(pe).multiplyScalar(nt).floor(),Zt=Kt;if(G!==0&&(B=X),g.bindFramebuffer(D.FRAMEBUFFER,B)&&g.drawBuffers(y,B),g.viewport(ft),g.scissor(Mt),g.setScissorTest(Zt),z){let at=k.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,at.__webglTexture,G)}else if(mt){let at=U;for(let bt=0;bt<y.textures.length;bt++){let Et=k.get(y.textures[bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+bt,Et.__webglTexture,G,at)}}else if(y!==null&&G!==0){let at=k.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,at.__webglTexture,G)}tt=-1},this.readRenderTargetPixels=function(y,U,G,B,z,mt,vt,at=0){if(!(y&&y.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){g.bindFramebuffer(D.FRAMEBUFFER,bt);try{let Et=y.textures[at],kt=Et.format,Wt=Et.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+at),!E.textureFormatReadable(kt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(Wt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-B&&G>=0&&G<=y.height-z&&D.readPixels(U,G,B,z,ut.convert(kt),ut.convert(Wt),mt)}finally{let Et=Q!==null?k.get(Q).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(y,U,G,B,z,mt,vt,at=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt)if(U>=0&&U<=y.width-B&&G>=0&&G<=y.height-z){g.bindFramebuffer(D.FRAMEBUFFER,bt);let Et=y.textures[at],kt=Et.format,Wt=Et.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+at),!E.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(U,G,B,z,ut.convert(kt),ut.convert(Wt),0);let ae=Q!==null?k.get(Q).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,ae);let xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mh(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.deleteBuffer(yt),D.deleteSync(xe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,G=0){let B=Math.pow(2,-G),z=Math.floor(y.image.width*B),mt=Math.floor(y.image.height*B),vt=U!==null?U.x:0,at=U!==null?U.y:0;W.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,vt,at,z,mt),g.unbindTexture()},this.copyTextureToTexture=function(y,U,G=null,B=null,z=0,mt=0){let vt,at,bt,Et,kt,Wt,yt,ae,xe,ue=y.isCompressedTexture?y.mipmaps[mt]:y.image;if(G!==null)vt=G.max.x-G.min.x,at=G.max.y-G.min.y,bt=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,kt=G.min.y,Wt=G.isBox3?G.min.z:0;else{let Gt=Math.pow(2,-z);vt=Math.floor(ue.width*Gt),at=Math.floor(ue.height*Gt),y.isDataArrayTexture?bt=ue.depth:y.isData3DTexture?bt=Math.floor(ue.depth*Gt):bt=1,Et=0,kt=0,Wt=0}B!==null?(yt=B.x,ae=B.y,xe=B.z):(yt=0,ae=0,xe=0);let oe=ut.convert(U.format),Re=ut.convert(U.type),F;U.isData3DTexture?(W.setTexture3D(U,0),F=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(W.setTexture2DArray(U,0),F=D.TEXTURE_2D_ARRAY):(W.setTexture2D(U,0),F=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let it=g.getParameter(D.UNPACK_ROW_LENGTH),st=g.getParameter(D.UNPACK_IMAGE_HEIGHT),zt=g.getParameter(D.UNPACK_SKIP_PIXELS),Rt=g.getParameter(D.UNPACK_SKIP_ROWS),Yt=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,ue.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),g.pixelStorei(D.UNPACK_SKIP_ROWS,kt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Wt);let Ft=y.isDataArrayTexture||y.isData3DTexture,Vt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let Gt=k.get(y),ve=k.get(U),ne=k.get(Gt.__renderTarget),Ke=k.get(ve.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,ne.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ui=0;Ui<bt;Ui++)Ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(y).__webglTexture,z,Wt+Ui),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(U).__webglTexture,mt,xe+Ui)),D.blitFramebuffer(Et,kt,vt,at,yt,ae,vt,at,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||k.has(y)){let Gt=k.get(y),ve=k.get(U);g.bindFramebuffer(D.READ_FRAMEBUFFER,J),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,V);for(let ne=0;ne<bt;ne++)Ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gt.__webglTexture,z,Wt+ne):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gt.__webglTexture,z),Vt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.__webglTexture,mt,xe+ne):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,mt),z!==0?D.blitFramebuffer(Et,kt,vt,at,yt,ae,vt,at,D.COLOR_BUFFER_BIT,D.NEAREST):Vt?D.copyTexSubImage3D(F,mt,yt,ae,xe+ne,Et,kt,vt,at):D.copyTexSubImage2D(F,mt,yt,ae,Et,kt,vt,at);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Vt?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(F,mt,yt,ae,xe,vt,at,bt,oe,Re,ue.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(F,mt,yt,ae,xe,vt,at,bt,oe,ue.data):D.texSubImage3D(F,mt,yt,ae,xe,vt,at,bt,oe,Re,ue):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,yt,ae,vt,at,oe,Re,ue.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,yt,ae,ue.width,ue.height,oe,ue.data):D.texSubImage2D(D.TEXTURE_2D,mt,yt,ae,vt,at,oe,Re,ue);g.pixelStorei(D.UNPACK_ROW_LENGTH,it),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),g.pixelStorei(D.UNPACK_SKIP_ROWS,Rt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt),mt===0&&U.generateMipmaps&&D.generateMipmap(F),g.unbindTexture()},this.initRenderTarget=function(y){k.get(y).__webglFramebuffer===void 0&&W.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?W.setTextureCube(y,0):y.isData3DTexture?W.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?W.setTexture2DArray(y,0):W.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){Y=0,H=0,Q=null,g.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var eu="data:image/jpeg;base64,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ucPsvoCdQJr1aJZYa7iaNMWpGsTmJhxylWwT3lwFgMytrfaIijqSq3vPiUMg9Z/4lgVU9H8xuWrLtMPBG6+CfuG9vE5Cqe3deJYbQbBlvf0U5jeEigdi4w0dVpfES90OBB3GOT7IYPRH8znL1rvgngngextEFLTvd4Jo1DAaDiBMYj3s7kNVj5/7FzstW4IoddYqyQ7RNkH9aYUNr5PSKeTu9J9rtX4jRJTFtpmKjK72/f7RUGzElFmtoZ5krsTs0lSYPQd5XRgpamk9n7JHllbLrU7NX7Q6w6QTDpt+TLm8KjKfvvDXLLMVVu+pd+iGgbz7rCk/hB3/ABHwoYv2vXr9TR3mg6BBjpNBbvDcpDEdrHYeLhHX0BSuekEDbaBM5sGs36fTMhmyYH68QPXRdD35h9iguHZahcMtg0HAbEaQjlIZuHqaxVod2XUdi92IfSbfRCOz7WZQFht0/S/MCDNAQ2BU6Oc/BNEKFUDKEYeBq/M57itRr6oPQKWmxB66w1V5qBbRlicgEK4m7pwlVMvvnRtMx6VwerMio5z2hKMJyn4ToPSdCYb0TgMi0P0qFlYEu9dIZ0vg8Tjb5qKrazFmICgb/QxiqbQnXIDVtDQPZIZLmhepBKxlTKWE3DK1RkEyq6pYG5p5gXZBHip1BcdoUtqouaQMT0PpTT1ias24SHyy5pdT3niYUZT2dDmKZYX3Xllf4B+87wO59dZooiqsHXl5i/RcEWdskbu0JGrr8HgJQNpgT8AI+gcrF2hHX14iS9q3vDjWrslm/wCE1IQJawUbGmWWMcXF7bunKsQjq7G00j0Iygp6cUllO19ktnZfK0+8SpQP4fiYr94ZQK3yqUj783be8WuD5OD7/QeGJqV17/ExhOTCe+wd9ZfGe+e743/iI0dZ/9oADAMBAAIAAwAAABD333333333333337333337333333333333333333333333333373333373333333333333333333333333333733333733333333333333333333333333337333337333333333333333333333333333373333373333333333333333333333333333733Hb37333333333333333333333333333373qVf37333333333333333333333333333372spz373333333333333333333333333333731z3373333333333333333333333333333vHHHHHf333333333333333333333333333333333333333333333333335NX333333333333333333333333332m/wC9+3pJ299999999999999999999999996FV6+m+Jxj1999999999999999299999995TxG+a+m39999995y/8AfffffffekPfefffffffa2vknnffffffbHPvfffffffSovfYsffffffbbopvvffffffX7r6/CpfC57S43QEZvfffffffmvffffffffdGhFNRi1X5vFu1G3HffffffffffffffffffYfaBJXpHcBNrkyOA/vfffffffffffffffffWGWX0Mr6pLvqRzz/nvffffffffffffffffffffXjHfbbG+f3PffffffffffffffffffffffeuflcvavvvYOc+/ffffffffffffffffffffbXkTbXrfnjrvXbnvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffuvsvtvvffffffffffffffffffffffffffffXpfLnnvffffffffffVtPffffffffffa31jdil7CLQXwYtPfffffc393PfffffffffepPIPKVkrKd5FHdvffffeUid/vffffffffffvvvvvvvvvvvvvvvffffbNGIMvfffffffffbDTTTTTTTTTTTTXPffffUw/UoMdfffffffffeZfgHhlwK7FpffffffaD/eadNRf/ffffffffNstst8sMNs/wDX33331P3tZn3D0n33333333w77+457/8Aeu+c9999iqGi2SCN6m+999999999999999999999999ERobEoMauTjc5w799999999999999999994x3sjsze75gQRXnQ7323999999999999999grncUlYRr7bPtqkHBYw8y/8Affffffffffffz+A4bzdvBESLEX5IGQiST9pLLQUvffffffcu/qlIDbk874fwixfs0XOggAnYwjzJPd4e/JX2GISeyJouE87f4OQX7osb88M09dvmbNM0z/tLpcqVkD4TB08wBj8wPZzDpZ5LlIjNQBArrr1wrs1GyBKUn9ybW0TCaOPUEYPUNBKXv9V6Ifj2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";var Co=class extends bi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new cn;t.deleteAttribute("uv");let e=new Oe({side:Ve}),n=new Oe,s=new $s(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ie(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new In(t,n,6),o=new Ie;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ie(t,gs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ie(t,gs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ie(t,gs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ie(t,gs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ie(t,gs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ie(t,gs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function gs(i){return new Zs({color:0,emissive:16777215,emissiveIntensity:i})}var mr=new I;function dn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;mr.copy(t),mr[n]=0,mr.normalize();let l=.5*a/(a+o),h=1-mr.angleTo(i)/c;return Math.sign(mr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Ro=class i extends cn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,x=d.length/6,M=new I,m=.5/a;for(let p=0,T=0;p<d.length;p+=3,T+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/x)){case 0:M.set(1,0,0),f[T+0]=dn(M,l,"z","y",r,n),f[T+1]=1-dn(M,l,"y","z",r,e);break;case 1:M.set(-1,0,0),f[T+0]=1-dn(M,l,"z","y",r,n),f[T+1]=1-dn(M,l,"y","z",r,e);break;case 2:M.set(0,1,0),f[T+0]=1-dn(M,l,"x","z",r,t),f[T+1]=dn(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),f[T+0]=1-dn(M,l,"x","z",r,t),f[T+1]=1-dn(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),f[T+0]=1-dn(M,l,"x","y",r,t),f[T+1]=1-dn(M,l,"y","x",r,e);break;case 5:M.set(0,0,-1),f[T+0]=dn(M,l,"x","y",r,t),f[T+1]=1-dn(M,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function hc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ce,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let x=0;x<f.count;++x)d.push(f.getX(x)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=nu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let M=0;M<a[h].length;++M)f.push(a[h][M][u]);let x=nu(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}}return c}function nu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new We(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let x=0;x<e;x++){let M=h.getComponent(u,x);o.setComponent(u+d,x,M)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Ye=Math.PI*2,Io=new I(0,1,0),di=.34,De=(i,t,e)=>i+(t-i)*e,Yn=i=>i<0?0:i>1?1:i,fi=i=>i*i*(3-2*i),Gg=i=>i*i*i*(i*(i*6-15)+10),wt=(i,t,e)=>new I(i,t,e),pi=(i,t=0)=>{let e=new we().setFromUnitVectors(Io,i.clone().normalize());return t?e.multiply(new we().setFromAxisAngle(Io,t)):e};function Po(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var gr=(i,t)=>Math.atan2(Math.sin(i-t),Math.cos(i-t)),xs=(i,t)=>Math.exp(-(i/t)*(i/t));function vs({segs:i,rings:t,husk:e=!1,thetaStart:n=0,thetaLen:s=Ye,seed:r=1}){let a=e?.535:.5,o=e?.106:.091,c=r*1.7,l=i+1,h=new Float32Array((t+1)*l*3),d=new Float32Array((t+1)*l*2),u=new Float32Array((t+1)*l),f=0,x=0,M=0;for(let b=0;b<=t;b++){let A=Math.sin((b/t-.5)*Math.PI),C=Math.abs(A),S;e?S=o*Math.pow(Math.max(0,1-Math.pow(C,2.1)),.7):(S=A>0?o*Math.pow(Math.max(0,1-Math.pow(C,2.7)),.66):o*Math.pow(Math.max(0,1-Math.pow(C,3.1)),.56),S*=1+.03*Math.sin(A*2.4+c)+.012*Math.sin(A*7.3+c*2));for(let R=0;R<=i;R++){let v=n+s*R/i,w=e?v:v+.1*A,P=S;if(e)P*=.985+.05*Math.pow(Math.abs(Math.cos(w*2.5)),14),P*=1+.05*xs(gr(w,0),.22);else{let O=fi(Yn((-.7-A)/.26));P*=1-.5*O*Math.pow(Math.max(0,Math.cos(w-.35)),1.3),P*=1-.12*xs(A+.86,.06)*xs(gr(w,.35),.35),P*=1-.06*xs(gr(w,Math.PI/2),.1)-.04*xs(gr(w,-Math.PI/2),.12);let X=1-Math.pow(C,6);for(let J of[.62,-.62,2.52,-2.52])P*=1-.04*X*xs(gr(w,J+.05*Math.sin(A*3+c)),.07);P*=1+.012*Math.sin(w*3+A*5+c)*Math.cos(A*1.3)}let L=.024*(1-A*A)+.006*Math.sin(A*3+c);h[f++]=P*Math.cos(w)+L,h[f++]=A*a,h[f++]=P*Math.sin(w)*(e?.84:.76),d[x++]=R/i,d[x++]=(A+1)/2,u[M++]=Yn(P/o)}}let m=[];for(let b=0;b<t;b++)for(let A=0;A<i;A++){let C=b*l+A,S=C+l;m.push(C,S,C+1,S,S+1,C+1)}let p=new Ce;p.setIndex(m),p.setAttribute("position",new ce(h,3)),p.setAttribute("uv",new ce(d,2)),p.setAttribute("aThick",new ce(u,1)),p.computeVertexNormals();let T=p.attributes.normal.array;if(s>=Ye-1e-6)for(let b=0;b<=t;b++){let A=b*l*3,C=(b*l+i)*3;for(let S=0;S<3;S++){let R=(T[A+S]+T[C+S])/2;T[A+S]=T[C+S]=R}}for(let b=0;b<=i;b++)T.set([0,-1,0],b*3),T.set([0,1,0],(t*l+b)*3);return p.attributes.normal.needsUpdate=!0,p}function iu(i,t,e){let n=new At(t),s=`vec3(${n.r.toFixed(3)}, ${n.g.toFixed(3)}, ${n.b.toFixed(3)})`;return i.customProgramCacheKey=()=>"sss-"+t+e,i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
      }`)},i}function uc(i,t,e=48){let n=[],s=[],r=[],a=new I,o=wt(0,0,1);for(let l=0;l<=e;l++){let h=l/e,d=i.getPointAt(h),u=i.getTangentAt(h);a.crossVectors(u,o).normalize();let f=t*Math.pow(Math.sin(Math.PI*Math.min(1,h*1.15+.02)),.55)*(1-.55*h);if(n.push(d.x-a.x*f,d.y-a.y*f,d.z-a.z*f,d.x+a.x*f,d.y+a.y*f,d.z+a.z*f),r.push(0,h,1,h),l<e){let x=l*2;s.push(x,x+2,x+1,x+1,x+2,x+3)}}let c=new Ce;return c.setIndex(s),c.setAttribute("position",new ce(n,3)),c.setAttribute("uv",new ce(r,2)),c.computeVertexNormals(),c}function Hg(i,t,e){let n=new qn([wt(-.06,-8,0),wt(0,-3.2,.05),wt(.1,-.8,.1),wt(.38,.85,.12),wt(.92,1.72,.07),wt(1.5,1.78,0),wt(1.92,1.25,-.06),wt(2.08,.55,-.1)],!1,"centripetal"),s=[],r=[];for(let c=0;c<t;c++){let l=c/(t-1),h=De(.47,.955,l),d=n.getPointAt(h),u=n.getTangentAt(h),f=Math.abs(u.y)>.9?wt(1,0,0):Io,x=new I().crossVectors(u,f).normalize(),M=new I().crossVectors(u,x).normalize(),m=c*2.39996+i()*.5,p=x.clone().multiplyScalar(Math.cos(m)).addScaledVector(M,Math.sin(m)),T=De(1.2,.45,l)*(.85+i()*.3),b=u.clone().multiplyScalar(.6).addScaledVector(p,.8).normalize(),A=d.clone().addScaledVector(b,T);A.y-=.24*T;let C=d.clone().addScaledVector(b,T*.55);C.y-=.02;let S=new Ei(d,C,A);r.push(S);let R=Math.max(3,Math.round(e*(.55+T*.6)));for(let v=0;v<R;v++){let w=De(.3,1,R===1?1:v/(R-1)),P=S.getPointAt(w),L=S.getTangentAt(w),O=new I().crossVectors(L,p);O.lengthSq()<1e-4&&(O=x.clone()),O.normalize();let X=L.clone().addScaledVector(O,(v%2?1:-1)*.45).addScaledVector(p,.2).normalize();s.push({p:P.clone().addScaledVector(X,di*.48),q:pi(X,i()*Ye)})}}let a=n.getTangentAt(1),o={p:n.getPointAt(1).addScaledVector(a,di*.5),q:pi(a,.6)};return{rachis:n,curves:r,slots:s,tip:o}}function Ii(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new ns(s);return r.wrapS=r.wrapT=_i,n&&(r.colorSpace=He),r.anisotropy=4,r}function Wg(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=document.createElement("canvas");r.width=e,r.height=n;let a=r.getContext("2d"),o=a.createImageData(e,n),c=o.data,l=(d,u)=>s[((u+n)%n*e+(d+e)%e)*4]/255;for(let d=0;d<n;d++)for(let u=0;u<e;u++){let f=(l(u+1,d)-l(u-1,d))*t,x=(l(u,d+1)-l(u,d-1))*t,M=Math.hypot(f,x,1),m=(d*e+u)*4;c[m]=(-f/M*.5+.5)*255,c[m+1]=(x/M*.5+.5)*255,c[m+2]=(1/M*.5+.5)*255,c[m+3]=255}a.putImageData(o,0,0);let h=new ns(r);return h.wrapS=h.wrapT=_i,h.anisotropy=4,h}function qg(){let i=Po(3),t=512,e=1024,n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");s.fillStyle="#808080",s.fillRect(0,0,t,e);for(let c=0;c<260;c++){let l=i()*t,h=.05+i()*.13,d=.8+i()*2.6,u=2+i()*5;s.strokeStyle=i()<.5?`rgba(255,255,255,${h})`:`rgba(0,0,0,${h})`,s.lineWidth=.6+i()*2.4,s.beginPath();for(let f=0;f<=e;f+=10){let x=l+Math.sin(f/e*u*Ye+c)*d;f?s.lineTo(x,f):s.moveTo(x,f)}s.stroke()}for(let c of[.1,.4,.6,.9]){let l=s.createLinearGradient(c*t-10,0,c*t+10,0);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(.5,"rgba(0,0,0,.16)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.fillRect(c*t-10,e*.08,20,e*.84)}for(let c=0;c<22;c++){s.strokeStyle=`rgba(0,0,0,${.08+i()*.12})`,s.lineWidth=.8;let l=e*(.12+i()*.76),h=i()*t;s.beginPath(),s.moveTo(h,l),s.quadraticCurveTo(h+16,l+(i()-.5)*8,h+30+i()*60,l+(i()-.5)*6),s.stroke()}for(let c=0;c<2200;c++)s.fillStyle=`rgba(0,0,0,${.04+i()*.12})`,s.beginPath(),s.arc(i()*t,i()*e,.4+i()*1.1,0,Ye),s.fill();let r=s.createRadialGradient(t*.42,e*.035,1,t*.42,e*.035,34);r.addColorStop(0,"rgba(0,0,0,.35)"),r.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=r,s.fillRect(0,0,t,90);let a=Wg(n,4.2),o=Ii(t,e,(c,l,h)=>{c.fillStyle="#ECE3CF",c.fillRect(0,0,l,h);let d=c.createRadialGradient(l*.5,h*.52,6,l*.5,h*.52,h*.3);d.addColorStop(0,"rgba(255,253,247,.62)"),d.addColorStop(1,"rgba(255,253,247,0)"),c.save(),c.scale(1,1.6),c.fillStyle=d,c.fillRect(0,0,l,h),c.restore();let u=c.createRadialGradient(l*.3,h*.44,4,l*.3,h*.44,l*.22);u.addColorStop(0,"rgba(255,255,252,.42)"),u.addColorStop(1,"rgba(255,255,252,0)"),c.fillStyle=u,c.fillRect(0,0,l,h);let f=c.createLinearGradient(0,0,0,h);f.addColorStop(0,"rgba(196,170,120,.72)"),f.addColorStop(.1,"rgba(214,194,150,.26)"),f.addColorStop(.24,"rgba(230,214,180,0)"),f.addColorStop(.8,"rgba(230,214,180,0)"),f.addColorStop(.93,"rgba(214,194,150,.3)"),f.addColorStop(1,"rgba(190,162,112,.75)"),c.fillStyle=f,c.fillRect(0,0,l,h);for(let M=0;M<160;M++)c.fillStyle=`rgba(176,150,104,${.04+i()*.08})`,c.fillRect(i()*l,i()*h*.3,.8+i()*1.8,h*(.3+i()*.6));for(let M=0;M<26;M++)c.fillStyle=`rgba(150,118,72,${.08+i()*.12})`,c.fillRect(i()*l,h*(.02+i()*.1),.8+i()*1.4,h*(.03+i()*.08));let x=c.createRadialGradient(l*.42,h*.035,2,l*.42,h*.035,30);x.addColorStop(0,"rgba(140,108,62,.75)"),x.addColorStop(1,"rgba(140,108,62,0)"),c.fillStyle=x,c.fillRect(0,0,l,80);for(let M=0;M<50;M++)c.fillStyle=`rgba(120,96,60,${.06+i()*.12})`,c.beginPath(),c.arc(i()*l,i()*h,.6+i()*1.1,0,Ye),c.fill()},!0);return{normal:a,map:o}}function Xg(){let i=Po(11),t=Ii(128,256,(n,s,r)=>{n.fillStyle="#7a7a7a",n.fillRect(0,0,s,r);for(let a=0;a<r;a+=5)for(let o=0;o<s;o+=4)n.fillStyle=`rgba(255,255,255,${.18+i()*.2})`,n.beginPath(),n.arc(o+a/5%2*2,a+2,1.3,0,Ye),n.fill();for(let a=0;a<5;a++)n.fillStyle="rgba(255,255,255,.55)",n.fillRect(a/5*s,0,3,r)}),e=Ii(128,256,(n,s,r)=>{n.fillStyle="#f2f2f2",n.fillRect(0,0,s,r);for(let o=0;o<5;o++)n.fillStyle="rgba(120,90,50,.28)",n.fillRect(o/5*s+1,0,2,r);for(let o=0;o<260;o++)n.fillStyle=`rgba(${i()<.5?"90,70,40":"255,255,255"},${.05+i()*.08})`,n.fillRect(i()*s,i()*r,1+i()*2,2+i()*8);let a=n.createLinearGradient(0,0,0,r);a.addColorStop(0,"rgba(110,80,45,.22)"),a.addColorStop(.12,"rgba(110,80,45,0)"),a.addColorStop(.9,"rgba(110,80,45,0)"),a.addColorStop(1,"rgba(110,80,45,.25)"),n.fillStyle=a,n.fillRect(0,0,s,r)},!0);return{bump:t,map:e}}function fc(){return Ii(64,64,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)})}function Yg(){return new Promise(i=>{let t=new Image;t.onload=()=>i(Ii(t.naturalWidth,t.naturalHeight,(e,n,s)=>e.drawImage(t,0,0,n,s),!0)),t.onerror=()=>i(Ii(4,4,(e,n,s)=>{e.fillStyle="#F9F6EE",e.fillRect(0,0,n,s)},!0)),t.src=eu})}var Jg=()=>new qe({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uOpacity:{value:0},uDeep:{value:new At("#7E8F6B")},uShallow:{value:new At("#C9CFB4")},uSky:{value:new At("#FFF6E2")}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`}),Zg=i=>new qe({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uSize:{value:26},uOpacity:{value:.5},uColor:{value:new At("#FFF4DC")},uMap:{value:i},uBox:{value:new I(9,7,6)}},vertexShader:`
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
    }`}),jt={x:6.2,y:-3.2,z:.2,rim:2.3,fill:2.16,depth:1.25},Lo=i=>jt.y+1.25+.5*(1-(i/jt.fill)**2),ru="#F9F6EE",su="#EEEBDF",Kg="#0F3D2E",ys="#E9E3D4";function jg(i){let t=i.tip,e=(c,l,h=0)=>({p:c,q:pi(l,h)}),n=(c,l,h,d)=>{let u=wt(Math.cos(l),0,-Math.sin(l));return e(c,Io.clone().multiplyScalar(Math.cos(h)).addScaledVector(u,Math.sin(h)),d)},s=wt(jt.x-.15,Lo(.2)+.03,jt.z+.35),r={tip:t,studio:n(t.p.clone(),.35,-.42,1.25),fall:{p:t.p.clone().add(wt(-.35,-1.95,.45)),q:t.q.clone().multiply(new we().setFromAxisAngle(wt(1,0,0),1.25))},heap:e(wt(.98,-2.16,.22),wt(1,.12,.35),.4),mill:e(wt(.95,-1.9,.95),wt(1,.32,.12),1.1),pack:e(wt(.95,-.42,-.12),wt(.2,1,.08),.3),kitchen:e(s,wt(1,.07,.62),2.2)},a={target:t.p,yaw:0,pitch:.1,frame:[3,3],hero:"tip",husk:0,huskVis:1,ripe:.5,milled:0,layout:"panicle",stem:1,leaves:1,bgP:1,water:0,pack:0,packAt:0,floor:0,bowl:0,motes:.45,gold:0,spin:0,opacity:1,key:2.6,keyColor:"#FFF1DA",rim:1.2,rimColor:"#FFE2B0",hemi:.55,env:.75,exposure:1,fog:ru},o=c=>Object.assign({},a,c);return{poses:r,hero:o({hero:"studio",target:t.p,yaw:.35,pitch:.06,frame:[.4,.4],husk:1,huskVis:0,ripe:.45,milled:1,layout:"seed",stem:0,leaves:0,bgP:0,motes:.55,spin:1,key:4.2,keyColor:"#FFF3E0",rim:3.4,rimColor:"#FFC98A",hemi:.14,env:.32,exposure:1.02}),farmers:o({target:wt(1,.85,0),yaw:.18,pitch:.05,frame:[3,3.1],ripe:.32}),practicesA:o({target:wt(.75,-.05,.1),yaw:-.3,pitch:.22,frame:[3.7,4.3],ripe:.38,water:1,fog:su,motes:.35}),practicesB:o({target:wt(.85,.1,.1),yaw:.4,pitch:.17,frame:[3.5,4.1],ripe:.92,water:1,fog:su,motes:.4}),why:o({target:wt(1.05,.9,0),yaw:-.55,pitch:.03,frame:[2.8,3.1],ripe:1,fog:Kg,motes:.9,gold:1,key:1.1,keyColor:"#FFD8A8",rim:3.4,rimColor:"#FFC27A",hemi:.22,env:.35,exposure:.95}),journey0:o({target:wt(1.05,.8,0),yaw:.12,pitch:.08,frame:[3,3.3],ripe:1,fog:ys}),journey1:o({target:wt(1.1,-.75,.15),yaw:.22,pitch:.1,frame:[3.3,4.4],ripe:1,hero:"fall",layout:"fall",stem:.3,leaves:.15,bgP:0,fog:ys,floor:.3}),journey2:o({target:wt(.95,-2.35,.1),yaw:.3,pitch:.42,frame:[2.9,2.1],ripe:1,hero:"heap",layout:"heap",stem:0,leaves:0,bgP:0,fog:ys,floor:1,motes:.25}),journey3:o({target:wt(.95,-2.35,.2),yaw:-.12,pitch:.36,frame:[2.5,2],ripe:1,hero:"mill",husk:1,huskVis:.6,milled:1,layout:"graded",stem:0,leaves:0,bgP:0,fog:ys,floor:1,motes:.25}),journey4:o({target:wt(.95,-1.5,0),yaw:.28,pitch:.12,frame:[2.6,3.4],ripe:1,hero:"pack",husk:1,huskVis:0,milled:1,layout:"packed",stem:0,leaves:0,bgP:0,pack:1,fog:ys,floor:1,motes:.25}),journey5:o({target:wt(jt.x-1.25,jt.y+1.9,jt.z-.5),yaw:-.18,pitch:.3,frame:[7.6,5.4],ripe:1,hero:"kitchen",husk:1,huskVis:0,milled:1,layout:"bowl",stem:0,leaves:0,bgP:0,pack:1,packAt:1,bowl:1,fog:ys,motes:.3,key:3,rim:2.2}),closing:o({target:wt(jt.x-1.85,jt.y+2.4,jt.z-.4),yaw:.28,pitch:.18,frame:[9.4,6.3],ripe:1,hero:"kitchen",husk:1,huskVis:0,milled:1,layout:"bowl",stem:0,leaves:0,bgP:0,pack:1,packAt:1,bowl:1,motes:.35,key:3.2,keyColor:"#FFF3E0",rim:2.6,rimColor:"#FFC98A",hemi:.4,env:.6}),end:o({target:wt(jt.x-1.85,jt.y+2.4,jt.z-.4),yaw:.4,pitch:.18,frame:[10.2,6.9],ripe:1,hero:"kitchen",husk:1,huskVis:0,milled:1,layout:"bowl",stem:0,leaves:0,bgP:0,pack:1,packAt:1,bowl:1,motes:.3,opacity:0,key:3.2,keyColor:"#FFF3E0",rim:2.6,rimColor:"#FFC98A",hemi:.4,env:.6})}}function Qg(i,t,e){let n={},s=()=>({p:new Float32Array(t*3),q:new Float32Array(t*4),s:new Float32Array(t)}),r=(l,h,d,u,f)=>{d.toArray(l.p,h*3),u.toArray(l.q,h*4),l.s[h]=f},a=()=>new we().setFromAxisAngle(wt(e()-.5,e()-.5,e()-.5).normalize(),e()*Ye);n.panicle=s(),n.seed=s(),n.fall=s(),n.heap=s(),n.graded=s(),n.packed=s(),n.bowl=s();let o=7,c=wt(.95,-.82,-.22);for(let l=0;l<t;l++){let h=i.slots[l];r(n.panicle,l,h.p,h.q,.97),r(n.seed,l,h.p,h.q,0),r(n.fall,l,h.p.clone().add(wt((e()-.5)*1.3,-1.4-e()*2.4,(e()-.5)*1.3)),a(),.97);let d=.72*Math.pow(e(),.6),u=e()*Ye,f=.46*Math.pow(1-d/.72,1.3)+e()*.05;r(n.heap,l,wt(.95+Math.cos(u)*d,-2.6+f,.05+Math.sin(u)*d*.85),pi(wt(Math.cos(u+1.3),(e()-.5)*.5,Math.sin(u+1.3)),e()*Ye),.95);let x=l%o,M=Math.floor(l/o);r(n.graded,l,wt(.95+(x-(o-1)/2)*.17,-2.6,1.3-M*.39-x%2*.19),pi(wt((e()-.5)*.03,0,-1),Math.PI/2+(e()-.5)*.2),.95),r(n.packed,l,c,pi(wt(.1,1,0)),0);let m=jt.fill*.85*Math.sqrt(e()),p=e()*Ye;r(n.bowl,l,wt(jt.x+Math.cos(p)*m,Lo(m)+.035+e()*.02,jt.z+Math.sin(p)*m),pi(wt(Math.cos(p*3+l),(e()-.5)*.25,Math.sin(p*3+l)),e()*Ye),.95)}return n.packed.arc=1,n}function My({canvas:i,story:t,onReady:e,onFail:n}){let s;try{s=new Eo({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(F){n&&n(F.message);return}let r=t.content,a=matchMedia("(pointer: coarse)").matches,c=Math.min(innerWidth,innerHeight)<700||(navigator.hardwareConcurrency||8)<=4,h=Math.min(devicePixelRatio||1,c?1.5:2);s.setPixelRatio(h),s.setClearColor(0,0),s.outputColorSpace=He,s.toneMapping=er;let d=!0,u=new bi,f=new Be(30,1,.05,80),x=new ps(s),M=x.fromScene(new Co,.04);u.environment=M.texture,x.dispose(),u.fog=new zs(new At(ru),10,30);let m=new js(16775142,7241557,.55),p=new ls(16773594,2.6);p.position.set(-3.5,5,6);let T=new ls(16769712,1.2);T.position.set(5,2.5,-4),u.add(m,p,T,p.target,T.target);let b=Po(2024),A=Hg(b,c?10:13,c?5:6),C=A.slots.length,S=Qg(A,C,b),R=jg(A),v=Float32Array.from({length:C},()=>b()),w=Xg(),P=qg(),L=iu(new Ti({color:16777215,map:P.map,normalMap:P.normal,normalScale:new St(1.15,1.15),roughness:.34,specularIntensity:.7,clearcoat:.3,clearcoatRoughness:.16,sheen:.18,sheenColor:new At(16774110),sheenRoughness:.5}),"#FFDDB0",.6),O=iu(new Oe({color:16777215,map:P.map,normalMap:P.normal,normalScale:new St(.45,.45),roughness:.42}),"#FFDDB0",.45),X=new At,J=new Ti({color:13211727,roughness:.62,map:w.map,bumpMap:w.bump,bumpScale:1.4,sheen:.6,sheenColor:new At(16770744),sheenRoughness:.6,side:Ze,transparent:!0}),V=new Oe({color:13211727,roughness:.6,map:w.map,bumpMap:w.bump,bumpScale:1}),Y=new Oe({color:8032072,roughness:.7,transparent:!0}),H=new Oe({color:7309893,roughness:.55,side:Ze,transparent:!0}),Q=new Oe({color:11903066,roughness:.7,transparent:!0,map:w.map}),tt=new Oe({color:9345621,roughness:.7,transparent:!0}),pt=c?{segs:64,rings:80}:{segs:128,rings:160},ft=new Qe,Mt=new ie(vs(pt),L);ft.add(Mt);let Zt=[0,1].map(F=>{let it=new Qe;it.position.y=-.535;let st=new ie(vs({...pt,husk:!0,thetaStart:F?Math.PI:0,thetaLen:Math.PI}),J);return st.position.y=.535,it.add(st),ft.add(it),it});ft.scale.setScalar(di),u.add(ft);let de=hc([new rs(A.rachis,160,.024,7,!1),...A.curves.map(F=>new rs(F,20,.009,5,!1))]),te=new ie(de,Y),j=hc([uc(new qn([wt(0,-2.7,.05),wt(-.45,-1.4,.3),wt(-.95,0,.42),wt(-1.2,.9,.3),wt(-1.05,1.45,.2)]),.13),uc(new qn([wt(.02,-3.7,0),wt(.6,-2.6,.4),wt(1.3,-1.75,.62),wt(1.9,-1.45,.55),wt(2.3,-1.6,.45)]),.12),uc(new qn([wt(-.03,-4.6,0),wt(-.7,-3.4,-.4),wt(-1.5,-2.6,-.5),wt(-2.1,-2.5,-.3)]),.12)]),ot=new ie(j,H),nt=vs({segs:c?12:16,rings:c?14:20,husk:!0}),Pt=new In(nt,V,C),Bt=new In(vs({segs:c?12:16,rings:c?18:26,seed:3}),O,C),Lt=new At;for(let F=0;F<C;F++){let it=.9+b()*.18;Pt.setColorAt(F,Lt.setRGB(it,it*(.96+b()*.06),it*(.9+b()*.12)));let st=.95+b()*.07;Bt.setColorAt(F,Lt.setRGB(st,st,st*(.97+b()*.04)))}for(let F of[Pt,Bt])F.instanceMatrix.setUsage(Nl),F.frustumCulled=!1;u.add(te,ot,Pt,Bt);let pe=new Qe,Kt=vs({segs:8,rings:10,husk:!0});[[-2.4,-.5,-3.4,.9,1],[4.1,-.9,-4.6,-.6,1.05],[-.6,-.3,-7.2,2.2,1.1]].forEach(([F,it,st,zt,Rt])=>{let Yt=new Qe;Yt.add(new ie(de,tt));let Ft=new In(Kt,Q,C),Vt=new re,Gt=wt(di,di,di);A.slots.forEach((ve,ne)=>Ft.setMatrixAt(ne,Vt.compose(ve.p,ve.q,Gt))),Yt.add(Ft),Yt.position.set(F,it,st),Yt.rotation.y=zt,Yt.scale.setScalar(Rt),pe.add(Yt)}),u.add(pe);let se=new ie(new Ys(2.6,72),Jg());se.rotation.x=-Math.PI/2,se.position.set(.45,-1.7,.2),u.add(se);let Qt=new ie(new ii(4.2,3.2),new ni({map:fc(),color:7033908,transparent:!0,depthWrite:!1,opacity:0}));Qt.rotation.x=-Math.PI/2,Qt.position.set(.95,-2.66,.05),u.add(Qt);let qt=new Qe,Me=new is([[0,.07],[.9,.1],[1.6,.32],[2.08,.75],[2.27,1.2],[2.31,1.27],[2.38,1.22],[2.25,.8],[1.85,.32],[1.2,.06],[1.08,0],[.95,-.02],[0,-.02]].map(([F,it])=>new St(F,it))).getPoints(90),Ae=new Ti({color:998702,roughness:.32,clearcoat:.8,clearcoatRoughness:.12,side:Ze,transparent:!0}),_e=new ss(Me,c?64:110);_e.scale(1,jt.depth,1),qt.add(new ie(_e,Ae));let be=[];for(let F=0;F<=24;F++){let it=F/24*(jt.fill+.06);be.push(new St(it,Lo(Math.min(it,jt.fill))-jt.y-.07-(it>jt.fill?.12:0)))}let fe=new ss(be,c?48:80);{let F=fe.attributes.position,it=fe.attributes.uv;for(let st=0;st<F.count;st++)it.setXY(st,F.getX(st)/jt.fill*1.6,F.getZ(st)/jt.fill*1.6)}let Se=Ii(512,512,(F,it,st)=>{let zt=Po(21);F.fillStyle="#B9AD93",F.fillRect(0,0,it,st);for(let Rt=0;Rt<2600;Rt++){let Yt=zt()*it,Ft=zt()*st,Vt=zt()*Math.PI,Gt=9+zt()*4;F.save(),F.translate(Yt,Ft),F.rotate(Vt),F.fillStyle="rgba(90,78,58,.35)",F.beginPath(),F.ellipse(1,1.2,Gt,1.9,0,0,Ye),F.fill();let ve=205+zt()*45;F.fillStyle=`rgb(${ve},${ve-6},${ve-22})`,F.beginPath(),F.ellipse(0,0,Gt,1.8,0,0,Ye),F.fill(),F.restore()}},!0),D=new ie(fe,new Oe({map:Se,roughness:.7,transparent:!0,side:Ze}));D.position.set(jt.x,jt.y,jt.z),qt.add(D);let Ee=c?420:800,ee=new In(vs({segs:8,rings:12,seed:5}),O,Ee),E=new Float32Array(Ee),g=new Float32Array(Ee),N=[],k=[];for(let F=0;F<Ee;F++){let it=jt.fill*Math.sqrt(b()),st=b()*Ye,zt=b()*.02;N.push(wt(jt.x+Math.cos(st)*it,Lo(it)-zt,jt.z+Math.sin(st)*it)),k.push(pi(wt(Math.cos(st*5+F),(b()-.5)*.35,Math.sin(st*5+F)),b()*Ye)),g[F]=di*(.9+b()*.12),E[F]=b();let Rt=.93+b()*.09;ee.setColorAt(F,Lt.setRGB(Rt,Rt*.995,Rt*(.96+b()*.05)))}ee.frustumCulled=!1,qt.add(ee);let W=new ie(new ii(7,7),new ni({map:fc(),color:7033908,transparent:!0,depthWrite:!1,opacity:0}));W.rotation.x=-Math.PI/2,W.position.set(jt.x,jt.y-.03,jt.z),u.add(W),qt.children[0].position.set(jt.x,jt.y,jt.z),u.add(qt);let et=new Qe,rt=new Oe({color:15722971,roughness:.5,metalness:.05,transparent:!0}),q=new Oe({color:16777215,roughness:.45,transparent:!0}),K=new ie(new Ro(1.32,2.05,.5,4,.09),[rt,rt,rt,rt,q,rt]),ct=new ie(new cn(1.34,.09,.2),new Oe({color:998702,roughness:.5,metalness:.05,transparent:!0}));ct.position.y=1,et.add(K,ct),et.position.set(.95,-1.85,-.25),u.add(et);let Ct=[rt,q,ct.material];Yg().then(F=>{q.map=F,q.needsUpdate=!0,d=!0});let dt=c?110:240,lt=new Float32Array(dt*3),It=new Float32Array(dt);for(let F=0;F<dt;F++)lt[F*3]=(b()-.5)*9,lt[F*3+1]=(b()-.5)*7,lt[F*3+2]=(b()-.5)*6,It[F]=b();let Dt=new Ce;Dt.setAttribute("position",new ce(lt,3)),Dt.setAttribute("aSeed",new ce(It,1));let Nt=new Ws(Dt,Zg(fc()));Nt.frustumCulled=!1,u.add(Nt);let _={target:new I,heroP:new I,heroQ:new we,fog:new At,keyColor:new At,rimColor:new At,frame:[1,1],fx:.5,fy:.5,fw:1,fh:1},ht=["yaw","pitch","husk","huskVis","ripe","milled","stem","leaves","bgP","water","pack","packAt","floor","bowl","motes","gold","spin","opacity","key","rim","hemi","env","exposure"],Z=new At,ut=new At;function xt(F,it){let st=it.length,zt=Math.min(st-2,Math.max(0,Math.floor(F))),Rt=st<2?0:Yn(F-zt),Yt=it[zt],Ft=it[Math.min(st-1,zt+1)],Vt=R[Yt.key]||R.hero,Gt=R[Ft.key]||R.hero;for(let Ke of ht)_[Ke]=De(Vt[Ke],Gt[Ke],Rt);_.target.lerpVectors(Vt.target,Gt.target,Rt),_.frame[0]=De(Vt.frame[0],Gt.frame[0],Rt),_.frame[1]=De(Vt.frame[1],Gt.frame[1],Rt);let ve=R.poses[Vt.hero],ne=R.poses[Gt.hero];_.heroP.lerpVectors(ve.p,ne.p,Rt),_.heroQ.slerpQuaternions(ve.q,ne.q,Rt),_.fog.copy(Z.set(Vt.fog)).lerp(ut.set(Gt.fog),Rt),_.keyColor.copy(Z.set(Vt.keyColor)).lerp(ut.set(Gt.keyColor),Rt),_.rimColor.copy(Z.set(Vt.rimColor)).lerp(ut.set(Gt.rimColor),Rt),_.fx=De(Yt.fx,Ft.fx,Rt),_.fy=De(Yt.fy,Ft.fy,Rt),_.fw=De(Yt.fw,Ft.fw,Rt),_.fh=De(Yt.fh,Ft.fh,Rt),_.layoutA=Vt.layout,_.layoutB=Gt.layout,_.f=Rt}let $=new At("#8AA552"),Tt=new At("#BDB15E"),_t=new At("#CB9A52"),me=new At("#6E8C43"),he=new At("#B8925A"),rn=new At("#FFF6E3"),an=new At("#FFC978"),Do=new re,As=new I,Ms=new we,Pi=new we,xr=new we,vr=new I,Ss=new we,Un=wt(.3,1,.2).normalize(),Li="";function yr(){let F=S[_.layoutA],it=S[_.layoutB],st=_.f,zt=_.layoutA+_.layoutB+st.toFixed(4)+(_.milled<.5?"h":"m");if(zt===Li)return;Li=zt;let Rt=F.arc||it.arc?1:0;Pt.visible=_.milled<.5,Bt.visible=!Pt.visible;let Yt=Pt.visible?Pt:Bt;for(let Ft=0;Ft<C;Ft++){let Vt=v[Ft]*.42,Gt=F===it?1:fi(Yn((st-Vt)/.58));if(As.set(De(F.p[Ft*3],it.p[Ft*3],Gt),De(F.p[Ft*3+1],it.p[Ft*3+1],Gt),De(F.p[Ft*3+2],it.p[Ft*3+2],Gt)),Rt){let ne=it.p[Ft*3]-F.p[Ft*3],Ke=it.p[Ft*3+2]-F.p[Ft*3+2];As.y+=Math.sin(Math.PI*Gt)*(.8+.25*Math.hypot(ne,Ke))}Pi.fromArray(F.q,Ft*4),xr.fromArray(it.q,Ft*4),Ms.slerpQuaternions(Pi,xr,Gt);let ve=De(F.s[Ft],it.s[Ft],Rt&&it.arc?fi(Yn((Gt-.55)/.45)):Gt)*di;Yt.setMatrixAt(Ft,Do.compose(As,Ms,vr.set(ve,ve,ve)))}Yt.instanceMatrix.needsUpdate=!0}let _s=-1,Di=new re,Ar=new I;function Fi(){let F=_.bowl;if(pn(qt,F),pn(W,F),Ae.opacity=fi(Yn(F*2)),Ae.depthWrite=F>.6,D.material.opacity=fi(Yn((F-.35)*2.5)),W.material.opacity=F*.4,!(Math.abs(F-_s)<1e-4)){_s=F;for(let it=0;it<Ee;it++){let st=fi(Yn((F-.3-E[it]*.5)/.2));ee.setMatrixAt(it,Di.compose(N[it],k[it],Ar.setScalar(g[it]*st)))}ee.instanceMatrix.needsUpdate=!0}}function Mr(F,it){return F<.5?it.copy($).lerp(Tt,F/.5):it.copy(Tt).lerp(_t,(F-.5)/.5)}let pn=(F,it)=>{F.visible=it>.01};function Fo(F){Mr(_.ripe,X),J.color.copy(X),J.opacity=_.huskVis,V.color.copy(X),Y.color.copy(me).lerp(he,_.ripe),Y.opacity=_.stem*_.stem,pn(te,_.stem),H.color.copy(me).lerp(he,_.ripe*.85),H.opacity=_.leaves*_.leaves,pn(ot,_.leaves),Q.color.copy(X),Q.opacity=_.bgP*_.bgP,tt.color.copy(Y.color),tt.opacity=_.bgP*_.bgP,pn(pe,_.bgP),se.material.uniforms.uOpacity.value=_.water,se.material.uniforms.uTime.value=F,pn(se,_.water),Qt.material.opacity=_.floor*.32,pn(Qt,_.floor),Fi();let it=_.pack*_.pack;Ct.forEach(Yt=>{Yt.opacity=it,Yt.depthWrite=it>.95}),pn(et,_.pack);let st=fi(_.packAt),zt=De(1,2.35,st);et.scale.setScalar(zt),et.position.set(De(.95,jt.x-4.35,st),De(-1.85-(1-_.pack)*.5,jt.y+1.025*zt,st),De(-.25,jt.z-1.7,st)),et.rotation.y=De(-.35,0,_.pack)+st*.16,Nt.material.uniforms.uTime.value=F,Nt.material.uniforms.uOpacity.value=_.motes*.55,Nt.material.uniforms.uColor.value.copy(rn).lerp(an,_.gold),Nt.material.uniforms.uSize.value=(26+30*_.gold)*h,Nt.position.copy(_.target),p.color.copy(_.keyColor),p.intensity=_.key,T.color.copy(_.rimColor),T.intensity=_.rim,m.intensity=_.hemi,u.environmentIntensity=_.env,s.toneMappingExposure=_.exposure,u.fog.color.copy(_.fog),i.style.opacity=_.opacity.toFixed(3),ft.position.copy(_.heroP),Ss.setFromAxisAngle(Un,Math.sin(F*.32)*.55*_.spin),ft.quaternion.copy(_.heroQ).multiply(Ss);let Rt=fi(_.husk);Zt[0].rotation.x=Rt*1.25,Zt[1].rotation.x=-Rt*1.25,Zt[0].position.z=Rt*.35,Zt[1].position.z=-Rt*.35,Zt[0].visible=Zt[1].visible=_.huskVis>.01,yr()}let Fe={x:0,y:0,tx:0,ty:0},on=1,mn=1;function y(F,it){let st=Math.tan(f.fov*Math.PI/360),zt=on/mn,Rt=Math.max(_.frame[1]/(2*st*_.fh),_.frame[0]/(2*st*zt*_.fw)),Yt=_.yaw+Fe.x*.08+(it?Math.sin(F*.13)*.03:0),Ft=_.pitch+Fe.y*.05;f.position.set(_.target.x+Rt*Math.cos(Ft)*Math.sin(Yt),_.target.y+Rt*Math.sin(Ft),_.target.z+Rt*Math.cos(Ft)*Math.cos(Yt)),f.lookAt(_.target),f.near=Math.max(.02,Rt*.05),f.far=Rt+40,f.setViewOffset(on,mn,(.5-_.fx)*on,(.5-_.fy)*mn,on,mn),f.updateProjectionMatrix();let Vt=Math.max(_.frame[0],_.frame[1]);u.fog.near=Rt+Vt*.6,u.fog.far=Rt+Vt*.6+Math.max(6,Rt*2.4),G()}let U="";function G(){let F="none";if(_.fw<.7){let it=_.fx-_.fw/2-.03-Math.max(0,.5-_.fx)*2,st=_.fx+_.fw/2+.03+Math.max(0,_.fx-.5)*2,zt=Rt=>(Rt*100).toFixed(1)+"%";F=`linear-gradient(90deg, transparent ${zt(it)}, #000 ${zt(it+.1)}, #000 ${zt(st-.1)}, transparent ${zt(st)})`}F!==U&&(U=F,i.style.webkitMaskImage=F,i.style.maskImage=F)}function B(){let F=t.keyframes,it=F.length,st=scrollY;if(it<2||st<=F[0].y)return 0;for(let zt=0;zt<it-1;zt++){let Rt=F[zt],Yt=F[zt+1];if(st<Yt.y){let Ft=(st-Rt.y)/(Yt.y-Rt.y);return zt+(Yt.ease==="linear"?Ft:Gg(Yn((Ft-.16)/.68)))}}return it-1}function z(){let F=i.clientWidth||innerWidth,it=i.clientHeight||innerHeight;a&&Math.abs(F-on)<1&&Math.abs(it-mn)<140&&on>1||(on=F,mn=it,s.setSize(on,mn,!1),f.aspect=on/mn,d=!0)}addEventListener("resize",z),z(),a||addEventListener("pointermove",F=>{Fe.tx=F.clientX/innerWidth*2-1,Fe.ty=F.clientY/innerHeight*2-1},{passive:!0});let mt=5e3,vt=performance.now()+mt,at=1,bt=()=>{vt=performance.now()+mt};["scroll","pointermove","pointerdown","touchstart","keydown","wheel"].forEach(F=>addEventListener(F,bt,{passive:!0})),i.addEventListener("webglcontextlost",F=>{F.preventDefault(),cancelAnimationFrame(Et),n&&n("WebGL context lost")});let Et=0,kt=performance.now(),Wt=0,yt=B(),ae=!1,xe=-1,ue=0,oe=0;function Re(F){if(Et=requestAnimationFrame(Re),document.hidden){kt=F;return}let it=Math.min(.1,(F-kt)/1e3);kt=F;let st=t.reduced(),zt=!st&&F<vt;at+=((zt?1:0)-at)*(1-Math.exp(-it*2.5)),at<.002&&(at=0);let Rt=!st&&at>0,Yt=t.keyframes;if(Yt.length<2)return;t.version!==xe&&(xe=t.version,d=!0);let Ft=B(),Vt=yt;st?yt=Math.round(Ft):(Math.abs(Ft-yt)>2.5&&(yt=Ft-Math.sign(Ft-yt)*2.5),yt+=(Ft-yt)*(1-Math.exp(-it*5)),Math.abs(Ft-yt)<1e-4&&(yt=Ft));let Gt=Fe.x,ve=Fe.y;st?Fe.x=Fe.y=0:Rt&&(Fe.x+=(Fe.tx-Fe.x)*(1-Math.exp(-it*3))*at,Fe.y+=(Fe.ty-Fe.y)*(1-Math.exp(-it*3))*at,Wt+=it*at);let ne=yt!==Vt||Fe.x!==Gt||Fe.y!==ve;!Rt&&!ne&&!d||(d=!1,xt(yt,Yt),Fo(Wt),y(Wt,!st),_.opacity>.001&&s.render(u,f),ae||(ae=!0,e&&e()),zt&&at>.99&&oe<600&&(oe++,ue=it>.026?ue+1:Math.max(0,ue-1),ue>45&&h>1&&(h=Math.max(1,h-.25),s.setPixelRatio(h),s.setSize(on,mn,!1),ue=0)))}return/[?&]debug\b/.test(location.search)&&(window.__mvs={scene:u,hero:ft,grains:Pt,stem:te,leaves:ot,packGroup:et,S:_,LAY:S}),Et=requestAnimationFrame(Re),{stop:()=>cancelAnimationFrame(Et)}}export{My as start};
/*! For license information please see grain-scene.js.LEGAL.txt */
