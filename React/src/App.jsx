import {
  Route,
  Routes
} from "react-router-dom"
import './App.css'
import Header from './component/Header/Header'
import Advertisement from "./Pages/Advertisement/Advertisement"
import CreateAd from './Pages/CreateAd/CreateAd'
import Main from './Pages/Main/Main'
import NotFound from "./Pages/NotFound/NotFound"
import Authorization from "./Pages/Authorization/Authorization"
import { AuthProvider } from "./context/AuthContext"
import Profile from "./Pages/Profile/Profile"




function App() {
    return(
      <>
        <AuthProvider>
          <Header/>
          <div className="main-wrap">
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/create-ad" element={<CreateAd/>}/>
              <Route path="/advertisement" element={<Advertisement/>}/>
              <Route path="/auth" element={<Authorization/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          </div>
        </AuthProvider>
      </>
    )
}

export default App
