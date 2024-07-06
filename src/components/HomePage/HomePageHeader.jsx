import FlashArrows from '../../assets/images/flash-arrows.png'
const HomePageHeader = () => {
  return (
    <div className="mb-10 max-[640px]:mb-28">
        <img src={FlashArrows} alt="" className="h-35 w-42 mb-4 font-raleway"/>

        <h2 className="text-[#2C2C84] text-xl font-raleway	font-bold">Hey there!</h2>
        <h2 className="text-[#2C2C84] text-xl font-raleway	font-bold">Pay with <strong>Flash!</strong></h2>
    </div>
  )
}

export default HomePageHeader
