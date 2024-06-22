
import { useEffect, useState } from "react";
import { RiDiscountPercentFill } from "react-icons/ri";
import { checkIfUserIsRegistered } from "../../Services/UsersService";
import { useNavigate } from "react-router-dom";
import validatePhoneNumber from "../../validations/phoneNumberValidator";
import Spinner from "../Spinner";

const HomePageForm = () => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // Form Initial Values
    const initialValues = {
        phone_number: ''
    };

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // Form state
    const [formFields, setFormFields] = useState(initialValues);
    
    // Handle form fields change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({
          ...formFields,
          [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validatePhoneNumber(formFields));
        setIsSubmit(true);
    }

    // Watch form errors
    useEffect(() => {
        const submitForm = async () => {
            setIsLoading(true);
            try {
                // Check if user is registered
                await checkIfUserIsRegistered(formFields.phone_number)
                .then((data) => {
                    if (data.length === 0) {
                        navigate("/download-app");
                    } else if (data && data.length > 0) {
                        navigate("/payment");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                });
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        if (isSubmit && Object.keys(formErrors).length === 0) {
            submitForm();
        } else {
            setIsLoading(false);
        }
    }, [formErrors, isSubmit, formFields])

  return (
    <div className="items-start">
      <p className="text-[#2C2C84] text-sm font-[500] mb-3">What’s your number?</p>
      <form 
        onSubmit={handleSubmit} 
        onChange={(e) => handleChange(e)}
        >
        <div className="flex flex-col">
            <input 
                type="text" 
                name="phone_number"
                value={formFields.phone_number}
                placeholder="01XXXXXXXX" 
                className="h-[45px] border-solid border-2 rounded-lg border-[#CBF15E] focus:border-[#2C2C84] focus:outline-none indent-3 mb-1"
            />
            {
                !formErrors.phone_number && 
                <small className="text-[#434547] text-sm">Enter the number linked to your Flash account.</small>
            }
            <small className="text-[#f12]">{formErrors.phone_number}</small>

            <div className="flex flex-row align-center mt-6 text-[#2C2C84] bg-[#CBF15E] bg-opacity-30 w-10/12 py-2 px-2 rounded-md">
                <RiDiscountPercentFill className="mr-1"/>
                <p className="text-xs font-[600] font-raleway">Get 20% off on your first payment </p>
            </div>
        </div>

        { isLoading ?
            <Spinner loading={true} />
            : (<button className="mt-16 font-semibold rounded-xl bg-[#2C2C84] hover:bg-indigo-800 text-white py-2 px-36">Next</button>) 
        }
      </form>
    </div>
  )
}

export default HomePageForm
