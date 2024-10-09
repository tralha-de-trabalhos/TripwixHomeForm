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
