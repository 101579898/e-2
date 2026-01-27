var list = [];

function preload(){
    list = loadJSON("data.json");

}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
//   fill("purple");
//   circle(mouseX, mouseY, 100)
//   fill("pink");
//   rect(70, 20, 50, 50);
//   fill("black");

  //title
  textAlign("center");
  textSize(24);
  text("Canada's Exports", 200, 40);

 //list and place elements
  Object.values (list).map((item, index) => {
    fill("red");
    rect(50, index * 30 + 70, item.amount, 10);
    textSize(10);
    textAlign("left");
    text(item.name, 50, index * 30 + 65);
  })


}