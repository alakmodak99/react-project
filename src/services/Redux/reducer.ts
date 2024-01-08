import { INC_COUNT, DEC_COUNT, Set_Count, IMAGE_DATA } from "./action-types";

const init: any = {
  count: null,
  image_data: {
    data: [],
  },
};
export const counterReducer = (
  store: any = init,
  { type, payload }: { type: any; payload: any }
) => {
  switch (type) {
    case Set_Count:
      return {
        ...store,
        count: payload != null ? payload : null,
      };
    case INC_COUNT:
      return {
        ...store,
        count: payload != null ? (+store.count || 0) + payload : null,
      };
    case DEC_COUNT:
      return {
        ...store,
        count: payload != null ? (+store?.count || 0) - payload : null,
      };
    case IMAGE_DATA:
      return { ...store, image_data: { ...store.image_data, data: payload } };
    default:
      return { ...store };
  }
};
