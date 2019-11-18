# Truffle npm dependency test

## Launch ganache

    % ganache-cli

## Deploy `truffle-test-a`

    % cd truffle-test-a
    % npm install
    % node_modules/.bin/truffle deploy
    % cd ..

## Deploy `truffle-test-b`

    % cd truffle-test-b
    % npm install
    % node_modules/.bin/truffle deploy

The deployment fails because the deployment of `truffle-test-b` is actually recompiling the solidity code from project `truffle-test-a` instead of using the build file produced, which might also contain deployment information.

If this is the intended behaviour how are we supposed to package already deployed solidity libraries?

Project `truffle-test-b` if linked to `truffle-test-a` thhrough a npm file dependency, but the behaviour is the same if that was a public npm module pulled from `npmjs.com`.
