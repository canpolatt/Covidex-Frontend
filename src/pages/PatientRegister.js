import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
//import {ReactComponent as CovidIcon} from "../svgs/coronavirus_black_24dp (1).svg";
import { RiUserAddLine } from 'react-icons/ri';

// import {Card,CardContent} from "@material-ui/core";
// import {Field,Form,Formik} from "formik";
// import {TextField} from "formik-material-ui";


const schema = yup.object().shape({
    firstName: yup.string().required("First name required!"),
    lastName:yup.string().required("Last name required!"),
    identityNumber:yup.string().required("Identity number required!").min(11).max(11),
    status:yup.boolean().required("Status required!"),
    address:yup.string().required("Address required!"),
    bloodType:yup.string().required("Blood type required!"),

});

function PatientRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const onSubmit = async (data) => {
        console.log(data)
        await axios.post("http://localhost:4000/api/patients/add",data)
            .then(response => {
                if(response.data.success===true){
                    toast.success("✅ Başarıyla kayıt olundu!")
                }
            })
            .catch(error => {
                toast.error("❌ Kayıt başarısız!")
            });
    }
    return (
        <>
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

        <div className="register">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Patient Register</h1>
                    <div className="covid-icon">
                        <RiUserAddLine/>
                    </div>
                    <div className="sections">
                       <div className="section-1">
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
                       </div>
                        <div className="section-2">
                        <p>
                            <label>Status</label>
                        </p>
                        <p>
                            <input type="text" className="input"  placeholder="true/false" {...register("status")} />
                            <p className="error">{errors.status?.message}</p>
                        </p>
                        <p>
                            <label>Address</label>
                        </p>
                        <p>
                            <input type="text" className="input"  placeholder="" {...register("address")} />
                            <p className="error">{errors.address?.message}</p>
                        </p>

                        <p>
                            <label>Blood Type</label>
                        </p>
                        <p>
                            <input type="text" className="input"  placeholder="A Rh(+)" {...register("bloodType")} />
                            <p className="error">{errors.bloodType?.message}</p>
                        </p>
                        <p>
                            <label>Name of Mother</label>
                        </p>
                        <p>
                            <input type="text" className="input"  {...register("nameOfMother")} />
                        </p>

                        <p>
                            <label>Name of Father</label>
                        </p>
                        <p>
                            <input type="text" className="input"  {...register("nameOfFather")} />
                        </p>
                    </div>
                    </div>
                    <button className='btn btn-small' type='submit'>Register</button>
                </form>
{/*            <Card>
                <CardContent>
                        <Formik initialValues={{
                            firstName:'',
                            lastName:'',
                            identityNumber:'',
                            gender:'',
                            birthDate:'',


                        }} onSubmit={()=>{}}>
                            <Form autoComplete="off">
                                <Field name="firstName" component={TextField} label="First Name"/>
                                <Field name="lastName" component={TextField} label="Last Name"/>
                                <Field name="identityNumber" component={TextField} label="Identity Number"/>
                                <Field name="gender" component={TextField} label="Gender"/>
                                <Field name="birthDate" type="date" component={TextField} label="Birthdate"/>
                            </Form>
                        </Formik>
                </CardContent>
            </Card>*/}

        </div>
        </>
    );
}

export default PatientRegister;
