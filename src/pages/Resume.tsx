import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf'

function getCurrentDimension(){
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}

function Resume() {
  const pdfURL = '/pdf/TheoDonacikResume.pdf';
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    <div>
      <embed
        src={pdfURL}
        type="application/pdf"
        height={screenSize.height}
        width={screenSize.width}
      />
    </div>
  )
}

export default Resume;