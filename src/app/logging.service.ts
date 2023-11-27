// @Injectable({    providedIn : 'root'})
export class LoggingService {
    lastlog: string

    printLog(message: string) {
        console.log("Last Log ", message);
        console.log(this.lastlog);
        this.lastlog = message;
    }
}