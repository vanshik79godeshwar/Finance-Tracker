import React, {useEffect,useRef} from 'react'
import './parallax.css'
import building from './Medias/building.png'
import hill1 from './Medias/hill1.png'
import hill2 from './Medias/hill2.png'
import hill3 from './Medias/hill3.png'
import hill4 from './Medias/hill4.png'
import hill5 from './Medias/hill5.png'
import plant from './Medias/plant.png'


export default function Parallax() {
        const textRef = useRef(null);
        const hill1Ref = useRef(null);
        const hill4Ref = useRef(null);
        const hill5Ref = useRef(null);
        const buildingRef = useRef(null);
      
        useEffect(() => {
          const handleScroll = () => {
            let value = window.scrollY;
            if(value < 300){
                textRef.current.style.marginTop =  value * 2.5 + 'px'
            hill1Ref.current.style.top = 50 + value * -0.15 + 'px';
            hill4Ref.current.style.left = value * -1.5 + 'px';
            hill5Ref.current.style.left = value * 1.5 + 'px';
            buildingRef.current.style.right = value * -2 + 'px';
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

return (
    <div className='parallax'>
            
            <img ref={hill1Ref} src={hill1} alt='' id='hill1'/>
            <img src={hill2} alt='' id='hill2'/>
            <img src={hill3} alt='' id='hill3'/>
            <img ref={hill4Ref} src={hill4} alt='' id='hill4'/>
            <span ref={textRef} className='parallax-text'>Vanshik</span>
            <img ref={hill5Ref} src={hill5} alt='' id='hill5'/>
            <img ref={buildingRef} src={building} alt='' id='building'/>
            <img src={plant} alt='' id='plant'/>
            
    </div>
)
}