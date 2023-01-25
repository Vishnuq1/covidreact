import React,{useState,useEffect} from 'react';

const StateWise=()=>{

    const [data, setData]= useState([]);


const getCovidData= async ()=>{
  const res= await fetch('https://data.covid19india.org/v4/min/data.min.json');
  const actualData = await res.json();
  console.log(actualData.StateWise);
  setData(actualData.StateWise);
}


    useEffect(()=>{
   //getCovidData();
    },[]
    );
    return(
<>
       
        <div className="container-fluid mt-5">
        <div className="main-heading">
        <h1 className="mb-5 text-center"><span classNmae="font-weight-bold">India</span>COVIS-19</h1>
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

    <tr>
<td>{curElem.State}</td>
<td>Confirmed</td>
<td>Recovered</td>
<td>Death</td>
<td>Active</td>
<td>Updated</td>

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