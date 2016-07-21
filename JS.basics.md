## Object creation Evolution

###  Object literal

```javascript
var guy = {
  name: "John",
  awesome: true,
  aboutMe: function() {
    return this.awesome ? "I'm awesome!" : "I'm lame :(";
  }
};
```

> This pattern is mostly suitable for creating one time objects

### Function pseudoconstructor (Returns object)

```javascript
function createGuy(name, awesome) {
  function awesomeness() {
    return "I'm awesome!";
  }

  function lameness() {
    return "I'm lame :(";
  }

  return {
    name: name,
    awesome: awesome,
    aboutMe: function() {
      return this.awesome ? awesomeness() : lameness();
    }
  };
}

```
>As we’re creating a full blown new object each time we call the function, we have memory usage issues if we want to create a lot of “instances” (actually, to the engine they are independent objects that happen to have properties and functions that behave the same).

### Constructor Function

```javascript
function Guy(name, awesome) {

  // Some "private" methods
  function awesomeness() {
    return "I'm awesome!";
  }

  function lameness() {
    return "I'm lame :(";
  }

  this.name = name;
  this.awesome = awesome;
  this.aboutMe = function() {
    return this.awesome ? awesomeness() : lameness();
  };
}

var guy = new Guy("John", true);
```
> Subtle difference than the previous one, not returning the function, just invoking inside the prototype  
