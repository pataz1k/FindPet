import {
  Route,
  Routes
} from "react-router-dom"
import './App.css'
import Advertisement from "./Pages/Advertisement/Advertisement"
import Authorization from "./Pages/Authorization/Authorization"
import CreateAd from './Pages/CreateAd/CreateAd'
import Main from './Pages/Main/Main'
import NotFound from "./Pages/NotFound/NotFound"
import Profile from "./Pages/Profile/Profile"
import Header from './component/Header/Header'
import { AuthProvider } from "./context/AuthContext"
import { LoadingProvider } from "./context/LoadingContext"
import PetDetail from "./Pages/PetDetail/PetDetail"
import { Bounce, Slide, ToastContainer } from "react-toastify"



function App() {

    return(
      <>
        <AuthProvider>
          <Header/>
            <LoadingProvider>
                <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/create-ad" element={<CreateAd/>}/>
                  <Route path="/advertisement" element={<Advertisement/>}/>
                  <Route path="/advertisement/:petID" element={<PetDetail/>}/>
                  <Route path="/auth" element={<Authorization/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/*" element={<NotFound/>}/>
                </Routes>
                <ToastContainer
                  stacked
                  position="bottom-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  transition={Slide}
                />
            </LoadingProvider>
        </AuthProvider>
      </>
    )
}

export default App
