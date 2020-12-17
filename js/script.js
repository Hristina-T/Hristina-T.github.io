
$(document).ready(function () {

    $("#forma").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            age: {
                required: true,
                number: true,
                min: 18
            },
            email: {
                required: true,
                email: true
            },
            agree: {
                required: true
            }
        },
        messages: {
            name: {
                minlength: "Ime mora da ima barem 3 karaktera",
                required: "Molim vas unesite ime"
            },
            age: {
                required: "Molim vas unesite broj godina",
                number: "Molim vas unesite godine kao broj",
                min: "Neophodno je da imate barem 18 godina"
            },
            email: {
                email: "Email treba biti u formatu: abc@domain.tld",
                required: "Molim vas unesite Email"
            },
            agree: {
                required: "Molim vas prihvatite uslove korišćenja"
            }
        }
    });
});