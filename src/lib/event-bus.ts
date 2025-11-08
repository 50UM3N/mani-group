import { EventEmitter } from "events";

const EventBus = new EventEmitter({ captureRejections: true });

export default EventBus;

export const EVENTS = {
  CLOSE_MENU: "event:close.menu",
};
