import CommonModal from "../Modal/CommonModal";
import { useAppSelector } from "@/hooks/hooks";

export default function ModalHOC() {
  const modalMessage = useAppSelector((state) => state.userReducer.dialog);
  console.log("modalMessage", modalMessage);
  return (
    <div>{modalMessage.status && <CommonModal message={modalMessage} />}</div>
  );
}
