/*
Step 1: Prompt the user for their name. Store in variable (playerName)

Step 2: Next, prompt the user if they would like to play 3 or 6 holes of mini golf.
       

Step 3: Finally, prompt the user either 3 times or 6 times (depending on their input for the second prompt) for each "hole of golf" asking for the number of putts for that specific hole.
Keep track of their cumulative score (total number of putts) and at the end, compare that to the total course par (9 if they chose 3 holes, 18 if they chose 6 — par is 3 for every hole) to calculate the golfer’s total par for the round.
        -Loop 3 or 6 times
            -ask user how many putts
            -add that # to the total (total starts as 0)

Step 4: After the last hole, one of three messages is logged to the console depending on if the user was over, under or on par for the round:
               
If over par, the message should read "Nice try, (name)... Your total par was: +(par)." [be sure to include the plus symbol here to denote over par].
 -If  (total > 18 or 9 depending on how many loops)
If under par, the message should read "Great job, (name)! Your total par was: -(par)." [include the minus symbol]
-If (total <18 or 9)
If even with par, the message should read "Good game, (name). Your total par was: 0."
-If (total = 0)

*/

//prompt for playerName and for name and holeCount
let playerName = prompt("Welcome to GC mini golf! What is your name?");

let holeCount = "Hi " + playerName + "! Would you like to play 3 or 6 holes?";

while (holeCount !== 3 || holeCount !== 6) {
  holeCount = prompt("Would you like to play 3 or 6 holes?");
  if (holeCount == 3 || holeCount == 6) break;
}
//create conditions to loop for either 3 rounds or 6 rounds
//set total to zero

let total = 0;
if (holeCount == 3) {
  par = 9;
}
if (holeCount == 6) {
  par = 18;
}
for (let i = 0; i < holeCount; i++) {
  let totalScore = Number(prompt("How many putts for hole " + [i + 1] + "?"));
  total += totalScore;
}
let score = total - par;

//Console.log the results of playerName games

if (score < 0) {
  console.log(
    "Great job, " + playerName + "! Your total par was: " + score + "."
  );
}
if (score == 0) {
  console.log("Good game, " + playerName + ". Your total par was: 0.");
}
if (score > 0) {
  console.log(
    "Nice try, " + playerName + "... Your total par was: " + score + "."
  );
}
