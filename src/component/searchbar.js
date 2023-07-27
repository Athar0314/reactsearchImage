import React from "react";
import { useState } from "react";
import "./searchbar.css";
import { LoadImage, SearchImage } from "../api";
import Image from "./imagelist";
import axios from "axios";
import Loading from "./loading";

export default function SearchPhotos() {
  const data = LoadImage();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const searchPhotos = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=" +
          query +
          "&client_id=HrnrMgqalkMkLQnvBzeY52DyZZ8CrMsGS40g8SthBNs"
      )
      .then((data) => {
        setLoading(false);
        setSearchData(data.data.results);
      });
  };
  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Search....`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          {searchData.length > 0 ? (
            <div className="card-list">
              {searchData.map((img) => (
                <div className="card">
                  <Image
                    className="card--image"
                    src={img.urls.small_s3}
                    img={img}
                    key={img.id}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="card-list">
              {data.map((img) => (
                <div className="card">
                  <Image
                    className="card--image"
                    src={img.urls.small_s3}
                    img={img}
                    key={img.id}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
