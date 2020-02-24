

// const theData = data.length;
// const theData = () => {
//
//   console.log(loop);
// }
// console.log(arr);
$("form").on("submit", (event) => {

  // add a const of the input of users
  const userInput = $("input[type='text']");
  event.preventDefault();
  // console.log(userInput)

$.ajax({
    url:"https://api.thecatapi.com/v1/breeds?x-api-key=0725609f-987c-4a8e-9d77-5f4d41e631ee=$limit= 10:name"
  }).then(
    (data)=>{
      // const arr = [];
      // const theData = Object.entries(data)

      // console.log(theData)
      // for(i = 0; i <= theData.length; i++){
      //   console.table(theData[i]);
          console.log(data)
        $('#name').html(data.name);
        $('#life_span').html(data[10].life_span);
        $('#temperment').html(data[10].temperament);

    // }
  },
    (error)=>{
      console.log('bad request');
    }
  );
})
