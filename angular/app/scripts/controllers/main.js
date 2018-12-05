'use strict';

/**
 * @ngdoc function
 * @name helloWorldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloWorldApp
 */
angular.module('helloWorldApp')
  .controller('MainCtrl', function ($http) {

    this.title = "Hello from controller";
    this.selectedAlumni = "...";
    this.newStudent = "";

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.alumni = [
      "Allan",
      "Gabe",
      "Justin",
      "Michael",
      "Andrew "
    ]

    this.selectedStudent = (person) => {
      this.selectedAlumni = person;
    }

    this.removeAlumin = (person) => {
      this.alumni = this.alumni.filter(p => p !== person);
    }

    this.addAlumni = () => {
      console.log(this.newStudent)
      this.alumni.push(this.newStudent);
      this.newStudent = "";
    }

    this.upperCaseNewAlumni = () => {
      this.newStudent = this.newStudent.toUpperCase();
    }

    $http.get("http://api.open-notify.org/astros.json")
      .then(resp => {
        console.log(resp)
        this.alumni = this.alumni.concat(resp.data.people.map(m => m.name))
      })

  });
