import filterSummary from './filterSummary';
const filteredData = (data) => {
  let info = {};
  let notFoundUrl="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
  if (data.show||data._embedded.show) {
    const show = data.show?data.show:data._embedded.show;
    const summary = filterSummary(data);
    const show_summary = summary ? summary : "";
    const show_image = show.image ? show.image.original : notFoundUrl;
    const show_rating = show.rating.average ? show.rating.average : "0.0";
    const show_name = show ? show.name : "";
    const show_id = show ? show.id : undefined;
    info = { summary: show_summary, image: show_image, name: show_name, rating: show_rating, id: show_id };
  }
  return info;
}
export default filteredData;