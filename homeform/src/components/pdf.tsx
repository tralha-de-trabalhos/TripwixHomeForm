import React from 'react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver'; // Para o download do PDF
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
});

const MyDocument = ({ formValues }: { formValues: FormValues }) => {
    // Converta a string para objeto Date se for string
    const inspectionDate = typeof formValues.InspecDate === 'string'
        ? new Date(formValues.InspecDate)
        : formValues.InspecDate;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {/* Tab1 */}
                    <Text style={styles.label}>Ambassador Name:</Text>
                    <Text style={styles.value}>{formValues.Ambname}</Text>

                    <Text style={styles.label}>TW Name:</Text>
                    <Text style={styles.value}>{formValues.TWname}</Text>

                    <Text style={styles.label}>Coord:</Text>
                    <Text style={styles.value}>{formValues.coord}</Text>

                    <Text style={styles.label}>Ciirus ID:</Text>
                    <Text style={styles.value}>{formValues.ciirusID}</Text>

                    <Text style={styles.label}>RFC:</Text>
                    <Text style={styles.value}>{formValues.RFC}</Text>

                    <Text style={styles.label}>Number of People:</Text>
                    <Text style={styles.value}>{formValues.NumbofPeople}</Text>

                    <Text style={styles.label}>Number of Beds:</Text>
                    <Text style={styles.value}>{formValues.NumbofBeds}</Text>

                    <Text style={styles.label}>Number of Bathrooms:</Text>
                    <Text style={styles.value}>{formValues.NumbofBath}</Text>

                    <Text style={styles.label}>Property Contact Name:</Text>
                    <Text style={styles.value}>{formValues.PropContName}</Text>

                    <Text style={styles.label}>Telephone Number:</Text>
                    <Text style={styles.value}>{formValues.TelNumb}</Text>

                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{formValues.email}</Text>

                    <Text style={styles.label}>Address:</Text>
                    <Text style={styles.value}>{formValues.adress}</Text>

                    <Text style={styles.label}>Number of Staff:</Text>
                    <Text style={styles.value}>{formValues.NumOfStaff}</Text>

                    <Text style={styles.label}>Security:</Text>
                    <Text style={styles.value}>{formValues.security.join(', ')}</Text>

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
                    <Text style={styles.value}>{formValues.category}</Text>

                    <Text style={styles.label}>Type of Property:</Text>
                    <Text style={styles.value}>{formValues.TypeofProp}</Text>

                    <Text style={styles.label}>Number of Floors in Building:</Text>
                    <Text style={styles.value}>{formValues.NumbOfFloorsInBuilding}</Text>

                    <Text style={styles.label}>Number of Floors in Property:</Text>
                    <Text style={styles.value}>{formValues.NumbOfFloorsInProp}</Text>

                    <Text style={styles.label}>General Exterior Description:</Text>
                    <Text style={styles.value}>{formValues.GenExtDescrip}</Text>

                    {/* Tab2 */}
                    <Text style={styles.label}>Relationship to Property:</Text>
                    <Text style={styles.value}>{formValues.RelationshipToProp}</Text>

                    <Text style={styles.label}>Owner Profile:</Text>
                    <Text style={styles.value}>{formValues.OwnerProfile}</Text>

                    {/* Tab3 */}

                    {/* Tab4 */}

                    {/* Tab5 */}

                    {/* Tab6 */}

                    {/* Tab7 */}

                    {/* Tab8 */}

                    {/* Tab9 */}

                    {/* Tab10 */}

                    {/* Tab11 */}

                    {/* Tab12 */}

                    {/* Tab13 */}
                    <Text style={styles.label}>Curator or Ambassador Name:</Text>
                    <Text style={styles.value}>{formValues.CuratAmbname}</Text>

                    <Text style={styles.label}>Inspection Date:</Text>
                    <Text style={styles.value}>{inspectionDate.toLocaleDateString()}</Text>
                </View>
            </Page>
        </Document>
    );
};

// Função para criar o PDF
export const createPdf = async (formValues: FormValues) => {
    const blob = await pdf(<MyDocument formValues={formValues} />).toBlob();

    // Formatar a data e hora sem os segundos
    const now = new Date();
    const formattedDate = now.toLocaleString('pt-PT', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // Para usar o formato 24 horas
    }).replace(/\//g, '.').replace(',', '').replace(' ', ' - ').replace(':', '.');

    saveAs(blob, `Tripwix-HomeForm-${formattedDate}.pdf`);
};
