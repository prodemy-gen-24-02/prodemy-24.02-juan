import React from 'react';
import { useFormContext } from 'react-hook-form';

const CardSetFields = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-4">
            <label className="block text-gray-700">Card Set</label>
            <input {...register('card_sets[0].set_name')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="text" placeholder="Set Name" />
            {errors.card_sets?.[0]?.set_name && <p className="text-red-600">{errors.card_sets[0].set_name.message}</p>}

            <input {...register('card_sets[0].set_code')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="text" placeholder="Set Code" />
            {errors.card_sets?.[0]?.set_code && <p className="text-red-600">{errors.card_sets[0].set_code.message}</p>}

            <input {...register('card_sets[0].set_rarity')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="text" placeholder="Set Rarity" />
            {errors.card_sets?.[0]?.set_rarity && <p className="text-red-600">{errors.card_sets[0].set_rarity.message}</p>}

            <input {...register('card_sets[0].set_rarity_code')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="text" placeholder="Set Rarity Code" />
            {errors.card_sets?.[0]?.set_rarity_code && <p className="text-red-600">{errors.card_sets[0].set_rarity_code.message}</p>}

            <input {...register('card_sets[0].set_price')} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="number" placeholder="Set Price" />
            {errors.card_sets?.[0]?.set_price && <p className="text-red-600">{errors.card_sets[0].set_price.message}</p>}
        </div>
    );
};

export default CardSetFields;
