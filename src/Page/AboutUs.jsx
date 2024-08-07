import React from 'react';
import './AboutUs.css'; // Make sure you create and import the CSS file
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import flower from '../assets/flower.jpg';
import stratandexec from '../assets/stratandexec.png';
import security from '../assets/security.png';
const AboutUs = () => {

  const cards = [
    {
      title: "Awards and Recognition",
      description: "Our dedication to excellence has earned us numerous industry awards and accolades for innovation, customer service, and community involvement."
    },
    {
      title: "Technology",
      description: "We leverage cutting-edge technology to deliver secure, user-friendly financial solutions tailored to meet the diverse needs of our clients."
    },
    {
      title: "Testimonials",
      description: "\"Our experience has been transformative. Their personalized financial advice and dedicated support have helped us navigate complex financial decisions with confidence.\""
    },
    {
      title: "Community Involvement",
      description: "We are committed to giving back to our community through financial literacy programs, local sponsorships, and volunteer initiatives.We are committed to giving back to the communities we serve through a variety of initiatives aimed at promoting financial education and economic empowerment. Our dedicated team actively participates in local events, offers free financial workshops, and collaborates with schools and nonprofit organizations to provide resources and support."
    },
    {
      title: "Vision",
      description: "At CapitalCompass, our vision is to empower individuals and businesses with innovative financial solutions, fostering a future of financial stability and growth for all. We strive to be the trusted partner in our clients' financial journeys, providing them with the tools, knowledge, and support needed to navigate the complexities of the financial world with confidence.Our vision is to empower individuals and businesses with innovative financial solutions, fostering a future of financial stability and growth for all."
    },
  ];


  return (
    <div className="aboutus-page">
      <Navbar />
      <header className=" description aboutus-header">
        <br></br>
        <p>Finance Consultants for a Growth Mindset</p>
      </header>


      <div className="aboutus-container">
        <div className="line">
          <div className="box black" style={{ width: '40%' }}><p style={{ color: '#adb6b6' }}>PERSONAL CONSULTANTS</p>
            Trying out our services for the first time? No problem! Book a free consultation with us.</div>
          <div className="box2 lightblue" style={{ width: '20%' }}>   <div>
            <FontAwesomeIcon icon={faArrowDown} size="6x" color="black" />
          </div></div>
          <div className="box black" style={{ width: '30%' }}><p style={{ color: '#adb6b6' }}>LATEST UPDATES</p>
            Our news section is the perfect fit for your daily dose of updates.</div>
        </div>
        <div className="line">
          <img src="https://static.wixstatic.com/media/c837a6_5e19bd47c2dc45398993d8c780db299a~mv2.jpg/v1/fill/w_257,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_5e19bd47c2dc45398993d8c780db299a~mv2.jpg" className="aboutus-image " alt="Sample" />
          <div className="box black" style={{ width: '60%' }}> Our team is a group of experienced professionals with deep expertise in finance, technology, and customer service. Our technology experts develop secure, user-friendly platforms, while our customer service team ensures exceptional,  support. Together, we are committed to helping our clients achieve their financial goals and building lasting relationships.</div>
          <div className="box lightblue" style={{ width: '10%' }}></div>
        </div>
      </div>
      <div style={{ color: '#27292b' }}>
        <div className="info-cards">
          <p style={{ fontSize: '100px', color: '#555657' }}> A little more before you go....</p>
          <br>
          </br>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                <img src={flower} alt="icon" />
              </div>
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
      {/* <div className='container1'>
      <div className='lefthalf1'>
      
      Our strategy is built on education, innovation, and personalization. We empower clients with essential financial knowledge through comprehensive resources and personalized guidance. By leveraging cutting-edge technology, we deliver innovative financial solutions tailored to individual needs, ensuring our clients can confidently navigate their financial journeys and achieve their goals.

      </div>
<div className='righthalf1'>
we execute our strategy through a seamless blend of technology and personalized service. Our state-of-the-art platform offers intuitive tools and resources, while our dedicated team provides expert advice and support. We continuously monitor and adapt to market changes, ensuring our clients benefit from the most current and effective financial strategies. By maintaining a client-centric approach, we deliver customized solutions that drive success and growth.
</div>

      </div>   */}
      <br>
      </br>
      <div className='strat'>
        <img src={stratandexec} alt="icon" />
      </div>
      <br>
      </br>
      <div className='strat'>
        <img src={security} alt="icon" />
      </div>
    </div>
  );
};

export default AboutUs;
