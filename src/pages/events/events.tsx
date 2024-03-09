import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { OpenEventForm } from "./OpenEventForm";
import {
  getEventFetch,
  getPatchData,
  getProfile,
  patchResponse,
} from "@/store/reducers/userReducer";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import OpenEventForm from "./openEventForm";

const Events = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEventFetch(true));
  }, []);

  const data = useAppSelector((state) => state.userReducer.eventData);
  console.log("dataEVENT", data);
  const eventList = data.event;
  console.log(data.event.event);
  const [eventForm, setEventForm] = useState(false);

  const deleteEvent = () => {
    console.log("TBDDD");
  };

  const editEvent = (id: string) => {
    dispatch(getPatchData(id));
    console.log(id);
  };

  return (
    <div className="bg-white">
      <div className=" text-xl p-6 text-right bg-white">
        <Button
          onClick={() => {
            setEventForm(true);
          }}
        >
          Create Event
        </Button>
      </div>
      {eventForm && (
        <OpenEventForm eventForm={eventForm} setEventForm={setEventForm} />
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
          {eventList.event.map((e) => {
            return (
              <TableRow>
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
                        editEvent(e.id);
                        setEventForm(true);
                        editEvent(e.id);
                      }}
                    >
                      EDIT
                    </Button>
                    <Button
                      onClick={() => {
                        deleteEvent();
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
