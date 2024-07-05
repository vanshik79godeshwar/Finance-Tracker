import React, {useEffect, useState} from 'react'

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const style = {
        position: 'fixed',
        top: '0',
        height: '3px',
        zIndex: '1000',
        width: '100%',
    };
  return (
        <div className="progress" style={style} role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar w-0" style={{width: `${progress}%`, transition: "width 0.15s ease", backgroundColor: "#09111C"}}></div>
        </div>
  )
}
