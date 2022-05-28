import { Container, Form, Header, SpaceBetween } from '@awsui/components-react';
import { PersonDetailsForm } from '@aplus/web-directory/people/ui-forms';
import { Form as RFF } from 'react-final-form';

export const CreatePersonPage = () => {
  return (
    <RFF onSubmit={() => {}}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <pre>{JSON.stringify(values, null, 2)}</pre>

          <Form header={<Header variant={'h1'}>Create Person</Header>}>
            <SpaceBetween size={'l'}>
              <Container header={<Header>Details</Header>}>
                <PersonDetailsForm />
              </Container>
            </SpaceBetween>
          </Form>
        </form>
      )}
    </RFF>
  );
};
