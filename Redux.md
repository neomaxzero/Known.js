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

