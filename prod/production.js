var myApp = {
  mainMessage : "Welcome to the app!",

  mainGreeting() {
    console.log("Hey! welcome to my app!");
  }
};

myApp.module1 = {
  saySomething(message) {
    console.log(myApp.mainMessage, message, "I am a module.");
  },

  doSomething() {
    console.log("Called doSomething from module1.");
  }
};

myApp.module2 = {
  doSomethingElse() {
    console.log("Called doSomethingElse from module2.");
  }
};

(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething("Oh, hello!");

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }

  myFunc();
})();
