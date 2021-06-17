import React from 'react';
import axios from 'axios'
import  '../Form.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Link, useHistory} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
    firstName: yup.string().required("First name required!"),
    lastName:yup.string().required("Last name required!"),
    identityNumber:yup.string().required("Identity number required!").min(11).max(11),
    password:yup.string().required("Password required!").min(6).max(16)
});

function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );
    const history=useHistory();
    const onSubmit = async (data) => {
        await axios.post("http://localhost:4000/api/doctors/add",data)
            .then(response => {
               if(response.data.success===true){
                   toast.success("✅ Başarıyla kayıt olundu!")
                   setTimeout(function (){
                       history.push({
                           pathname:"/"
                       })
                   },1500)

               }
            })
            .catch(error => {
                toast.error("❌ Kayıt başarısız!")
            });


    }
    return (
        <div className="Forms">
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
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign Up</h1>
                <p>
                    <label>First Name</label>
                </p>
                <p>
                    <input type="text" className="input"  placeholder="" {...register("firstName")} />
                   <p className="error">{errors.firstName?.message}</p>
                </p>
                <p>
                    <label>Last Name</label>
                </p>
                <p>
                <input type="text" className="input"  placeholder="" {...register("lastName")} />
                   <p className="error">{errors.lastName?.message}</p>
                </p>
                <p>
                    <label>Identity Number</label>
                </p>
                <p>
                    <input type="text" className="input"  placeholder="" {...register("identityNumber")} />
                    <p className="error">{errors.identityNumber?.message}</p>
                </p>
                <p>
                    <label>Password</label>
                </p>
                <p>
                <input type="password" className="input"  placeholder="" {...register("password")} />
                  <p className="error">  {errors.password?.message}</p>
                </p>
                <p>
                    <label>Gender</label>
                </p>
                <p>
                    <input type="text" className="input"  placeholder="M / F" {...register("gender")} />
                </p>
                <p>
                    <label>Birth Date</label>
                </p>
                <p>
                    <input type="date" className="input"  {...register("birthdate")} />
                </p>
                <button className='btn' type='submit'>Sign Up</button>
                <p className="subtext">You have an already account? Sign in <Link to="/" className="link">here</Link> </p>
            </form>
        </div>
    );
}

export default RegisterForm;

