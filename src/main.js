import './style.scss';

const packagingSizes = [
	{ weigth: '100', art: '01306', priceNew: '326,20', priceOld: '349,40' },
	{ weigth: '500', art: '01307', priceNew: ' 1 432', priceOld: '1 646 ' },
	{ weigth: '1000', art: '01308', priceNew: '2 064', priceOld: '2 592' },
	{ weigth: '5000', art: '01309', priceNew: '6 320', priceOld: '8 710' }
];

const cart = document.querySelector('.cart');

cart.insertAdjacentHTML(
	'beforeend',
	`
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
`
);

const select = cart.querySelector('.cart__weight-select');
const artEl = cart.querySelector('.cart__art');
const priceNewEl = cart.querySelector('.cart__price--new');
const priceOldEl = cart.querySelector('.cart__price--old');

packagingSizes.forEach((item, index) => {
	const option = document.createElement('option');
	option.value = index;
	option.textContent = `${item.weigth} г`;
	select.appendChild(option);
});

function render(index) {
	const item = packagingSizes[index];
	artEl.textContent = `Арт: ${item.art}`;
	priceNewEl.textContent = `${item.priceNew} ₽`;
	priceOldEl.textContent = `${item.priceOld} ₽`;
}

select.addEventListener('change', (e) => render(e.target.value));
render(0);
