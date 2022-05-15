import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get('api')
  getUser() {
    return [
      {
        id: 1,
        firstName: "Maulana",
        lastName: "Sodiqin",
      },
    ];
  }
}
