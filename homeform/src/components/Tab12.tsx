import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab12Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab12: React.FC<Tab12Props> = ({ register, errors }) => {

    const experiencesOptions = [
        'Golf', 'Beach', 'Gastronomy', 'Adult Beverages', 'Spa', 'Photography',
        'Equestrian Activities', 'Zip Lining', 'Underwater Exploration', 'ATV\'s', 'Land Adventures',
        'Wave/Wind Sports', 'Sightseeing', 'Sailing + Boating', 'Jet Skis + Water Ski Water Jets',
        'Marine Life Adventures', 'Fishing', 'Shopping', 'Shot', 'Charitable Tourism', 'Race Car Driving',
        'Hunting', 'Live Events', 'Skiing', 'Museums', 'Nightlife', 'Historical Monuments',
        'Festivals', 'Literature Events', 'Dance', 'Language', 'Viva España', 'Caving',
        'Hot Air Balooning', 'Crafting', 'Bird Watching + Wildlife Watching'
    ];

    return (
        <div className='container'>

            <div id='title'>Only necessary for NEW destinations or communities.</div>

            <label><strong>Experiences: </strong></label>
            <div className="amenities-grid">
                {experiencesOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Experiences-${index}`}
                            value={option}
                            {...register("Experiences")}
                        />
                        <label htmlFor={`Experiences-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

        </div>
    )
}
