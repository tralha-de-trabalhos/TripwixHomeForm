export type PropertyRating = {
    LocationViews: number;  // 1 a 5 estrelas
    DesignLayout: number;   // 1 a 5 estrelas
    QualityFurnishings: number; // 1 a 5 estrelas
    Cleanliness: number;    // 1 a 5 estrelas
    Facilities: number;     // 1 a 5 estrelas
    OverallRating: number;  // 1 a 5 estrelas
};

export type BeddingAndLinens = {
    QualityOfLinens: number;  // 1 a 5 estrelas
    QualityOfBedding: number;  // 1 a 5 estrelas
    QualityOfPillow: number;  // 1 a 5 estrelas
    QualityOfMatress: number;  // 1 a 5 estrelas
    QualityOfTowels: number;  // 1 a 5 estrelas
}

export type Bedroom = {
    Bedroom: string;
    RoomName: string;
    Bed: string;
    AdditionalBeds: string[],
    BeddingAndLinens: BeddingAndLinens;
    NumOfAditionalBeds: number;
    ToiletryBrand: string;
    BedroomAmenities: string[];
    Bathroom: string[];
    AdditionalNotesBedrooms: string;
    NotesToOwnerBedrooms: string;
}


export type FormValues = {

    //Tab1 - House Walkthrough Form
    Ambname: string;
    TWname: string;
    Coord: string;
    CiirusID: string;
    RFC: string;
    NumbOfPeople: number;
    NumbOfBeds: number;
    NumbOfBath: number;
    NumbOfHalfBath: number;
    PropContName: string;
    TelNumb: string;
    Email: string;
    Adress: string;
    NumOfStaff: number;
    Security: string[];
    SizeOfProp: string;
    SizeOfLot: string;
    YearBuilt: number;
    GarageSpaces: number;
    ParkingSpaces: number;
    Category: string;
    TypeOfProp: string;
    NumbOfFloorsInBuilding: number;
    NumbOfFloorsInProp: number;
    GenExtDescrip: string;

    //Tab2 - Owner Overview
    RelationshipToProp: string;
    OwnerProfile: string;

    //Tab3 - Property Commercial Overview
    ChannelPartnerListed: string[];
    PlacesWhereHouseMarketed: string;
    Website: string;
    ExpectedRates: string;

    //Tab4 - Property Overview
    Theme: string[];
    MinimumAgeOfGuest: number;
    Memberships: string;
    Suitability: string[];
    MinutesNameOfAirport: string;
    MinutesNameOfAttaction: string;
    MinutesNameOfVillage: string;
    PropertyRating: PropertyRating;
    ExplainRatingBelow3: string;
    KnowBeforeGo: string;

    //Tab5 - Services & Features
    Meals: string[];
    Breakfast: string[];
    Lunch: string[];
    Dinner: string[];
    BreakfastServiceIncluded: string;
    SnackServiceIncluded: string;
    UponArrival: string[];
    HouseCleaning: string[];
    CleaningFrequency: string;
    ChangesOfSheetFrquency: string;
    ChildFacilities: string[];
    ServicesAvailable: string[];
    ServicesIncluded: string[];
    Car: string[];
    AdditionalCosts: string;
    LocalServicesBusinesses: string[];
    SafetyFeatures: string[];
    AccessibilityFeatures: string[];
    OtherAccessibilityFeature: string;

    //Tab6 - Interiror
    KitchenDining: string[];
    Entertainment: string[];
    HeatingCooling: string[];
    NumOfIndoorLivingAreaSeats: number;
    NumOfIndoorDinningAreaSeats: number;
    AdditionalNotesInteriror: string;
    NotesToOwnerInteriror: string;
    SpecialFeaturesInterior: string;

    //Tab7 - Exteriror
    OutdoorFeatures: string[];
    PoolSpaFacilities: string[];
    NumOfExteriorLivingSeats: number;
    NumOfExteriorDiningSeats: number;
    NumOfPatioLoungers: number;
    PoolSize: number;
    JacuzziSize: number;
    NumOfGardenGrounds: number;
    AdditionalNotesExteriror: string;
    NotesToOwnerExteriror: string;
    SpecialFeaturesExterior: string;

    //Tab8 - Bedrooms
    Bedrooms: Bedroom[];

    //Tab9 - Amenities
    Location: string[];
    PopularAmenities: string[];

    //Tab10 - Attractions
    Cultural: string[];
    Leisure: string[];

    //Tab11 - Sports
    Active: string[];
    Golf: string[];
    HikingBiking: string[];
    WaterSports: string[];
    WinterActivities: string[];

    //Tab12 - Experiences
    Experiences: string[];

    //Tab13 - Validation
    CuratAmbname: string;
    InspecDate: Date;

};
