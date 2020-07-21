import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props){

    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch();

    const submitHandler= (e) =>{
        e.preventDefault();
        dispatch(savePayment({paymentMethod}));
        props.history.push('placeorder')
    }
    return <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Métodos de pago</h2>
                </li>
                <li>
                    <div>
                    <input type="radio" name="PaymentMethod" id="PaymentMethod" value="paypal" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                    <label htmlFor="PaymentMethod">Paypal</label>
                    </div>
                </li>
                <li>
                    <button type="submit" className="button primary">Continue</button>
                </li>

            </ul>
        </form>
    </div>
    </div>
    
}

export default PaymentScreen;