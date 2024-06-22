import HomePageForm from "../components/HomePage/HomePageForm"
import HomePageHeader from "../components/HomePage/HomePageHeader"

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <HomePageHeader />
        <HomePageForm />
    </div>
  )
}

export default HomePage
