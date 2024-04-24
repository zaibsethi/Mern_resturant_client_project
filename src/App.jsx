import './App.css'
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from '../src/pages/Home'
import Success from '../src/pages/Success'
import NotFound from '../src/pages/NotFound'
 const App = () => {
  return (
    <Router>
 <Routes>

<Route path='/' element={<Home/>} />
<Route path='/success' element={<Success/>} />
<Route path='*' element={<NotFound/>} />


 </Routes>
 <Toaster/>
    </Router>
   
  )
}


export default App