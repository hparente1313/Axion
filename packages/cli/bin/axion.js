#!/usr/bin/env node

const { Command } = require('commander')

const validateNodeVersion = require('../lib/utils/validateNodeVersion.js')
const banners = require('../lib/utils/banners.js')


const program = new Command()

program.name('Axion CLI')
    .description('CLI for Axion framework')
    .version('0.0.1')

program.command('create <appName>')
    .alias('c')
    .description('Create a new Axion app')
    .action((appName) => {
        console.log(`Creating '${appName}' using Axion!`)
    })

validateNodeVersion.default()
banners.logAxionBanner()

program.command('create')
    .alias('c')
    .description('Create a new Axion app')
    .action(() => {
        console.log('creating a new Axion app')
    })

program.parse()