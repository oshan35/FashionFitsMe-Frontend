import { homeimg } from "../assets/images";

const MainImage = () => {
    return (
        <div className="flex ">
            <img src={homeimg} alt="Banner Image" class="w-full h-full"></img>
        </div>

    );
};
export default MainImage;