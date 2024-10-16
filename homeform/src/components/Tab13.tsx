import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';


interface Tab13Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}


export const Tab13: React.FC<Tab13Props> = ({ register, errors }) => {

    return (
        <div className='container'>

            <label htmlFor="CuratAmbname">Curator or Amb Responsible for this Form: </label>
            <input type="text" id="CuratAmbname" {...register("CuratAmbname", { required: { value: true, message: 'Curator or Ambassador Name is required' } })} />
            <p className='error'>{errors.CuratAmbname?.message}</p>

            <label htmlFor='InspecDate'>Inspection Date: </label>
            <input type="date" id="InspecDate" {...register("InspecDate", { required: { value: true, message: 'Inspection Date Required' } })} />
            <p className='error'>{errors.InspecDate?.message}</p>

        </div>
    )
}
