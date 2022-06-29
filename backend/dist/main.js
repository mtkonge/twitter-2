"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const PORT = 8000;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)(); //create express app
    app.use((0, cors_1.default)()); //enables cors
    app.use(express_1.default.json()); //enables use of json in requests
    app.use(express_1.default.static(__dirname + '/public'));
    app.listen(PORT, () => console.log("express hosted on port:", PORT)); //starts the express app with port PORT
});
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLHNEQUFxRDtBQUVyRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFFbEIsTUFBTSxJQUFJLEdBQUcsR0FBUyxFQUFFO0lBRXBCLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDLENBQUMsb0JBQW9CO0lBQzNDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYztJQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztJQUMxRCxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRS9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLHVDQUF1QztBQUNoSCxDQUFDLENBQUEsQ0FBQTtBQUNELElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzLCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcblxuY29uc3QgUE9SVCA9IDgwMDA7XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zdCBhcHAgPSBleHByZXNzKCk7IC8vY3JlYXRlIGV4cHJlc3MgYXBwXG4gICAgYXBwLnVzZShjb3JzKCkpOyAvL2VuYWJsZXMgY29yc1xuICAgIGFwcC51c2UoZXhwcmVzcy5qc29uKCkpOyAvL2VuYWJsZXMgdXNlIG9mIGpzb24gaW4gcmVxdWVzdHNcbiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljJykpO1xuXG4gICAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiBjb25zb2xlLmxvZyhcImV4cHJlc3MgaG9zdGVkIG9uIHBvcnQ6XCIsIFBPUlQpKSAvL3N0YXJ0cyB0aGUgZXhwcmVzcyBhcHAgd2l0aCBwb3J0IFBPUlRcbn1cbm1haW4oKTsiXX0=