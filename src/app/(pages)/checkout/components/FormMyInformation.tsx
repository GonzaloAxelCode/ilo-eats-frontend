import { Field } from "formik";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { BsCheck2Circle } from "react-icons/bs";
import { useFormOrderContext } from "../context/FormOrderContext";
const FormMyInformation = () => {
    const propsFormik = useFormOrderContext();

    return (
        <div className="flex flex-col">
            <div className="m-4 flex flex-col">
                <label className="text-xs uppercase font-medium flex items-center mb-4">
                    FIRST NAME
                    <span className="ml-1">
                        <BsCheck2Circle className="w-4 h-4 rounded-full text-green-500" />
                    </span>
                </label>
                <Field
                    name="firstName"
                    className="border-none outline-none bg-gray-100 p-4 rounded-md"
                />
            </div>

            <div className="m-4 flex flex-col">
                <label className="text-xs uppercase font-medium flex items-center mb-4">
                    LAST NAME
                    <span className="ml-1">
                        <BsCheck2Circle className="w-4 h-4 rounded-full text-green-500" />
                    </span>
                </label>
                <Field
                    name="lastName"
                    className="border-none outline-none bg-gray-100 p-4 rounded-md"
                />
            </div>

            <div className="m-4 flex flex-col">
                <label className="text-xs uppercase font-medium flex items-center mb-4">
                    COUNTRY
                    <span className="ml-1">
                        <BsCheck2Circle className="w-4 h-4 rounded-full text-green-500" />
                    </span>
                </label>
                <CountryDropdown
                    name="country"
                    value={propsFormik?.values.country}
                    onChange={(_, e) => propsFormik.handleChange(e)}
                    onBlur={propsFormik?.handleBlur}

                />
            </div>

            <div className="m-4 flex flex-col">
                <label className="text-xs uppercase font-medium flex items-center mb-4">
                    REGION
                    <span className="ml-1">
                        <BsCheck2Circle className="w-4 h-4 rounded-full text-green-500" />
                    </span>
                </label>
                <RegionDropdown
                    name="region"
                    country={propsFormik?.values.country}
                    value={propsFormik?.values.region}
                    onChange={(_, e) => propsFormik.handleChange(e)}
                    onBlur={propsFormik?.handleBlur}

                />
            </div>

            {/* Repeat this structure for the remaining fields, like street address, postcode, etc. */}
            <div className="m-4 flex flex-col">
                <label className="text-xs uppercase font-medium flex items-center mb-4">
                    EMAIL ADDRESS
                    <span className="ml-1">
                        <BsCheck2Circle className="w-4 h-4 rounded-full text-green-500" />
                    </span>
                </label>
                <Field
                    name="email"
                    disabled={true}
                    className="border-none outline-none bg-gray-100 p-4 rounded-md"
                />
            </div>
        </div>
    )
}

export default FormMyInformation