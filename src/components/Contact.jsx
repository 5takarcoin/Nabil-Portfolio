import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";
import about from "../assets/about.svg";
import dp from "../assets/beka.png";
import { FiDownload } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const Contact = () => {
  return (
    <div>
      <div className="h-24 -mb-10 flex gap-12 items-center overflow-hidden">
        {Array.from({ length: 24 }).map((_, index) => (
          <img
            key={index}
            className="h-12 -z-10  opacity-30"
            src={about}
            alt=""
          />
        ))}
      </div>
      <div className="justify-between md:flex-row flex-col mx-4 flex gap-4 ">
        <div className="lg:hidden w-full md:w-auto md:h-96 relative">
          <img className="w-full h-full" src={dp} alt="" />
          <div className="flex flex-col gap-1 md:pl-1 absolute w-[17%] -bottom-1 right-2">
            <p className=" text-[#00005b] bg-[#00005b]  aspect-square w-7/8 md:h-11 md:w-11 flex items-center justify-center rounded-full overflow-hidden">
              <div className="flex relative items-center justify-center">
                <span className="absolute  bg-[#9a9aff] h-12 w-18 items-center"></span>
                <SiAdobepremierepro className="text-7xl z-10 md:text-5xl" />
              </div>
            </p>
            <p className="text-[#00005b] bg-[#00005b] aspect-square w-7/8 md:h-11 md:w-11 flex items-center justify-center rounded-full overflow-hidden">
              <div className="flex relative items-center justify-center">
                <span className="absolute  bg-[#9999ff] h-12 w-18 items-center"></span>
                <SiAdobeaftereffects className="text-7xl z-10 md:text-5xl" />
              </div>
            </p>
            <p className="text-[#001126] bg-[#001126] aspect-square w-7/8 md:h-11 md:w-11 flex items-center justify-center rounded-full overflow-hidden">
              <div className="flex relative items-center justify-center">
                <span className="absolute  bg-[#229bff] h-12 w-18 items-center"></span>
                <SiAdobephotoshop className="text-7xl z-10 md:text-5xl" />
              </div>
            </p>
          </div>
          <div className="absolute -right-4 top-24">
            <svg
              width="30"
              height="30"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_72_185" fill="white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.621 0H27.379V16.6014L15.6401 4.86242L4.86238 15.6401L16.6013 27.379L0 27.379V42.621H16.6013L4.86242 54.3598L15.6401 65.1375L27.379 53.3986V70H42.621V53.3987L54.3599 65.1376L65.1375 54.3599L53.3986 42.621H70V27.379H53.3986L65.1376 15.64L54.3599 4.86234L42.621 16.6013V0Z"
                />
              </mask>
              <path
                d="M27.379 0V-2H25.379V0H27.379ZM42.621 0H44.621V-2H42.621V0ZM27.379 16.6014L25.9648 18.0156L29.379 21.4298V16.6014H27.379ZM15.6401 4.86242L17.0543 3.44821L15.6401 2.03399L14.2258 3.44821L15.6401 4.86242ZM4.86238 15.6401L3.44817 14.2259L2.03395 15.6401L3.44817 17.0543L4.86238 15.6401ZM16.6013 27.379V29.379H21.4297L18.0155 25.9648L16.6013 27.379ZM0 27.379L2.29783e-07 25.379H-2V27.379H0ZM0 42.621H-2V44.621H0V42.621ZM16.6013 42.621L18.0155 44.0352L21.4297 40.621H16.6013V42.621ZM4.86242 54.3598L3.44821 52.9456L2.034 54.3598L3.44821 55.774L4.86242 54.3598ZM15.6401 65.1375L14.2259 66.5517L15.6401 67.9659L17.0543 66.5517L15.6401 65.1375ZM27.379 53.3986H29.379V48.5701L25.9648 51.9843L27.379 53.3986ZM27.379 70H25.379V72H27.379V70ZM42.621 70V72H44.621V70H42.621ZM42.621 53.3987L44.0352 51.9845L40.621 48.5703V53.3987H42.621ZM54.3599 65.1376L52.9456 66.5518L54.3599 67.966L55.7741 66.5518L54.3599 65.1376ZM65.1375 54.3599L66.5517 55.7741L67.966 54.3599L66.5517 52.9457L65.1375 54.3599ZM53.3986 42.621V40.621H48.5702L51.9844 44.0352L53.3986 42.621ZM70 42.621V44.621H72V42.621H70ZM70 27.379H72V25.379H70V27.379ZM53.3986 27.379L51.9843 25.9648L48.5701 29.379H53.3986V27.379ZM65.1376 15.64L66.5518 17.0542L67.966 15.64L66.5518 14.2258L65.1376 15.64ZM54.3599 4.86234L55.7741 3.44812L54.3599 2.03391L52.9457 3.44812L54.3599 4.86234ZM42.621 16.6013H40.621V21.4297L44.0352 18.0155L42.621 16.6013ZM27.379 2H42.621V-2H27.379V2ZM29.379 16.6014V0H25.379V16.6014H29.379ZM14.2258 6.27663L25.9648 18.0156L28.7932 15.1872L17.0543 3.44821L14.2258 6.27663ZM6.27659 17.0543L17.0543 6.27663L14.2258 3.44821L3.44817 14.2259L6.27659 17.0543ZM18.0155 25.9648L6.27659 14.2259L3.44817 17.0543L15.1871 28.7932L18.0155 25.9648ZM-2.29783e-07 29.379L16.6013 29.379V25.379L2.29783e-07 25.379L-2.29783e-07 29.379ZM2 42.621V27.379H-2V42.621H2ZM16.6013 40.621H0V44.621H16.6013V40.621ZM6.27664 55.774L18.0155 44.0352L15.1871 41.2067L3.44821 52.9456L6.27664 55.774ZM17.0543 63.7233L6.27664 52.9456L3.44821 55.774L14.2259 66.5517L17.0543 63.7233ZM25.9648 51.9843L14.2259 63.7233L17.0543 66.5517L28.7932 54.8128L25.9648 51.9843ZM29.379 70V53.3986H25.379V70H29.379ZM42.621 68H27.379V72H42.621V68ZM40.621 53.3987V70H44.621V53.3987H40.621ZM55.7741 63.7234L44.0352 51.9845L41.2068 54.8129L52.9456 66.5518L55.7741 63.7234ZM63.7233 52.9457L52.9456 63.7234L55.7741 66.5518L66.5517 55.7741L63.7233 52.9457ZM51.9844 44.0352L63.7233 55.7741L66.5517 52.9457L54.8128 41.2068L51.9844 44.0352ZM70 40.621H53.3986V44.621H70V40.621ZM68 27.379V42.621H72V27.379H68ZM53.3986 29.379H70V25.379H53.3986V29.379ZM63.7234 14.2258L51.9843 25.9648L54.8128 28.7932L66.5518 17.0542L63.7234 14.2258ZM52.9457 6.27655L63.7234 17.0542L66.5518 14.2258L55.7741 3.44812L52.9457 6.27655ZM44.0352 18.0155L55.7741 6.27655L52.9457 3.44812L41.2068 15.1871L44.0352 18.0155ZM40.621 0V16.6013H44.621V0H40.621Z"
                fill="black"
                mask="url(#path-1-inside-1_72_185)"
              />
            </svg>
          </div>
          <div className="absolute -left-6 bottom-6">
            <svg
              width="30"
              height="30"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M70 70C50.67 70 35 54.33 35 35C35 15.67 50.67 0 70 0V70Z"
                fill="black"
              />
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0V70Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row gap-4">
          <div className="hidden lg:block w-full md:w-auto md:h-96 relative">
            <img className="w-full h-full" src={dp} alt="" />
            <div className="flex flex-col gap-1 md:pl-1 absolute w-[17%] -bottom-1 right-2">
              <p className=" text-[#00005b] bg-[#00005b]  aspect-square w-7/8 md:h-11 md:w-11 flex items-center justify-center rounded-full overflow-hidden">
                <div className="flex relative items-center justify-center">
                  <span className="absolute  bg-[#9a9aff] h-12 w-18 items-center"></span>
                  <SiAdobepremierepro className="text-7xl z-10 md:text-5xl" />
                </div>
              </p>
              <p className="text-[#00005b] bg-[#00005b] aspect-square w-7/8 md:h-11 md:w-11 flex items-center justify-center rounded-full overflow-hidden">
                <div className="flex relative items-center justify-center">
                  <span className="absolute  bg-[#9999ff] h-12 w-18 items-center"></span>
                  <SiAdobeaftereffects className="text-7xl z-10 md:text-5xl" />
                </div>
              </p>
              <p className="text-[#001126] bg-[#001126] aspect-square w-7/8 md:h-11 md:w-11 flex items-center justify-center rounded-full overflow-hidden">
                <div className="flex relative items-center justify-center">
                  <span className="absolute  bg-[#229bff] h-12 w-18 items-center"></span>
                  <SiAdobephotoshop className="text-7xl z-10 md:text-5xl" />
                </div>
              </p>
            </div>
            <div className="absolute -right-4 top-24">
              <svg
                width="30"
                height="30"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_72_185" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.621 0H27.379V16.6014L15.6401 4.86242L4.86238 15.6401L16.6013 27.379L0 27.379V42.621H16.6013L4.86242 54.3598L15.6401 65.1375L27.379 53.3986V70H42.621V53.3987L54.3599 65.1376L65.1375 54.3599L53.3986 42.621H70V27.379H53.3986L65.1376 15.64L54.3599 4.86234L42.621 16.6013V0Z"
                  />
                </mask>
                <path
                  d="M27.379 0V-2H25.379V0H27.379ZM42.621 0H44.621V-2H42.621V0ZM27.379 16.6014L25.9648 18.0156L29.379 21.4298V16.6014H27.379ZM15.6401 4.86242L17.0543 3.44821L15.6401 2.03399L14.2258 3.44821L15.6401 4.86242ZM4.86238 15.6401L3.44817 14.2259L2.03395 15.6401L3.44817 17.0543L4.86238 15.6401ZM16.6013 27.379V29.379H21.4297L18.0155 25.9648L16.6013 27.379ZM0 27.379L2.29783e-07 25.379H-2V27.379H0ZM0 42.621H-2V44.621H0V42.621ZM16.6013 42.621L18.0155 44.0352L21.4297 40.621H16.6013V42.621ZM4.86242 54.3598L3.44821 52.9456L2.034 54.3598L3.44821 55.774L4.86242 54.3598ZM15.6401 65.1375L14.2259 66.5517L15.6401 67.9659L17.0543 66.5517L15.6401 65.1375ZM27.379 53.3986H29.379V48.5701L25.9648 51.9843L27.379 53.3986ZM27.379 70H25.379V72H27.379V70ZM42.621 70V72H44.621V70H42.621ZM42.621 53.3987L44.0352 51.9845L40.621 48.5703V53.3987H42.621ZM54.3599 65.1376L52.9456 66.5518L54.3599 67.966L55.7741 66.5518L54.3599 65.1376ZM65.1375 54.3599L66.5517 55.7741L67.966 54.3599L66.5517 52.9457L65.1375 54.3599ZM53.3986 42.621V40.621H48.5702L51.9844 44.0352L53.3986 42.621ZM70 42.621V44.621H72V42.621H70ZM70 27.379H72V25.379H70V27.379ZM53.3986 27.379L51.9843 25.9648L48.5701 29.379H53.3986V27.379ZM65.1376 15.64L66.5518 17.0542L67.966 15.64L66.5518 14.2258L65.1376 15.64ZM54.3599 4.86234L55.7741 3.44812L54.3599 2.03391L52.9457 3.44812L54.3599 4.86234ZM42.621 16.6013H40.621V21.4297L44.0352 18.0155L42.621 16.6013ZM27.379 2H42.621V-2H27.379V2ZM29.379 16.6014V0H25.379V16.6014H29.379ZM14.2258 6.27663L25.9648 18.0156L28.7932 15.1872L17.0543 3.44821L14.2258 6.27663ZM6.27659 17.0543L17.0543 6.27663L14.2258 3.44821L3.44817 14.2259L6.27659 17.0543ZM18.0155 25.9648L6.27659 14.2259L3.44817 17.0543L15.1871 28.7932L18.0155 25.9648ZM-2.29783e-07 29.379L16.6013 29.379V25.379L2.29783e-07 25.379L-2.29783e-07 29.379ZM2 42.621V27.379H-2V42.621H2ZM16.6013 40.621H0V44.621H16.6013V40.621ZM6.27664 55.774L18.0155 44.0352L15.1871 41.2067L3.44821 52.9456L6.27664 55.774ZM17.0543 63.7233L6.27664 52.9456L3.44821 55.774L14.2259 66.5517L17.0543 63.7233ZM25.9648 51.9843L14.2259 63.7233L17.0543 66.5517L28.7932 54.8128L25.9648 51.9843ZM29.379 70V53.3986H25.379V70H29.379ZM42.621 68H27.379V72H42.621V68ZM40.621 53.3987V70H44.621V53.3987H40.621ZM55.7741 63.7234L44.0352 51.9845L41.2068 54.8129L52.9456 66.5518L55.7741 63.7234ZM63.7233 52.9457L52.9456 63.7234L55.7741 66.5518L66.5517 55.7741L63.7233 52.9457ZM51.9844 44.0352L63.7233 55.7741L66.5517 52.9457L54.8128 41.2068L51.9844 44.0352ZM70 40.621H53.3986V44.621H70V40.621ZM68 27.379V42.621H72V27.379H68ZM53.3986 29.379H70V25.379H53.3986V29.379ZM63.7234 14.2258L51.9843 25.9648L54.8128 28.7932L66.5518 17.0542L63.7234 14.2258ZM52.9457 6.27655L63.7234 17.0542L66.5518 14.2258L55.7741 3.44812L52.9457 6.27655ZM44.0352 18.0155L55.7741 6.27655L52.9457 3.44812L41.2068 15.1871L44.0352 18.0155ZM40.621 0V16.6013H44.621V0H40.621Z"
                  fill="black"
                  mask="url(#path-1-inside-1_72_185)"
                />
              </svg>
            </div>
            <div className="absolute -left-6 bottom-6">
              <svg
                width="30"
                height="30"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M70 70C50.67 70 35 54.33 35 35C35 15.67 50.67 0 70 0V70Z"
                  fill="black"
                />
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0V70Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div
            id="about"
            className="lg:flex-[5] lg:p-12 font-one flex flex-col gap-4 py-8 px-8 bg-[#cccccc] rounded-2xl flex-1"
          >
            <h3 className="text-lg lg:text-2xl">My Background</h3>
            <p className="text-base lg:text-xl">
              Product Designer with 13 years of experience, focused on creating
              functional and user-centered digital products with visually
              stunning designs. Aro kichu hobe random shits eda oda lorem ipsem.
            </p>
          </div>
          <div
            id="contact"
            className="lg:flex-[2] lg:p-12 font-one flex flex-col gap-4 py-8 px-8 bg-[#cccccc] rounded-2xl"
          >
            <h3 className="text-lg lg:text-2xl lg:text-center">Get in touch</h3>
            <div className="flex lg:flex-col justify-between lg:justify-around lg:mt-8 items-center  h-full">
              <div className="flex gap-4">
                <button className="hover:text-[#aaaaaa] h-10 w-10 text-3xl relative  text-[#cccccc]">
                  <span className="absolute h-full flex items-center justify-center top-0 w-full bg-black rounded-full overflow-hidden">
                    <TiSocialLinkedin />
                  </span>
                </button>

                <button className="hover:text-[#aaaaaa] h-10 w-10 text-2xl relative  text-[#cccccc]">
                  <span className="absolute h-full flex items-center justify-center top-0 w-full bg-black rounded-full overflow-hidden">
                    <FaTwitter />
                  </span>
                </button>

                <button className="hover:text-[#aaaaaa] h-10 w-10 text-2xl relative  text-[#cccccc]">
                  <span className="absolute h-full flex items-center justify-center top-0 w-full bg-black rounded-full overflow-hidden">
                    <MdMail />
                  </span>
                </button>
              </div>

              <button className="hover:text-[#dddddd] flex gap-2 items-center bg-black rounded-full py-2 px-8 text-white">
                <span>Resume</span>
                <span>
                  <FiDownload />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
