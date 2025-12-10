import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  getHealth() {
    return {
      status: "ok",
      service: "usc-ai-social-work-simulations-api",
      timestamp: new Date().toISOString()
    };
  }
}
