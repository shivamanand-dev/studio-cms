import { BehaviorSubject } from "rxjs";

import { fetchWrapper } from "./fetchWrapper";

const pageSubject = new BehaviorSubject(
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("page"))
);

export const pageService = {
  page: pageSubject.asObservable(),
  get pageValue() {
    return pageSubject.value;
  },
  getPageData,
};

async function getPageData() {
  return await fetchWrapper.get("staticData/").then((res) => {
    // pageSubject.next(res);

    localStorage.setItem("page", JSON.stringify(res));

    return res;
  });
}
