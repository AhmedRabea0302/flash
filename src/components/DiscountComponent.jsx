import { RiDiscountPercentFill } from "react-icons/ri"

export const DiscountComponent = () => {
  return (
    <div className="max-[640px]:mb-12 flex flex-row align-center mt-6 text-[#2C2C84] bg-[#CBF15E] bg-opacity-30 w-10/12 py-2 px-2 rounded-md">
        <RiDiscountPercentFill className="mr-1"/>
        <p className="text-xs font-[600] font-raleway">Get 20% off on your first payment </p>
    </div>
  )
}
