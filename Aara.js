import React from "react";
import img1 from "../Aarashare/ag.png";
import img2 from "../Aarashare/aaru.webp";
import img3 from "../Aarashare/aar.webp";
import img4 from "../Aarashare/le1.webp";
import img5 from "../Aarashare/le2.webp";
import img6 from "../Aarashare/le3.webp";
import img7 from "../Aarashare/le4.webp";
import img8 from "../Aarashare/Screenshot 2024-05-15 161549.png";
import img9 from "../Aarashare/ss1.png";
import img10 from "../Aarashare/ss2.png";
import img11 from "../Aarashare/ss3.png";
import img12 from "../Aarashare/ss4.png";
import img13 from "../Aarashare/ss5.png";
import img14 from "../Aarashare/ss6.png";
import img15 from "../Aarashare/ss7.png";
import img16 from "../Aarashare/ss8.png";
import { Button, Divider, MenuItem, Select, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import Slider from "react-slick";

const Aara = () => {
  const aaaru = [
    {
      id: 1,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/seo.webp",
      statement: "Search Engine Optimization",
    },
    {
      id: 2,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/smm.webp",
      statement: "Social Media Marketing",
    },
    {
      id: 3,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/sem.webp",
      statement: "Search Engine Marketing",
    },
    {
      id: 4,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/ppc.webp",
      statement: "Pay Per Click",
    },
    {
      id: 5,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/em.webp",
      statement: "Email Marketing",
    },
    {
      id: 6,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/cm.webp",
      statement: "Content Marketing",
    },
    {
      id: 7,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/exhibition.webp",
      statement: "Exhibition & Signage Design",
    },
    {
      id: 8,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/gd.webp",
      statement: "Graphic & Print Design",
    },
    {
      id: 9,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/social-media.webp",
      statement: "Social Media Design",
    },
    {
      id: 10,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/email.webp",
      statement: "Email Template Design",
    },
    {
      id: 11,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/3d-model.webp",
      statement: "3D Modelling & Design",
    },
    {
      id: 12,
      image:
        "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/services/video-marketing.webp",
      statement: "Promo Video production & ...",
    },
  ];

  return (
    <div className="relative">
      <nav className="flex flex-row gap-5 justify-center shadow-2xl p-[1%] pl-[30%] fixed w-full bg-white z-30">
        <Button className="!text-black hover:!text-red-400 !capitalize">
          Home
        </Button>
        <Button className="!text-black hover:!text-red-400 !capitalize">
          About-Us
        </Button>
        <Button className="!capitalize !text-black hover:!text-red-400">
          Services
          <Select className="!size-8 ">
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Search Engine Optimization(SEO)
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Social Media Marketing(SMM)
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Search Engine Marketing(SEM)
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Pay Per Click (PPC) Campaign
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Email Marketing
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Content Marketing
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Exhibition & Signage Design Services
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Graphic & Print Design
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Social Media Design
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Email Template Design
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              3D Modeling & Design
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Promo Video production & Design
            </MenuItem>
          </Select>
        </Button>
        <Button className="!capitalize !text-black hover:!text-red-400">
          Tools
          <Select className="!size-8">
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Site Explorer
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Keywords Explorer
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Site Audit
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Rank Tracker
            </MenuItem>
            <MenuItem className="!text-xs justify-center !bg-white hover:!bg-gray-100">
              Content Explorer
            </MenuItem>
          </Select>
        </Button>
        <Button className="!text-black hover:!text-red-400 !capitalize">
          Blog
        </Button>
        <Button className="!text-black hover:!text-red-400 !capitalize">
          Contact
        </Button>
        <div className="flex flex-row gap-2">
          <Button className="!rounded-2xl !capitalize !bg-[#e6e6e6] hover:!bg-black hover:!text-white !text-black p-[1%] !shadow-xl">
            Get Qoute Now
            <ArrowForwardIcon className="bg-[#c5c5c5] !rounded-2xl p-[1%]" />
          </Button>
        </div>
        <div className="absolute top-0 left-56">
          <img src={img1} alt="" className="w-[30%]" />
        </div>
      </nav>
      <div className="bg-purple-50 pt-[5%]">
        <div className="flex flex-row pl-[13%] pt-[6%] gap-3">
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
          <div>
            <p className="tracking-widest text-[#232f6d] font-semibold py-[1%]">
              DIGITAL MARKETING AGENCY
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="pl-[13%] pt-[]">
            <p className="text-5xl font-bold text-[#343a40] py-[2%]">
              Digital Marketing
            </p>
            <p className="text-5xl font-bold text-[#343a40]">
              Business Solution
            </p>
            <p className="text-xl pt-[2%]">
              Aara Global team of dedicated go-getters in the field of SEO &
            </p>
            <p className="text-xl">Digital Marketing.</p>
            <div className="flex flex-row gap-2 py-[3%]">
              <div className="py-[3%] px-[0.5%]">
                <Button
                  className="!capitalize !bg-[#e6e6e6] hover:!bg-black hover:!text-white !text-black !rounded-2xl !shadow-xl"
                  variant="text"
                >
                  Get Qoute Now
                  <ArrowForwardIcon className="bg-[#c5c5c5] !rounded-2xl p-[1%]" />
                </Button>
              </div>

              <PlayArrowIcon className="!bg-gray-200 hover:!bg-[#343a40] hover:text-white !rounded-full !w-16 !h-16 !p-[3.5%] !shadow-xl" />

              <p className="py-[4%] px-[1%] ">Intro Video</p>
            </div>
          </div>
          <div className="">
            <img src={img2} alt="" className="p-[10%]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row pt-[6%] pl-[10%]">
        <div>
          <img src={img3} alt="" className="p-[8%]" />
        </div>
        <div className="pt-[7%] pl-[%]">
          <div className="flex flex-row gap-5">
            <div className="pt-[1%]">
              <Divider className="!h-1 !w-12 bg-red-400" />
            </div>
            <div>EXCLUSIVE DIGITAL MARKETING AGENCY</div>
          </div>
          <h1 className="text-4xl font-bold py-[1%]">About Us</h1>
          <p className="pt-[1%] py-[2%] text-[14px] font-semibold">
            Aara Global is a professional digital marketing agency in Lucknow
            offering SEO, SMO, PPC, <br /> Email marketing, and other digital
            marketing services to ventures to select the right methods <br />
            for their digital presence. We are a Lucknow and Noida-based digital
            marketing agency with <br /> having overall 10 years of experience
            in the digital marketing IT Industry. Our goal is to satisfy <br />
            client satisfaction and this is often what we thrive for. Our
            experienced and robust team <br /> always is there to form your
            project, into a successful mission.
          </p>
          <p className="pt-[1%] text-[14px] font-semibold">
            At Aara Global, you'll get complete solutions associated with
            Digital marketing & Internet
            <br />
            marketing at budget-friendly charges. we provide a huge array of
            digital marketing services <br /> which include program optimization
            (SEO), pay-per-click (PPC) advertising, and social media <br />
            marketing. Moreover, solutions are offered as per the precise need.
          </p>
          <div className="flex flex-row py-[2%]">
            <Button className="!rounded-2xl !capitalize !bg-[#e6e6e6] hover:!bg-black hover:!text-white !text-black p-[1%] !shadow-xl">
              Read More
              <ArrowForwardIcon className="bg-[#c5c5c5] !rounded-2xl p-[1%]" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-7 w-full">
        <div className="w-[50%] pl-[15%] pt-[5%]">
          <div className="flex flex-row gap-5">
            <div className="pt-[2%]">
              <Divider className="!h-1 !w-12 bg-red-400" />
            </div>
            <div>SKILLS</div>
          </div>
          <h1 className="text-4xl font-bold">Why Us</h1>

          <p className="text-[14px] font-semibold pt-[2%]">
            Aara Global is a pioneer and dynamic digital agency where you'll get
            a good range of solutions for digital marketing. We are experts deal
            in digital marketing and traditional digital advertising services
            etc. We use the simplest methods, analytical, creative, and unique
            approaches to bringing an excellent level of satisfaction for the
            purchasers. We as a team of dynamic and young digital marketing
            professionals provide customized and tailored solutions for digital
            marketing to satisfy different purposes of selling.
          </p>
          <p className="text-[14px] font-semibold">
            We are equipped with most advanced digital marketing tools which
            have brought the digital revolution. Our digital marketing experts
            organize the meeting with the clients to discuss their needs and
            requirements to provide the best services to them. The experts of
            our company have precisely worked on Search engine optimization,
            social media optimization, content marketing, and social media
            marketing. We focus on segmentation in order to avoid later problems
            and target the niche market easily.
          </p>
          <p className="text-[14px] font-semibold">
            We are dedicated to escalating our business clients to a new level
            of success.We aim at understanding your business needs at first
            before finding the most suitable marketing strategy. Each digital
            marketing campaign is designed to simplify digital marketing
            solutions for businesses. We are committed to the use of transparent
            marketing strategies so we take your business to a new level of
            success..
          </p>
          <div className="flex flex-row py-[2%]">
            <Button className="!rounded-2xl !capitalize !bg-[#e6e6e6] hover:!bg-black hover:!text-white !text-black p-[1%] !shadow-xl">
              Discover More
              <ArrowForwardIcon className="bg-[#c5c5c5] !rounded-2xl p-[1%]" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 w-[50%] pr-[15%]">
          <div className="border bg-gray-50 shadow-xl">
            <img src={img4} alt="" className="p-[8%]" />
            <h1 className="text-2xl font-semibold px-[8%] ">Expert Team</h1>
            <p className="px-[8%] py-[2%] text-xs flex flex-col gap-1">
              <h1>Our digital marketing expert </h1>
              <h1>understands our client's business </h1>
              <h1>needs first. Then make a bit plan </h1>
              <h1> and set realistic deadlines to finish </h1>
              <h1>the work. We communicate </h1>
              <h1> constantly with our clients to </h1>
              <h1>supply them with progress </h1> <h1> updates.</h1>
            </p>
          </div>
          <div className="border bg-gray-50 shadow-xl">
            <img src={img5} alt="" className="p-[8%]" />
            <h1 className="text-2xl font-semibold px-[8%]">Cost Effective</h1>
            <p className="px-[8%] py-[2%] text-xs flex flex-col gap-1">
              <h1>We are providing an economical</h1>
              <h1> solution for your business..</h1>
            </p>
          </div>
          <div className="border bg-gray-50 shadow-xl">
            <img src={img6} alt="" className="p-[8%]" />
            <h1 className="text-2xl font-semibold px-[8%]">Best & Unique</h1>
            <p className="px-[8%] py-[2%] text-xs flex flex-col gap-1">
              <h1>We are distinctive in light of the</h1>
              <h1> fact that we are computerized</h1>
              <h1>showcasing aficionados and</h1>
              <h1> consistently put resources into the</h1>
              <h1>advancement of our group's</h1> <h1> advanced abilities.</h1>
            </p>
          </div>
          <div className="border bg-gray-50 shadow-xl">
            <img src={img7} alt="" className="p-[8%]" />
            <h1 className="text-2xl font-semibold px-[8%]">Strategy</h1>
            <p className="px-[8%] py-[2%] text-xs flex flex-col gap-1">
              <h1>Your prosperity on computerized</h1>
              <h1> stages begins with how you </h1>
              <h1>characterize your association’s</h1>
              <h1> advanced encounters, be it </h1>
              <h1>
                internet shopping knowledge of your online business store..
              </h1>
            </p>
          </div>
        </div>
      </div>
      <div className="py-[3%]">
        <div className="bg-white px-[12%]">
          <div className="flex flex-row gap-5 justify-center bg-gray-50 pt-[4%] shadow-xl">
            <div className="pt-[1%]">
              <Divider className="!h-1 !w-12 bg-red-400" />
            </div>
            <div>ONLINE CHECKER</div>
            <div className="pt-[1%]">
              <Divider className="!h-1 !w-12 bg-red-400" />
            </div>
          </div>
          <h1 className="text-4xl flex justify-center font-bold p-[0.5%] bg-gray-50 shadow-xl">
            Check Your Website Traffic
          </h1>
          <div className="flex flex-row gap-5 justify-center p-[2%] bg-gray-50 pt-[3%]">
            <TextField
              className="!w-[30%] !rounded-full"
              size="small"
              id="outlined-basic"
              label="Website Link Here"
              variant="outlined"
              InputProps={{ endAdornment: <LanguageIcon /> }}
            />
            <TextField
              className="!w-[30%]"
              size="small"
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              InputProps={{ endAdornment: <EmailIcon /> }}
            />
          </div>
          <div className="flex flex-row justify-center bg-gray-50 pt-[1%] pb-[2.5%] shadow-xl">
            <Button className="!rounded-2xl !capitalize !bg-[#e6e6e6] hover:!bg-black hover:!text-white !text-black p-[1%]">
              Submit Now
              <ArrowForwardIcon className="bg-[#c5c5c5] !rounded-2xl p-[1%]" />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-[1%]">
        <div className="flex flex-row gap-5 justify-center">
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
          <div>SERVICES WE OFFER</div>
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
        </div>
        <h1 className="text-4xl flex justify-center font-bold p-[0.5%]">
          Our Services
        </h1>
        <h2 className="flex justify-center">
          With the help of 100+ digital experts in their fields we offer the
          following:
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-7 px-[15%] py-[2%]">
        {aaaru.map((i) => (
          <div className=" bg-white shadow-2xl px-[8%] py-[8%]">
            <img src={i.image} alt="" className="px-[35%] py-[10%]" />
            <p className="flex justify-center py-[2%] text-[13.5px] font-semibold">
              {i.statement}
            </p>
          </div>
        ))}
      </div>
      <div className="p-[1%]">
        <div className="flex flex-row gap-5 justify-center">
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
          <div>FEEDBACK</div>
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
        </div>
        <h1 className="text-4xl flex justify-center font-bold p-[0.5%]">
          Testimonials
        </h1>
        <h2 className="flex justify-center">WHAT CLIENTS SAYS?</h2>
      </div>
      <div className="slider-container bg-white py-[4%] px-[2%]">
        <Slider
          autoplay
          autoplaySpeed={2000}
          speed={2000}
          slidesToShow={4}
          slidesToScroll={1}
          infinite
          className="!shadow-2xl"
        >
          <div>
            <img src={img9} alt="" className="rounded-3xl p-[5%]" />
          </div>
          <div>
            <img src={img10} alt="" className="rounded-3xl p-[5%]" />
          </div>
          <div>
            <img src={img11} alt="" className="rounded-3xl p-[5%]" />
          </div>
          <div>
            <img src={img12} alt="" className="rounded-3xl p-[5%]" />
          </div>
          <div>
            <img src={img13} alt="" className="rounded-3xl p-[5%]" />
          </div>
          <div>
            <img src={img14} alt="" className="rounded-3xl p-[5%]" />
          </div>
          <div>
            <img src={img15} alt="" className="rounded-3xl p-[5%]" />
          </div>
          <div>
            <img src={img16} alt="" className="rounded-3xl p-[5%]" />
          </div>
        </Slider>
      </div>
      <div className="p-[1%]">
        <div className="flex flex-row gap-5 justify-center">
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
          <div>PARTNERS</div>
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
        </div>
        <h1 className="text-4xl flex justify-center font-bold p-[0.5%]">
          Our Partners
        </h1>
      </div>
      <div className="slider-container bg-gray-100 py-[4%] px-[15%] ">
        <Slider
          autoplay
          autoplaySpeed={2000}
          speed={2000}
          slidesToShow={4}
          slidesToScroll={1}
          infinite
        >
          <div className="bg-white p-[5%]">
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/clients/lawtrend.webp"
              alt=""
            />
          </div>
          <div className="hover:contrast-75 bg-white p-[5%]">
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/clients/easybuk.webp"
              alt=""
            />
          </div>
          <div className="bg-white p-[5%]">
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/clients/momentous.webp"
              alt=""
            />
          </div>
          <div className="bg-white p-[5%]">
            <img
              src="https://aaraglobal.com/assets/images/clients/olykefoods.webp"
              alt=""
            />
          </div>
          <div className="bg-white">
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/clients/taru.webp"
              alt=""
            />
          </div>
          <div className="bg-white">
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/clients/rajsoundwave_studio.webp"
              alt=""
            />
          </div>
          <div className="bg-white">
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/clients/fusion.webp"
              alt=""
            />
          </div>
          <div className="bg-white">
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/clients/csir.webp"
              alt=""
            />
          </div>
          <div className="bg-white">
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/clients/nabeel.webp"
              alt=""
            />
          </div>
          <div className="bg-white">
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/clients/irctc.webp"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="grid grid-cols-4 px-[1%] py-[5%] bg-gray-100">
        <div className="text-2xl">About Company</div>
        <div className="text-2xl">Our Services</div>
        <div></div>
        <div className="text-2xl">Contact Us</div>

        <div className="flex flex-row">
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-black" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-black" />
          </div>
        </div>
        <div className="pt-[9%]"></div>
        <div className="flex flex-row">
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-red-400" />
          </div>
          <div className="pt-[1%]">
            <Divider className="!h-1 !w-12 bg-black" />
          </div>
        </div>
        <div className="text-[14px] px-[]">
          Aara Global is a professional digital marketing agency in Lucknow
          offering SEO, SEM, SMM, SMO, PPC, and other digital marketing services
          to ventures to select the right technology for their dream project. We
          are a Lucknow and Noida-based digital marketing agency with having
          overall 10 years of experience in the IT Industry. Our goal is to
          satisfy client satisfaction and this is often what we thrive for. Our
          experienced and robust team always is there to form your project, into
          a successful mission. Read More...
        </div>
        <div className="font-bold grid grid-cols-1 text-[14px]">
          <h1 className="hover:text-red-400">
            Search Engine Optimization (SEO)
          </h1>
          <h1 className="hover:text-red-400">Social Media Marketing (SMM)</h1>
          <h1 className="hover:text-red-400">Search Engine Marketing (SEM)</h1>
          <h1 className="hover:text-red-400">Pay Per Click (PPC) Campaign</h1>
          <h1 className="hover:text-red-400">Email Marketing</h1>
          <h1 className="hover:text-red-400">
            Exhibition & Signage Design Services
          </h1>
        </div>
        <div className="font-bold grid grid-cols-1 text-[14px]">
          <h1 className="hover:text-red-400">Content Marketing</h1>
          <h1 className="hover:text-red-400">Graphic & Print Design</h1>
          <h1 className="hover:text-red-400">Social Media Design</h1>
          <h1 className="hover:text-red-400">Email Template Design</h1>
          <h1 className="hover:text-red-400">3D Modeling & Design</h1>
          <h1 className="hover:text-red-400">
            Promo Video production & Design
          </h1>
        </div>
        <div className="font-bold grid grid-cols-1 text-[14px]">
          <div className="flex flex-row gap-2">
            <LocationOnIcon className="!rounded-2xl !bg-gray-300 p-[1%]" />
            <p>B-7 Real Earth City Chinhat, Lucknow</p>
          </div>
          <p>226028, Uttar Pradesh, India</p>
          <div className="flex flex-row gap-2">
            <EmailIcon className="!rounded-2xl !bg-gray-300 p-[1%]" />
            <h1 className="hover:text-red-400">info@aaratechnologies.com</h1>
          </div>
          <div className="flex flex-row gap-1">
            <PhoneEnabledIcon className="!rounded-2xl !bg-gray-300 p-[1%]" />
            <h1 className="hover:text-red-400">+91-8881108882,</h1>
            <h1 className="hover:text-red-400">+91-8303171321</h1>
          </div>
          <img src={img8} alt="" className="px-[5%]" />
        </div>
      </div>
      <div className="flex flex-row justify-between px-[2%] py-[0.5%] shadow-2xl">
        <div className="font-semibold text-[14px] flex items-center">
          2022 © AARA Global | All right reserved.
        </div>
        <div className="flex flex-row gap-3 text-[14px] items-center">
          <div className="hover:text-red-400">Privacy Policy </div>
          <div className="hover:text-red-400">Term & Conditions</div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="rounded-2xl !bg-gray-200 p-[4%]">
            <FacebookIcon />
          </div>
          <div className="rounded-2xl !bg-gray-200 p-[4%]">
            <TwitterIcon />
          </div>
          <div className="rounded-2xl !bg-gray-200 p-[4%]">
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aara;
