import {  
  Route, 
  createBrowserRouter, 
  createRoutesFromChildren, 
  RouterProvider
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<MainLayout />}>
       <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
const App = () => {
  return (<RouterProvider router={router}/>)
}

export default App


// <Navbar />
//         <Hero />
//         <HomeCards />
//         <JobListing />
//         <ViewAllJobs />
