// import React from 'react';

// const App = () => {
//     return <Menu colour="blue" language="en" />;
// }

// function Menu(props) {
//     return(
//         <MenuItem 
//             colour={props.colour}
//             language={props.language}
//         />
//     )
// }

// function MenuItem(props) {
//     return(
//         <div>
//             <p>Theme colour: {props.colour}</p>
//             <p>Locale: {props.language}</p>
//         </div>
//     );
// }

// export default App;
//////////////////////////////////////////////////////////////////////////////

// import React from 'react';

// const AppContext = React.createContext({})

// const App = () =>
// <AppContext.Provider value={{color:"blue",lang:"eng"}}>
//   <Menu />
// </AppContext.Provider>

// function Menu(){
//   return <Menuitem />
// }
// const Menuitem = () =>
// <AppContext.Consumer>
//   {
//     value=><div>
//     <p>color:{value.color}</p>
//     <p>lang:{value.lang}</p>
//     </div>
//   }
// </AppContext.Consumer>

// export default App;

///////////////////////////////////////////////////////////////////////////////////


import React,{useState} from 'react';

const languages={en:"en",fr:"fr"}
const initial={color:"blue",lang:"eng"};

const {Provider : AppProvider,Consumer:AppConsumer} = React.createContext(initial)

const App = ()=>{
  const [theame,setTheame] = useState(initial);
  const setLanguage = (lang)=>{setTheame({...theame,lang:lang})}

  return(
    <AppProvider value ={theame}>
      <button onClick={()=>setLanguage(languages.en)}>English</button>
      <button onClick ={()=>setLanguage(languages.fr)}>French</button>
      <Menu ></Menu>
    </AppProvider>
  )
}

const Menu =()=><MenuItem></MenuItem>;
const MenuItem = () =>
<AppConsumer>
  {
    value=>
    <div>
      <p>Color:{value.color}</p>
      <p>language:{value.lang}</p>
    </div>
  }
</AppConsumer>

export default App;





