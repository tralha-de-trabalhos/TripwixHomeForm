import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormValues } from './Data_types';


interface Form1Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Form1: React.FC<Form1Props> = ({ register, errors }) => {

    const generateOptions = () => {
        return Array.from({ length: 101 }, (_, index) => index);
    };

    return (
        <div>
            <label htmlFor="Ambname">Ambassador Name: </label>
            <input type="text" id="Ambname" {...register("Ambname", { required: { value: true, message: 'Ambassador Name is required' } })} />
            <p className='error'>{errors.Ambname?.message}</p>

            <label htmlFor='TWname'>TW name of property: </label>
            <input type="text" id="TWname" {...register("TWname", { required: { value: true, message: 'Name of property required' } })} />
            <p className='error'>{errors.TWname?.message}</p>

            <label htmlFor='coord'>Geo Coordinates (GPS X; GPS Y): </label>
            <input type="coord" id="coord" {...register("coord", { required: { value: true, message: 'Coordenadas inválidas' } })} />
            <p className='error'>{errors.coord?.message}</p>

            <label htmlFor='ciirusID'>N/A Ciirus ID: </label>
            <input type="ciirusID" id="ciirusID" {...register("ciirusID", { required: { value: true, message: 'ID necessário' } })} />
            <p className='error'>{errors.ciirusID?.message}</p>

            <label htmlFor='RFC'>Property Registration Number / RFC (Spain, Portugal, Mexico): </label>
            <input type="RFC" id="RFC" {...register("RFC", { required: { value: true, message: 'RFC inválido' } })} />
            <p className='error'>{errors.RFC?.message}</p>

            <label htmlFor='NumbofPeople'>Max Number of People: </label>
            <select id="NumbofPeople" {...register("NumbofPeople", { required: { value: false, message: "Número de Pessoas Inserido" } })} >
                {generateOptions().map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>

            <label htmlFor='NumbofBeds'>Number of Bedrooms: </label>
            <select id="NumbofBeds" {...register("NumbofBeds", { required: { value: false, message: "Número de Quartos Inserido" } })} >
                {generateOptions().map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>

            <label htmlFor='NumbofBath'>Number of Bathrooms: </label>
            <select id="NumbofBath" {...register("NumbofBath", { required: { value: false, message: "Número de Casas de Banho Inserido" } })} >
                {generateOptions().map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>

            <label htmlFor='NumbofBath'>Number of 1/2 Bathrooms: </label>
            <select id="NumbofBath" {...register("NumbofBath", { required: { value: false, message: "Número de 1/2 Casas de Banho Inserido" } })} >
                {generateOptions().map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>

            <label htmlFor='PropContName'>Property Contact Name: </label>

            <input type="PropContName" id="PropContName" {...register("PropContName", { required: { value: true, message: 'Nome do Proprietário Necessário' } })} />
            <p className='error'>{errors.PropContName?.message}</p>

            <label htmlFor='TelNumb'>Telephone Number </label>
            <input type="TelNumb" id="TelNumb" {...register("TelNumb", { required: { value: true, message: 'Número de Telefone Necessário' } })} />
            <p className='error'>{errors.TelNumb?.message}</p>

            <label htmlFor='email'>Email: </label>
            <input type="email" id="email" {...register("email", { pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email inválido' } })} />
            <p className='error'>{errors.email?.message}</p>

            <label htmlFor='adress'>Adress: </label>
            <input type="adress" id="adress" {...register("adress", { required: { value: true, message: 'Morada Necessária' } })} />
            <p className='error'>{errors.adress?.message}</p>

            <label htmlFor='NumOfStaff'>Number of staff: </label>
            <input type="NumOfStaff" id="NumOfStaff" {...register("NumOfStaff", { required: { value: true, message: 'Numero de pessoas do Satff necessário' } })} />
            <p className='error'>{errors.NumOfStaff?.message}</p>

            <label>Security: </label>
            <div>
                <input
                    type="checkbox"
                    id="24-7-security"
                    value="24/7 Security"
                    {...register("security")}
                />
                <label htmlFor="24-7-security">24/7 Security</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="gated-community"
                    value="Gated Community"
                    {...register("security")}
                />
                <label htmlFor="gated-community">Gated Community</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="live-in-staff"
                    value="Live in Staff"
                    {...register("security")}
                />
                <label htmlFor="live-in-staff">Live in Staff</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="alarm-system"
                    value="Alarm System"
                    {...register("security")}
                />
                <label htmlFor="alarm-system">Alarm System</label>
            </div>

            <label htmlFor='SizeOfProp'>Size of property: </label>
            <input type="SizeOfProp" id="SizeOfProp" {...register("SizeOfProp", { required: { value: true, message: 'Tamanho da Propriedade necessária' } })} />
            <p className='error'>{errors.SizeOfProp?.message}</p>

            <label htmlFor='SizeOfLot'>Size of lot: </label>
            <input type="SizeOfLot" id="SizeOLot" {...register("SizeOfLot", { required: { value: true, message: 'Tamanho do Lot necessário' } })} />
            <p className='error'>{errors.SizeOfLot?.message}</p>

            <label htmlFor='YearBuilt'>Year built: </label>
            <input type="YearBuilt" id="YearBuilt" {...register("YearBuilt", { required: { value: true, message: 'Ano de Construção necessário' } })} />
            <p className='error'>{errors.YearBuilt?.message}</p>

            <label htmlFor='GarageSpaces'>Garage spaces: </label>
            <select id="GarageSpaces" {...register("GarageSpaces", { required: { value: false, message: "Número de espaços de Garagem" } })} >
                {generateOptions().map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>

            <label htmlFor='ParkingSpaces'>Parking spaces: </label>
            <select id="ParkingSpaces" {...register("ParkingSpaces", { required: { value: false, message: "Número de espaços de Estacionamento" } })} >
                {generateOptions().map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>

            <label htmlFor="category">Category: </label>
            <select id="category" {...register("category", { required: "Category is required" })}>
                <option value="">Select a category</option>
                <option value="Ultra Deluxe">Ultra Deluxe</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Luxe">Luxe</option>
                <option value="Family Find">Family Find</option>
                <option value="Rustic Luxe">Rustic Luxe</option>
                <option value="Vip Retreat">VIP Retreat</option>
                <option value="Stay'n Go">Stay'n Go</option>
            </select>
            <p className='error'>{errors.category?.message}</p>

            <label htmlFor="TypeofProp">Type of Property: </label>
            <select id="TypeofProp" {...register("TypeofProp", { required: "Type of Property is required" })}>
                <option value="">Select a Type of Property</option>
                <option value="Apartment">Apartment</option>
                <option value="Barn">Barn</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Cabin">Cabin</option>
                <option value="Castle">Castle</option>
                <option value="Chalet">Chalet</option>
                <option value="Condo Cottage">Condo Cottage</option>
                <option value="Farm House">Farm House</option>
                <option value="Hotel">Hotel</option>
                <option value="House">House</option>
                <option value="House Boat">House Boat</option>
                <option value="Lodge">Lodge</option>
                <option value="Studio">Studio</option>
                <option value="Townhome">Townhome</option>
                <option value="Undifined">Undifined</option>
                <option value="Villa">Villa</option>
                <option value="Yatch">Yatch</option>
                <option value="Mill">Mill</option>
                <option value="Tree House">Tree House</option>
                <option value="Historic">Historic</option>
            </select>
            <p className='error'>{errors.TypeofProp?.message}</p>

            <label htmlFor='NumbOfFloorsInBuilding'>Number of floors in building (if apartment or condo): </label>
            <select id="NumbOfFloorsInBuilding" {...register("NumbOfFloorsInBuilding", { required: { value: false, message: "Número de andares do edifício" } })} >
                {generateOptions().map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>

            <label htmlFor='NumbOfFloorsInProp'>Number of floors in property: </label>
            <select id="NumbOfFloorsInProp" {...register("NumbOfFloorsInProp", { required: { value: false, message: "Número de andaresd na propriedade" } })} >
                {generateOptions().map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>

            <label htmlFor='GenExtDescrip'>General exterior description: </label>
            <textarea id="GenExtDescrip" {...register("GenExtDescrip", { required: { value: true, message: 'Descrição Geral do Exterior não pode estar vazia' } })} />
            <p className='error'>{errors.GenExtDescrip?.message}</p>

        </div>
    )
}
