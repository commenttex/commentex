import { ArrowUpIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "./ui/input-group";

export const Comment = () => {
  return (
    <>
      <InputGroup className="bg-white rounded-lg shadow-sm border w-[500px]">
        <InputGroupTextarea placeholder="Comment" className="bg-transparent" />
        <InputGroupAddon align="block-end" className="bg-white p-2">
          <InputGroupButton
            variant="default"
            className="rounded-full ml-auto"
            size="icon-xs"
            disabled
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </>
  );
};
