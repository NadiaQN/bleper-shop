const express = require('express');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', // sandbox or live
  'client_id': 'AUnoh-maX76S09iOE5Ai6wBDv8LGwVzdlNo4J97UrQhdEfisuIa0FBOx5zh3BqCwHhrj50HBP9eqhc2g',
  'client_secret': 'EKA-QG_hJWG1phsg7xbGy2QuIOzZahRvhAZtVzR0NbY1GN4aDIGeBdEpu9wG48MypMK1ExRf72aPBDNp'
});

const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('index'));
app.post('/pay', (req, res) => {
  const createPaymentJson = {
    'intent': 'sale',
    'payer': {
      'payment_method': 'paypal'
    },
    'redirect_urls': {
      'return_url': 'http://localhost:3000/success',
      'cancel_url': 'http://localhost:3000/cancel'
    },
    'transactions': [{
      'item_list': {
        'items': [{
          'name': 'Rex Sox Hat',
          'sku': '001',
          'price': '25.00',
          'currency': 'USD',
          'quantity': 1
        }]
      },
      'amount': {
        'currency': 'USD',
        'total': '25.00'
      },
      'description': 'Hat cute.'
    }]
  };


  paypal.payment.create(createPaymentJson, function(error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
});

app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const executePaymentJson = {
    'payer_id': payerId,
    'transactions': [{
      'amount': {
        'currency': 'USD',
        'total': '25.00'
      }
    }]
  };

  paypal.payment.execute(paymentId, executePaymentJson, function(error, payment) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log(JSON.stringify(payment));
      res.send('Success');
    }
  });
});

app.get('/cancel', (req, res) => res.send('Cancelled'));

app.listen(3000, () => console.log('Server Started'));