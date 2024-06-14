import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { useNavigate } from "react-router-dom";
import { footerNavigation } from '../constants';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavbarrButtonClick = (label1,label2, topic1,topic2) => {
    console.log('clicked button on navbar');
    navigate("/catogeries", { state: { label1,label2, topic1,topic2 } }); 
  };







  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get cloths ready for the new term at your nearest Fashion Store
            store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">

            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerNavigation.categories.map((category) => (
            <div key={category.name}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {category.name}
              </h4>
              <ul>
                {category.categories[0].map((item, idx) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={idx}
                  >
<a 
                   onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                    {item.name1}
                    </a>                 
                     </li>
                ))}
              </ul>
            </div>
          ))}
          {footerLinks.map((section) => (
      <div key={section.title}>
        <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
          {section.title}
        </h4>
        <ul>
          {section.links.map((item, idx) => (
            <li
              className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
              key={idx}
            >
              <a href={item.link} className="hover:text-gray-800 cursor-pointer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
