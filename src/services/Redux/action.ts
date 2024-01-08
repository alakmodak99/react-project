import {
  INC_COUNT,
  DEC_COUNT,
  Set_Count,
  IMAGE_DATA

} from "./action-types";

export const IncCount = (payload: any) => ({
  type: INC_COUNT,
  payload,
});
export const DecCount = (payload: any) => ({
  type: DEC_COUNT,
  payload,
});
export const SetCount = (payload: any) => ({
  type: Set_Count,
  payload,
});
export const AddImageData = (payload: any) => ({
  type: IMAGE_DATA,
  payload,
});
