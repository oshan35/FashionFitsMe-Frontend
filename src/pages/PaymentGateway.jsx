
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const PaymentGateway= () => {
  

  return (
    <div className="bg-white">
 
        <StripeCheckout
         token={this.onToken}
         stripeKey="my_PUBLISHABLE_stripekey"
        />

   
    </div>

  );
};

export default PaymentGateway;


