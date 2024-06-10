import React from 'react';
import { useFormContext } from 'react-hook-form';

const CardPriceFields = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-4">
            <label className="block text-gray-700">Card Prices</label>
            <input {...register('card_prices[0].cardmarket_price')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="number" placeholder="Cardmarket Price" />
            {errors.card_prices?.[0]?.cardmarket_price && <p className="text-red-600">{errors.card_prices[0].cardmarket_price.message}</p>}

            <input {...register('card_prices[0].tcgplayer_price')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="number" placeholder="TCGPlayer Price" />
            {errors.card_prices?.[0]?.tcgplayer_price && <p className="text-red-600">{errors.card_prices[0].tcgplayer_price.message}</p>}

            <input {...register('card_prices[0].ebay_price')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="number" placeholder="eBay Price" />
            {errors.card_prices?.[0]?.ebay_price && <p className="text-red-600">{errors.card_prices[0].ebay_price.message}</p>}

            <input {...register('card_prices[0].amazon_price')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="number" placeholder="Amazon Price" />
            {errors.card_prices?.[0]?.amazon_price && <p className="text-red-600">{errors.card_prices[0].amazon_price.message}</p>}

            <input {...register('card_prices[0].coolstuffinc_price')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="number" placeholder="CoolStuffInc Price" />
            {errors.card_prices?.[0]?.coolstuffinc_price && <p className="text-red-600">{errors.card_prices[0].coolstuffinc_price.message}</p>}
        </div>
    );
};

export default CardPriceFields;
