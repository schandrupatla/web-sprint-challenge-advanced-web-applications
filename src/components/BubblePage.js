import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import fetchColorService from '../services/fetchColorService';



const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(()=>{
     fetchColorService().then((res)=>{
      setColors(res);
     });  
    
  },[])
  
 
  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
      .put(`/colors/${editColor.id}`, editColor)
      .then((res) => {
        // console.log("Save data:",res.data)
        setColors(colors.map(color => { 
          if(color.id === editColor.id) {
            return res.data
          }
        return color;
        }))
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`/colors/${colorToDelete.id}`)
      .then((res) => {
        const newColors = colors.filter((color) => color.id !== JSON.parse(res.data));
       setColors(newColors);
     })
     .catch((err) => {
       console.log(err);
     });
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
