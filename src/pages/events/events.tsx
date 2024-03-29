import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteEvent,
  getEventFetch,
  getPatchData,
} from "@/store/reducers/userReducer";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import OpenEventForm from "./openEventForm";
import { toast } from "@/components/ui/use-toast";

export const initialData = {
  description: "",
  eventCardImage: "",
  eventCategoryId: 0,
  eventItenary: [
    {
      schedule: "",
      description: "",
    },
  ],
  ownerId: 6,
  ticketTotalCount: 0,
  title: "",
  file: "",
};

const Events = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEventFetch(true));
  }, []);

  const [formData, setFormData] = useState(initialData);

  const data = useAppSelector((state) => state.userReducer.eventData);
  const message = useAppSelector((state) => state.userReducer.message);
  useEffect(() => {
    if (message.status == true) {
      toast({
        title: "Success",
        description: message.body,
      });
    }
  }, [message]);
  const eventList = data.event;

  const [eventForm, setEventForm] = useState(false);

  const deleteEvents = (id: number) => {
    dispatch(deleteEvent(id));
  };

  const editEvent = (id: string) => {
    dispatch(getPatchData(id));
  };

  return (
    <div className="bg-white">
      <div className=" text-xl p-6 text-right bg-white">
        <Button
          onClick={() => {
            setFormData(initialData);
            setEventForm(true);
          }}
        >
          Create Event
        </Button>
      </div>
      {eventForm && (
        <OpenEventForm
          eventForm={eventForm}
          setEventForm={setEventForm}
          formData={formData}
        />
      )}
      <Table>
        <TableCaption>A list of your events.</TableCaption>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead>Event Category ID</TableHead>

            <TableHead>Event Iternary Description</TableHead>
            <TableHead>Event Iternary Schedule</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventList?.event.map((e) => {
            return (
              <TableRow key={e.id}>
                <TableCell>{e.id}</TableCell>
                <TableCell>{e.title}</TableCell>
                <TableCell>{e.description}</TableCell>
                <TableCell>{e.createdAt.substring(0, 10)}</TableCell>
                <TableCell>{e.updatedAt.substring(0, 10)}</TableCell>
                <TableCell>{e.eventCategoryId}</TableCell>

                <TableCell>{e.eventItenary[0].description}</TableCell>
                <TableCell>{e.eventItenary[0].schedule}</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button
                      onClick={() => {
                        setFormData(e);
                        editEvent(e.id!);
                        setEventForm(true);
                      }}
                    >
                      EDIT
                    </Button>
                    <Button
                      onClick={() => {
                        deleteEvents(e.id!);
                      }}
                    >
                      DELETE
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow></TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Events;
