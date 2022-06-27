class ErrorTesting {

    messages = {
        successMessage: 'Good job, you have fixed the error',
        testMessage: 'This message should show up without error!!',
    }

    printMessage(message) {
        console.log(message);
    }


    sendTestMessage() {
        this.printMessage(this.messages.testMessage);
    }


    sendTimedMessage(delayInSeconds) {
        setTimeout(function() {
            this.printMessage(this.messages.successMessage);
        }, (delayInSeconds * 1000));
    }


}