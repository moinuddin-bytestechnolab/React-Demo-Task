import { IInputValue } from '../../interfaces/CardInterfaces';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Child = ({value} : IInputValue) => {
    const valArr = value.map(Number)
    const sum = valArr.reduce((total, num) => total + num)
   
    const notify : any = () => {
      toast.warning("Can't add more values")
    }

    return (
      <div>
        {
          sum <=1000 && sum >=0 ? sum : <h5>{notify()} Can't add more values</h5>
        }
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      </div>
  )
}

export default Child