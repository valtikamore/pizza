
import  React from 'react';
import { FC } from 'react';

type CategoriesItemPropsType = {
    title:string
    id:string
}
type CategoriesPropsType = {
    onClickItem:(name:string) => void
    items:CategoriesItemPropsType[]
};
// const Categories:FC<CategoriesPropsType> = ({onClickItem,items}) => {
//     const pizzaCategoriesMap = items.map(p => <li key={p.id} onClick={()=>onClickItem(p.title)}>{p.title}</li>)
//     return (
//         <div className="categories">
//             <ul>
//                 <li className='active'>All</li>
//                 {pizzaCategoriesMap}
//             </ul>
//         </div>
//     );
// };


class Categories extends React.Component<CategoriesPropsType> {
    state = {
        activeItem : 2
    }
    onSelectItem = (index:number) => {
        this.setState({
            activeItem : index
        })
    }
    render() {
        const {items,onClickItem} = this.props
        const pizzaCategoriesMap = items.map((p,index) =>
            <li key={p.id}
                onClick={()=>this.onSelectItem(index)}
                className={this.state.activeItem === index ? 'active' : ''}
            >
                {p.title}
            </li>
        )
        return (
            <div className="categories">
                <ul>
                    <li className='active'>All</li>
                    {pizzaCategoriesMap}
                </ul>
            </div>
        );
    }
}


export default Categories
