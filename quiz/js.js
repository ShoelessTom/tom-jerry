//button click function, something happens when the button is clicked
document.getElementById("btn").addEventListener("click", btnClicked);
//seting the variables as the values of the input questions
function btnClicked() {
  let q1l = +document.getElementById("qone").value;
  let q2l = document.getElementById("qtwo").value;
  let q3l = document.getElementById("qtree").value;
  let q4l = document.getElementById("qfour").value;
  // useful for the results
  let rez1 = 0;
  let rez2 = 0;
  let rez3 = 0;
  let rez4 = 0;
  let q1 = q1l;
  let q2 = q2l.toLowerCase();
  let q3 = q3l.toLowerCase();
  let q4 = q4l.toLowerCase();
  console.log(q2);
  console.log(q3);
  console.log(q4);
  console.log(q2);
  //Checking if a user has all the questions correct
  if (q1 === 1941 && q2 === "william hanna" && q3 === "cat" && q4 === "mouse") {
    document.getElementById("results").innerHTML =
      "Congrats, Everythings correct";
    document.getElementById("results").style.color = "green";
  } else if (
    q1 === 1941 &&
    q2 === "joseph roland barbera" &&
    q3 === "cat" &&
    q4 === "mouse"
  ) {
    document.getElementById("results").style.color = "green";
    document.getElementById("results").innerHTML =
      "Congrats, Everythings  correct";
  }

  //Giving feedback on individual right questions
  if (q1 === 1941) {
    console.log("first right");
    document.getElementById("feedback1").innerHTML = "Correct!";
    document.getElementById("feedback1").style.color = "green";
  } else {
    console.log("first wrong");
    rez1 = 1;
    document.getElementById("feedback1").innerHTML =
      "Tom and Jerry was created in 1941";
    document.getElementById("feedback1").style.color = "red";
  }

  if (q2 === "william Hanna") {
    console.log("2nd correct");
    document.getElementById("feedback2").innerHTML = "Correct!";
    document.getElementById("feedback2").style.color = "green";
  } else {
    console.log("2nd wrong");
    document.getElementById("feedback2").innerHTML =
      "WRONG!, William Hanna and Joseph Roland Barbera were the creators of Tom and Jerry";
    document.getElementById("feedback2").style.color = "red";
    rez2 = 1;
  }

  if (q3 === "cat") {
    console.log("3rd correct");
    document.getElementById("feedback3").innerHTML = "Correct!";
    document.getElementById("feedback3").style.color = "green";
  } else {
    console.log("3rd wrong");
    document.getElementById("feedback3").innerHTML = "WRONG! Toms a cat";
    document.getElementById("feedback3").style.color = "red";
    rez3 = 1;
  }

  if (q4 === "mouse") {
    console.log("4th correct");
    document.getElementById("feedback4").innerHTML = "Correct!";
    document.getElementById("feedback4").style.color = "green";
  } else {
    console.log("4th wrong");
    document.getElementById("feedback4").innerHTML = "Wrong!, Jerry is a mouse";
    document.getElementById("feedback4").style.color = "red";
    rez4 = 1;
  }

  // if (q1 !== 1941) {
  //   console.log("first wrong");
  //   rez1 = 1;
  //   document.getElementById("feedback1").innerHTML =
  //     "Tom and Jerry was created in 1941";
  //   document.getElementById("feedback1").style.color = "red";
  // }
  // if (q2 !== "william hanna") {
  //   console.log("2nd wrong");
  //   document.getElementById("feedback2").innerHTML =
  //     "WRONG!, William Hanna and Joseph Roland Barbera were the creators of Tom and Jerry";
  //   document.getElementById("feedback2").style.color = "red";
  //   rez2 = 1;
  // }
  // if (q3 !== "cat") {
  //   console.log("3rd wrong");
  //   document.getElementById("feedback3").innerHTML = "WRONG! Toms a cat";
  //   document.getElementById("feedback3").style.color = "red";
  //   rez3 = 1;
  // }
  // if (q4 !== "mouse") {
  //   console.log("4th wrong");
  //   document.getElementById("feedback4").innerHTML = "Wrong!, Jerry is a mouse";
  //   document.getElementById("feedback4").style.color = "red";
  //   rez4 = 1;
// }
// calculating the final result in percentage

final = ((4 - rez1 - rez2 - rez3 - rez4) / 4) * 100;
//final as a fraction
ffraction = 4 - rez1 - rez2 - rez3 - rez4;

//presonalized msgs based on the final results.
if (final > 99) {
  // document.getElementById("results").innerHTML = "WOW, YOU MUST BE A SUPER TOM AND JERRY FAN!!!!, YOU SCORED ";
  let msg = `WOW, YOU MUST BE A SUPER TOM AND JERRY FAN!!!!, YOU SCORED ${final}% aka ${ffraction}/4`;
  document.getElementById("results").innerHTML = msg;
  document.getElementById("results").style.color = "green";
} else if (final > 70) {
  // document.getElementById("results").innerHTML = "WOW, YOU MUST BE A SUPER TOM AND JERRY FAN!!!!, YOU SCORED ";
  let msg = `Hmm, you might have seen the show when you were little. You scored ${final}% aka ${ffraction}/4`;
  document.getElementById("results").innerHTML = msg;
  document.getElementById("results").style.color = "blue";
} else if (final > 50) {
  // document.getElementById("results").innerHTML = "WOW, YOU MUST BE A SUPER TOM AND JERRY FAN!!!!, YOU SCORED ";
  let msg = `You slightly remember the show, heres your final score: ${final}% aka ${ffraction}/4`;
  document.getElementById("results").innerHTML = msg;
  document.getElementById("results").style.color = "yellow";
} else {
  // document.getElementById("results").innerHTML = "WOW, YOU MUST BE A SUPER TOM AND JERRY FAN!!!!, YOU SCORED ";
  let msg = `Woah you know NOTHING about this show, your score is ${final}% aka ${ffraction}/4`;
  document.getElementById("results").innerHTML = msg;
  document.getElementById("results").style.color = "red";
}
}
