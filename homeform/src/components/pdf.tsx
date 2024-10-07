import React from 'react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver'; // Para o download do PDF
import { FormValues } from './Data_types';

// Estilos para o PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#E4E4E4',
        fontSize: 12,
        color: '#333',
    },
    section: {
        marginBottom: 10,
        padding: 10,
        border: '1px solid #000',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    label: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        color: '#0056b3',
        marginBottom: 5,
    },
    value: {
        fontSize: 12,
        color: '#000',
        marginBottom: 10,
    },
    tab: {
        fontSize: 15,
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold',
    }
});


const MyDocument = ({ formValues }: { formValues: FormValues }) => {
    // Converta a string para objeto Date se for string
    const inspectionDate = typeof formValues.InspecDate === 'string'
        ? new Date(formValues.InspecDate)
        : formValues.InspecDate;

    // Verifique se 'Security' é um array e, se não for, usa um array vazio
    const securityValues = Array.isArray(formValues.Security) ? formValues.Security : [];
    // Verifique se 'Channel Partner Listed Values' é um array e, se não for, usa um array vazio
    const channelPartnerListedValues = Array.isArray(formValues.ChannelPartnerListed) ? formValues.ChannelPartnerListed : [];
    const bedrooms = Array.isArray(formValues.Bedrooms) ? formValues.Bedrooms : [];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {/* Tab1 - House Walkthrough Form */}
                    <Text style={styles.tab}>House Walkthrough Form</Text>

                    <Text style={styles.label}>Ambassador Name:</Text>
                    <Text style={styles.value}>{formValues.Ambname}</Text>

                    <Text style={styles.label}>TW Name:</Text>
                    <Text style={styles.value}>{formValues.TWname}</Text>

                    <Text style={styles.label}>Coord:</Text>
                    <Text style={styles.value}>{formValues.Coord}</Text>

                    <Text style={styles.label}>Ciirus ID:</Text>
                    <Text style={styles.value}>{formValues.CiirusID}</Text>

                    <Text style={styles.label}>RFC:</Text>
                    <Text style={styles.value}>{formValues.RFC}</Text>

                    <Text style={styles.label}>Number of People:</Text>
                    <Text style={styles.value}>{formValues.NumbOfPeople}</Text>

                    <Text style={styles.label}>Number of Beds:</Text>
                    <Text style={styles.value}>{formValues.NumbOfBeds}</Text>

                    <Text style={styles.label}>Number of Bathrooms:</Text>
                    <Text style={styles.value}>{formValues.NumbOfBath}</Text>

                    <Text style={styles.label}>Property Contact Name:</Text>
                    <Text style={styles.value}>{formValues.PropContName}</Text>

                    <Text style={styles.label}>Telephone Number:</Text>
                    <Text style={styles.value}>{formValues.TelNumb}</Text>

                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{formValues.Email}</Text>

                    <Text style={styles.label}>Address:</Text>
                    <Text style={styles.value}>{formValues.Adress}</Text>

                    <Text style={styles.label}>Number of Staff:</Text>
                    <Text style={styles.value}>{formValues.NumOfStaff}</Text>

                    <Text style={styles.label}>Security:</Text>
                    <Text style={styles.value}>{securityValues.join(', ') || ''}</Text>

                    <Text style={styles.label}>Size of Property:</Text>
                    <Text style={styles.value}>{formValues.SizeOfProp}</Text>

                    <Text style={styles.label}>Size of Lot:</Text>
                    <Text style={styles.value}>{formValues.SizeOfLot}</Text>

                    <Text style={styles.label}>Year Built:</Text>
                    <Text style={styles.value}>{formValues.YearBuilt}</Text>

                    <Text style={styles.label}>Garage Spaces:</Text>
                    <Text style={styles.value}>{formValues.GarageSpaces}</Text>

                    <Text style={styles.label}>Parking Spaces:</Text>
                    <Text style={styles.value}>{formValues.ParkingSpaces}</Text>

                    <Text style={styles.label}>Category:</Text>
                    <Text style={styles.value}>{formValues.Category}</Text>

                    <Text style={styles.label}>Type of Property:</Text>
                    <Text style={styles.value}>{formValues.TypeOfProp}</Text>

                    <Text style={styles.label}>Number of Floors in Building:</Text>
                    <Text style={styles.value}>{formValues.NumbOfFloorsInBuilding}</Text>

                    <Text style={styles.label}>Number of Floors in Property:</Text>
                    <Text style={styles.value}>{formValues.NumbOfFloorsInProp}</Text>

                    <Text style={styles.label}>General Exterior Description:</Text>
                    <Text style={styles.value}>{formValues.GenExtDescrip}</Text>

                    {/* Tab2 - Owner Overview */}
                    <Text style={styles.tab}>Owner Overview</Text>

                    <Text style={styles.label}>Relationship to Property:</Text>
                    <Text style={styles.value}>{formValues.RelationshipToProp}</Text>

                    <Text style={styles.label}>Owner Profile:</Text>
                    <Text style={styles.value}>{formValues.OwnerProfile}</Text>

                    {/* Tab3 - Property Commercial Overview */}
                    <Text style={styles.tab}>Property Commercial Overview</Text>

                    <Text style={styles.label}>Channel Partnes Where is Listed:</Text>
                    <Text style={styles.value}>{channelPartnerListedValues.join(', ') || ''}</Text>

                    <Text style={styles.label}>Places where the house is already marketed:</Text>
                    <Text style={styles.value}>{formValues.PlacesWhereHouseMarketed}</Text>

                    <Text style={styles.label}>Website internet address (when exists):</Text>
                    <Text style={styles.value}>{formValues.Website}</Text>

                    <Text style={styles.label}>Expected Rates to Owner (Without TW Commission):</Text>
                    <Text style={styles.value}>{formValues.ExpectedRates}</Text>

                    {/* Tab4 - Property Overview */}
                    <Text style={styles.tab}>Property Overview</Text>


                    {/* Tab5 - Services & Features */}
                    <Text style={styles.tab}>Services & Features</Text>


                    {/* Tab6 - Interiror */}
                    <Text style={styles.tab}>Interiror</Text>


                    {/* Tab7 - Exteriror */}
                    <Text style={styles.tab}>Exteriror</Text>


                    {/* Tab8 - Bedrooms */}
                    <Text style={styles.tab}>Bedrooms</Text>
                    {bedrooms.length > 0 ? (

                        bedrooms.map((bedroom, index) => (
                            <View key={index}>
                                <Text style={styles.label}>Bedroom {index + 1}:</Text>
                                <Text style={styles.value}>{bedroom.Bedroom}</Text>

                                <Text style={styles.label}>Room Name:</Text>
                                <Text style={styles.value}>{bedroom.RoomName}</Text>

                                <Text style={styles.label}>Bed:</Text>
                                <Text style={styles.value}>{bedroom.Bed}</Text>

                                <Text style={styles.label}>Number of Additional Beds:</Text>
                                <Text style={styles.value}>{bedroom.NumOfAditionalBeds}</Text>

                                <Text style={styles.label}>Bedding and Linens:</Text>
                                <Text style={styles.label}>Quality of Linens:</Text>
                                <Text style={styles.value}>{bedroom.BeddingAndLinens.QualityOfLinens}</Text>
                                <Text style={styles.label}>Quality of Bedding:</Text>
                                <Text style={styles.value}>{bedroom.BeddingAndLinens.QualityOfBedding}</Text>
                                <Text style={styles.label}>Quality of Pillow:</Text>
                                <Text style={styles.value}>{bedroom.BeddingAndLinens.QualityOfPillow}</Text>
                                <Text style={styles.label}>Quality of Mattress:</Text>
                                <Text style={styles.value}>{bedroom.BeddingAndLinens.QualityOfMatress}</Text>
                                <Text style={styles.label}>Quality of Towels:</Text>
                                <Text style={styles.value}>{bedroom.BeddingAndLinens.QualityOfTowels}</Text>

                                <Text style={styles.label}>Toiletry Brand:</Text>
                                <Text style={styles.value}>{bedroom.ToiletryBrand}</Text>

                                <Text style={styles.label}>Bedroom Amenities:</Text>
                                <Text style={styles.value}>{bedroom.BedroomAmenities}</Text>

                                <Text style={styles.label}>Bathroom:</Text>
                                <Text style={styles.value}>{bedroom.Bathroom}</Text>

                                <Text style={styles.label}>Additional Notes:</Text>
                                <Text style={styles.value}>{bedroom.AdditionalNotesBedrooms}</Text>

                                <Text style={styles.label}>Notes to Owner ( internal use only):</Text>
                                <Text style={styles.value}>{bedroom.NotesToOwnerBedrooms}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.value}>No rooms were added.</Text>
                    )}

                    {/* Tab9 - Amenities */}
                    <Text style={styles.tab}>Amenities</Text>


                    {/* Tab10 - Attractions */}
                    <Text style={styles.tab}>Attractions</Text>


                    {/* Tab11 - Sports */}
                    <Text style={styles.tab}>Sports</Text>


                    {/* Tab12 - Experiences */}
                    <Text style={styles.tab}>Experiences</Text>


                    {/* Tab13 - Validation */}
                    <Text style={styles.tab}>Validation</Text>

                    <Text style={styles.label}>Curator or Ambassador Name:</Text>
                    <Text style={styles.value}>{formValues.CuratAmbname}</Text>

                    <Text style={styles.label}>Inspection Date:</Text>
                    <Text style={styles.value}>{inspectionDate.toLocaleDateString()}</Text>
                </View>
            </Page>
        </Document >
    );
};

// Função para criar o PDF
// Função para criar o PDF e retornar um Blob
export const createPdf = async (formValues: FormValues) => {
    const blob = await pdf(<MyDocument formValues={formValues} />).toBlob();
    return blob; // Retorne o Blob do PDF
};
