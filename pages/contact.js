import Layout from "../components/layout";
import Team from "../components/Team";
import { keys } from "../config/keys";

// TODO get in touch and `Our Team` more overlap

export default function Contact() {
  return (
    <>
      <Layout>
        <div>
          <p
            className="absolute z-neg font-bold text-4.5xl ml-2 mt-6 sm:text-8xl sm:ml-5 sm:mt-0 md:text-9xl lg:text-10xl xl:ml-28"
            style={{ color: "#E8EFF9" }}
          >
            Get in Touch!
          </p>
          <div className="info flex flex-wrap justify-around pt-24 md:pt-28 lg:pt-32 px-5 mb-16 mx-auto sm:mx-4 w-6/7 sm:mt-12 max-w-8xl">
            <div className="contact sm:flex-1 max-w-md sm:min-w-xs sm:mt-10">
              <h1 className="text-xl font-semibold mb-4">
                Contact Us Directly
              </h1>
              <h4 className="text-justify mb-8">
                We would love to hear from you if you have any Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed lorem enim, bibendum
                eu volutpat vitae, aliquet quis felis. Mauris mollis enim nec
                dolor placerat tincidunt et id quam.
              </h4>
              <div className="icons flex flex-col mb-10">
                <div className="block flex mb-2 items-baseline mb-6">
                  <i className="fas fa-user self-start mr-3"></i>
                  <p>
                    University of Toronto <br /> Toronto, ON <br /> M5S, Canada
                  </p>
                </div>
                <div className="block flex mb-2 items-baseline mb-6">
                  <i className="fas fa-phone mr-3"></i>
                  <p>+ 1 416-946-0207</p>
                </div>
                <div className="block flex mb-2 items-baseline mb-6">
                  <i className="fas fa-envelope mr-3"></i>
                  <a href="mailto:duncanlabuoft@gmail.com">
                    <p>duncanlabuoft@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md sm:flex-1 w-full rounded-sm sm:ml-8 max-w-md sm:min-w-xs">
              <form
                action={`https://www.enformed.io/${keys.enformedToken}`}
                method="POST"
                className="w-5/6 m-auto pt-6 pb-8"
              >
                <div className="mb-4">
                  <label className="block mb-2">Full Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="appearance-none w-full py-1 px-2 focus:outline-none border border-black opacity-37 border-solid"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Email:</label>
                  <input
                    type="text"
                    name="email"
                    className="appearance-none w-full py-1 px-2 focus:outline-none border border-black opacity-37 border-solid"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Subject:</label>
                  <input
                    type="text"
                    name="*subject"
                    className="appearance-none w-full py-1 px-2 focus:outline-none border border-black opacity-37 border-solid"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Message:</label>
                  <textarea
                    name="message"
                    className="appearance-none w-full h-32 py-1 px-2 focus:outline-none border border-black opacity-37 border-solid"
                  />
                </div>
                <button
                  type="submit"
                  className="flex bg-blue-800 hover:bg-blue-900 px-4 py-1 rounded-sm text-white focus:outline-none items-center"
                >
                  <p className="mr-3">Send</p>
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
          <div>
            <p
              style={{ color: "#E8EFF9" }}
              className="absolute z-neg font-bold text-6xl ml-4 mt-6 sm:text-10xl sm:ml-4 sm:mt-0 md:ml-20 lg:ml-28"
            >
              Our Team
            </p>
            <Team />
          </div>
        </div>
      </Layout>
    </>
  );
}
