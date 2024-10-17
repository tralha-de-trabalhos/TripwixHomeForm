import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';


interface Tab2Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab2: React.FC<Tab2Props> = ({ register, errors }) => {
    return (
        <div className='container'>

            <label htmlFor="RelationshipToProp"><strong>Relationship to Property: </strong></label>
            <select id="RelationshipToProp" {...register("RelationshipToProp", { required: { value: false, message: "Relationship to Property is required" } })}>
                <option value="">Select an Option</option>
                <option value="Owner">Owner</option>
                <option value="Property Manager">Property Manager</option>
                <option value="Real State Agent">Real State Agent</option>
                <option value="Developer">Developer</option>
                <option value="Others">Others</option>
            </select>
            <p className='error'>{errors.RelationshipToProp?.message}</p>

            <label htmlFor="OwnerProfile"><strong>Owner's Profile: </strong></label>
            <select id="OwnerProfile" {...register("OwnerProfile", { required: { value: false, message: "Owner's Profile is required" } })}>
                <option value="">Select an Owner's Profile</option>
                <option value="#1 Super flexible, answer quickly and wants as many rentels as possible">#1 Super flexible, answer quickly and wants as many rentels as possible</option>
                <option value="#2 Are opened to ideas, take longer to answer but   have relatively opended minded">#2 Are opened to ideas, take longer to answer but   have relatively opended minded</option>
                <option value="#3 Inflexible, super strict and slow to answer">#3 Inflexible, super strict and slow to answer</option>
            </select>
            <p className='error'>{errors.OwnerProfile?.message}</p>

        </div>
    )
}
