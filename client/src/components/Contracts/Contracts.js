import React, { useEffect, useState } from "react";
import Moment from "moment";
import "../../App.scss";
import {axios} from "../../common/axios";

export const Contracts = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    console.log('UnpaidJobs')
    getContracts();
  }, []);

  const getContracts = async () => {
    const resp = await axios.get("/contracts");
    await setContracts(resp.data);
  };

  return (
    <>
    <h1>Contracts</h1>
    <div className="parent">
      {contracts.map((contract) => {
        return (
          <div className="child" key={contract.id}>
            <div className="content">
              <h4 className="ui sub header">{contract.terms}</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary">
                      <strong>Client: </strong>
                      {contract.Client.firstName} {contract.Client.lastName}
                    </div>
                    <div className="summary">
                      <strong>Contractor: </strong>
                      {contract.Contractor.firstName}{" "}
                      {contract.Contractor.lastName}
                    </div>
                    <div className="summary">
                      <strong>Status: </strong>
                      {contract.status}
                    </div>
                    <div className="summary">
                      <strong>Created At: </strong>
                      {Moment(contract.createdAt).format("YYYY-MM-DD")}
                    </div>
                    <div className="summary">
                      <strong>Updated At: </strong>
                      {Moment(contract.updatedAt).format("YYYY-MM-DD")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
      </>
  );
};