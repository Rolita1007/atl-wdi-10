angular.module('thePresidentsApp')
  .controller('PresidentsController', PresidentsController);
// function PresidentsController(){
//   this.all = [];
//     // { name: 'George Washington', start: 1789, end: 1797 },
//     // { name: 'John Adams', start: 1797, end: 1801 },
//     // { name: 'Thomas Jefferson', start: 1801, end: 1809 },
//     // { name: 'James Madison', start: 1809, end: 1817 }

//   this.addPresident = addPresident;
//   this.newPresident = {};
//   function addPresident(){
//     this.all.push(this.newPresident);
//     this.newPresident = {};
//   }
// }

//this is the angular ingection.
//create var vm which stands for view model.
//it acts as the this.all above.
//in the DOM the response.data will show up as objects which is coming
//from the seeded file
PresidentsController.$inject = ['$http'];
function PresidentsController($http) {
  var vm = this;
  vm.all = [];
  vm.newPresident = {};
  vm.addPresident = addPresident;
  vm.deletePresident = deletePresident;


  function getPresidents() {
    $http
      .get('/presidents')
      .then(function(response) {
        console.log(response.data);
        vm.all = response.data.presidents;
    });
  }

  getPresidents();

  function addPresident(){
    vm.all.push(this.newPresident);
    vm.newPresident = {};
  }


  function addPresident() {
    $http
    .post('/presidents')
    .then(function(response) {
      console.log(response.data);
      vm.all = response.data.presidents;
    });
  }
    function addPresident() {
      vm.all.push(this.addPresident);
      vm.addPresident = {};
    }

    function deletePresident(president) {
      console.log('delete president');
      $http
      .delete('/presidents/' + president._id)
      .then(function(response) {
        removePresidentFromList(president);
        console.log(response.data);
        //vm.all = response.data.presidents;
      });
    }
}
