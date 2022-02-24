import axios, {AxiosInstance, AxiosPromise, AxiosRequestHeaders} from "axios";
import { RestError } from "../types";

export const BASE_URL = "http://localhost:5001";

export function promiseWrapper<T>(axiosPromise: AxiosPromise<T>): Promise<T>{
  return new Promise<T>((resolve, reject) => {
    axiosPromise
      .then(it => resolve(it.data))
      .catch(async error => {

        if (error.response) {
          const restError: RestError = {
            errorCode: error.response.status,
            errorMessage: error.response.data.errorMessage
          };

          reject(restError);
        } else {
          reject({
            message: error.message
          });
        }
      });
  });
}

export class RestHandler {
  private readonly http: AxiosInstance;

  public constructor() {
    this.http = axios.create();
    this.setBaseUrl(BASE_URL);
  }

  public setBaseUrl(url: string) {
    this.http.defaults.baseURL = url;
  }

  public setToken(token: string | null) {
    if (token === null) {
      delete this.http.defaults.headers.common["Authorization"];
    } else {
      this.http.defaults.headers.common["Authorization"] = token;
    }
  }

  public get<T>(path: string, params?: AxiosRequestHeaders): Promise<T> {
    return promiseWrapper<T>(this.http.get(path, params));
  }

  public post(path: string, data?: object, params?: AxiosRequestHeaders): Promise<void> {
    return promiseWrapper<void>(this.http.post(path, params));
  }

  public postWithResponse<T>(path: string, data?: object, params?: AxiosRequestHeaders): Promise<T> {
    return promiseWrapper<T>(this.http.post(path, data, params));
  }

  public put<T>(path: string, params?: AxiosRequestHeaders): Promise<T> {
    return promiseWrapper<T>(this.http.put(path, params));
  }

  public delete(path: string, params?: AxiosRequestHeaders): Promise<void> {
    return promiseWrapper<void>(this.http.delete(path, params));
  }
}

export default new RestHandler();