
import  React, { useState } from 'react';
import { FC } from 'react';

type CategoriesItemPropsType = {
    title:string
    id:string
}
type CategoriesPropsType = {
    items:CategoriesItemPropsType[]
};
const Categories:FC<CategoriesPropsType> = ({items}) => {
    const [activeItem, setActiveItem] = useState<number|null>(null);
    const onSelectItem = (index:number|null) => setActiveItem(index)
    const pizzaCategoriesMap = items &&  items.map((p,index) => {
       return <li
           className={activeItem === index ? 'active' : ''}
            key={p.id}
            onClick={()=>onSelectItem(index)}>{p.title}</li>})
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={()=>onSelectItem(null)}>All</li>
                {pizzaCategoriesMap}
            </ul>
        </div>
    );
};


// class Categories extends React.Component<CategoriesPropsType> {
//     state = {
//         activeItem : 2
//     }
//     onSelectItem = (index:number) => {
//         this.setState({
//             activeItem : index
//         })
//     }
//     render() {
//         const {items,onClickItem} = this.props
//         const pizzaCategoriesMap = items.map((p,index) =>
//             <li key={p.id}
//                 onClick={()=>this.onSelectItem(index)}
//                 className={this.state.activeItem === index ? 'active' : ''}
//             >
//                 {p.title}
//             </li>
//         )
//         return (
//             <div className="categories">
//                 <ul>
//                     <li >All</li>
//                     {pizzaCategoriesMap}
//                 </ul>
//             </div>
//         );
//     }
// }


export default Categories
