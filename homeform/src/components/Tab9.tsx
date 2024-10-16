import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab9Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab9: React.FC<Tab9Props> = ({ register, errors }) => {

    const locationOptions = [
        'Beach', 'Rural', 'River', 'Resort', 'Beach Front', 'Lake', 'Town', 'Water View',
        'Beach View', 'Lake View', 'Village', 'Water Front', 'Near Ocean', 'Lake Front',
        'Downtown', 'Golf Course View', 'Ocean Front', 'Mountain View', 'Monument',
        'Golf Course Front', 'Ocean View', 'Conservation View', 'Ski In/Ski Out'
    ];

    const popularAmenitiesOptions = [
        'AC', 'Garage', 'Parking', 'Heating', 'Fireplace', 'Paved Parking',
        'Dryer', 'Hair Dryer', 'Elevator', 'Washer', 'Iron & Board', 'Free Calls',
        'Linens Provided', 'Wood Stove', 'Telephone', 'Towels Provided', 'Living Room', 'Wifi',
        'Unit Amenities', 'Game Room', 'Wired Internet Access', 'Resort Amenities',
        'Fitness Room/Equipment', 'Internet PC/Device Included'
    ];

    return (
        <div className='container'>

            <div id='title'>Only necessary for NEW destinations or communities.</div>
            <div className="amenities-grid">
                <label><strong>Location: </strong></label>
                {locationOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Location-${index}`}
                            value={option}
                            {...register("Location")}
                        />
                        <label htmlFor={`Location-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <div className="amenities-grid">
                <label><strong>Popular Amenities: </strong></label>
                {popularAmenitiesOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`PopularAmenities-${index}`}
                            value={option}
                            {...register("PopularAmenities")}
                        />
                        <label htmlFor={`PopularAmenities-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

        </div>
    )
}
