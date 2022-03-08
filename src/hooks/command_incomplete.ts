/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {Hook, toConfiguredId} from '@oclif/core'

const hook: Hook.CommandIncomplete = async function ({config, matches, argv}) {
  console.log(argv)
  console.log(matches.map(p => toConfiguredId(p.id, config)).join('\n'))
}

export default hook
