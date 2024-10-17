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
        <div className='container'>

            <div id='title'>Only necessary for NEW destinations or communities.</div>

            <label><strong>Active: </strong></label>
            <div className="amenities-grid">
                {activeOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Active-${index}`}
                            value={option}
                            {...register("Active")}
                        />
                        <label htmlFor={`Active-${index}`}>{option}</label>
                    </div>

                ))}
            </div>

            <label><strong>Golf: </strong></label>
            <div className="amenities-grid">
                {golfOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Golf-${index}`}
                            value={option}
                            {...register("Golf")}
                        />
                        <label htmlFor={`Golf-${index}`}>{option}</label>
                    </div>

                ))}
            </div>

            <label><strong>Hiking and Biking: </strong></label>
            <div className="amenities-grid">
                {hikingBikingOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`HikingBiking-${index}`}
                            value={option}
                            {...register("HikingBiking")}
                        />
                        <label htmlFor={`HikingBiking-${index}`}>{option}</label>
                    </div>

                ))}
            </div>

            <label><strong>Water Sports: </strong></label>
            <div className="amenities-grid">
                {waterSportsOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`WaterSports-${index}`}
                            value={option}
                            {...register("WaterSports")}
                        />
                        <label htmlFor={`WaterSports-${index}`}>{option}</label>
                    </div>

                ))}
            </div>

            <label><strong>Winter Activities: </strong></label>
            <div className="amenities-grid">
                {winterActivitiesOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`WinterActivities-${index}`}
                            value={option}
                            {...register("WinterActivities")}
                        />
                        <label htmlFor={`WinterActivities-${index}`}>{option}</label>
                    </div>

                ))}
            </div>

        </div>
    )
}