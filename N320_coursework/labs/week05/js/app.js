Vue.component("student-card", {
  props: ["student", "isactive"],
  template:
    "<div class='student' v-bind:class='{cardActive:isactive, cardOut:!isactive}'> [ {{ student.name }} ] <br> Skill: {{ student.skill }} <br> Joy: {{ student.joy }} <br> Combat Level: {{ student.combatLvl }} {{ student.pic }}</div>"
});

var app = new Vue({
  el: "#app",
  data: {
    //I wanted to add a profile picture to each student but I was unable to get it to work. Suggestions on how to fix this
    //would be greatly appreciated! I added a combat level for my 3rd component of data instead.
    students: [
      {
        name: "Sienna",
        skill: 2,
        joy: 0,
        combatLvl: 15,
        pic: (src = "../images/liz.jpg")
      },
      {
        name: "Cyan",
        skill: 0,
        joy: 5,
        combatLvl: 32,
        pic: (src = "/images/kusanagi.jpg")
      },
      {
        name: "Magenta",
        skill: 3,
        joy: 3,
        combatLvl: 3,
        pic: (src = "images/Nazz.jpg")
      }
    ],
    curStudentId: 0,
    currentStudent: { name: "Sienna", skill: 2, joy: 0 },
    cardActive: true
  },
  methods: {
    arrowClicked: function() {
      this.cardActive = !this.cardActive;

      setTimeout(() => {
        this.currentStudent.skill++;

        this.curStudentId++;
        if (this.curStudentId >= this.students.length) this.curStudentId = 0;
        this.currentStudent = this.students[this.curStudentId];
        this.cardActive = !this.cardActive;
      }, 300);
      console.log(this.curStudentId);
    },
    backClicked: function() {
      //back button function
      this.cardActive = !this.cardActive;

      setTimeout(() => {
        this.currentStudent.joy--; //student loses when moving backwards

        this.curStudentId--;
        if (this.curStudentId <= -1) this.curStudentId = 2;
        this.currentStudent = this.students[this.curStudentId];
        this.cardActive = !this.cardActive;
      }, 300);
      console.log(this.curStudentId);
    }
  }
});
