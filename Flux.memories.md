##Flux Stores

 Stores are containers to hold the state of the application. It saves and contains certain behaviour regarding this state.
It manage its own state and yield events when change so everyone can act accordingly.

In our todo exercise we will create a TodoStore file and import the EventEmitter.
  this.emit('change'); //This will trigger actions 


##Events
ComponentWillMount is a react lyfecicle method that will automatically excute when components were mounted the first time.
Its ideal to attach all the events listener.

##The Flux Dispatcher

Basically all stores are hearing from them and when the dispatch emits an event stores just attend what it cares about.

####First install:
    npm i -S flux
  
####Create a dispatcher file.
  ```javascript
    import {Dispatcher} from 'flux';

    export default new Dispatcher;
  ```
####Import from  all stores
```javascript
  import dispatcher from '../dispatcher';
```  
####Register a Handle method && Add handle method
```javascript
  dispatcher.register(todoStore.handleActions.bind(todoStore));
  
  handleActions(action){
    switch (action.type) {
      case 'CREATE_TODO':{
        this.addTask(action.text);
      }
        break;
      default:

    }
```
