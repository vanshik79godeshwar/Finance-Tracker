import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import ProgressBar from '../Component/ProgressBar'
import Parallax from '../Component/Parallax'
import Footer from '../Component/Footer'
import './Home.css'

export default function Home() {
  return (
    <>
        <ProgressBar />
        <Navbar />
        <Parallax />
        <div className="space" style={{backgroundColor: "#003329",width: "100%", height: "100px",position: "relative"}}></div>
        <div className="body" style={{position: "relative",zIndex: "2"}}>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat illum quo vel nemo. Veritatis veniam ab eaque recusandae at alias aspernatur labore repudiandae iste vitae saepe unde, delectus laboriosam.</h1>
        </div>
        <Footer />
    </>
  )
}
