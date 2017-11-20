import * as React from 'react';

import './content.css';
import { Item } from '../../reducers/items';
export type Props = {
    items: Item[],
    searchTerm: string,
    getItems: Function
};

// tslint:disable-next-line
export class Content extends React.Component<any> {

    public componentDidMount(): void {
        this.props.getItems();
    }
    public render(): JSX.Element {
        const { items, searchTerm } = this.props;
        return (
            <div className='container-fluid'>

                {Array.isArray(items) && items
                    .filter((item: Item) =>
                        item.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
                    .map((item: Item, index: number) => {
                        return (
                            <div className='card' key={index}>
                                {item.photo && <img className='card-img-top' src={item.photo} />}
                                <div className='card-body'>
                                    <h4 className='card-title'>{item.firstName}</h4>
                                    <p className='card-text'>{item.country}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}