import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Faculty from './pages/Faculty'
import Departments from './pages/Departments'
import DepartmentDetails from './pages/DepartmentDetails'
import DeansHODs from './pages/DeansHODs'
import About from './pages/About'

function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />

      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faculty' element={<Faculty />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/departments/:departmentId' element={<DepartmentDetails />} />
          <Route path='/deans-hods' element={<DeansHODs />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
