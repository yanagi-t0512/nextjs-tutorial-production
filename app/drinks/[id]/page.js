import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import drinkImg from './drink.jpg'
import Image from 'next/image';

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error('fetchに失敗しました');
  }
  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        戻る
      </Link>
      {/* <img src={drinkImg.src} /> */}
      {/* <Image src={drinkImg} className='w-48 h-48 rounded-lg' alt='drink' /> */}
      <Image src={imgSrc} width={300} height={300} className='w-48 h48 rounded-lg shadow-lg mb-4'
      priority alt={title} />
      <h1 className='text-4xl mb-8'>
        {title}
      </h1>
    </div>
  );
};

export default SingleDrinkPage;
