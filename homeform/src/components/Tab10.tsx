import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab10Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab10: React.FC<Tab10Props> = ({ register, errors }) => {

    const culturalOptions = [
        'Arboretum', 'Autumn Foliage', 'Bay', 'Botanical Garden', 'Cave', 'Churches', 'Cinemas', 'Coin Laundry', 'Duty Free', 'Festivals',
        'Forests', 'Health/Beauty Spa', 'Library', 'Live Theater', 'Marina', 'Museums', 'Nude Beach', 'Playground', 'Pond', 'Rain Forests',
        'Rec Center', 'Reef', 'Restaurants', 'Ruins', 'Synagogues', 'Theme Parks', 'Volcano', 'Water Parks', 'Waterfalls', 'Winery Tours',
        'Zoo'
    ];

    const leisureOptions = [
        'Antiquing', 'Art Galleries', 'Beachcombing', 'Bird Watching', 'Boating', 'Bowling', 'Disco', 'Eco Tourism', 'Equestrian Events', 'Gambling Casinos',
        'Horseback Riding', 'Horseshoes', 'Luaus', 'Monuments', 'Naturism', 'Outlet Shopping', 'Paddle Boating', 'Photography', 'Scenic Drives', 'Shelling',
        'Shopping', 'Shuffleboard', 'Sight Seeing', 'Sledding', 'Thalasso Therapy', 'Thermalisme', 'Walking', 'Water Sports', 'Whale Watching', 'Wildlife Viewing'
    ];

    return (
        <div className='container'>

            <div id='title'>Only necessary for NEW destinations or communities.</div>
            <div className="amenities-grid">
                <label><strong>Cultural: </strong></label>
                {culturalOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Cultural-${index}`}
                            value={option}
                            {...register("Cultural")}
                        />
                        <label htmlFor={`Cultural-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <div className="amenities-grid">
                <label><strong>Leisure: </strong></label>
                {leisureOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Leisure-${index}`}
                            value={option}
                            {...register("Leisure")}
                        />
                        <label htmlFor={`Leisure-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

        </div>
    )
}
