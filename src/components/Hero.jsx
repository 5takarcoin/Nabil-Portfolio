import hero from "../assets/image.png";

export const Hero = () => {
  return (
    <main>
      <section className="bg-black/20 rounded-4xl text-base md:text-xl p-4 mx-4 text-center font-one">
        <p>Tiny edits, big impact. Crafting stories one frame at a time.</p>
      </section>

      <section className="flex  flex-col md:flex-row justify-between p-4 gap-4 items-center ">
        <div className="flex flex-col gap-4 font-two text-7xl md:text-6xl lg:text-8xl justify-center items-between w-full md:w-auto">
          <p className="relative flex items-center gap-4 justify-around">
            <span className="scale-150 md:scale-120 md:hidden lg:block">
              <svg
                width="36"
                height="36"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.2087 0H27.1142V16.4408L15.4888 4.81538L4.81534 15.4888L16.4407 27.1142L0 27.1142V42.2087H16.4407L4.81539 53.834L15.4888 64.5074L27.1142 52.8821V69.3228H42.2087V52.8821L53.834 64.5074L64.5074 53.834L52.882 42.2087H69.3228V27.1142H52.8821L64.5074 15.4888L53.834 4.81537L42.2087 16.4407V0Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>Creative</span>
            {/* <span className="absolute bottom-6 -right-4 md:static"> */}
            <span className="scale-150 md:scale-120">
              <svg
                width="36"
                height="36"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.2087 0H27.1142V16.4408L15.4888 4.81538L4.81534 15.4888L16.4407 27.1142L0 27.1142V42.2087H16.4407L4.81539 53.834L15.4888 64.5074L27.1142 52.8821V69.3228H42.2087V52.8821L53.834 64.5074L64.5074 53.834L52.882 42.2087H69.3228V27.1142H52.8821L64.5074 15.4888L53.834 4.81537L42.2087 16.4407V0Z"
                  fill="black"
                />
              </svg>
            </span>
          </p>
          <p className="relative flex items-center gap-4 justify-around">
            <span className="scale-150 md:scale-120 md:hidden lg:block">
              <svg
                width="36"
                height="36"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <circle
                    cx="36.9528"
                    cy="36.0472"
                    r="34.0472"
                    stroke="black"
                    strokeWidth="4"
                  />
                  <circle cx="36.9528" cy="36.0472" r="19.4655" fill="black" />
                </g>
              </svg>
            </span>
            <span>Dynamic</span>
            {/* <span className="absolute bottom-6 -right-4 md:static"> */}
            <span className="scale-150 md:scale-120">
              <svg
                width="36"
                height="36"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <circle
                    cx="36.9528"
                    cy="36.0472"
                    r="34.0472"
                    stroke="black"
                    strokeWidth="4"
                  />
                  <circle cx="36.9528" cy="36.0472" r="19.4655" fill="black" />
                </g>
              </svg>
            </span>
          </p>
          <p className="relative flex items-center gap-4 justify-around">
            <span className="scale-150 md:scale-120 md:hidden lg:block rotate-180">
              <svg
                width="36"
                height="36"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 61.4961C16.9817 61.4961 30.748 47.7297 30.748 30.748C30.748 13.7664 16.9817 0 0 0V61.4961Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.748 61.4961C47.7297 61.4961 61.4961 47.7297 61.4961 30.748C61.4961 13.7664 47.7297 0 30.748 0V61.4961Z"
                    fill="black"
                  />
                </g>
              </svg>
            </span>
            <span>Versatile</span>
            {/* <span className="absolute bottom-6 -right-4 md:static"> */}
            <span className="scale-150 md:scale-120">
              <svg
                width="36"
                height="36"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 61.4961C16.9817 61.4961 30.748 47.7297 30.748 30.748C30.748 13.7664 16.9817 0 0 0V61.4961Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.748 61.4961C47.7297 61.4961 61.4961 47.7297 61.4961 30.748C61.4961 13.7664 47.7297 0 30.748 0V61.4961Z"
                    fill="black"
                  />
                </g>
              </svg>
            </span>
          </p>
        </div>

        <div className="md:w-3/4 w-full flex items-center justify-center rounded-4xl overflow-hidden">
          <img
            src={hero}
            alt=""
            className="min-h-full h-72 lg:h-1/2 lg:min-w-[1024px] object-cover w-full"
          />
        </div>
      </section>

      <section className="bg-black/20 rounded-4xl text-base md:text-xl p-4 mx-4 text-center font-one">
        <p>
          I transform raw footage into captivating stories—bringing visions to
          life, one frame at a time.
        </p>
      </section>
    </main>
  );
};

{
  /* <div className="p-12 bg-bgbg h-screen flex items-center justify-start text-white overflow-hidden">
      <div className="text-start px-4">
        <h1 className="text-txtx text-6xl  max-w-3/4 md:text-6xl  mb-6 font-one">
          Crafting Stories Through Motion
        </h1>
        <p className="text-gray-600 text-base md:text-xl mb-8">
          I’m a passionate video editor specializing in creating captivating
          visuals for brands, films, and creative projects. Let’s bring your
          vision to life.
        </p>
        <a
          href="#work"
          className="inline-block bg-blue-200 hover:bg-blue-300 text-black font-semibold py-3 px-8 rounded-lg transition duration-300"
        >
          View My Work
        </a>
      </div>
    </div> */
}
