document.addEventListener('DOMContentLoaded', function () {
    const onlinePaymentOption = document.getElementById('online-payment');
    const payOnDeliveryOption = document.getElementById('pay-on-delivery');
    const visaDetails = document.getElementById('visa-details');

    onlinePaymentOption.addEventListener('change', function () {
        visaDetails.classList.remove('hidden');
    });

    payOnDeliveryOption.addEventListener('change', function () {
        visaDetails.classList.add('hidden');
    });

    const form = document.getElementById('checkout-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log(data);

        alert('Order placed successfully!');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const instapayRadio = document.getElementById('instapay');
    const instapayDetails = document.getElementById('instapay-details');
    const paymentOptions = document.querySelectorAll('input[name="payment-method"]');

    paymentOptions.forEach(option => {
        option.addEventListener('change', function () {
            if (instapayRadio.checked) {
                instapayDetails.classList.remove('hidden');
            } else {
                instapayDetails.classList.add('hidden');
            }
        });
    });
});
