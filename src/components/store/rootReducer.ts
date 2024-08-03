import { combineReducers } from "@reduxjs/toolkit";
import testStoreSlice from "./testStore/testStoreSlice";
// import tabsStoreSlice from "./tabsState/tabsSlice";
// import collectionOrderSlice from "./collectionOrder/CollectionOrderData";

const allReducers = combineReducers({
  testStoreSlice,
//   tabsStoreSlice,
//   collectionOrderSlice,
});

export default allReducers;