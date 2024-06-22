import HomePageForm from "../components/HomePage/HomePageForm"
import HomePageHeader from "../components/HomePage/HomePageHeader"

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen w-3/12 m-auto justify-center">
        <HomePageHeader />
        <HomePageForm />
    </div>
  )
}

export default HomePage
