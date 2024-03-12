const getData = async function () {
    //When fetching the data, your program needs to wait for the function to resolve before assigning its value to the res variable, that’s why you’ll add the await keyword before fetch()
    const response = await fetch(
      "https://api.quotable.io/quotes?author=maya-angelou"
    );
    //Call the .json() method on the res response to transform the JSON data into a proper JavaScript object
    const data = await response.json();
    console.log(data);
  };
  getData();
  