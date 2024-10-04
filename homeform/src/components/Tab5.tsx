import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab5Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab5: React.FC<Tab5Props> = ({ register, errors }) => {

    const generateOptions = () => {
        return Array.from({ length: 101 }, (_, index) => index)
    }

    return (
        <div>
        </div>
    )
}
