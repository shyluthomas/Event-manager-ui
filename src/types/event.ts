export type EventCreationPayload = {
  title: string;
  description: string;
  eventCategoryId: number;
  eventCardImage: string;
  ownerId: number;
  ticketTotalCount: number;
  eventItenary: Array<{ schedule: string; description: string }>;
  file: string;
};

export type EventCreation = {
  payload: EventCreationPayload;
  type: string;
};
