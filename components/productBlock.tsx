import Link from 'next/link';
import Image from "next/image";

const ProductBlock = (): JSX.Element => {

	const width = '100%';

	return <div className="cart">
		<img className="sale-svg" src="sale.svg" alt="" />
		<Link href="/product">
			<a className="cart-img">
				<Image src="/product2.png"
					alt="asd"
					layout="responsive"
					width={299}
					height={440}
					placeholder="blur"
					blurDataURL='/product2.png'
				/>
			</a>
		</Link>
		<div className="cart-info">
			<Link href="/catalog">
				<a className="category-cart">Свитеры и джемперы </a>
			</Link>
			<Link href="/product">
				<a className="title-cart"><h3>Свитер с высоким воротом</h3></a>
			</Link>

			<div className="color-cart-block">
				<p className="color-title">Другие расцветки:</p>
				<div className="color-block">
					<div className="color color-yelow"></div>
					<div className="color color-orange"></div>
					<div className="color color-blue"></div>
					<div className="color color-green"></div>
				</div>
			</div>
			<div className="size-cart-block">
				<p className="size-title">Размерный ряд:</p>
				<div className="size-block">
					<p>42-44</p> <p>46-48</p>  <p>56-58</p>
				</div>
			</div>
			<div className="price">
				<div className="price-old">
					<p>3 600 ₽</p>
				</div>
				<div className="price-new">
					<p>2 560 ₽</p>
				</div>
			</div>
		</div >
	</div >;

};

export default ProductBlock;