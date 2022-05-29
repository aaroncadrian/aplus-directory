import {
  Button,
  Container,
  Form,
  Header,
  SpaceBetween,
} from '@awsui/components-react';
import {
  EmailAddressForm,
  PersonDetailsForm,
  PhoneNumbersForm,
  PostalAddressForm,
} from '@aplus/web-directory/people/ui-forms';
import { Form as RFF } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

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
      subscription={{ submitting: true, pristine: true }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
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
              <Container header={<Header>Email Address</Header>}>
                <EmailAddressForm />
              </Container>

              <Container header={<Header>Details</Header>}>
                <PersonDetailsForm />
              </Container>

              <Container header={<Header>Phones</Header>}>
                <PhoneNumbersForm />
              </Container>

              <Container header={<Header>Postal Address</Header>}>
                <PostalAddressForm />
              </Container>
            </SpaceBetween>
          </Form>
        </form>
      )}
    </RFF>
  );
};
