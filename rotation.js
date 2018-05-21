var box;

planck.testbed('rotation', function(testbed) {
  var pl = planck, Vec2 = pl.Vec2;

  var world = pl.World(Vec2(0,0));


  
      box = world.createBody().setDynamic();
      box.createFixture(pl.Box(1, 3));
      box.setPosition(Vec2(0, 10));
      box.setMassData({
        mass : 1,
        center : Vec2(),
        I : 1
      })

  return world
});


        document.addEventListener("mousemove", function (e){
            var tx = e.clientX - window.innerWidth*0.5;
            var ty = e.clientY - window.innerHeight*0.5;
            
            
            var offset = (Math.PI * 2) * 0.25;
            var newFacingAngle = Math.atan2(-ty, tx) + offset;
            console.log(tx,ty,newFacingAngle);
            if (box) {
                box.setAngle(newFacingAngle);
            }
        });