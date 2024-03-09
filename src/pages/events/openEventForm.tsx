import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import { Button } from "@/components/ui/button";
import { EventCreation } from "@/types/event";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createEvent } from "@/store/reducers/userReducer";
import { useForm } from "react-hook-form";
import { userService } from "@/services";

interface OpenEventFormProps {
  eventForm: boolean;
  setEventForm: (a: boolean) => void;
}
function OpenEventForm({ eventForm, setEventForm }: OpenEventFormProps) {
  console.log("eventForm", eventForm);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();

  const submitEvent = (data: any) => {
    console.log("dddsubmitFORM", data);
    dispatch(createEvent(data));
    setEventForm(false);
    reset();
  };
  const data2 = useAppSelector((state) => state.userReducer.getProfile);

  const ownerId = data2.profile.data.user.id;
  return (
    <AlertDialog open={eventForm}>
      {/* <AlertDialogTrigger></AlertDialogTrigger> */}
      <AlertDialogContent>
        <form onSubmit={handleSubmit(submitEvent)}>
          <AlertDialogHeader>
            <AlertDialogTitle>Create Events</AlertDialogTitle>
            {/* <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription> */}
          </AlertDialogHeader>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Title"
            // value={}
            {...register("title", { required: true })}
          />
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="Description"
            {...register("description", {
              required: true,
            })}
          />
          <Label htmlFor="eventCategoryId">Event Category Id</Label>
          <Input
            id="eventCategoryId"
            placeholder="Event Category Id"
            type="number"
            {...register("eventCategoryId", {
              valueAsNumber: true,
              required: true,
            })}
          />
          <Label htmlFor="eventCardImage">Event Card Image</Label>
          <Input
            id="eventCardImage"
            placeholder="Event Card Image"
            {...register("eventCardImage", { required: true })}
          />
          {/* <Label htmlFor="ownerId">Owner Id</Label> */}
          <Input
            id="ownerId"
            placeholder="Owner Id"
            type="hidden"
            value={ownerId}
            // hidden
            {...register("ownerId", { valueAsNumber: true })}
          />
          <Label htmlFor="ticketTotalCount">Ticket Total Count</Label>
          <Input
            id="ticketTotalCount"
            placeholder="Ticket Total Count"
            type="number"
            {...register("ticketTotalCount", {
              valueAsNumber: true,
              required: true,
            })}
          />
          <Label htmlFor="schedule">Schedule</Label>
          <Input
            id="schedule"
            placeholder="Schedule"
            {...register("eventItenary[0].schedule", { required: true })}
          />
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="Description"
            {...register("eventItenary[0].description", { required: true })}
          />
          <Label htmlFor="file">File</Label>
          <Input
            id="file"
            placeholder="File"
            {...register("file", { required: true })}
          />
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setEventForm(false);
              }}
            >
              Cancel
            </AlertDialogCancel>
            {/* <AlertDialogAction
              type="submit"
              onClick={() => {
                ;
              }}
            > */}
            {/* Create
            </AlertDialogAction> */}
            <Button type="submit">Create</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default OpenEventForm;
