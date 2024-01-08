import ImageCard from "../ImageCard";
import "../index.css";
import ImageDetails from "../ImageDetails";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecCount, IncCount, SetCount } from "../../services/Redux/action";
import Header from "../Header";
const ImageContainer = () => {
  const dispatch = useDispatch();
  const imageData = useSelector((store: any) => store?.image_data?.data);
  const currentImage = useSelector((store: any) => store?.count);
  return (
    <React.Fragment>
      <Header content="Image Gallery" />
      {currentImage != null && (
        <ImageDetails
          id={currentImage}
          detailsData={imageData?.[currentImage]}
          maxLength={imageData?.length || 0}
          onCloseClick={() => {
            dispatch(SetCount(null));
          }}
          onIncClick={() => {
            dispatch(IncCount(1));
          }}
          onDecClick={() => {
            dispatch(DecCount(1));
          }}
        />
      )}
      <div className="grid-container">
        {imageData?.length > 0 &&
          imageData?.map((e: any, i: any) => {
            return <ImageCard key={i} imageData={e} />;
          })}
      </div>
    </React.Fragment>
  );
};

export default ImageContainer;
