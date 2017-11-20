import * as React from 'react';

import './header.css';
export type Props = { onSearch: Function };

// tslint:disable-next-line
export class Header extends React.Component<any> {
    public onChange = ({ target: { value } }: { target: HTMLInputElement }) => {
        this.props.onSearch(value);
    }
    public render(): JSX.Element {
        return (
            <div className='row header'>
                Search: <input type='text' onChange={this.onChange} />
            </div>
        );
    }
}