import React from 'react'
import { useFormContext } from 'react-hook-form'

const CardTypeFields = ({cardType}) => {
    const { register, formState: { errors } } = useFormContext()

    if (cardType === 'Effect Monster') {
        return (
            <>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Level</label>
                    <input {...register("level")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number'/>
                    {errors.level && <p className='text-red-600'>{errors.level.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attack</label>
                    <input {...register("atk")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.atk && <p className='text-red-600'>{errors.atk.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Defense</label>
                    <input {...register("def")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.def && <p className='text-red-600'>{errors.def.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Race</label>
                    <input {...register("race")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.race && <p className='text-red-600'>{errors.race.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attribute</label>
                    <input {...register("attribute")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.attribute && <p className='text-red-600'>{errors.attribute.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Archetype</label>
                    <input {...register("archetype")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.archetype && <p className='text-red-600'>{errors.archetype.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Ygoprodeck Url</label>
                    <input {...register("ygoprodeck_url")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.ygoprodeck_url && <p className='text-red-600'>{errors.ygoprodeck_url.message}</p>}
                </div>
            </>
        )
    }

    if (cardType === 'Spell Card') {
        return (
            <>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Spell Type</label>
                    <input {...register("race")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='txt' />
                    {errors.race && <p className='text-red-600'>{errors.race.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Archetype</label>
                    <input {...register("archetype")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.archetype && <p className='text-red-600'>{errors.archetype.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Ygoprodeck Url</label>
                    <input {...register("ygoprodeck_url")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.ygoprodeck_url && <p className='text-red-600'>{errors.ygoprodeck_url.message}</p>}
                </div>
            </>
        )
    }

    if (cardType === 'Trap Card') {
        return (
            <>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Trap Type</label>
                    <input {...register("race")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='txt' />
                    {errors.race && <p className='text-red-600'>{errors.race.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Archetype</label>
                    <input {...register("archetype")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.archetype && <p className='text-red-600'>{errors.archetype.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Ygoprodeck Url</label>
                    <input {...register("ygoprodeck_url")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.ygoprodeck_url && <p className='text-red-600'>{errors.ygoprodeck_url.message}</p>}
                </div>
            </>
        )
    }

    if (cardType === 'Synchro Monster') {
        return (
            <>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Level</label>
                    <input {...register("level")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.level && <p className='text-red-600'>{errors.level.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attack</label>
                    <input {...register("atk")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.atk && <p className='text-red-600'>{errors.atk.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Defense</label>
                    <input {...register("def")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.def && <p className='text-red-600'>{errors.def.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Race</label>
                    <input {...register("race")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.race && <p className='text-red-600'>{errors.race.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attribute</label>
                    <input {...register("attribute")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.attribute && <p className='text-red-600'>{errors.attribute.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Archetype</label>
                    <input {...register("archetype")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.archetype && <p className='text-red-600'>{errors.archetype.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Ygoprodeck Url</label>
                    <input {...register("ygoprodeck_url")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.ygoprodeck_url && <p className='text-red-600'>{errors.ygoprodeck_url.message}</p>}
                </div>
            </>
        )
    }

    if (cardType === 'Xyz Monster') {
        return (
            <>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Rank</label>
                    <input {...register("level")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.level && <p className='text-red-600'>{errors.level.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attack</label>
                    <input {...register("atk")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.atk && <p className='text-red-600'>{errors.atk.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Defense</label>
                    <input {...register("def")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.def && <p className='text-red-600'>{errors.def.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Race</label>
                    <input {...register("race")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.race && <p className='text-red-600'>{errors.race.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attribute</label>
                    <input {...register("attribute")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.attribute && <p className='text-red-600'>{errors.attribute.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Archetype</label>
                    <input {...register("archetype")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.archetype && <p className='text-red-600'>{errors.archetype.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Ygoprodeck Url</label>
                    <input {...register("ygoprodeck_url")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.ygoprodeck_url && <p className='text-red-600'>{errors.ygoprodeck_url.message}</p>}
                </div>
            </>
        )
    }

    if (cardType === 'Tuner Monster') {
        return (
            <>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Level</label>
                    <input {...register("level")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.level && <p className='text-red-600'>{errors.level.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attack</label>
                    <input {...register("atk")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.atk && <p className='text-red-600'>{errors.atk.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Defense</label>
                    <input {...register("def")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.def && <p className='text-red-600'>{errors.def.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Race</label>
                    <input {...register("race")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.race && <p className='text-red-600'>{errors.race.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attribute</label>
                    <input {...register("attribute")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.attribute && <p className='text-red-600'>{errors.attribute.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Archetype</label>
                    <input {...register("archetype")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.archetype && <p className='text-red-600'>{errors.archetype.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Ygoprodeck Url</label>
                    <input {...register("ygoprodeck_url")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.ygoprodeck_url && <p className='text-red-600'>{errors.ygoprodeck_url.message}</p>}
                </div>
            </>
        )
    }

    if (cardType === 'Pendulum Effect Monster') {
        return (
            <>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Level</label>
                    <input {...register("level")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.level && <p className='text-red-600'>{errors.level.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Pendulum Desc</label>
                    <textarea {...register("pend_desc")} className='mt-1 block w-full border border-solid border-black p-2 rounded' rows='3'></textarea>
                    {errors.pend_desc && <p className='text-red-500'>{errors.pend_desc.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Monster Desc</label>
                    <textarea {...register("monster_desc")} className='mt-1 block w-full border border-solid border-black p-2 rounded' rows='3'></textarea>
                    {errors.monster_desc && <p className='text-red-500'>{errors.monster_desc.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attack</label>
                    <input {...register("atk")} className='mt-1 block w-full border border-solid border-black p-2 rounded'  type='number' />
                    {errors.atk && <p className='text-red-600'>{errors.atk.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Defense</label>
                    <input {...register("def")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.def && <p className='text-red-600'>{errors.def.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Race</label>
                    <input {...register("race")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.race && <p className='text-red-600'>{errors.race.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Attribute</label>
                    <input {...register("attribute")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.attribute && <p className='text-red-600'>{errors.attribute.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Archetype</label>
                    <input {...register("archetype")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.archetype && <p className='text-red-600'>{errors.archetype.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Scale</label>
                    <input {...register("scale")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='number' />
                    {errors.scale && <p className='text-red-600'>{errors.scale.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Ygoprodeck Url</label>
                    <input {...register("ygoprodeck_url")} className='mt-1 block w-full border border-solid border-black p-2 rounded' type='text' />
                    {errors.ygoprodeck_url && <p className='text-red-600'>{errors.ygoprodeck_url.message}</p>}
                </div>
            </>
        )
    }

  return null
}

export default CardTypeFields
