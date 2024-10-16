import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from './Data_types';

interface Tab3Props {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const Tab3: React.FC<Tab3Props> = ({ register, errors }) => {

    return (
        <div className='container'>

            <div>
                <label><strong>Channel Partners Where is Listed: </strong></label>
                <div>
                    <input
                        type="checkbox"
                        id="VRBO"
                        value="VRBO"
                        {...register("ChannelPartnerListed")}
                    />
                    <label htmlFor="VRBO">VRBO</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Homeaway"
                        value="Homeaway"
                        {...register("ChannelPartnerListed")}
                    />
                    <label htmlFor="Homeaway">Homeaway</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Flipkey"
                        value="Flipkey"
                        {...register("ChannelPartnerListed")}
                    />
                    <label htmlFor="Flipkey">Flipkey</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Bookingcom"
                        value="Booking.com"
                        {...register("ChannelPartnerListed")}
                    />
                    <label htmlFor="Booking.com">Booking.com</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="AirBB"
                        value="AirB&B"
                        {...register("ChannelPartnerListed")}
                    />
                    <label htmlFor="AirB&B">AirB&B</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Tripadvisor"
                        value="Tripadvisor"
                        {...register("ChannelPartnerListed")}
                    />
                    <label htmlFor="Tripadvisor">Tripadvisor</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Trivago"
                        value="Trivago"
                        {...register("ChannelPartnerListed")}
                    />
                    <label htmlFor="Trivago">Trivago</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="LuxuryRetreats"
                        value="Luxury Retreats"
                        {...register("ChannelPartnerListed")}
                    />
                    <label htmlFor="LuxuryRetreats">Luxury Retreats</label>
                </div>
            </div>

            <div>
                <label htmlFor='PlacesWhereHouseMarketed'><strong>Places Where the House is Already Marketed: </strong></label>
                <input type="PlacesWhereHouseMarketed" id="PlacesWhereHouseMarketed" {...register("PlacesWhereHouseMarketed", { required: { value: false, message: 'Places where House is Marketed necessária' } })} />
                <p className='error'>{errors.PlacesWhereHouseMarketed?.message}</p>

                <label htmlFor='Website'><strong>Website Internet Address (When Exists): </strong></label>
                <input type="Website" id="Website" {...register("Website")} />
            </div>

            <div>
                <label htmlFor='ExpectedRates'><strong>Expected Rates to Owner (Without TW Commission): </strong></label>
                <textarea id="ExpectedRates" {...register("ExpectedRates", { required: { value: false, message: 'Expected Rates to Ownernão pode estar vazia' } })} />
                <p className='error'>{errors.ExpectedRates?.message}</p>
            </div>

        </div>
    )
}
