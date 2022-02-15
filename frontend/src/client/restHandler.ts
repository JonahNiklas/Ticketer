import axios, {AxiosInstance, AxiosPromise} from "axios";
import { useAppDispatch } from "../redux/store";


export interface RestError {
  message?: string
  status?: number
}
// can pass in auth header as needed

export class RestHandler {
  private readonly http: AxiosInstance;

  public constructor() {
    this.http = axios.create();
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
}