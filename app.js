

// const theData = data.length;
// const theData = () => {
//
//   console.log(loop);
// }
// // console.log(arr);
// $("form").on("submit", (event) => {
//
//   // add a const of the input of users
//   const userInput = $("input[type='text']");
//   event.preventDefault();
// console.log(userInput)
let catsData = [];

$.ajax({
  url:"https://api.thecatapi.com/v1/breeds?x-api-key=0725609f-987c-4a8e-9d77-5f4d41e631ee"
}).then(
  (data)=>{
    catsData = data;

    if (data.length > 0){
      updatedLabels(data[0]);
    }
    // const arr = [];
    // const theData = Object.entries(data).eq(arr)
    // console.log(theData)
  },
  (error)=>{
    console.log("bad request");
  }
);
updatedLabels = (cat) => {
  console.log(cat);
  $("#name").html(cat.name);
  $("#life_span").html(cat.life_span);
  $("#temperment").html(cat.temperament);

}

let imgIndex = 0;
let circleImg = 67;

$(".next").on("click", () => {
  const $img= $(".carousel-images").children().eq(imgIndex)
  $img.css("display","none")
  imgIndex ++
  if (imgIndex > circleImg){
    imgIndex = 0;
  }
  const $img2=$(".carousel-images").children().eq(imgIndex)
  $img2.css("display","block")
updatedLabels(catsData[imgIndex]);

});
$(".previous").on("click", () => {
  const $img= $(".carousel-images").children().eq(imgIndex)
  $img.css("display","none")
  imgIndex --
  if (imgIndex < 0){
    imgIndex = circleImg;
  }
  const $img2=$(".carousel-images").children().eq(imgIndex)
  $img2.css("display","block")

  updatedLabels(catsData[imgIndex]);
});

findCat = () => {
  let catName = $("#catNameInput").val()
  console.log("looking for cat with name " + catName);
}
