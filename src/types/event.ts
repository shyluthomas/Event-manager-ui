export interface EventCreationPayload {
  title: string;
  description: string;
  eventCategoryId: number;
  eventCardImage: string;
  ownerId: number;
  ticketTotalCount: number;
  eventItenary: Array<{ schedule: string; description: string }>;
  file: string;
}

interface EventCreationPayloadFile extends EventCreationPayload {
  fileupload: {};
}

export type EventCreation = {
  payload: EventCreationPayload;
  type: string;
};

export type ProfileId = {
  payload: number;
  type: string;
};

export type UpdateEventData = {
  type: string;
  payload: EventCreationPayloadFile;
};
