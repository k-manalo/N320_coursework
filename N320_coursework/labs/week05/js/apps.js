Vue.component("student-card", {
  props: ["student", "isactive"],
  template:
    "<div class='student' v-bind: class='{ cardActive:isactive }'>{{ student.name }} : {{ student.skill }}</div>"
});

var apps = new Vue({
  el: "#apps",
  data: {
    students: [
      { name: "Sienna", skill: 2, joy: 0 },
      { name: "Cyan", skill: 0, joy: 5 },
      { name: "Magenta", skill: 3, joy: 3 }
    ],
    currentStudent: { name: "Sienna", skill: 2, joy: 0 },
    curStudentId: 0,
    cardActive: false
  },
  methods: {
    arrowClicked: function() {
      console.log(this.curStudentId);
      this.curStudentId++;
      this.currentStudent = this.students[this.curStudentId];
      if (this.curStudentId >= this.students.length) {
        this.curStudentId = -1;
      }
      this.cardActive = !this.cardActive;
    }
  }
});
