import React from 'react';
import { connect } from 'react-redux';

import Layout from '../../Layout';
import SelectionTabs from '../../Components/Services/SelectionTabs';
import Loading from '../../Shared/Loading';
import SelectedService from '../../Components/Services/SelectedService';
import CtaModal from '../../Components/Services/SelectedService/CtaModal';
import PageHeader from '../../Shared/Headers/PageHeader';

const Services = ({loading, displayModal}) => {

    return (
        <Layout>
            {displayModal === true &&
            <CtaModal />}
            <div className="w-full pt-2 flex flex-col items-start px-4 z-0">
                <PageHeader headerText={"Services"} />
                <SelectionTabs  />
                {loading === true ?
                    <Loading />
                :
                    <SelectedService />
                }
            </div>
        </Layout>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.tabSelector.loading,
        displayModal: state.servicesCta.displayModal,
    }
}

export default connect(
    mapStateToProps,
    null
)(Services);