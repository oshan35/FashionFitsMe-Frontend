import { homeimg } from "../assets/images";

const MainImage = () => {
    return (
        <div className="flex ">
<img 
                src={homeimg} 
                alt="Banner Image" 
                className="w-full h-auto" // Adjusted class to maintain aspect ratio
                style={{ objectFit: 'contain' }} // Ensures the image fits within the container
            />        </div>

    );
};
export default MainImage;