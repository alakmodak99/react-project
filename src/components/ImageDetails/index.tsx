import { Icon } from "@iconify/react";
import React from "react";
const ImageDetails = ({
  id,
  maxLength,
  detailsData,
  onCloseClick,
  onDecClick,
  onIncClick,
}: {
  id: number;
  maxLength: number;
  detailsData: any;
  onCloseClick?: () => void;
  onDecClick?: () => void;
  onIncClick?: () => void;
}) => {
  return (
    <React.Fragment>
      <div className="image-details">
        <div className="details-conteiner">
          <Icon
            onClick={onCloseClick}
            className="cross-icon"
            icon="gridicons:cross"
          />
          {id > 0 && (
            <Icon
              onClick={onDecClick}
              icon="iconamoon:arrow-left-2-duotone"
              className="left-arrow"
            />
          )}
          {id < maxLength - 1 && (
            <Icon
              onClick={onIncClick}
              icon="iconamoon:arrow-left-2-duotone"
              rotate={2}
              className="right-arrow"
            />
          )}
          <img
            draggable={false}
            src={detailsData?.download_url || ""}
            alt="Picsum"
          />
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Dimentions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{detailsData?.author || "----"}</td>
                <td>
                  {detailsData.width || "0"}X{detailsData?.height || "0"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageDetails;
