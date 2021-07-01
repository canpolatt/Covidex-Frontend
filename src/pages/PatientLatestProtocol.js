import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiHospitalLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export default function PatientLatestProtocol() {
  const [protocolList, setProtocolList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/api/protocols/getProtocolsByIdentityNumber?identityNumber=" +
          localStorage.getItem("patientIdentity")
      )
      .then((response) => {
        setProtocolList(response.data);
      })
      .catch((error) => {
        console.log("İşlem başarısız");
      }, []);
  });
  return (
    <div className="tableContainer">
      <h1>Latest Appointments</h1>
      <div className="covid-icon">
        <RiHospitalLine />
      </div>
      <table>
        <tr>
          <th>No</th>
          <th>Identity Number</th>
          <th>Date of Appointment</th>
          <th>Details</th>
          <th>Name of Doctor</th>
          <th>Status</th>
        </tr>
        {protocolList.map((val, index) => (
          <tr key={val.id}>
            <td>{index + 1}</td>
            <td>{val.identityNumber}</td>
            <td>{val.dateOfProtocol}</td>
            <td>{val.detail}</td>
            <td>{val.nameOfDoctor}</td>
            <td>
              {" "}
              <TiTick />{" "}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
