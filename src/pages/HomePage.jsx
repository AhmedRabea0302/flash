import HomePageForm from "../components/HomePage/HomePageForm"
import HomePageHeader from "../components/HomePage/HomePageHeader"

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen md:w-3/12 md:m-auto md:justify-center">
        <HomePageHeader />
        <HomePageForm />
    </div>
  )
}

export default HomePage
