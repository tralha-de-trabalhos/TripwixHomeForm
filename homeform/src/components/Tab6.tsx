import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab6Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab6: React.FC<Tab6Props> = ({ register, errors }) => {

    const kitchenDiningOptions = [
        'Kitchen', 'Toaster', 'Oven', 'Microwave', 'Highchair',
        'Full Kitchen', 'Raclette', 'Stove', 'Refrigerator', 'Dining Area',
        'Mini Kitchen', 'Coffee Maker', 'Spices', 'Dishwasher', 'Kitchen Dining Room',
        'Partial Kitchen', 'Dishes/Utensils', 'Tableware x2 Sets', 'Tableware 3 or More Sets'
    ];

    const entertainmentDiningOptions = [
        'VCR', 'Netflix', 'Pool Table', 'Books', 'Stereo',
        'Games', 'Table Tennis', 'Library', 'CD Player', 'Apple TV',
        'Foosball Table', 'Video Library', 'Television', 'Game Room', 'Ping Pong Table',
        'Music Library', 'Big Screen TV', 'Video Games', 'Air Hockey Table', 'Rocking Chairs',
        'DVD/Blue-Ray Player', 'Satelite/Cable', 'Smart TV', 'Sound System (Sonos/Bose)'
    ];

    const heatingCoolingOptions = [
        'AC', 'Gas Fireplace', 'Heating', 'Central AC', 'Steam Fireplace',
        'Central Heating', 'Underfloor AC', 'Electric Fireplace', 'Outdoor Heaters', 'Individual Room AC',
        'Ethanol Fireplace', 'Underfloor Heating', 'Radiators', 'Wood Burning Fireplace', 'Free Standing Heaters'
    ];

    return (
        <div className='container'>

            <label><strong>Kitchen & Dining: </strong></label>
            <div className="amenities-grid">
                {kitchenDiningOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`KitchenDining-${index}`}
                            value={option}
                            {...register("KitchenDining")}
                        />
                        <label htmlFor={`Interior-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <label><strong>Entertainment: </strong></label>
            <div className="amenities-grid">
                {entertainmentDiningOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Entertainment-${index}`}
                            value={option}
                            {...register("Entertainment")}
                        />
                        <label htmlFor={`Interior-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <label><strong>Heating/Cooling: </strong></label>
            <div className="amenities-grid">
                {heatingCoolingOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`HeatingCooling-${index}`}
                            value={option}
                            {...register("HeatingCooling")}
                        />
                        <label htmlFor={`Interior-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <div>
                <label htmlFor="NumOfIndoorLivingAreaSeats"><strong>Indoor Living Area Seats Number: </strong></label>
                <input type="text" id="NumOfIndoorLivingAreaSeats" {...register("NumOfIndoorLivingAreaSeats", { required: { value: false, message: 'Indoor Living Area Seats Number is required' } })} />
                <p className='error'>{errors.NumOfIndoorLivingAreaSeats?.message}</p>

                <label htmlFor="NumOfIndoorDinningAreaSeats"><strong>Indoor Dinning Area Seats Number: </strong></label>
                <input type="text" id="NumOfIndoorDinningAreaSeats" {...register("NumOfIndoorDinningAreaSeats", { required: { value: false, message: 'Indoor Dinning Area Seats Number is required' } })} />
                <p className='error'>{errors.NumOfIndoorDinningAreaSeats?.message}</p>
            </div>

            <div>
                <label htmlFor='AdditionalNotesInteriror'><strong>Additional Notes: </strong></label>
                <textarea id="AdditionalNotesInteriror" {...register("AdditionalNotesInteriror", { required: { value: false, message: 'Additional Notes Interiror não pode estar vazia' } })} />
                <p className='error'>{errors.AdditionalNotesInteriror?.message}</p>
            </div>

            <div>
                <label htmlFor='NotesToOwnerInteriror'><strong>Notes to Owner (Internal use Only): </strong></label>
                <textarea id="NotesToOwnerInteriror" {...register("NotesToOwnerInteriror", { required: { value: false, message: 'Notes To Owner Interiror não pode estar vazia' } })} />
                <p className='error'>{errors.NotesToOwnerInteriror?.message}</p>
            </div>

            <div>
                <label htmlFor='SpecialFeaturesInterior'><strong>Special Features: </strong></label>
                <textarea id="SpecialFeaturesInterior" {...register("SpecialFeaturesInterior", { required: { value: false, message: 'Special Features não pode estar vazia' } })} />
                <p className='error'>{errors.SpecialFeaturesInterior?.message}</p>
            </div>

        </div>
    )
}
