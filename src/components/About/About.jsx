import VideoSource from "../../assets/video/AboutVideo.mp4";
import AboutImg from "../../assets/AboutPic.jpg";



const About = () => {
  return (
    <>
      <div
        id="/about"
        className="m-3 flex flex-wrap justify-center h-auto md:max-h-screen"
      >
        <div className="flex flex-wrap justify-between m-1 w-full md:w-[80%]  ">

          <div className=" md:hidden flex flex-wrap justify-end  items-end  overflow-hidden rounded-md md:w-[40%] ml-5 mt-10 mb-3">
            <img
              src={AboutImg}
              alt="About Image"
              className=" h-[15rem] w-[23rem] rounded-lg border-2 shadow-md ml-3 "
            />
          </div>
          <div className="flex  flex-wrap w-full md:w-1/2  p-3">
            <h2 className="flex items-center w-full mx-3 mt-3 text-lg font-bold text-blue-600  ">
              ABOUT ME
            </h2>
            <h1 className="relative w-full  flex items-center mx-3 text-3xl font-bold mt-2 mb-2">
              Full-Stack Javascript Developer based in kolkata
              <h3 className="text-xl absolute mt-[4.8rem] right-[11rem] md:mt-9 md:right-[14rem]">
                📍
              </h3>
            </h1>
            <h3 className="text-lg font-semibold text-gray-600 mx-3 mt-7 ">
              Hey, my name is<b className="text-gray-800"> Arkajyoti Kundu </b>,
              and I'm a Full-Stack Developer. My passion is to create and
              develop complete web apps, focusing on both frontend and backend
              development.
            </h3>
            <h1 className="text-lg font-semibold text-gray-600  mx-3 mt-5">
              My main stack currently is JavaScript/React.js in combination with
              Tailwind CSS. I am also familiar with backend technologies like
              Node.js, Express, and MongoDB, and I have built some projects
              using them.
            </h1>
          </div>

          <div className="flex flex-wrap justify-center  items-end   overflow-hidden rounded-md md:w-[40%] ml-5">
            <video
              className=" hidden md:flex h-[20rem] w-[24rem] object-cover rounded-lg border-2 shadow-md ml-3 "
              autoPlay
              muted
              loop
            >
              <source src={VideoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
