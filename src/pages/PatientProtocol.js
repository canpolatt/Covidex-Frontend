import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { IoCreateOutline } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const schema = yup.object().shape({
  identityNumber: yup
    .string()
    .required("Identity number required!")
    .min(11)
    .max(11),
  details: yup.string().required("Details required!"),
  dateOfProtocol: yup.string().required("Date required!"),
});

export default function PatientProtocol() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const onSubmit = async (data) => {
    data.name_of_doctor = localStorage.getItem("name");
    await axios
      .post("http://localhost:4000/api/protocols/add", data)
      .then((response) => {
        toast.success("✅ Randevu başarıyla oluşturuldu!");
        setTimeout(function () {
          history.push({
            pathname: "/dashboard/patientSearch",
          });
        }, 1500);
      })
      .catch((error) => {
        toast.error("❌ Randevu oluşturma başarısız!");
      });
  };

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
      <div className="patientProtocol">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Create an Appointment</h1>
          <div className="covid-icon">
            <IoCreateOutline />
          </div>
          <p>
            <label>Identity Number</label>
          </p>
          <p>
            <input
              type="text"
              className="input"
              placeholder=""
              {...register("identityNumber")}
            />
            <p className="error">{errors.identityNumber?.message}</p>
          </p>
          <p>
            <label>Details</label>
          </p>
          <p>
            <textarea
              type="text"
              className="input"
              placeholder=""
              {...register("details")}
            />
            <p className="error">{errors.details?.message}</p>
          </p>
          <p>
            <label>Date of Appointment</label>
          </p>
          <p>
            <input
              type="date"
              className="input"
              placeholder=""
              {...register("dateOfProtocol")}
            />
            <p className="error">{errors.dateOfProtocol?.message}</p>
          </p>
          <button className="btn btn-small" type="submit">
            Create
          </button>
          <Link to="/dashboard/patientSearch">
            <button className="btn-red btn-small">Back</button>{" "}
          </Link>
        </form>
      </div>
    </>
  );
}
