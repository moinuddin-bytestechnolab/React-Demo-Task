import { useEffect, useState } from 'react';
import { getUserData, deleteUserData } from '../../API';
import { useNavigate } from 'react-router-dom';


const User_Data = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>([])

  const fetchUsers = async () => {
    const res = await getUserData()
    setUserData(res.user)
  }
  
  const deleteUser = async (userId : any) => {
    const res = await deleteUserData(userId)
    alert("Delete succssfully")
    fetchUsers()
  }

  const handleEditUserId = (id : number) => {
    navigate(`/user-register/${id}`)
  }

  useEffect(() => {
    fetchUsers()
  },[userData])

  return (
    <table className="table table-light table-striped mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">DOB</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          userData[0] ? userData.map((item : any,index : any)=>{
            return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.dob}</td>
                  <td>
                    <button type="button" className="btn btn-warning mx-2" onClick={() => handleEditUserId(item.id)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={()=> confirm("Are you sure?") ? deleteUser(item.id) : ""}>Delete</button>
                  </td>
                </tr>
            )
          })
          : 
          <td colSpan={9} className='text-center'><h6>Data not found</h6></td>
        }
      </tbody>
    </table>
  )
}

export default User_Data