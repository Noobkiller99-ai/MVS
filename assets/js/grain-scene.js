var kc=0,vl=1,Gc=2;var tr=1,Hc=2,cs=3,Gn=0,ze=1,Je=2,Pn=0,Mi=1,Al=2,Ml=3,Sl=4,Wc=5;var ei=100,Xc=101,Yc=102,qc=103,Zc=104,Jc=200,Kc=201,jc=202,Qc=203,Yr=204,qr=205,$c=206,th=207,eh=208,nh=209,ih=210,sh=211,rh=212,ah=213,oh=214,Zr=0,Jr=1,Kr=2,Si=3,jr=4,Qr=5,$r=6,ta=7,La=0,lh=1,ch=2,An=0,_l=1,bl=2,El=3,er=4,wl=5,Tl=6,Cl=7;var Rl=300,oi=301,Ti=302,Da=303,Ua=304,nr=306,_i=1e3,bn=1001,ea=1002,Fe=1003,hh=1004;var ir=1005;var Ve=1006,Na=1007;var li=1008;var $e=1009,Il=1010,Pl=1011,hs=1012,Fa=1013,Mn=1014,un=1015,Ln=1016,Oa=1017,Ba=1018,us=1020,Ll=35902,Dl=35899,Ul=1021,Nl=1022,fn=1023,En=1026,ci=1027,Va=1028,za=1029,hi=1030,ka=1031;var Ga=1033,sr=33776,rr=33777,ar=33778,or=33779,Ha=35840,Wa=35841,Xa=35842,Ya=35843,qa=36196,Za=37492,Ja=37496,Ka=37488,ja=37489,lr=37490,Qa=37491,$a=37808,to=37809,eo=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,xo=36283,yo=36284,cr=36285,vo=36286;var Ds=2300,na=2301,Xr=2302,ll=2303,cl=2400,hl=2401,ul=2402;var uh=3200;var hr=0,fh=1,Yn="",He="srgb",Us="srgb-linear",Ns="linear",le="srgb";var vi=7680;var fl=519,dh=512,ph=513,mh=514,Ao=515,gh=516,xh=517,Mo=518,yh=519,dl=35044,Fl=35048;var Ol="300 es",vn=2e3,Ki=2001;function au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ou(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){let i=Fs("canvas");return i.style.display="block",i}var pc={},ji=null;function Bl(...i){let t="THREE."+i.shift();ji?ji("log",t,...i):console.log(t,...i)}function Ah(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=Ah(i);let t="THREE."+i.shift();if(ji)ji("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ot(...i){i=Ah(i);let t="THREE."+i.shift();if(ji)ji("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ai(...i){let t=i.join(" ");t in pc||(pc[t]=!0,Nt(...i))}function Mh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Sh={[Zr]:Jr,[Kr]:$r,[jr]:ta,[Si]:Qr,[Jr]:Zr,[$r]:Kr,[ta]:jr,[Qr]:Si},wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var No=Math.PI/180,ia=180/Math.PI;function ur(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function Fo(i,t,e){return(1-e)*i+e*t}function bs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wl=class Wl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;var St=Wl,Te=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],x=r[a+2],M=r[a+3];if(d!==M||c!==u||l!==f||h!==x){let m=c*u+l*f+h*x+d*M;m<0&&(u=-u,f=-f,x=-x,M=-M,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),b=Math.sin(w);p=Math.sin(p*w)/b,o=Math.sin(o*w)/b,c=c*p+u*o,l=l*p+f*o,h=h*p+x*o,d=d*p+M*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+x*o,d=d*p+M*o;let w=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=w,l*=w,h*=w,d*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*d+c*f-l*u,t[e+1]=c*x+h*u+l*d-o*f,t[e+2]=l*x+h*f+o*u-c*d,t[e+3]=h*x-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"YZX":this._x=u*h*d+l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d-u*f*x;break;case"XZY":this._x=u*h*d-l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d+u*f*x;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xl=class Xl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xl.prototype.isVector3=!0;var I=Xl,Oo=new I,mc=new Te,Yl=class Yl{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],x=n[8],M=s[0],m=s[3],p=s[6],w=s[1],b=s[4],A=s[7],C=s[2],S=s[5],R=s[8];return r[0]=a*M+o*w+c*C,r[3]=a*m+o*b+c*S,r[6]=a*p+o*A+c*R,r[1]=l*M+h*w+d*C,r[4]=l*m+h*b+d*S,r[7]=l*p+h*A+d*R,r[2]=u*M+f*w+x*C,r[5]=u*m+f*b+x*S,r[8]=u*p+f*A+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,x=e*d+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=d*M,t[1]=(s*l-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yl.prototype.isMatrix3=!0;var Ht=Yl,Bo=new Ht,gc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cu(){let i={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Us]:{primaries:t,whitePoint:n,transfer:Ns,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:le,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}var $t=cu();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fi,sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=Fs("canvas")),Fi.width=t.width,Fi.height=t.height;let s=Fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hu=0,Qi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vo(s[a].image)):r.push(Vo(s[a]))}else r=Vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var uu=0,zo=new I,Ze=class i extends wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=Ve,a=li,o=fn,c=$e,l=i.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ur(),this.name="",this.source=new Qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _i:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _i:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Rl;Ze.DEFAULT_ANISOTROPY=1;var ql=class ql{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],x=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,A=(f+1)/2,C=(p+1)/2,S=(h+u)/4,R=(d+M)/4,y=(x+m)/4;return b>A&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=R/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=S/s,r=y/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=y/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-x)*(m-x)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(d-M)/w,this.z=(u-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ql.prototype.isVector4=!0;var ve=ql,ra=class extends wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ra{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Os=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pa=class Pa{constructor(t,e,n,s,r,a,o,c,l,h,d,u,f,x,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,f,x,M,m)}set(t,e,n,s,r,a,o,c,l,h,d,u,f,x,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=x,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,x=o*h,M=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+x*l,e[5]=u-M*l,e[9]=-o*c,e[2]=M-u*l,e[6]=x+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,x=l*h,M=l*d;e[0]=u+M*o,e[4]=x*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=M+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,x=l*h,M=l*d;e[0]=u-M*o,e[4]=-a*d,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,x=o*h,M=o*d;e[0]=c*h,e[4]=x*l-f,e[8]=u*l+M,e[1]=c*d,e[5]=M*l+u,e[9]=f*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,x=o*c,M=o*l;e[0]=c*h,e[4]=M-u*d,e[8]=x*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+x,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*c,f=a*l,x=o*c,M=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fu,t,du)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Zn.crossVectors(n,tn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Zn.crossVectors(n,tn)),Zn.normalize(),Sr.crossVectors(tn,Zn),s[0]=Zn.x,s[4]=Sr.x,s[8]=tn.x,s[1]=Zn.y,s[5]=Sr.y,s[9]=tn.y,s[2]=Zn.z,s[6]=Sr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],x=n[2],M=n[6],m=n[10],p=n[14],w=n[3],b=n[7],A=n[11],C=n[15],S=s[0],R=s[4],y=s[8],T=s[12],P=s[1],L=s[5],O=s[9],Y=s[13],Z=s[2],z=s[6],q=s[10],H=s[14],Q=s[3],tt=s[7],pt=s[11],ft=s[15];return r[0]=a*S+o*P+c*Z+l*Q,r[4]=a*R+o*L+c*z+l*tt,r[8]=a*y+o*O+c*q+l*pt,r[12]=a*T+o*Y+c*H+l*ft,r[1]=h*S+d*P+u*Z+f*Q,r[5]=h*R+d*L+u*z+f*tt,r[9]=h*y+d*O+u*q+f*pt,r[13]=h*T+d*Y+u*H+f*ft,r[2]=x*S+M*P+m*Z+p*Q,r[6]=x*R+M*L+m*z+p*tt,r[10]=x*y+M*O+m*q+p*pt,r[14]=x*T+M*Y+m*H+p*ft,r[3]=w*S+b*P+A*Z+C*Q,r[7]=w*R+b*L+A*z+C*tt,r[11]=w*y+b*O+A*q+C*pt,r[15]=w*T+b*Y+A*H+C*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],x=t[3],M=t[7],m=t[11],p=t[15],w=c*f-l*u,b=o*f-l*d,A=o*u-c*d,C=a*f-l*h,S=a*u-c*h,R=a*d-o*h;return e*(M*w-m*b+p*A)-n*(x*w-m*C+p*S)+s*(x*b-M*C+p*R)-r*(x*A-M*S+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],x=t[12],M=t[13],m=t[14],p=t[15],w=e*o-n*a,b=e*c-s*a,A=e*l-r*a,C=n*c-s*o,S=n*l-r*o,R=s*l-r*c,y=h*M-d*x,T=h*m-u*x,P=h*p-f*x,L=d*m-u*M,O=d*p-f*M,Y=u*p-f*m,Z=w*Y-b*O+A*L+C*P-S*T+R*y;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/Z;return t[0]=(o*Y-c*O+l*L)*z,t[1]=(s*O-n*Y-r*L)*z,t[2]=(M*R-m*S+p*C)*z,t[3]=(u*S-d*R-f*C)*z,t[4]=(c*P-a*Y-l*T)*z,t[5]=(e*Y-s*P+r*T)*z,t[6]=(m*A-x*R-p*b)*z,t[7]=(h*R-u*A+f*b)*z,t[8]=(a*O-o*P+l*y)*z,t[9]=(n*P-e*O-r*y)*z,t[10]=(x*S-M*A+p*w)*z,t[11]=(d*A-h*S-f*w)*z,t[12]=(o*T-a*L-c*y)*z,t[13]=(e*L-n*T+s*y)*z,t[14]=(M*b-x*C-m*w)*z,t[15]=(h*C-d*b+u*w)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,x=r*d,M=a*h,m=a*d,p=o*d,w=c*l,b=c*h,A=c*d,C=n.x,S=n.y,R=n.z;return s[0]=(1-(M+p))*C,s[1]=(f+A)*C,s[2]=(x-b)*C,s[3]=0,s[4]=(f-A)*S,s[5]=(1-(u+p))*S,s[6]=(m+w)*S,s[7]=0,s[8]=(x+b)*R,s[9]=(m-w)*R,s[10]=(1-(u+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Oi.set(s[0],s[1],s[2]).length(),o=Oi.set(s[4],s[5],s[6]).length(),c=Oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gn.copy(this);let l=1/a,h=1/o,d=1/c;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,e.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=vn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),x,M;if(c)x=r/(a-r),M=a*r/(a-r);else if(o===vn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ki)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),x,M;if(c)x=1/(a-r),M=a/(a-r);else if(o===vn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ki)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Pa.prototype.isMatrix4=!0;var re=Pa,Oi=new I,gn=new re,fu=new I(0,0,0),du=new I(1,1,1),Zn=new I,Sr=new I,tn=new I,yc=new re,vc=new Te,Tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pu=0,Ac=new I,Bi=new Te,Fn=new re,_r=new I,Es=new I,mu=new I,gu=new Te,Mc=new I(1,0,0),Sc=new I(0,1,0),_c=new I(0,0,1),bc={type:"added"},xu={type:"removed"},Vi={type:"childadded",child:null},ko={type:"childremoved",child:null},Ie=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Tn,n=new Te,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ht}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Es,_r,this.up):Fn.lookAt(_r,Es,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},yu={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&u>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},br={h:0,s:0,l:0};function Go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=lu(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Go(a,r,t+1/3),this.g=Go(a,r,t),this.b=Go(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return $t.workingToColorSpace(Ge.copy(this),t),Math.round(Zt(Ge.r*255,0,255))*65536+Math.round(Zt(Ge.g*255,0,255))*256+Math.round(Zt(Ge.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=He){$t.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(br);let n=Fo(Jn.h,br.h,e),s=Fo(Jn.s,br.s,e),r=Fo(Jn.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new At;At.NAMES=_h;var Vs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bi=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new I,On=new I,Ho=new I,Bn=new I,zi=new I,ki=new I,Ec=new I,Wo=new I,Xo=new I,Yo=new I,qo=new ve,Zo=new ve,Jo=new ve,ti=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),On.subVectors(n,e),Ho.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(On),c=xn.dot(Ho),l=On.dot(On),h=On.dot(Ho),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return qo.setScalar(0),Zo.setScalar(0),Jo.setScalar(0),qo.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,n),Jo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qo,r.x),a.addScaledVector(Zo,r.y),a.addScaledVector(Jo,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),On.subVectors(t,e),xn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;zi.subVectors(s,n),ki.subVectors(r,n),Wo.subVectors(t,n);let c=zi.dot(Wo),l=ki.dot(Wo);if(c<=0&&l<=0)return e.copy(n);Xo.subVectors(t,s);let h=zi.dot(Xo),d=ki.dot(Xo);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(zi,a);Yo.subVectors(t,r);let f=zi.dot(Yo),x=ki.dot(Yo);if(x>=0&&f<=x)return e.copy(r);let M=f*l-c*x;if(M<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(ki,o);let m=h*x-f*d;if(m<=0&&d-h>=0&&f-x>=0)return Ec.subVectors(r,s),o=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(Ec,o);let p=1/(m+M+u);return a=M*p,o=u*p,e.copy(n).addScaledVector(zi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),wr.subVectors(this.max,ws),Gi.subVectors(t.a,ws),Hi.subVectors(t.b,ws),Wi.subVectors(t.c,ws),Kn.subVectors(Hi,Gi),jn.subVectors(Wi,Hi),mi.subVectors(Gi,Wi);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-mi.z,mi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,mi.z,0,-mi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-mi.y,mi.x,0];return!Ko(e,Gi,Hi,Wi,wr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,Gi,Hi,Wi,wr))?!1:(Tr.crossVectors(Kn,jn),e=[Tr.x,Tr.y,Tr.z],Ko(e,Gi,Hi,Wi,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,Er=new Cn,Gi=new I,Hi=new I,Wi=new I,Kn=new I,jn=new I,mi=new I,ws=new I,wr=new I,Tr=new I,gi=new I;function Ko(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var we=new I,Cr=new St,vu=0,We=class extends wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var zs=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ks=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},Au=new Cn,Ts=new I,jo=new I,Hn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(jo)),this.expandByPoint(Ts.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mu=0,ln=new re,Qo=new Ie,Xi=new I,en=new Cn,Cs=new Cn,Ne=new I,Ce=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?ks:zs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(en.min,Cs.min),en.expandByPoint(Ne),Ne.addVectors(en.max,Cs.max),en.expandByPoint(Ne)):(en.expandByPoint(Cs.min),en.expandByPoint(Cs.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(t,l),Ne.add(Xi)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new I,c[y]=new I;let l=new I,h=new I,d=new I,u=new St,f=new St,x=new St,M=new I,m=new I;function p(y,T,P){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),x.fromBufferAttribute(r,P),h.sub(l),d.sub(l),f.sub(u),x.sub(u);let L=1/(f.x*x.y-x.x*f.y);isFinite(L)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(L),o[y].add(M),o[T].add(M),o[P].add(M),c[y].add(m),c[T].add(m),c[P].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let y=0,T=w.length;y<T;++y){let P=w[y],L=P.start,O=P.count;for(let Y=L,Z=L+O;Y<Z;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let b=new I,A=new I,C=new I,S=new I;function R(y){C.fromBufferAttribute(s,y),S.copy(C);let T=o[y];b.copy(T),b.sub(C.multiplyScalar(C.dot(T))).normalize(),A.crossVectors(S,T);let L=A.dot(c[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,L)}for(let y=0,T=w.length;y<T;++y){let P=w[y],L=P.start,O=P.count;for(let Y=L,Z=L+O;Y<Z;Y+=3)R(t.getX(Y+0)),R(t.getX(Y+1)),R(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let x=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,x=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*h;for(let p=0;p<h;p++)u[x++]=l[f++]}return new We(u,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Su=0,Rn=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=Mi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=qr,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==qr&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new St().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var zn=new I,$o=new I,Rr=new I,Qn=new I,tl=new I,Ir=new I,el=new I,Gs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub($o);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Rr),o=Qn.dot(this.direction),c=-Qn.dot(Rr),l=Qn.lengthSq(),h=Math.abs(1-a*a),d,u,f,x;if(h>0)if(d=a*c-o,u=a*o-c,x=r*h,d>=0)if(u>=-x)if(u<=x){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($o).addScaledVector(Rr,u),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){tl.subVectors(e,t),Ir.subVectors(n,t),el.crossVectors(tl,Ir);let a=this.direction.dot(el),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);let c=o*this.direction.dot(Ir.crossVectors(Qn,Ir));if(c<0)return null;let l=o*this.direction.dot(tl.cross(Qn));if(l<0||c+l>a)return null;let h=-o*Qn.dot(el);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ni=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wc=new re,xi=new Gs,Pr=new Hn,Tc=new I,Lr=new I,Dr=new I,Ur=new I,nl=new I,Nr=new I,Cc=new I,Fr=new I,ie=class extends Ie{constructor(t=new Ce,e=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(nl.fromBufferAttribute(d,t),a?Nr.addScaledVector(nl,h):Nr.addScaledVector(nl.sub(e),h))}e.add(Nr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(Pr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Pr,Tc)===null||xi.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let m=u[x],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let A=w,C=b;A<C;A+=3){let S=o.getX(A),R=o.getX(A+1),y=o.getX(A+2);s=Or(this,p,t,n,l,h,d,S,R,y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=x,p=M;m<p;m+=3){let w=o.getX(m),b=o.getX(m+1),A=o.getX(m+2);s=Or(this,a,t,n,l,h,d,w,b,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let m=u[x],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let A=w,C=b;A<C;A+=3){let S=A,R=A+1,y=A+2;s=Or(this,p,t,n,l,h,d,S,R,y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=x,p=M;m<p;m+=3){let w=m,b=m+1,A=m+2;s=Or(this,a,t,n,l,h,d,w,b,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function _u(i,t,e,n,s,r,a,o){let c;if(t.side===ze?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Gn,o),c===null)return null;Fr.copy(o),Fr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Fr);return l<e.near||l>e.far?null:{distance:l,point:Fr.clone(),object:i}}function Or(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Lr),i.getVertexPosition(c,Dr),i.getVertexPosition(l,Ur);let h=_u(i,t,e,n,Lr,Dr,Ur,Cc);if(h){let d=new I;ti.getBarycoord(Cc,Lr,Dr,Ur,d),s&&(h.uv=ti.getInterpolatedAttribute(s,o,c,l,d,new St)),r&&(h.uv1=ti.getInterpolatedAttribute(r,o,c,l,d,new St)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};ti.getNormal(Lr,Dr,Ur,u.normal),h.face=u,h.barycoord=d}return h}var Hs=class extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Fe,h=Fe,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Yi=new re,Rc=new re,Br=[],Ic=new Cn,bu=new re,Rs=new ie,Is=new Hn,In=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Ic.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Ic)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Is.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),Rc.multiplyMatrices(n,Yi),Rs.matrixWorld=Rc,Rs.raycast(t,Br);for(let a=0,o=Br.length;a<o;a++){let c=Br[a];c.instanceId=r,c.object=this,e.push(c)}Br.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hs(new Float32Array(s*this.count),s,this.count,Va,un));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},il=new I,Eu=new I,wu=new Ht,_n=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=il.subVectors(n,e).cross(Eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wu.getNormalMatrix(t),s=this.coplanarPoint(il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Hn,Tu=new St(.5,.5),Vr=new I,es=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],M=r[9],m=r[10],p=r[11],w=r[12],b=r[13],A=r[14],C=r[15];if(s[0].setComponents(l-a,f-h,p-x,C-w).normalize(),s[1].setComponents(l+a,f+h,p+x,C+w).normalize(),s[2].setComponents(l+o,f+d,p+M,C+b).normalize(),s[3].setComponents(l-o,f-d,p-M,C-b).normalize(),n)s[4].setComponents(c,u,m,A).normalize(),s[5].setComponents(l-c,f-u,p-m,C-A).normalize();else if(s[4].setComponents(l-c,f-u,p-m,C-A).normalize(),e===vn)s[5].setComponents(l+c,f+u,p+m,C+A).normalize();else if(e===Ki)s[5].setComponents(c,u,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);let e=Tu.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oa=class extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pc=new re,pl=new Gs,zr=new Hn,kr=new I,Ws=class extends Ie{constructor(t=new Ce,e=new oa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;Pc.copy(s).invert(),pl.copy(t.ray).applyMatrix4(Pc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let x=u,M=f;x<M;x++){let m=l.getX(x);kr.fromBufferAttribute(d,m),Lc(kr,m,c,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=u,M=f;x<M;x++)kr.fromBufferAttribute(d,x),Lc(kr,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lc(i,t,e,n,s,r,a){let o=pl.distanceSqToPoint(i);if(o<e){let c=new I;pl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Xs=class extends Ze{constructor(t=[],e=oi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ns=class extends Ze{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wn=class extends Ze{constructor(t,e,n=Mn,s,r,a,o=Fe,c=Fe,l,h=En,d=1){if(h!==En&&h!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},la=class extends Wn{constructor(t,e=Mn,n=oi,s,r,a=Fe,o=Fe,c,l=En){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ys=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function x(M,m,p,w,b,A,C,S,R,y,T){let P=A/R,L=C/y,O=A/2,Y=C/2,Z=S/2,z=R+1,q=y+1,H=0,Q=0,tt=new I;for(let pt=0;pt<q;pt++){let ft=pt*L-Y;for(let Mt=0;Mt<z;Mt++){let Jt=Mt*P-O;tt[M]=Jt*w,tt[m]=ft*b,tt[p]=Z,l.push(tt.x,tt.y,tt.z),tt[M]=0,tt[m]=0,tt[p]=S>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Mt/R),d.push(1-pt/y),H+=1}}for(let pt=0;pt<y;pt++)for(let ft=0;ft<R;ft++){let Mt=u+ft+z*pt,Jt=u+ft+z*(pt+1),de=u+(ft+1)+z*(pt+1),te=u+(ft+1)+z*pt;c.push(Mt,Jt,te),c.push(Jt,de,te),Q+=6}o.addGroup(f,Q,T),f+=Q,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qs=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new I,h=new St;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new St:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new re;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Zs=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new St){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ca=class extends Zs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Dc=new I,Uc=new I,sl=new Vl,rl=new Vl,al=new Vl,Xn=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Uc.subVectors(s[0],s[1]).add(s[0]),l=Uc);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Dc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),x<1e-4&&(x=M),m<1e-4&&(m=M),sl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,x,M,m),rl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,x,M,m),al.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,x,M,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),rl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),al.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(sl.calc(c),rl.calc(c),al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Cu(i,t){let e=1-i;return e*e*t}function Ru(i,t){return 2*(1-i)*i*t}function Iu(i,t){return i*i*t}function Ps(i,t,e,n){return Cu(i,t)+Ru(i,e)+Iu(i,n)}function Pu(i,t){let e=1-i;return e*e*e*t}function Lu(i,t){let e=1-i;return 3*e*e*i*t}function Du(i,t){return 3*(1-i)*i*i*t}function Uu(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return Pu(i,t)+Lu(i,e)+Du(i,n)+Uu(i,s)}var ha=class extends hn{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ua=class extends hn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y),Ls(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends hn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends hn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends hn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ei=class extends hn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y),Ps(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},is=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Nc(o,c.x,l.x,h.x,d.x),Nc(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new St().fromArray(s))}return this}},Nu=Object.freeze({__proto__:null,ArcCurve:ca,CatmullRomCurve3:Xn,CubicBezierCurve:ha,CubicBezierCurve3:ua,EllipseCurve:Zs,LineCurve:fa,LineCurve3:da,QuadraticBezierCurve:pa,QuadraticBezierCurve3:Ei,SplineCurve:is});var ss=class i extends Ce{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Zt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,d=new I,u=new St,f=new I,x=new I,M=new I,m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,M.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(M.x,M.y,M.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),c.push(f.x,f.y,f.z),M.copy(x)}for(let w=0;w<=e;w++){let b=n+w*h*s,A=Math.sin(b),C=Math.cos(b);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*A,d.y=t[S].y,d.z=t[S].x*C,a.push(d.x,d.y,d.z),u.x=w/e,u.y=S/(t.length-1),o.push(u.x,u.y);let R=c[3*S+0]*A,y=c[3*S+1],T=c[3*S+0]*C;l.push(R,y,T)}}for(let w=0;w<e;w++)for(let b=0;b<t.length-1;b++){let A=b+w*t.length,C=A,S=A+t.length,R=A+t.length+1,y=A+1;r.push(C,S,y),r.push(R,y,S)}this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ii=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],x=[],M=[],m=[];for(let p=0;p<h;p++){let w=p*u-a;for(let b=0;b<l;b++){let A=b*d-r;x.push(A,-w,0),M.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){let b=w+l*p,A=w+l*(p+1),C=w+1+l*(p+1),S=w+1+l*p;f.push(b,A,S),f.push(A,C,S)}this.setIndex(f),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(M,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var rs=class i extends Ce{constructor(t=new Ei(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,l=new St,h=new I,d=[],u=[],f=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function M(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),w(),p()}function m(b){h=t.getPointAt(b/e,h);let A=a.normals[b],C=a.binormals[b];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,y=Math.sin(R),T=-Math.cos(R);c.x=T*A.x+y*C.x,c.y=T*A.y+y*C.y,c.z=T*A.z+y*C.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=e;b++)for(let A=1;A<=s;A++){let C=(s+1)*(b-1)+(A-1),S=(s+1)*b+(A-1),R=(s+1)*b+A,y=(s+1)*(b-1)+A;x.push(C,S,y),x.push(S,R,y)}}function w(){for(let b=0;b<=e;b++)for(let A=0;A<=s;A++)l.x=b/e,l.y=A/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Nu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ci(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Fc(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=Ci(i[e]);for(let s in n)t[s]=n[s]}return t}function Fc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var bh={clone:Ci,merge:Ye},Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=Fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(s.value);break;case"v2":this.uniforms[n].value=new St().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ma=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oe=class extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wi=class extends Oe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Js=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=La,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ga=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ya=class extends si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hl:r=t,o=2*e-n;break;case ul:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hl:a=t,c=2*n-e;break;case ul:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),M=x*x,m=M*x,p=-u*m+2*u*M-u*x,w=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*x+1,b=(-1-f)*m+(1.5+f)*M+.5*x,A=f*m-f*M;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+w*a[l+C]+b*a[c+C]+A*a[d+C];return r}},va=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Aa=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ma=class extends si{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-e)/(s-e),M=1-x;for(let m=0;m!==o;++m)r[m]=a[l+m]*M+a[c+m]*x;return r}let u=o*2,f=t-1;for(let x=0;x!==o;++x){let M=a[l+x],m=a[c+x],p=f*u+x*2,w=d[p],b=d[p+1],A=t*u+x*2,C=h[A],S=h[A+1],R=(n-e)/(s-e),y,T,P,L,O;for(let Y=0;Y<8;Y++){y=R*R,T=y*R,P=1-R,L=P*P,O=L*P;let z=O*e+3*L*R*w+3*P*y*C+T*s-n;if(Math.abs(z)<1e-10)break;let q=3*L*(w-e)+6*P*R*(C-w)+3*y*(s-C);if(Math.abs(q)<1e-10)break;R=R-z/q,R=Math.max(0,Math.min(1,R))}r[x]=O*M+3*L*R*b+3*P*y*S+T*m}return r}},sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gr(e,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gr(t.times,Array),values:Gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ds:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case Xr:e=this.InterpolantFactoryMethodSmooth;break;case ll:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return Xr;case this.InterpolantFactoryMethodBezier:return ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ot("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ot("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ou(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ot("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let x=0;x!==n;++x){let M=e[d+x];if(M!==e[u+x]||M!==e[f+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=na;var ri=class extends sn{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Ds;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="color";var _a=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="number";var ba=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Te.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ks=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends sn{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ds;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="vector";var wa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],x=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Eh=new wa,Ta=class{constructor(t){this.manager=t!==void 0?t:Eh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},js=class extends as{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ol=new re,Oc=new I,Bc=new I,Ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ki||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hr=new I,Wr=new Te,Sn=new I,Qs=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hr,Wr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hr,Wr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$n=new I,Vc=new St,zc=new St,Be=class extends Qs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Vc,zc),e.subVectors(zc,Vc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ml=class extends Ca{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends as{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},os=class extends Qs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gl=class extends Ca{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends as{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new gl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var qi=-90,Zi=1,Ra=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(qi,Zi,t,e);s.layers=this.layers,this.add(s);let r=new Be(qi,Zi,t,e);r.layers=this.layers,this.add(r);let a=new Be(qi,Zi,t,e);a.layers=this.layers,this.add(a);let o=new Be(qi,Zi,t,e);o.layers=this.layers,this.add(o);let c=new Be(qi,Zi,t,e);c.layers=this.layers,this.add(c);let l=new Be(qi,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ia=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kl="\\[\\]\\.:\\/",Vu=new RegExp("["+kl+"]","g"),Gl="[^"+kl+"]",zu="[^"+kl.replace("\\.","")+"]",ku=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Gu=/(WCOD+)?/.source.replace("WCOD",zu),Hu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Wu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Xu=new RegExp("^"+ku+Gu+Hu+Wu+"$"),Yu=["material","materials","bones","map"],xl=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vu,"")}static parseTrackName(t){let e=Xu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=xl;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $g=new Float32Array(1);var Zl=class Zl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Zl.prototype.isMatrix2=!0;var yl=Zl;function Hl(i,t,e,n){let s=qu(n);switch(e){case Ul:return i*t;case Va:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case hi:return i*t*2/s.components*s.byteLength;case ka:return i*t*2/s.components*s.byteLength;case Nl:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Ga:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case Za:case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case lr:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case po:case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cr:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qu(i){switch(i){case $e:case Il:return{byteLength:1,components:1};case hs:case Pl:case Ln:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case Mn:case Fa:case un:return{byteLength:4,components:1};case Ll:case Dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Zh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tf(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],M=d[f];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let M=d[f];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ef=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
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
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
}`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
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
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`ToonMaterial material;
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
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
#endif`,vd=`#ifdef USE_MORPHTARGETS
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
#endif`,wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Td=`#ifdef USE_CLEARCOAT_NORMALMAP
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
gl_Position = projectionMatrix * mvPosition;`,Ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fd=`float roughnessFactor = roughness;
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
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xd=`#ifdef USE_SKINNING
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
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
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
}`,yp=`#define LAMBERT
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
}`,vp=`#define LAMBERT
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
}`,Tp=`#define STANDARD
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
}`,Up=`uniform float rotation;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:ff,beginnormal_vertex:df,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:xf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:Af,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:_f,color_vertex:bf,common:Ef,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Cf,displacementmap_vertex:Rf,emissivemap_fragment:If,emissivemap_pars_fragment:Pf,colorspace_fragment:Lf,colorspace_pars_fragment:Df,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Zf,envmap_vertex:Bf,fog_vertex:Vf,fog_pars_vertex:zf,fog_fragment:kf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:Yf,lights_pars_begin:qf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Kf,lights_phong_fragment:jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:$f,lights_physical_pars_fragment:td,lights_fragment_begin:ed,lights_fragment_maps:nd,lights_fragment_end:id,lightprobes_pars_fragment:sd,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:ad,logdepthbuf_pars_vertex:od,logdepthbuf_vertex:ld,map_fragment:cd,map_pars_fragment:hd,map_particle_fragment:ud,map_particle_pars_fragment:fd,metalnessmap_fragment:dd,metalnessmap_pars_fragment:pd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:xd,morphtarget_pars_vertex:yd,morphtarget_vertex:vd,normal_fragment_begin:Ad,normal_fragment_maps:Md,normal_pars_fragment:Sd,normal_pars_vertex:_d,normal_vertex:bd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:wd,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Rd,opaque_fragment:Id,packing:Pd,premultiplied_alpha_fragment:Ld,project_vertex:Dd,dithering_fragment:Ud,dithering_pars_fragment:Nd,roughnessmap_fragment:Fd,roughnessmap_pars_fragment:Od,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:Vd,shadowmap_vertex:zd,shadowmask_pars_fragment:kd,skinbase_vertex:Gd,skinning_pars_vertex:Hd,skinning_vertex:Wd,skinnormal_vertex:Xd,specularmap_fragment:Yd,specularmap_pars_fragment:qd,tonemapping_fragment:Zd,tonemapping_pars_fragment:Jd,transmission_fragment:Kd,transmission_pars_fragment:jd,uv_pars_fragment:Qd,uv_pars_vertex:$d,uv_vertex:tp,worldpos_vertex:ep,background_vert:np,background_frag:ip,backgroundCube_vert:sp,backgroundCube_frag:rp,cube_vert:ap,cube_frag:op,depth_vert:lp,depth_frag:cp,distance_vert:hp,distance_frag:up,equirect_vert:fp,equirect_frag:dp,linedashed_vert:pp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:xp,meshlambert_vert:yp,meshlambert_frag:vp,meshmatcap_vert:Ap,meshmatcap_frag:Mp,meshnormal_vert:Sp,meshnormal_frag:_p,meshphong_vert:bp,meshphong_frag:Ep,meshphysical_vert:wp,meshphysical_frag:Tp,meshtoon_vert:Cp,meshtoon_frag:Rp,points_vert:Ip,points_frag:Pp,shadow_vert:Lp,shadow_frag:Dp,sprite_vert:Up,sprite_frag:Np},gt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Un={basic:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ye([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ye([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new At(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ye([gt.points,gt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ye([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ye([gt.common,gt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ye([gt.sprite,gt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Ye([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Ye([gt.lights,gt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Un.physical={uniforms:Ye([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var So={r:0,b:0,g:0},Fp=new re,Jh=new Ht;Jh.set(-1,0,0,0,1,0,0,0,1);function Op(i,t,e,n,s,r){let a=new At(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(w){let b=w.isScene===!0?w.background:null;if(b&&b.isTexture){let A=w.backgroundBlurriness>0;b=t.get(b,A)}return b}function x(w){let b=!1,A=f(w);A===null?m(a,o):A&&A.isColor&&(m(A,1),b=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(w,b){let A=f(b);A&&(A.isCubeTexture||A.mapping===nr)?(l===void 0&&(l=new ie(new cn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Ci(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=A,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(b.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Jh),l.material.toneMapped=$t.getTransfer(A.colorSpace)!==le,(h!==A||d!==A.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ie(new ii(2,2),new Xe({name:"BackgroundMaterial",uniforms:Ci(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$t.getTransfer(A.colorSpace)!==le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,b){w.getRGB(So,zl(i)),e.buffers.color.setClear(So.r,So.g,So.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:x,addToRenderList:M,dispose:p}}function Bp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,O,Y,Z,z){let q=!1,H=d(L,Z,Y,O);r!==H&&(r=H,l(r.object)),q=f(L,Z,Y,z),q&&x(L,Z,Y,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,A(L,O,Y,Z),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,O,Y,Z){let z=Z.wireframe===!0,q=n[O.id];q===void 0&&(q={},n[O.id]=q);let H=L.isInstancedMesh===!0?L.id:0,Q=q[H];Q===void 0&&(Q={},q[H]=Q);let tt=Q[Y.id];tt===void 0&&(tt={},Q[Y.id]=tt);let pt=tt[z];return pt===void 0&&(pt=u(c()),tt[z]=pt),pt}function u(L){let O=[],Y=[],Z=[];for(let z=0;z<e;z++)O[z]=0,Y[z]=0,Z[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:Z,object:L,attributes:{},index:null}}function f(L,O,Y,Z){let z=r.attributes,q=O.attributes,H=0,Q=Y.getAttributes();for(let tt in Q)if(Q[tt].location>=0){let ft=z[tt],Mt=q[tt];if(Mt===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(Mt=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(Mt=L.instanceColor)),ft===void 0||ft.attribute!==Mt||Mt&&ft.data!==Mt.data)return!0;H++}return r.attributesNum!==H||r.index!==Z}function x(L,O,Y,Z){let z={},q=O.attributes,H=0,Q=Y.getAttributes();for(let tt in Q)if(Q[tt].location>=0){let ft=q[tt];ft===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor));let Mt={};Mt.attribute=ft,ft&&ft.data&&(Mt.data=ft.data),z[tt]=Mt,H++}r.attributes=z,r.attributesNum=H,r.index=Z}function M(){let L=r.newAttributes;for(let O=0,Y=L.length;O<Y;O++)L[O]=0}function m(L){p(L,0)}function p(L,O){let Y=r.newAttributes,Z=r.enabledAttributes,z=r.attributeDivisors;Y[L]=1,Z[L]===0&&(i.enableVertexAttribArray(L),Z[L]=1),z[L]!==O&&(i.vertexAttribDivisor(L,O),z[L]=O)}function w(){let L=r.newAttributes,O=r.enabledAttributes;for(let Y=0,Z=O.length;Y<Z;Y++)O[Y]!==L[Y]&&(i.disableVertexAttribArray(Y),O[Y]=0)}function b(L,O,Y,Z,z,q,H){H===!0?i.vertexAttribIPointer(L,O,Y,z,q):i.vertexAttribPointer(L,O,Y,Z,z,q)}function A(L,O,Y,Z){M();let z=Z.attributes,q=Y.getAttributes(),H=O.defaultAttributeValues;for(let Q in q){let tt=q[Q];if(tt.location>=0){let pt=z[Q];if(pt===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),pt!==void 0){let ft=pt.normalized,Mt=pt.itemSize,Jt=t.get(pt);if(Jt===void 0)continue;let de=Jt.buffer,te=Jt.type,j=Jt.bytesPerElement,ot=te===i.INT||te===i.UNSIGNED_INT||pt.gpuType===Fa;if(pt.isInterleavedBufferAttribute){let nt=pt.data,Pt=nt.stride,Bt=pt.offset;if(nt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<tt.locationSize;Lt++)p(tt.location+Lt,nt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Lt=0;Lt<tt.locationSize;Lt++)m(tt.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Lt=0;Lt<tt.locationSize;Lt++)b(tt.location+Lt,Mt/tt.locationSize,te,ft,Pt*j,(Bt+Mt/tt.locationSize*Lt)*j,ot)}else{if(pt.isInstancedBufferAttribute){for(let nt=0;nt<tt.locationSize;nt++)p(tt.location+nt,pt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let nt=0;nt<tt.locationSize;nt++)m(tt.location+nt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let nt=0;nt<tt.locationSize;nt++)b(tt.location+nt,Mt/tt.locationSize,te,ft,Mt*j,Mt/tt.locationSize*nt*j,ot)}}else if(H!==void 0){let ft=H[Q];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(tt.location,ft);break;case 3:i.vertexAttrib3fv(tt.location,ft);break;case 4:i.vertexAttrib4fv(tt.location,ft);break;default:i.vertexAttrib1fv(tt.location,ft)}}}}w()}function C(){T();for(let L in n){let O=n[L];for(let Y in O){let Z=O[Y];for(let z in Z){let q=Z[z];for(let H in q)h(q[H].object),delete q[H];delete Z[z]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;let O=n[L.id];for(let Y in O){let Z=O[Y];for(let z in Z){let q=Z[z];for(let H in q)h(q[H].object),delete q[H];delete Z[z]}}delete n[L.id]}function R(L){for(let O in n){let Y=n[O];for(let Z in Y){let z=Y[Z];if(z[L.id]===void 0)continue;let q=z[L.id];for(let H in q)h(q[H].object),delete q[H];delete z[L.id]}}}function y(L){for(let O in n){let Y=n[O],Z=L.isInstancedMesh===!0?L.id:0,z=Y[Z];if(z!==void 0){for(let q in z){let H=z[q];for(let Q in H)h(H[Q].object),delete H[Q];delete z[q]}delete Y[Z],Object.keys(Y).length===0&&delete n[O]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:w}}function Vp(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$e&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!y)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Nt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:A,maxSamples:C,samples:S}}function kp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let w=r?0:n,b=w*4,A=p.clippingState||null;c.value=A,A=h(x,u,b,f);for(let C=0;C!==b;++C)A[C]=e[C];p.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,x){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=c.value,x!==!0||m===null){let p=f+M*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,A=f;b!==M;++b,A+=4)a.copy(d[b]).applyMatrix4(w,o),a.normal.toArray(m,A),m[A+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var ui=4,wh=[.125,.215,.35,.446,.526,.582],Ri=20,Gp=256,fr=new os,Th=new At,Jl=null,Kl=0,jl=0,Ql=!1,Hp=new I,ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hp}=r;Jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jl,Kl,jl),this._renderer.xr.enabled=Ql,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Ln,format:fn,colorSpace:Us,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wp(r)),this._blurMaterial=Yp(r,t,e),this._ggxMaterial=Xp(r,t,e)}return s}_compileMaterial(t){let e=new ie(new Ce,t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,n,s,r){let c=new Be(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Th),d.toneMapping=An,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ie(new cn,new ni({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,p=!0):(m.color.copy(Th),p=!0);for(let b=0;b<6;b++){let A=b%3;A===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):A===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let C=this._cubeSize;fs(s,A*C,b>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(M,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===oi||t.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,fr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:x}=this,M=this._sizeLods[n],m=3*M*(n>x-ui?n-x+ui:0),p=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=x-e,fs(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,fr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,fs(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,fr)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=l;let u=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),M=r/x,m=isFinite(r)?1+Math.floor(h*M):Ri;m>Ri&&Nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let p=[],w=0;for(let R=0;R<Ri;++R){let y=R/M,T=Math.exp(-y*y/2);p.push(T),R===0?w+=T:R<m&&(w+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=x,u.mipInt.value=b-n;let A=this._sizeLods[s],C=3*A*(s>b-ui?s-b+ui:0),S=4*(this._cubeSize-A);fs(e,C,S,3*A,2*A),c.setRenderTarget(e),c.render(d,fr)}};function Wp(i){let t=[],e=[],n=[],s=i,r=i-ui+1+wh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ui?c=wh[a-i+ui-1]:a===0&&(c=0),e.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,M=3,m=2,p=1,w=new Float32Array(M*x*f),b=new Float32Array(m*x*f),A=new Float32Array(p*x*f);for(let S=0;S<f;S++){let R=S%3*2/3-1,y=S>2?0:-1,T=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];w.set(T,M*x*S),b.set(u,m*x*S);let P=[S,S,S,S,S,S];A.set(P,p*x*S)}let C=new Ce;C.setAttribute("position",new We(w,M)),C.setAttribute("uv",new We(b,m)),C.setAttribute("faceIndex",new We(A,p)),n.push(new ie(C,null)),s>ui&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ch(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xp(i,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Yp(i,t,e){let n=new Float32Array(Ri),s=new I(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wo(),fragmentShader:`

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
			`},s=new cn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Pn});r.uniforms.tEquirect.value=e;let a=new ie(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=Ve),new Ra(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function qp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Da||f===Ua)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let M=new bo(x.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,x=f===Da||f===Ua,M=f===oi||f===Ti;if(x||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ps(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return x&&w&&w.height>0||M&&w&&c(w)?(n===null&&(n=new ps(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Da?u.mapping=oi:f===Ua&&(u.mapping=Ti),u}function c(u){let f=0,x=6;for(let M=0;M<x;M++)u[M]!==void 0&&f++;return f===x}function l(u){let f=u.target;f.removeEventListener("dispose",l);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Zp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ai("WebGLRenderer: "+n+" extension not supported."),s}}}function Jp(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,x=d.attributes.position,M=0;if(x===void 0)return;if(f!==null){let w=f.array;M=f.version;for(let b=0,A=w.length;b<A;b+=3){let C=w[b+0],S=w[b+1],R=w[b+2];u.push(C,S,S,R,R,C)}}else{let w=x.array;M=x.version;for(let b=0,A=w.length/3-1;b<A;b+=3){let C=b+0,S=b+1,R=b+2;u.push(C,S,S,R,R,C)}}let m=new(x.count>=65535?ks:zs)(u,1);m.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Kp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function jp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qp(i,t,e){let n=new WeakMap,s=new ve;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],b=0;f===!0&&(b=1),x===!0&&(b=2),M===!0&&(b=3);let A=o.attributes.position.count*b,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let S=new Float32Array(A*C*4*d),R=new Os(S,A,C,d);R.type=un,R.needsUpdate=!0;let y=b*4;for(let P=0;P<d;P++){let L=m[P],O=p[P],Y=w[P],Z=A*C*4*P;for(let z=0;z<L.count;z++){let q=z*y;f===!0&&(s.fromBufferAttribute(L,z),S[Z+q+0]=s.x,S[Z+q+1]=s.y,S[Z+q+2]=s.z,S[Z+q+3]=0),x===!0&&(s.fromBufferAttribute(O,z),S[Z+q+4]=s.x,S[Z+q+5]=s.y,S[Z+q+6]=s.z,S[Z+q+7]=0),M===!0&&(s.fromBufferAttribute(Y,z),S[Z+q+8]=s.x,S[Z+q+9]=s.y,S[Z+q+10]=s.z,S[Z+q+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new St(A,C)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<l.length;M++)f+=l[M];let x=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function $p(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var tm={[_l]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[er]:"ACES_FILMIC_TONE_MAPPING",[Tl]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function em(i,t,e,n,s,r){let a=new nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Wn(t,e):void 0}),o=new nn(t,e,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new Ce;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let l=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ie(c,l),d=new os(-1,1,1,-1,0,1),u=null,f=null,x=!1,M,m=null,p=[],w=!1;this.setSize=function(b,A){a.setSize(b,A),o.setSize(b,A);for(let C=0;C<p.length;C++){let S=p[C];S.setSize&&S.setSize(b,A)}},this.setEffects=function(b){p=b,w=p.length>0&&p[0].isRenderPass===!0;let A=a.width,C=a.height;for(let S=0;S<p.length;S++){let R=p[S];R.setSize&&R.setSize(A,C)}},this.begin=function(b,A){if(x||b.toneMapping===An&&p.length===0)return!1;if(m=A,A!==null){let C=A.width,S=A.height;(a.width!==C||a.height!==S)&&this.setSize(C,S)}return w===!1&&b.setRenderTarget(a),M=b.toneMapping,b.toneMapping=An,!0},this.hasRenderPass=function(){return w},this.end=function(b,A){b.toneMapping=M,x=!0;let C=a,S=o;for(let R=0;R<p.length;R++){let y=p[R];if(y.enabled!==!1&&(y.render(b,S,C,A),y.needsSwap!==!1)){let T=C;C=S,S=T}}if(u!==b.outputColorSpace||f!==b.toneMapping){u=b.outputColorSpace,f=b.toneMapping,l.defines={},$t.getTransfer(u)===le&&(l.defines.SRGB_TRANSFER="");let R=tm[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=C.texture,b.setRenderTarget(m),b.render(h,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Kh=new Ze,ec=new Wn(1,1),jh=new Os,Qh=new aa,$h=new Xs,Ph=[],Lh=[],Dh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function To(i,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),Le(e,n)}}function om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Le(e,n)}}function lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Dh.set(n),i.uniformMatrix4fv(this.addr,!1,Dh),Le(e,n)}}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function dm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=e.isReversedDepthBuffer()?Mo:Ao,r=ec):r=Kh,e.setTexture2D(t||r,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$h,s)}function Am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jh,s)}function Mm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return Am}}function Sm(i,t){i.uniform1fv(this.addr,t)}function _m(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function bm(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Em(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function wm(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tm(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rm(i,t){i.uniform1iv(this.addr,t)}function Im(i,t){i.uniform2iv(this.addr,t)}function Pm(i,t){i.uniform3iv(this.addr,t)}function Lm(i,t){i.uniform4iv(this.addr,t)}function Dm(i,t){i.uniform1uiv(this.addr,t)}function Um(i,t){i.uniform2uiv(this.addr,t)}function Nm(i,t){i.uniform3uiv(this.addr,t)}function Fm(i,t){i.uniform4uiv(this.addr,t)}function Om(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ec:a=Kh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Bm(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qh,r[a])}function Vm(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$h,r[a])}function zm(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jh,r[a])}function km(i){switch(i){case 5126:return Sm;case 35664:return _m;case 35665:return bm;case 35666:return Em;case 35674:return wm;case 35675:return Tm;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return zm}}var nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mm(e.type)}},ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=km(e.type)}},sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function Fh(i,t){i.seq.push(t),i.map[t.id]=t}function Gm(i,t,e){let n=i.name,s=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),a=$l.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Fh(e,l===void 0?new nc(o,i,t):new ic(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new sc(o),Fh(e,d)),e=d}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Gm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Oh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hm=37297,Wm=0;function Xm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Bh=new Ht;function Ym(i){$t._getMatrix(Bh,$t.workingColorSpace,i);let t=`mat3( ${Bh.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ns:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Xm(i.getShaderSource(t),o)}else return r}function qm(i,t){let e=Ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Zm={[_l]:"Linear",[bl]:"Reinhard",[El]:"Cineon",[er]:"ACESFilmic",[Tl]:"AgX",[Cl]:"Neutral",[wl]:"Custom"};function Jm(i,t){let e=Zm[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _o=new I;function Km(){$t.getLuminanceCoefficients(_o);let i=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function Qm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pr(i){return i!==""}function zh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(tg,ng)}var eg=new Map;function ng(i,t){let e=Yt[t];if(e===void 0){let n=eg.get(t);if(n!==void 0)e=Yt[n],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return rc(e)}var ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(ig,sg)}function sg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var rg={[tr]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function ag(i){return rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var og={[oi]:"ENVMAP_TYPE_CUBE",[Ti]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE_UV"};function lg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":og[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var cg={[Ti]:"ENVMAP_MODE_REFRACTION"};function hg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ug={[La]:"ENVMAP_BLENDING_MULTIPLY",[lh]:"ENVMAP_BLENDING_MIX",[ch]:"ENVMAP_BLENDING_ADD"};function fg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ug[i.combine]||"ENVMAP_BLENDING_NONE"}function dg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ag(e),l=lg(e),h=hg(e),d=fg(e),u=dg(e),f=jm(e),x=Qm(r),M=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Yt.tonemapping_pars_fragment:"",e.toneMapping!==An?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,qm("linearToOutputTexel",e.outputColorSpace),Km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=rc(a),a=zh(a,e),a=kh(a,e),o=rc(o),o=zh(o,e),o=kh(o,e),a=Gh(a),o=Gh(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=w+m+a,A=w+p+o,C=Oh(s,s.VERTEX_SHADER,b),S=Oh(s,s.FRAGMENT_SHADER,A);s.attachShader(M,C),s.attachShader(M,S),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(M)||"",Y=s.getShaderInfoLog(C)||"",Z=s.getShaderInfoLog(S)||"",z=O.trim(),q=Y.trim(),H=Z.trim(),Q=!0,tt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,C,S);else{let pt=Vh(s,C,"vertex"),ft=Vh(s,S,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+pt+`
`+ft)}else z!==""?Nt("WebGLProgram: Program Info Log:",z):(q===""||H==="")&&(tt=!1);tt&&(L.diagnostics={runnable:Q,programLog:z,vertexShader:{log:q,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(C),s.deleteShader(S),y=new ds(s,M),T=$m(s,M)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,Hm)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=S,this}var mg=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oc(t),e.set(t,n)),n}},oc=class{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}};function gg(i){return i===hi||i===lr||i===cr}function xg(i,t,e,n,s,r){let a=new Bs,o=new ac,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function M(y,T,P,L,O,Y){let Z=L.fog,z=O.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Q=t.get(y.envMap||q,H),tt=Q&&Q.mapping===nr?Q.image.height:null,pt=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Nt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Mt=ft!==void 0?ft.length:0,Jt=0;z.morphAttributes.position!==void 0&&(Jt=1),z.morphAttributes.normal!==void 0&&(Jt=2),z.morphAttributes.color!==void 0&&(Jt=3);let de,te,j,ot;if(pt){let _t=Un[pt];de=_t.vertexShader,te=_t.fragmentShader}else{de=y.vertexShader,te=y.fragmentShader;let _t=o.getVertexShaderStage(y),me=o.getFragmentShaderStage(y);o.update(y,_t,me),j=_t.id,ot=me.id}let nt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,pe=!!y.map,Kt=!!y.matcap,se=!!Q,Qt=!!y.aoMap,Xt=!!y.lightMap,Me=!!y.bumpMap&&y.wireframe===!1,Ae=!!y.normalMap,_e=!!y.displacementMap,be=!!y.emissiveMap,fe=!!y.metalnessMap,Se=!!y.roughnessMap,D=y.anisotropy>0,Ee=y.clearcoat>0,ee=y.dispersion>0,E=y.iridescence>0,g=y.sheen>0,F=y.transmission>0,k=D&&!!y.anisotropyMap,W=Ee&&!!y.clearcoatMap,et=Ee&&!!y.clearcoatNormalMap,rt=Ee&&!!y.clearcoatRoughnessMap,X=E&&!!y.iridescenceMap,K=E&&!!y.iridescenceThicknessMap,ct=g&&!!y.sheenColorMap,Ct=g&&!!y.sheenRoughnessMap,dt=!!y.specularMap,lt=!!y.specularColorMap,It=!!y.specularIntensityMap,Dt=F&&!!y.transmissionMap,Ft=F&&!!y.thicknessMap,_=!!y.gradientMap,ht=!!y.alphaMap,J=y.alphaTest>0,ut=!!y.alphaHash,xt=!!y.extensions,$=An;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&($=i.toneMapping);let wt={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:de,fragmentShader:te,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:pe,matcap:Kt,envMap:se,envMapMode:se&&Q.mapping,envMapCubeUVHeight:tt,aoMap:Qt,lightMap:Xt,bumpMap:Me,normalMap:Ae,displacementMap:_e,emissiveMap:be,normalMapObjectSpace:Ae&&y.normalMapType===fh,normalMapTangentSpace:Ae&&y.normalMapType===hr,packedNormalMap:Ae&&y.normalMapType===hr&&gg(y.normalMap.format),metalnessMap:fe,roughnessMap:Se,anisotropy:D,anisotropyMap:k,clearcoat:Ee,clearcoatMap:W,clearcoatNormalMap:et,clearcoatRoughnessMap:rt,dispersion:ee,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:K,sheen:g,sheenColorMap:ct,sheenRoughnessMap:Ct,specularMap:dt,specularColorMap:lt,specularIntensityMap:It,transmission:F,transmissionMap:Dt,thicknessMap:Ft,gradientMap:_,opaque:y.transparent===!1&&y.blending===Mi&&y.alphaToCoverage===!1,alphaMap:ht,alphaTest:J,alphaHash:ut,combine:y.combine,mapUv:pe&&x(y.map.channel),aoMapUv:Qt&&x(y.aoMap.channel),lightMapUv:Xt&&x(y.lightMap.channel),bumpMapUv:Me&&x(y.bumpMap.channel),normalMapUv:Ae&&x(y.normalMap.channel),displacementMapUv:_e&&x(y.displacementMap.channel),emissiveMapUv:be&&x(y.emissiveMap.channel),metalnessMapUv:fe&&x(y.metalnessMap.channel),roughnessMapUv:Se&&x(y.roughnessMap.channel),anisotropyMapUv:k&&x(y.anisotropyMap.channel),clearcoatMapUv:W&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:K&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(y.sheenRoughnessMap.channel),specularMapUv:dt&&x(y.specularMap.channel),specularColorMapUv:lt&&x(y.specularColorMap.channel),specularIntensityMapUv:It&&x(y.specularIntensityMap.channel),transmissionMapUv:Dt&&x(y.transmissionMap.channel),thicknessMapUv:Ft&&x(y.thicknessMap.channel),alphaMapUv:ht&&x(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ae||D),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(pe||ht),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&Ae===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Jt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:pe&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===le,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&$t.getTransfer(y.emissiveMap.colorSpace)===le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Je,flipSided:y.side===ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&y.extensions.multiDraw===!0||Lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(T,y),w(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function w(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let T=f[y.type],P;if(T){let L=Un[T];P=bh.clone(L.uniforms)}else P=y.uniforms;return P}function A(y,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new pg(i,T,y,s),l.push(P),h.set(T,P)),P}function C(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:b,acquireProgram:A,releaseProgram:C,releaseShaderCache:S,programs:l,dispose:R}}function yg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function vg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,M,m,p){let w=i[t];return w===void 0?(w={id:u.id,object:u,geometry:f,material:x,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[t]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=x,w.materialVariant=a(u),w.groupOrder=M,w.renderOrder=u.renderOrder,w.z=m,w.group=p),t++,w}function c(u,f,x,M,m,p){let w=o(u,f,x,M,m,p);x.transmission>0?n.push(w):x.transparent===!0?s.push(w):e.push(w)}function l(u,f,x,M,m,p){let w=o(u,f,x,M,m,p);x.transmission>0?n.unshift(w):x.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,f,x){e.length>1&&e.sort(u||vg),n.length>1&&n.sort(f||Wh),s.length>1&&s.sort(f||Wh),x&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let u=t,f=i.length;u<f;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Ag(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xh,i.set(n,[a])):s>=r.length?(a=new Xh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new At};break;case"SpotLight":e={position:new I,direction:new I,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _g=0;function bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Eg(i){let t=new Mg,e=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new re,a=new re;function o(l){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,x=0,M=0,m=0,p=0,w=0,b=0,A=0,C=0,S=0,R=0;l.sort(bg);for(let T=0,P=l.length;T<P;T++){let L=l[T],O=L.color,Y=L.intensity,Z=L.distance,z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hi?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*Y,d+=O.g*Y,u+=O.b*Y;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],Y);R++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let H=L.shadow,Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=L.shadow.matrix,w++}n.directional[f]=q,f++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(O).multiplyScalar(Y),q.distance=Z,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[M]=q;let H=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,H.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[M]=H.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=z,A++}M++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(O).multiplyScalar(Y),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=q,m++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let H=L.shadow,Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,n.pointShadow[x]=Q,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=L.shadow.matrix,b++}n.point[x]=q,x++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(Y),q.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let y=n.hash;(y.directionalLength!==f||y.pointLength!==x||y.spotLength!==M||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==w||y.numPointShadows!==b||y.numSpotShadows!==A||y.numSpotMaps!==C||y.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=A+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,y.directionalLength=f,y.pointLength=x,y.spotLength=M,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=w,y.numPointShadows=b,y.numSpotShadows=A,y.numSpotMaps=C,y.numLightProbes=R,n.version=_g++)}function c(l,h){let d=0,u=0,f=0,x=0,M=0,m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let b=l[p];if(b.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(b.isSpotLight){let A=n.spot[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let A=n.point[u];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let A=n.hemi[M];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),M++}}}return{setup:o,setupView:c,state:n}}function Yh(i){let t=new Eg(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function wg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yh(i),t.set(s,[o])):r>=a.length?(o=new Yh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tg=`void main() {
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
}`,Rg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ig=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],qh=new re,dr=new I,tc=new I;function Pg(i,t,e){let n=new es,s=new St,r=new St,a=new ve,o=new ga,c=new xa,l={},h=e.maxTextureSize,d={[Gn]:ze,[ze]:Gn,[Je]:Je},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Tg,fragmentShader:Cg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new Ce;x.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ie(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let p=this.type;this.render=function(S,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Hc&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tr);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Pn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Y=p!==this.type;Y&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(z=>z.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,z=S.length;Z<z;Z++){let q=S[Z],H=q.shadow;if(H===void 0){Nt("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Q=H.getFrameExtents();s.multiply(Q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=tt,H.map===null||Y===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===cs){if(q.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(s.x,s.y,{format:hi,type:Ln,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new Wn(s.x,s.y,un),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=En,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe}else q.isPointLight?(H.map=new bo(s.x),H.map.depthTexture=new la(s.x,Mn)):(H.map=new nn(s.x,s.y),H.map.depthTexture=new Wn(s.x,s.y,Mn)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=En,this.type===tr?(H.map.depthTexture.compareFunction=tt?Mo:Ao,H.map.depthTexture.minFilter=Ve,H.map.depthTexture.magFilter=Ve):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe);H.camera.updateProjectionMatrix()}let pt=H.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<pt;ft++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(H.map),i.clear());let Mt=H.getViewport(ft);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),O.viewport(a)}if(q.isPointLight){let Mt=H.camera,Jt=H.matrix,de=q.distance||Mt.far;de!==Mt.far&&(Mt.far=de,Mt.updateProjectionMatrix()),dr.setFromMatrixPosition(q.matrixWorld),Mt.position.copy(dr),tc.copy(Mt.position),tc.add(Rg[ft]),Mt.up.copy(Ig[ft]),Mt.lookAt(tc),Mt.updateMatrixWorld(),Jt.makeTranslation(-dr.x,-dr.y,-dr.z),qh.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(qh,Mt.coordinateSystem,Mt.reversedDepth)}else H.updateMatrices(q);n=H.getFrustum(),A(R,y,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===cs&&w(H,y),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,L)};function w(S,R){let y=t.update(M);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new nn(s.x,s.y,{format:hi,type:Ln})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,y,u,M,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,y,f,M,null)}function b(S,R,y,T){let P=null,L=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)P=L;else if(P=y.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=P.uuid,Y=R.uuid,Z=l[O];Z===void 0&&(Z={},l[O]=Z);let z=Z[Y];z===void 0&&(z=P.clone(),Z[Y]=z,R.addEventListener("dispose",C)),P=z}if(P.visible=R.visible,P.wireframe=R.wireframe,T===cs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=y}return P}function A(S,R,y,T,P){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===cs)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let Y=t.update(S),Z=S.material;if(Array.isArray(Z)){let z=Y.groups;for(let q=0,H=z.length;q<H;q++){let Q=z[q],tt=Z[Q.materialIndex];if(tt&&tt.visible){let pt=b(S,tt,T,P);S.onBeforeShadow(i,S,R,y,Y,pt,Q),i.renderBufferDirect(y,null,Y,pt,S,Q),S.onAfterShadow(i,S,R,y,Y,pt,Q)}}}else if(Z.visible){let z=b(S,Z,T,P);S.onBeforeShadow(i,S,R,y,Y,z,null),i.renderBufferDirect(y,null,Y,z,S,null),S.onAfterShadow(i,S,R,y,Y,z,null)}}let O=S.children;for(let Y=0,Z=O.length;Y<Z;Y++)A(O[Y],R,y,T,P)}function C(S){S.target.removeEventListener("dispose",C);for(let y in l){let T=l[y],P=S.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Lg(i,t){function e(){let _=!1,ht=new ve,J=null,ut=new ve(0,0,0,0);return{setMask:function(xt){J!==xt&&!_&&(i.colorMask(xt,xt,xt,xt),J=xt)},setLocked:function(xt){_=xt},setClear:function(xt,$,wt,_t,me){me===!0&&(xt*=_t,$*=_t,wt*=_t),ht.set(xt,$,wt,_t),ut.equals(ht)===!1&&(i.clearColor(xt,$,wt,_t),ut.copy(ht))},reset:function(){_=!1,J=null,ut.set(-1,0,0,0)}}}function n(){let _=!1,ht=!1,J=null,ut=null,xt=null;return{setReversed:function($){if(ht!==$){let wt=t.get("EXT_clip_control");$?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ht=$;let _t=xt;xt=null,this.setClear(_t)}},getReversed:function(){return ht},setTest:function($){$?nt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function($){J!==$&&!_&&(i.depthMask($),J=$)},setFunc:function($){if(ht&&($=Sh[$]),ut!==$){switch($){case Zr:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case $r:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=$}},setLocked:function($){_=$},setClear:function($){xt!==$&&(xt=$,ht&&($=1-$),i.clearDepth($))},reset:function(){_=!1,J=null,ut=null,xt=null,ht=!1}}}function s(){let _=!1,ht=null,J=null,ut=null,xt=null,$=null,wt=null,_t=null,me=null;return{setTest:function(he){_||(he?nt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(he){ht!==he&&!_&&(i.stencilMask(he),ht=he)},setFunc:function(he,rn,an){(J!==he||ut!==rn||xt!==an)&&(i.stencilFunc(he,rn,an),J=he,ut=rn,xt=an)},setOp:function(he,rn,an){($!==he||wt!==rn||_t!==an)&&(i.stencilOp(he,rn,an),$=he,wt=rn,_t=an)},setLocked:function(he){_=he},setClear:function(he){me!==he&&(i.clearStencil(he),me=he)},reset:function(){_=!1,ht=null,J=null,ut=null,xt=null,$=null,wt=null,_t=null,me=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,x=[],M=null,m=!1,p=null,w=null,b=null,A=null,C=null,S=null,R=null,y=new At(0,0,0),T=0,P=!1,L=null,O=null,Y=null,Z=null,z=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(tt)[1]),H=Q>=1):tt.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),H=Q>=2);let pt=null,ft={},Mt=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),de=new ve().fromArray(Mt),te=new ve().fromArray(Jt);function j(_,ht,J,ut){let xt=new Uint8Array(4),$=i.createTexture();i.bindTexture(_,$),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<J;wt++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ht+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return $}let ot={};ot[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Si),Me(!1),Ae(vl),nt(i.CULL_FACE),Qt(Pn);function nt(_){h[_]!==!0&&(i.enable(_),h[_]=!0)}function Pt(_){h[_]!==!1&&(i.disable(_),h[_]=!1)}function Bt(_,ht){return u[_]!==ht?(i.bindFramebuffer(_,ht),u[_]=ht,_===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),_===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Lt(_,ht){let J=x,ut=!1;if(_){J=f.get(ht),J===void 0&&(J=[],f.set(ht,J));let xt=_.textures;if(J.length!==xt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let $=0,wt=xt.length;$<wt;$++)J[$]=i.COLOR_ATTACHMENT0+$;J.length=xt.length,ut=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ut=!0);ut&&i.drawBuffers(J)}function pe(_){return M!==_?(i.useProgram(_),M=_,!0):!1}let Kt={[ei]:i.FUNC_ADD,[Xc]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};Kt[qc]=i.MIN,Kt[Zc]=i.MAX;let se={[Jc]:i.ZERO,[Kc]:i.ONE,[jc]:i.SRC_COLOR,[Yr]:i.SRC_ALPHA,[ih]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Qc]:i.ONE_MINUS_SRC_COLOR,[qr]:i.ONE_MINUS_SRC_ALPHA,[nh]:i.ONE_MINUS_DST_COLOR,[th]:i.ONE_MINUS_DST_ALPHA,[sh]:i.CONSTANT_COLOR,[rh]:i.ONE_MINUS_CONSTANT_COLOR,[ah]:i.CONSTANT_ALPHA,[oh]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(_,ht,J,ut,xt,$,wt,_t,me,he){if(_===Pn){m===!0&&(Pt(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),_!==Wc){if(_!==p||he!==P){if((w!==ei||C!==ei)&&(i.blendEquation(i.FUNC_ADD),w=ei,C=ei),he)switch(_){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFunc(i.ONE,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",_);break}else switch(_){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ml:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",_);break}b=null,A=null,S=null,R=null,y.set(0,0,0),T=0,p=_,P=he}return}xt=xt||ht,$=$||J,wt=wt||ut,(ht!==w||xt!==C)&&(i.blendEquationSeparate(Kt[ht],Kt[xt]),w=ht,C=xt),(J!==b||ut!==A||$!==S||wt!==R)&&(i.blendFuncSeparate(se[J],se[ut],se[$],se[wt]),b=J,A=ut,S=$,R=wt),(_t.equals(y)===!1||me!==T)&&(i.blendColor(_t.r,_t.g,_t.b,me),y.copy(_t),T=me),p=_,P=!1}function Xt(_,ht){_.side===Je?Pt(i.CULL_FACE):nt(i.CULL_FACE);let J=_.side===ze;ht&&(J=!J),Me(J),_.blending===Mi&&_.transparent===!1?Qt(Pn):Qt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),a.setFunc(_.depthFunc),a.setTest(_.depthTest),a.setMask(_.depthWrite),r.setMask(_.colorWrite);let ut=_.stencilWrite;o.setTest(ut),ut&&(o.setMask(_.stencilWriteMask),o.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),o.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),be(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(_){L!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),L=_)}function Ae(_){_!==kc?(nt(i.CULL_FACE),_!==O&&(_===vl?i.cullFace(i.BACK):_===Gc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),O=_}function _e(_){_!==Y&&(H&&i.lineWidth(_),Y=_)}function be(_,ht,J){_?(nt(i.POLYGON_OFFSET_FILL),(Z!==ht||z!==J)&&(Z=ht,z=J,a.getReversed()&&(ht=-ht),i.polygonOffset(ht,J))):Pt(i.POLYGON_OFFSET_FILL)}function fe(_){_?nt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Se(_){_===void 0&&(_=i.TEXTURE0+q-1),pt!==_&&(i.activeTexture(_),pt=_)}function D(_,ht,J){J===void 0&&(pt===null?J=i.TEXTURE0+q-1:J=pt);let ut=ft[J];ut===void 0&&(ut={type:void 0,texture:void 0},ft[J]=ut),(ut.type!==_||ut.texture!==ht)&&(pt!==J&&(i.activeTexture(J),pt=J),i.bindTexture(_,ht||ot[_]),ut.type=_,ut.texture=ht)}function Ee(){let _=ft[pt];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function g(){try{i.texSubImage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function F(){try{i.texSubImage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function et(){try{i.texStorage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function rt(){try{i.texStorage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function X(){try{i.texImage2D(...arguments)}catch(_){Ot("WebGLState:",_)}}function K(){try{i.texImage3D(...arguments)}catch(_){Ot("WebGLState:",_)}}function ct(_){return d[_]!==void 0?d[_]:i.getParameter(_)}function Ct(_,ht){d[_]!==ht&&(i.pixelStorei(_,ht),d[_]=ht)}function dt(_){de.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),de.copy(_))}function lt(_){te.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),te.copy(_))}function It(_,ht){let J=l.get(ht);J===void 0&&(J=new WeakMap,l.set(ht,J));let ut=J.get(_);ut===void 0&&(ut=i.getUniformBlockIndex(ht,_.name),J.set(_,ut))}function Dt(_,ht){let ut=l.get(ht).get(_);c.get(ht)!==ut&&(i.uniformBlockBinding(ht,ut,_.__bindingPointIndex),c.set(ht,ut))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},pt=null,ft={},u={},f=new WeakMap,x=[],M=null,m=!1,p=null,w=null,b=null,A=null,C=null,S=null,R=null,y=new At(0,0,0),T=0,P=!1,L=null,O=null,Y=null,Z=null,z=null,de.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Pt,bindFramebuffer:Bt,drawBuffers:Lt,useProgram:pe,setBlending:Qt,setMaterial:Xt,setFlipSided:Me,setCullFace:Ae,setLineWidth:_e,setPolygonOffset:be,setScissorTest:fe,activeTexture:Se,bindTexture:D,unbindTexture:Ee,compressedTexImage2D:ee,compressedTexImage3D:E,texImage2D:X,texImage3D:K,pixelStorei:Ct,getParameter:ct,updateUBOMapping:It,uniformBlockBinding:Dt,texStorage2D:et,texStorage3D:rt,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:W,scissor:dt,viewport:lt,reset:Ft}}function Dg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap,d=new Set,u,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,g){return x?new OffscreenCanvas(E,g):Fs("canvas")}function m(E,g,F){let k=1,W=ee(E);if((W.width>F||W.height>F)&&(k=F/Math.max(W.width,W.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let et=Math.floor(k*W.width),rt=Math.floor(k*W.height);u===void 0&&(u=M(et,rt));let X=g?M(et,rt):u;return X.width=et,X.height=rt,X.getContext("2d").drawImage(E,0,0,et,rt),Nt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+et+"x"+rt+")."),X}else return"data"in E&&Nt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),E;return E}function p(E){return E.generateMipmaps}function w(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(E,g,F,k,W,et=!1){if(E!==null){if(i[E]!==void 0)return i[E];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let rt;k&&(rt=t.get("EXT_texture_norm16"),rt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8),F===i.UNSIGNED_SHORT&&rt&&(X=rt.R16_EXT),F===i.SHORT&&rt&&(X=rt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),g===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8),F===i.UNSIGNED_SHORT&&rt&&(X=rt.RG16_EXT),F===i.SHORT&&rt&&(X=rt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&rt&&(X=rt.RGB16_EXT),F===i.SHORT&&rt&&(X=rt.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),g===i.RGBA){let K=et?Ns:$t.getTransfer(W);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=K===le?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&rt&&(X=rt.RGBA16_EXT),F===i.SHORT&&rt&&(X=rt.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function C(E,g){let F;return E?g===null||g===Mn||g===us?F=i.DEPTH24_STENCIL8:g===un?F=i.DEPTH32F_STENCIL8:g===hs&&(F=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Mn||g===us?F=i.DEPTH_COMPONENT24:g===un?F=i.DEPTH_COMPONENT32F:g===hs&&(F=i.DEPTH_COMPONENT16),F}function S(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Fe&&E.minFilter!==Ve?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function R(E){let g=E.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function y(E){let g=E.target;g.removeEventListener("dispose",y),L(g)}function T(E){let g=n.get(E);if(g.__webglInit===void 0)return;let F=E.source,k=f.get(F);if(k){let W=k[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(E),Object.keys(k).length===0&&f.delete(F)}n.remove(E)}function P(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let F=E.source,k=f.get(F);delete k[g.__cacheKey],a.memory.textures--}function L(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let W=0;W<g.__webglFramebuffer[k].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[k][W]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=E.textures;for(let k=0,W=F.length;k<W;k++){let et=n.get(F[k]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(E)}let O=0;function Y(){O=0}function Z(){return O}function z(E){O=E}function q(){let E=O;return E>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),O+=1,E}function H(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function Q(E,g){let F=n.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let k=E.image;if(k===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(F,E,g);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function tt(E,g){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Pt(F,E,g);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function pt(E,g){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Pt(F,E,g);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function ft(E,g){let F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Bt(F,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let Mt={[_i]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},Jt={[Fe]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},de={[dh]:i.NEVER,[yh]:i.ALWAYS,[ph]:i.LESS,[Ao]:i.LEQUAL,[mh]:i.EQUAL,[Mo]:i.GEQUAL,[gh]:i.GREATER,[xh]:i.NOTEQUAL};function te(E,g){if(g.type===un&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ve||g.magFilter===Na||g.magFilter===ir||g.magFilter===li||g.minFilter===Ve||g.minFilter===Na||g.minFilter===ir||g.minFilter===li)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Mt[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Mt[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Mt[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Jt[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Jt[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Fe||g.minFilter!==ir&&g.minFilter!==li||g.type===un&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function j(E,g){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",R));let k=g.source,W=f.get(k);W===void 0&&(W={},f.set(k,W));let et=H(g);if(et!==E.__cacheKey){W[et]===void 0&&(W[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),W[et].usedTimes++;let rt=W[E.__cacheKey];rt!==void 0&&(W[E.__cacheKey].usedTimes--,rt.usedTimes===0&&P(g)),E.__cacheKey=et,E.__webglTexture=W[et].texture}return F}function ot(E,g,F){return Math.floor(Math.floor(E/F)/g)}function nt(E,g,F,k){let et=E.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,k,g.data);else{et.sort((Ct,dt)=>Ct.start-dt.start);let rt=0;for(let Ct=1;Ct<et.length;Ct++){let dt=et[rt],lt=et[Ct],It=dt.start+dt.count,Dt=ot(lt.start,g.width,4),Ft=ot(dt.start,g.width,4);lt.start<=It+1&&Dt===Ft&&ot(lt.start+lt.count-1,g.width,4)===Dt?dt.count=Math.max(dt.count,lt.start+lt.count-dt.start):(++rt,et[rt]=lt)}et.length=rt+1;let X=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ct=0,dt=et.length;Ct<dt;Ct++){let lt=et[Ct],It=Math.floor(lt.start/4),Dt=Math.ceil(lt.count/4),Ft=It%g.width,_=Math.floor(It/g.width),ht=Dt,J=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,_),e.texSubImage2D(i.TEXTURE_2D,0,Ft,_,ht,J,F,k,g.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,X),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function Pt(E,g,F){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);let W=j(E,g),et=g.source;e.bindTexture(k,E.__webglTexture,i.TEXTURE0+F);let rt=n.get(et);if(et.version!==rt.__version||W===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let J=$t.getPrimaries($t.workingColorSpace),ut=g.colorSpace===Yn?null:$t.getPrimaries(g.colorSpace),xt=g.colorSpace===Yn||J===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let K=m(g.image,!1,s.maxTextureSize);K=Ee(g,K);let ct=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type),dt=A(g.internalFormat,ct,Ct,g.normalized,g.colorSpace,g.isVideoTexture);te(k,g);let lt,It=g.mipmaps,Dt=g.isVideoTexture!==!0,Ft=rt.__version===void 0||W===!0,_=et.dataReady,ht=S(g,K);if(g.isDepthTexture)dt=C(g.format===ci,g.type),Ft&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,dt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,dt,K.width,K.height,0,ct,Ct,null));else if(g.isDataTexture)if(It.length>0){Dt&&Ft&&e.texStorage2D(i.TEXTURE_2D,ht,dt,It[0].width,It[0].height);for(let J=0,ut=It.length;J<ut;J++)lt=It[J],Dt?_&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,lt.width,lt.height,ct,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,J,dt,lt.width,lt.height,0,ct,Ct,lt.data);g.generateMipmaps=!1}else Dt?(Ft&&e.texStorage2D(i.TEXTURE_2D,ht,dt,K.width,K.height),_&&nt(g,K,ct,Ct)):e.texImage2D(i.TEXTURE_2D,0,dt,K.width,K.height,0,ct,Ct,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Dt&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,It[0].width,It[0].height,K.depth);for(let J=0,ut=It.length;J<ut;J++)if(lt=It[J],g.format!==fn)if(ct!==null)if(Dt){if(_)if(g.layerUpdates.size>0){let xt=Hl(lt.width,lt.height,g.format,g.type);for(let $ of g.layerUpdates){let wt=lt.data.subarray($*xt/lt.data.BYTES_PER_ELEMENT,($+1)*xt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,$,lt.width,lt.height,1,ct,wt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,K.depth,ct,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,dt,lt.width,lt.height,K.depth,0,lt.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?_&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,K.depth,ct,Ct,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,dt,lt.width,lt.height,K.depth,0,ct,Ct,lt.data)}else{Dt&&Ft&&e.texStorage2D(i.TEXTURE_2D,ht,dt,It[0].width,It[0].height);for(let J=0,ut=It.length;J<ut;J++)lt=It[J],g.format!==fn?ct!==null?Dt?_&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,dt,lt.width,lt.height,0,lt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?_&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,lt.width,lt.height,ct,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,J,dt,lt.width,lt.height,0,ct,Ct,lt.data)}else if(g.isDataArrayTexture)if(Dt){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,K.width,K.height,K.depth),_)if(g.layerUpdates.size>0){let J=Hl(K.width,K.height,g.format,g.type);for(let ut of g.layerUpdates){let xt=K.data.subarray(ut*J/K.data.BYTES_PER_ELEMENT,(ut+1)*J/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,K.width,K.height,1,ct,Ct,xt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ct,Ct,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,K.width,K.height,K.depth,0,ct,Ct,K.data);else if(g.isData3DTexture)Dt?(Ft&&e.texStorage3D(i.TEXTURE_3D,ht,dt,K.width,K.height,K.depth),_&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ct,Ct,K.data)):e.texImage3D(i.TEXTURE_3D,0,dt,K.width,K.height,K.depth,0,ct,Ct,K.data);else if(g.isFramebufferTexture){if(Ft)if(Dt)e.texStorage2D(i.TEXTURE_2D,ht,dt,K.width,K.height);else{let J=K.width,ut=K.height;for(let xt=0;xt<ht;xt++)e.texImage2D(i.TEXTURE_2D,xt,dt,J,ut,0,ct,Ct,null),J>>=1,ut>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),K.parentNode!==J){J.appendChild(K),d.add(g),J.onpaint=ut=>{let xt=ut.changedElements;for(let $ of d)xt.includes($.image)&&($.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let xt=i.RGBA,$=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,$,wt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Dt&&Ft){let J=ee(It[0]);e.texStorage2D(i.TEXTURE_2D,ht,dt,J.width,J.height)}for(let J=0,ut=It.length;J<ut;J++)lt=It[J],Dt?_&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ct,Ct,lt):e.texImage2D(i.TEXTURE_2D,J,dt,ct,Ct,lt);g.generateMipmaps=!1}else if(Dt){if(Ft){let J=ee(K);e.texStorage2D(i.TEXTURE_2D,ht,dt,J.width,J.height)}_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Ct,K)}else e.texImage2D(i.TEXTURE_2D,0,dt,ct,Ct,K);p(g)&&w(k),rt.__version=et.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Bt(E,g,F){if(g.image.length!==6)return;let k=j(E,g),W=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let et=n.get(W);if(W.version!==et.__version||k===!0){e.activeTexture(i.TEXTURE0+F);let rt=$t.getPrimaries($t.workingColorSpace),X=g.colorSpace===Yn?null:$t.getPrimaries(g.colorSpace),K=g.colorSpace===Yn||rt===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ct=g.isCompressedTexture||g.image[0].isCompressedTexture,Ct=g.image[0]&&g.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!ct&&!Ct?dt[$]=m(g.image[$],!0,s.maxCubemapSize):dt[$]=Ct?g.image[$].image:g.image[$],dt[$]=Ee(g,dt[$]);let lt=dt[0],It=r.convert(g.format,g.colorSpace),Dt=r.convert(g.type),Ft=A(g.internalFormat,It,Dt,g.normalized,g.colorSpace),_=g.isVideoTexture!==!0,ht=et.__version===void 0||k===!0,J=W.dataReady,ut=S(g,lt);te(i.TEXTURE_CUBE_MAP,g);let xt;if(ct){_&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ft,lt.width,lt.height);for(let $=0;$<6;$++){xt=dt[$].mipmaps;for(let wt=0;wt<xt.length;wt++){let _t=xt[wt];g.format!==fn?It!==null?_?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt,0,0,_t.width,_t.height,It,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt,Ft,_t.width,_t.height,0,_t.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt,0,0,_t.width,_t.height,It,Dt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt,Ft,_t.width,_t.height,0,It,Dt,_t.data)}}}else{if(xt=g.mipmaps,_&&ht){xt.length>0&&ut++;let $=ee(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ft,$.width,$.height)}for(let $=0;$<6;$++)if(Ct){_?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,It,Dt,dt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,dt[$].width,dt[$].height,0,It,Dt,dt[$].data);for(let wt=0;wt<xt.length;wt++){let me=xt[wt].image[$].image;_?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt+1,0,0,me.width,me.height,It,Dt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt+1,Ft,me.width,me.height,0,It,Dt,me.data)}}else{_?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,It,Dt,dt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,It,Dt,dt[$]);for(let wt=0;wt<xt.length;wt++){let _t=xt[wt];_?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt+1,0,0,It,Dt,_t.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,wt+1,Ft,It,Dt,_t.image[$])}}}p(g)&&w(i.TEXTURE_CUBE_MAP),et.__version=W.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Lt(E,g,F,k,W,et){let rt=r.convert(F.format,F.colorSpace),X=r.convert(F.type),K=A(F.internalFormat,rt,X,F.normalized,F.colorSpace),ct=n.get(g),Ct=n.get(F);if(Ct.__renderTarget=g,!ct.__hasExternalTextures){let dt=Math.max(1,g.width>>et),lt=Math.max(1,g.height>>et);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,et,K,dt,lt,g.depth,0,rt,X,null):e.texImage2D(W,et,K,dt,lt,0,rt,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Se(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,W,Ct.__webglTexture,0,fe(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,W,Ct.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(E,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let k=g.depthTexture,W=k&&k.isDepthTexture?k.type:null,et=C(g.stencilBuffer,W),rt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(g),et,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(g),et,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,et,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,E)}else{let k=g.textures;for(let W=0;W<k.length;W++){let et=k[W],rt=r.convert(et.format,et.colorSpace),X=r.convert(et.type),K=A(et.internalFormat,rt,X,et.normalized,et.colorSpace);Se(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(g),K,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(g),K,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,K,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(E,g,F){let k=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),te(i.TEXTURE_CUBE_MAP,g.depthTexture);let ct=r.convert(g.depthTexture.format),Ct=r.convert(g.depthTexture.type),dt;g.depthTexture.format===En?dt=i.DEPTH_COMPONENT24:g.depthTexture.format===ci&&(dt=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,dt,g.width,g.height,0,ct,Ct,null)}}else Q(g.depthTexture,0);let et=W.__webglTexture,rt=fe(g),X=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,K=g.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===En)Se(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,X,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,K,X,et,0);else if(g.depthTexture.format===ci)Se(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,X,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,K,X,et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(E){let g=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let k=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",W)};k.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=k}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)Kt(g.__webglFramebuffer[k],E,k);else{let k=E.texture.mipmaps;k&&k.length>0?Kt(g.__webglFramebuffer[0],E,0):Kt(g.__webglFramebuffer,E,0)}else if(F){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),pe(g.__webglDepthbuffer[k],E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,et)}}else{let k=E.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),pe(g.__webglDepthbuffer,E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(E,g,F){let k=n.get(E);g!==void 0&&Lt(k.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&se(E)}function Xt(E){let g=E.texture,F=n.get(E),k=n.get(g);E.addEventListener("dispose",y);let W=E.textures,et=E.isWebGLCubeRenderTarget===!0,rt=W.length>1;if(rt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,a.memory.textures++),et){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let K=0;K<g.mipmaps.length;K++)F.__webglFramebuffer[X][K]=i.createFramebuffer()}else F.__webglFramebuffer[X]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)F.__webglFramebuffer[X]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(rt)for(let X=0,K=W.length;X<K;X++){let ct=n.get(W[X]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Se(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<W.length;X++){let K=W[X];F.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[X]);let ct=r.convert(K.format,K.colorSpace),Ct=r.convert(K.type),dt=A(K.internalFormat,ct,Ct,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),lt=fe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,F.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),te(i.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Lt(F.__webglFramebuffer[X][K],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else Lt(F.__webglFramebuffer[X],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(g)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let X=0,K=W.length;X<K;X++){let ct=W[X],Ct=n.get(ct),dt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Ct.__webglTexture),te(dt,ct),Lt(F.__webglFramebuffer,E,ct,i.COLOR_ATTACHMENT0+X,dt,0),p(ct)&&w(dt)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,k.__webglTexture),te(X,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Lt(F.__webglFramebuffer[K],E,g,i.COLOR_ATTACHMENT0,X,K);else Lt(F.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,X,0);p(g)&&w(X),e.unbindTexture()}E.depthBuffer&&se(E)}function Me(E){let g=E.textures;for(let F=0,k=g.length;F<k;F++){let W=g[F];if(p(W)){let et=b(E),rt=n.get(W).__webglTexture;e.bindTexture(et,rt),w(et),e.unbindTexture()}}}let Ae=[],_e=[];function be(E){if(E.samples>0){if(Se(E)===!1){let g=E.textures,F=E.width,k=E.height,W=i.COLOR_BUFFER_BIT,et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(E),X=g.length>1;if(X)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let K=E.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ct]);let Ct=n.get(g[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ct,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,W,i.NEAREST),c===!0&&(Ae.length=0,_e.length=0,Ae.push(i.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ae.push(et),_e.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ct]);let Ct=n.get(g[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function fe(E){return Math.min(s.maxSamples,E.samples)}function Se(E){let g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(E){let g=a.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function Ee(E,g){let F=E.colorSpace,k=E.format,W=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Us&&F!==Yn&&($t.getTransfer(F)===le?(k!==fn||W!==$e)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",F)),g}function ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.getTextureUnits=Z,this.setTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=tt,this.setTexture3D=pt,this.setTextureCube=ft,this.rebindTextures=Qt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ug(i,t){function e(n,s=Yn){let r,a=$t.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Pl)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===Nl)return i.RGB;if(n===fn)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===Va)return i.RED;if(n===za)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Wa||n===Xa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Za||n===Ja||n===Ka||n===ja||n===lr||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Za)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lr)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===yo||n===cr||n===vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ys(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:Ng,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,x=null,M=typeof XRWebGLBinding<"u",m=new lc,p={},w=e.getContextAttributes(),b=null,A=null,C=[],S=[],R=new St,y=null,T=new Be;T.viewport=new ve;let P=new Be;P.viewport=new ve;let L=[T,P],O=new Ia,Y=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=C[j];return ot===void 0&&(ot=new $i,C[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=C[j];return ot===void 0&&(ot=new $i,C[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=C[j];return ot===void 0&&(ot=new $i,C[j]=ot),ot.getHandSpace()};function z(j){let ot=S.indexOf(j.inputSource);if(ot===-1)return;let nt=C[ot];nt!==void 0&&(nt.update(j.inputSource,j.frame,l||a),nt.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",H);for(let j=0;j<C.length;j++){let ot=S[j];ot!==null&&(S[j]=null,C[j].disconnect(ot))}Y=null,Z=null,m.reset();for(let j in p)delete p[j];t.setRenderTarget(b),f=null,u=null,d=null,s=null,A=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Pt=null,Bt=null;w.depth&&(Bt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=w.stencil?ci:En,Pt=w.stencil?us:Mn);let Lt={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new nn(u.textureWidth,u.textureHeight,{format:fn,type:$e,depthTexture:new Wn(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new nn(f.framebufferWidth,f.framebufferHeight,{format:fn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(j){for(let ot=0;ot<j.removed.length;ot++){let nt=j.removed[ot],Pt=S.indexOf(nt);Pt>=0&&(S[Pt]=null,C[Pt].disconnect(nt))}for(let ot=0;ot<j.added.length;ot++){let nt=j.added[ot],Pt=S.indexOf(nt);if(Pt===-1){for(let Lt=0;Lt<C.length;Lt++)if(Lt>=S.length){S.push(nt),Pt=Lt;break}else if(S[Lt]===null){S[Lt]=nt,Pt=Lt;break}if(Pt===-1)break}let Bt=C[Pt];Bt&&Bt.connect(nt)}}let Q=new I,tt=new I;function pt(j,ot,nt){Q.setFromMatrixPosition(ot.matrixWorld),tt.setFromMatrixPosition(nt.matrixWorld);let Pt=Q.distanceTo(tt),Bt=ot.projectionMatrix.elements,Lt=nt.projectionMatrix.elements,pe=Bt[14]/(Bt[10]-1),Kt=Bt[14]/(Bt[10]+1),se=(Bt[9]+1)/Bt[5],Qt=(Bt[9]-1)/Bt[5],Xt=(Bt[8]-1)/Bt[0],Me=(Lt[8]+1)/Lt[0],Ae=pe*Xt,_e=pe*Me,be=Pt/(-Xt+Me),fe=be*-Xt;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(fe),j.translateZ(be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Bt[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Se=pe+be,D=Kt+be,Ee=Ae-fe,ee=_e+(Pt-fe),E=se*Kt/D*Se,g=Qt*Kt/D*Se;j.projectionMatrix.makePerspective(Ee,ee,E,g,Se,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ft(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,nt=j.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),O.near=P.near=T.near=ot,O.far=P.far=T.far=nt,(Y!==O.near||Z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),Y=O.near,Z=O.far),O.layers.mask=j.layers.mask|6,T.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let Pt=j.parent,Bt=O.cameras;ft(O,Pt);for(let Lt=0;Lt<Bt.length;Lt++)ft(Bt[Lt],Pt);Bt.length===2?pt(O,T,P):O.projectionMatrix.copy(T.projectionMatrix),Mt(j,O,Pt)};function Mt(j,ot,nt){nt===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(nt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ia*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let Jt=null;function de(j,ot){if(h=ot.getViewerPose(l||a),x=ot,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(A,f.framebuffer),t.setRenderTarget(A));let Pt=!1;nt.length!==O.cameras.length&&(O.cameras.length=0,Pt=!0);for(let Kt=0;Kt<nt.length;Kt++){let se=nt[Kt],Qt=null;if(f!==null)Qt=f.getViewport(se);else{let Me=d.getViewSubImage(u,se);Qt=Me.viewport,Kt===0&&(t.setRenderTargetTextures(A,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(A))}let Xt=L[Kt];Xt===void 0&&(Xt=new Be,Xt.layers.enable(Kt),Xt.viewport=new ve,L[Kt]=Xt),Xt.matrix.fromArray(se.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(se.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Kt===0&&(O.matrix.copy(Xt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pt===!0&&O.cameras.push(Xt)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Kt=d.getDepthInformation(nt[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,s.renderState)}if(Bt&&Bt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Kt=0;Kt<nt.length;Kt++){let se=nt[Kt].camera;if(se){let Qt=p[se];Qt||(Qt=new Ys,p[se]=Qt);let Xt=d.getCameraImage(se);Qt.sourceTexture=Xt}}}}for(let nt=0;nt<C.length;nt++){let Pt=S[nt],Bt=C[nt];Pt!==null&&Bt!==void 0&&Bt.update(Pt,ot,l||a)}Jt&&Jt(j,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}let te=new Zh;te.setAnimationLoop(de),this.setAnimationLoop=function(j){Jt=j},this.dispose=function(){}}},Og=new re,tu=new Ht;tu.set(-1,0,0,0,1,0,0,0,1);function Bg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,b,A){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),b=w.envMap,A=w.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(A)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,C){let S=C.program;n.uniformBlockBinding(A,S)}function l(A,C){let S=s[A.id];S===void 0&&(m(A),S=h(A),s[A.id]=S,A.addEventListener("dispose",w));let R=C.program;n.updateUBOMapping(A,R);let y=t.render.frame;r[A.id]!==y&&(u(A),r[A.id]=y)}function h(A){let C=d();A.__bindingPointIndex=C;let S=i.createBuffer(),R=A.__size,y=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,S),S}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){let C=s[A.id],S=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let y=0,T=S.length;y<T;y++){let P=S[y];if(Array.isArray(P))for(let L=0,O=P.length;L<O;L++)f(P[L],y,L,R);else f(P,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,C,S,R){if(M(A,C,S,R)===!0){let y=A.__offset,T=A.value;if(Array.isArray(T)){let P=0;for(let L=0;L<T.length;L++){let O=T[L],Y=p(O);x(O,A.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,A.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,A.__data)}}function x(A,C,S){typeof A=="number"||typeof A=="boolean"?C[0]=A:A.isMatrix3?(C[0]=A.elements[0],C[1]=A.elements[1],C[2]=A.elements[2],C[3]=0,C[4]=A.elements[3],C[5]=A.elements[4],C[6]=A.elements[5],C[7]=0,C[8]=A.elements[6],C[9]=A.elements[7],C[10]=A.elements[8],C[11]=0):ArrayBuffer.isView(A)?C.set(new A.constructor(A.buffer,A.byteOffset,C.length)):A.toArray(C,S)}function M(A,C,S,R){let y=A.value,T=C+"_"+S;if(R[T]===void 0)return typeof y=="number"||typeof y=="boolean"?R[T]=y:ArrayBuffer.isView(y)?R[T]=y.slice():R[T]=y.clone(),!0;{let P=R[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return R[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(A){let C=A.uniforms,S=0,R=16;for(let T=0,P=C.length;T<P;T++){let L=Array.isArray(C[T])?C[T]:[C[T]];for(let O=0,Y=L.length;O<Y;O++){let Z=L[O],z=Array.isArray(Z.value)?Z.value:[Z.value];for(let q=0,H=z.length;q<H;q++){let Q=z[q],tt=p(Q),pt=S%R,ft=pt%tt.boundary,Mt=pt+ft;S+=ft,Mt!==0&&R-Mt<tt.storage&&(S+=R-Mt),Z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=tt.storage}}}let y=S%R;return y>0&&(S+=R-y),A.__size=S,A.__cache={},this}function p(A){let C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(C.boundary=16,C.storage=A.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",A),C}function w(A){let C=A.target;C.removeEventListener("dispose",w);let S=a.indexOf(C.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function b(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}var zg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function kg(){return Dn===null&&(Dn=new Hs(zg,16,16,hi,Ln),Dn.name="DFG_LUT",Dn.minFilter=Ve,Dn.magFilter=Ve,Dn.wrapS=bn,Dn.wrapT=bn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var Eo=class{constructor(t={}){let{canvas:e=vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=$e}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=f,m=new Set([Ga,ka,za]),p=new Set([$e,Mn,hs,us,Oa,Ba]),w=new Uint32Array(4),b=new Int32Array(4),A=new I,C=null,S=null,R=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,O=null,Y=null,Z=null,z=null;this._outputColorSpace=He;let q=0,H=0,Q=null,tt=-1,pt=null,ft=new ve,Mt=new ve,Jt=null,de=new At(0),te=0,j=e.width,ot=e.height,nt=1,Pt=null,Bt=null,Lt=new ve(0,0,j,ot),pe=new ve(0,0,j,ot),Kt=!1,se=new es,Qt=!1,Xt=!1,Me=new re,Ae=new I,_e=new ve,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Se(){return Q===null?nt:1}let D=n;function Ee(v,N){return e.getContext(v,N)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",rn,!1),D===null){let N="webgl2";if(D=Ee(N,v),D===null)throw Ee(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Ot("WebGLRenderer: "+v.message),v}let ee,E,g,F,k,W,et,rt,X,K,ct,Ct,dt,lt,It,Dt,Ft,_,ht,J,ut,xt,$;function wt(){ee=new Zp(D),ee.init(),ut=new Ug(D,ee),E=new zp(D,ee,t,ut),g=new Lg(D,ee),E.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),Y=D.createFramebuffer(),Z=D.createFramebuffer(),z=D.createFramebuffer(),F=new jp(D),k=new yg,W=new Dg(D,ee,g,k,E,ut,F),et=new qp(P),rt=new tf(D),xt=new Bp(D,rt),X=new Jp(D,rt,F,xt),K=new $p(D,X,rt,xt,F),_=new Qp(D,E,W),It=new kp(k),ct=new xg(P,et,ee,E,xt,It),Ct=new Bg(P,k),dt=new Ag,lt=new wg(ee),Ft=new Op(P,et,g,K,x,c),Dt=new Pg(P,K,E),$=new Vg(D,F,E,g),ht=new Vp(D,ee,F),J=new Kp(D,ee,F),F.programs=ct.programs,P.capabilities=E,P.extensions=ee,P.properties=k,P.renderLists=dt,P.shadowMap=Dt,P.state=g,P.info=F}wt(),M!==$e&&(T=new em(M,e.width,e.height,o,s,r));let _t=new cc(P,D);this.xr=_t,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=ee.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ee.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(v){v!==void 0&&(nt=v,this.setSize(j,ot,!1))},this.getSize=function(v){return v.set(j,ot)},this.setSize=function(v,N,G=!0){if(_t.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=v,ot=N,e.width=Math.floor(v*nt),e.height=Math.floor(N*nt),G===!0&&(e.style.width=v+"px",e.style.height=N+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(j*nt,ot*nt).floor()},this.setDrawingBufferSize=function(v,N,G){j=v,ot=N,nt=G,e.width=Math.floor(v*G),e.height=Math.floor(N*G),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(M===$e){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ft)},this.getViewport=function(v){return v.copy(Lt)},this.setViewport=function(v,N,G,B){v.isVector4?Lt.set(v.x,v.y,v.z,v.w):Lt.set(v,N,G,B),g.viewport(ft.copy(Lt).multiplyScalar(nt).round())},this.getScissor=function(v){return v.copy(pe)},this.setScissor=function(v,N,G,B){v.isVector4?pe.set(v.x,v.y,v.z,v.w):pe.set(v,N,G,B),g.scissor(Mt.copy(pe).multiplyScalar(nt).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(v){g.setScissorTest(Kt=v)},this.setOpaqueSort=function(v){Pt=v},this.setTransparentSort=function(v){Bt=v},this.getClearColor=function(v){return v.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,G=!0){let B=0;if(v){let V=!1;if(Q!==null){let mt=Q.texture.format;V=m.has(mt)}if(V){let mt=Q.texture.type,yt=p.has(mt),at=Ft.getClearColor(),bt=Ft.getClearAlpha(),Et=at.r,kt=at.g,Wt=at.b;yt?(w[0]=Et,w[1]=kt,w[2]=Wt,w[3]=bt,D.clearBufferuiv(D.COLOR,0,w)):(b[0]=Et,b[1]=kt,b[2]=Wt,b[3]=bt,D.clearBufferiv(D.COLOR,0,b))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Ft.dispose(),dt.dispose(),lt.dispose(),k.dispose(),et.dispose(),K.dispose(),xt.dispose(),$.dispose(),ct.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",yr),_t.removeEventListener("sessionend",Ss),Nn.stop()};function me(v){v.preventDefault(),Bl("WebGLRenderer: Context Lost."),L=!0}function he(){Bl("WebGLRenderer: Context Restored."),L=!1;let v=F.autoReset,N=Dt.enabled,G=Dt.autoUpdate,B=Dt.needsUpdate,V=Dt.type;wt(),F.autoReset=v,Dt.enabled=N,Dt.autoUpdate=G,Dt.needsUpdate=B,Dt.type=V}function rn(v){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function an(v){let N=v.target;N.removeEventListener("dispose",an),Do(N)}function Do(v){As(v),k.remove(v)}function As(v){let N=k.get(v).programs;N!==void 0&&(N.forEach(function(G){ct.releaseProgram(G)}),v.isShaderMaterial&&ct.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,G,B,V,mt){N===null&&(N=be);let yt=V.isMesh&&V.matrixWorld.determinantAffine()<0,at=Ue(v,N,G,B,V);g.setMaterial(B,yt);let bt=G.index,Et=1;if(B.wireframe===!0){if(bt=X.getWireframeAttribute(G),bt===void 0)return;Et=2}let kt=G.drawRange,Wt=G.attributes.position,vt=kt.start*Et,ae=(kt.start+kt.count)*Et;mt!==null&&(vt=Math.max(vt,mt.start*Et),ae=Math.min(ae,(mt.start+mt.count)*Et)),bt!==null?(vt=Math.max(vt,0),ae=Math.min(ae,bt.count)):Wt!=null&&(vt=Math.max(vt,0),ae=Math.min(ae,Wt.count));let xe=ae-vt;if(xe<0||xe===1/0)return;xt.setup(V,B,at,G,bt);let ue,oe=ht;if(bt!==null&&(ue=rt.get(bt),oe=J,oe.setIndex(ue)),V.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Se()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(V.isLine){let Re=B.linewidth;Re===void 0&&(Re=1),g.setLineWidth(Re*Se()),V.isLineSegments?oe.setMode(D.LINES):V.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else V.isPoints?oe.setMode(D.POINTS):V.isSprite&&oe.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))oe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Re=V._multiDrawStarts,U=V._multiDrawCounts,it=V._multiDrawCount,st=bt?rt.get(bt).bytesPerElement:1,Vt=k.get(B).currentProgram.getUniforms();for(let Rt=0;Rt<it;Rt++)Vt.setValue(D,"_gl_DrawID",Rt),oe.render(Re[Rt]/st,U[Rt])}else if(V.isInstancedMesh)oe.renderInstances(vt,xe,V.count);else if(G.isInstancedBufferGeometry){let Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,U=Math.min(G.instanceCount,Re);oe.renderInstances(vt,xe,U)}else oe.render(vt,xe)};function Ms(v,N,G){v.transparent===!0&&v.side===Je&&v.forceSinglePass===!1?(v.side=ze,v.needsUpdate=!0,Ui(v,N,G),v.side=Gn,v.needsUpdate=!0,Ui(v,N,G),v.side=Je):Ui(v,N,G)}this.compile=function(v,N,G=null){G===null&&(G=v),S=lt.get(G),S.init(N),y.push(S),G.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),v!==G&&v.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights();let B=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let mt=V.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){let at=mt[yt];Ms(at,G,V),B.add(at)}else Ms(mt,G,V),B.add(mt)}),S=y.pop(),B},this.compileAsync=function(v,N,G=null){let B=this.compile(v,N,G);return new Promise(V=>{function mt(){if(B.forEach(function(yt){k.get(yt).currentProgram.isReady()&&B.delete(yt)}),B.size===0){V(v);return}setTimeout(mt,10)}ee.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Pi=null;function xr(v){Pi&&Pi(v)}function yr(){Nn.stop()}function Ss(){Nn.start()}let Nn=new Zh;Nn.setAnimationLoop(xr),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(v){Pi=v,_t.setAnimationLoop(v),v===null?Nn.stop():Nn.start()},_t.addEventListener("sessionstart",yr),_t.addEventListener("sessionend",Ss),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(v,N);let G=_t.enabled===!0&&_t.isPresenting===!0,B=T!==null&&(Q===null||G)&&T.begin(P,Q);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(N),N=_t.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,N,Q),S=lt.get(v,y.length),S.init(N),S.state.textureUnits=W.getTextureUnits(),y.push(S),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),se.setFromProjectionMatrix(Me,vn,N.reversedDepth),Xt=this.localClippingEnabled,Qt=It.init(this.clippingPlanes,Xt),C=dt.get(v,R.length),C.init(),R.push(C),_t.enabled===!0&&_t.isPresenting===!0){let yt=P.xr.getDepthSensingMesh();yt!==null&&Li(yt,N,-1/0,P.sortObjects)}Li(v,N,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(Pt,Bt,N.reversedDepth),fe=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,fe&&Ft.addToRenderList(C,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&It.beginShadows();let V=S.state.shadowsArray;if(Dt.render(V,v,N),Qt===!0&&It.endShadows(),(B&&T.hasRenderPass())===!1){let yt=C.opaque,at=C.transmissive;if(S.setupLights(),N.isArrayCamera){let bt=N.cameras;if(at.length>0)for(let Et=0,kt=bt.length;Et<kt;Et++){let Wt=bt[Et];_s(yt,at,v,Wt)}fe&&Ft.render(v);for(let Et=0,kt=bt.length;Et<kt;Et++){let Wt=bt[Et];vr(C,v,Wt,Wt.viewport)}}else at.length>0&&_s(yt,at,v,N),fe&&Ft.render(v),vr(C,v,N)}Q!==null&&H===0&&(W.updateMultisampleRenderTarget(Q),W.updateRenderTargetMipmap(Q)),B&&T.end(P),v.isScene===!0&&v.onAfterRender(P,v,N),xt.resetDefaultState(),tt=-1,pt=null,y.pop(),y.length>0?(S=y[y.length-1],W.setTextureUnits(S.state.textureUnits),Qt===!0&&It.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,O!==null&&O.renderEnd()};function Li(v,N,G,B){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||se.intersectsSprite(v)){B&&_e.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Me);let yt=K.update(v),at=v.material;at.visible&&C.push(v,yt,at,G,_e.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||se.intersectsObject(v))){let yt=K.update(v),at=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),_e.copy(v.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),_e.copy(yt.boundingSphere.center)),_e.applyMatrix4(v.matrixWorld).applyMatrix4(Me)),Array.isArray(at)){let bt=yt.groups;for(let Et=0,kt=bt.length;Et<kt;Et++){let Wt=bt[Et],vt=at[Wt.materialIndex];vt&&vt.visible&&C.push(v,yt,vt,G,_e.z,Wt)}}else at.visible&&C.push(v,yt,at,G,_e.z,null)}}let mt=v.children;for(let yt=0,at=mt.length;yt<at;yt++)Li(mt[yt],N,G,B)}function vr(v,N,G,B){let{opaque:V,transmissive:mt,transparent:yt}=v;S.setupLightsView(G),Qt===!0&&It.setGlobalState(P.clippingPlanes,G),B&&g.viewport(ft.copy(B)),V.length>0&&Di(V,N,G),mt.length>0&&Di(mt,N,G),yt.length>0&&Di(yt,N,G),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function _s(v,N,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){let vt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new nn(1,1,{generateMipmaps:!0,type:vt?Ln:$e,minFilter:li,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let mt=S.state.transmissionRenderTarget[B.id],yt=B.viewport||ft;mt.setSize(yt.z*P.transmissionResolutionScale,yt.w*P.transmissionResolutionScale);let at=P.getRenderTarget(),bt=P.getActiveCubeFace(),Et=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(de),te=P.getClearAlpha(),te<1&&P.setClearColor(16777215,.5),P.clear(),fe&&Ft.render(G);let kt=P.toneMapping;P.toneMapping=An;let Wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),Qt===!0&&It.setGlobalState(P.clippingPlanes,B),Di(v,G,B),W.updateMultisampleRenderTarget(mt),W.updateRenderTargetMipmap(mt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let ae=0,xe=N.length;ae<xe;ae++){let ue=N[ae],{object:oe,geometry:Re,material:U,group:it}=ue;if(U.side===Je&&oe.layers.test(B.layers)){let st=U.side;U.side=ze,U.needsUpdate=!0,Ar(oe,G,B,Re,U,it),U.side=st,U.needsUpdate=!0,vt=!0}}vt===!0&&(W.updateMultisampleRenderTarget(mt),W.updateRenderTargetMipmap(mt))}P.setRenderTarget(at,bt,Et),P.setClearColor(de,te),Wt!==void 0&&(B.viewport=Wt),P.toneMapping=kt}function Di(v,N,G){let B=N.isScene===!0?N.overrideMaterial:null;for(let V=0,mt=v.length;V<mt;V++){let yt=v[V],{object:at,geometry:bt,group:Et}=yt,kt=yt.material;kt.allowOverride===!0&&B!==null&&(kt=B),at.layers.test(G.layers)&&Ar(at,N,G,bt,kt,Et)}}function Ar(v,N,G,B,V,mt){v.onBeforeRender(P,N,G,B,V,mt),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(P,N,G,B,v,mt),V.transparent===!0&&V.side===Je&&V.forceSinglePass===!1?(V.side=ze,V.needsUpdate=!0,P.renderBufferDirect(G,N,B,V,v,mt),V.side=Gn,V.needsUpdate=!0,P.renderBufferDirect(G,N,B,V,v,mt),V.side=Je):P.renderBufferDirect(G,N,B,V,v,mt),v.onAfterRender(P,N,G,B,V,mt)}function Ui(v,N,G){N.isScene!==!0&&(N=be);let B=k.get(v),V=S.state.lights,mt=S.state.shadowsArray,yt=V.state.version,at=ct.getParameters(v,V.state,mt,N,G,S.state.lightProbeGridArray),bt=ct.getProgramCacheKey(at),Et=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let kt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=et.get(v.envMap||B.environment,kt),B.envMapRotation=B.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Et===void 0&&(v.addEventListener("dispose",an),Et=new Map,B.programs=Et);let Wt=Et.get(bt);if(Wt!==void 0){if(B.currentProgram===Wt&&B.lightsStateVersion===yt)return pn(v,at),Wt}else at.uniforms=ct.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,G,at),v.onBeforeCompile(at,P),Wt=ct.acquireProgram(at,bt),Et.set(bt,Wt),B.uniforms=at.uniforms;let vt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(vt.clippingPlanes=It.uniform),pn(v,at),B.needsLights=mn(v),B.lightsStateVersion=yt,B.needsLights&&(vt.ambientLightColor.value=V.state.ambient,vt.lightProbe.value=V.state.probe,vt.directionalLights.value=V.state.directional,vt.directionalLightShadows.value=V.state.directionalShadow,vt.spotLights.value=V.state.spot,vt.spotLightShadows.value=V.state.spotShadow,vt.rectAreaLights.value=V.state.rectArea,vt.ltc_1.value=V.state.rectAreaLTC1,vt.ltc_2.value=V.state.rectAreaLTC2,vt.pointLights.value=V.state.point,vt.pointLightShadows.value=V.state.pointShadow,vt.hemisphereLights.value=V.state.hemi,vt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,vt.spotLightMatrix.value=V.state.spotLightMatrix,vt.spotLightMap.value=V.state.spotLightMap,vt.pointShadowMatrix.value=V.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=Wt,B.uniformsList=null,Wt}function Mr(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=ds.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function pn(v,N){let G=k.get(v);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Uo(v,N){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;A.setFromMatrixPosition(N.matrixWorld);for(let G=0,B=v.length;G<B;G++){let V=v[G];if(V.texture!==null&&V.boundingBox.containsPoint(A))return V}return null}function Ue(v,N,G,B,V){N.isScene!==!0&&(N=be),W.resetTextureUnits();let mt=N.fog,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,at=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:$t.workingColorSpace,bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Et=et.get(B.envMap||yt,bt),kt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),vt=!!G.morphAttributes.position,ae=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color,ue=An;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ue=P.toneMapping);let oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Re=oe!==void 0?oe.length:0,U=k.get(B),it=S.state.lights;if(Qt===!0&&(Xt===!0||v!==pt)){let ne=v===pt&&B.id===tt;It.setState(B,v,ne)}let st=!1;B.version===U.__version?(U.needsLights&&U.lightsStateVersion!==it.state.version||U.outputColorSpace!==at||V.isBatchedMesh&&U.batching===!1||!V.isBatchedMesh&&U.batching===!0||V.isBatchedMesh&&U.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&U.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&U.instancing===!1||!V.isInstancedMesh&&U.instancing===!0||V.isSkinnedMesh&&U.skinning===!1||!V.isSkinnedMesh&&U.skinning===!0||V.isInstancedMesh&&U.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&U.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&U.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&U.instancingMorph===!1&&V.morphTexture!==null||U.envMap!==Et||B.fog===!0&&U.fog!==mt||U.numClippingPlanes!==void 0&&(U.numClippingPlanes!==It.numPlanes||U.numIntersection!==It.numIntersection)||U.vertexAlphas!==kt||U.vertexTangents!==Wt||U.morphTargets!==vt||U.morphNormals!==ae||U.morphColors!==xe||U.toneMapping!==ue||U.morphTargetsCount!==Re||!!U.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,U.__version=B.version);let Vt=U.currentProgram;st===!0&&(Vt=Ui(B,N,V),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Vt,U));let Rt=!1,qt=!1,Ut=!1,zt=Vt.getUniforms(),Gt=U.uniforms;if(g.useProgram(Vt.program)&&(Rt=!0,qt=!0,Ut=!0),B.id!==tt&&(tt=B.id,qt=!0),U.needsLights){let ne=Uo(S.state.lightProbeGridArray,V);U.lightProbeGrid!==ne&&(U.lightProbeGrid=ne,qt=!0)}if(Rt||pt!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),zt.setValue(D,"projectionMatrix",v.projectionMatrix),zt.setValue(D,"viewMatrix",v.matrixWorldInverse);let Ke=zt.map.cameraPosition;Ke!==void 0&&Ke.setValue(D,Ae.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&zt.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&zt.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),pt!==v&&(pt=v,qt=!0,Ut=!0)}if(U.needsLights&&(it.state.directionalShadowMap.length>0&&zt.setValue(D,"directionalShadowMap",it.state.directionalShadowMap,W),it.state.spotShadowMap.length>0&&zt.setValue(D,"spotShadowMap",it.state.spotShadowMap,W),it.state.pointShadowMap.length>0&&zt.setValue(D,"pointShadowMap",it.state.pointShadowMap,W)),V.isSkinnedMesh){zt.setOptional(D,V,"bindMatrix"),zt.setOptional(D,V,"bindMatrixInverse");let ne=V.skeleton;ne&&(ne.boneTexture===null&&ne.computeBoneTexture(),zt.setValue(D,"boneTexture",ne.boneTexture,W))}V.isBatchedMesh&&(zt.setOptional(D,V,"batchingTexture"),zt.setValue(D,"batchingTexture",V._matricesTexture,W),zt.setOptional(D,V,"batchingIdTexture"),zt.setValue(D,"batchingIdTexture",V._indirectTexture,W),zt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&zt.setValue(D,"batchingColorTexture",V._colorsTexture,W));let ye=G.morphAttributes;if((ye.position!==void 0||ye.normal!==void 0||ye.color!==void 0)&&_.update(V,G,Vt),(qt||U.receiveShadow!==V.receiveShadow)&&(U.receiveShadow=V.receiveShadow,zt.setValue(D,"receiveShadow",V.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(Gt.envMapIntensity.value=N.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=kg()),qt){if(zt.setValue(D,"toneMappingExposure",P.toneMappingExposure),U.needsLights&&on(Gt,Ut),mt&&B.fog===!0&&Ct.refreshFogUniforms(Gt,mt),Ct.refreshMaterialUniforms(Gt,B,nt,ot,S.state.transmissionRenderTarget[v.id]),U.needsLights&&U.lightProbeGrid){let ne=U.lightProbeGrid;Gt.probesSH.value=ne.texture,Gt.probesMin.value.copy(ne.boundingBox.min),Gt.probesMax.value.copy(ne.boundingBox.max),Gt.probesResolution.value.copy(ne.resolution)}ds.upload(D,Mr(U),Gt,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ds.upload(D,Mr(U),Gt,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&zt.setValue(D,"center",V.center),zt.setValue(D,"modelViewMatrix",V.modelViewMatrix),zt.setValue(D,"normalMatrix",V.normalMatrix),zt.setValue(D,"modelMatrix",V.matrixWorld),B.uniformsGroups!==void 0){let ne=B.uniformsGroups;for(let Ke=0,Ni=ne.length;Ke<Ni;Ke++){let dc=ne[Ke];$.update(dc,Vt),$.bind(dc,Vt)}}return Vt}function on(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function mn(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(v,N,G){let B=k.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),k.get(v.texture).__webglTexture=N,k.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let G=k.get(v);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,G=0){Q=v,q=N,H=G;let B=null,V=!1,mt=!1;if(v){let at=k.get(v);if(at.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,at.__webglFramebuffer),ft.copy(v.viewport),Mt.copy(v.scissor),Jt=v.scissorTest,g.viewport(ft),g.scissor(Mt),g.setScissorTest(Jt),tt=-1;return}else if(at.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(at.__hasExternalTextures)W.rebindTextures(v,k.get(v.texture).__webglTexture,k.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let kt=v.depthTexture;if(at.__boundDepthTexture!==kt){if(kt!==null&&k.has(kt)&&(v.width!==kt.image.width||v.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}let bt=v.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);let Et=k.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Et[N])?B=Et[N][G]:B=Et[N],V=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?B=k.get(v).__webglMultisampledFramebuffer:Array.isArray(Et)?B=Et[G]:B=Et,ft.copy(v.viewport),Mt.copy(v.scissor),Jt=v.scissorTest}else ft.copy(Lt).multiplyScalar(nt).floor(),Mt.copy(pe).multiplyScalar(nt).floor(),Jt=Kt;if(G!==0&&(B=Y),g.bindFramebuffer(D.FRAMEBUFFER,B)&&g.drawBuffers(v,B),g.viewport(ft),g.scissor(Mt),g.setScissorTest(Jt),V){let at=k.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,at.__webglTexture,G)}else if(mt){let at=N;for(let bt=0;bt<v.textures.length;bt++){let Et=k.get(v.textures[bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+bt,Et.__webglTexture,G,at)}}else if(v!==null&&G!==0){let at=k.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,at.__webglTexture,G)}tt=-1},this.readRenderTargetPixels=function(v,N,G,B,V,mt,yt,at=0){if(!(v&&v.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt){g.bindFramebuffer(D.FRAMEBUFFER,bt);try{let Et=v.textures[at],kt=Et.format,Wt=Et.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+at),!E.textureFormatReadable(kt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(Wt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-B&&G>=0&&G<=v.height-V&&D.readPixels(N,G,B,V,ut.convert(kt),ut.convert(Wt),mt)}finally{let Et=Q!==null?k.get(Q).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(v,N,G,B,V,mt,yt,at=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt)if(N>=0&&N<=v.width-B&&G>=0&&G<=v.height-V){g.bindFramebuffer(D.FRAMEBUFFER,bt);let Et=v.textures[at],kt=Et.format,Wt=Et.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+at),!E.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(N,G,B,V,ut.convert(kt),ut.convert(Wt),0);let ae=Q!==null?k.get(Q).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,ae);let xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mh(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.deleteBuffer(vt),D.deleteSync(xe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,G=0){let B=Math.pow(2,-G),V=Math.floor(v.image.width*B),mt=Math.floor(v.image.height*B),yt=N!==null?N.x:0,at=N!==null?N.y:0;W.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,yt,at,V,mt),g.unbindTexture()},this.copyTextureToTexture=function(v,N,G=null,B=null,V=0,mt=0){let yt,at,bt,Et,kt,Wt,vt,ae,xe,ue=v.isCompressedTexture?v.mipmaps[mt]:v.image;if(G!==null)yt=G.max.x-G.min.x,at=G.max.y-G.min.y,bt=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,kt=G.min.y,Wt=G.isBox3?G.min.z:0;else{let Gt=Math.pow(2,-V);yt=Math.floor(ue.width*Gt),at=Math.floor(ue.height*Gt),v.isDataArrayTexture?bt=ue.depth:v.isData3DTexture?bt=Math.floor(ue.depth*Gt):bt=1,Et=0,kt=0,Wt=0}B!==null?(vt=B.x,ae=B.y,xe=B.z):(vt=0,ae=0,xe=0);let oe=ut.convert(N.format),Re=ut.convert(N.type),U;N.isData3DTexture?(W.setTexture3D(N,0),U=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(W.setTexture2DArray(N,0),U=D.TEXTURE_2D_ARRAY):(W.setTexture2D(N,0),U=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let it=g.getParameter(D.UNPACK_ROW_LENGTH),st=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Vt=g.getParameter(D.UNPACK_SKIP_PIXELS),Rt=g.getParameter(D.UNPACK_SKIP_ROWS),qt=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,ue.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),g.pixelStorei(D.UNPACK_SKIP_ROWS,kt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Wt);let Ut=v.isDataArrayTexture||v.isData3DTexture,zt=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let Gt=k.get(v),ye=k.get(N),ne=k.get(Gt.__renderTarget),Ke=k.get(ye.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,ne.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ni=0;Ni<bt;Ni++)Ut&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(v).__webglTexture,V,Wt+Ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(N).__webglTexture,mt,xe+Ni)),D.blitFramebuffer(Et,kt,yt,at,vt,ae,yt,at,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||k.has(v)){let Gt=k.get(v),ye=k.get(N);g.bindFramebuffer(D.READ_FRAMEBUFFER,Z),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,z);for(let ne=0;ne<bt;ne++)Ut?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gt.__webglTexture,V,Wt+ne):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gt.__webglTexture,V),zt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,mt,xe+ne):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ye.__webglTexture,mt),V!==0?D.blitFramebuffer(Et,kt,yt,at,vt,ae,yt,at,D.COLOR_BUFFER_BIT,D.NEAREST):zt?D.copyTexSubImage3D(U,mt,vt,ae,xe+ne,Et,kt,yt,at):D.copyTexSubImage2D(U,mt,vt,ae,Et,kt,yt,at);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else zt?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(U,mt,vt,ae,xe,yt,at,bt,oe,Re,ue.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(U,mt,vt,ae,xe,yt,at,bt,oe,ue.data):D.texSubImage3D(U,mt,vt,ae,xe,yt,at,bt,oe,Re,ue):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,vt,ae,yt,at,oe,Re,ue.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,vt,ae,ue.width,ue.height,oe,ue.data):D.texSubImage2D(D.TEXTURE_2D,mt,vt,ae,yt,at,oe,Re,ue);g.pixelStorei(D.UNPACK_ROW_LENGTH,it),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Vt),g.pixelStorei(D.UNPACK_SKIP_ROWS,Rt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,qt),mt===0&&N.generateMipmaps&&D.generateMipmap(U),g.unbindTexture()},this.initRenderTarget=function(v){k.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){q=0,H=0,Q=null,g.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var eu="data:image/jpeg;base64,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mZfJ1+w6bw4LsrH4bQK8Vc9AiAMem46v2iJFMq7/AAAtRlNurK0W/i44CuwBauuZgBVXA9KGlHSV4OT8ZnDi6ysQRsQiwa1a+4/SNruDy6PsJoG3G7vb/L4DBe4JUeTxW8yO7E8w22qw1JZhR06cnrBY0wdCFzSvRej5RtOCvru/OdrEDAH2QGgX5jBg9ub+IuB9Bux3tyd/87jSjiOEPVMXBg+9BFqs1QI8f7iKl5wNKHephAOMPwtfaNSgbe3w/wCDydSHjDCFaDRfh1i6g46E0UWvpOr8BTU6R4AukDmB6iPoOyXerAFcksArkic+V1hma9zUnCHoN+8Cz1MRbq9sRU31CMoOolcWjmOOsv6kVrqnhqy3chai/rnwUBqD0PSJoAPl5W0dEfuY2GTLMh5OYUYXZbXcBclbdsW23X4COzuUw3C0PFKruxMRooprjPOmkIgNhGWrDRjxKvsRc1OEy9Xy+hCawNvVr84rRsvT73rBVZrFiV7LIpscxomEp6ymDSU0y93WPlDk9dbviIFqb3PpFLMy/wBIiecZckvjWnl5950Fnbbu78D9g5ivXvTEbUBdjjQE0AHoy7B6z/gMqlDmUycLSO3w/9oADAMBAAIAAwAAABD333333333333337333337333333333333333333333333333373333373333333333333333333333333333733333733333333333333333333333333337333337333333333333333333333333333373333373333333333333333333333333333733Hb37333333333333333333333333333373qVf37333333333333333333333333333372spz373333333333333333333333333333731z3373333333333333333333333333333vHHHHHf333333333333333333333333333333333333333333333333335NX333333333333333333333333332m/wC9+3pJ299999999999999999999999996FV6+m+Jxj1999999999999999299999995TxG+a+m39999995y/8AfffffffekPfefffffffa2vknnffffffbHPvfffffffSovfYsffffffbbopvvffffffX7r6/CpfC57S43QEZvfffffffmvffffffffdGhFNRi1X5vFu1G3HffffffffffffffffffYfaBJXpHcBNrkyOA/vfffffffffffffffffWGWX0Mr6pLvqRzz/nvffffffffffffffffffffXjHfbbG+f3PffffffffffffffffffffffeuflcvavvvYOc+/ffffffffffffffffffffbXkTbXrfnjrvXbnvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffuvsvtvvffffffffffffffffffffffffffffXpfLnnvffffffffffZNfffffffffffa31jdil7CLQXwYtPfffffaLlfffffffffffepPIPKVkrKd5FHdvfffffZnhPfffffffffffvvvvvvvvvvvvvvvffffa56tPffffffffffbDTTTTTTTTTTTTXPfffebL7umvffffffffffeZfgHhlwK7FpffffffUhnU8pffffffffffffNstst8sMNs/wDX3332EE1vkoH33333333333w77+457/8Aeu+c9995B8sY8Em993Z9999999999999999999999iImBMjoAs59qZE49999999999999999999uZY1A6J41uqTT13p8999999999999999997LmTNZA8iwQu4RYXNz19999999999999999i3pbUgOZ/SLh/L1+fET9r6999999999999sy/wAl0caOxaR4F/lTcYu8/wBx3vLX33333331HK6BojgLze/gihE4wOjEBr9F2RL7P3LP32o3sdjS35E93qOLPg4lgxGirSdaNNNnFGoXMYk1layXVk3qePKWq59NOooD7AJ67g0xTcPmy/fVdnrCXGLLJbhzC/v47bSK0bUAY2vbPqq79ccjxqLvbhp/cAvOl/2ZaHakCr/vJq1illrAiV1x8hhfpGZKSmFKP/r5yRsZ4pMUJ8lhf2fhHSVivIrcXUMWXFbDNtqB8mbiflfJaL7ljOQORwqi5D+HztLTs76rnufxPqHq3H8Syctan1RScrcg/PD5QdgKHaUF5YXwGiFcTdzYbnN28w0xyQlSWayXAV8dWKyTMf2QoDzx8MekkgLaR+eDRNzla63jMFIStUIgUYea1td3/Ohq3p0gJIWklcIjYSsNJlI1DkdA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";var Co=class extends bi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new cn;t.deleteAttribute("uv");let e=new Oe({side:ze}),n=new Oe,s=new $s(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ie(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new In(t,n,6),o=new Ie;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ie(t,gs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ie(t,gs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ie(t,gs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ie(t,gs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ie(t,gs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ie(t,gs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function gs(i){return new Js({color:0,emissive:16777215,emissiveIntensity:i})}var mr=new I;function dn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;mr.copy(t),mr[n]=0,mr.normalize();let l=.5*a/(a+o),h=1-mr.angleTo(i)/c;return Math.sign(mr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Ro=class i extends cn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,x=d.length/6,M=new I,m=.5/a;for(let p=0,w=0;p<d.length;p+=3,w+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/x)){case 0:M.set(1,0,0),f[w+0]=dn(M,l,"z","y",r,n),f[w+1]=1-dn(M,l,"y","z",r,e);break;case 1:M.set(-1,0,0),f[w+0]=1-dn(M,l,"z","y",r,n),f[w+1]=1-dn(M,l,"y","z",r,e);break;case 2:M.set(0,1,0),f[w+0]=1-dn(M,l,"x","z",r,t),f[w+1]=dn(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),f[w+0]=1-dn(M,l,"x","z",r,t),f[w+1]=1-dn(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),f[w+0]=1-dn(M,l,"x","y",r,t),f[w+1]=1-dn(M,l,"y","x",r,e);break;case 5:M.set(0,0,-1),f[w+0]=dn(M,l,"x","y",r,t),f[w+1]=1-dn(M,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function hc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ce,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let x=0;x<f.count;++x)d.push(f.getX(x)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=nu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let M=0;M<a[h].length;++M)f.push(a[h][M][u]);let x=nu(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}}return c}function nu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new We(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let x=0;x<e;x++){let M=h.getComponent(u,x);o.setComponent(u+d,x,M)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var qe=Math.PI*2,Io=new I(0,1,0),di=.34,De=(i,t,e)=>i+(t-i)*e,qn=i=>i<0?0:i>1?1:i,fi=i=>i*i*(3-2*i),Gg=i=>i*i*i*(i*(i*6-15)+10),Tt=(i,t,e)=>new I(i,t,e),pi=(i,t=0)=>{let e=new Te().setFromUnitVectors(Io,i.clone().normalize());return t?e.multiply(new Te().setFromAxisAngle(Io,t)):e};function Po(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var gr=(i,t)=>Math.atan2(Math.sin(i-t),Math.cos(i-t)),xs=(i,t)=>Math.exp(-(i/t)*(i/t));function ys({segs:i,rings:t,husk:e=!1,thetaStart:n=0,thetaLen:s=qe,seed:r=1}){let a=e?.535:.5,o=e?.106:.091,c=r*1.7,l=i+1,h=new Float32Array((t+1)*l*3),d=new Float32Array((t+1)*l*2),u=new Float32Array((t+1)*l),f=0,x=0,M=0;for(let b=0;b<=t;b++){let A=Math.sin((b/t-.5)*Math.PI),C=Math.abs(A),S;e?S=o*Math.pow(Math.max(0,1-Math.pow(C,2.1)),.7):(S=A>0?o*Math.pow(Math.max(0,1-Math.pow(C,2.7)),.66):o*Math.pow(Math.max(0,1-Math.pow(C,3.1)),.56),S*=1+.03*Math.sin(A*2.4+c)+.012*Math.sin(A*7.3+c*2));for(let R=0;R<=i;R++){let y=n+s*R/i,T=e?y:y+.1*A,P=S;if(e)P*=.985+.05*Math.pow(Math.abs(Math.cos(T*2.5)),14),P*=1+.05*xs(gr(T,0),.22);else{let O=fi(qn((-.7-A)/.26));P*=1-.5*O*Math.pow(Math.max(0,Math.cos(T-.35)),1.3),P*=1-.12*xs(A+.86,.06)*xs(gr(T,.35),.35),P*=1-.06*xs(gr(T,Math.PI/2),.1)-.04*xs(gr(T,-Math.PI/2),.12);let Y=1-Math.pow(C,6);for(let Z of[.62,-.62,2.52,-2.52])P*=1-.04*Y*xs(gr(T,Z+.05*Math.sin(A*3+c)),.07);P*=1+.012*Math.sin(T*3+A*5+c)*Math.cos(A*1.3)}let L=.024*(1-A*A)+.006*Math.sin(A*3+c);h[f++]=P*Math.cos(T)+L,h[f++]=A*a,h[f++]=P*Math.sin(T)*(e?.84:.76),d[x++]=R/i,d[x++]=(A+1)/2,u[M++]=qn(P/o)}}let m=[];for(let b=0;b<t;b++)for(let A=0;A<i;A++){let C=b*l+A,S=C+l;m.push(C,S,C+1,S,S+1,C+1)}let p=new Ce;p.setIndex(m),p.setAttribute("position",new ce(h,3)),p.setAttribute("uv",new ce(d,2)),p.setAttribute("aThick",new ce(u,1)),p.computeVertexNormals();let w=p.attributes.normal.array;if(s>=qe-1e-6)for(let b=0;b<=t;b++){let A=b*l*3,C=(b*l+i)*3;for(let S=0;S<3;S++){let R=(w[A+S]+w[C+S])/2;w[A+S]=w[C+S]=R}}for(let b=0;b<=i;b++)w.set([0,-1,0],b*3),w.set([0,1,0],(t*l+b)*3);return p.attributes.normal.needsUpdate=!0,p}function iu(i,t,e){let n=new At(t),s=`vec3(${n.r.toFixed(3)}, ${n.g.toFixed(3)}, ${n.b.toFixed(3)})`;return i.customProgramCacheKey=()=>"sss-"+t+e,i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
      }`)},i}function uc(i,t,e=48){let n=[],s=[],r=[],a=new I,o=Tt(0,0,1);for(let l=0;l<=e;l++){let h=l/e,d=i.getPointAt(h),u=i.getTangentAt(h);a.crossVectors(u,o).normalize();let f=t*Math.pow(Math.sin(Math.PI*Math.min(1,h*1.15+.02)),.55)*(1-.55*h);if(n.push(d.x-a.x*f,d.y-a.y*f,d.z-a.z*f,d.x+a.x*f,d.y+a.y*f,d.z+a.z*f),r.push(0,h,1,h),l<e){let x=l*2;s.push(x,x+2,x+1,x+1,x+2,x+3)}}let c=new Ce;return c.setIndex(s),c.setAttribute("position",new ce(n,3)),c.setAttribute("uv",new ce(r,2)),c.computeVertexNormals(),c}function Hg(i,t,e){let n=new Xn([Tt(-.06,-8,0),Tt(0,-3.2,.05),Tt(.1,-.8,.1),Tt(.38,.85,.12),Tt(.92,1.72,.07),Tt(1.5,1.78,0),Tt(1.92,1.25,-.06),Tt(2.08,.55,-.1)],!1,"centripetal"),s=[],r=[];for(let c=0;c<t;c++){let l=c/(t-1),h=De(.47,.955,l),d=n.getPointAt(h),u=n.getTangentAt(h),f=Math.abs(u.y)>.9?Tt(1,0,0):Io,x=new I().crossVectors(u,f).normalize(),M=new I().crossVectors(u,x).normalize(),m=c*2.39996+i()*.5,p=x.clone().multiplyScalar(Math.cos(m)).addScaledVector(M,Math.sin(m)),w=De(1.2,.45,l)*(.85+i()*.3),b=u.clone().multiplyScalar(.6).addScaledVector(p,.8).normalize(),A=d.clone().addScaledVector(b,w);A.y-=.24*w;let C=d.clone().addScaledVector(b,w*.55);C.y-=.02;let S=new Ei(d,C,A);r.push(S);let R=Math.max(3,Math.round(e*(.55+w*.6)));for(let y=0;y<R;y++){let T=De(.3,1,R===1?1:y/(R-1)),P=S.getPointAt(T),L=S.getTangentAt(T),O=new I().crossVectors(L,p);O.lengthSq()<1e-4&&(O=x.clone()),O.normalize();let Y=L.clone().addScaledVector(O,(y%2?1:-1)*.45).addScaledVector(p,.2).normalize();s.push({p:P.clone().addScaledVector(Y,di*.48),q:pi(Y,i()*qe)})}}let a=n.getTangentAt(1),o={p:n.getPointAt(1).addScaledVector(a,di*.5),q:pi(a,.6)};return{rachis:n,curves:r,slots:s,tip:o}}function Ii(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new ns(s);return r.wrapS=r.wrapT=_i,n&&(r.colorSpace=He),r.anisotropy=4,r}function Wg(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=document.createElement("canvas");r.width=e,r.height=n;let a=r.getContext("2d"),o=a.createImageData(e,n),c=o.data,l=(d,u)=>s[((u+n)%n*e+(d+e)%e)*4]/255;for(let d=0;d<n;d++)for(let u=0;u<e;u++){let f=(l(u+1,d)-l(u-1,d))*t,x=(l(u,d+1)-l(u,d-1))*t,M=Math.hypot(f,x,1),m=(d*e+u)*4;c[m]=(-f/M*.5+.5)*255,c[m+1]=(x/M*.5+.5)*255,c[m+2]=(1/M*.5+.5)*255,c[m+3]=255}a.putImageData(o,0,0);let h=new ns(r);return h.wrapS=h.wrapT=_i,h.anisotropy=4,h}function Xg(){let i=Po(3),t=512,e=1024,n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");s.fillStyle="#808080",s.fillRect(0,0,t,e);for(let c=0;c<260;c++){let l=i()*t,h=.05+i()*.13,d=.8+i()*2.6,u=2+i()*5;s.strokeStyle=i()<.5?`rgba(255,255,255,${h})`:`rgba(0,0,0,${h})`,s.lineWidth=.6+i()*2.4,s.beginPath();for(let f=0;f<=e;f+=10){let x=l+Math.sin(f/e*u*qe+c)*d;f?s.lineTo(x,f):s.moveTo(x,f)}s.stroke()}for(let c of[.1,.4,.6,.9]){let l=s.createLinearGradient(c*t-10,0,c*t+10,0);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(.5,"rgba(0,0,0,.16)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.fillRect(c*t-10,e*.08,20,e*.84)}for(let c=0;c<22;c++){s.strokeStyle=`rgba(0,0,0,${.08+i()*.12})`,s.lineWidth=.8;let l=e*(.12+i()*.76),h=i()*t;s.beginPath(),s.moveTo(h,l),s.quadraticCurveTo(h+16,l+(i()-.5)*8,h+30+i()*60,l+(i()-.5)*6),s.stroke()}for(let c=0;c<2200;c++)s.fillStyle=`rgba(0,0,0,${.04+i()*.12})`,s.beginPath(),s.arc(i()*t,i()*e,.4+i()*1.1,0,qe),s.fill();let r=s.createRadialGradient(t*.42,e*.035,1,t*.42,e*.035,34);r.addColorStop(0,"rgba(0,0,0,.35)"),r.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=r,s.fillRect(0,0,t,90);let a=Wg(n,4.2),o=Ii(t,e,(c,l,h)=>{c.fillStyle="#ECE3CF",c.fillRect(0,0,l,h);let d=c.createRadialGradient(l*.5,h*.52,6,l*.5,h*.52,h*.3);d.addColorStop(0,"rgba(255,253,247,.62)"),d.addColorStop(1,"rgba(255,253,247,0)"),c.save(),c.scale(1,1.6),c.fillStyle=d,c.fillRect(0,0,l,h),c.restore();let u=c.createRadialGradient(l*.3,h*.44,4,l*.3,h*.44,l*.22);u.addColorStop(0,"rgba(255,255,252,.42)"),u.addColorStop(1,"rgba(255,255,252,0)"),c.fillStyle=u,c.fillRect(0,0,l,h);let f=c.createLinearGradient(0,0,0,h);f.addColorStop(0,"rgba(196,170,120,.72)"),f.addColorStop(.1,"rgba(214,194,150,.26)"),f.addColorStop(.24,"rgba(230,214,180,0)"),f.addColorStop(.8,"rgba(230,214,180,0)"),f.addColorStop(.93,"rgba(214,194,150,.3)"),f.addColorStop(1,"rgba(190,162,112,.75)"),c.fillStyle=f,c.fillRect(0,0,l,h);for(let M=0;M<160;M++)c.fillStyle=`rgba(176,150,104,${.04+i()*.08})`,c.fillRect(i()*l,i()*h*.3,.8+i()*1.8,h*(.3+i()*.6));for(let M=0;M<26;M++)c.fillStyle=`rgba(150,118,72,${.08+i()*.12})`,c.fillRect(i()*l,h*(.02+i()*.1),.8+i()*1.4,h*(.03+i()*.08));let x=c.createRadialGradient(l*.42,h*.035,2,l*.42,h*.035,30);x.addColorStop(0,"rgba(140,108,62,.75)"),x.addColorStop(1,"rgba(140,108,62,0)"),c.fillStyle=x,c.fillRect(0,0,l,80);for(let M=0;M<50;M++)c.fillStyle=`rgba(120,96,60,${.06+i()*.12})`,c.beginPath(),c.arc(i()*l,i()*h,.6+i()*1.1,0,qe),c.fill()},!0);return{normal:a,map:o}}function Yg(){let i=Po(11),t=Ii(128,256,(n,s,r)=>{n.fillStyle="#7a7a7a",n.fillRect(0,0,s,r);for(let a=0;a<r;a+=5)for(let o=0;o<s;o+=4)n.fillStyle=`rgba(255,255,255,${.18+i()*.2})`,n.beginPath(),n.arc(o+a/5%2*2,a+2,1.3,0,qe),n.fill();for(let a=0;a<5;a++)n.fillStyle="rgba(255,255,255,.55)",n.fillRect(a/5*s,0,3,r)}),e=Ii(128,256,(n,s,r)=>{n.fillStyle="#f2f2f2",n.fillRect(0,0,s,r);for(let o=0;o<5;o++)n.fillStyle="rgba(120,90,50,.28)",n.fillRect(o/5*s+1,0,2,r);for(let o=0;o<260;o++)n.fillStyle=`rgba(${i()<.5?"90,70,40":"255,255,255"},${.05+i()*.08})`,n.fillRect(i()*s,i()*r,1+i()*2,2+i()*8);let a=n.createLinearGradient(0,0,0,r);a.addColorStop(0,"rgba(110,80,45,.22)"),a.addColorStop(.12,"rgba(110,80,45,0)"),a.addColorStop(.9,"rgba(110,80,45,0)"),a.addColorStop(1,"rgba(110,80,45,.25)"),n.fillStyle=a,n.fillRect(0,0,s,r)},!0);return{bump:t,map:e}}function fc(){return Ii(64,64,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)})}function qg(){return new Promise(i=>{let t=new Image;t.onload=()=>i(Ii(t.naturalWidth,t.naturalHeight,(e,n,s)=>e.drawImage(t,0,0,n,s),!0)),t.onerror=()=>i(Ii(4,4,(e,n,s)=>{e.fillStyle="#F9F6EE",e.fillRect(0,0,n,s)},!0)),t.src=eu})}var Zg=()=>new Xe({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uOpacity:{value:0},uDeep:{value:new At("#7E8F6B")},uShallow:{value:new At("#C9CFB4")},uSky:{value:new At("#FFF6E2")}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`}),Jg=i=>new Xe({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uSize:{value:26},uOpacity:{value:.5},uColor:{value:new At("#FFF4DC")},uMap:{value:i},uBox:{value:new I(9,7,6)}},vertexShader:`
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
    }`}),jt={x:6.2,y:-3.2,z:.2,rim:2.3,fill:2.16,depth:1.25},Lo=i=>jt.y+1.25+.5*(1-(i/jt.fill)**2),ru="#F9F6EE",su="#EEEBDF",Kg="#0F3D2E",vs="#E9E3D4";function jg(i){let t=i.tip,e=(c,l,h=0)=>({p:c,q:pi(l,h)}),n=(c,l,h,d)=>{let u=Tt(Math.cos(l),0,-Math.sin(l));return e(c,Io.clone().multiplyScalar(Math.cos(h)).addScaledVector(u,Math.sin(h)),d)},s=Tt(jt.x-.15,Lo(.2)+.03,jt.z+.35),r={tip:t,studio:n(t.p.clone(),.35,-.42,1.25),fall:{p:t.p.clone().add(Tt(-.35,-1.95,.45)),q:t.q.clone().multiply(new Te().setFromAxisAngle(Tt(1,0,0),1.25))},heap:e(Tt(.98,-2.16,.22),Tt(1,.12,.35),.4),mill:e(Tt(.95,-1.9,.95),Tt(1,.32,.12),1.1),pack:e(Tt(.95,-.42,-.12),Tt(.2,1,.08),.3),kitchen:e(s,Tt(1,.07,.62),2.2)},a={target:t.p,yaw:0,pitch:.1,frame:[3,3],hero:"tip",husk:0,huskVis:1,ripe:.5,milled:0,layout:"panicle",stem:1,leaves:1,bgP:1,water:0,pack:0,packAt:0,floor:0,bowl:0,motes:.45,gold:0,spin:0,opacity:1,key:2.6,keyColor:"#FFF1DA",rim:1.2,rimColor:"#FFE2B0",hemi:.55,env:.75,exposure:1,fog:ru},o=c=>Object.assign({},a,c);return{poses:r,hero:o({hero:"studio",target:t.p,yaw:.35,pitch:.06,frame:[.4,.4],husk:1,huskVis:0,ripe:.45,milled:1,layout:"seed",stem:0,leaves:0,bgP:0,motes:.55,spin:1,key:4.2,keyColor:"#FFF3E0",rim:3.4,rimColor:"#FFC98A",hemi:.14,env:.32,exposure:1.02}),farmers:o({target:Tt(1,.85,0),yaw:.18,pitch:.05,frame:[3,3.1],ripe:.32}),practicesA:o({target:Tt(.75,-.05,.1),yaw:-.3,pitch:.22,frame:[3.7,4.3],ripe:.38,water:1,fog:su,motes:.35}),practicesB:o({target:Tt(.85,.1,.1),yaw:.4,pitch:.17,frame:[3.5,4.1],ripe:.92,water:1,fog:su,motes:.4}),why:o({target:Tt(1.05,.9,0),yaw:-.55,pitch:.03,frame:[2.8,3.1],ripe:1,fog:Kg,motes:.9,gold:1,key:1.1,keyColor:"#FFD8A8",rim:3.4,rimColor:"#FFC27A",hemi:.22,env:.35,exposure:.95}),journey0:o({target:Tt(1.05,.8,0),yaw:.12,pitch:.08,frame:[3,3.3],ripe:1,fog:vs}),journey1:o({target:Tt(1.1,-.75,.15),yaw:.22,pitch:.1,frame:[3.3,4.4],ripe:1,hero:"fall",layout:"fall",stem:.3,leaves:.15,bgP:0,fog:vs,floor:.3}),journey2:o({target:Tt(.95,-2.35,.1),yaw:.3,pitch:.42,frame:[2.9,2.1],ripe:1,hero:"heap",layout:"heap",stem:0,leaves:0,bgP:0,fog:vs,floor:1,motes:.25}),journey3:o({target:Tt(.95,-2.35,.2),yaw:-.12,pitch:.36,frame:[2.5,2],ripe:1,hero:"mill",husk:1,huskVis:.6,milled:1,layout:"graded",stem:0,leaves:0,bgP:0,fog:vs,floor:1,motes:.25}),journey4:o({target:Tt(.95,-1.5,0),yaw:.28,pitch:.12,frame:[2.6,3.4],ripe:1,hero:"pack",husk:1,huskVis:0,milled:1,layout:"packed",stem:0,leaves:0,bgP:0,pack:1,fog:vs,floor:1,motes:.25}),journey5:o({target:Tt(jt.x-1.25,jt.y+1.9,jt.z-.5),yaw:-.18,pitch:.3,frame:[7.6,5.4],ripe:1,hero:"kitchen",husk:1,huskVis:0,milled:1,layout:"bowl",stem:0,leaves:0,bgP:0,pack:1,packAt:1,bowl:1,fog:vs,motes:.3,key:3,rim:2.2}),closing:o({target:Tt(jt.x-1,jt.y+2.4,jt.z-.4),yaw:.28,pitch:.18,frame:[7.8,6.3],ripe:1,hero:"kitchen",husk:1,huskVis:0,milled:1,layout:"bowl",stem:0,leaves:0,bgP:0,pack:1,packAt:1,bowl:1,motes:.35,key:3.2,keyColor:"#FFF3E0",rim:2.6,rimColor:"#FFC98A",hemi:.4,env:.6}),end:o({target:Tt(jt.x-1,jt.y+2.4,jt.z-.4),yaw:.4,pitch:.18,frame:[8.6,6.9],ripe:1,hero:"kitchen",husk:1,huskVis:0,milled:1,layout:"bowl",stem:0,leaves:0,bgP:0,pack:1,packAt:1,bowl:1,motes:.3,opacity:0,key:3.2,keyColor:"#FFF3E0",rim:2.6,rimColor:"#FFC98A",hemi:.4,env:.6})}}function Qg(i,t,e){let n={},s=()=>({p:new Float32Array(t*3),q:new Float32Array(t*4),s:new Float32Array(t)}),r=(l,h,d,u,f)=>{d.toArray(l.p,h*3),u.toArray(l.q,h*4),l.s[h]=f},a=()=>new Te().setFromAxisAngle(Tt(e()-.5,e()-.5,e()-.5).normalize(),e()*qe);n.panicle=s(),n.seed=s(),n.fall=s(),n.heap=s(),n.graded=s(),n.packed=s(),n.bowl=s();let o=7,c=Tt(.95,-.82,-.22);for(let l=0;l<t;l++){let h=i.slots[l];r(n.panicle,l,h.p,h.q,.97),r(n.seed,l,h.p,h.q,0),r(n.fall,l,h.p.clone().add(Tt((e()-.5)*1.3,-1.4-e()*2.4,(e()-.5)*1.3)),a(),.97);let d=.72*Math.pow(e(),.6),u=e()*qe,f=.46*Math.pow(1-d/.72,1.3)+e()*.05;r(n.heap,l,Tt(.95+Math.cos(u)*d,-2.6+f,.05+Math.sin(u)*d*.85),pi(Tt(Math.cos(u+1.3),(e()-.5)*.5,Math.sin(u+1.3)),e()*qe),.95);let x=l%o,M=Math.floor(l/o);r(n.graded,l,Tt(.95+(x-(o-1)/2)*.17,-2.6,1.3-M*.39-x%2*.19),pi(Tt((e()-.5)*.03,0,-1),Math.PI/2+(e()-.5)*.2),.95),r(n.packed,l,c,pi(Tt(.1,1,0)),0);let m=jt.fill*.85*Math.sqrt(e()),p=e()*qe;r(n.bowl,l,Tt(jt.x+Math.cos(p)*m,Lo(m)+.035+e()*.02,jt.z+Math.sin(p)*m),pi(Tt(Math.cos(p*3+l),(e()-.5)*.25,Math.sin(p*3+l)),e()*qe),.95)}return n.packed.arc=1,n}function Mv({canvas:i,story:t,onReady:e,onFail:n}){let s;try{s=new Eo({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(U){n&&n(U.message);return}let r=t.content,a=matchMedia("(pointer: coarse)").matches,c=Math.min(innerWidth,innerHeight)<700||(navigator.hardwareConcurrency||8)<=4,h=Math.min(devicePixelRatio||1,c?1.5:2);s.setPixelRatio(h),s.setClearColor(0,0),s.outputColorSpace=He,s.toneMapping=er;let d=!0,u=new bi,f=new Be(30,1,.05,80),x=new ps(s),M=x.fromScene(new Co,.04);u.environment=M.texture,x.dispose(),u.fog=new Vs(new At(ru),10,30);let m=new js(16775142,7241557,.55),p=new ls(16773594,2.6);p.position.set(-3.5,5,6);let w=new ls(16769712,1.2);w.position.set(5,2.5,-4),u.add(m,p,w,p.target,w.target);let b=Po(2024),A=Hg(b,c?10:13,c?5:6),C=A.slots.length,S=Qg(A,C,b),R=jg(A),y=Float32Array.from({length:C},()=>b()),T=Yg(),P=Xg(),L=iu(new wi({color:16777215,map:P.map,normalMap:P.normal,normalScale:new St(1.15,1.15),roughness:.34,specularIntensity:.7,clearcoat:.3,clearcoatRoughness:.16,sheen:.18,sheenColor:new At(16774110),sheenRoughness:.5}),"#FFDDB0",.6),O=iu(new Oe({color:16777215,map:P.map,normalMap:P.normal,normalScale:new St(.45,.45),roughness:.42}),"#FFDDB0",.45),Y=new At,Z=new wi({color:13211727,roughness:.62,map:T.map,bumpMap:T.bump,bumpScale:1.4,sheen:.6,sheenColor:new At(16770744),sheenRoughness:.6,side:Je,transparent:!0}),z=new Oe({color:13211727,roughness:.6,map:T.map,bumpMap:T.bump,bumpScale:1}),q=new Oe({color:8032072,roughness:.7,transparent:!0}),H=new Oe({color:7309893,roughness:.55,side:Je,transparent:!0}),Q=new Oe({color:11903066,roughness:.7,transparent:!0,map:T.map}),tt=new Oe({color:9345621,roughness:.7,transparent:!0}),pt=c?{segs:64,rings:80}:{segs:128,rings:160},ft=new Qe,Mt=new ie(ys(pt),L);ft.add(Mt);let Jt=[0,1].map(U=>{let it=new Qe;it.position.y=-.535;let st=new ie(ys({...pt,husk:!0,thetaStart:U?Math.PI:0,thetaLen:Math.PI}),Z);return st.position.y=.535,it.add(st),ft.add(it),it});ft.scale.setScalar(di),u.add(ft);let de=hc([new rs(A.rachis,160,.024,7,!1),...A.curves.map(U=>new rs(U,20,.009,5,!1))]),te=new ie(de,q),j=hc([uc(new Xn([Tt(0,-2.7,.05),Tt(-.45,-1.4,.3),Tt(-.95,0,.42),Tt(-1.2,.9,.3),Tt(-1.05,1.45,.2)]),.13),uc(new Xn([Tt(.02,-3.7,0),Tt(.6,-2.6,.4),Tt(1.3,-1.75,.62),Tt(1.9,-1.45,.55),Tt(2.3,-1.6,.45)]),.12),uc(new Xn([Tt(-.03,-4.6,0),Tt(-.7,-3.4,-.4),Tt(-1.5,-2.6,-.5),Tt(-2.1,-2.5,-.3)]),.12)]),ot=new ie(j,H),nt=ys({segs:c?12:16,rings:c?14:20,husk:!0}),Pt=new In(nt,z,C),Bt=new In(ys({segs:c?12:16,rings:c?18:26,seed:3}),O,C),Lt=new At;for(let U=0;U<C;U++){let it=.9+b()*.18;Pt.setColorAt(U,Lt.setRGB(it,it*(.96+b()*.06),it*(.9+b()*.12)));let st=.95+b()*.07;Bt.setColorAt(U,Lt.setRGB(st,st,st*(.97+b()*.04)))}for(let U of[Pt,Bt])U.instanceMatrix.setUsage(Fl),U.frustumCulled=!1;u.add(te,ot,Pt,Bt);let pe=new Qe,Kt=ys({segs:8,rings:10,husk:!0});[[-2.4,-.5,-3.4,.9,1],[4.1,-.9,-4.6,-.6,1.05],[-.6,-.3,-7.2,2.2,1.1]].forEach(([U,it,st,Vt,Rt])=>{let qt=new Qe;qt.add(new ie(de,tt));let Ut=new In(Kt,Q,C),zt=new re,Gt=Tt(di,di,di);A.slots.forEach((ye,ne)=>Ut.setMatrixAt(ne,zt.compose(ye.p,ye.q,Gt))),qt.add(Ut),qt.position.set(U,it,st),qt.rotation.y=Vt,qt.scale.setScalar(Rt),pe.add(qt)}),u.add(pe);let se=new ie(new qs(2.6,72),Zg());se.rotation.x=-Math.PI/2,se.position.set(.45,-1.7,.2),u.add(se);let Qt=new ie(new ii(4.2,3.2),new ni({map:fc(),color:7033908,transparent:!0,depthWrite:!1,opacity:0}));Qt.rotation.x=-Math.PI/2,Qt.position.set(.95,-2.66,.05),u.add(Qt);let Xt=new Qe,Me=new is([[0,.07],[.9,.1],[1.6,.32],[2.08,.75],[2.27,1.2],[2.31,1.27],[2.38,1.22],[2.25,.8],[1.85,.32],[1.2,.06],[1.08,0],[.95,-.02],[0,-.02]].map(([U,it])=>new St(U,it))).getPoints(90),Ae=new wi({color:998702,roughness:.32,clearcoat:.8,clearcoatRoughness:.12,side:Je,transparent:!0}),_e=new ss(Me,c?64:110);_e.scale(1,jt.depth,1),Xt.add(new ie(_e,Ae));let be=[];for(let U=0;U<=24;U++){let it=U/24*(jt.fill+.06);be.push(new St(it,Lo(Math.min(it,jt.fill))-jt.y-.07-(it>jt.fill?.12:0)))}let fe=new ss(be,c?48:80);{let U=fe.attributes.position,it=fe.attributes.uv;for(let st=0;st<U.count;st++)it.setXY(st,U.getX(st)/jt.fill*1.6,U.getZ(st)/jt.fill*1.6)}let Se=Ii(512,512,(U,it,st)=>{let Vt=Po(21);U.fillStyle="#B9AD93",U.fillRect(0,0,it,st);for(let Rt=0;Rt<2600;Rt++){let qt=Vt()*it,Ut=Vt()*st,zt=Vt()*Math.PI,Gt=9+Vt()*4;U.save(),U.translate(qt,Ut),U.rotate(zt),U.fillStyle="rgba(90,78,58,.35)",U.beginPath(),U.ellipse(1,1.2,Gt,1.9,0,0,qe),U.fill();let ye=205+Vt()*45;U.fillStyle=`rgb(${ye},${ye-6},${ye-22})`,U.beginPath(),U.ellipse(0,0,Gt,1.8,0,0,qe),U.fill(),U.restore()}},!0),D=new ie(fe,new Oe({map:Se,roughness:.7,transparent:!0,side:Je}));D.position.set(jt.x,jt.y,jt.z),Xt.add(D);let Ee=c?420:800,ee=new In(ys({segs:8,rings:12,seed:5}),O,Ee),E=new Float32Array(Ee),g=new Float32Array(Ee),F=[],k=[];for(let U=0;U<Ee;U++){let it=jt.fill*Math.sqrt(b()),st=b()*qe,Vt=b()*.02;F.push(Tt(jt.x+Math.cos(st)*it,Lo(it)-Vt,jt.z+Math.sin(st)*it)),k.push(pi(Tt(Math.cos(st*5+U),(b()-.5)*.35,Math.sin(st*5+U)),b()*qe)),g[U]=di*(.9+b()*.12),E[U]=b();let Rt=.93+b()*.09;ee.setColorAt(U,Lt.setRGB(Rt,Rt*.995,Rt*(.96+b()*.05)))}ee.frustumCulled=!1,Xt.add(ee);let W=new ie(new ii(7,7),new ni({map:fc(),color:7033908,transparent:!0,depthWrite:!1,opacity:0}));W.rotation.x=-Math.PI/2,W.position.set(jt.x,jt.y-.03,jt.z),u.add(W),Xt.children[0].position.set(jt.x,jt.y,jt.z),u.add(Xt);let et=new Qe,rt=new Oe({color:15722971,roughness:.5,metalness:.05,transparent:!0}),X=new Oe({color:16777215,roughness:.45,transparent:!0}),K=new ie(new Ro(1.32,2.05,.5,4,.09),[rt,rt,rt,rt,X,rt]),ct=new ie(new cn(1.34,.09,.2),new Oe({color:998702,roughness:.5,metalness:.05,transparent:!0}));ct.position.y=1,et.add(K,ct),et.position.set(.95,-1.85,-.25),u.add(et);let Ct=[rt,X,ct.material];qg().then(U=>{X.map=U,X.needsUpdate=!0,d=!0});let dt=c?110:240,lt=new Float32Array(dt*3),It=new Float32Array(dt);for(let U=0;U<dt;U++)lt[U*3]=(b()-.5)*9,lt[U*3+1]=(b()-.5)*7,lt[U*3+2]=(b()-.5)*6,It[U]=b();let Dt=new Ce;Dt.setAttribute("position",new ce(lt,3)),Dt.setAttribute("aSeed",new ce(It,1));let Ft=new Ws(Dt,Jg(fc()));Ft.frustumCulled=!1,u.add(Ft);let _={target:new I,heroP:new I,heroQ:new Te,fog:new At,keyColor:new At,rimColor:new At,frame:[1,1],fx:.5,fy:.5,fw:1,fh:1},ht=["yaw","pitch","husk","huskVis","ripe","milled","stem","leaves","bgP","water","pack","packAt","floor","bowl","motes","gold","spin","opacity","key","rim","hemi","env","exposure"],J=new At,ut=new At;function xt(U,it){let st=it.length,Vt=Math.min(st-2,Math.max(0,Math.floor(U))),Rt=st<2?0:qn(U-Vt),qt=it[Vt],Ut=it[Math.min(st-1,Vt+1)],zt=R[qt.key]||R.hero,Gt=R[Ut.key]||R.hero;for(let Ke of ht)_[Ke]=De(zt[Ke],Gt[Ke],Rt);_.target.lerpVectors(zt.target,Gt.target,Rt),_.frame[0]=De(zt.frame[0],Gt.frame[0],Rt),_.frame[1]=De(zt.frame[1],Gt.frame[1],Rt);let ye=R.poses[zt.hero],ne=R.poses[Gt.hero];_.heroP.lerpVectors(ye.p,ne.p,Rt),_.heroQ.slerpQuaternions(ye.q,ne.q,Rt),_.fog.copy(J.set(zt.fog)).lerp(ut.set(Gt.fog),Rt),_.keyColor.copy(J.set(zt.keyColor)).lerp(ut.set(Gt.keyColor),Rt),_.rimColor.copy(J.set(zt.rimColor)).lerp(ut.set(Gt.rimColor),Rt),_.fx=De(qt.fx,Ut.fx,Rt),_.fy=De(qt.fy,Ut.fy,Rt),_.fw=De(qt.fw,Ut.fw,Rt),_.fh=De(qt.fh,Ut.fh,Rt),_.layoutA=zt.layout,_.layoutB=Gt.layout,_.f=Rt}let $=new At("#8AA552"),wt=new At("#BDB15E"),_t=new At("#CB9A52"),me=new At("#6E8C43"),he=new At("#B8925A"),rn=new At("#FFF6E3"),an=new At("#FFC978"),Do=new re,As=new I,Ms=new Te,Pi=new Te,xr=new Te,yr=new I,Ss=new Te,Nn=Tt(.3,1,.2).normalize(),Li="";function vr(){let U=S[_.layoutA],it=S[_.layoutB],st=_.f,Vt=_.layoutA+_.layoutB+st.toFixed(4)+(_.milled<.5?"h":"m");if(Vt===Li)return;Li=Vt;let Rt=U.arc||it.arc?1:0;Pt.visible=_.milled<.5,Bt.visible=!Pt.visible;let qt=Pt.visible?Pt:Bt;for(let Ut=0;Ut<C;Ut++){let zt=y[Ut]*.42,Gt=U===it?1:fi(qn((st-zt)/.58));if(As.set(De(U.p[Ut*3],it.p[Ut*3],Gt),De(U.p[Ut*3+1],it.p[Ut*3+1],Gt),De(U.p[Ut*3+2],it.p[Ut*3+2],Gt)),Rt){let ne=it.p[Ut*3]-U.p[Ut*3],Ke=it.p[Ut*3+2]-U.p[Ut*3+2];As.y+=Math.sin(Math.PI*Gt)*(.8+.25*Math.hypot(ne,Ke))}Pi.fromArray(U.q,Ut*4),xr.fromArray(it.q,Ut*4),Ms.slerpQuaternions(Pi,xr,Gt);let ye=De(U.s[Ut],it.s[Ut],Rt&&it.arc?fi(qn((Gt-.55)/.45)):Gt)*di;qt.setMatrixAt(Ut,Do.compose(As,Ms,yr.set(ye,ye,ye)))}qt.instanceMatrix.needsUpdate=!0}let _s=-1,Di=new re,Ar=new I;function Ui(){let U=_.bowl;if(pn(Xt,U),pn(W,U),Ae.opacity=fi(qn(U*2)),Ae.depthWrite=U>.6,D.material.opacity=fi(qn((U-.35)*2.5)),W.material.opacity=U*.4,!(Math.abs(U-_s)<1e-4)){_s=U;for(let it=0;it<Ee;it++){let st=fi(qn((U-.3-E[it]*.5)/.2));ee.setMatrixAt(it,Di.compose(F[it],k[it],Ar.setScalar(g[it]*st)))}ee.instanceMatrix.needsUpdate=!0}}function Mr(U,it){return U<.5?it.copy($).lerp(wt,U/.5):it.copy(wt).lerp(_t,(U-.5)/.5)}let pn=(U,it)=>{U.visible=it>.01};function Uo(U){Mr(_.ripe,Y),Z.color.copy(Y),Z.opacity=_.huskVis,z.color.copy(Y),q.color.copy(me).lerp(he,_.ripe),q.opacity=_.stem*_.stem,pn(te,_.stem),H.color.copy(me).lerp(he,_.ripe*.85),H.opacity=_.leaves*_.leaves,pn(ot,_.leaves),Q.color.copy(Y),Q.opacity=_.bgP*_.bgP,tt.color.copy(q.color),tt.opacity=_.bgP*_.bgP,pn(pe,_.bgP),se.material.uniforms.uOpacity.value=_.water,se.material.uniforms.uTime.value=U,pn(se,_.water),Qt.material.opacity=_.floor*.32,pn(Qt,_.floor),Ui();let it=_.pack*_.pack;Ct.forEach(qt=>{qt.opacity=it,qt.depthWrite=it>.95}),pn(et,_.pack);let st=fi(_.packAt),Vt=De(1,2.35,st);et.scale.setScalar(Vt),et.position.set(De(.95,jt.x-2.75,st),De(-1.85-(1-_.pack)*.5,jt.y+1.025*Vt,st),De(-.25,jt.z-2.1,st)),et.rotation.y=De(-.35,0,_.pack)+st*.32,Ft.material.uniforms.uTime.value=U,Ft.material.uniforms.uOpacity.value=_.motes*.55,Ft.material.uniforms.uColor.value.copy(rn).lerp(an,_.gold),Ft.material.uniforms.uSize.value=(26+30*_.gold)*h,Ft.position.copy(_.target),p.color.copy(_.keyColor),p.intensity=_.key,w.color.copy(_.rimColor),w.intensity=_.rim,m.intensity=_.hemi,u.environmentIntensity=_.env,s.toneMappingExposure=_.exposure,u.fog.color.copy(_.fog),i.style.opacity=_.opacity.toFixed(3),ft.position.copy(_.heroP),Ss.setFromAxisAngle(Nn,Math.sin(U*.32)*.55*_.spin),ft.quaternion.copy(_.heroQ).multiply(Ss);let Rt=fi(_.husk);Jt[0].rotation.x=Rt*1.25,Jt[1].rotation.x=-Rt*1.25,Jt[0].position.z=Rt*.35,Jt[1].position.z=-Rt*.35,Jt[0].visible=Jt[1].visible=_.huskVis>.01,vr()}let Ue={x:0,y:0,tx:0,ty:0},on=1,mn=1;function v(U,it){let st=Math.tan(f.fov*Math.PI/360),Vt=on/mn,Rt=Math.max(_.frame[1]/(2*st*_.fh),_.frame[0]/(2*st*Vt*_.fw)),qt=_.yaw+Ue.x*.08+(it?Math.sin(U*.13)*.03:0),Ut=_.pitch+Ue.y*.05;f.position.set(_.target.x+Rt*Math.cos(Ut)*Math.sin(qt),_.target.y+Rt*Math.sin(Ut),_.target.z+Rt*Math.cos(Ut)*Math.cos(qt)),f.lookAt(_.target),f.near=Math.max(.02,Rt*.05),f.far=Rt+40,f.setViewOffset(on,mn,(.5-_.fx)*on,(.5-_.fy)*mn,on,mn),f.updateProjectionMatrix();let zt=Math.max(_.frame[0],_.frame[1]);u.fog.near=Rt+zt*.6,u.fog.far=Rt+zt*.6+Math.max(6,Rt*2.4),G()}let N="";function G(){let U="none";if(_.fw<.7){let it=_.fx-_.fw/2-.03-Math.max(0,.5-_.fx)*2,st=_.fx+_.fw/2+.03+Math.max(0,_.fx-.5)*2,Vt=Rt=>(Rt*100).toFixed(1)+"%";U=`linear-gradient(90deg, transparent ${Vt(it)}, #000 ${Vt(it+.1)}, #000 ${Vt(st-.1)}, transparent ${Vt(st)})`}U!==N&&(N=U,i.style.webkitMaskImage=U,i.style.maskImage=U)}function B(){let U=t.keyframes,it=U.length,st=scrollY;if(it<2||st<=U[0].y)return 0;for(let Vt=0;Vt<it-1;Vt++){let Rt=U[Vt],qt=U[Vt+1];if(st<qt.y){let Ut=(st-Rt.y)/(qt.y-Rt.y);return Vt+(qt.ease==="linear"?Ut:Gg(qn((Ut-.16)/.68)))}}return it-1}function V(){let U=i.clientWidth||innerWidth,it=i.clientHeight||innerHeight;a&&Math.abs(U-on)<1&&Math.abs(it-mn)<140&&on>1||(on=U,mn=it,s.setSize(on,mn,!1),f.aspect=on/mn,d=!0)}addEventListener("resize",V),V(),a||addEventListener("pointermove",U=>{Ue.tx=U.clientX/innerWidth*2-1,Ue.ty=U.clientY/innerHeight*2-1},{passive:!0});let mt=5e3,yt=performance.now()+mt,at=1,bt=()=>{yt=performance.now()+mt};["scroll","pointermove","pointerdown","touchstart","keydown","wheel"].forEach(U=>addEventListener(U,bt,{passive:!0})),i.addEventListener("webglcontextlost",U=>{U.preventDefault(),cancelAnimationFrame(Et),n&&n("WebGL context lost")});let Et=0,kt=performance.now(),Wt=0,vt=B(),ae=!1,xe=-1,ue=0,oe=0;function Re(U){if(Et=requestAnimationFrame(Re),document.hidden){kt=U;return}let it=Math.min(.1,(U-kt)/1e3);kt=U;let st=t.reduced(),Vt=!st&&U<yt;at+=((Vt?1:0)-at)*(1-Math.exp(-it*2.5)),at<.002&&(at=0);let Rt=!st&&at>0,qt=t.keyframes;if(qt.length<2)return;t.version!==xe&&(xe=t.version,d=!0);let Ut=B(),zt=vt;st?vt=Math.round(Ut):(Math.abs(Ut-vt)>2.5&&(vt=Ut-Math.sign(Ut-vt)*2.5),vt+=(Ut-vt)*(1-Math.exp(-it*5)),Math.abs(Ut-vt)<1e-4&&(vt=Ut));let Gt=Ue.x,ye=Ue.y;st?Ue.x=Ue.y=0:Rt&&(Ue.x+=(Ue.tx-Ue.x)*(1-Math.exp(-it*3))*at,Ue.y+=(Ue.ty-Ue.y)*(1-Math.exp(-it*3))*at,Wt+=it*at);let ne=vt!==zt||Ue.x!==Gt||Ue.y!==ye;!Rt&&!ne&&!d||(d=!1,xt(vt,qt),Uo(Wt),v(Wt,!st),_.opacity>.001&&s.render(u,f),ae||(ae=!0,e&&e()),Vt&&at>.99&&oe<600&&(oe++,ue=it>.026?ue+1:Math.max(0,ue-1),ue>45&&h>1&&(h=Math.max(1,h-.25),s.setPixelRatio(h),s.setSize(on,mn,!1),ue=0)))}return/[?&]debug\b/.test(location.search)&&(window.__mvs={scene:u,hero:ft,grains:Pt,stem:te,leaves:ot,packGroup:et,S:_,LAY:S}),Et=requestAnimationFrame(Re),{stop:()=>cancelAnimationFrame(Et)}}export{Mv as start};
/*! For license information please see grain-scene.js.LEGAL.txt */
