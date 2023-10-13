import { group, sleep } from 'k6'
import http from 'k6/http'

import thresholds from './config/thresholds.js'
import smoke_test from './config/smoke.js'
import average_load_test from './config/average.js'
import breakpoint_test from './config/breakpoint.js'
import soak_test from './config/soak.js'
import spike_test from './config/spike.js'
import stress_test from './config/stress.js'

import withekaCell from './groups/EkaCeluller.js'

const scenarioList = {
	smoke: smoke_test,
	average: average_load_test,
	breakpoint: breakpoint_test,
	soak: soak_test,
	spike: spike_test,
	stress: stress_test,
}

export const options = {
	thresholds,
	scenarios: {
		current_scenario: scenarioList[__ENV.SCENARIO] || smoke_test
	}
}

export default function () {
    withekaCell()

	sleep(1)
}