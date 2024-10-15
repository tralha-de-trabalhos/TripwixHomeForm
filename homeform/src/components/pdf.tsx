import React from 'react';
import { Page, Text, View, Document, Image, StyleSheet, pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver'; // Para o download do PDF
import { FormValues } from './Data_types';
import image from '../images/logo_tripwix.png'

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
    },

    image: {
        alignSelf: 'center',
        marginBottom: '20px',
        height: '10%',
        width: '20%',
    },
});


const MyDocument = ({ formValues }: { formValues: FormValues }) => {
    // Converta a string para objeto Date se for string
    const inspectionDate = typeof formValues.InspecDate === 'string'
        ? new Date(formValues.InspecDate)
        : formValues.InspecDate;

    // Verifique se 'Security' é um array e, se não for, usa um array vazio
    const securityValues = Array.isArray(formValues.Security) ? formValues.Security : [];

    // Verifique se 'Property Overview ' é um array e, se não for, usa um array vazio
    const themeOptions = Array.isArray(formValues.Theme) ? formValues.Theme : [];
    const suitabilityOptions = Array.isArray(formValues.Suitability) ? formValues.Suitability : [];

    // Verifique se 'Services & Features ' é um array e, se não for, usa um array vazio
    const mealsOptions = Array.isArray(formValues.Meals) ? formValues.Meals : [];
    const breakfastOptions = Array.isArray(formValues.Breakfast) ? formValues.Breakfast : [];
    const lunchOptions = Array.isArray(formValues.Lunch) ? formValues.Lunch : [];
    const dinnerOptions = Array.isArray(formValues.Dinner) ? formValues.Dinner : [];
    const upponArrivalOptions = Array.isArray(formValues.UponArrival) ? formValues.UponArrival : [];
    const houseCleaningOptions = Array.isArray(formValues.HouseCleaning) ? formValues.HouseCleaning : [];
    const childFacilitiesOptions = Array.isArray(formValues.ChildFacilities) ? formValues.ChildFacilities : [];
    const servicesAvailableOptions = Array.isArray(formValues.ServicesAvailable) ? formValues.ServicesAvailable : [];
    const servicesIncludedOptions = Array.isArray(formValues.ServicesIncluded) ? formValues.ServicesIncluded : [];
    const carOptions = Array.isArray(formValues.Car) ? formValues.Car : [];

    const localServicesBusinessesOptions = Array.isArray(formValues.LocalServicesBusinesses) ? formValues.LocalServicesBusinesses : [];
    const safetyFeaturesOptions = Array.isArray(formValues.SafetyFeatures) ? formValues.SafetyFeatures : [];

    const accessibilityFeaturesOptions = Array.isArray(formValues.AccessibilityFeatures)
        ? formValues.AccessibilityFeatures
        : [];
    if (formValues.OtherAccessibilityFeature) {
        accessibilityFeaturesOptions.push(formValues.OtherAccessibilityFeature);
    }

    // Verifique se 'Interior' é um array e, se não for, usa um array vazio
    const kitchenDiningOptions = Array.isArray(formValues.KitchenDining) ? formValues.KitchenDining : [];
    const entertainmentDiningOptions = Array.isArray(formValues.Entertainment) ? formValues.Entertainment : [];
    const heatingCoolingOptions = Array.isArray(formValues.HeatingCooling) ? formValues.HeatingCooling : [];

    // Verifique se 'Exterior' é um array e, se não for, usa um array vazio
    const outdoorFeaturesOptions = Array.isArray(formValues.OutdoorFeatures) ? formValues.OutdoorFeatures : [];
    const poolSpaFacilitiesOptions = Array.isArray(formValues.PoolSpaFacilities) ? formValues.PoolSpaFacilities : [];

    // Verifique se 'Channel Partner Listed Values' é um array e, se não for, usa um array vazio
    const channelPartnerListedValues = Array.isArray(formValues.ChannelPartnerListed) ? formValues.ChannelPartnerListed : [];
    const bedrooms = Array.isArray(formValues.Bedrooms) ? formValues.Bedrooms : [];

    // Verifique se 'Amenities' é um array e, se não for, usa um array vazio
    const amenitieLocationValues = Array.isArray(formValues.Location) ? formValues.Location : [];
    const amenitiesPopularAmenitiesValues = Array.isArray(formValues.PopularAmenities) ? formValues.PopularAmenities : [];

    // Verifique se 'Attractions' é um array e, se não for, usa um array vazio
    const attactionsCulturalValues = Array.isArray(formValues.Cultural) ? formValues.Cultural : [];
    const attactionsLeisureValues = Array.isArray(formValues.Leisure) ? formValues.Leisure : [];

    // Verifique se 'Sports' é um array e, se não for, usa um array vazio
    const sportsActiveValues = Array.isArray(formValues.Active) ? formValues.Active : [];
    const sportsGolfValues = Array.isArray(formValues.Golf) ? formValues.Golf : [];
    const sportsHikingBikingValues = Array.isArray(formValues.HikingBiking) ? formValues.HikingBiking : [];
    const sportsWaterSportsValues = Array.isArray(formValues.WaterSports) ? formValues.WaterSports : [];
    const sportsWinterActivitiesValues = Array.isArray(formValues.WinterActivities) ? formValues.WinterActivities : [];

    // Verifique se 'Experiences' é um array e, se não for, usa um array vazio
    const experiencesValues = Array.isArray(formValues.Experiences) ? formValues.Experiences : [];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Image src={image} style={styles.image} />
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

                    <Text style={styles.label}>Places Where the House is Already Marketed:</Text>
                    <Text style={styles.value}>{formValues.PlacesWhereHouseMarketed}</Text>

                    <Text style={styles.label}>Website Internet Address (When Exists):</Text>
                    <Text style={styles.value}>{formValues.Website}</Text>

                    <Text style={styles.label}>Expected Rates to Owner (Without TW Commission):</Text>
                    <Text style={styles.value}>{formValues.ExpectedRates}</Text>


                    {/* Tab4 - Property Overview */}
                    <Text style={styles.tab}>Property Overview</Text>

                    <Text style={styles.label}>Theme:</Text>
                    <Text style={styles.value}>{themeOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Minimum Age of Guest:</Text>
                    <Text style={styles.value}>{formValues.MinimumAgeOfGuest}</Text>

                    <Text style={styles.label}>Any memberships:</Text>
                    <Text style={styles.value}>{formValues.Memberships}</Text>

                    <Text style={styles.label}>Suitability:</Text>
                    <Text style={styles.value}>{suitabilityOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Property rating:</Text>
                    <Text style={styles.label}>Location / Views	:</Text>
                    <Text style={styles.value}>{formValues.PropertyRating.LocationViews}</Text>
                    <Text style={styles.label}>Design / Layout:</Text>
                    <Text style={styles.value}>{formValues.PropertyRating.DesignLayout}</Text>
                    <Text style={styles.label}>Quality Furnishings:</Text>
                    <Text style={styles.value}>{formValues.PropertyRating.QualityFurnishings}</Text>
                    <Text style={styles.label}>Cleanliness:</Text>
                    <Text style={styles.value}>{formValues.PropertyRating.Cleanliness}</Text>
                    <Text style={styles.label}>Facilities:</Text>
                    <Text style={styles.value}>{formValues.PropertyRating.Facilities}</Text>
                    <Text style={styles.label}>Overall Rating:</Text>
                    <Text style={styles.value}>{formValues.PropertyRating.OverallRating}</Text>

                    <Text style={styles.label}>Minutes to / Name of Airport:</Text>
                    <Text style={styles.value}>{formValues.MinutesNameOfAirport}</Text>

                    <Text style={styles.label}>Minutes to / Name of Nearest Attraction:</Text>
                    <Text style={styles.value}>{formValues.MinutesNameOfAttaction}</Text>

                    <Text style={styles.label}>Minutes to/ Name of Nearest Village:</Text>
                    <Text style={styles.value}>{formValues.MinutesNameOfVillage}</Text>

                    <Text style={styles.label}>Explain any Rating Below 3 Stars:</Text>
                    <Text style={styles.value}>{formValues.ExplainRatingBelow3}</Text>

                    <Text style={styles.label}>Know Before You Go:</Text>
                    <Text style={styles.value}>{formValues.KnowBeforeGo}</Text>


                    {/* Tab5 - Services & Features */}
                    <Text style={styles.tab}>Services & Features</Text>

                    <Text style={styles.label}>Meals:</Text>
                    <Text style={styles.value}>{mealsOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Breakfast:</Text>
                    <Text style={styles.value}>{breakfastOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Lunch:</Text>
                    <Text style={styles.value}>{lunchOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Dinner:</Text>
                    <Text style={styles.value}>{dinnerOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Breakfast Service Included:</Text>
                    <Text style={styles.value}>{formValues.BreakfastServiceIncluded}</Text>

                    <Text style={styles.label}>Snack Service Included:</Text>
                    <Text style={styles.value}>{formValues.SnackServiceIncluded}</Text>

                    <Text style={styles.label}>Upon arrival:</Text>
                    <Text style={styles.value}>{upponArrivalOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>House cleaning:</Text>
                    <Text style={styles.value}>{houseCleaningOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Cleaning Frequency:</Text>
                    <Text style={styles.value}>{formValues.CleaningFrequency}</Text>

                    <Text style={styles.label}>Changes of Sheets and Linens Frquency:</Text>
                    <Text style={styles.value}>{formValues.ChangesOfSheetFrquency}</Text>

                    <Text style={styles.label}>Child Facilities:</Text>
                    <Text style={styles.value}>{childFacilitiesOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Services Available:</Text>
                    <Text style={styles.value}>{servicesAvailableOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Services Included:</Text>
                    <Text style={styles.value}>{servicesIncludedOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Car:</Text>
                    <Text style={styles.value}>{carOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Any Additional Costs:</Text>
                    <Text style={styles.value}>{formValues.AdditionalCosts}</Text>

                    <Text style={styles.label}>Local Services & Businesses:</Text>
                    <Text style={styles.value}>{localServicesBusinessesOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Safety Features:</Text>
                    <Text style={styles.value}>{safetyFeaturesOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Accessibilty Features:</Text>
                    <Text style={styles.value}>{accessibilityFeaturesOptions.join(', ') || ''}</Text>


                    {/* Tab6 - Interiror */}
                    <Text style={styles.tab}>Interiror</Text>

                    <Text style={styles.label}>Kitchen & Dining:</Text>
                    <Text style={styles.value}>{kitchenDiningOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Entertainment:</Text>
                    <Text style={styles.value}>{entertainmentDiningOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Heating / Cooling:</Text>
                    <Text style={styles.value}>{heatingCoolingOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Indoor Living Area Seats Number:</Text>
                    <Text style={styles.value}>{formValues.NumOfIndoorLivingAreaSeats}</Text>

                    <Text style={styles.label}>Indoor Dinning Area Seats Number:</Text>
                    <Text style={styles.value}>{formValues.NumOfIndoorDinningAreaSeats}</Text>

                    <Text style={styles.label}>Additional Notes:</Text>
                    <Text style={styles.value}>{formValues.AdditionalNotesInteriror}</Text>

                    <Text style={styles.label}>Notes to Owner (Internal use Only):</Text>
                    <Text style={styles.value}>{formValues.NotesToOwnerInteriror}</Text>

                    <Text style={styles.label}>Special Features:</Text>
                    <Text style={styles.value}>{formValues.SpecialFeaturesInterior}</Text>


                    {/* Tab7 - Exteriror */}
                    <Text style={styles.tab}>Exteriror</Text>

                    <Text style={styles.label}>Outdoor Features:</Text>
                    <Text style={styles.value}>{outdoorFeaturesOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Pool & Spa Facilities:</Text>
                    <Text style={styles.value}>{poolSpaFacilitiesOptions.join(', ') || ''}</Text>

                    <Text style={styles.label}>Exterior Living Seats Number:</Text>
                    <Text style={styles.value}>{formValues.NumOfExteriorLivingSeats}</Text>

                    <Text style={styles.label}>Exterior Dining Seats Number:</Text>
                    <Text style={styles.value}>{formValues.NumOfExteriorDiningSeats}</Text>

                    <Text style={styles.label}>Number of Patio Loungers:</Text>
                    <Text style={styles.value}>{formValues.NumOfPatioLoungers}</Text>

                    <Text style={styles.label}>Pool Size:</Text>
                    <Text style={styles.value}>{formValues.PoolSize}</Text>

                    <Text style={styles.label}>Jacuzzi Size:</Text>
                    <Text style={styles.value}>{formValues.JacuzziSize}</Text>

                    <Text style={styles.label}>Garden/Grounds:</Text>
                    <Text style={styles.value}>{formValues.NumOfGardenGrounds}</Text>

                    <Text style={styles.label}>Notes:</Text>
                    <Text style={styles.value}>{formValues.AdditionalNotesExteriror}</Text>

                    <Text style={styles.label}>Notes to Owner (Internal use Only):</Text>
                    <Text style={styles.value}>{formValues.NotesToOwnerExteriror}</Text>

                    <Text style={styles.label}>Special Features:</Text>
                    <Text style={styles.value}>{formValues.SpecialFeaturesExterior}</Text>


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

                                {/* Renderizando tipos de camas adicionais */}
                                {bedroom.AdditionalBeds && bedroom.AdditionalBeds.length > 0 ? (
                                    bedroom.AdditionalBeds.map((bed, bedIndex) => (
                                        <Text key={bedIndex} style={styles.value}>
                                            Additional Bed {bedIndex + 1}: {bed}
                                        </Text>
                                    ))
                                ) : (
                                    <Text style={styles.value}>No additional beds specified.</Text>
                                )}

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
                                <Text style={styles.value}>{Array.isArray(bedroom.BedroomAmenities) ? bedroom.BedroomAmenities.join(', ') : bedroom.BedroomAmenities}</Text>

                                <Text style={styles.label}>Bathroom:</Text>
                                <Text style={styles.value}>{Array.isArray(bedroom.Bathroom) ? bedroom.Bathroom.join(', ') : bedroom.Bathroom}</Text>

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

                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.value}>{attactionsCulturalValues.join(', ') || ''}</Text>

                    <Text style={styles.label}>Popular Amenities:</Text>
                    <Text style={styles.value}>{attactionsLeisureValues.join(', ') || ''}</Text>


                    {/* Tab10 - Attractions */}
                    <Text style={styles.tab}>Attractions</Text>

                    <Text style={styles.label}>Cultural:</Text>
                    <Text style={styles.value}>{amenitieLocationValues.join(', ') || ''}</Text>

                    <Text style={styles.label}>Leisure:</Text>
                    <Text style={styles.value}>{amenitiesPopularAmenitiesValues.join(', ') || ''}</Text>


                    {/* Tab11 - Sports */}
                    <Text style={styles.tab}>Sports</Text>

                    <Text style={styles.label}>Active:</Text>
                    <Text style={styles.value}>{sportsActiveValues.join(', ') || ''}</Text>

                    <Text style={styles.label}>Golf:</Text>
                    <Text style={styles.value}>{sportsGolfValues.join(', ') || ''}</Text>

                    <Text style={styles.label}>Hiking and Biking:</Text>
                    <Text style={styles.value}>{sportsHikingBikingValues.join(', ') || ''}</Text>

                    <Text style={styles.label}>Water Sports:</Text>
                    <Text style={styles.value}>{sportsWaterSportsValues.join(', ') || ''}</Text>

                    <Text style={styles.label}>Winter Activities:</Text>
                    <Text style={styles.value}>{sportsWinterActivitiesValues.join(', ') || ''}</Text>


                    {/* Tab12 - Experiences */}
                    <Text style={styles.tab}>Experiences</Text>

                    <Text style={styles.label}>Experiences:</Text>
                    <Text style={styles.value}>{experiencesValues.join(', ') || ''}</Text>


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
