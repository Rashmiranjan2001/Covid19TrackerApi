import React, { useEffect, useState } from "react";
import "./StateWise.css";

const StateWise = () => {
  const [Data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5">
            {" "}
            <span className="font-weight-bold"> INDIA </span> COVID-19 DASHBOARD{" "}
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th> State </th>
                <th> Confirmed </th>
                <th> recovered </th>
                <th> deaths </th>
                <th> active </th>
                <th> updated </th>
              </tr>
            </thead>
            <tbody className="anything" >
              {Data.map((curElement, ind) => {
                return (
                  <tr>
                    <td> {curElement.state} </td>
                    <td> {curElement.confirmed} </td>
                    <td> {curElement.recovered} </td>
                    <td> {curElement.deaths} </td>
                    <td> {curElement.active} </td>
                    <td> {curElement.lastupdatedtime} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWise;
