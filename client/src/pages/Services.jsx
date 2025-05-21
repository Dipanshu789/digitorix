import vid1 from "../assets/vid1.mp4";
import itConsulting from "../assets/itc.png";
import webApp from "../assets/web.png";
import cloud from "../assets/cloud.png";
import data from "../assets/data.png";
import telecaller from "../assets/caller.png";
import "../services-video.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// ...imports...
export default function Services() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 120 });
  }, []);

  return (
    <>
      <div className="services-video-bg w-100 position-relative p-0">
        <video
          className="services-bg-video"
          src={vid1}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="position-absolute top-0 start-0 m-3 p-2 text-italic text-white services-quote">
          <h4 className="mb-0" style={{ fontWeight: 600 }}>
            Business transformation through technology and AI
          </h4>
        </div>
      </div>
      {/* Our Services Section */}
      <div className="container py-5">
        <h2 className="mb-4 text-center" data-aos="fade-down">Our Services</h2>
        {/* IT Consulting */}
        <div className="row align-items-center my-4" data-aos="fade-up">
          <div className="col-md-7">
            <h4>💼 IT Consulting</h4>
            <p>
              Boost your business with expert IT consulting services. We analyze your current systems and offer tailored tech solutions to improve efficiency, scalability, and security. From digital transformation to infrastructure planning, we guide your journey with strategic insights and reliable support.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img src={itConsulting} alt="IT Consulting" className="img-fluid rounded shadow" style={{maxHeight: 180}} />
          </div>
        </div>
        {/* Web & App Development */}
        <div className="row align-items-center my-4 flex-md-row-reverse" data-aos="fade-up" data-aos-delay="100">
          <div className="col-md-7">
            <h4>🌐 Custom Web & App Development</h4>
            <p>
              We build responsive, secure, and feature-rich websites and mobile apps customized for your business. From idea to deployment, our development process ensures seamless user experience, fast performance, and future-ready scalability on all devices.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img src={webApp} alt="Web & App Development" className="img-fluid rounded shadow" style={{maxHeight: 180}} />
          </div>
        </div>
        {/* Cloud Integration */}
        <div className="row align-items-center my-4" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-7">
            <h4>☁️ Cloud Integration</h4>
            <p>
              Migrate, manage, and optimize your operations in the cloud. We help you integrate cloud solutions that enhance collaboration, data storage, security, and accessibility — tailored to your specific business needs using AWS, Azure, or Google Cloud.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img src={cloud} alt="Cloud Integration" className="img-fluid rounded shadow" style={{maxHeight: 180}} />
          </div>
        </div>
        {/* Data Analytics */}
        <div className="row align-items-center my-4 flex-md-row-reverse" data-aos="fade-up" data-aos-delay="300">
          <div className="col-md-7">
            <h4>📊 Data Analytics</h4>
            <p>
              Turn data into decisions. We provide advanced analytics solutions to help you uncover trends, improve strategies, and drive performance. From dashboards to predictive insights, empower your team with data that matters.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img src={data} alt="Data Analytics" className="img-fluid rounded shadow" style={{maxHeight: 180}} />
          </div>
        </div>
        {/* TeleCaller */}
        <div className="row align-items-center my-4" data-aos="fade-up" data-aos-delay="400">
          <div className="col-md-7">
            <h4>📞 TeleCaller Services</h4>
            <p>
              Our professional telecaller support helps you connect with customers efficiently. From lead generation to customer care, we deliver reliable voice-based solutions that enhance engagement, increase retention, and improve satisfaction.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img src={telecaller} alt="TeleCaller" className="img-fluid rounded shadow" style={{maxHeight: 180}} />
          </div>
        </div>
      </div>
       <df-messenger
        intent="WELCOME"
        chat-title="Digitornix"
        agent-id="27f4dbf5-7da5-4882-858e-0d50a1875b2b"
        language-code="en"
      ></df-messenger>
    </>
  );
}