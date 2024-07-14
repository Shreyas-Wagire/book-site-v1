import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Help Center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Contact Us</Footer.Link>
              <Footer.Link href="#">Support</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow Us" />
            <div className="flex space-x-4 mt-2 text-gray-500 hover:text-gray-900">
              <a href="#" className="transition duration-300 ease-in-out transform hover:-translate-y-1">
                <BsFacebook size={24} />
              </a>
              <a href="#" className="transition duration-300 ease-in-out transform hover:-translate-y-1">
                <BsInstagram size={24} />
              </a>
              <a href="#" className="transition duration-300 ease-in-out transform hover:-translate-y-1">
                <BsTwitter size={24} />
              </a>
              <a href="#" className="transition duration-300 ease-in-out transform hover:-translate-y-1">
                <BsGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
