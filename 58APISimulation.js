// konsep syncronous dan asyncronous
// - syncronous dimana program dibawahnya baru bisa berjalan pabila progrma diatasny selesai di eksekusi sedangkan asyncronous kode program bisa dijalankan bersamaa,n ketika ada kode diatasnya yang masih proses maka kode dibawahnya dieksekusi lebih dahulu sembari menunggu kode sebelumnya masih dalam proses

//  promise dan async await, promise adalah cara untuk menangani proses async sedangkan async await adalah cara menulis asyncronous dengan gaya lebih sederana

// =========================  Fake API call simulation
function getdata(url, callBack) {
  console.log(`fetching.....` + url);
  setTimeout(() => {
    callBack();
    callBack(url);
  }, 2000);
}

function renderData(url) {
  console.log({
    data: {
      title: url,
      name: "fahmi",
      age: 26,
    },
  });
}

getdata("Data siswa", renderData);

// =================== Call API real data
// 1. panggil data
// 2. simpan data
// 3. render data

// https://restcountries.com/v3.1/all
// https://api.thecatapi.com/v1/images/search

const getDataApi = () => {
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(`API can not find`);
    });
};

getDataApi();

// ================== dengan keyword async

console.log("========================= Data 2 fetching ======================");
const getData2 = async () => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error pada fetch`, error);
  }
};

getData2();
