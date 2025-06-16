import React from 'react'
import styles from './fretboardDisplayerNew.module.css'
import Fretboard21Horizontal from './fretboard21Horizontal'
import Fretboard21Vertical from './fretboard21Vertical'

const FretboardDisplayerNew = ({firstChord, secondChord, orientation = 'vertical', firstChordColor, secondChordColor}) => {
  // Use different components based on orientation
  const FretboardComponent = orientation === 'vertical' 
    ? Fretboard21Vertical 
    : Fretboard21Horizontal

  return (
    <div className={`${styles.fretboardDisplayer} ${styles[orientation]}`}>
      <FretboardComponent
        chord={firstChord}
        type="first"
        firstChordColor={firstChordColor}
        secondChordColor={secondChordColor}
      />
      <FretboardComponent
        chord={secondChord}
        type="second"
        firstChordColor={firstChordColor}
        secondChordColor={secondChordColor}
      />
    </div>
  )
}

export default FretboardDisplayerNew
