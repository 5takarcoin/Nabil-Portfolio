import YouTube from "react-youtube";

const HoverVideoPreview = ({ isHovered, id }) => {
  const videoId = id; // Replace with your YouTube video ID

  const opts = {
    playerVars: {
      autoplay: 1, // Autoplay the video on hover
      controls: 0, // Hide controls
      modestbranding: 1, // Hide YouTube logo
      loop: 1, // Loop the video
      mute: 1, // Mute the video (required for autoplay in most browsers)
    },
  };

  return (
    <div
      className={`${
        isHovered && "scale-125 "
      } transition-transform duration-300`}
    >
      {isHovered ? (
        <YouTube videoId={videoId} opts={opts} />
      ) : (
        <img
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt="YouTube Thumbnail"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default HoverVideoPreview;
