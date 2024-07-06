
import FlashArrows from '../assets/images/flash-arrows.png';
import QrCodeImage from '../assets/images/qr-code.png';
import { DiscountComponent } from '../components/DiscountComponent';
import Spinner from '../components/Spinner';
import { getUserService } from '../Services/UsersService';
import { useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import createOrder from '../Services/PaymentService';


export const PaymentPage = () => {
  const user = getUserService();

  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    // Check if user is registered
    try {
      await createOrder()
      .then((data) => {
        setIsLoading(false);
        if (data.status == "completed") {
          alert(data.status);          
        }
        return data
      })
      .catch((err) => {
        return err
      });
    } catch (err) {
      return err
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-row h-screen w-6/12 m-auto justify-center items-start" style={{ alignItems: 'center' }}>
      <div className="flex flex-col ">
        <div className="mb-8">
            <img src={FlashArrows} alt="" className="h-35 w-42 mb-4 font-raleway"/>
            <h2 className="text-[#2C2C84] text-xl font-raleway	font-bold">Almost there, {user.first_name?? 'Erik'}!</h2>
        </div>

        <div>
          <p className="text-[#434547] mb-1 font-light">Scan this qr code with the Flash app and <br />the payment process will be over in a <br />
            flash! <span className="text-black">Just like that!</span>
          </p>
        </div>
        
        <DiscountComponent />

        <form 
          onSubmit={handleSubmit} 
          onChange={(e) => handleChange(e)}
        >

          { isLoading ?
              <Spinner loading={true} />
              : (
                <div className="mt-24">
                  <p className="flex flex-row align-middle">
                    <FaCircleExclamation className="text-[#F8C300] mr-1 mb-1"/>
                    <span className="text-[#434547] mb-1 font-light font-raleway text-sm">Make sure you paid before confirming</span>
                  </p>
                  <button className="font-semibold rounded-xl bg-[#2C2C84] hover:bg-indigo-800 text-white py-2 px-36">
                    Confirm
                  </button>
                </div>
              ) 
          }
        </form>
      </div>
      <div className="w-4/12"></div>
      <div>
        <img 
          src={QrCodeImage} 
          alt="" 
          className="w-[270px] h-[200px]"
          />
      </div>
    </div>
  )
}

export default PaymentPage;
