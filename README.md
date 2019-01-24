# slack-hide-typing
Chrome extension to prevent Slack from sending a typing status to channels and private messages.

## Installation

The simpliest way to install the extension is to get it from the [Chrome web store](https://chrome.google.com/webstore/detail/slack-hide-typing/oeedcdnohdcpcadbjakljhnmdlhcgnch). Alternatively, you can clone this repository and load the unpacked extension.

## Security overview

Since browser extensions naturally can be large security attack surfaces, this outlines the security potential threats and explains why this extension is safe to run. Slack Hide Typing does not monitor network requests. It does, however, request the permission to run scripts on the Slack domain in order to override Slack's typing handler. It would be _technically_ possible to use this to read and capture credentials and messages. However, the implementation is very simple, so is easily reviewable ([see this file](https://github.com/andrewconner/slack-hide-typing/blob/master/src/inject/inject.js)). We have intentionally kept the logic as simple as possible to be easily reviewable by others.

## Contributions

Bug reports and contributions are appreciated. Please use [Issues](https://github.com/andrewconner/slack-hide-typing/issues) for any open issues you have.

