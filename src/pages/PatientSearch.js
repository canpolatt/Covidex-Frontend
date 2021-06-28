import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HumanVector from "../images/output-onlinepngtools2.png";
import { RiUserSearchLine } from 'react-icons/ri';


const schema = yup.object().shape({
    identityNumber:yup.string().required("Identity number required!").min(11).max(11),

});

function PatientSearch() {
    const [patientInfo,setPatientInfo]=useState("")
    const [showInfo,setShowInfo]=useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const onSubmit = async (data) => {
        await axios.get("http://localhost:4000/api/patients/getByIdentityNumber?identityNumber="+data.identityNumber)
            .then(response => {
                console.log(response)
                if(response.data.success===true){
                    //toast.success("✅ Başarıyla kayıt olundu!")
                    if(response.data.data===null){
                        toast.error("❌ Böyle bir kullanıcı yok !!")
                    }
                    setPatientInfo(response.data.data)
                    setShowInfo(true)
                }
            })
            .catch(error => {
                console.log("İşlem başarısız")
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
            
        <div className="patientSearch">
           {/* {!showInfo ?  */}
           <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Patient Search</h1>
                    <div className="covid-icon">
                        <RiUserSearchLine/>
                    </div>
                    <p>
                               <label>Identity Number</label>
                           </p>
                           <p>
                               <input type="text" className="input inputLarge"  placeholder="" {...register("identityNumber")} />
                               <p className="error">{errors.identityNumber?.message}</p>
                           </p>
                    <button className='btn btn-small' type='submit'>Search</button>  
                    <p className="subtext">Your patient doesn't have a protocol? Create a new one <Link to="/dashboard/patientProtocol" className="link">here</Link></p>
                    
                    {showInfo && patientInfo!=null ? 
                    <>
                    <div className="patientInfo">
                    <p><img src={HumanVector} alt="Vector of human"/></p>
                    <p><label>First Name: </label><span className="patientInfo-span">{patientInfo.firstName}</span></p>
                    <p><label>Last Name: </label><span className="patientInfo-span">{patientInfo.lastName}</span></p>
                    <p><label>Identity Number: </label><span className="patientInfo-span">{patientInfo.identityNumber}</span></p>
                    <p><label>Birth Date: </label><span className="patientInfo-span">{patientInfo.birthDate}</span></p>
                    <p><label>Name of Mother: </label><span className="patientInfo-span">{patientInfo.nameOfMother}</span></p>
                    <p><label>Name of Father: </label><span className="patientInfo-span">{patientInfo.nameOfFather}</span></p>
                    <p><label>Blood Type: </label><span className="patientInfo-span">{patientInfo.bloodType}</span></p>
                    <p><label>Address: </label><span className="patientInfo-span">{patientInfo.address}</span></p>
                    <p><label>Gender: </label><span className="patientInfo-span">{patientInfo.gender}</span></p>
                    </div>
                    </>
                 :
                <></>
                 }
                </form>
                {/* :  <></> */}
                {/* } */}
             {/* {
                showInfo && patientInfo!=null ?  
                :
             <>
             </>
             } */}
            
        </div>
        </>
    )
}
export default PatientSearch;