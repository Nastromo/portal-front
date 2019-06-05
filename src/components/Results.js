import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getResults } from '../store/actions/Results';
import moment from 'moment';



export class Results extends Component {
    componentDidMount() {
        this.props.getResults();
    }

    initColumns = () => {
        return [
            {
                Header: 'Order ID',
                accessor: 'id',
                style: {
                    textAlign: 'left',
                }
            },
            {
                Header: 'Order Date',
                accessor: 'date',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Accession',
                accessor: 'accession',
            },
            {
                Header: 'Report',
                accessor: 'report',
            }
        ];
    }

    renderList = (list, text) => {
        return (
            <div className="cent">
                <div className="result-table">
                    <ReactTable
                        data={list}
                        columns={this.initColumns()}
                        resizable={false}
                        filterable={false}
                        defaultPageSize={15}
                        noDataText={text}
                    />
                </div>
            </div>

        )
    }

    render() {
        if (this.props.list.length > 0) this.props.list.forEach(item => {
            item.date = moment(item.date).format("MM/DD/YYYY h:mm a")
        })
        if (this.props.isLoading) return this.renderList([], `Loading results...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any results...`);
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.resultLoading,
    isErrored: state.resultError,
    list: state.resultsList,
})

const mapDispatchToProps = dispatch => ({
    getResults: () => dispatch(getResults())
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
