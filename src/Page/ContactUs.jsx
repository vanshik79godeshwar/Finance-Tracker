import React from 'react';
// import AnimatedIcon from '../components/User/AnimatedIcon';
import '../components/User/AnimatedIcon.css'
import Navbar from  '../components/Navbar';
 

const App = () => {
  return (
    <div className="app">
       
      <Navbar />
       
     <div className="wrapper">
                
             <div className="containerc">
                 <form action="#" method="POST" className="feedback-form">
                     <h2>FEEDBACK FORM</h2>
         
                     <div className="form-group">
                         <label htmlFor="name">Your Name:</label>
                         <input type="text" id="name" name="name" className="custom-input"required/>
                     </div>
         
                     <div className="form-group">
                         <label htmlFor="email">Your Email:</label>
                         <input type="email" id="email" name="email" className="custom-input"required/>
                     </div>
         
                     <div className="form-group">
                         <label htmlFor="feedback-type" >Feedback Type:</label>
                         <select id="feedback-type" className="custom-input" name="feedback-type" required>
                             <option value="">Select</option>
                             <option value="Compliment">Compliment</option>
                             <option value="Suggestion">Suggestion</option>
                             <option value="Complaint">Complaint</option>
                         </select>
                     </div>
         
                     <div className="form-group">
                         <label htmlFor="comments">Comments:</label>
                         <textarea id="comments" className="custom-input" name="comments" rows="4" required></textarea>
                     </div>
     
                     <div   className="rating">
                        <input value="5" name="rating" id="star5" type="radio" />
                         <label htmlFor="star5"></label>
                         <input value="4" name="rating" id="star4" type="radio"/>
                         <label htmlFor="star4"></label>
                         <input value="3" name="rating" id="star3" type="radio"/>
                         <label htmlFor="star3"></label>
                         <input value="2" name="rating" id="star2" type="radio"/>
                         <label htmlFor="star2"></label>
                         <input value="1" name="rating" id="star1" type="radio"/>
                         <label htmlFor="star1"></label>
                       </div>
         
                     <button type="submit">Submit Feedback</button>
                 </form>
             </div>
          
         <div className="container">
            <a href="page1.html" className="google-icon icon1"></a>
             <a href="mailto:capitalcompassforyou@gmail.com" className="google-icon icon2"></a>
             <a href=" https://www.instagram.com/" className="google-icon icon3"></a>
               <a href=" https://in.linkedin.com/" className="google-icon icon4"></a>
               <a href="page5.html" className="google-icon icon5"></a> 
               <a href="page6.html" className="google-icon icon6"></a>
              
         </div>
     </div>
    </div>
  );
}

export default App;