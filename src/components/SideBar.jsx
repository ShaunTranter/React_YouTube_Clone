import React from 'react'
import {Stack} from "@mui/material"
import {categories} from "../utils/constants"
import { Category } from '@mui/icons-material'

const selectedCat = "New";


const SideBar = () => (

    <Stack 
    direction={"row"}
    sx={{ overflow:"auto",
    height:{sx: "auto", md:"95%"},
    flexDirection:{md:"column"}

    }}>
        {categories.map((Category)=>(
            <button className='category-btn'
            style={{background: Category.name === selectedCat && "#FC1503", color:"white"}} key={Category.name}>
                <span style={{color: Category.name === selectedCat ? "white" : "red", marginRight: "10px"}} 
                >{Category.icon}</span>
                <span style={{opacity: Category.name === selectedCat ? 1 : 0.8 }} >{Category.name}</span>
            </button>
        ))}
    </Stack>
)

export default SideBar