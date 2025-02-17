export const Hero = () => {
  return (
    <div className="p-12 bg-yellow-50 h-screen flex items-center justify-start text-white overflow-hidden">
      <div className="text-start max-w-3/4 px-4">
        <h1 className="text-gray-800 text-2xl md:text-6xl font-bold mb-6">
          Crafting Stories Through Motion
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
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
    </div>
  );
};

// <div className="bg-black relative h-screen flex items-center justify-center text-white overflow-hidden">
// <div className="relative z-20 text-center max-w-4xl px-4">
//   <h1 className="text-5xl md:text-7xl font-bold mb-6">
//     Crafting Stories Through Motion
//   </h1>
//   <p className="text-lg md:text-xl mb-8">
//     I’m a passionate video editor specializing in creating captivating
//     visuals for brands, films, and creative projects. Let’s bring your
//     vision to life.
//   </p>
//   <a
//     href="#work"
//     className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
//   >
//     View My Work
//   </a>
// </div>
// </div>
