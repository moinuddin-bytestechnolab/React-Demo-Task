import * as Yup from "yup";

export const validationSchema = Yup.object({
    firstname : Yup.string().min(2).max(30).required("Please enter your first name"),
    lastname : Yup.string().min(2).max(30).required("Please enter your last name"),
    email : Yup.string().email().required("Please enter your email"),
    address : Yup.string().min(5).max(30).required("Please enter your address"),
    dob : Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years").required("Please select BOD"),
})