
import FlashArrows from '../assets/images/flash-arrows.png';
import QrCodeImage from '../assets/images/qr-code.png';
import { DiscountComponent } from '../components/DiscountComponent';

const DownloadAppPage = () => {
  return (
    <div className="max-[640px]:p-8 max-[640px]:flex-col flex md:flex-row h-screen md:w-6/12 m-auto justify-center" style={{ alignItems: 'center' }}>
      <div className="flex flex-col ">
        <div className="mb-8">
            <img src={FlashArrows} alt="" className="h-35 w-42 mb-4 font-raleway"/>
            <h2 className="text-[#2C2C84] text-xl font-raleway	font-bold">Hey there!</h2>
        </div>

        <div>
          <p className="text-[#434547] mb-1 font-light">Seems like you don&apos;t have Flash app.</p>
          <p>Scan this qr code to download it, create an account and pay the easy way!</p>
        </div>

        <DiscountComponent />
      </div>
      <div className="md:w-2/12 max-[640px]:w-full"></div>
      <div>
        <img 
          src={QrCodeImage} 
          alt="" 
          className="w-[250px] h-[210px] mt-12 max-[640px]:w-full"
          />
      </div>
    </div>
    
  )
}

export default DownloadAppPage
