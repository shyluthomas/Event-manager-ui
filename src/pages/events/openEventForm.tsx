import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";
import { Controller, DefaultValues, useForm } from "react-hook-form";
import { createEvent, updateEvent } from "@/store/reducers/userReducer";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OpenEventFormProps {
  eventForm: boolean;
  setEventForm: (a: boolean) => void;
  formData: any;
}
function OpenEventForm({
  eventForm,
  setEventForm,
  formData,
}: OpenEventFormProps) {
  const id = formData?.id;
  const initialData: DefaultValues<any> = {
    description: formData.description ? formData.description : "",
    eventCardImage: formData.eventCardImage ? formData.eventCardImage : "",
    eventCategoryId: formData.eventCategoryId ? formData.eventCategoryId : "",
    eventItenary: formData.eventItenary
      ? formData.eventItenary
      : [
          {
            schedule: "",
            description: "",
          },
        ],
    ownerId: 6,

    ticketTotalCount: formData.ticketTotalCount
      ? formData.ticketTotalCount
      : "",
    title: formData.title ? formData.title : "",

    file: formData.file ? formData.file : "",
  };

  const file2Base64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || "");
      reader.onerror = (error) => reject(error);
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  const dispatch = useAppDispatch();

  const submitEvent = async (data: any) => {
    const image = await file2Base64(data.fileupload);
    if (formData.title === "") {
      dispatch(createEvent({ ...data, image }));
    } else {
      dispatch(updateEvent({ ...data, id }));
    }

    setEventForm(false);
    reset();
  };
  const data2 = useAppSelector((state) => state.userReducer.getProfile);
  const ownerId = data2.profile.data.user.id;

  return (
    <AlertDialog open={eventForm}>
      <AlertDialogContent>
        <form onSubmit={handleSubmit(submitEvent)}>
          <AlertDialogHeader>
            <AlertDialogTitle>Create Events</AlertDialogTitle>
          </AlertDialogHeader>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Title"
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
            {...register("eventItenary.0?.schedule", { required: true })}
          />
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="Description"
            {...register("eventItenary.0?.description", { required: true })}
          />
          <Label htmlFor="file">File</Label>
          <Controller
            name={"fileupload"}
            control={control}
            render={({ field: { value, onChange, ...field } }) => {
              return (
                <Input
                  {...field}
                  id="file"
                  type="file"
                  placeholder="File"
                  value={value?.fileName}
                  onChange={(event) => {
                    onChange(event.target.files?.[0]);
                  }}
                />
              );
            }}
          />

          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setEventForm(false);
              }}
            >
              Cancel
            </AlertDialogCancel>

            {<Button type="submit">Create</Button>}
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default OpenEventForm;
