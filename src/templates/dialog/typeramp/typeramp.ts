﻿/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */

(($) => {
    $(document).ready(() => {
        Office.initialize = () => {
            $('#open').click(() => {
                let dialog = new OfficeHelpers.Dialog(`${location.origin}/templates/dialog/typeramp/dialog.html`, 1024, 768);
                return dialog.result;
            });
        };
    });
})(jQuery);
