(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething("Oh, hello!");

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }

  myFunc();
})();
