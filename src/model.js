import image from './assets/image.png';
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks';

export const model = [
	new TitleBlock('Конструктор сайтов на чистом JavaScript', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #ff0131, #493200)',
			color: '#fff',
			padding: '1.5rem',
			'text-align': 'center',
		},
	}),
	new ColumnsBlock([
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi error illum magnam odio officiis similique tempora! Magnam, necessitatibus!',
		'Lorem ipsum dolor sit amet, consectetur  elit. Amet at aut ducimus, expedita libero obcaecati quas vero',
		'Приложение на чистом JavaScript, без использования библиотек',
		'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
		'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
	], {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold',
		},
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center',
		},
		imageStyles: {
			width: '500px',
			height: 'auto',
		},
		alt: 'картинка',
	}),
	new TextBlock('here we go with some text', {
		tag: 'p',
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold',
		},
	}),
];
