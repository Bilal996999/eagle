import React from 'react'
import styles from "./inputLabel.module.css"
export const InputLabel = ({children}) => {
  return (
    <>
        <h5 style={{fontSize: "17px", fontWeight:"600"}}>{children} <span style={{color: 'red'}}>*</span></h5>
    </>
  )
}
