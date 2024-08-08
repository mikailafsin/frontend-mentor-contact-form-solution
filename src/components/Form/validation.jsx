import { object, string, bool } from "yup";

const validations = object({
    firstName: string().required("This field is required"),
    lastName: string().required("This field is required"),
    email: string().email("Please enter a valid email address").required("This field is required"),
    queryType: string().required("Please select a query type"),
    message: string().required("This field is required"),
    requiredField: bool().oneOf([true], "To submit this form, please consent to being contacted"),
});

export default validations;
