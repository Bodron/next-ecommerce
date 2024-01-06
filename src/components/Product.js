import Image from 'next/image'
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { CurrencyFormat } from 'currency-fomatter'

const MAX_RATING = 5
const MIN_RATING = 1

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(1)

  const [hasPrime, setHasPrime] = useState(true)

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    setHasPrime(Math.random() < 0.5)
  }, [])
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div>
        <Image src={image} width={200} height={200} objectFit="contain" />
      </div>

      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <CurrencyFormat value={price} prefix="$" type="text" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Freee next-day Delivery</p>
        </div>
      )}
      <div className="mt-auto button text-center">Add to Basket</div>
    </div>
  )
}

export default Product
