const filterSummary = (data) => {
  let res,text;
  if (data.show) {
    res = data.show;
    const summary = res.summary ? res.summary : "";
    const regex = new RegExp('(<p>|</p>|<b>|</b>|&amb;)', 'g');
    const summ = summary.replace(regex, "");
    text = summ.split(" ").splice(0, 4).join(" ");
  }
  else if (data._embedded) {
    res = data._embedded;
    const summary = res.summary ? res.summary : "";
    const regex = new RegExp('(<p>|</p>|<b>|</b>|&amb;|<i>|</i>|<br/>)', 'g');
    const summ = summary.replace(regex, "");
    text = summ.split(" ").splice(0, 4).join(" ");
  }
  else {
    res = data;
    const summary = res.summary ? res.summary : "";
    const regex = new RegExp('(<p>|</p>|<b>|</b>|&amb;|<i>|</i>|<br/>)', 'g');
    text = summary.replace(regex, "");
  }
  return (text);
}
export default filterSummary;