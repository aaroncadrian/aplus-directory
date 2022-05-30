export interface PostalAddressFormSchema {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: string;
  country?: string;
}

export interface PhoneFormSchema {
  phoneNumber: string;
  phoneType?: string;
}

export interface CreatePersonFormSchema {
  emailAddress: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  nickName?: string;
  gender?: { value: string };
  dateOfBirth?: string;
  phones?: PhoneFormSchema[];
  postalAddress?: PostalAddressFormSchema;
}
