import React from 'react';
import { useFormContext } from 'react-hook-form';

const CardImageFields = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-4">
            <label className="block text-gray-700">Card Images</label>
                    <input {...register(`card_images[0].image_url`)} placeholder="Image URL" className="mt-1 block w-full border border-solid border-black p-2 rounded" />
                    {errors.card_images?.[0]?.image_url && <p className="text-red-600">{errors.card_images[0].image_url.message}</p>}
            <input {...register(`card_images[0].image_url_small`)} placeholder="Image URL small" className="mt-1 block w-full border border-solid border-black p-2 rounded" />
                    {errors.card_images?.[0]?.image_url_small && <p className="text-red-600">{errors.card_images[0].image_url_small.message}</p>}
            <input {...register(`card_images[0].image_url_cropped`)} placeholder="Image URL cropped" className="mt-1 block w-full border border-solid border-black p-2 rounded" />
                    {errors.card_images?.[0]?.image_url_cropped && <p className="text-red-600">{errors.card_images[0].image_url_cropped.message}</p>}

        </div>
    );
};

export default CardImageFields;
