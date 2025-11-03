// รายละเอียดสถานที่ (ใส่ได้ 30 รายการ)
const places = [
  {
    img: "img/place1.jpg",
    name: "สถานที่เที่ยว 1",
    desc: "รายละเอียดของสถานที่เที่ยว 1..."
  },
  {
    img: "img/place2.jpg",
    name: "สถานที่เที่ยว 2",
    desc: "รายละเอียดของสถานที่เที่ยว 2..."
  },
  {
    img: "img/place3.jpg",
    name: "สถานที่เที่ยว 3",
    desc: "รายละเอียดของสถานที่เที่ยว 3..."
  }
  // ✅ เพิ่มจนถึง 30 รายการ
];

function showDetail(index) {
  document.getElementById("gallery").classList.add("hidden");
  document.getElementById("detail").classList.remove("hidden");

  document.getElementById("bigImg").src = places[index].img;
  document.getElementById("placeName").innerText = places[index].name;
  document.getElementById("placeDesc").innerText = places[index].desc;
}

function goBack() {
  document.getElementById("gallery").classList.remove("hidden");
  document.getElementById("detail").classList.add("hidden");
}
