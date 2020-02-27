
let catsData = [];
let imgIndex = 0;
let circleImg = 10;

$.ajax({
  url:"https://api.thecatapi.com/v1/breeds?x-api-key=0725609f-987c-4a8e-9d77-5f4d41e631ee"
}).then(
  (data)=>{
    catsData = data;
    if (data.length > 0){
      updatedLabels(data[0]);
    }
  },
  (error)=>{
    console.log("bad request");
  }
);
updatedLabels = (cat) => {
  console.log(cat);
  $("#name").html(cat.name).val();
  $("#life_span").html(cat.life_span);
  $("#temperment").html(cat.temperament);
}

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
  const $img2= $(".carousel-images").children().eq(imgIndex)
  $img2.css("display","block")

  updatedLabels(catsData[imgIndex]);
});

const findCat = () => {
  let catName = $("#catNameInput").val()
  alert("Remind me to find the API that has the " + catName + " cat!");
}
