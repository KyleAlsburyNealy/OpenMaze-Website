import Layout from "../components/layout";
import Team from "../components/Team";

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="">
          <div className="info flex flex-wrap justify-around px-5 mt-8 mx-auto w-6/7 sm:w-5/6 sm:mt-12">
            <div className="contact sm:flex-1 mx-3">
              <h1 className="text-xl font-semibold mb-4">
                Contact Us Directly
              </h1>
              <h4 className="text-justify mb-4">
                We would love to hear from you if you have any Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed lorem enim, bibendum
                eu volutpat vitae, aliquet quis felis. Mauris mollis enim nec
                dolor placerat tincidunt et id quam.
              </h4>
              <div className="icons flex flex-col mb-10">
                <div className="block flex mb-2">
                  <i className="fas fa-user self-start mr-3"></i>
                  <p>
                    University of Toronto <br /> Toronto, ON <br /> M5S, Canada
                  </p>
                </div>
                <div className="block flex mb-2 items-baseline">
                  <i className="fas fa-phone mr-3"></i>
                  <p>+ 1 416-946-0207</p>
                </div>
                <div className="block flex mb-2 items-baseline">
                  <i className="fas fa-envelope mr-3"></i>
                  <p>duncanlabuoft@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md sm:flex-1 w-full rounded-sm mx-3">
              <form className="w-5/6 m-auto pt-6 pb-8">
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Full Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="shadow appearance-none w-full py-1 px-2 focus:outline-none border-2 border-gray-300 border-solid"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Email:</label>
                  <input
                    type="text"
                    name="name"
                    className="shadow appearance-none w-full py-1 px-2 focus:outline-none border-2 border-gray-300 border-solid"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Subject:</label>
                  <input
                    type="text"
                    name="name"
                    className="shadow appearance-none w-full py-1 px-2 focus:outline-none border-2 border-gray-300 border-solid"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Message:</label>
                  <textarea
                    className="shadow appearance-none w-full h-20 py-1 px-2 focus:outline-none border-2 border-gray-300 border-solid"
                    placeholder="Message"
                    // onChange={this.handleChange}
                  />
                </div>
                <button className="flex bg-blue-700 hover:bg-blue-900 px-2 py-1 rounded text-white focus:outline-none items-center">
                  Send
                  <svg
                    className="inline ml-1"
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5075 13.75L16.25 7L0.5075 0.25L0.5 5.5L11.75 7L0.5 8.5L0.5075 13.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <Team />
        </div>
      </Layout>
    </>
  );
}
