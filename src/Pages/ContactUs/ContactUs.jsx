import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Cover from "../Shared/Cover/Cover";
import { FaPhone, FaLocationArrow, FaSearchLocation, FaClock } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <>

            <Helmet>
                <title>Resturant | ContactUs</title>
            </Helmet>
            <section>
                <Cover
                    img={"https://i.ibb.co/Mhdg14j/banner.jpg"}
                    title={"CONTACT US"}
                    subTitle={"Would you like to try a dish?"}></Cover>
                <SectionTitle
                    heading={"Visit Us"}
                    subHeading={"OUR LOCATION"}></SectionTitle>
                <div className="grid mb-10 md:grid-cols-3 gap-10 mx-10">
                    {/* Phone number */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure className="bg-[#D1A054] py-6 text-white text-4xl"><FaPhone></FaPhone></figure>
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-center">Phone</h2>
                            <p className="text-center">+8801835557787</p>

                        </div>
                    </div>
                    {/* Location*/}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure className="bg-[#D1A054] py-6 text-white text-4xl">
                            <FaLocationArrow></FaLocationArrow>
                        </figure>
                        <div className="card-body">
                            <h2 className="font-bold text-4xl text-center">Address</h2>
                            <p className="text-center">Dhaka , Gulshan</p>

                        </div>
                    </div>
                    {/* Working Hours*/}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure className="bg-[#D1A054] py-6 text-white text-4xl"><FaClock></FaClock></figure>
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-center">WORKING HOURS</h2>
                            <div className="text-center"> <p>Mon - Fri: 08:00 - 22:00
                            </p>
                                <p> Sat - Sun: 10:00 - 23:00</p></div>

                        </div>
                    </div>
                </div>
                <SectionTitle
                    heading={"Send Us a Message"}
                    subHeading={"CONTACT FORM"}></SectionTitle>

                <section className="bg-white mb-10 rounded-lg dark:bg-gray-900 ">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">

                        <form action="#" className="space-y-8 ">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@resturant.com" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+183467889" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ">Send message</button>
                        </form>
                    </div>
                </section>
            </section>
        </>
    );
};

export default ContactUs;



