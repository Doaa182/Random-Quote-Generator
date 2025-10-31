var arr = [undefined];
var i = 0;

function quoteGeneration() {
  var randomNum = Math.floor(Math.random() * 5) + 1;
  //   console.log(randomNum);

  if (arr.includes(randomNum)) {
    if (arr.length < 5) {
      document.getElementById("quotePlace").innerHTML = `
        <p>
          The random number was repeated. Please click again!
        </p>
        `;
    } else if (arr.length == 5) {
      document.getElementById("quotePlace").innerHTML = `
        <p>
           You have finished your trials :(
        </p>
        `;
    }
  } else {
    arr[i] = randomNum;
    i++;
    // console.log(arr);

    switch (randomNum) {
      case 1:
        document.getElementById("quotePlace").innerHTML = `
        <p>
            “Try not to become a man of success. Rather become a man of value.” <span> ― Albert Einstein </span>
        </p>
        `;
        break;
      case 2:
        document.getElementById("quotePlace").innerHTML = `
        <p>
            “Success is not how high you have climbed, but how you make a positive difference to the world.”  <span> ― Roy T. Bennett </span>
        </p>
        `;
        break;
      case 3:
        document.getElementById("quotePlace").innerHTML = `
        <p>
            “Failure is the condiment that gives success its flavor.”  <span> ― Truman Capote </span>
        </p>
        `;
        break;
      case 4:
        document.getElementById("quotePlace").innerHTML = `
        <p>
           “Have no fear of perfection - you'll never reach it.”  <span> ― Salvador Dali </span>
        </p>
        `;
        break;
      case 5:
        document.getElementById("quotePlace").innerHTML = `
        <p>
           “Sometimes it takes a good fall to really know where you stand”  <span> ― Hayley Williams </span>
        </p>
        `;
        break;
    }
  }
}
