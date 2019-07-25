import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
    
    alerts !== null && alerts.length > 0  && alerts.map(alert => (
        <div key={alert.id} className={`alert alert-dismissible alert-${alert.alertType}`}>
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>Oh snap! {alert.msg}!</strong> <a href="!" className="alert-link">Change a few things up</a> and try submitting again.
        </div>
    ));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);
