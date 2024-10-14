import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab4Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab4: React.FC<Tab4Props> = ({ register, errors }) => {

    const themeOptions = [
        'Adventure', 'Away From It All', 'Budget', 'Family', 'Farm Holidays',
        'Historic', 'Holiday Complex', 'Romantic', 'Spa', 'Sports Activities',
        'Tourist Attractions'
    ];

    const suitabilityOptions = [
        'Children Not Allowed', 'Children Welcome', 'Events Allowed', 'Long-term Renters Welcome',
        'Pets Considered', 'Pets Not Allowed', 'Smoking Allowed', 'Smoking Not Allowed', 'Wheelchairs Accessible',
        'Wheelchairs Inaccessible', 'Smoking Allowed Outside'
    ];

    const generateOptions = () => Array.from({ length: 6 }, (_, index) => index); // Opções de 0 a 5

    return (
        <div>
            <div className="amenities-grid">
                <label><strong>Theme: </strong></label>
                {themeOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Theme-${index}`}
                            value={option}
                            {...register("Theme")}
                        />
                        <label htmlFor={`Theme-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <div>
                <label htmlFor="MinimumAgeOfGuest">Minimum Age of Guest: </label>
                <input type="text" id="MinimumAgeOfGuest" {...register("MinimumAgeOfGuest", { required: { value: false, message: 'Minimum Age of Guest is required' } })} />
                <p className='error'>{errors.MinimumAgeOfGuest?.message}</p>
            </div>

            <div>
                <label htmlFor='Memberships'>Any Memberships: </label>
                <textarea id="Memberships" {...register("Memberships", { required: { value: false, message: 'Memberships não pode estar vazia' } })} />
                <p className='error'>{errors.SpecialFeaturesExterior?.message}</p>
            </div>

            <div className="amenities-grid">
                <label><strong>Suitability: </strong></label>
                {suitabilityOptions.map((option, index) => (
                    <div key={index} className="amenity-item"   >
                        <input
                            type="checkbox"
                            id={`Suitability-${index}`}
                            value={option}
                            {...register("Suitability")}
                        />
                        <label htmlFor={`Suitability-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <div>
                <label htmlFor='PropertyRating'><strong>Property Rating: </strong></label>
                <div>
                    <label htmlFor='LocationViews'>Location/Views: </label>
                    <select id="LocationViews" {...register("PropertyRating.LocationViews", { required: { value: false, message: "Location/Views Inserido" } })} >
                        {generateOptions().map(number => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor='DesignLayout'>Design/Layout: </label>
                    <select id="DesignLayout" {...register("PropertyRating.DesignLayout", { required: { value: false, message: "Design/Layout Inserido" } })} >
                        {generateOptions().map(number => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor='QualityFurnishings'>Quality Furnishings: </label>
                    <select id="QualityFurnishings" {...register("PropertyRating.QualityFurnishings", { required: { value: false, message: "Quality Furnishings Inserido" } })} >
                        {generateOptions().map(number => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor='Cleanliness'>Cleanliness: </label>
                    <select id="Cleanliness" {...register("PropertyRating.Cleanliness", { required: { value: false, message: "Cleanliness Inserido" } })} >
                        {generateOptions().map(number => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor='Facilities'>Facilities: </label>
                    <select id="Facilities" {...register("PropertyRating.Facilities", { required: { value: false, message: "Facilities Inserido" } })} >
                        {generateOptions().map(number => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor='OverallRating'>Overall Rating: </label>
                    <select id="OverallRating" {...register("PropertyRating.OverallRating", { required: { value: false, message: "Overall Rating Inserido" } })} >
                        {generateOptions().map(number => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="MinutesNameOfAirport">Minutes To / Name of Airport: </label>
                <input type="text" id="MinutesNameOfAirport" {...register("MinutesNameOfAirport", { required: { value: false, message: 'Minutes To / Name of Airport is required' } })} />
                <p className='error'>{errors.MinutesNameOfAirport?.message}</p>

                <label htmlFor="MinutesNameOfAttaction">Minutes To / Name of Nearest Attraction: </label>
                <input type="text" id="MinutesNameOfAttaction" {...register("MinutesNameOfAttaction", { required: { value: false, message: 'Minutes To / Name of Nearest Attraction is required' } })} />
                <p className='error'>{errors.MinutesNameOfAttaction?.message}</p>

                <label htmlFor="MinutesNameOfVillage">Minutes To/ Name of Nearest Village: </label>
                <input type="text" id="MinutesNameOfVillage" {...register("MinutesNameOfVillage", { required: { value: false, message: 'Minutes To/ Name of Nearest Village is required' } })} />
                <p className='error'>{errors.MinutesNameOfVillage?.message}</p>
            </div>

            <div>
                <label htmlFor='ExplainRatingBelow3'>Explain any Rating Below 3 Stars: </label>
                <textarea id="ExplainRatingBelow3" {...register("ExplainRatingBelow3", { required: { value: false, message: 'Explain any Rating Below 3 Stars não pode estar vazia' } })} />
                <p className='error'>{errors.ExplainRatingBelow3?.message}</p>
            </div>

            <div>
                <label htmlFor='KnowBeforeGo'>Know Before You Go: </label>
                <textarea id="KnowBeforeGo" {...register("KnowBeforeGo", { required: { value: false, message: 'Know Before You Go não pode estar vazia' } })} />
                <p className='error'>{errors.KnowBeforeGo?.message}</p>
            </div>

        </div >
    )
}
