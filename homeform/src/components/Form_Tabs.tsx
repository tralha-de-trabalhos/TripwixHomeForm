import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { createPdf } from './pdf';

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
    mode: 'onBlur',
  });

  const { handleSubmit, register, control, formState: { errors } } = methods;
  const [activeTab, setActiveTab] = useState('tab1');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('Form Submitted', data);
    const pdfBlob = await createPdf(data); // Obtenha o Blob do PDF

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

    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Email enviado com sucesso!');
      setIsSubmitted(true); // Marcar como enviado
    } else {
      console.error('Erro ao enviar o email.');
    }
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
            <Tab5 register={register} errors={errors} control={control} />            <Button variant="secondary" onClick={handlePreviousTab}>Previous Page</Button>
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
            <div>
              <button type="submit">Submit All</button>
            </div>
          </Tab>

        </Tabs>
        {isSubmitted && activeTab === 'tab13' && <p>All submitted</p>}
      </form>
    </FormProvider>
  );
}

export default FillExample;
