import * as yup from "yup";


export const joinSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("Firstname is a required field")
        .min(3, "Firstname must be at least 3 characters"),
    lastName: yup
        .string()
        .required("Lastname is a required field")
        .min(3, "Lastname must be at least 3 characters"),
    email: yup
        .string()
        .email()
        .required("Email is a required field"),
    number: yup
    .number()
    .typeError('Phone number must be a number')
    .required("Please supply your phone number")
    .test('len', 'Min 9 numbers', (val) => val.toString().length >= 9)
});