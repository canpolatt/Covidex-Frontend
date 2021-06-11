import React from 'react';
import  '../Form.css'
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Link} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ReactComponent as CovidIcon} from "../svgs/coronavirus_black_24dp (1).svg";

const schema = yup.object().shape({
    username:yup.string().required("Username required!"),
    password:yup.string().required("Password required!"),
});

function LoginForm() {
    const {register,handleSubmit,formState: { errors }}=useForm(
        {
            resolver:yupResolver(schema),
        }
    );
    const onSubmit=async(data)=> {
        await axios.post("http://localhost:4000/api/authentication/login",data)
            .then(response => {
                if(response.data.success===true){
                    toast.success("✅ Başarıyla giriş yapıldı!")
                }
                else if(response.data.success===false){
                    toast.error("❌ "+response.data.message)
                }
            })
            .catch(error => {
                console.error(error)
            });
    };
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
                <h1>covide<span className="spanHeader">x</span></h1>
                <CovidIcon className="covidIcon"/>
                <p>
                    <label> Username</label>
                </p>
                <p>
                    <input type="text" className="input"  placeholder="" {...register("username")} />
                    <p className="error">{errors.username?.message}</p>
                </p>
                <p>
                    <label>Password</label>
                </p>
                <p>
                    <input type="password" className="input"  placeholder="" {...register("password")} />
                    <p className="error">  {errors.password?.message}</p>
                </p>
                <button className='btn' type='submit'>Sign In</button>
                <p className="subtext">You don't have an account? Sign up <Link to="/register" className="link">here</Link> </p>
            </form>
        </div>
    );
}

export default LoginForm;
