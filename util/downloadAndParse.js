const { download } = require("./download");

function downloadAndParse() {
  const url = "https://www.bag.admin.ch/dam/bag/de/dokumente/mt/k-und-i/aktuelle-ausbrueche-pandemien/2019-nCoV/covid-19-datengrundlage-lagebericht.xlsx.download.xlsx/200325_Datengrundlage_Grafiken_COVID-19-Bericht.xlsx";
  let date = new Date();
  let month = date.getMonth() + 1;
  month = month.toString().length === 1 ? "0" + month : "" + month;
  let day = date.getDate();
  day = day.toString().length === 1 ? "0" + day : "" + day;
  const filename = `${date.getFullYear()}-${month}-${day}.xlsx`;
  const dirname = "files/";
  const dest = `${dirname}${filename}`;
  console.log("starting download...");

  download(url, dest, function (err) {
    if (err) {
      console.log(err);
    }
    else {
        console.log("download complete!");
    }
  });
}

module.exports = {
  downloadAndParse
}