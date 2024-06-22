
import { useState } from "react";
import { RiDiscountPercentFill } from "react-icons/ri";

const HomePageForm = () => {

    // Form Initial Values
    const initialValues = {
        phone_number: ''
    };

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

        console.log(formFields);
    }

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
            <small className="text-[#434547] text-sm">Enter the number linked to your Flash account.</small>
            
            <div className="flex flex-row align-center mt-6 text-[#2C2C84] bg-[#CBF15E] bg-opacity-30 w-10/12 py-2 px-2 rounded-md">
                <RiDiscountPercentFill className="mr-1"/>
                <p className="text-xs font-[600] font-raleway">Get 20% off on your first payment </p>
            </div>
        </div>

        <button className="mt-12 font-semibold rounded-xl bg-[#2C2C84] hover:bg-indigo-800 text-white py-2 px-36">Next</button>
      </form>
    </div>
  )
}

export default HomePageForm
