Vue.component("frame-card", {
  props: ["frame", "isactive"],
  template:
    "<div class='frame' v-bind:class='{fcardActive:isactive, fcardOut:!isactive}'> [FRAME] <br> Model: {{ frame.name }} <br> Weight: {{ frame.weight }} lbs <br> Shield Rating: {{ frame.shieldRating }} HP <br> Speed: {{ frame.speed }} mph</div>"
});
Vue.component("head-card", {
  props: ["head", "isactive"],
  template:
    "<div class='head' v-bind:class='{hcardActive:isactive, hcardOut:!isactive}'> [HEAD] <br> Model: {{ head.name }} <br> Weight: {{ head.weight }} lbs <br> AI: {{ head.AI }} IQ <br> Speed: {{ head.speed }} mph {{ head.pic }}</div>"
});
Vue.component("arm-card", {
  props: ["arm", "isactive"],
  template:
    "<div class='arm' v-bind:class='{acardActive:isactive, acardOut:!isactive}'> [ARMS] <br> Model: {{ arm.name }} <br> Weight: {{ arm.weight }} lbs <br> Firepower: {{ arm.firepower }} rpm <br> Speed: {{ arm.speed }} mph {{ arm.pic }}</div>"
});
Vue.component("leg-card", {
  props: ["leg", "isactive"],
  template:
    "<div class='leg' v-bind:class='{lcardActive:isactive, lcardOut:!isactive}'> [LEGS] <br> Model: {{ leg.name }} <br> Weight: {{ leg.weight }} lbs <br> Speed: {{ leg.speed }} mph {{ leg.pic }}</div>"
});

var app = new Vue({
  el: "#app",
  data: {
    //FRAME
    frame: [
      {
        name: "MK011 Cuirass",
        weight: 1800,
        shieldRating: 2000,
        speed: -45,
        info:
          "Top military grade frame armor used by the Hominid Empire. This armor boasts the highest shield rating amongst all of the human frameworks. However, it's heavy weight makes it impractical for average situational use. Perfect for crowd control, A mech in the MK011 Cuirass will not be defeated by numbers alone.",
        image: "images/cuirass.png"
      },
      {
        name: "BR9-Katana Body Armor",
        weight: 1000,
        shieldRating: 1350,
        speed: -30,
        info:
          "The BR9-Katana Body Armor is favored for it's versatility and quality in build. Black Sun arms dealers invented the framework in hopes of pitching it to the Hominid Empire for military use. Negotiations failed and now Black Sun supplies this framework to the Empire's adversaries.",
        image: "images/katana.png"
      },
      {
        name: "Stryder Chest (2056 Edition)",
        weight: 600,
        shieldRating: 970,
        speed: -15,
        info:
          "The 2056 model of the Stryder Chest piece was renowned for revolutionizing the manueverability of mechs. Nearly 100 years later it is still favored by mercenaries for it's cheap price tag and abundance of after market parts. What the Stryder Chest lacks in shielding power it makes up for in speed. Martian rebels fitted their scouting Mechs with the Stryder Chest all the way up until their defeat 15 years ago.",
        image: "images/MK.png"
      }
    ],
    curFrameId: 0,
    currentFrame: {
      name: "MK011 Cuirass",
      weight: 1800,
      shieldRating: 2000,
      speed: -45,
      info:
        "Top military grade frame armor used by the Hominid Empire. This armor boasts the highest shield rating amongst all of the human frameworks. However, it's heavy weight makes it impractical for average situational use. Perfect for crowd control, A mech in the MK011 Cuirass will not be defeated by numbers alone.",
      image: "images/cuirass.png"
    },
    //HEAD
    head: [
      {
        name: "Deus-Cortex",
        weight: 900,
        AI: 150,
        speed: -15,
        info:
          "Deus-Cortex is the apex of artificial intelligence technology. The product of countless hours worked by the brightest at Titan University very few of these mech heads reside in the galaxy. A Deus-Cortex will fetch a steep price and so any mech encountered bearing the Deus-Cortex will find that their opponent will try to defeat them head in tact. However, trying to outsmart a mech with Deus-Cortex AI will prove futile.",
        image: "images/deus.png"
      },
      {
        name: "Skullware IV",
        weight: 620,
        AI: 99,
        speed: -7,
        info:
          "After the disastorous release of Skullware III, an event in which many mechs running the system were hacked by terrorist organizations and turned agianst the populus, Skull Tech took a 6 year hiatus. During this time Skull Tech focused on beating lawsuit cases and staying out of the public eye. After years of careful planning and countless credits being used to improve public relations, Skull Tech released Skullware IV. The success of Skullware IV is nothing short of a maricle. The AI exchanged many of the aggressive programs it's predecessor used for more humane ones. Skullware IV has become the favorite amongst SWAT teams for it's ability to recognize civilians in hostage situations.",
        image: "images/skull.png"
      },
      {
        name: "Drone OS",
        weight: 278,
        AI: 61,
        speed: -2,
        info:
          "It must be said that the Drone Operating System is equipped with some of the worst AI in the industry. Drone OS is the cheapest in it's class while still being functional. However, there are many situations where this AI could be useful. Fielding an army of mechs using Drone OS would be fairly in expensive and would suffice for eliminating human targets. Pirates and other marauders prefer Drone OS for it's simplicity. Needless to say Drone OS is quickly becoming obsolete but there are rumors that an updated version is in the works.",
        image: "images/drone.png"
      }
    ],
    curHeadId: 0,
    currentHead: {
      name: "Deus-Cortex",
      weight: 900,
      AI: 150,
      speed: -15,
      info:
        "Deus-Cortex is the apex of artificial intelligence technology. The product of countless hours worked by the brightest at Titan University very few of these mech heads reside in the galaxy. A Deus-Cortex will fetch a steep price and so any mech encountered bearing the Deus-Cortex will find that their opponent will try to defeat them head in tact. However, trying to outsmart a mech with Deus-Cortex AI will prove futile.",
      image: "images/deus.png"
    },
    //ARM
    arm: [
      {
        name: "Mini Railgun",
        weight: 950,
        firepower: 10000,
        speed: -12,
        info:
          "The development of a cost effective and lethal railgun has been the lifes work of many mechanists since the age of stellar colonialism began. Although still a prototype, this arm was accidently leaked into the public market and now every arms dealer has their own version of a railgun out of fear of the competition leaving them behind. The potential of railgun technology is undeniable. Even in it's prototype stage a railgun has the ability to cut an Imperial Battle Frigate in half with only one blast. Railguns are still not common place on the field but arms dealers cannot wait for the chance to prove their worth in order to attract the attention of investors.",
        image: "images/rail2.png",
        image2: "images/rail.png"
      },
      {
        name: "Outer Rim Pulse Cannon",
        weight: 762,
        firepower: 8900,
        speed: -8,
        info:
          "Ancient technology that has become a staple for mech squadrons across the galaxy, nobody knows for sure where the Pulse Cannon came from or who invented it. Even the aliens that used it exclusively could not tell you how this arm came to be. All anybody knows is that the Pulse Cannon has an immense reputation for destroying mechs and thats all that really matters.",
        image: "images/pulse2.png",

        image2: "images/pulse.png"
      },
      {
        name: "AM18 Hammer MG",
        weight: 301,
        firepower: 5400,
        speed: -4,
        info:
          "In an age wear projectile based firearms are losing popularity the Hammer MG seems nearly impervious to the rise and fall of trends in the mech industry. Due to its reliability and sufficient firepower the Hammer MG is perfect for recruits and other grunts that need a deadly weapon, but aren't enough of an asset to receive higher caliber.",
        image: "images/hammer.png",
        image2: "images/hammer2.png"
      }
    ],
    curArmId: 0,
    currentArm: {
      name: "Mini Railgun",
      weight: 950,
      firepower: 10000,
      speed: -12,
      info:
        "The development of a cost effective and lethal railgun has been the lifes work of many mechanists since the age of stellar colonialism began. Although still a prototype, this arm was accidently leaked into the public market and now every arms dealer has their own version of a railgun out of fear of the competition leaving them behind. The potential of railgun technology is undeniable. Even in it's prototype stage a railgun has the ability to cut an Imperial Battle Frigate in half with only one blast. Railguns are still not common place on the field but arms dealers cannot wait for the chance to prove their worth in order to attract the attention of investors.",
      image: "images/rail2.png",
      image2: "images/rail.png"
    },
    //LEG
    leg: [
      {
        name: "Mantis Greaves",
        weight: 1000,
        speed: 30,
        info:
          "The Mantis Greaves received it's name from its ability to launch mechs to high altitudes. An alien invention at heart, the Mantis greaves mimic the aliens natural ability to jump to high places. The Mantis Greaves are one of the heaviest leg components on the market, but it's sophisticated thrusters allow mechs to sprint to incredible speeds and to leap over skyscrapers.",
        image: "images/mantis.png"
      },
      {
        name: "Martian Steppe Navigators",
        weight: 750,
        speed: 21,
        info:
          "The Martian Steppe Navigators saw a lot of action in the rebellion. When the Hominid Empire's main legion landed on mars they were met by a large contingent of rebel mechs moving across the martian dunes as if it were nothing. The Martian Steppe Navigators epitomize all terrain and in 2139 it was named Mecha Aficionado's Mech Component of the Year.",
        image: "images/martian.png"
      },
      {
        name: "Basic Thrusters V.2",
        weight: 656,
        speed: 15,
        info:
          "These basic thrusters are primarily used for bootcamp training simulations and are rarely seen off a military compound. However, a few models have found their way into circulation and are now sought after by any juggernaut enthusiast who wishes to sacrifice their speed for armor/firepower.",
        image: "images/thruster.png"
      }
    ],
    curLegId: 0,
    currentLeg: {
      name: "Mantis Greaves",
      weight: 1000,
      speed: 30,
      info:
        "The Mantis Greaves received it's name from its ability to launch mechs to high altitudes. An alien invention at heart, the Mantis greaves mimic the aliens natural ability to jump to high places. The Mantis Greaves are one of the heaviest leg components on the market, but it's sophisticated thrusters allow mechs to sprint to incredible speeds and to leap over skyscrapers.",
      image: "images/mantis.png"
    },
    fcardActive: true,
    hcardActive: true,
    acardActive: true,
    lcardActive: true
  },

  methods: {
    //FRAME
    arrowClicked: function() {
      this.fcardActive = !this.fcardActive;

      setTimeout(() => {
        this.curFrameId++;
        if (this.curFrameId >= this.frame.length) this.curFrameId = 0;
        this.currentFrame = this.frame[this.curFrameId];
        this.fcardActive = !this.fcardActive;
      }, 300);
      console.log(this.curFrameId);
    },
    backClicked: function() {
      this.fcardActive = !this.fcardActive;

      setTimeout(() => {
        this.curFrameId--;
        if (this.curFrameId <= -1) this.curFrameId = 2;
        this.currentFrame = this.frame[this.curFrameId];
        this.fcardActive = !this.fcardActive;
      }, 300);
      console.log(this.curFrameId);
    },

    //HEAD

    harrowClicked: function() {
      this.hcardActive = !this.hcardActive;

      setTimeout(() => {
        this.curHeadId++;
        if (this.curHeadId >= this.head.length) this.curHeadId = 0;
        this.currentHead = this.head[this.curHeadId];
        this.hcardActive = !this.hcardActive;
      }, 300);
      console.log(this.curHeadId);
    },
    hbackClicked: function() {
      this.hcardActive = !this.hcardActive;

      setTimeout(() => {
        this.curHeadId--;
        if (this.curHeadId <= -1) this.curHeadId = 2;
        this.currentHead = this.head[this.curHeadId];
        this.hcardActive = !this.hcardActive;
      }, 300);
      console.log(this.curHeadId);
    },

    //ARM

    aarrowClicked: function() {
      this.acardActive = !this.acardActive;

      setTimeout(() => {
        this.curArmId++;
        if (this.curArmId >= this.arm.length) this.curArmId = 0;
        this.currentArm = this.arm[this.curArmId];
        this.acardActive = !this.acardActive;
      }, 300);
      console.log(this.curArmId);
    },
    abackClicked: function() {
      this.acardActive = !this.acardActive;

      setTimeout(() => {
        this.curArmId--;
        if (this.curArmId <= -1) this.curArmId = 2;
        this.currentArm = this.arm[this.curArmId];
        this.acardActive = !this.acardActive;
      }, 300);
      console.log(this.curArmId);
    },

    //LEG

    larrowClicked: function() {
      this.lcardActive = !this.lcardActive;

      setTimeout(() => {
        this.curLegId++;
        if (this.curLegId >= this.leg.length) this.curLegId = 0;
        this.currentLeg = this.leg[this.curLegId];
        this.lcardActive = !this.lcardActive;
      }, 300);
      console.log(this.curLegId);
    },
    lbackClicked: function() {
      this.lcardActive = !this.lcardActive;

      setTimeout(() => {
        this.curLegId--;
        if (this.curLegId <= -1) this.curLegId = 2;
        this.currentLeg = this.leg[this.curLegId];
        this.lcardActive = !this.lcardActive;
      }, 300);
      console.log(this.curLegId);
    },

    //DATA

    totalData: function() {
      document.getElementById("weightContainer").innerHTML =
        this.currentFrame.weight +
        this.currentArm.weight +
        this.currentHead.weight +
        this.currentLeg.weight +
        " lbs";

      document.getElementById("speedContainer").innerHTML =
        70 +
        this.currentFrame.speed +
        this.currentArm.speed +
        this.currentHead.speed +
        this.currentLeg.speed +
        " mph";
      document.getElementById("aiContainer").innerHTML =
        this.currentHead.AI + " IQ";
      document.getElementById("shieldContainer").innerHTML =
        this.currentFrame.shieldRating + " HP";
      document.getElementById("rpmContainer").innerHTML =
        this.currentArm.firepower + " rpm";

      //SHOW MECH

      var showHead = document.createElement("img");
      showHead.src = this.currentHead.image;
      document.getElementById("headContainer").appendChild(showHead);
      showHead.style.width = 40 + "px";
      showHead.style.height = 40 + "px";

      var showFrame = document.createElement("img");
      showFrame.src = this.currentFrame.image;
      document.getElementById("frameContainer").appendChild(showFrame);
      showFrame.style.width = 85 + "px";
      showFrame.style.height = 100 + "px";

      var showLegs = document.createElement("img");
      showLegs.src = this.currentLeg.image;
      document.getElementById("legContainer").appendChild(showLegs);
      showLegs.style.width = 85 + "px";
      showLegs.style.height = 110 + "px";

      var showArm = document.createElement("img");
      showArm.src = this.currentArm.image;
      document.getElementById("armContainer").appendChild(showArm);
      showArm.style.width = 100 + "px";
      showArm.style.height = 40 + "px";
      var showArm2 = document.createElement("img");
      showArm2.src = this.currentArm.image2;
      document.getElementById("armContainer2").appendChild(showArm2);
      showArm2.style.width = 100 + "px";
      showArm2.style.height = 40 + "px";
    },

    fdisplayInfo: function() {
      document.getElementById("moreInfo").innerHTML = this.currentFrame.info;
    },
    hdisplayInfo: function() {
      document.getElementById("moreInfo").innerHTML = this.currentHead.info;
    },
    adisplayInfo: function() {
      document.getElementById("moreInfo").innerHTML = this.currentArm.info;
    },
    ldisplayInfo: function() {
      document.getElementById("moreInfo").innerHTML = this.currentLeg.info;
    }
  }
});
