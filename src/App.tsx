import TaskOneTwo from './components/task_One_Two';
import TaskThree from './components/task_Three';
import Navbar from './components/task_Four_Five/Navbar';
import { Route, Routes } from 'react-router-dom';
import User_Data from './components/task_Four_Five/User_Data';
import Form from './components/task_Four_Five/Form';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<TaskOneTwo/>}/>
        <Route path='/task-two' element={<TaskThree/>}/>
        <Route path='/user-data' element={<User_Data/>}/>
        <Route path='/user-register/:id?' element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App