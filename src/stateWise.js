import React,{useState,useEffect} from 'react';

const StateWise=()=>{

    const [data, setData]= useState([]);


const getCovidData= async ()=>{
  const res= await fetch('	https://api.covid19india.org/data.json');
  const actualData = await res.json();
  console.log(actualData.StateWise);
  setData(actualData.StateWise);
}


    useEffect(()=>{
   getCovidData();
    },[]
    );
    return(
<>
       
        <div className="container-fluid mt-5">
        <div className="main-heading">
        <h1 className="mb-5 text-center"><span className="font-weight-bold">India</span>COVIS-19</h1>
        </div>

<div className="table-responsive">
<table className="table table-hover">
<thead className="thead-dark">
<tr>
<td>State</td>
<td>Confirmed</td>
<td>Recovered</td>
<td>Death</td>
<td>Active</td>
<td>Updated</td>

</tr>
</thead>
 <tbody>


{
    data.map((curElem, ind)=>{
return(

    <tr key={ind}>
<td>{curElem.state}</td>
<td>{curElem.confirmed}</td>
<td>{curElem.recovered}</td>
<td>{curElem.death}</td>
<td>{curElem.active}</td>
<td>{curElem.updated}</td>

</tr>
);
    })
}

</tbody>
</table>
</div>



        </div>

        </>
    );
}

export default StateWise;