// src/components/ImageComponent.jsx
const ImageComponent = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-64 h-64">
          <img
            src="../data/background.png"
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    );
  };
  
  export default ImageComponent;
  