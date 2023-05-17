import { useState } from "react"
import Child from "./Child"
import { Field, Formik } from "formik";

const Parent = () => {
    const [value, setValue] = useState<any>(['']);
    
  return (
    <section>
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <Formik
                        initialValues={{InputValue : ""}}
                        onSubmit={(values,actions) =>{
                            actions.resetForm()
                            setValue([values.InputValue, ...value])
                        }}
                    >
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <Field className="form-control" name="InputValue" type="text" placeholder="Please enter number's" aria-label="default input example"/>
                                <button type="submit" className="btn btn-primary my-2">Submit</button>
                            </form>
                        )}
                    </Formik>
                </div>
                <Child value={value}/>
            </div>
        </div>
    </section>
  )
}

export default Parent