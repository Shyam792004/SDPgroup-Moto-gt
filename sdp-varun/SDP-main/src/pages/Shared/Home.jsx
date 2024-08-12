import GridPattern from '@/components/magicui/animated-grid-pattern'

import { cn } from "@/lib/utils";
import { BorderBeam } from '@/components/magicui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';
import { useTheme } from "next-themes";
import DotPattern from "@/components/magicui/dot-pattern";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const testimonials = [
    {
      date: "Mar 10, 2019",
      category: "Design",
      title: "Accessibility tools for designers and developers",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
      author: "Khatab wedaa",
      avatar: "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
    },
    {
      date: "Apr 20, 2019",
      category: "Development",
      title: "New tools for developers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      author: "Jane Doe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
    },
    {
      date: "May 15, 2019",
      category: "UX Design",
      title: "Improving user experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Smith",
      avatar: "https://cdn1.bluegrasssituation.com/uploads/2021/03/John-Smith-portrait-827x1240.jpg"
    }
    
  ];
  
    return (
      <>
       <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-blue-200 p-20 md:shadow-xl">
      {/* <div className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white">
        MOTO-G   Welcomes   YOU
      </div> */}
      <GradualSpacing
      className="font-display text-center text-4xl font-bold tracking-[-0.09em]  text-black dark:text-black md:text-4xl md:leading-[5rem]"
      text="Moto-G Welcomes You"
    />



      
      
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
    
      
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem] "
            src="https://media.istockphoto.com/id/1407846366/photo/car-care-maintenance-and-servicing-close-up-hand-technician-auto-mechanic-using-the-wrench-to.webp?b=1&s=170667a&w=0&k=20&c=RlleSCMnKqb0U58-YSRNeNqaabaZYYgOd_ktUOdudCs="
            alt=""
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500 ">“</p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
            Commited to Give High Qualtiy Repairing & Services
            </h1>

            <p className="max-w-lg mt-8 text-gray-500 dark:text-gray-400 ">
            <p>Welcome to MOTO-G, your trusted partner in automotive care. At MOTO-G, we pride ourselves on delivering top-notch automotive repair and maintenance services to our valued customers.</p>
            <p>Whether you need routine maintenance or extensive repairs, Cars Repair Hub is your one-stop solution for all your automotive needs. Visit us today, and experience the difference in quality and service that sets us apart.</p>
            </p>
            <Link to="/Service">
            <button className="mt-8 ml-40 px-10 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 ">
      Services
    </button>
    </Link>


          </div>
        </div>
      </div>
    </section>

    <div className='h-full w-full flex justify-center items-center flex-col'>
            {/* <div className='w-full h-full'> */}
                <div className="relative flex h-[50rem] w-full items-center justify-center overflow-hidden bg-background p-20 ">
                    <div className="relative h-[15rem] w-[60rem] rounded-xl border flex justify-center items-center px-10">
                        <p className="z-10 whitespace-pre-wrap text-left text-5xl font-medium tracking-tighter text-black dark:text-white w-full">
                        Revolutionizing Auto Care with Personalized Repair and Maintenance Solutions
                        </p>
                        <BorderBeam />
                    </div>
                    <GridPattern
                        width={20}
                        height={20}
                        x={-1}
                        y={-1}
                        className={cn(
                            "[mask-image:linear-gradient(to_bottom_right,green,transparent,transparent)] ",
                        )}
                          
                    />
                    
                </div>
        {/* </div> */}

          </div>

          {/* <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">MODELLING SERVICES</h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src="https://t4.ftcdn.net/jpg/06/68/68/05/360_F_668680572_kbJV3SGUBMtopsKRpTEBFuYeW2LFZAL4.jpg"
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm text-blue-500 uppercase">category</p>

            <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
              All the features you want to know
            </a>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Our website boasts a special feature: advanced 3D modeling technology designed to help you visualize and rectify your car with precision. This innovative tool allows you to see detailed, interactive models of your vehicle, making it easier than ever to identify and address any issues. Experience the future of car maintenance with our cutting-edge 3D modeling capabilities.


            </p>
          </div>
        </div>
      </div>
    </section>




          <div>
          <TypingAnimation
      className=" text-2xl text-gray-500 dark:text-gray-300 md:text-2xl ml-[5%] mt-[20vh] mr-[80%]" 
      text="- What We Do"
    />
          </div>
                <div className="z-5 whitespace-pre-wrap text-left text-5xl font-medium tracking-tighter text-black dark:text-white ml-[5%] mt-10">
                         Our Services
                </div>
                
                <div className="text-2xl text-gray-500 dark:text-gray-300 md:text-2xl ml-[9%] mt-10 family=roboto w-[86%]">
                At MOTO-G, we offer a comprehensive range of automotive services designed to keep your vehicle in peak condition. 
                Our skilled technicians are dedicated to providing reliable and efficient solutions for all your car care needs.
                </div>

            <div
            
      className={
        "flex h-[60vh] w-[170vh] flex-col gap-4 lg:h-[60vh] lg:flex-row mt-20 ml-[19vh]"
      }
      
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl h-[30vh] "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        SERVICES
        <div className="z-3 whitespace-pre-wrap text-left text-2xl font-large tracking-tighter text-black dark:text-white mt-[55px]">
                         Performance Upgrade
           </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl h-[30vh] "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        SERVICES
        <div className="z-3 whitespace-pre-wrap text-left text-2xl font-large tracking-tighter text-black dark:text-white mt-[55px]">
                         Performance Upgrade
           </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl h-[30vh] "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        SERVICES
        <div className="z-3 whitespace-pre-wrap text-left text-2xl font-large tracking-tighter text-black dark:text-white mt-[55px]">
                         Performance Upgrade
           </div>
      </MagicCard>
      

    </div>


    <div className="flex flex-wrap space-x-40 ml-[50vh]">
  <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 whitespace-nowrap flex-col">
    <div className="px-4 py-2">
      <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">VEHICHLE MAINTENANCE</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Maintenance is the key to a worry-free drive!      </p>
    </div>
    <img
      className="object-cover w-full h-48 mt-2"
      src="https://www.kbb.com/wp-content/uploads/2021/08/car-maintenance-guide.jpeg?w=918"
      alt="NIKE AIR"
    />
    
  </div>
  <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 whitespace-nowrap flex-col">
    <div className="px-4 py-2">
      <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">BATTERY SERVICE</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Power up your drive with a reliable battery
      </p>
    </div>
    <img
      className="object-cover w-full h-48 mt-2"
      src="https://www.carfitexperts.com/wp-content/uploads/2021/05/733596370-.jpg"
      alt="NIKE AIR"
    />
    
  </div>
</div>
<div className="flex flex-wrap space-x-40 ml-[50vh] mt-[8vh]">
  <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 whitespace-nowrap flex-col">
    <div className="px-4 py-2">
      <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">BRAKE SERVICE</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Expert brake service for safety and precision      </p>
    </div>
    <img
      className="object-cover w-full h-48 mt-2"
      src="https://cdn.create.vista.com/api/media/small/240746012/stock-photo-brand-new-brake-disc-modern-car-brakes-replacement-auto-service"
      alt="NIKE AIR"
    />
    
  </div>
  <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 whitespace-nowrap flex-col">
    <div className="px-4 py-2">
      <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">ENGINE REPAIRS</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Revive your ride with expert engine repairs      </p>
    </div>
    <img
      className="object-cover w-full h-48 mt-2"
      src="https://carotechautomotive.com/wp-content/uploads/Porsche-Engine-Service-1200x720.jpg"
      alt="NIKE AIR"
    />
    
  </div>
</div>





    <h3 className="text-1xl font-semibold text-gray-800 dark:text-white lg:text-2xl lg:w-96 ml-[10vh] mt-[20vh] ">
            - GREAT TESTIMONIALS
    </h3>
    <h3 className="text-1xl font-semibold text-gray-800 dark:text-white lg:text-4xl mr-[108vh] mt-[4vh] ml-[30vh] mb-[15vh]">
            What Our Customers Say
    </h3>
    

    <div className="flex justify-center flex-wrap gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">{testimonial.date}</span>
                <button className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
                  {testimonial.category}
                </button>
              </div>

              <div className="mt-2">
                <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                  {testimonial.title}
                </a>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {testimonial.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read more
                </a>

                <div className="flex items-center">
                  <img
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src={testimonial.avatar}
                    alt="avatar"
                  />
                  <a href="#" className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                    {testimonial.author}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    explore our <br /> awesome <span className="text-blue-500">Services</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Certfied Technicians</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                        Our team consists of highly skilled and certified technicians with extensive experience in automotive repair.                        </p>

                        <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">read more</span>
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Efficient Turaround Time</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                        We understand the importance of getting you back on the road quickly. Our efficient turnaround times ensure that your vehicle is serviced promptly                        </p>

                        <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">read more</span>
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                        We combine aesthetics with functionality to provide a modern, efficient, and visually appealing platform that meets all your car maintenance needs.                        </p>

                        <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">read more</span>
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section> */}
               

      

{/* 
    <header className="bg-white dark:bg-gray-900">
          

      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              
              <LetterPullup words={"Best place to Choose your Service"} delay={0.05} />;

              

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 ml-[30vh] mt-[10vh]">
                Pay Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://graphicriver.img.customer.envatousercontent.com/files/211859320/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=083186bdd339c6b6143a20f44e640af8"
              alt="Catalogue"
            />
          </div>
        </div>
      </div>
    </header> */}







      </>
    )
}

export default Home;