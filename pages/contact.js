import Layout from '../components/layout';
import Team from '../components/Team';

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="info">
            <div className="contact">
              <h1>Contact Us Directly</h1>
              <h4>
                We would love to hear from you if you have any Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed lorem enim, bibendum eu volutpat vitae, aliquet quis felis. Mauris mollis enim nec dolor
                placerat tincidunt et id quam.
            </h4>
              <div className="icons">
                <i className="fas fa-user"></i>
                <p>
                  University of Toronto <br /> Toronto, ON <br /> M5S, Canada
              </p>
                <i className="fas fa-phone"></i>
                <p>+ 1 416-946-0207</p>
                <i className="fas fa-envelope"></i>
                <p>duncanlabuoft@gmail.com</p>
              </div>
            </div>

            <form>
              <label>
                Full Name:
            <input type="text" name="name" className="bg-blue-500" />
              </label>
              <label>
                Email Address:
            <input type="text" name="email" className="bg-blue-500" />
              </label>
              <label>
                Subject
            <input type="text" name="subject" className="bg-blue-500" />
              </label>
              <label>
                Message
              <input type="text" name="message" className="bg-blue-500" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>

          <Team />
        </div>
      </Layout>
    </>
  );
}