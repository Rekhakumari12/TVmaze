import React, { useState} from 'react';
import Radiobtn from '../radioBtn/Radiobtn';
import Input from '../input/Input';
import CardList from '../cardList/CardList';
import './home.css';
function Home() {
  const [category, upadteCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [query, updateSearchInput] = useState('');
  const [data, setData] = useState([]);
  const getCategory = (e) => {
    upadteCategory(e.target.value);
  }
  const getSearchInput = (e) => {
    if (e.key === "Enter") {
      fetchData(category,query);
    }
    updateSearchInput(e.target.value);
  }
  const fetchData = async (cat,query) => {
    let url;
    try {
      setLoading(true);
      if (cat === "shows") {
        url = `https://api.tvmaze.com/search/shows?q=${query}`;
      }
      if (cat === "people") {
        let url2=`https://api.tvmaze.com/search/people?q=${query}`;
        const res = await fetch(url2);
        const resp = await res.json();
        let id = resp[0].person.id;
        url = `https://api.tvmaze.com/people/${id}/castcredits?embed=show`;
      }
      
      const res = await fetch(url);
      const resp = await res.json();
      setData(resp);
      setLoading(false);
    } catch (e) {
      alert("No Data Found!",e);
    }
  }
  return (
    <React.Fragment>
      <div className="container-fluied">
        <div className="hero_section">
          <div className="row">
            <div className="col-md-12 col-sm-6">
              <div className="hero_content">
                <div> <h1 className="heading">TVmaze</h1></div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                  <h3 className="search_by">Search Shows and People</h3>
                  </div>
                </div>
                <Radiobtn getCategory={getCategory} />
                <div className="mt-3"> {category ? <span className="text-warning h4 my-2">Enter {category} below</span> : ""}</div>
                {!category&&query?<p className="h4 mt-5 text-warning">Select category</p>:""}
                <Input getSearchInput={getSearchInput} cat={category} />
                <div>
                  {loading ? <p className="h1 mt-5">Loading...</p> : ""}
                  {data.length === 0&&query&&!loading? <p className="no_records text-danger">No records found!</p> : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CardList data={data} cat={category} />
      </div>
    </React.Fragment>
  );
}
export default Home;