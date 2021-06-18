import { axiosWithAuth } from "../helpers/axiosWithAuth";
import React, { useState } from "react";
import BubblePage from "../components/BubblePage";

// const fetchColorService = () => {
// //   const [data, setData] = useState([]);

//   const getColorsData = () => {
//     axiosWithAuth()
//       .get("/colors")
//       .then((res) => {
//         console.log("Colors res:", res);
//         //return(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <div>
//       <BubblePage getColorsData={getColorsData} />
//     </div>
//   );
// };

const fetchColorService = () => {
           axiosWithAuth()
          .get("/colors")
          .then((res) => {
            // console.log("Colors res:", res);
            return res.data;
            // return(<BubblePage data={res.data}/>);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
   

export default fetchColorService;
