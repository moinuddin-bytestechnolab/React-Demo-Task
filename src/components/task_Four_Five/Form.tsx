import { useFormik } from 'formik';
import { validationSchema } from "../../schemas"
import { useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postUserData, getUserByID, updateUserData } from '../../API';

const Form = () => {    
    const navigate = useNavigate();
    const {id} = useParams();
    
    const getSingleUserDataByID = async () => {
        const res = await getUserByID(id);
          
        formik.setValues({
            "firstname":res.user.firstname,
            "lastname":res.user.lastname,
            "email": res.user.email,
            "address": res.user.address,
            "dob": res.user.dob
        })
    }

  useEffect(() => {
    if(id){
        getSingleUserDataByID()
    }
  },[id]);
  
    const formik = useFormik({
        initialValues : {
            firstname : "",
            lastname : "",
            email : "",
            address : "",
            dob : "",
        },
        validationSchema : validationSchema,
        onSubmit : (values) => {
            if(id){
                updateUserData(id,values)
                navigate("/user-data")
            }else{
                postUserData(values)
                navigate("/user-data")
            }
        }
    })

  return (
    <section>
        <div className="container mt-4">
            <form onSubmit={formik.handleSubmit}>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="firstname">First name</label>
                            <input type="text" id="firstname" value={formik.values.firstname} onChange={formik.handleChange} name="firstname" className="form-control"/>
                            <span className="text-danger">{formik.errors.firstname}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="lastname">Last name</label>
                            <input type="text" id="lastname" value={formik.values.lastname} onChange={formik.handleChange} name="lastname" className="form-control" />
                            <span className="text-danger">{formik.errors.lastname}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-6">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input type="text" id="email" value={formik.values.email} onChange={formik.handleChange} name="email" className="form-control" />
                            <span className="text-danger">{formik.errors.email}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="address">Address</label>
                            <input type="text" id="address" value={formik.values.address} onChange={formik.handleChange} name="address" className="form-control" />
                            <span className="text-danger">{formik.errors.address}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="dob">Date Of Birth</label>
                            <input type="date" id="dob" value={formik.values.dob} onChange={formik.handleChange} name="dob" className="form-control" />
                            <span className="text-danger">{formik.errors.dob}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <button type="submit" disabled={false} className="btn btn-success">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Form