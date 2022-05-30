import Joi from 'joi';
import {
  CreatePersonFormSchema,
  PhoneFormSchema,
  PostalAddressFormSchema,
} from './create-person-form.schema';

export const PhoneValidationSchema = Joi.object<PhoneFormSchema>({
  phoneNumber: Joi.string().trim().label('Phone Number'),
  phoneType: Joi.string().trim().label('Phone Type'),
});

export const PostalAddressValidationSchema =
  Joi.object<PostalAddressFormSchema>({
    line1: Joi.string().trim().required().label('Line 1'),
    line2: Joi.string().trim().optional().label('Line 2'),
    city: Joi.string().trim().required().label('City'),
    state: Joi.string().trim().required().label('State'),
    zipCode: Joi.string().trim().required().label('Zip Code'),
    country: Joi.string().trim().optional().label('Country'),
  });

export const CreatePersonFormValidationSchema =
  Joi.object<CreatePersonFormSchema>({
    emailAddress: Joi.string()
      .email({
        tlds: false,
      })
      .trim()
      .required()
      .label('Email Address'),
    firstName: Joi.string().trim().required().label('First Name'),
    lastName: Joi.string().trim().required().label('Last Name'),
    nickName: Joi.string().trim().optional().label('Nickname'),
    middleName: Joi.string().trim().optional().label('Middle Name'),
    dateOfBirth: Joi.string().trim().optional().label('Date of Birth'),
    gender: Joi.object({
      value: Joi.string().trim().required(),
    })
      .optional()
      .label('Gender'),
    phones: Joi.array().items(PhoneValidationSchema).optional().label('Phones'),
    postalAddress:
      PostalAddressValidationSchema.optional().label('Postal Address'),
  });
