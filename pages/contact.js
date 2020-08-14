import Layout from "../components/layout";
import Team from "../components/Team";
import { keys } from "../config/keys";
import map from "../public/map.svg";

const inputStyle =
  "appearance-none w-full py-1 px-2 focus:outline-none bg-dark-light border border-white rounded-lg";

export default function Contact() {
  return (
    <>
      <img
        src={map}
        alt=""
        className="z-neg fixed h-screen w-full lg:w-screen lg:h-screen"
      />
      <Layout>
        <div>
        <div className="flex justify-center lg:h-screen lg:mt-16 mb-16 px-10">
            <Team />
          </div>
          <div className="flex flex-wrap relative lg:h-screen lg:-mt-4 mb-16">
            <div className="w-full lg:w-1/2 flex m-auto justify-center">
              <div className="mt-8 lg:-mt-24 px-4 lg:px-12">
                <div className="text-white px-6">
                  <div className="contact sm:flex-1 max-w-md sm:min-w-xs sm:mt-10">
                    <h1 className="text-xl font-semibold mb-4">
                      Contact Us Directly
              </h1>
                    <h4 className="text-justify mb-8 opacity-75">
                      Have a question or concern about OpenMaze? We would love to hear
                      from you! Feel free to reach out about any inquiries you might have,
                      technical or otherwise.
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
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex m-auto justify-center relative">
              <div className="bg-dark-light content-center text-white w-full rounded-lg sm:ml-8 max-w-md sm:min-w-xs">
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
                      className={inputStyle}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                      type="email"
                      name="email"
                      className={inputStyle}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Subject:</label>
                    <input type="text" name="*subject" className={inputStyle} />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Message:</label>
                    <textarea
                      name="message"
                      className={`${inputStyle} h-32`}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex border border-red-500 rounded-full hover:bg-red-500 px-4 py-1 text-white focus:outline-none items-center"
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
          </div>
          <div className="flex justify-center px-10">
            <Team />
          </div>
        </div>
      </Layout>
    </>
  );
}
