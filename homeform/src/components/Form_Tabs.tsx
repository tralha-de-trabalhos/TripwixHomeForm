import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler, FieldErrors } from 'react-hook-form';
import { Button, Tabs, Tab } from 'react-bootstrap';
import { createPdf } from './pdf';
import ConfirmationModal from './ConfirmationModal';

import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';
import { Tab4 } from './Tab4';
import { Tab5 } from './Tab5';
import { Tab6 } from './Tab6';
import { Tab7 } from './Tab7';
import { Tab8 } from './Tab8';
import { Tab9 } from './Tab9';
import { Tab10 } from './Tab10';
import { Tab11 } from './Tab11';
import { Tab12 } from './Tab12';
import { Tab13 } from './Tab13';

import { FormValues } from './Data_types';


function FillExample() {
  const methods = useForm<FormValues>({
    mode: 'onChange',
  });

  const { handleSubmit, register, control, formState: { errors } } = methods;
  const [activeTab, setActiveTab] = useState('tab1');
  const [showModal, setShowModal] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('Form Submitted', data);
    const pdfBlob = await createPdf(data);

    const formData = new FormData();
    const now = new Date();
    const formattedDate = now.toLocaleString('pt-PT', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).replace(/\//g, '.').replace(',', '').replace(' ', ' - ').replace(':', '.');

    // Adicione o Blob do PDF e o nome do arquivo
    formData.append('pdf', pdfBlob, `Tripwix-HomeForm-${formattedDate}.pdf`);
    formData.append('emailData', JSON.stringify({
      //REACT_APP_EMAIL_RECEIVER1
      to: process.env.REACT_APP_EMAIL_RECEIVER2 || process.env.REACT_APP_EMAIL_RECEIVER2,
      subject: 'Home Form',
      text: 'Encontra-se em anexo o Home Form criado.',
    }));

    {/* Para usar em desenvolvimento - server local
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      body: formData,
    });
    */}

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/send-email`, {
      method: 'POST',
      body: formData,
    });


    if (response.ok) {
      setShowModal(true); // Show the modal when email is sent
      console.log('Email enviado com sucesso!');
    } else {
      console.error('Erro ao enviar o email.');
    }
  };

  // Function to handle modal confirmation
  const handleOkModal = () => {
    methods.reset(); // Reseta os campos do formulário
    setActiveTab('tab1'); // Volta para a primeira aba
    setShowModal(false); // Fecha o modal
  };

  // Function to resend email
  const handleResendEmail = async () => {
    const data = methods.getValues(); // Obtém os valores atuais do formulário
    const pdfBlob = await createPdf(data); // Cria o PDF novamente com os dados do formulário

    const formData = new FormData();
    const now = new Date();
    const formattedDate = now.toLocaleString('pt-PT', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).replace(/\//g, '.').replace(',', '').replace(' ', ' - ').replace(':', '.');

    // Adicione o Blob do PDF e o nome do arquivo
    formData.append('pdf', pdfBlob, `Tripwix-HomeForm-${formattedDate}.pdf`);
    formData.append('emailData', JSON.stringify({
      //REACT_APP_EMAIL_RECEIVER1
      to: process.env.REACT_APP_EMAIL_RECEIVER2 || process.env.REACT_APP_EMAIL_RECEIVER2,
      subject: 'Home Form',
      text: 'Encontra-se em anexo o Home Form criado.',
    }));

    {/* Para usar em desenvolvimento - server local
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      body: formData,
    });
    */}

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/send-email`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert(`Email sent to ${process.env.REACT_APP_EMAIL_RECEIVER2} again!`);
      setShowModal(false); // Fecha o modal após o reenvio
      methods.reset(); // Reset the form
      setActiveTab('tab1'); // Go back to the first tab  
    } else {
      console.error('Error resending the email.');
      alert('Failed to resend the email. Please try again later.');
    }
  };


  // Mapeamento das abas e seus campos
  const tabFieldMapping: { [key in keyof FormValues]?: string } = {

    //Tab1
    Ambname: 'House Walkthrough Form',
    TWname: 'House Walkthrough Form',
    Coord: 'House Walkthrough Form',
    CiirusID: 'House Walkthrough Form',
    RFC: 'House Walkthrough Form',
    NumbOfPeople: 'House Walkthrough Form', //caso seja necessário
    NumbOfBeds: 'House Walkthrough Form', //caso seja necessário
    NumbOfBath: 'House Walkthrough Form', //caso seja necessário
    NumbOfHalfBath: 'House Walkthrough Form', //caso seja necessário
    PropContName: 'House Walkthrough Form',
    TelNumb: 'House Walkthrough Form',
    Email: 'House Walkthrough Form',
    Adress: 'House Walkthrough Form',
    NumOfStaff: 'House Walkthrough Form',
    Security: 'House Walkthrough Form',
    SizeOfProp: 'House Walkthrough Form',
    SizeOfLot: 'House Walkthrough Form',
    YearBuilt: 'House Walkthrough Form',
    GarageSpaces: 'House Walkthrough Form', //caso seja necessário
    ParkingSpaces: 'House Walkthrough Form', //caso seja necessário
    Category: 'House Walkthrough Form',
    TypeOfProp: 'House Walkthrough Form',
    NumbOfFloorsInBuilding: 'House Walkthrough Form', //caso seja necessário
    NumbOfFloorsInProp: 'House Walkthrough Form', //caso seja necessário
    GenExtDescrip: 'House Walkthrough Form',

    //Tab2
    RelationshipToProp: 'Owner Overview',
    OwnerProfile: 'Owner Overview',

    //Tab3
    ChannelPartnerListed: 'Property Commercial Overview',
    PlacesWhereHouseMarketed: 'Property Commercial Overview', //caso seja necessário
    Website: 'Property Commercial Overview',
    ExpectedRates: 'Property Commercial Overview', //caso seja necessário

    //Tab4
    Theme: 'Property Overview',
    MinimumAgeOfGuest: 'Property Overview', //caso seja necessário
    Memberships: 'Property Overview',
    Suitability: 'Property Overview',
    PropertyRating: 'Property Overview',
    MinutesNameOfAirport: 'Property Overview', //caso seja necessário
    MinutesNameOfAttaction: 'Property Overview', //caso seja necessário
    MinutesNameOfVillage: 'Property Overview', //caso seja necessário
    ExplainRatingBelow3: 'Property Overview',
    KnowBeforeGo: 'Property Overview',

    //Tab5
    Meals: 'Services & Features', //caso seja necessário
    Breakfast: 'Services & Features', //caso seja necessário
    Lunch: 'Services & Features', //caso seja necessário
    Dinner: 'Services & Features', //caso seja necessário
    BreakfastServiceIncluded: 'Services & Features',
    SnackServiceIncluded: 'Services & Features',
    UponArrival: 'Services & Features', //caso seja necessário
    HouseCleaning: 'Services & Features', //caso seja necessário
    CleaningFrequency: 'Services & Features',
    ChangesOfSheetFrquency: 'Services & Features',
    ChildFacilities: 'Services & Features', //caso seja necessário
    ServicesAvailable: 'Services & Features', //caso seja necessário
    ServicesIncluded: 'Services & Features', //caso seja necessário
    Car: 'Services & Features', //caso seja necessário
    AdditionalCosts: 'Services & Features', //caso seja necessário
    LocalServicesBusinesses: 'Services & Features', //caso seja necessário
    SafetyFeatures: 'Services & Features', //caso seja necessário
    AccessibilityFeatures: 'Services & Features', //caso seja necessário
    OtherAccessibilityFeature: 'Services & Features', //caso seja necessário

    //Tab6
    KitchenDining: 'Interior', //caso seja necessário
    Entertainment: 'Interior', //caso seja necessário
    HeatingCooling: 'Interior', //caso seja necessário
    NumOfIndoorLivingAreaSeats: 'Interior',
    NumOfIndoorDinningAreaSeats: 'Interior',
    AdditionalNotesInteriror: 'Interior', //caso seja necessário
    NotesToOwnerInteriror: 'Interior', //caso seja necessário
    SpecialFeaturesInterior: 'Interior', //caso seja necessário

    //Tab7
    OutdoorFeatures: 'Exterior', //caso seja necessário
    PoolSpaFacilities: 'Exterior', //caso seja necessário
    NumOfExteriorLivingSeats: 'Exterior',
    NumOfExteriorDiningSeats: 'Exterior',
    NumOfPatioLoungers: 'Exterior',
    PoolSize: 'Exterior',
    JacuzziSize: 'Exterior',
    NumOfGardenGrounds: 'Exterior',
    AdditionalNotesExteriror: 'Exterior', //caso seja necessário
    NotesToOwnerExteriror: 'Exterior', //caso seja necessário
    SpecialFeaturesExterior: 'Exterior', //caso seja necessário

    //Tab8
    Bedrooms: 'Bedrooms',

    //Tab9
    Location: 'Amenities', //caso seja necessário
    PopularAmenities: 'Amenities', //caso seja necessário

    //Tab10
    Cultural: 'Attractions', //caso seja necessário
    Leisure: 'Attractions', //caso seja necessário

    //Tab11
    Active: 'Sports', //caso seja necessário
    Golf: 'Sports', //caso seja necessário
    HikingBiking: 'Sports', //caso seja necessário
    WaterSports: 'Sports', //caso seja necessário
    WinterActivities: 'Sports', //caso seja necessário

    //Tab12
    Experiences: 'Experiences',

    //Tab13
    CuratAmbname: 'Validation',
    InspecDate: 'Validation',

  };

  const handleMissingFields = (errors: FieldErrors<FormValues>) => {
    const missingFieldsList = (Object.keys(errors) as Array<keyof FormValues>).map((field) => {
      const tabName = tabFieldMapping[field] || 'Unknown Tab';
      const fieldMessage = errors[field]?.message || field;
      return `<strong>Tab:</strong> <span style="color: red;">${tabName}</span>;  <strong>Campo:</strong> <span style="color: red;">${fieldMessage};</span>`;
    });
    setMissingFields(missingFieldsList);
  };

  //gerir a proxima página
  const handleNextTab = () => {
    const tabOrder = [
      'tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6',
      'tab7', 'tab8', 'tab9', 'tab10', 'tab11',
      'tab12', 'tab13'
    ];
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentIndex + 1]);
    }
  };

  //gerir a pagina anterior
  const handlePreviousTab = () => {
    const tabOrder = [
      'tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6',
      'tab7', 'tab8', 'tab9', 'tab10', 'tab11',
      'tab12', 'tab13'
    ];
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabOrder[currentIndex - 1]);
    }
  };

  return (
    <FormProvider {...methods}>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || '')} id="fill-tab-example" className="mb-3" fill>

          <Tab eventKey="tab1" title="House Walkthrough Form">
            <Tab1 register={register} errors={errors} />
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab2" title="Owner Overview">
            <Tab2 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab3" title="Property Commercial Overview">
            <Tab3 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab4" title="Property Overview">
            <Tab4 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab5" title="Services & Features">
            <Tab5 register={register} errors={errors} control={control} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab6" title="Interior">
            <Tab6 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab7" title="Exterior">
            <Tab7 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab8" title="Bedrooms">
            <Tab8 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab9" title="Amenities">
            <Tab9 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab10" title="Attractions">
            <Tab10 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab11" title="Sports">
            <Tab11 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab12" title="Experiences">
            <Tab12 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <Button variant="secondary" onClick={handleNextTab}>Next Page</Button>
          </Tab>

          <Tab eventKey="tab13" title="Validation">
            <Tab13 register={register} errors={errors} />
            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
            <button type="submit" onClick={() => handleMissingFields(errors)}>Submit All</button>
            <div>
              {missingFields.length > 0 && (
                <div className="missing-fields">
                  <h4 >Fields not Fullfilled:</h4>
                  <ul>
                    {missingFields.map((field, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: field }} />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Tab>

        </Tabs>
        {/*       {isSubmitted && activeTab === 'tab13' && <p>All submitted</p>} */}

      </form>

      {/* Modal para confirmar envio do e-mail */}
      <ConfirmationModal
        show={showModal}
        onHide={handleOkModal}
        onResendEmail={handleResendEmail}
        emailReceiver={process.env.REACT_APP_EMAIL_RECEIVER2}
      />

    </FormProvider>

  );
}

export default FillExample;
