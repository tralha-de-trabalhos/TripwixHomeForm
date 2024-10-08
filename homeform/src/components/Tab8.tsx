import React, { useState } from 'react';
import { useForm, FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormValues, Bedroom } from './Data_types';

interface Tab8Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab8: React.FC<Tab8Props> = ({ register, errors }) => {
    const { resetField } = useForm<FormValues>();
    const [bedrooms, setBedrooms] = useState<Bedroom[]>([]); // Começa vazio

    const emptyBedroomState: Bedroom = {
        Bedroom: "",
        RoomName: "",
        Bed: "",
        AdditionalBeds: [],
        BeddingAndLinens: {
            QualityOfLinens: 0,
            QualityOfBedding: 0,
            QualityOfPillow: 0,
            QualityOfMatress: 0,
            QualityOfTowels: 0,
        },
        NumOfAditionalBeds: 0,
        ToiletryBrand: "",
        BedroomAmenities: [],
        Bathroom: [],
        AdditionalNotesBedrooms: "",
        NotesToOwnerBedrooms: "",
    };

    const addBedroom = () => {
        setBedrooms((prev) => [...prev, { ...emptyBedroomState }]);
    };

    const removeLastBedroom = () => {
        setBedrooms((prev) => {
            if (prev.length > 0) {
                const updatedBedrooms = prev.slice(0, -1); // Remove o último quarto
                resetField(`Bedrooms.${prev.length - 1}`); // Resetar os campos do último quarto no formulário
                return updatedBedrooms;
            }
            return prev;
        });
    };

    const generateOptions = () => Array.from({ length: 6 }, (_, index) => index); // Opções de 0 a 5

    const amenitiesOptions = [
        'AC', 'Safe', 'TV', 'Heating', 'Robes', 'WI-FI', 'Fireplace',
        'Slippers', 'Ipod docks', 'Ceiling fans', 'Closet', 'Bluetooth docks',
        'Alarm clocks', 'Walk-in closet', 'CD/DVD Players', 'Curtains',
        'Hair dryer', 'In room phone', 'Shutters', 'Make up mirror',
        'In room fridge', 'Electric shutters', 'Full length mirror',
        'Coffee/Tea station', 'Electric blinds', 'Access to shared patio',
        'Living room', 'Blackout blinds', 'Access to private patio'
    ];

    const bathroomOptions = [
        'AC', 'Heating', 'Ceiling fans', 'Heated floors', 'Unit Amenities', 'Resort amenities', 'Heated towel rails',
        'Access to shared patio', 'Access to private patio', 'Shower', 'Jetted Shower', 'Cubicle Shower',
        'Outdoor Shower', 'Rain head Shower', 'Sink (single)', 'Sink (double)',
        'His & Her WC', 'His & Hers Shower', 'Bathtub', 'Jetted Bath',
        'Cornered Bath', 'Free standing Bath', 'Toilet/Bidet combo',
        'Bath/Shower combo', 'Bidet', 'Jacuzzi',
        'Dressing room'
    ];

    return (
        <div>
            {bedrooms.map((bedroom, index) => (
                <div key={index}>
                    <label htmlFor={`Bedroom${index}`}>Bedroom {index + 1}: </label>
                    <select
                        id={`Bedroom${index}`}
                        {...register(`Bedrooms.${index}.Bedroom`, { required: index === 0 ? "At least one bedroom is required" : false })}
                        onChange={(e) => {
                            setBedrooms(prev => {
                                const updated: Bedroom[] = [...prev]; // Especifica o tipo de `updated`
                                updated[index].Bedroom = e.target.value;
                                return updated;
                            });
                        }}
                    >
                        <option value="">Select a Bedroom Size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
                    </select>
                    <p className='error'>{errors.Bedrooms?.[index]?.Bedroom?.message}</p>

                    <label htmlFor={`RoomName${index}`}>Room Name: </label>
                    <input
                        type="text"
                        id={`RoomName${index}`}
                        {...register(`Bedrooms.${index}.RoomName`, { required: { value: true, message: 'Especifique o nome do quarto' } })}
                        onChange={(e) => {
                            setBedrooms(prev => {
                                const updated: Bedroom[] = [...prev]; // Especifica o tipo de `updated`
                                updated[index].RoomName = e.target.value;
                                return updated;
                            });
                        }}
                    />
                    <p className='error'>{errors.Bedrooms?.[index]?.RoomName?.message}</p>

                    <label htmlFor={`Bed${index}`}>Bed: </label>
                    <select
                        id={`Bed${index}`}
                        {...register(`Bedrooms.${index}.Bed`, { required: index === 0 ? "Select a Bed Type" : false })}
                        onChange={(e) => {
                            setBedrooms(prev => {
                                const updated: Bedroom[] = [...prev]; // Especifica o tipo de `updated`
                                updated[index].Bed = e.target.value;
                                return updated;
                            });
                        }}
                    >
                        <option value="">Select a bed type</option>
                        <option value="California King">California King</option>
                        <option value="Extra Large King">Extra Large King</option>
                        <option value="King">King</option>
                        <option value="Queen">Queen</option>
                        <option value="Double">Double</option>
                        <option value="Twin">Twin</option>
                        <option value="Skinny Twin">Skinny Twin</option>
                        <option value="Trundle">Trundle</option>
                        <option value="Bunk">Bunk</option>
                        <option value="Sofa Bed">Sofa Bed</option>
                    </select>
                    <p className='error'>{errors.Bedrooms?.[index]?.Bed?.message}</p>

                    <div>
                        <label htmlFor={`NumOfAditionalBeds${index}`}>Number of Additional Beds: </label>
                        <select
                            id={`NumOfAditionalBeds${index}`}
                            {...register(`Bedrooms.${index}.NumOfAditionalBeds`)}
                            onChange={(e) => {
                                const numberOfBeds = Number(e.target.value);
                                setBedrooms(prev => {
                                    const updated: Bedroom[] = [...prev]; // Especifica o tipo de `updated`
                                    updated[index].NumOfAditionalBeds = numberOfBeds;

                                    // Se o número de camas adicionais mudar, redefina o array de camas adicionais
                                    updated[index].AdditionalBeds = new Array(numberOfBeds).fill(""); // Inicializa o array com string vazia
                                    return updated;
                                });
                            }}
                        >
                            {generateOptions().map(number => (
                                <option key={number} value={number}>{number}</option>
                            ))}
                        </select>
                    </div>

                    {/* Renderizando campos de camas adicionais com base no número selecionado */}
                    {bedroom.NumOfAditionalBeds > 0 && (
                        <div>
                            {Array.from({ length: bedroom.NumOfAditionalBeds }).map((_, bedIndex) => (
                                <div key={bedIndex}>
                                    <label htmlFor={`AdditionalBed${index}_${bedIndex}`}>Additional Bed {bedIndex + 1}: </label>
                                    <select
                                        id={`AdditionalBed${index}_${bedIndex}`}
                                        {...register(`Bedrooms.${index}.AdditionalBeds.${bedIndex}`, { required: "Select a Bed Type" })} // registro único para cada cama adicional
                                        onChange={(e) => {
                                            setBedrooms(prev => {
                                                const updated: Bedroom[] = [...prev];
                                                updated[index].AdditionalBeds[bedIndex] = e.target.value; // Atualiza a cama específica
                                                return updated;
                                            });
                                        }}
                                    >
                                        <option value="">Select a bed type</option>
                                        <option value="California King">California King</option>
                                        <option value="Extra Large King">Extra Large King</option>
                                        <option value="King">King</option>
                                        <option value="Queen">Queen</option>
                                        <option value="Double">Double</option>
                                        <option value="Twin">Twin</option>
                                        <option value="Skinny Twin">Skinny Twin</option>
                                        <option value="Trundle">Trundle</option>
                                        <option value="Bunk">Bunk</option>
                                        <option value="Sofa Bed">Sofa Bed</option>
                                    </select>
                                    <p className='error'>{errors.Bedrooms?.[index]?.AdditionalBeds?.[bedIndex]?.message}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div>
                        <label htmlFor={`BeddingAndLinens${index}`}><strong>Bedding and linens: </strong></label>
                        <div>
                            <label>Quality of Linens: </label>
                            <select
                                id={`QualityOfLinens${index}`}
                                {...register(`Bedrooms.${index}.BeddingAndLinens.QualityOfLinens`)}
                                onChange={(e) => {
                                    setBedrooms(prev => {
                                        const updated: Bedroom[] = [...prev];
                                        updated[index].BeddingAndLinens.QualityOfLinens = Number(e.target.value);
                                        return updated;
                                    });
                                }}
                            >
                                {generateOptions().map(number => (
                                    <option key={number} value={number}>{number}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Quality of Bedding: </label>
                            <select
                                id={`QualityOfBedding${index}`}
                                {...register(`Bedrooms.${index}.BeddingAndLinens.QualityOfBedding`)}
                                onChange={(e) => {
                                    setBedrooms(prev => {
                                        const updated: Bedroom[] = [...prev];
                                        updated[index].BeddingAndLinens.QualityOfBedding = Number(e.target.value);
                                        return updated;
                                    });
                                }}
                            >
                                {generateOptions().map(number => (
                                    <option key={number} value={number}>{number}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Quality of Pillow: </label>
                            <select
                                id={`QualityOfPillow${index}`}
                                {...register(`Bedrooms.${index}.BeddingAndLinens.QualityOfPillow`)}
                                onChange={(e) => {
                                    setBedrooms(prev => {
                                        const updated: Bedroom[] = [...prev];
                                        updated[index].BeddingAndLinens.QualityOfPillow = Number(e.target.value);
                                        return updated;
                                    });
                                }}
                            >
                                {generateOptions().map(number => (
                                    <option key={number} value={number}>{number}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Quality of Mattress: </label>
                            <select
                                id={`QualityOfMatress${index}`}
                                {...register(`Bedrooms.${index}.BeddingAndLinens.QualityOfMatress`)}
                                onChange={(e) => {
                                    setBedrooms(prev => {
                                        const updated: Bedroom[] = [...prev];
                                        updated[index].BeddingAndLinens.QualityOfMatress = Number(e.target.value);
                                        return updated;
                                    });
                                }}
                            >
                                {generateOptions().map(number => (
                                    <option key={number} value={number}>{number}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Quality of Towels: </label>
                            <select
                                id={`QualityOfTowels${index}`}
                                {...register(`Bedrooms.${index}.BeddingAndLinens.QualityOfTowels`)}
                                onChange={(e) => {
                                    setBedrooms(prev => {
                                        const updated: Bedroom[] = [...prev];
                                        updated[index].BeddingAndLinens.QualityOfTowels = Number(e.target.value);
                                        return updated;
                                    });
                                }}
                            >
                                {generateOptions().map(number => (
                                    <option key={number} value={number}>{number}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor={`ToiletryBrand${index}`}>Toiletry Brand: </label>
                        <input
                            type="text"
                            id={`ToiletryBrand${index}`}
                            {...register(`Bedrooms.${index}.ToiletryBrand`)}
                            onChange={(e) => {
                                setBedrooms(prev => {
                                    const updated = [...prev];
                                    updated[index].ToiletryBrand = e.target.value;
                                    return updated;
                                });
                            }}
                        />
                    </div>

                    <div className="amenities-grid">
                        <label>Bedroom Amenities: </label>
                        {amenitiesOptions.map(amenity => (
                            <div key={amenity} className="amenity-item">
                                <input
                                    type="checkbox"
                                    id={`${amenity}${index}`}
                                    {...register(`Bedrooms.${index}.BedroomAmenities`)}
                                    value={amenity}
                                    onChange={(e) => {
                                        setBedrooms(prev => {
                                            const updated = [...prev];
                                            const amenities = updated[index].BedroomAmenities || [];
                                            if (e.target.checked) {
                                                amenities.push(e.target.value);
                                            } else {
                                                const indexToRemove = amenities.indexOf(e.target.value);
                                                if (indexToRemove > -1) {
                                                    amenities.splice(indexToRemove, 1);
                                                }
                                            }
                                            updated[index].BedroomAmenities = amenities;
                                            return updated;
                                        });
                                    }}
                                />
                                <label htmlFor={`${amenity}${index}`}>{amenity}</label>
                            </div>
                        ))}
                    </div>

                    <div className="amenities-grid">
                        <label>Bathroom: </label>
                        {bathroomOptions.map(bathroom => (
                            <div key={bathroom} className="amenity-item">
                                <input
                                    type="checkbox"
                                    id={`${bathroom}${index}`}
                                    {...register(`Bedrooms.${index}.Bathroom`)}
                                    value={bathroom}
                                    onChange={(e) => {
                                        setBedrooms(prev => {
                                            const updated = [...prev];
                                            const amenities = updated[index].Bathroom || [];
                                            if (e.target.checked) {
                                                amenities.push(e.target.value);
                                            } else {
                                                const indexToRemove = amenities.indexOf(e.target.value);
                                                if (indexToRemove > -1) {
                                                    amenities.splice(indexToRemove, 1);
                                                }
                                            }
                                            updated[index].Bathroom = amenities;
                                            return updated;
                                        });
                                    }}
                                />
                                <label htmlFor={`${bathroom}${index}`}>{bathroom}</label>
                            </div>
                        ))}
                    </div>

                    <div>
                        <label htmlFor={`AdditionalNotesBedrooms${index}`}>Additional Notes for Bedrooms: </label>
                        <textarea
                            id={`AdditionalNotesBedrooms${index}`}
                            {...register(`Bedrooms.${index}.AdditionalNotesBedrooms`)}
                            onChange={(e) => {
                                setBedrooms(prev => {
                                    const updated: Bedroom[] = [...prev];
                                    updated[index].AdditionalNotesBedrooms = e.target.value;
                                    return updated;
                                });
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor={`NotesToOwnerBedrooms${index}`}>Notes to Owner Bedrooms: </label>
                        <textarea
                            id={`NotesToOwnerBedrooms${index}`}
                            {...register(`Bedrooms.${index}.NotesToOwnerBedrooms`)}
                            onChange={(e) => {
                                setBedrooms(prev => {
                                    const updated: Bedroom[] = [...prev];
                                    updated[index].NotesToOwnerBedrooms = e.target.value;
                                    return updated;
                                });
                            }}
                        />
                    </div>
                </div>
            ))}
            <button type="button" onClick={addBedroom}>Add Bedroom</button>
            <button type="button" onClick={removeLastBedroom}>Remove Bedroom</button>
        </div>
    );
};
