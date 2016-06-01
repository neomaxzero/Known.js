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

##Flux Actions 

It works as an intermediate resource betweeen components and stores. It main purpose its crafting message that will be emitted through the dispatcher. Consider that everry change *SHOULD* begin within actions so everyone get notice about it.

### Import dispatcher && export actions of that component
```javascript

import dispatcher from '../dispatcher';

export function createTodo(text){
  dispatcher.dispatch({
    type:'CREATE_TODO',
    text
  })
}
```
###Async operations
When fetching data from an outside resource(ex. HTTP requests) you want to make sure to complete the operation before you dispatch events with your data loaded.
meanwhile could be very handful to emit an event while fetching data to ensure that your user receive some sort of feed back that its petition is being treated by the application.
