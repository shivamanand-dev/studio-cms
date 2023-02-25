/* eslint-disable sonarjs/no-duplicate-string */
import { api_key, backendUri } from "@/utils/constants/app_config";

// import { pageService } from "./user.services";

export const fetchWrapper = {
  post,
  get,
  put,
  handleResponse,
  getToken,
};

const getCombinedUrl = (url) => backendUri + url;

async function post(url, body) {
  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    origin: "*",
    body: JSON.stringify(body),
  };
  return await fetch(getCombinedUrl(url), requestOption).then(handleResponse);
}

async function get(url) {
  const requestOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      _id: api_key,
    },
    origin: "*",
  };
  return await fetch(getCombinedUrl(url), requestOption).then(handleResponse);
}

async function getToken() {
  return await fetch("/api/token", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then(fetchWrapper.handleResponse);
}

async function put(url, body) {
  const token = await getToken();
  const requestOption = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authToken: token,
    },
    origin: "*",
    body: JSON.stringify(body),
  };
  return await fetch(getCombinedUrl(url), requestOption).then(handleResponse);
}

function handleResponse(res) {
  return res.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!res.ok) {
      // if ([401].includes(response.status) && userService.userValue) {
      //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      //   userService.logout();
      // }
      return data;
    }

    return data;
  });
}
