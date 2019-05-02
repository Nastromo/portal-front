import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';

export class Spinner extends Component {


    render() {
        return (
            <div className="line-spinner">
                <BarLoader
                    widthUnit="%"
                    heightUnit="px"
                    width={100}
                    height={3}
                    color="#1ab394"
                    loading={true}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner)
