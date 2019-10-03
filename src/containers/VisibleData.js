import { connect } from 'react-redux'
import { getFromServer } from '../actions'
import DataFromServer from '../components/dataFromServer/ItemTable'

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
})

const mapDispatchToProps = (dispatch) => ({
    onClick: (data) => dispatch(getFromServer(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataFromServer)