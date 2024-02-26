import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "../ui/alert-dialog";
import React, { useState } from "react";

import { ModalProps } from "@/types/user";

type CommonModalProps = { message: ModalProps };

export default function CommonModal({ message }: CommonModalProps) {
  const [dialog, setDialog] = useState(message.status);
  const status = message.status;
  console.log("modalll", status);
  return (
    <div>
      <AlertDialog open={dialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>{message.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setDialog(false);
              }}
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
