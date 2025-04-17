import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AttendeeRegistered } from "../generated/schema"
import { AttendeeRegistered as AttendeeRegisteredEvent } from "../generated/EventMgmt/EventMgmt"
import { handleAttendeeRegistered } from "../src/event-mgmt"
import { createAttendeeRegisteredEvent } from "./event-mgmt-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let eventId = BigInt.fromI32(234)
    let attendeeName = "Example string value"
    let attendeeEmail = "Example string value"
    let attendeePhone = "Example string value"
    let newAttendeeRegisteredEvent = createAttendeeRegisteredEvent(
      eventId,
      attendeeName,
      attendeeEmail,
      attendeePhone
    )
    handleAttendeeRegistered(newAttendeeRegisteredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AttendeeRegistered created and stored", () => {
    assert.entityCount("AttendeeRegistered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AttendeeRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "eventId",
      "234"
    )
    assert.fieldEquals(
      "AttendeeRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "attendeeName",
      "Example string value"
    )
    assert.fieldEquals(
      "AttendeeRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "attendeeEmail",
      "Example string value"
    )
    assert.fieldEquals(
      "AttendeeRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "attendeePhone",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
