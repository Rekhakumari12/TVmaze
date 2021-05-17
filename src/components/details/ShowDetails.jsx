import React, { useEffect,useState } from 'react';
import { Link} from 'react-router-dom';
import filterSummary from '../filterSummary';
import './details.css';
const ShowDetails = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  let url = `https://api.tvmaze.com/shows/${props.match.params.id}`;
  const fetchData = async (url) => {
    setLoading(true);
    let resp = await fetch(url);
    resp = await resp.json();
    setData(resp);
    setLoading(false);
  }
  useEffect(() => {
    fetchData(url);
  }, []);
  const summary = data.summary ? filterSummary(data) : "Has not added summary yet";
  const image = data.image ? data.image.original : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
  const name = data.name;
  const genres = data.genres ? data.genres : [];
  const lang = data.language ? data.language : "English";
  return (
    <div className="">
      {console.log(data)}
      <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
        <div className="container">
          <p className="navbar-brand brand text-white">{data.name}</p>
        </div>
      </nav>
      <div className="container">
        {loading?<h5>Loading...</h5>:""}
      {/* <ul className="nav nav-tabs mt-5">
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to={`${data.id}/main`}>Main</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to={`${data.id}/episode`}>Episodes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`${data.id}/cast`}>Cast</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to={`${data.id}/crew`} >Crew</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to={`${data.id}/character`}>Character</NavLink>
        </li>
        </ul> */}
        <div className="row mt-3">
          <div className="col-md-4 col-sm-12 col-xs-12 p-3">
            <div className="image_style d-flex">
              <img src={image} alt={name} style={{width:"30rem",border: "16px solid black"}} className="img-fluid"/>
            </div>
          </div>
            <div className="col-md-8 col-sm-12 col-xs-12 content_div">
            <p className="summ">{summary}</p>
            <div className="d-flex content_style row">
              <div className="col-md-6 col-sm-6 col-6">
              <h5>Genres </h5>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
              <p> {
                genres.map((item)=>{return item? item+" ":""})
              }</p>
              </div>
            </div>
            <div className="d-flex content_style row">
               <div className="col-md-6 col-sm-6 col-6"> <h5>Language </h5></div>
                <div className="col-md-6 col-sm-6 col-6"><p>{ lang}</p></div>
            </div>
            <div className="d-flex content_style row">
               <div className="col-md-6 col-sm-6 col-6"><h5>Premiered </h5></div>
                <div className="col-md-6 col-sm-6 col-6">   <p>{data.premiered}</p></div>
            </div>
            <div className="d-flex content_style row">
               <div className="col-md-6 col-sm-6 col-6"> <h5>Status </h5></div>
                <div className="col-md-6 col-sm-6 col-6"><p>{data.status}</p></div> 
            </div>
            <div className="d-flex content_style row">
               <div className="col-md-6 col-sm-6 col-6"><h5>Official Site </h5></div>
                <div className="col-md-6 col-sm-6 col-6"><a href={data.officialSite} target="_blank">Watch Now</a></div>
            </div>
            </div>
          </div>
        </div>
        </div>
  );
}


export default ShowDetails;