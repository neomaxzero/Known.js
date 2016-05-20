React Notes

#2 -Components and rendering
Render()
  -Only returns one tag
      return(
        <div class="parent">
          EVERYTHING
        </div>
      )
  -we can declare variables  and passing by handlevars syntax
      let name = "Maxi"
        <h1> Hi im {name}</h1>
  Inside handlevars you can execute almost any JS 
        <h1> Hi im {this.myMethod(param)}</h1>

--Inside class 
  Because its a class you can have a constructor method (always execute super() first)
    {
      constructor(){
        super();
        this.myName = "maxi";
      }
    }
    
      then you can refer to that variable like this.myName (remember THIS.)
  
    
#3 -Composing Multiple React.js

  1- Create components folder
  2- Create Layout.js (Components names should be capitalized)
  3- export default class (no reactdom neccessary)
  4- import class in the parent
  5- Create Header.js component
  6- import class in the Layout.js
  
  -If we want to render multiple elements we can create a list inside the render method with components inside and then we can call it by {}
    render(){
      var list =[<component/>,<component/>,<component/>];
      return(
        {list}
        );
      
    }
  -If a components have components in it you can create a folder with the name of the component and put their inner components there.
    ex.
      Header
        Title
        
#4 State Vs Props & Application Data

  State:
    -it lives in the component (only there), when the state change automatically dispatch a re-render on the neccessary dom-tree.
  
      constructor(){
        super();
        this.state = {name: 'Maxi'};
      }
      
    -you can access to it in the this.state.name object.
    
    -you can change it by this.setState({name:'Not Maxi'});
    
  
  Props:
    Are injected in components
    passing throug the component as an HTML attribute. 
      <Title title='Mi Titulo'/>
      
    provided by the object this.props.attribute
      this.props.title
    
    
