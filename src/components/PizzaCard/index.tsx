import React, {useState} from 'react';
import ContentLoader from "react-content-loader"
import classNames from 'classnames'

import {IPizza} from "models";

import {Image} from 'components'

type IProps = IPizza & {}

export const PizzaCard: React.FC<IProps> = ({
     name,
     imageUrl,
     price,
     types,
     sizes}) => {
    const availableTypes = ['Traditional', 'Thin']

    const [activeSize, setActiveSize] = useState<number | null>(sizes[0])

    const [activeType, setActiveType] = useState<number | null>(types[0])

    const onSelectType = (index: number | null) => setActiveType(index)

    const onSelectSize = (index: number | null) => setActiveSize(index)

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((t) => <li
                        key={t}
                        onClick={() => onSelectType(t)}
                        className={classNames({
                            active: activeType === t,
                        })}
                    >
                        {availableTypes[t]}
                    </li>)}

                </ul>
                <ul>
                    {sizes.map((t) => <li
                        key={t}
                        onClick={() => onSelectSize(t)}
                        className={classNames({
                            active: activeSize === t,
                        })}
                    >
                        {(t / 2.54).toFixed(2)}inch.
                    </li>)}

                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} $</div>
                <div className="button button--outline button--add">
                    <Image type={'plus'}/>
                    <span>Добавить</span>
                    <i>0</i>
                </div>
            </div>
        </div>
    );
};


export const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="135" cy="135" r="125" />
        <rect x="0" y="296" rx="10" ry="10" width="280" height="23" />
        <rect x="0" y="345" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="455" rx="10" ry="10" width="95" height="30" />
        <rect x="125" y="446" rx="24" ry="24" width="152" height="45" />
    </ContentLoader>
)
