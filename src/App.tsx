import React, { useEffect, useState } from "react";
import "./App.css";
import { getAPIData } from "./services";
import ImageContainer from "./components/ImageContainer";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { AddImageData } from "./services/Redux/action";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
    const imageData = useSelector((store: any) => store?.image_data?.data);
  const getImages = async () => {
    try {
      setLoading(true);
      const resp = await getAPIData({
        url: "v2/list",
      });
      dispatch(AddImageData(resp?.data));
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!imageData?.length) {
      getImages();
    }
  }, []);
  return (
    <div className="App">
      {loading && <Loader />}
      <ImageContainer />
    </div>
  );
}

export default App;
