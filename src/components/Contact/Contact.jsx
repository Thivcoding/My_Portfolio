import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
    // ប្រើ useLocation ដើម្បីទទួលបាន pathname
    const { pathname } = useLocation();

    // បង្កើត string class ថ្មី
    const wrapperClasses = pathname.toLowerCase() === '/contact'
    ? 'lg:h-[100vh] md:h-[820px] max-sm:h-auto lg:pt-20 md:pt-20 max-sm:pt-16'
    : 'lg:h-[90vh] md:h-[600px] max-sm:h-auto ';

    // បង្កើត useState សម្រាប់ទិន្នន័យ
    // និងស្ថានភាព loading
    const [isLoading, setIsLoading] = useState(false);
    // បង្កើត useState សម្រាប់ទិន្នន័យ form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    // ផ្ទុកទិន្នន័យស្ថានភាពសម្រាប់សារប្រតិកម្ម
    // បង្កើត useState សម្រាប់សារប្រតិកម្ម
    const [statusMessage, setStatusMessage] = useState('');
    // frontend and backend validation
    // បង្កើតមុខងារ handleChange ដើម្បីកែប្រែទិន្នន័យ
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // បន្ថែម state ថ្មីសម្រាប់បើក modal
    const [showModal, setShowModal] = useState(false);
    // បង្កើតមុខងារ handleSubmit ដើម្បីដោះស្រាយទិន្នន័យ
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            setStatusMessage('Please fill in all fields.');
            return;
        }
        setIsLoading(true);
        setShowModal(false); // បិទ modal មុនពេលចាប់ផ្តើមសិន
        try {
            const response = await fetch('http://localhost/My-Project/My-Portfolio/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setStatusMessage(result.message);
        } catch (error) {
            setStatusMessage('Error submitting form. Please try again.');
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false); // ✅ បន្ទាប់ពីបញ្ចប់ មិនថាបានសម្រុងឬបរាជ័យ
            setShowModal(true); // ✅ បើក modal បន្ទាប់ពីទទួលបាន result
        }
    };
    // បង្កើតមុខងារ Modal ដើម្បីបង្ហាញសារប្រតិកម្ម
    const Modal = ({ message, onClose }) => {
        return (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Notification</h2>
              <p className="text-gray-600 mb-6">{message}</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        );
      };

  return (
    <div className={`w-full lg:px-28 md:px-12  ${wrapperClasses} lg:pt-0 md:pt-0 max-sm:px-6 bg-gradient-to-r from-indigo-900 to-indigo-950`}>
        <div className='w-full h-full'>
            <div className='w-full h-[13%] flex items-end justify-start '> 
                <h1 className='text-white lg:text-3xl md:text-3xl max-sm:text-2xl font-bold pt-10'
                    data-aos-eseing="ease-in-out"
                    data-aos="zoom-in"
                >Contact Me</h1>
            </div>
            <div className='w-full h-[87%] lg:flex md:flex py-10'>
                <div className='w-full h-full flex-wrap lg:flex md:flex '>
                    {/* ផ្នែកខាងឆ្វេង */}
                    <div className='lg:w-1/2 md:w-1/2 max-sm:w-full lg:h-full md:h-auto max-sm:h-full flex flex-col justify-center font-sans lg:pe-10 md:pe-6'>
                        <div className='w-full h-1/2 lg:py-5 md:py-5 max-sm:py-5 max-sm:pt-0'
                            data-aos-eseing="ease-in-out"
                            data-aos="zoom-in"
                        >
                            <div className='w-full h-full cursor-pointer flex items-center justify-center rounded-xl border-2 border-sky-400 bg-indigo-950'>
                                  <div className='w-auto h-auto flex flex-col items-center justify-center '>
                                      <a href="https://Vanthiv17032005@gmail.com" target='blank' className='flex flex-col items-center justify-center text-white underline hover:text-sky-500 hover:scale-110 transition-all ease-in-out duration-500 py-5'>
                                      <div className='lg:w-14 lg:h-14 md:w-14 md:h-14 max-sm:w-10 max-sm:h-10 bg-indigo-500 rounded-md flex items-center justify-center lg:mb-3 md:mb-3 max-sm:mb-2'>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope text-white" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                          </svg>
                                      </div>
                                      Vanthiv17032005@gmail.com
                                      </a>
                                  </div>
                            </div>  
                        </div>
                        <div className='w-full h-1/2 lg:py-5 md:py-5 max-sm:py-5 max-sm:pt-0'>
                            <div className='w-full h-full cursor-pointer flex items-center justify-center rounded-xl border-2 border-sky-400 bg-indigo-950'
                                data-aos-eseing="ease-in-out"
                                data-aos="zoom-in"
                            >
                                  <div className='w-auto h-auto flex flex-col items-center justify-center '>
                                      <a href="https://github.com/Thivcoding" target='blank' className='flex flex-col items-center justify-center text-white underline hover:text-sky-500 hover:scale-110 transition-all ease-in-out duration-500 py-5'>
                                      <div className='lg:w-14 lg:h-14 md:w-14 md:h-14 max-sm:w-10 max-sm:h-10 bg-indigo-500 rounded-md flex items-center justify-center lg:mb-3 md:mb-3 max-sm:mb-2'>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github text-white" viewBox="0 0 16 16">
                                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                          </svg>
                                      </div>
                                            https://github.com/Thivcoding
                                      </a>
                                  </div>
                            </div>  
                        </div> 
                    </div>
                    {/* ផ្នែកខាងស្តាំ */}
                    <div className='lg:w-1/2 md:w-1/2 max-sm:w-full lg:h-full md:h-full max-sm:h-[410px] flex flex-col justify-center font-sans py-5'>
                        <div className='w-full h-full  '>
                                   <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-5">
                                            <div className="w-full lg:h-[20%] md:h-[20%] max-sm:h-[20%] flex gap-5 items-center">
                                                <input
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="First Name"
                                                    className="w-full h-full bg-indigo-950 border-2 lg:text-xl md:text-xl max-sm:text-base border-sky-500 rounded-lg px-5 outline-none text-white"
                                                    data-aos="zoom-in"
                                                    data-aos-easing="ease-in-out"
                                                    onChange={handleChange}
                                                    value={formData.firstName}
                                                    id='firstName'
                                                />
                                                <input
                                                    name="lastName"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="w-full h-full bg-indigo-950 border-2 lg:text-xl md:text-xl max-sm:text-base border-sky-500 rounded-lg px-5 outline-none text-white"
                                                    data-aos="zoom-in"
                                                    data-aos-easing="ease-in-out"
                                                    onChange={handleChange}
                                                    value={formData.lastName}
                                                    id='lastName'
                                                />
                                            </div>
                                            <div className="w-full lg:h-[20%] md:h-[20%] max-sm:h-[20%]">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    className="w-full h-full bg-indigo-950 border-2 lg:text-xl md:text-xl max-sm:text-base border-sky-500 rounded-lg px-5 outline-none text-white"
                                                    data-aos="zoom-in"
                                                    data-aos-easing="ease-in-out"
                                                    onChange={handleChange}
                                                    value={formData.email}
                                                    id='email'
                                                    required
                                                />
                                            </div>
                                            <div className="w-full lg:h-[40%] md:h-[40%] max-sm:h-[40%]">
                                                <textarea
                                                    name="message"
                                                    placeholder="Message"
                                                    className="w-full h-full bg-indigo-950 border-2 lg:text-xl md:text-xl max-sm:text-base border-sky-500 rounded-lg p-5 outline-none text-white"
                                                    data-aos="zoom-in"
                                                    data-aos-easing="ease-in-out"
                                                    onChange={handleChange}
                                                    value={formData.message}
                                                    id='message'
                                                ></textarea>
                                            </div>
                                            <div className="w-full lg:h-[20%] md:h-[20%] max-sm:h-[20%]">
                                                <button
                                                    type="submit"
                                                    className="w-full h-full lg:text-xl md:text-xl max-sm:text-base bg-blue-600 rounded-lg text-white font-bold hover:bg-sky-400 transition-all ease-in-out duration-500 uppercase"
                                                    data-aos="zoom-in"
                                                    data-aos-easing="ease-in-out"
                                                    disabled={isLoading}
                                                >
                                                     {isLoading ? 'Sending...' : 'Send'}
                                                </button>
                                            </div>
                                     </form>
                                     {showModal && statusMessage && (
                                        <Modal
                                            message={statusMessage}
                                            onClose={() => {
                                            setShowModal(false); 
                                            setStatusMessage('');
                                            }}
                                        />
                                    )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact