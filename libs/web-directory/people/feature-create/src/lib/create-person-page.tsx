import {
  Button,
  Container,
  Form,
  Header,
  SpaceBetween,
} from '@awsui/components-react';
import {
  PersonDetailsForm,
  PhoneNumbersForm,
} from '@aplus/web-directory/people/ui-forms';
import { Form as RFF } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { AddressForm } from '../../../ui-forms/src/lib/addresses/address-form';

export const CreatePersonPage = () => {
  const submitPerson = (formValues: unknown) => {
    console.log('submit', formValues);
  };

  return (
    <RFF
      onSubmit={submitPerson}
      mutators={{
        ...arrayMutators,
      }}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <pre>{JSON.stringify(values, null, 2)}</pre>

          <Form
            header={<Header variant={'h1'}>Create Person</Header>}
            actions={
              <SpaceBetween size={'s'} direction={'horizontal'}>
                <Button formAction={'none'}>Cancel</Button>

                <Button formAction={'submit'} variant={'primary'}>
                  Create
                </Button>
              </SpaceBetween>
            }
          >
            <SpaceBetween size={'l'}>
              <Container header={<Header>Details</Header>}>
                <PersonDetailsForm />
              </Container>

              <Container header={<Header>Phones</Header>}>
                <PhoneNumbersForm />
              </Container>

              <Container header={<Header>Address</Header>}>
                <AddressForm />
              </Container>
            </SpaceBetween>
          </Form>
        </form>
      )}
    </RFF>
  );
};
