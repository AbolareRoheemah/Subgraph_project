import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AttendeeRegistered,
  CouponCodeSet,
  EventCancelled,
  EventCreated,
  EventUpdated,
  FundsWithdrawn,
  OwnerInfoUpdated
} from "../generated/EventMgmt/EventMgmt"

export function createAttendeeRegisteredEvent(
  eventId: BigInt,
  attendeeName: string,
  attendeeEmail: string,
  attendeePhone: string
): AttendeeRegistered {
  let attendeeRegisteredEvent = changetype<AttendeeRegistered>(newMockEvent())

  attendeeRegisteredEvent.parameters = new Array()

  attendeeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  attendeeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "attendeeName",
      ethereum.Value.fromString(attendeeName)
    )
  )
  attendeeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "attendeeEmail",
      ethereum.Value.fromString(attendeeEmail)
    )
  )
  attendeeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "attendeePhone",
      ethereum.Value.fromString(attendeePhone)
    )
  )

  return attendeeRegisteredEvent
}

export function createCouponCodeSetEvent(
  eventId: BigInt,
  couponCode: string,
  discount: BigInt,
  expiryDate: BigInt
): CouponCodeSet {
  let couponCodeSetEvent = changetype<CouponCodeSet>(newMockEvent())

  couponCodeSetEvent.parameters = new Array()

  couponCodeSetEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  couponCodeSetEvent.parameters.push(
    new ethereum.EventParam("couponCode", ethereum.Value.fromString(couponCode))
  )
  couponCodeSetEvent.parameters.push(
    new ethereum.EventParam(
      "discount",
      ethereum.Value.fromUnsignedBigInt(discount)
    )
  )
  couponCodeSetEvent.parameters.push(
    new ethereum.EventParam(
      "expiryDate",
      ethereum.Value.fromUnsignedBigInt(expiryDate)
    )
  )

  return couponCodeSetEvent
}

export function createEventCancelledEvent(
  eventId: BigInt,
  reason: string
): EventCancelled {
  let eventCancelledEvent = changetype<EventCancelled>(newMockEvent())

  eventCancelledEvent.parameters = new Array()

  eventCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  eventCancelledEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return eventCancelledEvent
}

export function createEventCreatedEvent(
  eventId: BigInt,
  eventName: string,
  ownerAddress: Address
): EventCreated {
  let eventCreatedEvent = changetype<EventCreated>(newMockEvent())

  eventCreatedEvent.parameters = new Array()

  eventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  eventCreatedEvent.parameters.push(
    new ethereum.EventParam("eventName", ethereum.Value.fromString(eventName))
  )
  eventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerAddress",
      ethereum.Value.fromAddress(ownerAddress)
    )
  )

  return eventCreatedEvent
}

export function createEventUpdatedEvent(
  eventId: BigInt,
  eventName: string,
  eventPrice: BigInt,
  eventStartDateAndTime: BigInt,
  eventLocation: string
): EventUpdated {
  let eventUpdatedEvent = changetype<EventUpdated>(newMockEvent())

  eventUpdatedEvent.parameters = new Array()

  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam("eventName", ethereum.Value.fromString(eventName))
  )
  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventPrice",
      ethereum.Value.fromUnsignedBigInt(eventPrice)
    )
  )
  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventStartDateAndTime",
      ethereum.Value.fromUnsignedBigInt(eventStartDateAndTime)
    )
  )
  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventLocation",
      ethereum.Value.fromString(eventLocation)
    )
  )

  return eventUpdatedEvent
}

export function createFundsWithdrawnEvent(
  eventId: BigInt,
  amount: BigInt
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundsWithdrawnEvent
}

export function createOwnerInfoUpdatedEvent(
  ownerAddress: Address,
  ownerName: string,
  ownerPic: string,
  ownerEmail: string
): OwnerInfoUpdated {
  let ownerInfoUpdatedEvent = changetype<OwnerInfoUpdated>(newMockEvent())

  ownerInfoUpdatedEvent.parameters = new Array()

  ownerInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerAddress",
      ethereum.Value.fromAddress(ownerAddress)
    )
  )
  ownerInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam("ownerName", ethereum.Value.fromString(ownerName))
  )
  ownerInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam("ownerPic", ethereum.Value.fromString(ownerPic))
  )
  ownerInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam("ownerEmail", ethereum.Value.fromString(ownerEmail))
  )

  return ownerInfoUpdatedEvent
}
