import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab6Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab6: React.FC<Tab6Props> = ({ register, errors }) => {

    const generateOptions = () => {
        return Array.from({ length: 101 }, (_, index) => index)
    }

    return (
        <div>
        </div>
    )
}
