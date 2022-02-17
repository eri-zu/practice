'use strict';
const RADIAN = Math.PI / 180;
const TrTween=jp.contents.TrTween.TrTween,
	Render=jp.contents.TrTween.Render,
	Quart=jp.contents.easing.Quart,
	Cubic=jp.contents.easing.Cubic,
	Back=jp.contents.easing.Back,
	Sine=jp.contents.easing.Sine,
	Quad=jp.contents.easing.Quad,
	Expo=jp.contents.easing.Expo,
	Quint=jp.contents.easing.Quint,
	Elastic=jp.contents.easing.Elastic,
	Bounce=jp.contents.easing.Bounce,
	TrEvent = jp.contents.events.Event,
	TrEventDispatcher = jp.contents.events.EventDispatcher;
class TopClass {
	constructor(){
	}
	init(){
		this._addEvent();
	}
	start(){
	}
	_addEvent(){
		this._glinksClick();
	}
	scroll(){
	}
	resize(){
	}

	_glinksClick(){
		const header = document.getElementsByClassName('header')[0];
		const glinks = document.querySelectorAll('.gnav a');
		for(let i = 0; i < glinks.length; i++){
			glinks[i].addEventListener('click', function(e){
				let link = e.currentTarget;
				let url = link.getAttribute('href');
				if(0 > url.indexOf('3up')) return;
				e.preventDefault();
				header.classList.remove('active');
				let linkId = url.split('#')[1];
				if(linkId){
					let pos = document.getElementById(linkId).getBoundingClientRect().top;
					__Base._smoothScroll(pos);
				}
			}, false);
		}
	}
}
window.Top = TopClass;

const _CENTER = {
	x:0,y:0
}
const RAD_STEP = 4;
const NUM_PARTICLES = 30;
const FL = 2000;
var RADIUS = 500;
class Pixel3D{
	constructor(x,y,z)
	{
		this._x = x;
		this._y = y;
		this._z = z;
		this._size = 0;
		this._rotY = 0;
	}
	fix(x,y,rotY,rotX,size)
	{
		this._x = x;
		this._y = y;
		this._z = 0;
		this._size = size;
		this._yaw(rotY);
		this._pitch(rotX);
	}
	get x(){
		return (this._x * FL / (this._z + FL));
	}
	get y(){
		return -(this._y * FL / (this._z + FL));
	}
	get size()
	{
		return Math.min(Math.max(this._size * FL / (this._z * 2 + FL ),.1),3);
	}
	_pitch(degree)
	{
		var rad = RADIAN * degree,
			sin = Math.sin(rad),
			cos = Math.cos(rad),
			dy = this._y,
			dz = this._z;

		this._y = dy * cos - dz * sin;
		this._z = dy * sin + dz * cos;
	}
	_yaw(degree)
	{
		var rad = RADIAN * degree,
			sin = Math.sin(rad),
			cos = Math.cos(rad),
			dx = this._x,
			dz = this._z;

		this._x = dx * cos - dz * sin;
		this._z = dx * sin + dz * cos;
		// console.log(dx,dz,sin,cos,rad);
		// console.log(this._x,this._y,this._z)
	}
}
class EllipseLine
{
	constructor(id)
	{
		this._id = id;
		this._startRad = 90 + Math.random() * 90;
		this._length = 100 * Math.random() + 50;
		this._progress = 0;
		this._speed = Math.random() * .006 + .003;
		// this._rotY = Math.random() * 0;
		// this._rotY = 90 * Math.random() + (Math.floor(Math.random() * 10) % 2 == 0 ? 0 : 180);
		this._rotY = -90 + (Math.random() - .5) * 90;
		this._rotX = 4;
		this._pixel = new Pixel3D(0,0,0);
		// this._tr = 
		this._addRad = 0;
		this._alpha = 0;
		this._offsetX = (Math.random() - .5) * 40;
		var l = this._length;
		this._tr = TrTween.delay(
			TrTween.parallel(
				TrTween.tween(this,{_addRad:360 + this._startRad},{_addRad:this._startRad},20),
				TrTween.bezier(this,{_alpha:0,_length:l},{_alpha:0,_length:l * .5},{_alpha:2,_length:l * .1},20,Sine.easeInOut),
			)
		,id * .1)
			
	}
	update()
	{
		// this._startRad += this._speed;
		// this._rotY += 1;
		this._progress += this._speed;
		if(this._progress > 1){
			this._progress = 0;
			// this._rotY += 1;
		}
		this._tr.gotoAndStop(this._progress);

		this._startRad = this._addRad;
	}
	draw(ctx)
	{
		const p = this._pixel,
			size = 3,
			ba = ctx.globalAlpha;
		var srad = this._startRad,
			erad = (this._startRad - this._length),
			crad = this._startRad - 20;

		ctx.globalAlpha = this._alpha;
		ctx.beginPath();
		
		var x = Math.cos(erad * RADIAN) * RADIUS,
			y = Math.sin(erad * RADIAN) * RADIUS;

		
		p.fix(x,y,this._rotY,this._rotX,size);
		

		ctx.moveTo(p.x + _CENTER.x + this._offsetX,p.y + _CENTER.y);
		for(var i = erad + RAD_STEP; i <= srad;i += RAD_STEP)
		{
			x = Math.cos(i * RADIAN) * RADIUS;
			y = Math.sin(i * RADIAN) * RADIUS;

			p.fix(x,y,this._rotY,this._rotX,size);

			ctx.lineTo(p.x + _CENTER.x + this._offsetX,p.y + _CENTER.y);
			ctx.stroke();
			// console.log(x,y)
		}
		x = Math.cos(crad * RADIAN) * RADIUS;
		y = Math.sin(crad * RADIAN) * RADIUS;
		p.fix(x,y,this._rotY,this._rotX,size);

		ctx.beginPath();
		ctx.arc(p.x + _CENTER.x + this._offsetX,p.y + _CENTER.y,p.size,0,Math.PI * 2);
		ctx.closePath();
		ctx.fill();
		ctx.globalAlpha = ba;
		// console.log(_CENTER)
		// console.log(srad,erad)
	}
}
class LineClass{
	constructor()
	{
		this._body = document.querySelector('.bg-lines');
		this._container = document.querySelector('.mv');
		this._ctx = this._body.getContext('2d');
		this._w = 0;
		this._h = 0;
		this._init();
	}
	_init()
	{
		
		window.addEventListener('resize',(e)=>{
			this._resize();
		});
		this._particles = [];
		for(var i = 0; i < NUM_PARTICLES;i++)
		{
			this._particles[i] = new EllipseLine(i);
		}
		this._resize();
	}
	start(){
		
		Render.addListener(this);
	}
	update()
	{
		this._update();
		this._draw();

		
	}
	_update()
	{
		this._particles.forEach((p)=>{
			p.update();
		})
	}
	_draw()
	{
		this._ctx.fillStyle = "rgba(255,255,255,1)";
		this._ctx.strokeStyle = "rgba(255,255,255,.2)";
		this._ctx.lineWidth = 1;
		this._ctx.clearRect(0,0,this._w,this._h);
		this._particles.forEach((p)=>{
			p.draw(this._ctx);
		})
	}
	_resize()
	{
		var box = this._container.getBoundingClientRect();

		this._w = this._body.width = box.width;
		this._h = this._body.height = box.height;
		_CENTER.x = box.width * .5;
		_CENTER.y = box.height * 1.3;

		RADIUS = this._h * 1.2;
		this.update();
	}

}
document.addEventListener('DOMContentLoaded',(e)=>{
	Render.start();
	new LineClass().start();
})