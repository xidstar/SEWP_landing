/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react';
import { useSnapshot } from "valtio";
import { GoArrowRight } from "react-icons/go";


import state from "../store";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: "60px" });
    const snap = useSnapshot(state);

    // Event handler for mouse movement
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX-1,
        y: e.clientY-1,
      });
    };
  
    // Use useEffect to add and remove the event listener
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
  
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []); // Empty dependency array means this effect runs once on mount
  
    return (
        <>
            {snap.isVisible ? (
                <div
                    style={{
                        position: 'fixed',
                        left: position.x,
                        top: position.y,
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        width: '6rem',
                        height: '6rem',
                        borderRadius: '50%',
                        backgroundColor: '#f0e9d5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <GoArrowRight className='text-3xl' />
                </div>
            )
            :
            (
              <div
                style={{
                    position: 'fixed',
                    left: position.x+2,
                    top: position.y+2,
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    border: '1px solid #333'
                }}
            >
                
            </div>
            )
            }
        </>
    );
  };

export default Cursor;