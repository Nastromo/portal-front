import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox';
import { acceptTerms } from '../store/actions/Registration';



export class Terms extends Component {
    render() {
        return (
            <div className="center">
                <div className="cen-receipt cen-receipt-sma flex column ju-center al-center">
                    <h2>Privacy Authorization</h2>
                    <p className="smal-text gap">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p className="smal-text gap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non laudantium nulla qui sint placeat illum aliquid sapiente suscipit totam delectus, rerum incidunt culpa quidem saepe libero molestiae alias ratione laborum.</p>


                    <h3 className="gap">TERMS OF SERVICE</h3>
                    <div>
                        <h4>Patient Authorization To Send Protected Health Information</h4>
                        <div className="smal-text-sup gap scroll">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero!
                        </div>
                        <h4>Notice To The Patient</h4>
                        <div className="smal-text-sup gap scroll">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi exercitationem ea voluptatibus molestias hic debitis cum temporibus, quibusdam nihil illo? Nam soluta amet molestiae aperiam debitis, ab minus libero!
                        </div>
                    </div>
                    <Checkbox status={this.props.terms} title="I have read, understand, and agree to the terms of service above" id="terms" />

                    <div onClick={this.handleAgree} className="positive">I AGREE</div>
                    <div onClick={this.handleCancel} className="negative">CANCEL</div>
                </div>
            </div>
        )
    }

    handleAgree = () => {
        if (this.props.terms) {
            this.props.acceptTerms();
        }
    }

    handleCancel = () => {
        this.props.history.push('/');
    }
}



const mapStateToProps = (state) => ({
    terms: state.checkbox.terms,
})

const mapDispatchToProps = dispatch => ({
    acceptTerms: () => dispatch(acceptTerms())
})

export default connect(mapStateToProps, mapDispatchToProps)(Terms)
