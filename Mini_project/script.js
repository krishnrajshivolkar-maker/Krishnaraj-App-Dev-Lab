const loginPage = document.getElementById("loginPage");
const app = document.getElementById("app");
const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const DUMMY_EMAIL = "fitness@app.com";
const DUMMY_PASSWORD = "fit123";

loginBtn.addEventListener("click", () => {
  if(emailInput.value === DUMMY_EMAIL && passwordInput.value === DUMMY_PASSWORD){
    loginPage.style.display = "none";
    app.style.display = "block";
  } else {
    alert("Invalid credentials! Use:\nEmail: fitness@app.com\nPassword: fit123");
  }
});

const addBtn = document.getElementById("addExerciseBtn");
const container = document.getElementById("exerciseContainer");
const pointsDisplay = document.getElementById("points");

const modal = document.getElementById("modal");
const newExerciseInput = document.getElementById("newExerciseInput");
const saveExerciseBtn = document.getElementById("saveExerciseBtn");
const cancelExerciseBtn = document.getElementById("cancelExerciseBtn");

let exercises = [
  { name: "Push Ups", sets: 0 },
  { name: "Pull Ups", sets: 0 },
  { name: "Crunches", sets: 0 },
  { name: "Squats", sets: 0 }
];
let points = 0;
const MAX_EXERCISES = 5;

function renderExercises(){
  container.innerHTML = "";
  exercises.forEach((ex,index)=>{
    const div = document.createElement("div");
    div.classList.add("exercise");
    div.innerHTML = `
      <h3>${ex.name}</h3>
      <p>Sets Done: ${ex.sets}</p>
      <button onclick="addSet(${index})">+ Add Set</button>
      <button onclick="removeSet(${index})">- Remove Set</button>
      <button class="delete-btn" onclick="deleteExercise(${index})">Delete Exercise</button>
    `;
    container.appendChild(div);
  });
  pointsDisplay.textContent = points;
}

window.addSet = function(index){
  exercises[index].sets++;
  points += 10;
  renderExercises();
}

window.removeSet = function(index){
  if(exercises[index].sets>0){
    exercises[index].sets--;
    points -= 10;
    renderExercises();
  }
}

window.deleteExercise = function(index){
  if(confirm(`Are you sure you want to remove "${exercises[index].name}"?`)){
    points -= exercises[index].sets * 10; // Deduct points
    exercises.splice(index,1);
    renderExercises();
  }
}

addBtn.addEventListener("click", ()=>{
  if(exercises.length >= MAX_EXERCISES){
    alert("Maximum 5 exercises allowed.");
    return;
  }
  modal.classList.remove("hidden");
});

cancelExerciseBtn.addEventListener("click", ()=>{
  modal.classList.add("hidden");
  newExerciseInput.value = "";
});

saveExerciseBtn.addEventListener("click", ()=>{
  const name = newExerciseInput.value.trim();
  if(name){
    exercises.push({name, sets:0});
    renderExercises();
    newExerciseInput.value = "";
    modal.classList.add("hidden");
  } else {
    alert("Please enter a valid exercise name.");
  }
});

renderExercises();
