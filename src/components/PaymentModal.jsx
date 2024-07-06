import { getUserService } from '../Services/UsersService';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export const PaymentModal = ({setShowModal, paymentData}) => {
    const user = getUserService();

  return (
    <>
        <div
        className="m-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none justify-center">
            {/*body*/}
            <div className="p-10 flex flex-col justify-center items-center">
                <IoCheckmarkCircleSharp className="text-[#CBF15E] text-8xl"/>
                <h2 className="text-[#2C2C84] text-xl font-raleway	font-bold mt-6">Thanks {user.first_name?? ''} for using Flash!</h2>
                <p className="mt-3 align-middle items-center" style={{ alignItems: 'center' }}>
                    You have payed  
                    <span className="font-bold"> {paymentData?.amountCents} </span> 
                    EGP and  your order id is <br />
                    <span className="font-mono font-semibold bg-[#CBF15E] px-1 py-1 rounded"> {paymentData?.aggregatorOrderId}</span>
                </p>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-6 rounded-b">
                <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
                >
                    Close
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    )
}

export default PaymentModal;