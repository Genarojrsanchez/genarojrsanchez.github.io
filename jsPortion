

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

$.ajax({
    url:"https://api.thecatapi.com/v1/breeds?x-api-key=0725609f-987c-4a8e-9d77-5f4d41e631ee=$limit= 10:name"
  }).then(
    (data)=>{
      // const arr = [];
      // const theData = Object.entries(data).eq(arr)

      // console.log(theData)
      for(i = 0; i <= data.length; i++){
        // console.table(data[i]);
          console.log(data)
        $("#name").html(data[10].name);
        $("#life_span").html(data[10].life_span);
        $("#temperment").html(data[10].temperament);

    }
  },
    (error)=>{
      console.log('bad request');
    }
  );


let imgIndex = 0;

  $(".next").on("click", () => {
    const $img= $(".carousel-images").children().eq(imgIndex)
    $img.css("display","none")
    imgIndex ++
    const $img2=$(".carousel-images").children().eq(imgIndex)
    $img2.css("display","block")
  });
