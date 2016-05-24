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
      
  #5 Javascript Events & Data changes in react.
    - Added an input to change the title
    -Create the method to set the state
        this.setState({title});
        
    we create a propertie where we pass the function of the parent to the child, so the child can trigger changes FROM the parent    
    ex
      
          changeTitle="this.setTitle.bind(this)"
          
    Then in the child we create a component that have to change the state, so we can call the function reacently created to let his re render
        onChange="this.handleChange.bind(this)"
        
      And then we add a method.  
      handleChange(e){
        this.props.changeTitle(e.target.value);
      }
      
    NOTE: PROPERTIES PASS AS EVALUATED JS so it can bind the correct handlers
    
      value={this.props.title} instead of value="this.props.title"
      
  #6 React router & intro to single page aplication.
  
    npm i -S react-router
    npm i -S history@1
    import {Router,Route,IndexRoute,hashHistory} from "react-router" in the main FILE
    - Instead of rendering our component we are gonna render Router
      <Router></Router>
    - We are also gonna bootstrap "history"
      <Router history={hashHistory}></Router>
      
    - Then inside the Router markup we have to declare our routes we the following sintax
      <Route path='/' component={Layout}/>
    - Within our path we can declare an IndexRoute which would be render like a primary children
      <IndexRoute component={Example} ></IndexRoute>
    - Adding routes children to the main path its easy as adding the "Route" markup
      <Route path='About' component={About}>
    - After that we can import Link from react-router and call to a child component
      <Link to='Main'> JSX BUTTON </Link>
    - Finally we can choose where to render this components with the prop
      {this.props.children}
      
  #7 React Router Params & queries
      <Route path='about/:miCasa' component={Layout}/>   --> It won't match #/about because its have to be specific
        (optional)
        to render the params we can inspect
          this.params.miCasa
      Queries
        this.props.location here it is every QUERY >D>d>
    
    
  #8 React Inline Style & Component Arrays
    You can add inline style and then refer to a style variable in the same container 
      style={containerStyle}
      
      const {containerStyle = {
        marginTop:'60px'
      }
      
    Component Arrays
      Create an array of components with map
        const Articles = ['maxi','pao','hola'].map((title,i)=><Article key={i} title={title})
      }
  
      
      
    
