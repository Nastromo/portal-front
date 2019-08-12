import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox';
import { changeB12, changeVa, changeIdef, changeVd, changeNd, changeGwm } from '../store/actions/TestQuantity';



export class TestsChoose extends Component {


    render() {
        return (
            <div className="width100">
                <div className="flex width100">
                    <div className="bold basis70">TEST</div>
                    <div className="bold basis15">QTY</div>
                    <div className="bold basis15">COST</div>
                </div>

                <div className="width100 mar-t-20">
                    <div className="flex width100 align-center mar-t-6">
                        <div className="width100 basis70"><Checkbox status={this.props.gwm} title="Genetic Weight Management" id="gwm" /></div>

                        <input type="number" value={this.props.gwm ? this.props.gwmValue : ""} onChange={this.props.gwm ? this.props.changeGwm : undefined} className="basis15 input-s mar-r-10" />

                        <div className="basis15">{`$${295 * this.props.gwmValue}`}</div>
                    </div>

                    <div className="flex width100 align-center mar-t-6">
                        <div className="width100 basis70"><Checkbox status={this.props.nd} title="Nutritional Deficiencies" id="nd" /></div>
                        <input type="number" value={this.props.nd ? this.props.ndValue : "" } onChange={this.props.nd ?    this.props.changeNd : undefined} className="basis15 input-s mar-r-10" />
                        <div className="basis15">{`$${345 * Number(this.props.ndValue)}`}</div>
                    </div>

                    <div className="flex width100 align-center mar-t-6">
                        <div className="width100 basis70"><Checkbox status={this.props.vd} title="Vitamin D deficiency" id="vd" /></div>
                        <input type="number" value={this.props.vd ? this.props.vdValue : ""} onChange={this.props.vd ?   this.props.changeVd : undefined} className="basis15 input-s mar-r-10" />
                        <div className="basis15">{`$${255 * Number(this.props.vdValue)}`}</div>
                    </div>

                    <div className="flex width100 align-center mar-t-6">
                        <div className="width100 basis70"><Checkbox status={this.props.idef} title="Iron deficiency" id="idef" /></div>
                        <input type="number" value={this.props.idef ? this.props.idefValue : ""} onChange={this.props.idef ?   this.props.changeIdef : undefined} className="basis15 input-s mar-r-10" />
                        <div className="basis15">{`$${195 * Number(this.props.idefValue)}`}</div>
                    </div>

                    <div className="flex width100 align-center mar-t-6">
                        <div className="width100 basis70"><Checkbox status={this.props.va} title="Vitamin A deficiency" id="va" /></div>
                        <input type="number" value={this.props.va ? this.props.vaValue : ""} onChange={this.props.va ?  this.props.changeVa : undefined} className="basis15 input-s mar-r-10" />
                        <div className="basis15">{`$${150 * Number(this.props.vaValue)}`}</div>
                    </div>

                    <div className="flex width100 align-center mar-t-6">
                        <div className="width100 basis70"><Checkbox status={this.props.b12} title="Vitamin B12 deficiency" id="b12" /></div>
                        <input type="number" value={this.props.b12 ? this.props.b12Value : ""} onChange={this.props.b12 ? this.props.changeB12 : undefined} className="basis15 input-s mar-r-10" />
                        <div className="basis15">{`$${150 * Number(this.props.b12Value)}`}</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gwm: state.checkbox.gwm,
    nd: state.checkbox.nd,
    vd: state.checkbox.vd,
    idef: state.checkbox.idef,
    va: state.checkbox.va,
    b12: state.checkbox.b12,
    gwmValue: state.gwmValue,
    ndValue: state.ndValue,
    vdValue: state.vdValue,
    idefValue: state.idefValue,
    vaValue: state.vaValue,
    b12Value: state.b12Value,

})

const mapDispatchToProps = dispatch => ({
    changeGwm: (number) => dispatch(changeGwm(number)),
    changeNd: (number) => dispatch(changeNd(number)),
    changeVd: (number) => dispatch(changeVd(number)),
    changeIdef: (number) => dispatch(changeIdef(number)),
    changeVa: (number) => dispatch(changeVa(number)),
    changeB12: (number) => dispatch(changeB12(number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TestsChoose)
