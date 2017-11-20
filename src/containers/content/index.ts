import { connect, Dispatch } from 'react-redux';

import { Content } from './content';
import { itemsActions } from '../../actions/items';
import { CourseStore } from '../../store/root.store';
// tslint:disable-next-line
const mapStateToProps = (state: CourseStore) => ({
    items: state.items,
    searchTerm: state.searchTerm,
});
// tslint:disable-next-line
const mapDispatchToProps = (dispatch: Dispatch<Function>) => ({
    getItems: () => dispatch(itemsActions.getItems())
});

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(Content);