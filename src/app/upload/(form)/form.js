import { useFormState } from "react-dom";
import { uploadFile } from "@/app/upload/(form)/actions";
import { SubmitButton } from "@/app/upload/(form)/submit-button";

const initialState = { message: null };

export function UploadForm() {
  const [state, formAction] = useFormState(uploadFile, initialState);

  return (
    <div className="form-wrapper">
      <form action={formAction}>
        <input type="file" id="file" name="file" accept="images/*" />
        <SubmitButton/>
      </form>
      {state?.status && (
        <div className={`state-message ${state?.status}`}>
          {state?.message}
        </div>
      )}
    </div>
  )
}