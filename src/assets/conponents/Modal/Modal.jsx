import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/Authprovider';

const Modal = ({treatment}) => {
    const {user} = useContext(authContext)
    const handelSubmit = (e) =>{
        e.preventDefault()
        console.log(e);
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const date =e.target.date.value;
        const address = e.target.address.value;
        const info ={
            fname, lname, email:user, treatment,number,date, address
        }

        let saveData = []
        const localData = localStorage.getItem("appoinments");
        if(localData){
            saveData = JSON.parse(localData)
        }
        saveData.push(info);
        localStorage.setItem("appoinments", JSON.stringify(saveData))
    }
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* input fill */}
                    <form onSubmit={handelSubmit}>
                        <h4 className='text-xl font-semibold mb-2'>Fast Name:</h4>
                        <label className="input input-bordered flex items-center gap-2">
                            
                            <input type="text" name='fname' className="grow" placeholder="Fast Name" />
                        </label>
                        <h4 className='text-xl font-semibold mb-2 p-1'>Last Name:</h4>
                        <label className="input input-bordered flex items-center gap-2">  
                            <input type="text" name='lname' className="grow" placeholder="Last Name" />
                        </label>
                        <h4 className='text-xl font-semibold mb-2 p-1'>Email:</h4>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="email" name='email' className="grow" value={user?.email} placeholder="Email" />
                        </label>
                        <h4 className='text-xl font-semibold mb-2 p-1'>Phone Number:</h4>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='number' className="grow" placeholder="Phone Number" />
                        </label>
                        <h4 className='text-xl font-semibold mb-2 p-1'>Appoinment Date:</h4>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="date" name='date' className="grow" placeholder="Date" />
                        </label>
                        <h4 className='text-xl font-semibold mb-2 p-1'>Address:</h4>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='address' className="grow" placeholder="Address" />
                        </label>
                        <button className='btn btn-secondary mt-5' type='submit'>Appoinment here</button>
                    </form>



                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;