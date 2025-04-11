module.exports = async function (context) {
    const currentMethod = context.request.getMethod();
    const config = context.request.getEnvironmentVariable('sendMeMaybe') || {};
    const envName = config.env || 'unknown';
    const restrictedRequests = config.restrictedRequests || [];

    if (!restrictedRequests.includes(currentMethod)) {
        return;
    }

    const result = await context.app.prompt(
        `Sending ${currentMethod} request to the "${envName}" environment. Confirm?`,
        {
            label: 'Type "yes" to send',
            cancelable: true,
            submitName: 'Send',
        }
    );

    if (!result || result.toLowerCase() !== 'yes') {
        return null;
    }

}
