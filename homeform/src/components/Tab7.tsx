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
        <div className='container'>

            <label><strong>Outdoor Features: </strong></label>
            <div className="amenities-grid">
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

            <label><strong>Pool & Spa Facilities: </strong></label>
            <div className="amenities-grid">
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
                <label htmlFor="NumOfExteriorLivingSeats"><strong>Exterior Living Seats Number: </strong></label>
                <input type="text" id="NumOfExteriorLivingSeats" {...register("NumOfExteriorLivingSeats", { required: { value: false, message: 'Exterior Living Seats Number is required' } })} />
                <p className='error'>{errors.NumOfExteriorLivingSeats?.message}</p>

                <label htmlFor="NumOfExteriorDiningSeats"><strong>Exterior Dining Seats Number: </strong></label>
                <input type="text" id="NumOfExteriorDiningSeats" {...register("NumOfExteriorDiningSeats", { required: { value: false, message: 'Exterior Dining Seats Number is required' } })} />
                <p className='error'>{errors.NumOfExteriorDiningSeats?.message}</p>

                <label htmlFor="NumOfPatioLoungers"><strong>Number of Patio Loungers: </strong></label>
                <input type="text" id="NumOfPatioLoungers" {...register("NumOfPatioLoungers", { required: { value: false, message: 'Number of Patio Loungers is required' } })} />
                <p className='error'>{errors.NumOfPatioLoungers?.message}</p>
            </div>

            <div>
                <label htmlFor="PoolSize"><strong>Pool Size: </strong></label>
                <input type="text" id="PoolSize" {...register("PoolSize", { required: { value: false, message: 'Pool Size is required' } })} />
                <p className='error'>{errors.PoolSize?.message}</p>

                <label htmlFor="JacuzziSize"><strong>Jacuzzi Size: </strong></label>
                <input type="text" id="JacuzziSize" {...register("JacuzziSize", { required: { value: false, message: 'Jacuzzi Size is required' } })} />
                <p className='error'>{errors.JacuzziSize?.message}</p>

                <label htmlFor="NumOfGardenGrounds"><strong>Garden/Grounds: </strong></label>
                <input type="text" id="NumOfGardenGrounds" {...register("NumOfGardenGrounds", { required: { value: false, message: 'Garden/Grounds is required' } })} />
                <p className='error'>{errors.NumOfGardenGrounds?.message}</p>
            </div>

            <div>
                <label htmlFor='AdditionalNotesExteriror'><strong>Additional Notes: </strong></label>
                <textarea id="AdditionalNotesExteriror" {...register("AdditionalNotesExteriror", { required: { value: false, message: 'Additional Notes Interiror não pode estar vazia' } })} />
                <p className='error'>{errors.AdditionalNotesExteriror?.message}</p>
            </div>

            <div>
                <label htmlFor='NotesToOwnerExteriror'><strong>Notes to Owner (Internal use Only): </strong></label>
                <textarea id="NotesToOwnerExteriror" {...register("NotesToOwnerExteriror", { required: { value: false, message: 'Notes To Owner Interiror não pode estar vazia' } })} />
                <p className='error'>{errors.NotesToOwnerExteriror?.message}</p>
            </div>

            <div>
                <label htmlFor='SpecialFeaturesExterior'><strong>Special Features: </strong></label>
                <textarea id="SpecialFeaturesExterior" {...register("SpecialFeaturesExterior", { required: { value: false, message: 'Special Features não pode estar vazia' } })} />
                <p className='error'>{errors.SpecialFeaturesExterior?.message}</p>
            </div>

        </div>
    )

}
