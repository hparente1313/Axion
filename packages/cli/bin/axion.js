#!/usr/bin/env node
import updateNotifier from 'update-notifier'
import { Command } from 'commander'

// Local Imports
import { validateNodeVersion } from '../lib/utils/validateNodeVersion.js'
import { logAxionBanner } from '../lib/utils/banners.js'
import { cliPackage } from '../lib/utils/cliPackage.js'


const notifier = updateNotifier({pkg: cliPackage})

validateNodeVersion()
logAxionBanner()
notifier.notify()


const program = new Command()
const cliPackageVersion = cliPackage['version']

program.name('Axion CLI')
    .description('CLI for Axion framework')
    .version(`${cliPackageVersion}`, '-v, --version', 'Outputs the current CLI version')

program.command('create <appName>')
    .alias('c')
    .description('Create a new Axion app')
    .action((appName) => {
        console.log(`Creating '${appName}' using Axion!`)
    })

program.parse()