(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{weigth:`100`,art:`01306`,priceNew:`326,20`,priceOld:`349,40`},{weigth:`500`,art:`01307`,priceNew:` 1 432`,priceOld:`1 646 `},{weigth:`1000`,art:`01308`,priceNew:`2 064`,priceOld:`2 592`},{weigth:`5000`,art:`01309`,priceNew:`6 320`,priceOld:`8 710`}],t=document.querySelector(`.cart`);t.insertAdjacentHTML(`beforeend`,`
	<img class='cart__bg' src='bg.jpg' alt='img' />
	<div class='cart__content'>
		<div class='cart__box'>
			<select class='cart__weight-select'></select>
			<span class='cart__art'></span>
		</div>
		<div class='cart__box'>
			<div class='cart__price'>
				<span class='cart__price--new'></span>
				<span class='cart__price--old'></span>
			</div>
		</div>
    <button class='cart__basket'>
      <svg class='cart__basket-icon' viewBox='0 0 24 24' width='20' height='20'
					fill='none' stroke='currentColor' stroke-width='2'
					stroke-linecap='round' stroke-linejoin='round'>
					<circle cx='9' cy='21' r='1'></circle>
					<circle cx='20' cy='21' r='1'></circle>
					<path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
			</svg>
    </button>
	</div>
`);var n=t.querySelector(`.cart__weight-select`),r=t.querySelector(`.cart__art`),i=t.querySelector(`.cart__price--new`),a=t.querySelector(`.cart__price--old`);e.forEach((e,t)=>{let r=document.createElement(`option`);r.value=t,r.textContent=`${e.weigth} г`,n.appendChild(r)});function o(t){let n=e[t];r.textContent=`Арт: ${n.art}`,i.textContent=`${n.priceNew} ₽`,a.textContent=`${n.priceOld} ₽`}n.addEventListener(`change`,e=>o(e.target.value)),o(0);