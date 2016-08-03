### Redux EggHead tutorial (Principles by mai frend Dan)
## 1
  Single store for the whole application. All the state is in a sigle object called the *State Tree*
## 2
  *Actions are the only way to change the state in your application*
  The state tree is read only. To change your state you have to dispatch an action.
  
  *Actions* 
  Its a plain object discribing a change.
  Its a minimal representation of change in the state.
  Only requirement is that it needs a "type" property.
  Strings are recomended because are serializable.

## 3 
  *Pure functions*
  Functions that dont depend upon external resources that might change their expected behaviour. Every function that does not follow this principal is impure.
  
## 4
  *The Reducer function*
  The state mutation in your app need to be describe as a pure function, that takes the previous state and the action being dispatched and return the next state.
  Not modifying the previous sate it has to return a new object.
  
  
