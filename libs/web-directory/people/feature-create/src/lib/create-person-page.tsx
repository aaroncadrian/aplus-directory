import {
  BreadcrumbGroup,
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
import { PrefixProvider } from '@aplus/react/ui-forms';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePerson } from './use-create-person';
import { CreatePersonFormSchema } from './create-person-form.schema';
import { CreatePersonFormValidationSchema } from './create-person-form.validation';
import { AnyObject, ValidationErrors } from 'final-form';
import { ValidationErrorItem } from 'joi';
import { set } from 'lodash';

const validateForm = (formValues: CreatePersonFormSchema): ValidationErrors => {
  const result = CreatePersonFormValidationSchema.validate(formValues, {
    abortEarly: false,
  });

  console.log(result);

  return result?.error?.details?.reduce(
    (acc: AnyObject, item: ValidationErrorItem): AnyObject => {
      set(acc, item.path, item);

      return acc;
    },
    {} as AnyObject
  );
};

export const CreatePersonPage = () => {
  const navigate = useNavigate();

  const { execute: createPerson, loading, data, error } = useCreatePerson();

  useEffect(() => {
    if (!loading && data) {
      navigate(`../${data.id}`);
    }
  }, [loading, data, navigate]);

  const submitPerson = (formValues: CreatePersonFormSchema) => {
    console.log('submit', formValues);

    createPerson({
      input: {
        emailAddress: formValues.emailAddress,
        firstName: formValues.firstName,
        middleName: formValues.middleName,
        lastName: formValues.lastName,
        phones: formValues.phones,
        postalAddress: formValues.postalAddress,
      },
    });
  };

  return (
    <RFF<CreatePersonFormSchema>
      onSubmit={submitPerson}
      validate={validateForm}
      mutators={{
        ...arrayMutators,
      }}
      subscription={{ submitting: true, pristine: true }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <BreadcrumbGroup
            items={[
              {
                text: 'Directory',
                href: '/',
              },
              {
                text: 'People',
                href: '/people',
              },
              {
                text: 'Create Person',
                href: '/people/create',
              },
            ]}
            onClick={(event) => {
              console.log('onclick');
              event.preventDefault();
            }}
            onFollow={(event) => {
              console.log('onfollow');

              event.preventDefault();
              navigate(event.detail.href);
            }}
          />

          <Form
            header={<Header variant={'h1'}>Create Person</Header>}
            errorText={error?.message}
            actions={
              <SpaceBetween size={'s'} direction={'horizontal'}>
                <Button formAction={'none'} disabled={loading}>
                  Cancel
                </Button>

                <Button
                  formAction={'submit'}
                  variant={'primary'}
                  loading={loading}
                >
                  Create
                </Button>
              </SpaceBetween>
            }
          >
            <SpaceBetween size={'l'}>
              <Container header={<Header>Email Address</Header>}>
                <EmailAddressForm autoFocus />
              </Container>

              <Container header={<Header>Details</Header>}>
                <PersonDetailsForm />
              </Container>

              <Container header={<Header>Phones</Header>}>
                <PhoneNumbersForm />
              </Container>

              <Container header={<Header>Postal Address</Header>}>
                <PrefixProvider prefix={'postalAddress'}>
                  <PostalAddressForm />
                </PrefixProvider>
              </Container>
            </SpaceBetween>
          </Form>
        </form>
      )}
    </RFF>
  );
};
