##Flux Stores

Stores are a container to hold the state of the application. It saves an contains certain behaviour regarding this state.
It manage its own state and yield events when change so everyone can act accordingly.

In our todo exercise we will create a TodoStore file and import the EventEmitter.
  this.emit('change'); //This will trigger actions 


##Events
ComponentWillMount is a react lyfecicle method that will automatically excute when components were mounted the first time.
Its ideal to attach all the events listener.
