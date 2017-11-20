import { connect, Dispatch } from 'react-redux';

import { Header } from './header';
import { searchActions } from '../../actions/searchTerm';

// tslint:disable-next-line
const mapDispatchToProps = (dispatch: Dispatch<Function>) => ({
    onSearch: (value: string) => dispatch(searchActions.onUpdateSearch(value))
});

// tslint:disable-next-line
export default connect(null, mapDispatchToProps)(Header);