// Get the canvas element
var canvas = document.getElementById("renderCanvas");
// Generate the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
var camera, sphere, blueMat, box, cone;

var selectedMesh = null;

var scene = createScene();

function createScene() {
  // Create the scene space
  var scene = new BABYLON.Scene(engine);

  // Add a camera to the scene and attach it to the canvas
  camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 4,
    4,
    BABYLON.Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  //adding objects
  sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.7 }, scene);
  box = BABYLON.MeshBuilder.CreateBox(
    "box",
    { height: 0.2, width: 0.2 },

    scene
  );
  cone = BABYLON.MeshBuilder.CreateCylinder(
    "cone",
    { diameterTop: 0, diameterBottom: 0.5, tessellation: 100 },
    scene
  );

  var lesserSphere = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 0.2, height: 1 },
    scene
  );

  //change position of objects
  lesserSphere.position.z = 1;
  box.position.x = 1;
  sphere.addChild(lesserSphere);
  cone.position.x = -1;

  //add light
  light = new BABYLON.HemisphericLight(
    "HemiLight",
    new BABYLON.Vector3(1, 1, 0),
    scene
  );

  //lighting attributes
  //light.diffuse = new BABYLON.Color3(1, 0, 1);
  //light.specular = new BABYLON.Color3(1, 0, 0);

  blueMat = new BABYLON.StandardMaterial("blue", scene);
  blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 1);
  blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  greenMat = new BABYLON.StandardMaterial("green", scene);
  greenMat.diffuseColor = new BABYLON.Color3(0.4, 1, 0.4);
  greenMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  greyMat = new BABYLON.StandardMaterial("grey", scene);
  greyMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  greyMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);

  return scene;
}

//event listeners to move objects
/*window.addEventListener("keydown", function(event) {
  TweenMax.to(sphere.postition, 1.2, { x: " +=2" });
});*/

function checkUp() {
  console.log(selectedMesh.rotation.x);
}

window.addEventListener("keydown", function(event) {
  //upwards
  if (selectedMesh) {
    if (event.keyCode == 87) {
      TweenLite.to(selectedMesh.rotation, 1, {
        x: "+=20",
        onComplete: checkUp()
      });
      checkX();
    }
  }
  //downwards
  if (selectedMesh) {
    if (event.keyCode == 83) {
      TweenLite.to(selectedMesh.rotation, 1, {
        x: "-=20",
        onComplete: checkUp()
      });
      checkX();
    }
  }
});

function checkX() {
  if (
    box.rotation.x == sphere.rotation.x &&
    box.rotation.x == cone.rotation.x
  ) {
    box.material = greenMat;
    sphere.material = greenMat;
    cone.material = greenMat;
  } else {
    box.material = greyMat;
    sphere.material = greyMat;
    cone.material = greyMat;
  }
}

//onclick
window.addEventListener("click", function() {
  // We try to pick an object
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);

  pickResult.pickedMesh.material = blueMat;

  selectedMesh = pickResult.pickedMesh;
});

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
  scene.render();
});
