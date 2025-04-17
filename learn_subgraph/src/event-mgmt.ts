import {
  AttendeeRegistered as AttendeeRegisteredEvent,
  CouponCodeSet as CouponCodeSetEvent,
  EventCancelled as EventCancelledEvent,
  EventCreated as EventCreatedEvent,
  EventUpdated as EventUpdatedEvent,
  FundsWithdrawn as FundsWithdrawnEvent,
  OwnerInfoUpdated as OwnerInfoUpdatedEvent
} from "../generated/EventMgmt/EventMgmt"
import {
  AttendeeRegistered,
  CouponCodeSet,
  EventCancelled,
  EventCreated,
  EventUpdated,
  FundsWithdrawn,
  OwnerInfoUpdated
} from "../generated/schema"

export function handleAttendeeRegistered(event: AttendeeRegisteredEvent): void {
  let entity = new AttendeeRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.attendeeName = event.params.attendeeName
  entity.attendeeEmail = event.params.attendeeEmail
  entity.attendeePhone = event.params.attendeePhone

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCouponCodeSet(event: CouponCodeSetEvent): void {
  let entity = new CouponCodeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.couponCode = event.params.couponCode
  entity.discount = event.params.discount
  entity.expiryDate = event.params.expiryDate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEventCancelled(event: EventCancelledEvent): void {
  let entity = new EventCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.reason = event.params.reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEventCreated(event: EventCreatedEvent): void {
  let entity = new EventCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.eventName = event.params.eventName
  entity.ownerAddress = event.params.ownerAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEventUpdated(event: EventUpdatedEvent): void {
  let entity = new EventUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.eventName = event.params.eventName
  entity.eventPrice = event.params.eventPrice
  entity.eventStartDateAndTime = event.params.eventStartDateAndTime
  entity.eventLocation = event.params.eventLocation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let entity = new FundsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerInfoUpdated(event: OwnerInfoUpdatedEvent): void {
  let entity = new OwnerInfoUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ownerAddress = event.params.ownerAddress
  entity.ownerName = event.params.ownerName
  entity.ownerPic = event.params.ownerPic
  entity.ownerEmail = event.params.ownerEmail

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
