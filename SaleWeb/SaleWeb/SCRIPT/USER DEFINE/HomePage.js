function alertCustom(title,mess) {
    BootstrapDialog.show({
        title: title,
        message: mess
    });
}


function alertConfirmCustom(title, mess,yes,no) {
    BootstrapDialog.show({
        title: title,
        message: mess,
        buttons: [{
            label: yes,
            cssClass: 'demo',
            action: function (Itself) {
                alertCustom('bam', 'yes');
            }
        }, {
            label: no,
            action: function (Itself) {
                alertCustom('bam', 'no');
            }
        }]
    });
}

function demo() {
    BootstrapDialog.show({
        title: title,
        message: mess,
        buttons: [{
            label: yes,
            cssClass: 'demo',
            action: function (Itself) {
                alertCustom('bam', 'yes');
            }
        }, {
            label: no,
            action: function (Itself) {
                alertCustom('bam', 'no');
            }
        }]
    });
}