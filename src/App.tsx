import axios from 'axios';
import React, {FC, useEffect} from 'react';
import { Route } from 'react-router-dom';
import {Header} from './components'
import {Cart, Home} from "./pages";
import {setPizzas } from "./redux/actions/pizzas";
import { useDispatch, useSelector} from 'react-redux'
import store from "./redux/store";

export type HomeItemsType = {
    id:number
    imageUrl:string
    name:string
    types:number[]
    sizes:number[]
    price:number
    category:number
    rating:number
}
function App () {
    const dispatch = useDispatch()
    const {items} = useSelector(({pizzas,filter}) => {
        return (
            items:state.pizzas.items,
            sortBy:state.filters.sortBy
        )
    })
    useEffect(()=> {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas))
          })
    })
    return <div className="App">
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' exact render={() => <Home items={items}/>} />
                <Route path='/Cart' exact component={Cart} />
            </div>
        </div>
    </div>
}
export default App

// class App extends React.Component {
//     componentDidMount() {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             this.props.setPizzasAction(data.pizzas)
//          })
//     }
//
//     render() {
//         return <div className="App">
//             <div className="wrapper">
//                 <Header/>
//                 <div className="content">
//                     <Route path='/' exact render={() => <Home items={this.props.items}/>} />
//                     <Route path='/Cart' exact component={Cart} />
//                 </div>
//             </div>
//         </div>
//     }
// }
// const mapStateToProps = (state:any) => {
//     return {
//         items:state.pizzas.items
//     }
// }
// const mapDispatchToProps = {
//     setPizzasAction
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(App)
// function App() {
//     // const [pizzas, setPizzas] = useState([]);
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         })
//
//         // fetch('http://localhost:3000/db.json')
//         //     .then(resp => {
//         //         console.log('fetch',resp)
//         //        return  resp.json()
//         //     })
//         //     .then(json => setPizzas(json.pizzas))
//     },[])
//
//     return (
//         <div className="App">
//             <div className="wrapper">
//                 <Header/>
//                 <div className="content">
//                    <Route path='/' exact render={() => <Home items={pizzas}/>} />
//                    <Route path='/Cart' exact component={Cart} />
//                 </div>
//             </div>
//         </div>
//     );
// }