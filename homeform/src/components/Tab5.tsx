import React from 'react';
import { UseFormRegister, FieldErrors, useWatch, Control } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab5Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
    control: Control<FormValues>; // Control para usar com useWatch
}

export const Tab5: React.FC<Tab5Props> = ({ register, errors, control }) => {

    const localServicesBusinessesOptions = [
        'ATM/Bank', 'Babysitting', 'Fitness Center', 'Groceries',
        'Hospitals', 'Laundromat', 'Massage Therapist', 'Medical Services'
    ];

    const safetyFeaturesOptions = [
        'First Aid Kit', 'Smoke Detector', 'Fire Extinguisher', 'Carbon-Monoxide Detector'
    ];

    const accessibilityFeaturesOptions = [
        'Step-free Access to Home', 'Flat Path to Front Door', 'Step-free Access to Bedroom', 'Wide Clearance to Bed', 'Mobile Hoist',
        'Wide Doorway', 'Wide Clear Hallway', 'Wheelchair Width Elevator', 'Electric Profiling Bed', 'Disabled Parking Spot',
        'Pool with Pool Hoist', 'Other'
    ];

    // Observar o valor de "AccessibilityFeatures" para saber se "Other" foi selecionado
    const accessibilityFeatures = useWatch({
        control,
        name: 'AccessibilityFeatures', // O campo a ser observado
    });

    // Verifica se a opção "Other" está selecionada
    const isOtherSelected = accessibilityFeatures?.includes('Other');

    return (
        <div>

            <label><strong>Meals: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Guests Furnish Own"
                    value="Guests Furnish Own"
                    {...register("Meals")}
                />
                <label htmlFor="Guests Furnish Own">Guests Furnish Own</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Catering Available"
                    value="Catering Available"
                    {...register("Meals")}
                />
                <label htmlFor="Catering Available">Catering Available</label>
            </div>

            <label><strong>Breakfast: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Not Available"
                    value="Not Available"
                    {...register("Breakfast")}
                />
                <label htmlFor="Not available">Not Available</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Booking Possible"
                    value="Booking Possible"
                    {...register("Breakfast")}
                />
                <label htmlFor="Booking Possible">Booking Possible</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Included in Price"
                    value="Included in Price"
                    {...register("Breakfast")}
                />
                <label htmlFor="Included in Price">Included in Price</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Preparation Included"
                    value="Preparation Included"
                    {...register("Breakfast")}
                />
                <label htmlFor="Preparation Included">Preparation Included</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Prep + Food Included"
                    value="Prep + Food Included"
                    {...register("Breakfast")}
                />
                <label htmlFor="Prep + Food Included">Prep + Food Included</label>
            </div>

            <label><strong>Lunch: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Not Available"
                    value="Not Available"
                    {...register("Lunch")}
                />
                <label htmlFor="Not Svailable">Not Available</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Booking Possible"
                    value="Booking Possible"
                    {...register("Lunch")}
                />
                <label htmlFor="Booking Possible">Booking Possible</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Included in Price"
                    value="Included in Price"
                    {...register("Lunch")}
                />
                <label htmlFor="Included in Price">Included in Price</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Preparation Included"
                    value="Preparation Included"
                    {...register("Lunch")}
                />
                <label htmlFor="Preparation Included">Preparation Included</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Prep + Food Included"
                    value="Prep + Food Included"
                    {...register("Lunch")}
                />
                <label htmlFor="Prep + Food Included">Prep + Food Included</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Choice Lunch or Dinner"
                    value="Choice Lunch or Dinner"
                    {...register("Lunch")}
                />
                <label htmlFor="Choice Lunch or Dinner">Choice Lunch or Dinner</label>
            </div>

            <label><strong>Dinner: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Not Available"
                    value="Not Available"
                    {...register("Dinner")}
                />
                <label htmlFor="Not Svailable">Not Available</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Booking Possible"
                    value="Booking Possible"
                    {...register("Dinner")}
                />
                <label htmlFor="Booking Possible">Booking Possible</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Included in Price"
                    value="Included in Price"
                    {...register("Dinner")}
                />
                <label htmlFor="Included in Price">Included in Price</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Preparation Included"
                    value="Preparation Included"
                    {...register("Dinner")}
                />
                <label htmlFor="Preparation Included">Preparation Included</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Prep + Food Included"
                    value="Prep + Food Included"
                    {...register("Dinner")}
                />
                <label htmlFor="Prep + Food Included">Prep + Food Included</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Choice Lunch or Dinner"
                    value="Choice Lunch or Dinner"
                    {...register("Dinner")}
                />
                <label htmlFor="Choice Lunch or Dinner">Choice Lunch or Dinner</label>
            </div>

            <label htmlFor="BreakfastServiceIncluded">Breakfast Service Included: </label>
            <select id="BreakfastServiceIncluded" {...register("BreakfastServiceIncluded", { required: { value: false, message: "Breakfast Service Included is required" } })}>
                <option value="">Select an Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <p className='error'>{errors.BreakfastServiceIncluded?.message}</p>

            <label htmlFor="SnackServiceIncluded">Snack Service Included: </label>
            <select id="SnackServiceIncluded" {...register("SnackServiceIncluded", { required: { value: false, message: "Snack Service Included is required" } })}>
                <option value="">Select an Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <p className='error'>{errors.SnackServiceIncluded?.message}</p>

            <label><strong>Upon Arrival: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Water"
                    value="Water"
                    {...register("UponArrival")}
                />
                <label htmlFor="Water">Water</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Welcome Cocktail/Snacks"
                    value="Welcome Cocktail/Snacks"
                    {...register("UponArrival")}
                />
                <label htmlFor="Welcome Cocktail/Snacks">Welcome Cocktail/Snacks</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Welcome Meal"
                    value="Welcome Meal"
                    {...register("UponArrival")}
                />
                <label htmlFor="Welcome Meal">Welcome Meal</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Welcome Hamper"
                    value="Welcome Hamper"
                    {...register("UponArrival")}
                />
                <label htmlFor="Welcome Hamper">Welcome Hamper</label>
            </div>

            <label><strong>House Cleaning: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Included"
                    value="Included"
                    {...register("HouseCleaning")}
                />
                <label htmlFor="Included">Included</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Optional"
                    value="Optional"
                    {...register("HouseCleaning")}
                />
                <label htmlFor="Optional">Optional</label>
            </div>

            <label htmlFor="SnackServiceIncluded">Cleaning Frequency: </label>
            <select id="CleaningFrequency" {...register("CleaningFrequency", { required: { value: false, message: "Cleaning Frequency is required" } })}>
                <option value="">Select an Option</option>
                <option value="Everyday">Everyday</option>
                <option value="Every 3 Days">Every 3 Days</option>
                <option value="Once a Week">Once a Week</option>
            </select>
            <p className='error'>{errors.CleaningFrequency?.message}</p>

            <label htmlFor="SnackServiceIncluded">Changes of Sheets and Linens Frquency: </label>
            <select id="ChangesOfSheetFrquency" {...register("ChangesOfSheetFrquency", { required: { value: false, message: "Changes of Sheets and Linens Frquency is required" } })}>
                <option value="">Select an Option</option>
                <option value="Everyday">Everyday</option>
                <option value="Every 3 Days">Every 3 Days</option>
                <option value="Once a Week">Once a Week</option>
            </select>
            <p className='error'>{errors.ChangesOfSheetFrquency?.message}</p>

            <label><strong>Child Facilities: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Child Proofing Pool"
                    value="Child Proofing Pool"
                    {...register("ChildFacilities")}
                />
                <label htmlFor="Child Proofing Pool">Child Proofing Pool</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Crib/Cot"
                    value="Crib/Cot"
                    {...register("ChildFacilities")}
                />
                <label htmlFor="Crib/Cot">Crib/Cot</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="High Chair"
                    value="High Chair"
                    {...register("ChildFacilities")}
                />
                <label htmlFor="High Chair">High Chair</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Pack n Play"
                    value="Pack n Play"
                    {...register("ChildFacilities")}
                />
                <label htmlFor="Pack n Play">Pack n Play</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Stroller/Pushchair"
                    value="Stroller/Pushchair"
                    {...register("ChildFacilities")}
                />
                <label htmlFor="Stroller/Pushchair">Stroller/Pushchair</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Toys"
                    value="Toys"
                    {...register("ChildFacilities")}
                />
                <label htmlFor="Toys">Toys</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Rollaway Bed"
                    value="Rollaway Bed"
                    {...register("ChildFacilities")}
                />
                <label htmlFor="Rollaway Bed">Rollaway Bed</label>
            </div>

            <label><strong>Services Available: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Car Available"
                    value="Car Available"
                    {...register("ServicesAvailable")}
                />
                <label htmlFor="Car Available">Car Available</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Chauffeur"
                    value="Chauffeur"
                    {...register("ServicesAvailable")}
                />
                <label htmlFor="Chauffeur">Chauffeur</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Concierge"
                    value="Concierge"
                    {...register("ServicesAvailable")}
                />
                <label htmlFor="Concierge">Concierge</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Laundry in Unit"
                    value="Laundry in Unit"
                    {...register("ServicesAvailable")}
                />
                <label htmlFor="Laundry in Unit">Laundry in Unit</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Laundry On-Site"
                    value="Laundry On-Site"
                    {...register("ServicesAvailable")}
                />
                <label htmlFor="Laundry On-Site">Laundry On-Site</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Massage"
                    value="Massage"
                    {...register("ServicesAvailable")}
                />
                <label htmlFor="Massage">Massage</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Private Chef"
                    value="Private Chef"
                    {...register("ServicesAvailable")}
                />
                <label htmlFor="Private Chef">Private Chef</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Waitstaff"
                    value="Waitstaff"
                    {...register("ServicesAvailable")}
                />
                <label htmlFor="Waitstaff">Waitstaff</label>
            </div>

            <label><strong>Services Included: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Car Available"
                    value="Car Available"
                    {...register("ServicesIncluded")}
                />
                <label htmlFor="Car Available">Car Available</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Chauffeur"
                    value="Chauffeur"
                    {...register("ServicesIncluded")}
                />
                <label htmlFor="Chauffeur">Chauffeur</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Concierge"
                    value="Concierge"
                    {...register("ServicesIncluded")}
                />
                <label htmlFor="Concierge">Concierge</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Laundry in Unit"
                    value="Laundry in Unit"
                    {...register("ServicesIncluded")}
                />
                <label htmlFor="Laundry in Unit">Laundry in Unit</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Laundry On-Site"
                    value="Laundry On-Site"
                    {...register("ServicesIncluded")}
                />
                <label htmlFor="Laundry On-Site">Laundry On-Site</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Massage"
                    value="Massage"
                    {...register("ServicesIncluded")}
                />
                <label htmlFor="Massage">Massage</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Private Chef"
                    value="Private Chef"
                    {...register("ServicesIncluded")}
                />
                <label htmlFor="Private Chef">Private Chef</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Waitstaff"
                    value="Waitstaff"
                    {...register("ServicesIncluded")}
                />
                <label htmlFor="Waitstaff">Waitstaff</label>
            </div>

            <label><strong>Car: </strong></label>
            <div>
                <input
                    type="checkbox"
                    id="Necessary"
                    value="Necessary"
                    {...register("Car")}
                />
                <label htmlFor="Necessary">Necessary</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Recommended"
                    value="Recommended"
                    {...register("Car")}
                />
                <label htmlFor="Recommended">Recommended</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Not Necessary"
                    value="Not Necessary"
                    {...register("Car")}
                />
                <label htmlFor="Not Necessary">Not Necessary</label>
            </div>

            <div>
                <label htmlFor='AdditionalCosts'>Any Additional Costs: </label>
                <textarea id="AdditionalCosts" {...register("AdditionalCosts", { required: { value: false, message: 'Additional Costs não pode estar vazia' } })} />
                <p className='error'>{errors.AdditionalCosts?.message}</p>
            </div>

            <div className="amenities-grid">
                <label><strong>Local Services & Businesses: </strong></label>
                {localServicesBusinessesOptions.map((option, index) => (
                    <div key={index} className="amenity-item">
                        <input
                            type="checkbox"
                            id={`LocalServicesBusinesses-${index}`}
                            value={option}
                            {...register("LocalServicesBusinesses")}
                        />
                        <label htmlFor={`LocalServicesBusinesses-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <div className="amenities-grid">
                <label><strong>Safety Features: </strong></label>
                {safetyFeaturesOptions.map((option, index) => (
                    <div key={index} className="amenity-item">
                        <input
                            type="checkbox"
                            id={`SafetyFeatures-${index}`}
                            value={option}
                            {...register("SafetyFeatures")}
                        />
                        <label htmlFor={`SafetyFeatures-${index}`}>{option}</label>
                    </div>
                ))}
            </div>

            <div className="amenities-grid">
                <label><strong>Accessibility Features: </strong></label>
                {accessibilityFeaturesOptions.map((option, index) => (
                    <div key={index} className="amenity-item">
                        <input
                            type="checkbox"
                            id={`AccessibilityFeatures-${index}`}
                            value={option}
                            {...register("AccessibilityFeatures")}
                        />
                        <label htmlFor={`AccessibilityFeatures-${index}`}>{option}</label>
                    </div>
                ))}

                {/* Campo de texto só é mostrado se "Other" estiver selecionado */}
                {isOtherSelected && (
                    <div>
                        <label htmlFor="otherAccessibilityFeature">Please specify:</label>
                        <input
                            type="text"
                            id="otherAccessibilityFeature"
                            {...register("OtherAccessibilityFeature")} // Regista o valor no form
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
