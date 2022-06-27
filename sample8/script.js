$(document).ready(function() {

    $('#register').click(function() {

        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();

        if (name == "" || email == "" || password == "") {
            alert('Please fill all the fields');
        }

        var bodyContent = {
            name: name,
            email: email,
            password: password
        };
        var baseurl = 'https://dev.agilecyber.com/training';
        var url = baseurl + '/user/register';

        $('#error').html('');
        $('#success').html('');
        try {
            fetch(url, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyContent)
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(result) {
                    if (result.message == 'User created') {
                        let msg = '<span>User created</span>';
                        $('#success').html(msg);
                    } else {
                        console.log(result);
                        let error = '<span>unable to create user. check console for details</span>';
                        $('#error').html(error);
                    }
                })
                .catch(function(err) {
                    console.log(err);
                    let error = '<span>Some error has occurred. check console for details</span>';
                    $('#error').html(error);
                });
        } catch (e) {
            console.log(e);
            let error = '<span>Some error has occurred. check console for details</span>';
            $('#error').html(error);
        }
        return false;
    });

});