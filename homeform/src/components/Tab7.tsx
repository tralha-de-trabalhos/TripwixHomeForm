import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab7Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab7: React.FC<Tab7Props> = ({ register, errors }) => {

    const outdoorFeaturesOptions = [
        'Golf', 'Dock', 'Grill', 'Boat', 'Garden', 'BBQ', 'Bicycle', 'Balcony',
        'Tennis', 'Motorcycle', 'Veranda', 'Petanque', 'Kayak/Canoe', 'Privacy Fence',
        'Lawn Garden', 'Water Sports Gear', 'Deck/Patio Uncovered', 'Tennis Courts', 'Snow Sports Gear',
        'Lanai/Gazebo Covered'
    ];

    const poolSpaFacilitiesOptions = [
        'Pool Access', 'SPA', 'Indoor Jacuzzi', 'Indoor Pool', 'Sauna', 'Outdoor Jacuzzi',
        'Private Pool', 'Heated Pool', 'Indoor Hot-tub', 'Communal Pool', 'Salted Water', 'Outdoor Hot-tub',
        'South Facing Pool', 'Free Solar Heat'
    ];

    return (
        <div>
            <div className="amenities-grid">
                <label><strong>Outdoor Features: </strong></label>
                {outdoorFeaturesOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`OutdoorFeatures-${index}`}
                            value={option}
                            {...register("OutdoorFeatures")}
                        />
                        <label htmlFor={`OutdoorFeatures-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <div className="amenities-grid">
                <label><strong>Pool & Spa Facilities: </strong></label>
                {poolSpaFacilitiesOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`PoolSpaFacilities-${index}`}
                            value={option}
                            {...register("PoolSpaFacilities")}
                        />
                        <label htmlFor={`PoolSpaFacilities-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <div>
                <label htmlFor="NumOfExteriorLivingSeats">Exterior Living Seats Number: </label>
                <input type="text" id="NumOfExteriorLivingSeats" {...register("NumOfExteriorLivingSeats", { required: { value: false, message: 'Exterior Living Seats Number is required' } })} />
                <p className='error'>{errors.NumOfExteriorLivingSeats?.message}</p>

                <label htmlFor="NumOfExteriorDiningSeats">Exterior Dining Seats Number: </label>
                <input type="text" id="NumOfExteriorDiningSeats" {...register("NumOfExteriorDiningSeats", { required: { value: false, message: 'Exterior Dining Seats Number is required' } })} />
                <p className='error'>{errors.NumOfExteriorDiningSeats?.message}</p>

                <label htmlFor="NumOfPatioLoungers">Number of Patio Loungers: </label>
                <input type="text" id="NumOfPatioLoungers" {...register("NumOfPatioLoungers", { required: { value: false, message: 'Number of Patio Loungers is required' } })} />
                <p className='error'>{errors.NumOfPatioLoungers?.message}</p>

                <label htmlFor="PoolSize">Pool Size: </label>
                <input type="text" id="PoolSize" {...register("PoolSize", { required: { value: false, message: 'Pool Size is required' } })} />
                <p className='error'>{errors.PoolSize?.message}</p>

                <label htmlFor="JacuzziSize">Jacuzzi Size: </label>
                <input type="text" id="JacuzziSize" {...register("JacuzziSize", { required: { value: false, message: 'Jacuzzi Size is required' } })} />
                <p className='error'>{errors.JacuzziSize?.message}</p>

                <label htmlFor="NumOfGardenGrounds">Garden/Grounds: </label>
                <input type="text" id="NumOfGardenGrounds" {...register("NumOfGardenGrounds", { required: { value: false, message: 'Garden/Grounds is required' } })} />
                <p className='error'>{errors.NumOfGardenGrounds?.message}</p>

            </div>

            <div>
                <label htmlFor='AdditionalNotesExteriror'>Additional Notes: </label>
                <textarea id="AdditionalNotesExteriror" {...register("AdditionalNotesExteriror", { required: { value: false, message: 'Additional Notes Interiror não pode estar vazia' } })} />
                <p className='error'>{errors.AdditionalNotesExteriror?.message}</p>
            </div>

            <div>
                <label htmlFor='NotesToOwnerExteriror'>Notes to Owner (Internal use Only): </label>
                <textarea id="NotesToOwnerExteriror" {...register("NotesToOwnerExteriror", { required: { value: false, message: 'Notes To Owner Interiror não pode estar vazia' } })} />
                <p className='error'>{errors.NotesToOwnerExteriror?.message}</p>
            </div>

            <div>
                <label htmlFor='SpecialFeaturesExterior'>Special Features: </label>
                <textarea id="SpecialFeaturesExterior" {...register("SpecialFeaturesExterior", { required: { value: false, message: 'Special Features não pode estar vazia' } })} />
                <p className='error'>{errors.SpecialFeaturesExterior?.message}</p>
            </div>
        </div>
    )

}
