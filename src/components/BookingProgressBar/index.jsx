import React, { useEffect, useState } from 'react'
import styles from "./progressBar.module.css"
import ProgressBar from "@ramonak/react-progress-bar";
export const BookingProgressBar = ({progressBarValue}) => {

  return (
    <>
        <ProgressBar completed={progressBarValue} borderRadius={0} bgColor={'#0C264B'} isLabelVisible={false} height={'15px'} transitionDuration={'2s'}/>
    </>
  )
}
