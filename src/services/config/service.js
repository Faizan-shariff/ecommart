import { api, authenticateApi } from "./AxiosConfig";
import { defineCancelApiObject } from "./AxiosUtils";


export const service = {
    authenticate: async function (payload, cancel = false) {
      const res = await api.request({
        url: `/api/login`,
        method: "POST",
        data: payload,
        signal: cancel
          ? cancelApiObject[this.create.name].handleRequestCancellation().signal
          : undefined,
      });
      return res;
    },
    register: async function (payload) {
      const res = await api.request({
        url: `/api/insert`,
        method: "POST",
        data: payload,
      });
      return res;
    },
    getProfileById: async function (payload) {
        const res = await authenticateApi.request({
          url: `/api/getById/${payload}`,
          method: "GET",
        });
        return res;
      },
      changePassword: async function (payload) {
        const res = await authenticateApi.request({
          url: `/api/changePassword`,
          method: "PUT",
          data: payload,
        });
        return res;
      }
    };

    // defining the cancel API object for service
    const cancelApiObject = defineCancelApiObject(service);
