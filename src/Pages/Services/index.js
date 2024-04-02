import React, {useState} from 'react';
import { connect } from 'react-redux';

import Layout from '../../Layout';
import SelectionTabs from '../../Components/Services/SelectionTabs';
import Loading from '../../Shared/Loading';

const Services = ({loading}) => {

    return (
        <Layout>
            <div className="w-full pt-28 flex flex-col items-start px-2">
                <h2 className="text-white text-left text-4xl">Services</h2>
                <SelectionTabs  />
                {loading === true ?
                    <Loading />
                :
                    "Selected Service"
                }
            </div>
        </Layout>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.tabSelector.loading,
    }
}

export default connect(
    mapStateToProps,
    null
)(Services);