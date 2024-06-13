import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import CardImageFields from './CardImageFields'
import CardPriceFields from './CardPriceFields'
import CardSetFields from './CardSetFields'
import CardTypeFields from './CardTypeFields'

// const monsterSchema = yup.object().shape({
//     level: yup.number().required('Level is required').typeError('Level/Rank must be a number'),
//     atk: yup.number().required('Attack is required').typeError('Attack must be a number'),
//     def: yup.number().required('Defense is required').typeError('Defense must be a number'),
//     scale: yup.number().min(0,'').max(12,'').required('Scale is required').typeError('Scale must be a number'),
// });

// const spellSchema = yup.object().shape({
//     spellType: yup.string().required('Spell type is required'),
// });

// const trapSchema = yup.object().shape({
//     trapType: yup.string().required('Trap type is required'),
// });

// const cardImagesSchema = yup.object().shape({
//     image_url: yup.string().url('Must be valid url').nullable().notRequired(),
//     image_url_small: yup.string().url('Must be valid url').nullable().notRequired(),
//     image_url_cropped: yup.string().url('Must be valid url').nullable().notRequired(),
// })

// const cardPricesSchema = yup.array().of(yup.object().shape({
//     tcgplayer_price: yup.number().typeError('Must be a number').nullable().required(),
//     ebay_price: yup.number().typeError('Must be a number').nullable().notRequired(),
//     amazon_price: yup.number().typeError('Must be a number').nullable().notRequired(),
//     cardmarket_price: yup.number().typeError('Must be a number').nullable().notRequired(),
//     coolstuffinc_price: yup.number().typeError('Must be a number').nullable().notRequired(),
// }))

const schema = yup.object().shape({
    type: yup.string().required('Type is required'),
    name: yup.string().required('Name is required'),
    desc: yup.string().required('Desciption is required'),
    frameType: yup.string().required('Card Frame is required'),
})
// .test('validateCardType', 'Card type validation failed', function(value){
//     if (value.type === 'Effect Monster' || 'Synchro Monster' || 'Pendulum Effect Monster' || 'Tuner Monster' || 'Xyz Monster') {
//         return monsterSchema.isValidSync(value)
//     } else if (value.type === 'Spell') {
//         return spellSchema.isValidSync(value)
//     } else if (value.type === 'Trap') {
//         return trapSchema.isValidSync(value)
//     }
//     return true;
// })

const FormAddProduct = () => {
    const methods = useForm({
        resolver: yupResolver(schema),
    })

    const { register, handleSubmit, control, formState: {errors}, reset } = methods
    const [cardType, setCardType] = useState('')

    const onSubmitForm = async (data) => {
        //clean data
        let cleanedData = {...data}
        if (cardType === 'Effect Monster' || cardType === 'Synchro Monster' || cardType === 'Pendulum Effect Monster' || cardType === 'Tuner Monster' || cardType === 'Xyz Monster') {
            cleanedData = {
                ...data,
                spellType: undefined,
                trapType: undefined,
            }
        } else if (cardType === 'Spell Card') {
            cleanedData = {
                ...data,
                level: undefined,
                atk: undefined,
                def: undefined,
                scale: undefined,
                trapType: undefined,
            }
        } else if (cardType === 'Trap Card') {
            cleanedData = {
                ...data,
                level: undefined,
                atk: undefined,
                def: undefined,
                scale: undefined,
                spellType: undefined,
            }
        }

        Object.keys(cleanedData).forEach(key => {
            if(cleanedData[key] === undefined) {
                delete cleanedData[key]
            }
        })

        console.log('Cleaned form data: ', cleanedData)

        try {
            await axios.post('http://localhost:3000/data', cleanedData)
            reset()
            console.log('Product added')
        } catch (error) {
            console.error('Failed to add prodcut',error)
        }
    }

    return (
        <div className="p-4 max-w-lg mx-auto mt-10 border-solid border-4">
            <h1 className="text-2xl font-bold mb-4">Add Product</h1>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Card Type</label>
                        <select {...register("type")} className="mt-1 block w-full border border-solid border-black p-2 rounded" onChange={(e) => setCardType(e.target.value)}>
                            <option value="">Select Card Type</option>
                            <option value="Effect Monster">Effect Monster</option>
                            <option value="Spell Card">Spell Card</option>
                            <option value="Trap Card">Trap Card</option>
                            <option value="Synchro Monster">Synchro Monster</option>
                            <option value="Xyz Monster">Xyz Monster</option>
                            <option value="Tuner Monster">Tuner Monster</option>
                            <option value="Pendulum Effect Monster">Pendulum Effect Monster</option>
                        </select>
                        {errors.type && <p className="text-red-600">{errors.type.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input {...register("name")} className="mt-1 block w-full border border-solid border-black p-2 rounded" type="text" />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <textarea {...register("desc")} className="mt-1 block w-full border border-solid border-black p-2 rounded" rows="4" />
                        {errors.desc && <p className="text-red-600">{errors.desc.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Card Frame</label>
                        <input {...register("frameType")} className="mt-1 block w-full border border-solid border-black p-2 rounded" type='text' />
                        {errors.frameType && <p className="text-red-600">{errors.frameType.message}</p>}
                    </div>

                    <CardTypeFields cardType={cardType} />

                    <CardSetFields control={control} register={register} errors={errors} />
                    <CardImageFields control={control} register={register} errors={errors} />
                    <CardPriceFields control={control} register={register} errors={errors} />

                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
export default FormAddProduct
