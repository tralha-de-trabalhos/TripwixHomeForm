import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab11Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab11: React.FC<Tab11Props> = ({ register, errors }) => {

    const activeOptions = [
        'Basketball Court', 'Hot Air Ballooning', 'Hunting',
        'Paragliding', 'Racquetball', 'Roller Blading',
        'Tennis'
    ];

    const golfOptions = [
        'Golf', 'Golf Included', 'Golf Privileges Optional',
        'Miniature Golf', 'Golf Club', 'Club House'
    ];

    const hikingBikingOptions = [
        'Cycling', 'Hiking', 'Mountain Biking',
        'Mountain Climbing', 'Mountaineering', 'Rock Climbing',
        'Spelunking'
    ];

    const waterSportsOptions = [
        'Deep Sea Fishing', 'Fishing', 'Fishing (Bay)', 'Fishing (Fly)', 'Fishing (Freshwater)',
        'Fishing (Surf)	', 'Jet Skiing', 'Kayaking', 'Parasailing', 'Pier Fishing',
        'Rafting', 'Sailing', 'Scuba Diving', 'Snorkeling', 'Surfing',
        'Swimming', 'Water Skiing', 'Water Tubing', 'Whitewater Rafting', 'Wind Surfing'
    ];

    const winterActivitiesOptions = [
        'Cross Country Skiing', 'Ice Skating', 'Ski Lift Privileges',
        'Ski Lift Privileges Optional', 'Skiing', 'Sledding',
        'Snowboarding', 'Snowmobiling', 'Snowshoeing'
    ];

    return (
        <div>
            <div id='title'>Only necessary for NEW destinations or communities.</div>
            <div className="amenities-grid">
                <label><strong>Active: </strong></label>
                {activeOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Sports-${index}`}
                            value={option}
                            {...register("Active")}
                        />
                        <label htmlFor={`Sports-${index}`}>{option}</label>
                    </div>

                ))}
            </div>
            <div className="amenities-grid">
                <label><strong>Golf: </strong></label>
                {golfOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Sports-${index}`}
                            value={option}
                            {...register("Golf")}
                        />
                        <label htmlFor={`Sports-${index}`}>{option}</label>
                    </div>

                ))}
            </div>
            <div className="amenities-grid">
                <label><strong>Hiking and Biking: </strong></label>
                {hikingBikingOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Sports-${index}`}
                            value={option}
                            {...register("HikingBiking")}
                        />
                        <label htmlFor={`Sports-${index}`}>{option}</label>
                    </div>

                ))}
            </div>
            <div className="amenities-grid">
                <label><strong>Water Sports: </strong></label>
                {waterSportsOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Sports-${index}`}
                            value={option}
                            {...register("WaterSports")}
                        />
                        <label htmlFor={`Sports-${index}`}>{option}</label>
                    </div>

                ))}
            </div>
            <div className="amenities-grid">
                <label><strong>Winter Activities: </strong></label>
                {winterActivitiesOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Sports-${index}`}
                            value={option}
                            {...register("WinterActivities")}
                        />
                        <label htmlFor={`Sports-${index}`}>{option}</label>
                    </div>

                ))}
            </div>
        </div>
    )
}