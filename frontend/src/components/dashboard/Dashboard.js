import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import{ connect } from 'react-redux';
import { getCurrentProfile } from '../../redux/actions/profile';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading} }) => {
    
    useEffect(() => {
        getCurrentProfile()
    },[]);

    return loading && profile === null ?  <Fragment>Loading</Fragment> : 
        <Fragment>
            <h1>Dashboard</h1>
            <h3>Welcome {user && user.first_name}!</h3>
            {profile !== null ? <Fragment></Fragment> : <Fragment>
                <div class="card text-white bg-warning mb-3" >
                    <div class="card-header">We're Sorry</div>
                    <div class="card-body">
                        <h4 class="card-title">It seems you aren't fully approved yet</h4>
                        <p class="card-text">Please check back after some time to see if you have been approved! We will be sure to keep you posted on any events blah blah etc. etc.</p>
                    </div>
                </div>
            </Fragment>}
        </Fragment>

    
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
