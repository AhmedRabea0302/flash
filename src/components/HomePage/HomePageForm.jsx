
import { useEffect, useState } from "react";
import { authenticateUser, checkIfUserIsRegistered } from "../../Services/UsersService";
import { useNavigate } from "react-router-dom";
import validatePhoneNumber from "../../validations/phoneNumberValidator";
import Spinner from "../Spinner";
import { DiscountComponent } from "../DiscountComponent";

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
                        localStorage.removeItem("user");
                        navigate("/download-app");
                    } else if (data && data.length > 0) {
                        authenticateUser()
                        .then((response) => {
                            if(response.access_token) {
                                data[0].access_token = response.access_token;
                                localStorage.setItem("user", JSON.stringify(data[0]));
                                navigate("/payment");
                            }
                        })
                        .catch((err) => {
                            return err
                        });
                        
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

            <DiscountComponent />
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
