import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FretboardDisplayer from './components/FretboardDisplayer';
import './components/FretboardDisplayer.module.css';
import FretboardDisplayer21 from './components/fretboardDisplayer21';
import styles from '.pages/fretboardPage.module.css';

const FretboardPage = () => {
  const [fretboardOrientation, setFretboardOrientation] = useState('vertical');
  const [firstChordColor, setFirstChordColor] = useState('#f08c00');
  const [secondChordColor, setSecondChordColor] = useState('#00e1ff');

  // Mock chord data for demonstration
  const firstChord = {
    name: 'C Major',
    spelling: ['C', 'E', 'G'],
    root: 'C',
    fretStart: 8,
    positions: [
      { string: 6, fret: 8 },
      { string: 5, fret: 10 },
      { string: 4, fret: 10 },
      { string: 3, fret: 9 },
      { string: 2, fret: 8 },
      { string: 1, fret: 8 }
    ]
  };

  const secondChord = {
    name: 'G7',
    spelling: ['G', 'B', 'D', 'F'],
    root: 'G',
    fretStart: 3,
    positions: [
      { string: 6, fret: 3 },
      { string: 5, fret: 5 },
      { string: 4, fret: 3 },
      { string: 3, fret: 4 },
      { string: 2, fret: 3 },
      { string: 1, fret: 3 }
    ]
  };

  // Toggle fretboard orientation
  const toggleOrientation = () => {
    setFretboardOrientation(prev => prev === 'vertical' ? 'horizontal' : 'vertical');
  };

  return (
    <div className={styles.fretboardPage}  style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      minHeight: '100vh', 
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px'
    }}>
      <h1>Fretboard Visualization</h1>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%', 
        maxWidth: '800px',
        marginBottom: '20px'
      }}>
        <Link to="/" style={{ 
          color: 'white', 
          textDecoration: 'none',
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '8px 15px',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}>
          Back to Home
        </Link>
        
        <button 
          onClick={toggleOrientation}
          style={{
            background: 'rgba(142, 68, 173, 0.8)',
            color: 'white',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Toggle Orientation
        </button>
      </div>
      
      <div style={{ 
        background: 'rgba(30, 30, 30, 0.8)', 
        borderRadius: '8px',
        padding: '20px',
        width: '100%',
        maxWidth: '800px',
        marginBottom: '40px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Chord Visualization</h2>
        
        {/* <FretboardDisplayer 
          firstChord={firstChord}
          secondChord={secondChord}
          orientation={fretboardOrientation}
          firstChordColor={firstChordColor}
          secondChordColor={secondChordColor}
        /> */}
        <FretboardDisplayer21 firstChord={firstChord} secondChord={secondChord} orientation={fretboardOrientation} firstChordColor={firstChordColor} secondChordColor={secondChordColor} />   
      </div>
    </div>
  );
};

export default FretboardPage;
