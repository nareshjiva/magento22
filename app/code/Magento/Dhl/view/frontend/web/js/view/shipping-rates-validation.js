/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/shipping-rates-validator',
        'Magento_Checkout/js/model/shipping-rates-validation-rules',
        '../model/shipping-rates-validator',
        '../model/shipping-rates-validation-rules'
    ],
    function (
        Component,
        defaultShippingRatesValidator,
        defaultShippingRatesValidationRules,
        dhlShippingRatesValidator,
        dhlShippingRatesValidationRules
    ) {
        "use strict";
        defaultShippingRatesValidator.registerValidator('dhl', dhlShippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('dhl', dhlShippingRatesValidationRules);
        return Component;
    }
);
