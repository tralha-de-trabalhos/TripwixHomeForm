import React, { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab8Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab8: React.FC<Tab8Props> = ({ register, errors }) => {
    const [bedrooms, setBedrooms] = useState<{ Bedroom: string }[]>([{ Bedroom: "" }]); // Estado inicial com um quarto

    const addBedroom = () => {
        setBedrooms([...bedrooms, { Bedroom: "" }]); // Adiciona um novo quarto
    };

    const removeBedroom = (index: number) => {
        const updatedBedrooms = bedrooms.filter((_, i) => i !== index);
        setBedrooms(updatedBedrooms);
    };


    const generateOptions = () => {
        return Array.from({ length: 101 }, (_, index) => index);
    };

    return (
        <div>
            {bedrooms.map((bedroom, index) => (
                <div key={index}>
                    <label htmlFor={`Bedroom${index}`}>Bedroom {index + 1}: </label>
                    <select
                        id={`Bedroom${index}`}
                        {...register(`Bedrooms.${index}.Bedroom`, { required: index === 0 ? "At least one bedroom is required" : false })}
                        onChange={(e) => {
                            const updatedBedrooms = [...bedrooms];
                            updatedBedrooms[index].Bedroom = e.target.value;
                            setBedrooms(updatedBedrooms);
                        }}
                    >
                        <option value="">Select a Bedroom Size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
                    </select>
                    <p className='error'>{errors.Bedrooms?.[index]?.Bedroom?.message}</p>

                    <label htmlFor={`RoomName${index}`}>Room name: </label>
                    <input type="text" id={`RoomName${index}`} {...register(`Bedrooms.${index}.RoomName`, { required: { value: true, message: 'Especifique o nome do quarto' } })} />
                    <p className='error'>{errors.Bedrooms?.[index]?.RoomName?.message}</p>

                    <label htmlFor={`Bed${index}`}>Bed: </label>
                    <select
                        id={`Bed${index}`}
                        {...register(`Bedrooms.${index}.Bed`, { required: index === 0 ? "Select a Bed Type" : false })}
                        onChange={(e) => {
                            const updatedBedrooms = [...bedrooms];
                            updatedBedrooms[index].Bedroom = e.target.value;
                            setBedrooms(updatedBedrooms);
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
                    <p className='error'>{errors.Bedrooms?.[index]?.Bedroom?.message}</p>

                    <div>
                        <label htmlFor={`NumOfAditionalBeds${index}`}>Number of additional beds: </label>
                        <select id={`NumOfAditionalBeds${index}`} {...register(`Bedrooms.${index}.NumOfAditionalBeds`, { required: { value: false, message: "Número de Camas Adicionais" } })} >
                            {generateOptions().map(number => (
                                <option key={number} value={number}>{number}</option>
                            ))}
                        </select>
                    </div>




                    <div>
                        <button type="button" onClick={() => removeBedroom(index)}>Remove Bedroom</button>
                    </div>
                </div>
            ))}
            <button type="button" onClick={addBedroom}>Add Bedroom</button>
        </div>
    );
};
