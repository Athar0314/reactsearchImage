import { useState, useEffect } from "react";
import axios from "axios";
function LoadImage() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos?client_id=HrnrMgqalkMkLQnvBzeY52DyZZ8CrMsGS40g8SthBNs"
      )
      .then((data) => {
        setImage(data.data);
      });
  }, []);
  return image;
}
export { LoadImage };
