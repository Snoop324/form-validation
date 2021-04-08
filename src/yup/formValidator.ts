import * as yup from "yup";
import { differenceInYears } from "date-fns";
const alphaRegex: RegExp = /^[A-Za-z]*$/;

const schema: yup.AnyObjectSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is Required!")
    .min(2, `Name must be 2 characters or more!`)
    .matches(alphaRegex, `Name must contain letters only!`),

  username: yup
    .string()
    .required("Username is required")
    .min(2, "Username must be 2 characters or more!")
    .max(15, "Username can only be 15 characters!"),

  dob: yup
    .date()
    .required("DOB is required!")
    .test("dob", "Must be 18 or older!", function (dob?: Date) {
      return dob ? differenceInYears(new Date(), dob) >= 18 : false;
    }),

  email: yup.string().email("Invalid email format!"),
});

export { schema };
