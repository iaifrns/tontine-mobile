import ResponseStatus from "@/enum/ResponseStatus";

interface ResponseType {
  status: ResponseStatus;
  message?: string;
}

export { ResponseType };
