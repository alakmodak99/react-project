import { useDispatch, useSelector } from "react-redux";
import { SetCount } from "../../services/Redux/action";
const ImageCard = ({
  imageData,
}: {
  imageData: any;
}) => {
      const dispatch = useDispatch();
  const currentImage = useSelector((store: any) => store?.count);
  return (
    <div
      onClick={() => {
        if (imageData?.id === currentImage) return;
        dispatch(SetCount(imageData?.id))
      }}
      className="grid-items"
    >
      <img draggable={false} src={imageData?.download_url || ""} alt="Picsum" />
    </div>
  );
};

export default ImageCard;
