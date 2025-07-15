import image from "../../../assets/images/aboutlogo.svg";
import flag from "../../../assets/images/aboutflag.svg";
import star from "../../../assets/images/aboutstar.svg";
import crypto from "../../../assets/images/aboutcrypto.svg";
import blockchain from "../../../assets/images/aboutblockchain.svg";
import bgLight from "../../../assets/images/bg-doodles.svg";
import bgdark from "../../../assets/images/bg-doodles-dark.svg";
import aboutproblem from "../../../assets/images/justice.png";
import aboutarrow from "../../../assets/images/aboutarrow.svg";
import abouttrophy from "../../../assets/images/abouttrpohy.svg";
import abouttech from "../../../assets/images/waqar.jpg";
import teamImage from "../../../assets/images/teamImage.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import award1 from '../../../assets/images/client-1.png';
import award2 from '../../../assets/images/client-2.png';
import award3 from '../../../assets/images/client-3.png';
import award4 from '../../../assets/images/client-4.png';
import award5 from '../../../assets/images/client-5.png';
import award6 from '../../../assets/images/client-6.png';
import award7 from '../../../assets/images/client-7.png';
import award8 from '../../../assets/images/client-8.png';
import shihauli from "../../../assets//images/hauli.jpg";
import ambermunoz from "../../../assets/images/amber.jpg";


const awardImages = [award1, award2, award3, award4, award5, award6, award7, award8];


export default function AboutUs() {
    return (
        //about main
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 lg:gap-16 mt-[-50px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="w-full flex flex-col gap-5 ml-4 lg:ml-10">
            <h1 className="text-[24px] sm:text-[30px] lg:text-5xl font-bold tracking-[-1px] lg:tracking-[-2px] font-oswald text-blue-800 ">
                ABOUT <span className="outlined-text font-bold">US</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-[22px] text-blue-1000 dark:text-white font-medium max-w-[1000px]">
            With over 15 years of combined legal experience, our firm has been dedicated to providing compassionate and results-driven legal services in immigration, asylum, and family law. <br /><br />
            We take pride in offering personalized legal guidance tailored to each client’s unique situation. Whether you are navigating a complex visa process, seeking asylum, or reuniting your family, our team works diligently to protect your rights and secure the best possible outcome.
            </p>
        </div>
        <img src={image} alt="About Us" className="max-w-[300px] sm:max-w-[400px] lg:max-w-[412px] mt-[-20px] lg:mt-[-50px]" />
    </div>


            <div className="w-full flex flex-col items-center p-10 rounded-lg mt-[-70px]">
            <div className="relative bg-blue-800 p-10 rounded-lg mt-10 items-center w-full flex flex-col">
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-5 justify-around items-center">What Sets Us Apart</h2>
            <p className="text-center text-[16px] text-white mb-10 max-w-[1100px]">
                 At our law firm, we believe every client deserves personalized attention, clear guidance, and strong legal advocacy. We combine deep legal knowledge with a client-first approach, ensuring your voice is heard and your rights are protected every step of the way. Whether you're facing an immigration challenge or seeking family-based legal support, our commitment to integrity, accessibility, and results sets us apart:
            </p>
            <img src={bgLight} alt="bg" className="absolute inset-0 object-cover w-full h-full opacity-5 z-0" />     
            </div>


                <div className="flex flex-col lg:flex-row justify-around items-center w-full gap-8 mt-[-35px] relative z-20">
                    <div className="flex flex-col items-center text-center max-w-[300px]">
                        <div >
                            <img src={flag} alt="About Us" className=" max-w-[66px]" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Experienced Legal Guidance</h3>
                        <p className="text-sm lg:text-base text-blue-900">
                            Benefit from years of experience in immigration and family law. Our lawyers bring deep knowledge and proven results.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center max-w-[300px]">
                        <div >
                            <img src={star} alt="About Us" className=" max-w-[66px]" /> 
                        </div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Client-Focused Service</h3>
                        <p className="text-sm lg:text-base text-blue-900">
                            Your needs come first. We deliver personalized legal support with clear communication and strong representation.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center max-w-[300px]">
                        <div >
                            <img src={crypto} alt="About Us" className=" max-w-[66px]" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Multilingual Assistance</h3>
                        <p className="text-sm lg:text-base text-blue-900">
                            Our team is equipped to assist clients in multiple languages, ensuring clear communication and understanding throughout the legal process.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center max-w-[300px]">
                        <div >
                        <img src={blockchain} alt="About Us" className=" max-w-[66px]" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Proven Case Results</h3>
                        <p className="text-sm lg:text-base text-blue-900">
                            We’ve helped hundreds navigate legal challenges. Our firm has a strong record of positive outcomes for our clients.
                        </p>
                    </div>
                </div>
            </div>



        <div className="w-h flex flex-col-reverse lg:flex-row items-center justify-between mt-45">  
        <div className="w-h lg:w-1/2 p-5 ">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-black mb-5">What problem do we solve?</h2>
        <p className="text-[16px] lg:text-[20px] text-black text-center mb-5">
            Many individuals face complex legal challenges in immigration, family, and personal matters without clear guidance. Our firm provides the clarity, support, and representation they need to move forward with confidence.
        </p>


        <div className="relative bg-cover bg-no-repeat flex flex-col gap-4 w-full lg:w-[1100px]">
    <div className="relative flex items-center p-3 bg-white opacity-90 z-10 rounded-lg shadow-lg w-full lg:w-[1270px] lg:ml-[-15%] mr-[15%]">
        <div className="relative flex items-center w-full p-5">
            <img src={abouttrophy} alt="RWA C DePIN Competitions" className="w-12 h-12 mr-4 lg:ml-[15%] ml-0"/>
            <div>
                <h3 className="text-xl font-bold text-black">Trusted Legal Representation</h3>
                <p className="text-sm font-semibold lg:text-base text-black">Dedicated to defending your rights in immigration and family law matters.</p>
            </div>
        </div>
    </div>

    <div className="relative flex items-center p-3 bg-white rounded-lg shadow-lg opacity-90 z-10 w-full lg:w-[1270px] lg:ml-[-15%]">
        <div className="relative flex items-center w-full p-5">
            <img src={aboutarrow} alt="Popular Table Games & Instant Wins" className="w-12 h-12 mr-4 lg:ml-[15%] ml-0"/>
            <div>
                <h3 className="text-xl font-bold text-black">Client-Focused Strategy</h3>
                <p className="text-sm font-semibold lg:text-base text-black">We tailor legal strategies to match your unique circumstances and goals.</p>
            </div>
        </div>
    </div>
    
    <img src={bgdark} alt="bg" className="absolute inset-y-0 left-0 object-cover w-full h-full z-0 lg:w-[1200px] lg:ml-[-15%]"/>
</div>
        <p className="text-[16px] lg:text-[20px] text-blue-900 mt-5 text-center ">
            Our commitment is to provide compassionate counsel and aggressive advocacy—ensuring every client feels seen, heard, and empowered through every legal challenge.
        </p> 
    </div>

    <div className="w-full lg:w-1/2 flex justify-center items-center">
    <img
        src={aboutproblem}
        alt="Car"
        className="w-729px h-auto rounded-lg lg:ml-[60%] ml-0"
    />
</div>

</div>


<div className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-6 sm:px-10 lg:px-24 text-[#1a1a1a]">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block">
        Meet Our Management
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Our dedicated team of legal professionals brings diverse expertise and unwavering commitment to your case.
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Malik Waqar */}
      <div 
        className="group relative bg-white border border-blue-100 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="overflow-hidden rounded-xl mb-6">
          <img 
            src={abouttech} 
            alt="Malik Waqar, Founder & Managing Attorney" 
            className="w-full h-80 object-top object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Malik Waqar</h3>
            <p className="text-sm text-blue-600 font-medium">Founder & Managing Attorney</p>
          </div>
          <div className="flex space-x-2">
            <a 
              href="mailto:malik@maliklaw.com" 
              className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200"
              aria-label="Email Malik Waqar"
            >
              <i className="fas fa-envelope text-blue-700 text-lg"></i>
            </a>
            <a 
              href="#" 
              className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200"
              aria-label="Malik Waqar's LinkedIn"
            >
              <i className="fab fa-linkedin-in text-blue-700 text-lg"></i>
            </a>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Malik Waqar, LL.M. '15, graduated from Temple University after overcoming hardship as a 
          refugee from Pakistan at age 13. He began his legal journey at the non-profit Prime – ECR.
        </p>
        
        <div className="pt-4 border-t border-blue-50">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Key Achievements:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span>Undefeated in immigration proceedings before BIA</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span>15+ years of non-profit legal advocacy</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Shi Hauli */}
      <div 
        className="group relative bg-white border border-blue-100 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="overflow-hidden rounded-xl mb-6">
          <img 
            src={shihauli} 
            alt="Shi Hauli, Partner" 
            className="w-full h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Shi Hauli</h3>
            <p className="text-sm text-blue-600 font-medium">Partner</p>
          </div>
          <div className="flex space-x-2">
            <a 
              href="mailto:shi@maliklaw.com" 
              className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200"
              aria-label="Email Shi Hauli"
            >
              <i className="fas fa-envelope text-blue-700 text-lg"></i>
            </a>
            <a 
              href="#" 
              className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200"
              aria-label="Shi Hauli's LinkedIn"
            >
              <i className="fab fa-linkedin-in text-blue-700 text-lg"></i>
            </a>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Huali Shi is an Associate Attorney at Malik & Associates LLC. He graduated from Temple 
          University School of Law and has over 8 years of experience in Employment and Business 
          Immigration Law.
        </p>
        
        <div className="pt-4 border-t border-blue-50">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Areas of Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Business Immigration</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Private Equity</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Chinese-English</span>
          </div>
        </div>
      </div>

      {/* Amber Munoz */}
      <div 
        className="group relative bg-white border border-blue-100 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="overflow-hidden rounded-xl mb-6">
          <img 
            src={ambermunoz} 
            alt="Amber Munoz, Senior Manager & Paralegal Attorney" 
            className="w-full h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Amber Munoz</h3>
            <p className="text-sm text-blue-600 font-medium">Senior Manager & Paralegal Attorney</p>
          </div>
          <div className="flex space-x-2">
            <a 
              href="mailto:amber@maliklaw.com" 
              className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200"
              aria-label="Email Amber Munoz"
            >
              <i className="fas fa-envelope text-blue-700 text-lg"></i>
            </a>
            <a 
              href="#" 
              className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200"
              aria-label="Amber Munoz's LinkedIn"
            >
              <i className="fab fa-linkedin-in text-blue-700 text-lg"></i>
            </a>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Amber Munoz, our Senior Paralegal, was born in Santo Domingo East, Dominican Republic, 
          and moved to the U.S. in 2001. With over a decade of experience in family and immigration law.
        </p>
        
        <div className="pt-4 border-t border-blue-50">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Community Involvement:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-start">
              <i className="fas fa-hands-helping text-blue-500 mt-1 mr-2"></i>
              <span>Citizenship class instructor</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-gavel text-blue-500 mt-1 mr-2"></i>
              <span>Philadelphia Association of Paralegals (2017-present)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    
  </div>
</div>







{/* Section Heading */}
<div className="w-full px-4 sm:px-8 lg:px-16 py-16 bg-gradient-to-b from-blue-50 to-white">
  <div className="mb-16 text-center" data-aos="fade-up">
    <h2 className="text-4xl font-bold text-blue-900 mb-3 relative inline-block">
      Our Legal Team
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
    </h2>
    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
      Meet our dedicated team of legal professionals committed to delivering exceptional service.
    </p>
  </div>

  {/* Team Members Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    {[
      
      {
        name: "Aqeel Ahmad Shah",
        title: "Manager",
        image: teamImage,
        email: "aqeelshah450@gmail.com",
        linkedin: "https://linkedin.com/in/aqeel-shah"
      },
      {
        name: "Ahmad Jamal Abbasi",
        title: "Legal Associate",
        image: teamImage,
        email: "Ahmadjamalabbasi@gmail.com",
        linkedin: "https://www.linkedin.com/in/ahmad-j-abbasi-3127ab169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
      },
      {
        name: "Ayesha Inam",
        title: "Legal Assistant & Technical Advisor",
        image: teamImage,
        email: "ayeshainam232@gmail.com",
        linkedin: "https://www.linkedin.com/in/ayesha-inam-7677a3200/"
      },
      {
        name: "Amber Naz",
        title: "Legal Assistant",
        image: teamImage,
        email: "amber@example.com",
        linkedin: "https://linkedin.com/in/amber"
      },
      {
        name: "Huba Rana",
        title: "Legal Assistant",
        image: teamImage,
        email: "ranahuba0@gmail.com",
        linkedin: "https://www.linkedin.com/in/huba-rana/"
      },

      
      
    ].map((member, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm flex flex-col items-center text-center"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
        <p className="text-gray-500">{member.title}</p>
        <div className="flex mt-4 gap-4">
          <a href={`mailto:${member.email}`} className="p-2 bg-blue-50 rounded-full" title="Email">
            <i className="fas fa-envelope text-blue-600 text-lg"></i>
          </a>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-50 rounded-full" title="LinkedIn">
            <i className="fab fa-linkedin text-blue-600 text-lg"></i>
          </a>
        </div>
      </div>
    ))}
  </div>

  {/* CTA Section */}
    <div className="text-center mt-20" data-aos="fade-up">
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">Ready to work with our expert team?</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today to schedule a consultation and discuss your legal needs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a 
          href="/vt-coin" 
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Schedule a Consultation
        </a>
        <a 
          href="tel:(223) 529-8055" 
          className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
        >
          Call Now
        </a>
      </div>
    </div>
  </div>

</div>





{/* Honors and Awards Section */}
<div className="w-full py-20 bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
  <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center uppercase tracking-wide">Honors & Awards</h2>
  <div className="w-full max-w-7xl px-4 sm:px-8">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      loop={true}
      speed={1000}
      grabCursor={true}
      breakpoints={{
        0: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 6, spaceBetween: 40 }
      }}
    >
      {awardImages.map((img, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={img}
              alt={`award-${index + 1}`}
              className="h-16 sm:h-20 object-contain mx-auto"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>








 </div>
    );
}



            