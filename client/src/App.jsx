import './App.css'
import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Error from './pages/Error'
// import Overview from './pages/docs/Overview'
// import Feedback from './pages/Feedback'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Documentation from './pages/Documentation'

const App = () => {


    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
                <Route path={'/overview'} element={<Overview/>}/>
                <Route path={'/feedback'} element={<Feedback/>}/>
                <Route path={'/documentation'} element={<Documentation/>}/>
                <Route path={'*'} element={<Error/>}/>

            </Routes>
            <Footer/>
        </Router>

        

    )
}

export default App
