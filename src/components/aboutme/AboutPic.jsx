import React from "react";

const AboutPic = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="src\assets\images\about.jpg"
          alt="About me"
          className="h-full w-auto object-cover"
          onError={() => console.log('Image failed to load')}
        />
      </div>
      <div className="h-[500px] w-[300px] bg-Orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutPic;
